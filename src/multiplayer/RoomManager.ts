/**
 * RoomManager 클래스
 * 룸 및 참가자 관리
 *
 * 작성일: 2025-11-13
 * 기능: 룸 생성, 참가자 관리, 준비 상태 추적
 */

import { DataConnection } from 'peerjs';
import { Player, GameConfig, Message, MessageType, MessageFactory } from './protocol';
import { PeerManager } from './PeerManager';

/**
 * RoomManager 이벤트 타입
 */
export interface RoomManagerEvents {
  playerJoined: (player: Player) => void;    // 참가자 입장
  playerLeft: (playerId: string) => void;     // 참가자 퇴장
  playerReady: (playerId: string, isReady: boolean) => void; // 준비 상태 변경
  allReady: () => void;                       // 모두 준비 완료
  gameConfigChanged: (config: GameConfig) => void; // 게임 설정 변경
}

/**
 * RoomManager 클래스
 * 호스트와 참가자의 룸 관리 로직을 담당
 */
export class RoomManager {
  private peer

Manager: PeerManager;           // PeerManager 인스턴스
  private roomId: string | null = null;      // 방 ID
  private isHost: boolean = false;           // 호스트 여부
  private players: Map<string, Player> = new Map(); // 참가자 맵
  private currentGameConfig: GameConfig | null = null; // 현재 게임 설정
  private eventHandlers: Partial<RoomManagerEvents> = {}; // 이벤트 핸들러
  private hostConnection: DataConnection | null = null; // 호스트 연결 (참가자용)

  constructor(peerManager: PeerManager) {
    this.peerManager = peerManager;
    this.setupPeerManagerEvents();
  }

  /**
   * PeerManager 이벤트 설정
   */
  private setupPeerManagerEvents(): void {
    // Peer 생성 완료
    this.peerManager.on('open', (peerId: string) => {
      console.log('[RoomManager] Peer 생성 완료:', peerId);
    });

    // 새 연결 수신 (호스트만)
    this.peerManager.on('connection', (conn: DataConnection) => {
      console.log('[RoomManager] 새 연결 수신:', conn.peer);
      // 참가자 정보는 JOIN_REQUEST 메시지를 받을 때 처리
    });

    // 데이터 수신
    this.peerManager.on('data', (message: Message, conn: DataConnection) => {
      this.handleMessage(message, conn);
    });

    // 연결 종료
    this.peerManager.on('close', (conn: DataConnection) => {
      this.handlePlayerLeft(conn.peer);
    });

    // 에러
    this.peerManager.on('error', (error: Error) => {
      console.error('[RoomManager] 에러:', error);
    });
  }

  /**
   * 룸 생성 (호스트용)
   * @param playerName 호스트 이름
   * @param customRoomId 사용자 지정 방 코드 (선택)
   * @returns Promise<string> 방 코드
   */
  async createRoom(playerName: string, customRoomId?: string): Promise<string> {
    try {
      // 방 코드 생성 (6자리 랜덤 코드)
      const roomId = customRoomId || this.generateRoomCode();

      // Peer 생성
      const peerId = await this.peerManager.createPeer(roomId);

      this.roomId = roomId;
      this.isHost = true;

      // 호스트를 참가자 목록에 추가
      const hostPlayer: Player = {
        id: peerId,
        name: playerName,
        isHost: true,
        isReady: true, // 호스트는 항상 준비 상태
        joinedAt: Date.now()
      };
      this.players.set(peerId, hostPlayer);

      console.log('[RoomManager] 룸 생성 완료:', roomId);
      return roomId;

    } catch (error) {
      console.error('[RoomManager] 룸 생성 실패:', error);
      throw error;
    }
  }

