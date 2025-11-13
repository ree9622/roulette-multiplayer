/**
 * 멀티플레이어 메시지 프로토콜 정의
 * P2P 통신을 위한 메시지 타입 및 인터페이스
 *
 * 작성일: 2025-11-13
 * 기능: 호스트-참가자 간 실시간 통신 프로토콜
 */

// 메시지 타입 enum
export enum MessageType {
  // 연결 관련
  JOIN_REQUEST = 'JOIN_REQUEST',           // 참가 요청
  JOIN_ACCEPT = 'JOIN_ACCEPT',             // 참가 수락
  JOIN_REJECT = 'JOIN_REJECT',             // 참가 거절
  PLAYER_JOINED = 'PLAYER_JOINED',         // 새 참가자 입장 알림
  PLAYER_LEFT = 'PLAYER_LEFT',             // 참가자 퇴장 알림

  // 참가자 상태 관리
  PLAYER_LIST = 'PLAYER_LIST',             // 참가자 목록 전체 업데이트
  READY_STATE = 'READY_STATE',             // 준비 상태 변경

  // 게임 설정
  GAME_CONFIG = 'GAME_CONFIG',             // 게임 설정 공유 (구슬 목록 등)
  MAP_CHANGE = 'MAP_CHANGE',               // 맵 변경

  // 게임 진행
  START_GAME = 'START_GAME',               // 게임 시작 신호
  GAME_STATE = 'GAME_STATE',               // 게임 진행 상태 업데이트
  GAME_END = 'GAME_END',                   // 게임 종료
  PAUSE_GAME = 'PAUSE_GAME',               // 게임 일시정지
  RESUME_GAME = 'RESUME_GAME',             // 게임 재개

  // 호스트 제어
  KICK_PLAYER = 'KICK_PLAYER',             // 참가자 강퇴

  // 채팅 (선택 기능)
  CHAT_MESSAGE = 'CHAT_MESSAGE',           // 채팅 메시지

  // 에러 처리
  ERROR = 'ERROR'                          // 에러 메시지
}

// 플레이어 정보 인터페이스
export interface Player {
  id: string;                              // Peer ID
  name: string;                            // 플레이어 이름
  isHost: boolean;                         // 호스트 여부
  isReady: boolean;                        // 준비 상태
  joinedAt: number;                        // 입장 시간 (timestamp)
}

// 구슬 설정 인터페이스 (기존 프로젝트와 호환)
export interface MarbleConfig {
  name: string;                            // 구슬 이름
  weight?: number;                         // 가중치 (기본 1)
  count?: number;                          // 개수 (기본 1)
}

// 게임 설정 인터페이스
export interface GameConfig {
  marbles: MarbleConfig[];                 // 구슬 목록
  mapIndex: number;                        // 맵 인덱스
  winnerRank: number;                      // 당첨 순위 (0=1등, -1=꼴등)
  randomSeed?: number;                     // 랜덤 시드 (결과 동기화용)
}

// 게임 상태 인터페이스
export interface GameState {
  isRunning: boolean;                      // 게임 진행 중 여부
  isPaused: boolean;                       // 일시정지 여부
  elapsedTime: number;                     // 경과 시간 (ms)
  winners: string[];                       // 당첨자 목록 (구슬 이름)
  finishedCount: number;                   // 골인한 구슬 수
  totalCount: number;                      // 전체 구슬 수
}

// 베이스 메시지 인터페이스
export interface BaseMessage {
  type: MessageType;                       // 메시지 타입
  timestamp: number;                       // 타임스탬프
  senderId: string;                        // 발신자 ID
}

// 각 메시지 타입별 페이로드 정의

export interface JoinRequestMessage extends BaseMessage {
  type: MessageType.JOIN_REQUEST;
  payload: {
    playerName: string;                    // 참가자 이름
  };
}

export interface JoinAcceptMessage extends BaseMessage {
  type: MessageType.JOIN_ACCEPT;
  payload: {
    roomId: string;                        // 방 ID
    players: Player[];                     // 현재 참가자 목록
    gameConfig?: GameConfig;               // 현재 게임 설정 (있는 경우)
  };
}

export interface JoinRejectMessage extends BaseMessage {
  type: MessageType.JOIN_REJECT;
  payload: {
    reason: string;                        // 거절 사유
  };
}

export interface PlayerJoinedMessage extends BaseMessage {
  type: MessageType.PLAYER_JOINED;
  payload: {
    player: Player;                        // 새로 입장한 참가자
  };
}

export interface PlayerLeftMessage extends BaseMessage {
  type: MessageType.PLAYER_LEFT;
  payload: {
    playerId: string;                      // 퇴장한 참가자 ID
  };
}

export interface PlayerListMessage extends BaseMessage {
  type: MessageType.PLAYER_LIST;
  payload: {
    players: Player[];                     // 전체 참가자 목록
  };
}

