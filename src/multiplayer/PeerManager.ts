/**
 * PeerManager 클래스
 * PeerJS를 사용한 P2P 연결 관리
 *
 * 작성일: 2025-11-13
 * 기능: Peer 생성, 연결 관리, 메시지 송수신
 */

import Peer, { DataConnection } from 'peerjs';
import { Message } from './protocol';
import { Logger } from '../utils/Logger';

/**
 * Peer 이벤트 타입 정의
 */
export interface PeerManagerEvents {
  open: (peerId: string) => void;          // Peer 생성 완료
  connection: (conn: DataConnection) => void; // 새 연결 수신
  data: (data: Message, conn: DataConnection) => void; // 데이터 수신
  close: (conn: DataConnection) => void;   // 연결 종료
  error: (error: Error) => void;           // 에러 발생
  disconnected: () => void;                // Peer 서버 연결 끊김
  connectionProgress: (message: string) => void; // 연결 진행 상황
}

/**
 * PeerManager 클래스
 * P2P 연결 생성 및 관리를 담당
 */
export class PeerManager {
  private peer: Peer | null = null;        // Peer 인스턴스
  private connections: Map<string, DataConnection> = new Map(); // 연결 맵 (peerId -> connection)
  private eventHandlers: Map<keyof PeerManagerEvents, Array<any>> = new Map(); // 이벤트 핸들러 배열 (여러 리스너 지원)
  private reconnectAttempts: number = 0;   // 재연결 시도 횟수
  private maxReconnectAttempts: number = 5; // 최대 재연결 시도 횟수

