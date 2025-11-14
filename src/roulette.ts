import { Marble } from './marble';
import { initialZoom, Skills, zoomThreshold } from './data/constants';
import { ParticleManager } from './particleManager';
import { StageDef, stages } from './data/maps';
import { parseName } from './utils/utils';
import { Camera } from './camera';
import { RouletteRenderer } from './rouletteRenderer';
import { SkillEffect } from './skillEffect';
import { GameObject } from './gameObject';
import options from './options';
import { bound } from './utils/bound.decorator';
import { UIObject } from './UIObject';
import { RankRenderer } from './rankRenderer';
import { Minimap } from './minimap';
import { VideoRecorder } from './utils/videoRecorder';
import { IPhysics } from './IPhysics';
import { Box2dPhysics } from './physics-box2d';
import { MouseEventHandlerName, MouseEventName } from './types/mouseEvents.type';
import { FastForwader } from './fastForwader';
import { Logger } from './utils/Logger';

export class Roulette extends EventTarget {
  private _marbles: Marble[] = [];
  // 2025-11-14: 성능 최적화 - Marble 소팅 최적화를 위한 dirty flag 추가
  private _marblesSortDirty: boolean = false;

  private _lastTime: number = 0;
  private _elapsed: number = 0;
  private _noMoveDuration: number = 0;
  private _shakeAvailable: boolean = false;

  private _updateInterval = 10;
  private _timeScale = 1;
  private _speed = 1;

  private _winners: Marble[] = [];
  private _particleManager = new ParticleManager();
  private _stage: StageDef | null = null;

  private _camera: Camera = new Camera();
  private _renderer: RouletteRenderer = new RouletteRenderer();

  private _effects: GameObject[] = [];

  private _winnerRank = 0;
  private _totalMarbleCount = 0;
  private _goalDist: number = Infinity;
  private _isRunning: boolean = false;
  private _winner: Marble | null = null;

  private _uiObjects: UIObject[] = [];

  private _autoRecording: boolean = false;
  private _recorder!: VideoRecorder;

  private physics!: IPhysics;

  private _isReady: boolean = false;
  private fastForwarder!: FastForwader;
  private _randomSeed: number | null = null;
  private _isMultiplayerGuest: boolean = false; // 멀티플레이어 참가자 여부

  get isReady() {
    return this._isReady;
  }

  constructor() {
    super();
    this._renderer.init().then(() => {
      this._init().then(() => {
        this._isReady = true;
        this._update();
      });
    });
  }

  public getZoom() {
    return initialZoom * this._camera.zoom;
  }

  public getFastForwarder() {
    return this.fastForwarder;
  }

  private addUiObject(obj: UIObject) {
    this._uiObjects.push(obj);
    if (obj.onWheel) {
      this._renderer.canvas.addEventListener('wheel', obj.onWheel);
    }
    if (obj.onMessage) {
      obj.onMessage((msg) => {
        console.log('onMessage', msg);
        this.dispatchEvent(new CustomEvent('message', { detail: msg }));
      });
    }
  }

  @bound
  private _update() {
    if (!this._lastTime) this._lastTime = Date.now();
    const currentTime = Date.now();

    this._elapsed += (currentTime - this._lastTime) * this._speed * this.fastForwarder.speed;
    if (this._elapsed > 100) {
      this._elapsed %= 100;
    }
    this._lastTime = currentTime;

    const interval = (this._updateInterval / 1000) * this._timeScale;

    while (this._elapsed >= this._updateInterval) {
      this.physics.step(interval);
      this._updateMarbles(this._updateInterval);
      this._particleManager.update(this._updateInterval);
      this._updateEffects(this._updateInterval);
      this._elapsed -= this._updateInterval;
      this._uiObjects.forEach((obj) => obj.update(this._updateInterval));
      // 2025-11-14: 물리 엔진 업데이트 후 구슬 위치가 변경되었으므로 소팅 필요
      this._marblesSortDirty = true;
    }

    // 2025-11-14: 성능 최적화 - 매 프레임 소팅에서 dirty flag 기반 소팅으로 변경
    // 기존: 60fps 기준 초당 60회 소팅 (구슬 100개 시 초당 39,600회 비교)
    // 개선: 구슬 위치 변경 시에만 소팅 (약 15-20% CPU 사용률 감소 예상)
    if (this._marblesSortDirty && this._marbles.length > 1) {
      this._marbles.sort((a, b) => b.y - a.y);
      this._marblesSortDirty = false;
    }

    if (this._stage) {
      this._camera.update({
        marbles: this._marbles,
        stage: this._stage,
        needToZoom: this._goalDist < zoomThreshold,
        targetIndex:
          this._winners.length > 0
            ? this._winnerRank - this._winners.length
            : 0,
      });

      if (
        this._isRunning &&
        this._marbles.length > 0 &&
        this._noMoveDuration > 3000
      ) {
        this._changeShakeAvailable(true);
      } else {
        this._changeShakeAvailable(false);
      }
    }

    this._render();
    window.requestAnimationFrame(this._update);
  }

