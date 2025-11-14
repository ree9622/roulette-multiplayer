/**
 * MultiplayerUI 클래스
 * 멀티플레이어 UI 관리
 *
 * 작성일: 2025-11-13
 * 기능: 방 생성/참가 모달, 참가자 목록 표시
 */

import { Player } from './protocol';
import { PeerManager } from './PeerManager';
import { RoomManager } from './RoomManager';
import { GameSync } from './GameSync';
import { Logger } from '../utils/Logger';

/**
 * MultiplayerUI 클래스
 * 멀티플레이어 관련 모든 UI를 관리
 */
export class MultiplayerUI {
  private peerManager: PeerManager;
  private roomManager: RoomManager;
  private gameSync: GameSync;

  private isInitialized: boolean = false;

  constructor() {
    this.peerManager = new PeerManager();
    this.roomManager = new RoomManager(this.peerManager);
    this.gameSync = new GameSync(this.peerManager, this.roomManager);

    this.setupRoomManagerEvents();
    this.setupGameSyncEvents();
  }

  /**
   * 초기화
   */
  init(): void {
    if (this.isInitialized) return;

    console.log('[MultiplayerUI] 초기화');
    this.setupUI();
    this.isInitialized = true;
  }

  /**
   * UI 설정
   */
  private setupUI(): void {
    // 방 만들기 버튼 이벤트
    const createBtn = document.getElementById('mp-create-room-btn');
    if (createBtn) {
      createBtn.addEventListener('click', () => this.showCreateRoomModal());
    }

    // 방 참가하기 버튼 이벤트
    const joinBtn = document.getElementById('mp-join-room-btn');
    if (joinBtn) {
      joinBtn.addEventListener('click', () => this.showJoinRoomModal());
    }

    // 준비 버튼 이벤트
    const readyBtn = document.getElementById('mp-ready-btn');
    if (readyBtn) {
      readyBtn.addEventListener('click', () => this.toggleReady());
    }

    // 방 나가기 버튼 이벤트
    const leaveBtn = document.getElementById('mp-leave-room-btn');
    if (leaveBtn) {
      leaveBtn.addEventListener('click', () => this.leaveRoom());
    }

    // 이름 변경 버튼 이벤트
    const changeNameBtn = document.getElementById('mp-change-name-btn');
    if (changeNameBtn) {
      changeNameBtn.addEventListener('click', () => this.showChangeNameModal());
    }
  }

  /**
   * RoomManager 이벤트 설정
   */
  private setupRoomManagerEvents(): void {
    this.roomManager.on('playerJoined', (player: Player) => {
      this.updatePlayerList();
    });

    this.roomManager.on('playerLeft', (playerId: string) => {
      this.updatePlayerList();
    });

    this.roomManager.on('playerReady', (playerId: string, isReady: boolean) => {
      this.updatePlayerList();
    });

    this.roomManager.on('allReady', () => {
      this.onAllPlayersReady();
    });
  }