  /**
   * Peer 생성 (호스트용)
   * @param customId 사용자 지정 ID (선택)
   * @returns Promise<string> 생성된 Peer ID
   */
  async createPeer(customId?: string): Promise<string> {
    Logger.info('PeerManager', 'Peer 생성 시작', { customId });

    return new Promise((resolve, reject) => {
      try {
        // Peer 인스턴스 생성
        // 무료 공개 PeerJS 서버 사용 (0.peerjs.com - 공식 서버)
        this.peer = new Peer(customId, {
          host: '0.peerjs.com',
          port: 443,
          path: '/',
          secure: true,
          config: {
            // STUN 서버 설정 (NAT 통과용)
            iceServers: [
              { urls: 'stun:stun.l.google.com:19302' },
              { urls: 'stun:stun1.l.google.com:19302' }
            ]
          }
        });

        // Peer 생성 완료 이벤트
        this.peer.on('open', (id: string) => {
          Logger.info('PeerManager', 'Peer 생성 완료', { peerId: id });
          console.log('[PeerManager] Peer 생성 완료:', id);
          this.reconnectAttempts = 0; // 재연결 카운터 초기화
          this.emit('open', id);
          resolve(id);
        });

        // 새 연결 수신 이벤트 (호스트만)
        this.peer.on('connection', (conn: DataConnection) => {
          Logger.info('PeerManager', '새 연결 수신', { peerId: conn.peer });
          console.log('[PeerManager] 새 연결 수신:', conn.peer);
          this.handleConnection(conn);
          this.emit('connection', conn);
        });

        // 연결 끊김 이벤트
        this.peer.on('disconnected', () => {
          Logger.warn('PeerManager', 'Peer 서버 연결 끊김');
          console.warn('[PeerManager] Peer 서버 연결 끊김');
          this.emit('disconnected');
          this.attemptReconnect();
        });

        // 에러 이벤트
        this.peer.on('error', (error: Error) => {
          Logger.error('PeerManager', 'Peer 에러', error);
          console.error('[PeerManager] Peer 에러:', error);
          this.emit('error', error);

          // 특정 에러의 경우 reject
          if (error.message.includes('ID is taken')) {
            reject(new Error('이미 사용 중인 방 코드입니다.'));
          }
        });

      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * 호스트에 연결 (참가자용) - 재시도 지원
   * @param hostId 호스트 Peer ID
   * @param maxRetries 최대 재시도 횟수 (기본: 3회)
   * @returns Promise<DataConnection> 연결 객체
   */
  async connectToHost(hostId: string, maxRetries: number = 3): Promise<DataConnection> {
    Logger.info('PeerManager', '호스트 연결 시도 시작', { hostId, maxRetries });

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        Logger.info('PeerManager', `연결 시도 ${attempt}/${maxRetries}`, { hostId });
        this.emit('connectionProgress', `방에 연결 중... (${attempt}/${maxRetries})`);

        const conn = await this.attemptConnection(hostId, 30000); // 30초 타임아웃
        Logger.info('PeerManager', '호스트 연결 성공', { hostId, attempt });
        return conn;

      } catch (error) {
        Logger.warn('PeerManager', `연결 시도 ${attempt} 실패`, { hostId, error: (error as Error).message });

        if (attempt === maxRetries) {
          Logger.error('PeerManager', '모든 연결 시도 실패', error as Error);
          throw error;
        }

        // 재시도 전 대기 (2초 * 시도 횟수)
        const delay = 2000 * attempt;
        Logger.info('PeerManager', `${delay}ms 후 재시도`, { attempt });
        this.emit('connectionProgress', `재연결 중... (${attempt + 1}/${maxRetries})`);
        await this.delay(delay);
      }
    }

    throw new Error('연결 실패');
  }

  /**
   * 단일 연결 시도
   * @param hostId 호스트 Peer ID
   * @param timeout 타임아웃 (ms)
   * @returns Promise<DataConnection> 연결 객체
   */
  private attemptConnection(hostId: string, timeout: number): Promise<DataConnection> {
    return new Promise((resolve, reject) => {
      if (!this.peer) {
        reject(new Error('Peer가 생성되지 않았습니다.'));
        return;
      }

      try {
        // 호스트에 연결
        const conn = this.peer.connect(hostId, {
          reliable: true, // 신뢰성 있는 연결 (순서 보장, 재전송)
          serialization: 'json' // JSON 직렬화
        });

        // 연결 성공 이벤트
        conn.on('open', () => {
          Logger.info('PeerManager', '호스트 연결 수립 완료', { hostId });
          console.log('[PeerManager] 호스트 연결 성공:', hostId);
          this.handleConnection(conn);
          resolve(conn);
        });

        // 연결 실패 이벤트
        conn.on('error', (error: Error) => {
          Logger.error('PeerManager', '연결 에러', error);
          console.error('[PeerManager] 연결 실패:', error);
          reject(error);
        });

        // 타임아웃 설정
        setTimeout(() => {
          if (!conn.open) {
            const timeoutError = new Error(`연결 시간 초과 (${timeout}ms)`);
            Logger.warn('PeerManager', '연결 타임아웃', { hostId, timeout });
            reject(timeoutError);
          }
        }, timeout);

      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * 지연 유틸리티
   * @param ms 지연 시간 (ms)
   * @returns Promise<void>
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * 연결 처리 (공통)
   * @param conn 연결 객체
   */
  private handleConnection(conn: DataConnection): void {
    // 연결 맵에 추가
    this.connections.set(conn.peer, conn);

    // 데이터 수신 이벤트
    conn.on('data', (data: any) => {
      try {
        const message = data as Message;
        console.log('[PeerManager] 데이터 수신:', message.type, 'from', conn.peer);
        this.emit('data', message, conn);
      } catch (error) {
        console.error('[PeerManager] 데이터 파싱 실패:', error);
      }
    });

    // 연결 종료 이벤트
    conn.on('close', () => {
      console.log('[PeerManager] 연결 종료:', conn.peer);
      this.connections.delete(conn.peer);
      this.emit('close', conn);
    });

    // 에러 이벤트
    conn.on('error', (error: Error) => {
      console.error('[PeerManager] 연결 에러:', error);
      this.emit('error', error);
    });
  }

  /**
   * 메시지 전송 (특정 연결)
   * @param peerId 대상 Peer ID
   * @param message 메시지 객체
   */
  send(peerId: string, message: Message): void {
    const conn = this.connections.get(peerId);
    if (conn && conn.open) {
      try {
        conn.send(message);
        console.log('[PeerManager] 메시지 전송:', message.type, 'to', peerId);
      } catch (error) {
        console.error('[PeerManager] 메시지 전송 실패:', error);
      }
    } else {
      console.warn('[PeerManager] 연결을 찾을 수 없음:', peerId);
    }
  }

  /**
   * 메시지 브로드캐스트 (모든 연결)
   * @param message 메시지 객체
   * @param excludePeerId 제외할 Peer ID (선택)
   */
  broadcast(message: Message, excludePeerId?: string): void {
    console.log('[PeerManager] 메시지 브로드캐스트:', message.type, '(', this.connections.size, '명)');

    this.connections.forEach((conn, peerId) => {
      if (peerId !== excludePeerId && conn.open) {
        try {
          conn.send(message);
        } catch (error) {
          console.error('[PeerManager] 브로드캐스트 실패:', peerId, error);
        }
      }
    });
  }

  /**
   * 특정 연결 종료
   * @param peerId 대상 Peer ID
   */
  disconnect(peerId: string): void {
    const conn = this.connections.get(peerId);
    if (conn) {
      conn.close();
      this.connections.delete(peerId);
      console.log('[PeerManager] 연결 종료:', peerId);
    }
  }

  /**
   * 모든 연결 종료
   */
  disconnectAll(): void {
    console.log('[PeerManager] 모든 연결 종료');
    this.connections.forEach((conn) => {
      conn.close();
    });
    this.connections.clear();
  }

  /**
   * Peer 종료
   */
  destroy(): void {
    console.log('[PeerManager] Peer 종료');
    this.disconnectAll();

    if (this.peer) {
      this.peer.destroy();
      this.peer = null;
    }

    this.eventHandlers.clear();
  }

  /**
   * 재연결 시도
   */
  private attemptReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('[PeerManager] 최대 재연결 시도 횟수 초과');
      this.emit('error', new Error('서버 연결 실패'));
      return;
    }

    this.reconnectAttempts++;
    console.log(`[PeerManager] 재연결 시도 (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);

    if (this.peer && !this.peer.destroyed) {
      setTimeout(() => {
        this.peer?.reconnect();
      }, 1000 * this.reconnectAttempts); // 지수 백오프
    }
  }

  /**
   * 이벤트 핸들러 등록 (여러 핸들러 지원)
   * @param event 이벤트 이름
   * @param handler 핸들러 함수
   */
  on<K extends keyof PeerManagerEvents>(
    event: K,
    handler: PeerManagerEvents[K]
  ): void {
    if (!this.eventHandlers.has(event)) {
      this.eventHandlers.set(event, []);
    }
    this.eventHandlers.get(event)!.push(handler);
  }

  /**
   * 이벤트 발생 (모든 핸들러 호출)
   * @param event 이벤트 이름
   * @param args 인자
   */
  private emit<K extends keyof PeerManagerEvents>(
    event: K,
    ...args: Parameters<PeerManagerEvents[K]>
  ): void {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      handlers.forEach(handler => {
        try {
          (handler as any)(...args);
        } catch (error) {
          console.error(`[PeerManager] 이벤트 핸들러 에러 (${event}):`, error);
        }
      });
    }
  }

  /**
   * Peer ID 조회
   * @returns Peer ID 또는 null
   */
  getPeerId(): string | null {
    return this.peer?.id || null;
  }

  /**
   * 연결 수 조회
   * @returns 활성 연결 수
   */
  getConnectionCount(): number {
    return this.connections.size;
  }

  /**
   * 연결된 Peer ID 목록 조회
   * @returns Peer ID 배열
   */
  getConnectedPeerIds(): string[] {
    return Array.from(this.connections.keys());
  }

  /**
   * 특정 Peer가 연결되어 있는지 확인
   * @param peerId Peer ID
   * @returns 연결 여부
   */
  isConnected(peerId: string): boolean {
    const conn = this.connections.get(peerId);
    return conn ? conn.open : false;
  }
}