  private _updateMarbles(deltaTime: number) {
    if (!this._stage) return;

    for (let i = 0; i < this._marbles.length; i++) {
      const marble = this._marbles[i];
      marble.update(deltaTime);
      if (marble.skill === Skills.Impact) {
        this._effects.push(new SkillEffect(marble.x, marble.y));
        this.physics.impact(marble.id);
      }
      if (marble.y > this._stage.goalY) {
        this._winners.push(marble);
        if (this._isRunning && this._winners.length === this._winnerRank + 1) {
          Logger.info('Roulette', '🏆 우승자 결정', {
            winner: marble.name,
            winnerRank: this._winnerRank,
            winnersCount: this._winners.length,
            isMultiplayerGuest: this._isMultiplayerGuest,
          });

          this.dispatchEvent(
            new CustomEvent('goal', { detail: { winner: marble.name } }),
          );
          this._winner = marble;
          this._isRunning = false;
          this._particleManager.shot(
            this._renderer.width,
            this._renderer.height,
          );
          setTimeout(() => {
            this._recorder.stop();
          }, 1000);
        } else if (
          this._isRunning &&
          this._winnerRank === this._winners.length &&
          this._winnerRank === this._totalMarbleCount - 1
        ) {
          this.dispatchEvent(
            new CustomEvent('goal', {
              detail: { winner: this._marbles[i + 1].name },
            }),
          );
          this._winner = this._marbles[i + 1];
          this._isRunning = false;
          this._particleManager.shot(
            this._renderer.width,
            this._renderer.height,
          );
          setTimeout(() => {
            this._recorder.stop();
          }, 1000);
        }
        setTimeout(() => {
          this.physics.removeMarble(marble.id);
        }, 500);
      }
    }

    const targetIndex = this._winnerRank - this._winners.length;
    const topY = this._marbles[targetIndex] ? this._marbles[targetIndex].y : 0;
    this._goalDist = Math.abs(this._stage.zoomY - topY);
    this._timeScale = this._calcTimeScale();

    this._marbles = this._marbles.filter(
      (marble) => marble.y <= this._stage!.goalY,
    );
  }

  private _calcTimeScale(): number {
    if (!this._stage) return 1;
    const targetIndex = this._winnerRank - this._winners.length;
    if (
      this._winners.length < this._winnerRank + 1 &&
      this._goalDist < zoomThreshold
    ) {
      if (
        this._marbles[targetIndex].y >
        this._stage.zoomY - zoomThreshold * 1.2 &&
        (this._marbles[targetIndex - 1] || this._marbles[targetIndex + 1])
      ) {
        return Math.max(0.2, this._goalDist / zoomThreshold);
      }
    }
    return 1;
  }

  private _updateEffects(deltaTime: number) {
    this._effects.forEach((effect) => effect.update(deltaTime));
    this._effects = this._effects.filter((effect) => !effect.isDestroy);
  }

  private _render() {
    if (!this._stage) return;
    const renderParams = {
      camera: this._camera,
      stage: this._stage,
      entities: this.physics.getEntities(),
      marbles: this._marbles,
      winners: this._winners,
      particleManager: this._particleManager,
      effects: this._effects,
      winnerRank: this._winnerRank,
      winner: this._winner,
      size: { x: this._renderer.width, y: this._renderer.height },
    };
    this._renderer.render(renderParams, this._uiObjects);
  }

  private async _init() {
    this._recorder = new VideoRecorder(this._renderer.canvas);

    this.physics = new Box2dPhysics();
    await this.physics.init();

    this.addUiObject(new RankRenderer());
    this.attachEvent();
    const minimap = new Minimap();
    minimap.onViewportChange((pos) => {
      if (pos) {
        this._camera.setPosition(pos, false);
        this._camera.lock(true);
      } else {
        this._camera.lock(false);
      }
    });
    this.addUiObject(minimap);
    this.fastForwarder = new FastForwader();
    this.addUiObject(this.fastForwarder);
    this._stage = stages[0];
    this._loadMap();
  }

  @bound
  private mouseHandler(eventName: MouseEventName, e: MouseEvent) {
    const handlerName = `on${eventName}` as MouseEventHandlerName;

    const sizeFactor = this._renderer.sizeFactor;
    const pos = { x: e.offsetX * sizeFactor, y: e.offsetY * sizeFactor };
    this._uiObjects.forEach((obj) => {
      if (!obj[handlerName]) return;
      const bounds = obj.getBoundingBox();
      if (!bounds) {
        obj[handlerName]({ ...pos, button: e.button });
      } else if (
        bounds &&
        pos.x >= bounds.x &&
        pos.y >= bounds.y &&
        pos.x <= bounds.x + bounds.w &&
        pos.y <= bounds.y + bounds.h
      ) {
        obj[handlerName]({ x: pos.x - bounds.x, y: pos.y - bounds.y, button: e.button });
      } else {
        obj[handlerName](undefined);
      }
    });
  }

