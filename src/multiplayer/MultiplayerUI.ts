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
    // 게임 시작 이벤트 (참가자만 받음)
    this.gameSync.on('gameStart', (config) => {
      console.log('[MultiplayerUI] 게임 시작 신호 수신');

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

      // 구슬 설정
      (window as any).roulette.setMarbles(names);

      // 맵 설정
      (window as any).roulette.setMap(config.mapIndex);

      // 당첨 순위 설정
      (window as any).options.winningRank = config.winnerRank;
      (window as any).roulette.setWinningRank(config.winnerRank);

      // 랜덤 시드 설정 (같은 결과를 위해)
      if (config.randomSeed) {
        // TODO: Roulette 클래스에 시드 설정 기능 추가 필요
      }

      // 게임 시작
      (window as any).roulette.start();
      document.querySelector('#settings')?.classList.add('hide');
      document.querySelector('#donate')?.classList.add('hide');
    });

    // 게임 종료 이벤트
    this.gameSync.on('gameEnd', (winners, results) => {
      console.log('[MultiplayerUI] 게임 종료:', winners);
    });
  }

  /**
   * 방 생성 모달 표시
   */
  private showCreateRoomModal(): void {
    const modal = document.getElementById('mp-modal');
    const title = document.getElementById('mp-modal-title');
    const content = document.getElementById('mp-modal-content');

    if (!modal || !title || !content) return;

    title.textContent = '방 만들기';
    content.innerHTML = `
      <div class="mp-modal-form">
        <label>
          이름:
          <input type="text" id="mp-player-name" placeholder="이름을 입력하세요" maxlength="20" />
        </label>
        <button id="mp-create-btn" class="mp-btn-primary">방 만들기</button>
        <button id="mp-cancel-btn" class="mp-btn-secondary">취소</button>
      </div>
    `;

    modal.style.display = 'flex';

    // 버튼 이벤트
    document.getElementById('mp-create-btn')?.addEventListener('click', async () => {
      const nameInput = document.getElementById('mp-player-name') as HTMLInputElement;
      const playerName = nameInput?.value.trim();

      if (!playerName) {
        alert('이름을 입력해주세요.');
        return;
      }

      try {
        const roomId = await this.roomManager.createRoom(playerName);
        this.onRoomCreated(roomId);
        modal.style.display = 'none';
      } catch (error) {
        alert('방 생성 실패: ' + (error as Error).message);
      }
    });

    document.getElementById('mp-cancel-btn')?.addEventListener('click', () => {
      modal.style.display = 'none';
    });
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
          이름:
          <input type="text" id="mp-player-name" placeholder="이름을 입력하세요" maxlength="20" />
        </label>
        <label>
          방 코드:
          <input type="text" id="mp-room-code" placeholder="6자리 방 코드" maxlength="6" style="text-transform: uppercase;" />
        </label>
        <button id="mp-join-btn" class="mp-btn-primary">참가하기</button>
        <button id="mp-cancel-btn" class="mp-btn-secondary">취소</button>
      </div>
    `;

    modal.style.display = 'flex';

    // 버튼 이벤트
    document.getElementById('mp-join-btn')?.addEventListener('click', async () => {
      const nameInput = document.getElementById('mp-player-name') as HTMLInputElement;
      const codeInput = document.getElementById('mp-room-code') as HTMLInputElement;

      const playerName = nameInput?.value.trim();
      const roomCode = codeInput?.value.trim().toUpperCase();

      if (!playerName) {
        alert('이름을 입력해주세요.');
        return;
      }

      if (!roomCode || roomCode.length !== 6) {
        alert('올바른 방 코드를 입력해주세요.');
        return;
      }

      try {
        await this.roomManager.joinRoom(playerName, roomCode);
        this.onRoomJoined(roomCode);
        modal.style.display = 'none';
      } catch (error) {
        alert('방 참가 실패: ' + (error as Error).message);
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
        alert('방 코드가 복사되었습니다!');
      };
    }

    // 참가자 목록 업데이트
    this.updatePlayerList();

    // 초기 버튼 표시
    this.hideMainMenuButtons();
    this.showRoomButtons(true);
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
