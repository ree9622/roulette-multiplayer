/**
 * GameSync 클래스
 * 게임 상태 실시간 동기화
 *
 * 작성일: 2025-11-13
 * 기능: 호스트의 게임 상태를 참가자들과 동기화
 */

import {
  Message,
  MessageType,
  MessageFactory,
  GameConfig,
  GameState,
  MarbleConfig
} from './protocol';
import { PeerManager } from './PeerManager';
import { RoomManager } from './RoomManager';

/**
 * GameSync 이벤트 타입
 */
export interface GameSyncEvents {
  gameStart: (config: GameConfig) => void;   // 게임 시작
  gameEnd: (winners: string[], results: string[]) => void; // 게임 종료
  gamePause: () => void;                      // 게임 일시정지
  gameResume: () => void;                     // 게임 재개
  stateUpdate: (state: GameState) => void;   // 상태 업데이트
  fastForward: (isEnabled: boolean) => void; // 빨리감기
}

/**
 * GameSync 클래스
 * Roulette 게임과 멀티플레이어 시스템을 연결
 */
export class GameSync {
  private peerManager: PeerManager;           // PeerManager 인스턴스
  private roomManager: RoomManager;           // RoomManager 인스턴스
  private eventHandlers: Partial<GameSyncEvents> = {}; // 이벤트 핸들러

  private currentGameState: GameState | null = null; // 현재 게임 상태
  private syncInterval: number | null = null; // 상태 동기화 인터벌
  private syncRate: number = 100;             // 동기화 주기 (ms)

  constructor(peerManager: PeerManager, roomManager: RoomManager) {
    this.peerManager = peerManager;
    this.roomManager = roomManager;

    this.setupPeerManagerEvents();
  }

  /**
   * PeerManager 이벤트 설정
   */
  private setupPeerManagerEvents(): void {
    this.peerManager.on('data', (message: Message) => {
      this.handleMessage(message);
    });
  }

  /**
   * 메시지 처리
   * @param message 수신한 메시지
   */
  private handleMessage(message: Message): void {
    switch (message.type) {
      case MessageType.START_GAME:
        this.handleStartGame(message);
        break;

      case MessageType.GAME_STATE:
        this.handleGameState(message);
        break;

      case MessageType.GAME_END:
        this.handleGameEnd(message);
        break;

      case MessageType.PAUSE_GAME:
        this.emit('gamePause');
        break;

      case MessageType.RESUME_GAME:
        this.emit('gameResume');
        break;

      case MessageType.FAST_FORWARD:
        this.handleFastForward(message);
        break;

      default:
        // GameSync와 관련 없는 메시지는 무시
        break;
    }
  }

  /**
   * 게임 시작 메시지 처리 (참가자만)
   * @param message START_GAME 메시지
   */
  private handleStartGame(message: any): void {
    if (this.roomManager.getIsHost()) return;

    const { config, startTime } = message.payload;
    console.log('[GameSync] 게임 시작 신호 수신');

    // 시작 시간 동기화를 위한 약간의 지연
    const now = Date.now();
    const delay = Math.max(0, startTime - now);

    setTimeout(() => {
      this.emit('gameStart', config);
    }, delay);
  }

  /**
   * 게임 상태 업데이트 처리 (참가자만)
   * @param message GAME_STATE 메시지
   */
  private handleGameState(message: any): void {
    if (this.roomManager.getIsHost()) return;

    const { state } = message.payload;
    this.currentGameState = state;
    this.emit('stateUpdate', state);
  }

  /**
   * 게임 종료 메시지 처리
   * @param message GAME_END 메시지
   */
  private handleGameEnd(message: any): void {
    const { winners, results } = message.payload;
    console.log('[GameSync] 게임 종료:', winners);

    this.stopSync();
    this.emit('gameEnd', winners, results);
  }

  /**
   * 게임 시작 (호스트만)
   * @param marbles 구슬 목록 (parseName 적용 전 문자열 배열)
   * @param mapIndex 맵 인덱스
   * @param winnerRank 당첨 순위
   */
  startGame(marbles: string[], mapIndex: number, winnerRank: number): void {
    if (!this.roomManager.getIsHost()) {
      console.warn('[GameSync] 호스트만 게임을 시작할 수 있습니다.');
      return;
    }

    // 구슬 목록을 MarbleConfig로 변환
    const marbleConfigs: MarbleConfig[] = marbles.map(marbleName => {
      return this.parseMarbleName(marbleName);
    });

    // 랜덤 시드 생성 (모든 참가자가 같은 결과를 얻도록)
    const randomSeed = Date.now();

    const gameConfig: GameConfig = {
      marbles: marbleConfigs,
      mapIndex,
      winnerRank,
      randomSeed
    };

    // 게임 설정 업데이트
    this.roomManager.updateGameConfig(gameConfig);

    // 게임 시작 메시지 브로드캐스트
    const startMessage = MessageFactory.createStartGame(
      this.peerManager.getPeerId()!,
      gameConfig
    );
    this.peerManager.broadcast(startMessage);

    // 약간의 지연 후 호스트도 게임 시작
    setTimeout(() => {
      this.emit('gameStart', gameConfig);
    }, 100);

    // 상태 동기화 시작
    this.startSync();
  }