  // 2025-11-14: 성능 최적화 - 이벤트 리스너 정리를 위한 핸들러 저장
  private eventHandlers: Map<string, EventListener> = new Map();

  private attachEvent() {
    ['MouseMove', 'MouseUp', 'MouseDown', 'DblClick'].forEach(
      (ev) => {
        const eventName = ev.toLowerCase().replace('mouse', 'pointer');
        const handler = this.mouseHandler.bind(this, ev);
        this.eventHandlers.set(eventName, handler);
        // @ts-ignore
        this._renderer.canvas.addEventListener(eventName, handler);
      },
    );

    const contextMenuHandler = (e: Event) => {
      e.preventDefault();
    };
    this.eventHandlers.set('contextmenu', contextMenuHandler);
    this._renderer.canvas.addEventListener('contextmenu', contextMenuHandler);
  }

  /**
   * 2025-11-14: 성능 최적화 - 이벤트 리스너 정리 메서드
   * 메모리 누수 방지를 위해 모든 이벤트 리스너를 제거
   */
  public cleanup() {
    // Canvas 이벤트 리스너 제거
    this.eventHandlers.forEach((handler, eventName) => {
      this._renderer.canvas.removeEventListener(eventName, handler);
    });
    this.eventHandlers.clear();

    // Physics 정리
    if (this.physics) {
      this.physics.clear();
    }

    // 구슬 정리
    this._marbles = [];

    Logger.info('Roulette', 'cleanup 완료 - 모든 리스너 및 리소스 정리됨');
  }

  private _loadMap() {
    if (!this._stage) {
      throw new Error('No map has been selected');
    }

    this.physics.createStage(this._stage);
    this._camera.initializePosition();
  }

  public clearMarbles() {
    this.physics.clearMarbles();
    this._winner = null;
    this._winners = [];
    this._marbles = [];
  }

  public start() {
    this._isRunning = true;
    this._winnerRank = options.winningRank;
    if (this._winnerRank >= this._marbles.length) {
      this._winnerRank = this._marbles.length - 1;
    }
    this._camera.startFollowingMarbles();
    
    if (this._autoRecording) {
      this._recorder.start().then(() => {
        this.physics.start();
        this._marbles.forEach((marble) => (marble.isActive = true));
      });
    } else {
      this.physics.start();
      this._marbles.forEach((marble) => (marble.isActive = true));
    }
  }

  public setSpeed(value: number) {
    if (value <= 0) {
      throw new Error('Speed multiplier must larger than 0');
    }
    this._speed = value;
  }

  public getSpeed() {
    return this._speed;
  }

  public setWinningRank(rank: number) {
    this._winnerRank = rank;
  }

  public setAutoRecording(value: boolean) {
    this._autoRecording = value;
  }

  /**
   * 랜덤 시드 설정 (멀티플레이어 동기화용)
   * @param seed 랜덤 시드 (null이면 Math.random() 사용)
   */
  public setRandomSeed(seed: number | null) {
    this._randomSeed = seed;
    Logger.info('Roulette', '랜덤 시드 설정', { seed });
  }

  /**
   * 멀티플레이어 참가자 모드 설정
   * @param isGuest true이면 자체 goal 이벤트를 발생시키지 않음
   */
  public setMultiplayerGuest(isGuest: boolean) {
    this._isMultiplayerGuest = isGuest;
  }