  /**
   * 룸 참가 (참가자용)
   * @param playerName 참가자 이름
   * @param roomId 방 코드
   * @returns Promise<Player[]> 현재 참가자 목록
   */
  async joinRoom(playerName: string, roomId: string): Promise<Player[]> {
    try {
      // Peer 생성
      const peerId = await this.peerManager.createPeer();

      // 호스트에 연결
      const conn = await this.peerManager.connectToHost(roomId);
      this.hostConnection = conn;

      this.roomId = roomId;
      this.isHost = false;

      // 참가 요청 메시지 전송
      const joinRequest = MessageFactory.createJoinRequest(peerId, playerName);
      this.peerManager.send(roomId, joinRequest);

      // JOIN_ACCEPT 메시지를 기다림
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error('참가 응답 시간 초과'));
        }, 10000);

        // 임시 핸들러 등록
        const originalHandler = this.eventHandlers.playerJoined;
        this.eventHandlers.playerJoined = (player: Player) => {
          clearTimeout(timeout);
          // 원래 핸들러 복구
          this.eventHandlers.playerJoined = originalHandler;
          resolve(Array.from(this.players.values()));
        };
      });

    } catch (error) {
      console.error('[RoomManager] 룸 참가 실패:', error);
      throw error;
    }
  }

  /**
   * 메시지 처리
   * @param message 수신한 메시지
   * @param conn 연결 객체
   */
  private handleMessage(message: Message, conn: DataConnection): void {
    console.log('[RoomManager] 메시지 수신:', message.type);

    switch (message.type) {
      case MessageType.JOIN_REQUEST:
        this.handleJoinRequest(message, conn);
        break;

      case MessageType.JOIN_ACCEPT:
        this.handleJoinAccept(message);
        break;

      case MessageType.PLAYER_JOINED:
        this.handlePlayerJoined(message);
        break;

      case MessageType.PLAYER_LEFT:
        this.handlePlayerLeft(message.payload.playerId);
        break;

      case MessageType.PLAYER_LIST:
        this.handlePlayerList(message);
        break;

      case MessageType.READY_STATE:
        this.handleReadyState(message);
        break;

      case MessageType.NAME_CHANGE:
        this.handleNameChange(message);
        break;

      case MessageType.GAME_CONFIG:
        this.handleGameConfig(message);
        break;

      case MessageType.KICK_PLAYER:
        this.handleKickPlayer(message);
        break;

      default:
        console.warn('[RoomManager] 처리되지 않은 메시지 타입:', message.type);
    }
  }

  /**
   * 참가 요청 처리 (호스트만)
   * @param message JOIN_REQUEST 메시지
   * @param conn 연결 객체
   */
  private handleJoinRequest(message: any, conn: DataConnection): void {
    if (!this.isHost) return;

    const { playerName } = message.payload;
    const playerId = message.senderId;

    console.log('[RoomManager] 참가 요청:', playerName, playerId);

    // 참가자 추가
    const newPlayer: Player = {
      id: playerId,
      name: playerName,
      isHost: false,
      isReady: false,
      joinedAt: Date.now()
    };
    this.players.set(playerId, newPlayer);

    // JOIN_ACCEPT 메시지 전송
    const acceptMessage = MessageFactory.createJoinAccept(
      this.peerManager.getPeerId()!,
      this.roomId!,
      Array.from(this.players.values()),
      this.currentGameConfig || undefined
    );
    this.peerManager.send(playerId, acceptMessage);

    // 다른 참가자들에게 PLAYER_JOINED 브로드캐스트
    const joinedMessage: Message = {
      type: MessageType.PLAYER_JOINED,
      timestamp: Date.now(),
      senderId: this.peerManager.getPeerId()!,
      payload: { player: newPlayer }
    };
    this.peerManager.broadcast(joinedMessage, playerId);

    // 이벤트 발생
    this.emit('playerJoined', newPlayer);
  }

  /**
   * 참가 수락 처리 (참가자만)
   * @param message JOIN_ACCEPT 메시지
   */
  private handleJoinAccept(message: any): void {
    if (this.isHost) return;

    const { players, gameConfig } = message.payload;
    console.log('[RoomManager] 참가 수락:', players.length, '명');

    // 참가자 목록 업데이트
    this.players.clear();
    players.forEach((player: Player) => {
      this.players.set(player.id, player);
    });

    // 게임 설정 업데이트
    if (gameConfig) {
      this.currentGameConfig = gameConfig;
      this.emit('gameConfigChanged', gameConfig);
    }

    // 자기 자신을 playerJoined 이벤트로 알림 (joinRoom의 Promise resolve용)
    const myPlayer = players.find((p: Player) => p.id === this.peerManager.getPeerId());
    if (myPlayer) {
      this.emit('playerJoined', myPlayer);
    }
  }

  /**
   * 참가자 입장 처리 (참가자만)
   * @param message PLAYER_JOINED 메시지
   */
  private handlePlayerJoined(message: any): void {
    if (this.isHost) return;

    const { player } = message.payload;
    console.log('[RoomManager] 새 참가자 입장:', player.name);

    this.players.set(player.id, player);
    this.emit('playerJoined', player);
  }

  /**
   * 참가자 퇴장 처리
   * @param playerId 퇴장한 참가자 ID
   */
  private handlePlayerLeft(playerId: string): void {
    const player = this.players.get(playerId);
    if (!player) return;

    console.log('[RoomManager] 참가자 퇴장:', player.name);

    this.players.delete(playerId);

    // 호스트인 경우 다른 참가자들에게 알림
    if (this.isHost) {
      const leftMessage: Message = {
        type: MessageType.PLAYER_LEFT,
        timestamp: Date.now(),
        senderId: this.peerManager.getPeerId()!,
        payload: { playerId }
      };
      this.peerManager.broadcast(leftMessage);
    }

    this.emit('playerLeft', playerId);
  }

  /**
   * 참가자 목록 업데이트 처리
   * @param message PLAYER_LIST 메시지
   */
  private handlePlayerList(message: any): void {
    const { players } = message.payload;
    console.log('[RoomManager] 참가자 목록 업데이트:', players.length, '명');

    this.players.clear();
    players.forEach((player: Player) => {
      this.players.set(player.id, player);
    });
  }

  /**
   * 준비 상태 변경 처리
   * @param message READY_STATE 메시지
   */
  private handleReadyState(message: any): void {
    const { playerId, isReady } = message.payload;
    const player = this.players.get(playerId);

    if (player) {
      player.isReady = isReady;
      console.log('[RoomManager] 준비 상태 변경:', player.name, isReady);

      // 이벤트 발생
      this.emit('playerReady', playerId, isReady);

      // 모두 준비되었는지 확인
      if (this.isHost && this.areAllPlayersReady()) {
        this.emit('allReady');
      }
    }
  }

  /**
   * 이름 변경 처리
   * @param message NAME_CHANGE 메시지
   */
  private handleNameChange(message: any): void {
    const { playerId, newName } = message.payload;
    const player = this.players.get(playerId);

    if (player) {
      player.name = newName;
      console.log('[RoomManager] 이름 변경:', playerId, '→', newName);

      // 호스트인 경우 다른 모든 참가자에게 브로드캐스트
      if (this.isHost) {
        this.peerManager.broadcast(message, playerId);
      }

      // 이벤트 발생 (UI 업데이트용)
      this.emit('playerJoined', player);
    }
  }

  /**
   * 게임 설정 변경 처리
   * @param message GAME_CONFIG 메시지
   */
  private handleGameConfig(message: any): void {
    const { config } = message.payload;
    console.log('[RoomManager] 게임 설정 변경');

    this.currentGameConfig = config;
    this.emit('gameConfigChanged', config);
  }

  /**
   * 참가자 강퇴 처리
   * @param message KICK_PLAYER 메시지
   */
  private handleKickPlayer(message: any): void {
    const { playerId } = message.payload;

    // 자기 자신이 강퇴되었는지 확인
    if (playerId === this.peerManager.getPeerId()) {
      console.log('[RoomManager] 강퇴당함');
      this.leaveRoom();
      alert('호스트에 의해 강퇴되었습니다.');
    } else if (this.isHost) {
      // 호스트인 경우 해당 참가자 연결 끊기
      this.peerManager.disconnect(playerId);
      this.handlePlayerLeft(playerId);
    }
  }

  /**
   * 준비 상태 토글 (참가자만)
   */
  toggleReady(): void {
    if (this.isHost) {
      console.warn('[RoomManager] 호스트는 준비 상태를 변경할 수 없습니다.');
      return;
    }

    const myPlayer = this.players.get(this.peerManager.getPeerId()!);
    if (!myPlayer) return;

    const newReadyState = !myPlayer.isReady;
    myPlayer.isReady = newReadyState;

    // 호스트에게 준비 상태 전송
    const readyMessage = MessageFactory.createReadyState(
      this.peerManager.getPeerId()!,
      this.peerManager.getPeerId()!,
      newReadyState
    );
    this.peerManager.send(this.roomId!, readyMessage);

    this.emit('playerReady', myPlayer.id, newReadyState);
  }

  /**
   * 이름 변경
   * @param newName 새 이름
   */
  async changePlayerName(newName: string): Promise<void> {
    const myPeerId = this.peerManager.getPeerId();
    if (!myPeerId) {
      throw new Error('Peer가 초기화되지 않았습니다.');
    }

    const myPlayer = this.players.get(myPeerId);
    if (!myPlayer) {
      throw new Error('플레이어 정보를 찾을 수 없습니다.');
    }

    // 로컬 플레이어 이름 변경
    myPlayer.name = newName;

    // 이름 변경 메시지 전송
    const nameChangeMessage = MessageFactory.createNameChange(
      myPeerId,
      myPeerId,
      newName
    );

    if (this.isHost) {
      // 호스트인 경우 모든 참가자에게 브로드캐스트
      this.peerManager.broadcast(nameChangeMessage);
    } else {
      // 참가자인 경우 호스트에게 전송
      this.peerManager.send(this.roomId!, nameChangeMessage);
    }

    console.log('[RoomManager] 이름 변경:', newName);
  }

  /**
   * 게임 설정 업데이트 (호스트만)
   * @param config 게임 설정
   */
  updateGameConfig(config: GameConfig): void {
    if (!this.isHost) {
      console.warn('[RoomManager] 호스트만 게임 설정을 변경할 수 있습니다.');
      return;
    }

    this.currentGameConfig = config;

    // 모든 참가자에게 브로드캐스트
    const configMessage = MessageFactory.createGameConfig(
      this.peerManager.getPeerId()!,
      config
    );
    this.peerManager.broadcast(configMessage);

    this.emit('gameConfigChanged', config);
  }

  /**
   * 참가자 강퇴 (호스트만)
   * @param playerId 강퇴할 참가자 ID
   */
  kickPlayer(playerId: string): void {
    if (!this.isHost) {
      console.warn('[RoomManager] 호스트만 참가자를 강퇴할 수 있습니다.');
      return;
    }

    const kickMessage: Message = {
      type: MessageType.KICK_PLAYER,
      timestamp: Date.now(),
      senderId: this.peerManager.getPeerId()!,
      payload: { playerId }
    };

    // 해당 참가자에게 강퇴 메시지 전송
    this.peerManager.send(playerId, kickMessage);

    // 연결 끊기
    this.peerManager.disconnect(playerId);
    this.handlePlayerLeft(playerId);
  }

  /**
   * 룸 나가기
   */
  leaveRoom(): void {
    console.log('[RoomManager] 룸 나가기');

    if (this.isHost) {
      // 호스트가 나가면 모든 참가자 연결 끊기
      this.peerManager.disconnectAll();
    } else {
      // 참가자가 나가면 호스트 연결만 끊기
      if (this.hostConnection) {
        this.hostConnection.close();
      }
    }

    this.players.clear();
    this.roomId = null;
    this.isHost = false;
    this.currentGameConfig = null;
  }

  /**
   * 6자리 방 코드 생성
   * @returns 6자리 알파벳 대문자 코드
   */
  private generateRoomCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  /**
   * 모든 참가자가 준비되었는지 확인
   * @returns 모두 준비 여부
   */
  areAllPlayersReady(): boolean {
    if (this.players.size <= 1) return false; // 호스트만 있으면 false

    for (const player of this.players.values()) {
      if (!player.isReady) {
        return false;
      }
    }
    return true;
  }

  /**
   * 이벤트 핸들러 등록
   * @param event 이벤트 이름
   * @param handler 핸들러 함수
   */
  on<K extends keyof RoomManagerEvents>(
    event: K,
    handler: RoomManagerEvents[K]
  ): void {
    this.eventHandlers[event] = handler as any;
  }

  /**
   * 이벤트 발생
   * @param event 이벤트 이름
   * @param args 인자
   */
  private emit<K extends keyof RoomManagerEvents>(
    event: K,
    ...args: Parameters<RoomManagerEvents[K]>
  ): void {
    const handler = this.eventHandlers[event];
    if (handler) {
      (handler as any)(...args);
    }
  }

  // Getter 메서드들

  getRoomId(): string | null {
    return this.roomId;
  }

  getIsHost(): boolean {
    return this.isHost;
  }

  getPlayers(): Player[] {
    return Array.from(this.players.values());
  }

  getPlayerCount(): number {
    return this.players.size;
  }

  getCurrentGameConfig(): GameConfig | null {
    return this.currentGameConfig;
  }

  getMyPlayer(): Player | null {
    const myId = this.peerManager.getPeerId();
    return myId ? this.players.get(myId) || null : null;
  }
}