  /**
   * GameSync 이벤트 설정
   */
  private setupGameSyncEvents(): void {
    // 게임 시작 이벤트 (호스트 + 참가자 모두)
    this.gameSync.on('gameStart', (config) => {
      const isHost = this.roomManager.getIsHost();
      console.log('[MultiplayerUI] 게임 시작 신호 수신');

      Logger.info('MultiplayerUI', `[${isHost ? '호스트' : '참가자'}] 게임 시작 이벤트`, {
        randomSeed: config.randomSeed,
        marbles: config.marbles,
        mapIndex: config.mapIndex,
        winnerRank: config.winnerRank,
      });

      // 게임 설정 적용
      const names: string[] = [];
      config.marbles.forEach(marble => {
        const count = marble.count || 1;
        const weight = marble.weight || 1;
        let nameStr = marble.name;
        if (weight > 1) nameStr += `/${weight}`;
        for (let i = 0; i < count; i++) {
          names.push(nameStr);
        }
      });

      Logger.info('MultiplayerUI', '구슬 이름 배열 생성', { names });

      // 2025-11-14: 성능 최적화 - 배치 설정 메서드로 변경
      // 기존: setRandomSeed() → setMapOnly() → setMarbles() → setWinningRank() (물리 엔진 3-4회 재초기화)
      // 개선: batchSetup() 한 번 호출 (물리 엔진 1회 초기화) → 게임 시작 시간 30% 단축
      (window as any).roulette.batchSetup({
        mapIndex: config.mapIndex,
        marbleNames: names,
        winnerRank: config.winnerRank,
        randomSeed: config.randomSeed,
      });
      Logger.info('MultiplayerUI', '배치 설정 완료 (최적화됨)', {
        mapIndex: config.mapIndex,
        marbleCount: names.length,
        winnerRank: config.winnerRank,
      });

      // options도 동기화
      (window as any).options.winningRank = config.winnerRank;

      // 2025-11-14: 빨리감기 제어 권한 설정
      // - 호스트: 제어 가능 (기본값 true 유지)
      // - 참가자: 제어 불가능 (false로 설정하여 클릭 차단)
      const roulette = (window as any).roulette;
      const fastForwarder = roulette.getFastForwarder();
      fastForwarder.setCanControl(isHost);

      // 게임 시작
      roulette.start();
      document.querySelector('#settings')?.classList.add('hide');
    });

    // 게임 종료 이벤트 (참가자만 받음)
    this.gameSync.on('gameEnd', (winners, results) => {
      if (this.roomManager.getIsHost()) return; // 호스트는 이미 자기 결과 있음

      console.log('[MultiplayerUI] 호스트로부터 게임 종료 수신:', winners);
      Logger.info('MultiplayerUI', '호스트 게임 종료 수신', { winners });

      // 강제로 게임 종료 처리 (호스트 결과 따르기)
      const roulette = (window as any).roulette;

      // 게임 강제 종료
      roulette._isRunning = false;

      // 우승자 알림 표시 (fromHost 플래그 추가)
      roulette.dispatchEvent(
        new CustomEvent('goal', {
          detail: {
            winner: winners[0],
            fromHost: true  // 호스트로부터 받은 결과임을 표시
          }
        })
      );

      // 파티클 효과
      roulette._particleManager.shot(
        roulette._renderer.width,
        roulette._renderer.height
      );
    });

    // 빨리감기 이벤트 (참가자만 받음)
    this.gameSync.on('fastForward', (isEnabled: boolean) => {
      if (this.roomManager.getIsHost()) return; // 호스트는 자기가 제어

      console.log('[MultiplayerUI] 호스트 빨리감기 상태:', isEnabled);

      // FastForwader 제어
      const roulette = (window as any).roulette;
      const fastForwarder = roulette.getFastForwarder();
      fastForwarder.setEnabled(isEnabled);
    });
  }

  /**
   * 방 생성 모달 표시 (이름 입력 제거 - 자동으로 "호스트"로 설정)
   */
  private showCreateRoomModal(): void {
    // 이름 입력 없이 바로 방 생성
    this.createRoomDirectly();
  }

  /**
   * 방 생성 (이름 입력 없이 바로 생성)
   */
  private async createRoomDirectly(): Promise<void> {
    const playerName = '호스트'; // 기본 이름

    try {
      const roomId = await this.roomManager.createRoom(playerName);
      this.onRoomCreated(roomId);
    } catch (error) {
      this.showErrorUI(
        '방 생성 실패',
        (error as Error).message,
        () => this.createRoomDirectly() // 재시도
      );
    }
  }