export interface ReadyStateMessage extends BaseMessage {
  type: MessageType.READY_STATE;
  payload: {
    playerId: string;                      // 상태 변경한 참가자 ID
    isReady: boolean;                      // 준비 상태
  };
}

export interface GameConfigMessage extends BaseMessage {
  type: MessageType.GAME_CONFIG;
  payload: {
    config: GameConfig;                    // 게임 설정
  };
}

export interface MapChangeMessage extends BaseMessage {
  type: MessageType.MAP_CHANGE;
  payload: {
    mapIndex: number;                      // 새 맵 인덱스
  };
}

export interface StartGameMessage extends BaseMessage {
  type: MessageType.START_GAME;
  payload: {
    config: GameConfig;                    // 최종 게임 설정
    startTime: number;                     // 게임 시작 시간 (동기화용)
  };
}

export interface GameStateMessage extends BaseMessage {
  type: MessageType.GAME_STATE;
  payload: {
    state: GameState;                      // 현재 게임 상태
  };
}

export interface GameEndMessage extends BaseMessage {
  type: MessageType.GAME_END;
  payload: {
    winners: string[];                     // 최종 당첨자 목록
    results: string[];                     // 전체 순위 (구슬 이름 순서)
  };
}

export interface PauseGameMessage extends BaseMessage {
  type: MessageType.PAUSE_GAME;
  payload: {};
}

export interface ResumeGameMessage extends BaseMessage {
  type: MessageType.RESUME_GAME;
  payload: {};
}

export interface KickPlayerMessage extends BaseMessage {
  type: MessageType.KICK_PLAYER;
  payload: {
    playerId: string;                      // 강퇴할 참가자 ID
  };
}

export interface ChatMessage extends BaseMessage {
  type: MessageType.CHAT_MESSAGE;
  payload: {
    message: string;                       // 채팅 메시지
    playerName: string;                    // 발신자 이름
  };
}

export interface ErrorMessage extends BaseMessage {
  type: MessageType.ERROR;
  payload: {
    code: string;                          // 에러 코드
    message: string;                       // 에러 메시지
  };
}

// 모든 메시지 타입의 유니온 타입
export type Message =
  | JoinRequestMessage
  | JoinAcceptMessage
  | JoinRejectMessage
  | PlayerJoinedMessage
  | PlayerLeftMessage
  | PlayerListMessage
  | ReadyStateMessage
  | GameConfigMessage
  | MapChangeMessage
  | StartGameMessage
  | GameStateMessage
  | GameEndMessage
  | PauseGameMessage
  | ResumeGameMessage
  | KickPlayerMessage
  | ChatMessage
  | ErrorMessage;

// 메시지 생성 헬퍼 함수
export class MessageFactory {
  /**
   * 베이스 메시지 생성
   * @param type 메시지 타입
   * @param senderId 발신자 ID
   * @returns 베이스 메시지 객체
   */
  static createBase(type: MessageType, senderId: string): BaseMessage {
    return {
      type,
      timestamp: Date.now(),
      senderId
    };
  }

  /**
   * 참가 요청 메시지 생성
   */
  static createJoinRequest(senderId: string, playerName: string): JoinRequestMessage {
    return {
      ...this.createBase(MessageType.JOIN_REQUEST, senderId),
      type: MessageType.JOIN_REQUEST,
      payload: { playerName }
    };
  }

  /**
   * 참가 수락 메시지 생성
   */
  static createJoinAccept(
    senderId: string,
    roomId: string,
    players: Player[],
    gameConfig?: GameConfig
  ): JoinAcceptMessage {
    return {
      ...this.createBase(MessageType.JOIN_ACCEPT, senderId),
      type: MessageType.JOIN_ACCEPT,
      payload: { roomId, players, gameConfig }
    };
  }

  /**
   * 게임 시작 메시지 생성
   */
  static createStartGame(senderId: string, config: GameConfig): StartGameMessage {
    return {
      ...this.createBase(MessageType.START_GAME, senderId),
      type: MessageType.START_GAME,
      payload: {
        config,
        startTime: Date.now()
      }
    };
  }

  /**
   * 준비 상태 메시지 생성
   */
  static createReadyState(senderId: string, playerId: string, isReady: boolean): ReadyStateMessage {
    return {
      ...this.createBase(MessageType.READY_STATE, senderId),
      type: MessageType.READY_STATE,
      payload: { playerId, isReady }
    };
  }

  /**
   * 게임 설정 메시지 생성
   */
  static createGameConfig(senderId: string, config: GameConfig): GameConfigMessage {
    return {
      ...this.createBase(MessageType.GAME_CONFIG, senderId),
      type: MessageType.GAME_CONFIG,
      payload: { config }
    };
  }

  /**
   * 에러 메시지 생성
   */
  static createError(senderId: string, code: string, message: string): ErrorMessage {
    return {
      ...this.createBase(MessageType.ERROR, senderId),
      type: MessageType.ERROR,
      payload: { code, message }
    };
  }
}