  /**
   * 구슬 이름 파싱 (가중치/개수 포함)
   * @param marbleName 구슬 이름 (예: "이름/2", "이름*3")
   * @returns MarbleConfig 객체
   */
  private parseMarbleName(marbleName: string): MarbleConfig {
    let name = marbleName;
    let weight = 1;
    let count = 1;

    // 가중치 파싱 (/숫자)
    const weightMatch = marbleName.match(/\/(\d+)/);
    if (weightMatch) {
      weight = parseFloat(weightMatch[1]);
      name = name.replace(/\/\d+/, '');
    }

    // 개수 파싱 (*숫자)
    const countMatch = marbleName.match(/\*(\d+)/);
    if (countMatch) {
      count = parseInt(countMatch[1]);
      name = name.replace(/\*\d+/, '');
    }

    return { name: name.trim(), weight, count };
  }

  /**
   * 게임 상태 동기화 시작 (호스트만)
   */
  private startSync(): void {
    if (!this.roomManager.getIsHost()) return;

    // 기존 인터벌 정리
    this.stopSync();

    console.log('[GameSync] 상태 동기화 시작');

    // 주기적으로 게임 상태 브로드캐스트
    this.syncInterval = window.setInterval(() => {
      if (this.currentGameState) {
        const stateMessage: Message = {
          type: MessageType.GAME_STATE,
          timestamp: Date.now(),
          senderId: this.peerManager.getPeerId()!,
          payload: { state: this.currentGameState }
        };
        this.peerManager.broadcast(stateMessage);
      }
    }, this.syncRate);
  }

  /**
   * 게임 상태 동기화 중지
   */
  private stopSync(): void {
    if (this.syncInterval !== null) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
      console.log('[GameSync] 상태 동기화 중지');
    }
  }

  /**
   * 게임 상태 업데이트 (호스트만)
   * @param state 게임 상태
   */
  updateGameState(state: GameState): void {
    if (!this.roomManager.getIsHost()) return;
    this.currentGameState = state;
  }

  /**
   * 게임 종료 (호스트만)
   * @param winners 당첨자 목록
   * @param results 전체 순위
   */
  endGame(winners: string[], results: string[]): void {
    if (!this.roomManager.getIsHost()) {
      console.warn('[GameSync] 호스트만 게임을 종료할 수 있습니다.');
      return;
    }

    console.log('[GameSync] 게임 종료 브로드캐스트');

    const endMessage: Message = {
      type: MessageType.GAME_END,
      timestamp: Date.now(),
      senderId: this.peerManager.getPeerId()!,
      payload: { winners, results }
    };

    this.peerManager.broadcast(endMessage);
    this.stopSync();
    this.emit('gameEnd', winners, results);
  }

  /**
   * 게임 일시정지 (호스트만)
   */
  pauseGame(): void {
    if (!this.roomManager.getIsHost()) {
      console.warn('[GameSync] 호스트만 게임을 일시정지할 수 있습니다.');
      return;
    }

    const pauseMessage: Message = {
      type: MessageType.PAUSE_GAME,
      timestamp: Date.now(),
      senderId: this.peerManager.getPeerId()!,
      payload: {}
    };

    this.peerManager.broadcast(pauseMessage);
    this.emit('gamePause');
  }

  /**
   * 게임 재개 (호스트만)
   */
  resumeGame(): void {
    if (!this.roomManager.getIsHost()) {
      console.warn('[GameSync] 호스트만 게임을 재개할 수 있습니다.');
      return;
    }

    const resumeMessage: Message = {
      type: MessageType.RESUME_GAME,
      timestamp: Date.now(),
      senderId: this.peerManager.getPeerId()!,
      payload: {}
    };

    this.peerManager.broadcast(resumeMessage);
    this.emit('gameResume');
  }

  /**
   * 빨리감기 상태 변경 처리
   * @param message FAST_FORWARD 메시지
   */
  private handleFastForward(message: any): void {
    if (this.roomManager.getIsHost()) return; // 호스트는 자기가 제어

    const { isEnabled } = message.payload;
    console.log('[GameSync] 빨리감기 상태:', isEnabled);
    this.emit('fastForward', isEnabled);
  }

  /**
   * 빨리감기 (호스트만)
   * @param isEnabled 빨리감기 활성화 여부
   */
  setFastForward(isEnabled: boolean): void {
    if (!this.roomManager.getIsHost()) {
      console.warn('[GameSync] 호스트만 빨리감기를 제어할 수 있습니다.');
      return;
    }

    const ffMessage: Message = {
      type: MessageType.FAST_FORWARD,
      timestamp: Date.now(),
      senderId: this.peerManager.getPeerId()!,
      payload: { isEnabled }
    };

    this.peerManager.broadcast(ffMessage);
  }

  /**
   * 동기화 주기 설정
   * @param rate 동기화 주기 (ms)
   */
  setSyncRate(rate: number): void {
    this.syncRate = rate;
    if (this.syncInterval !== null) {
      // 실행 중이면 재시작
      this.stopSync();
      this.startSync();
    }
  }

  /**
   * 정리
   */
  destroy(): void {
    this.stopSync();
    this.eventHandlers = {};
  }

  /**
   * 이벤트 핸들러 등록
   * @param event 이벤트 이름
   * @param handler 핸들러 함수
   */
  on<K extends keyof GameSyncEvents>(
    event: K,
    handler: GameSyncEvents[K]
  ): void {
    this.eventHandlers[event] = handler as any;
  }

  /**
   * 이벤트 발생
   * @param event 이벤트 이름
   * @param args 인자
   */
  private emit<K extends keyof GameSyncEvents>(
    event: K,
    ...args: Parameters<GameSyncEvents[K]>
  ): void {
    const handler = this.eventHandlers[event];
    if (handler) {
      (handler as any)(...args);
    }
  }

  // Getter 메서드들

  getCurrentGameState(): GameState | null {
    return this.currentGameState;
  }

  getIsHost(): boolean {
    return this.roomManager.getIsHost();
  }
}