  /**
   * 방 참가 모달 표시
   */
  private showJoinRoomModal(): void {
    const modal = document.getElementById('mp-modal');
    const title = document.getElementById('mp-modal-title');
    const content = document.getElementById('mp-modal-content');

    if (!modal || !title || !content) return;

    title.textContent = '방 참가하기';
    content.innerHTML = `
      <div class="mp-modal-form">
        <label>
          방 코드:
          <input type="text" id="mp-room-code" placeholder="6자리 방 코드" maxlength="6" style="text-transform: uppercase;" autofocus />
        </label>
        <label>
          이름 (선택):
          <input type="text" id="mp-player-name" placeholder="이름 미입력 시 '게스트'로 표시" maxlength="20" />
        </label>
        <button id="mp-join-btn" class="mp-btn-primary">참가하기</button>
        <button id="mp-cancel-btn" class="mp-btn-secondary">취소</button>
      </div>
    `;

    modal.style.display = 'flex';

    // 방 코드 입력란에서 Enter 키 입력 시 참가
    const codeInput = document.getElementById('mp-room-code') as HTMLInputElement;
    codeInput?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        document.getElementById('mp-join-btn')?.click();
      }
    });

    // 이름 입력란에서 Enter 키 입력 시 참가
    const nameInput = document.getElementById('mp-player-name') as HTMLInputElement;
    nameInput?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        document.getElementById('mp-join-btn')?.click();
      }
    });

    // 버튼 이벤트
    document.getElementById('mp-join-btn')?.addEventListener('click', async () => {
      const playerName = nameInput?.value.trim() || '게스트';
      const roomCode = codeInput?.value.trim().toUpperCase();

      if (!roomCode || roomCode.length !== 6) {
        alert('올바른 방 코드를 입력해주세요.');
        return;
      }

      Logger.info('MultiplayerUI', '방 참가 시도', { playerName, roomCode });

      // 로딩 UI 표시
      this.showLoadingUI('방에 연결 중...', '호스트를 찾고 있습니다.');

      // 진행 상황 이벤트 리스너 등록
      const progressHandler = (message: string) => {
        this.updateLoadingMessage(message);
      };
      this.peerManager.on('connectionProgress', progressHandler);

      try {
        await this.roomManager.joinRoom(playerName, roomCode);
        Logger.info('MultiplayerUI', '방 참가 성공', { roomCode });

        this.onRoomJoined(roomCode);
        modal.style.display = 'none';

      } catch (error) {
        Logger.error('MultiplayerUI', '방 참가 실패', error as Error);

        // 에러 UI 표시
        this.showErrorUI(
          '방 참가 실패',
          (error as Error).message,
          () => this.showJoinRoomModal() // 재시도
        );
      }
    });

    document.getElementById('mp-cancel-btn')?.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  /**
   * 이름 변경 모달 표시
   */
  private showChangeNameModal(): void {
    const modal = document.getElementById('mp-modal');
    const title = document.getElementById('mp-modal-title');
    const content = document.getElementById('mp-modal-content');

    if (!modal || !title || !content) return;

    const myPlayer = this.roomManager.getMyPlayer();
    if (!myPlayer) return;

    title.textContent = '이름 변경';
    content.innerHTML = `
      <div class="mp-modal-form">
        <label>
          새 이름:
          <input type="text" id="mp-new-name" placeholder="새 이름을 입력하세요" maxlength="20" value="${myPlayer.name}" autofocus />
        </label>
        <button id="mp-change-name-confirm-btn" class="mp-btn-primary">변경</button>
        <button id="mp-cancel-btn" class="mp-btn-secondary">취소</button>
      </div>
    `;

    modal.style.display = 'flex';

    // 새 이름 입력란에서 Enter 키 입력 시 변경
    const newNameInput = document.getElementById('mp-new-name') as HTMLInputElement;
    newNameInput?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        document.getElementById('mp-change-name-confirm-btn')?.click();
      }
    });

    // 입력란에 포커스 및 전체 선택
    setTimeout(() => {
      newNameInput?.select();
    }, 100);

    // 변경 버튼 이벤트
    document.getElementById('mp-change-name-confirm-btn')?.addEventListener('click', async () => {
      const newName = newNameInput?.value.trim() || '게스트';

      if (newName === myPlayer.name) {
        modal.style.display = 'none';
        return;
      }

      try {
        await this.roomManager.changePlayerName(newName);
        modal.style.display = 'none';
        this.updatePlayerList();
      } catch (error) {
        alert('이름 변경 실패: ' + (error as Error).message);
      }
    });

    document.getElementById('mp-cancel-btn')?.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  /**
   * 방 생성 완료 처리
   * @param roomId 방 코드
   */
  private onRoomCreated(roomId: string): void {
    console.log('[MultiplayerUI] 방 생성 완료:', roomId);

    // 방 정보 패널 표시
    const roomPanel = document.getElementById('mp-room-panel');
    if (roomPanel) {
      roomPanel.style.display = 'block';
    }

    // 방 코드 표시
    const roomCodeEl = document.getElementById('mp-room-code-display');
    if (roomCodeEl) {
      roomCodeEl.textContent = roomId;
    }

    // 복사 버튼 이벤트
    const copyBtn = document.getElementById('mp-copy-room-code');
    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(roomId);
        this.showToast('방 코드가 복사되었습니다!');
      };
    }

    // 참가자 목록 업데이트
    this.updatePlayerList();

    // 초기 버튼 표시
    this.hideMainMenuButtons();
    this.showRoomButtons(true);

    // 구슬 입력란 숨기기
    this.hideMarbleInput();
  }

  /**
   * 방 참가 완료 처리
   * @param roomId 방 코드
   */
  private onRoomJoined(roomId: string): void {
    console.log('[MultiplayerUI] 방 참가 완료:', roomId);

    // 방 정보 패널 표시
    const roomPanel = document.getElementById('mp-room-panel');
    if (roomPanel) {
      roomPanel.style.display = 'block';
    }

    // 방 코드 표시
    const roomCodeEl = document.getElementById('mp-room-code-display');
    if (roomCodeEl) {
      roomCodeEl.textContent = roomId;
    }

    // 참가자 목록 업데이트
    this.updatePlayerList();

    // 초기 버튼 표시
    this.hideMainMenuButtons();
    this.showRoomButtons(false);

    // 구슬 입력란 숨기기
    this.hideMarbleInput();
  }

  /**
   * 참가자 목록 업데이트
   */
  private updatePlayerList(): void {
    const playerListEl = document.getElementById('mp-player-list');
    if (!playerListEl) return;

    const players = this.roomManager.getPlayers();
    const myPlayer = this.roomManager.getMyPlayer();

    playerListEl.innerHTML = players
      .map(player => {
        const hostBadge = player.isHost ? '<span class="mp-badge-host">👑</span>' : '';
        const readyBadge = player.isReady ? '<span class="mp-badge-ready">🟢</span>' : '<span class="mp-badge-not-ready">🔴</span>';
        const isMe = player.id === myPlayer?.id ? '<span class="mp-badge-me">(나)</span>' : '';

        return `
          <div class="mp-player-item">
            <span class="mp-player-name">${hostBadge} ${player.name} ${isMe}</span>
            <span class="mp-player-status">${readyBadge}</span>
          </div>
        `;
      })
      .join('');

    // 준비 버튼 상태 업데이트
    this.updateReadyButton();
  }

  /**
   * 준비 버튼 상태 업데이트
   */
  private updateReadyButton(): void {
    const readyBtn = document.getElementById('mp-ready-btn');
    if (!readyBtn) return;

    const myPlayer = this.roomManager.getMyPlayer();
    if (!myPlayer || myPlayer.isHost) {
      readyBtn.style.display = 'none';
      return;
    }

    readyBtn.style.display = 'block';
    readyBtn.textContent = myPlayer.isReady ? '준비 취소' : '준비';
    readyBtn.className = myPlayer.isReady ? 'mp-btn-secondary' : 'mp-btn-primary';
  }

  /**
   * 준비 상태 토글
   */
  private toggleReady(): void {
    this.roomManager.toggleReady();
  }

  /**
   * 모든 참가자 준비 완료
   */
  private onAllPlayersReady(): void {
    console.log('[MultiplayerUI] 모든 참가자 준비 완료');

    // 호스트인 경우 시작 버튼 활성화
    if (this.roomManager.getIsHost()) {
      const startBtn = document.getElementById('start');
      if (startBtn) {
        startBtn.removeAttribute('disabled');
        startBtn.style.opacity = '1';
        startBtn.style.cursor = 'pointer';
      }
    }
  }

  /**
   * 방 나가기
   */
  private leaveRoom(): void {
    if (confirm('정말 방을 나가시겠습니까?')) {
      this.roomManager.leaveRoom();

      // UI 초기화
      const roomPanel = document.getElementById('mp-room-panel');
      if (roomPanel) {
        roomPanel.style.display = 'none';
      }

      this.showMainMenuButtons();
      this.hideRoomButtons();
      this.showMarbleInput(); // 구슬 입력란 다시 표시
    }
  }

  /**
   * 메인 메뉴 버튼 숨기기
   */
  private hideMainMenuButtons(): void {
    const createBtn = document.getElementById('mp-create-room-btn');
    const joinBtn = document.getElementById('mp-join-room-btn');

    if (createBtn) createBtn.style.display = 'none';
    if (joinBtn) joinBtn.style.display = 'none';
  }

  /**
   * 메인 메뉴 버튼 표시
   */
  private showMainMenuButtons(): void {
    const createBtn = document.getElementById('mp-create-room-btn');
    const joinBtn = document.getElementById('mp-join-room-btn');

    if (createBtn) createBtn.style.display = 'block';
    if (joinBtn) joinBtn.style.display = 'block';
  }

  /**
   * 룸 버튼 표시
   * @param isHost 호스트 여부
   */
  private showRoomButtons(isHost: boolean): void {
    const readyBtn = document.getElementById('mp-ready-btn');
    const leaveBtn = document.getElementById('mp-leave-room-btn');

    if (readyBtn) readyBtn.style.display = isHost ? 'none' : 'block';
    if (leaveBtn) leaveBtn.style.display = 'block';
  }

  /**
   * 룸 버튼 숨기기
   */
  private hideRoomButtons(): void {
    const readyBtn = document.getElementById('mp-ready-btn');
    const leaveBtn = document.getElementById('mp-leave-room-btn');

    if (readyBtn) readyBtn.style.display = 'none';
    if (leaveBtn) leaveBtn.style.display = 'none';
  }

  /**
   * 구슬 입력란 숨기기 (멀티플레이어 모드용)
   */
  private hideMarbleInput(): void {
    // 구슬 입력란 섹션에 mp-mode 클래스 추가 (CSS로 선택적 숨김)
    const marbleSection = document.querySelector('.left') as HTMLElement;
    if (marbleSection) {
      marbleSection.classList.add('mp-mode');
    }

    // 대신 참가자 안내 메시지 표시
    const roomPanel = document.getElementById('mp-room-panel');
    if (roomPanel && !document.getElementById('mp-marble-info')) {
      const infoDiv = document.createElement('div');
      infoDiv.id = 'mp-marble-info';
      infoDiv.style.cssText = 'padding: 10px; margin: 10px 0; background: rgba(255, 255, 255, 0.1); border-radius: 8px; text-align: center;';
      infoDiv.innerHTML = '<p style="margin: 0; color: #fff;">✨ 참가자 이름으로 게임이 진행됩니다</p>';
      roomPanel.appendChild(infoDiv);
    }
  }

  /**
   * 구슬 입력란 다시 표시
   */
  private showMarbleInput(): void {
    const marbleSection = document.querySelector('.left') as HTMLElement;
    if (marbleSection) {
      marbleSection.classList.remove('mp-mode');
    }

    // 안내 메시지 제거
    const infoDiv = document.getElementById('mp-marble-info');
    if (infoDiv) {
      infoDiv.remove();
    }
  }

  /**
   * 로딩 UI 표시
   * @param title 로딩 제목
   * @param message 로딩 메시지
   */
  private showLoadingUI(title: string, message: string): void {
    const modal = document.getElementById('mp-modal');
    const titleEl = document.getElementById('mp-modal-title');
    const content = document.getElementById('mp-modal-content');

    if (!modal || !titleEl || !content) return;

    titleEl.textContent = title;
    content.innerHTML = `
      <div class="mp-loading">
        <div class="mp-spinner"></div>
        <p id="mp-loading-message" class="mp-loading-message">${message}</p>
      </div>
    `;

    modal.style.display = 'flex';
  }

  /**
   * 로딩 메시지 업데이트
   * @param message 새 메시지
   */
  private updateLoadingMessage(message: string): void {
    const messageEl = document.getElementById('mp-loading-message');
    if (messageEl) {
      messageEl.textContent = message;
      Logger.debug('MultiplayerUI', '로딩 메시지 업데이트', { message });
    }
  }

  /**
   * 에러 UI 표시
   * @param title 에러 제목
   * @param message 에러 메시지
   * @param onRetry 재시도 콜백
   */
  private showErrorUI(title: string, message: string, onRetry?: () => void): void {
    const modal = document.getElementById('mp-modal');
    const titleEl = document.getElementById('mp-modal-title');
    const content = document.getElementById('mp-modal-content');

    if (!modal || !titleEl || !content) return;

    titleEl.textContent = title;
    content.innerHTML = `
      <div class="mp-error">
        <p class="mp-error-message">❌ ${message}</p>
        <div class="mp-error-actions">
          ${onRetry ? '<button id="mp-retry-btn" class="mp-btn-primary">다시 시도</button>' : ''}
          <button id="mp-error-close-btn" class="mp-btn-secondary">닫기</button>
        </div>
        <div class="mp-error-logs">
          <button id="mp-download-logs-btn" class="mp-btn-small">로그 다운로드</button>
        </div>
      </div>
    `;

    modal.style.display = 'flex';

    // 재시도 버튼 이벤트
    if (onRetry) {
      document.getElementById('mp-retry-btn')?.addEventListener('click', () => {
        modal.style.display = 'none';
        onRetry();
      });
    }

    // 닫기 버튼 이벤트
    document.getElementById('mp-error-close-btn')?.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // 로그 다운로드 버튼 이벤트
    document.getElementById('mp-download-logs-btn')?.addEventListener('click', () => {
      Logger.downloadLogs();
    });
  }

  /**
   * 토스트 메시지 표시
   * @param message 표시할 메시지
   * @param duration 표시 시간 (ms, 기본 2000ms)
   */
  private showToast(message: string, duration: number = 2000): void {
    // 기존 토스트가 있으면 제거
    const existingToast = document.getElementById('mp-toast');
    if (existingToast) {
      existingToast.remove();
    }

    // 토스트 엘리먼트 생성
    const toast = document.createElement('div');
    toast.id = 'mp-toast';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      z-index: 10000;
      animation: mp-toast-fadein 0.3s ease-in-out;
    `;

    // 애니메이션 스타일 추가
    if (!document.getElementById('mp-toast-style')) {
      const style = document.createElement('style');
      style.id = 'mp-toast-style';
      style.textContent = `
        @keyframes mp-toast-fadein {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        @keyframes mp-toast-fadeout {
          from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          to {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
        }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    // 지정된 시간 후 페이드아웃 후 제거
    setTimeout(() => {
      toast.style.animation = 'mp-toast-fadeout 0.3s ease-in-out';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // Getter 메서드들

  getPeerManager(): PeerManager {
    return this.peerManager;
  }

  getRoomManager(): RoomManager {
    return this.roomManager;
  }

  getGameSync(): GameSync {
    return this.gameSync;
  }
}