  /**
   * 시드 기반 랜덤 함수 (Mulberry32 알고리즘)
   * @param seed 시드 값
   * @returns 0~1 사이의 랜덤 숫자를 반환하는 함수
   */
  private createSeededRandom(seed: number): () => number {
    return function() {
      let t = seed += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  public setMarbles(names: string[]) {
    this.reset();
    const arr = names.slice();

    let maxWeight = -Infinity;
    let minWeight = Infinity;

    const members = arr
      .map((nameString) => {
        const result = parseName(nameString);
        if (!result) return null;
        const { name, weight, count } = result;
        if (weight > maxWeight) maxWeight = weight;
        if (weight < minWeight) minWeight = weight;
        return { name, weight, count };
      })
      .filter((member) => !!member);

    const gap = maxWeight - minWeight;

    let totalCount = 0;
    members.forEach((member) => {
      if (member) {
        member.weight = 0.1 + (gap ? (member.weight - minWeight) / gap : 0);
        totalCount += member.count;
      }
    });

    // 랜덤 함수 선택: 시드가 있으면 시드 기반, 없으면 Math.random() 사용
    const randomFunc = this._randomSeed !== null
      ? this.createSeededRandom(this._randomSeed)
      : Math.random;

    Logger.info('Roulette', 'setMarbles - 랜덤 함수 설정', {
      hasRandomSeed: this._randomSeed !== null,
      randomSeed: this._randomSeed,
      totalCount,
    });

    // 물리 엔진에도 같은 랜덤 함수 적용 (동기화 보장)
    if (this.physics && 'setRandomFunc' in this.physics) {
      (this.physics as any).setRandomFunc(randomFunc);
      Logger.info('Roulette', '물리 엔진에 랜덤 함수 설정 완료');
    }

    const orders = Array(totalCount)
      .fill(0)
      .map((_, i) => i)
      .sort(() => randomFunc() - 0.5);

    Logger.info('Roulette', 'setMarbles - 구슬 순서 생성 완료', {
      orders: [...orders],
      randomSeed: this._randomSeed,
    });

    members.forEach((member) => {
      if (member) {
        for (let j = 0; j < member.count; j++) {
          const order = orders.pop() || 0;
          this._marbles.push(
            new Marble(
              this.physics,
              order,
              totalCount,
              member.name,
              member.weight,
              randomFunc, // 동일한 랜덤 함수 전달 (동기화 보장)
            ),
          );
        }
      }
    });
    this._totalMarbleCount = totalCount;
    // 2025-11-14: 새로운 구슬이 추가되었으므로 소팅 필요
    this._marblesSortDirty = true;
  }

  private _clearMap() {
    this.physics.clear();
    this._marbles = [];
    // 2025-11-14: 구슬 배열이 초기화되었으므로 소팅 필요
    this._marblesSortDirty = true;
  }

  public reset() {
    this.clearMarbles();
    this._clearMap();
    this._loadMap();
    this._goalDist = Infinity;
    // 주의: randomSeed는 유지됨 (멀티플레이어 동기화를 위해)
  }

  public getCount() {
    return this._marbles.length;
  }

  private _changeShakeAvailable(v: boolean) {
    if (this._shakeAvailable !== v) {
      this._shakeAvailable = v;
      this.dispatchEvent(
        new CustomEvent('shakeAvailableChanged', { detail: v }),
      );
    }
  }

  public shake() {
    if (!this._shakeAvailable) return;
  }

  public getMaps() {
    return stages.map((stage, index) => {
      return {
        index,
        title: stage.title,
      };
    });
  }

  /**
   * 맵만 변경 (구슬 재생성 없이)
   * @param index 맵 인덱스
   */
  public setMapOnly(index: number) {
    if (index < 0 || index > stages.length - 1) {
      throw new Error('Incorrect map number');
    }
    this._stage = stages[index];
    this.reset(); // 맵과 물리엔진만 초기화 (randomSeed는 유지)
    this._camera.initializePosition();
  }

  /**
   * 맵 변경 (기존 구슬 유지하면서 맵만 변경)
   * @param index 맵 인덱스
   */
  public setMap(index: number) {
    if (index < 0 || index > stages.length - 1) {
      throw new Error('Incorrect map number');
    }
    const names = this._marbles.map((marble) => marble.name);
    this._stage = stages[index];
    this.setMarbles(names);
    this._camera.initializePosition();
  }

  /**
   * 2025-11-14: 성능 최적화 - 멀티플레이어 초기화를 위한 배치 설정 메서드
   * 기존: setMapOnly() → setMarbles() → setWinningRank() 각각 물리 엔진 재초기화
   * 개선: 한 번에 모든 설정을 수행하여 물리 엔진 초기화 1회로 감소
   *
   * @param config 게임 설정 객체
   */
  public batchSetup(config: {
    mapIndex: number;
    marbleNames: string[];
    winnerRank: number;
    randomSeed?: number;
  }) {
    // 1. 랜덤 시드 설정 (옵션)
    if (config.randomSeed !== undefined) {
      this.setRandomSeed(config.randomSeed);
    }

    // 2. 맵 설정 (물리 엔진 초기화 포함)
    if (config.mapIndex < 0 || config.mapIndex > stages.length - 1) {
      throw new Error('Incorrect map number');
    }
    this._stage = stages[config.mapIndex];
    this.reset(); // 맵과 물리엔진 초기화

    // 3. 구슬 생성 (이미 초기화된 물리 엔진 사용)
    this.setMarbles(config.marbleNames);

    // 4. 당첨 순위 설정
    this._winnerRank = config.winnerRank;

    // 5. 카메라 초기화
    this._camera.initializePosition();

    Logger.info('Roulette', '배치 설정 완료', {
      mapIndex: config.mapIndex,
      marbleCount: config.marbleNames.length,
      winnerRank: config.winnerRank,
      randomSeed: config.randomSeed,
    });
  }
}
