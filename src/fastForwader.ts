import { RenderParameters } from './rouletteRenderer';
import { Rect } from './types/rect.type';
import { MouseEventArgs, UIObject } from './UIObject';

// 2025-11-14: 멀티플레이어 빨리감기 동기화 수정
// - 호스트만 빨리감기 버튼을 사용할 수 있도록 제한
// - 참가자가 클릭해도 무시되도록 수정
export class FastForwader implements UIObject {
  private bound: Rect = {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  };
  private icon: HTMLImageElement;
  private canControl: boolean = true; // 빨리감기 제어 가능 여부 (멀티플레이어 참가자는 false)

  constructor() {
    this.icon = new Image();
    this.icon.src = new URL('../assets/images/ff.svg', import.meta.url).toString();

  }

  private isEnabled: boolean = false;

  public get speed(): number {
    return this.isEnabled ? 2 : 1;
  }

  /**
   * 빨리감기 제어 가능 여부 설정 (멀티플레이어용)
   * @param canControl true면 제어 가능, false면 제어 불가 (참가자)
   */
  public setCanControl(canControl: boolean): void {
    this.canControl = canControl;
    // 제어 불가능하면 빨리감기도 비활성화
    if (!canControl) {
      this.isEnabled = false;
    }
  }

  /**
   * 빨리감기 활성화/비활성화 (외부 제어용 - 멀티플레이어 동기화)
   * @param enabled 활성화 여부
   */
  public setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
  }

  /**
   * 현재 빨리감기 상태
   */
  public getEnabled(): boolean {
    return this.isEnabled;
  }

  update(deltaTime: number): void {
  }

  render(ctx: CanvasRenderingContext2D, params: RenderParameters, width: number, height: number): void {
    this.bound.w = width / 2;
    this.bound.h = height / 2;
    this.bound.x = this.bound.w / 2;
    this.bound.y = this.bound.h / 2;

    const centerX = this.bound.x + this.bound.w / 2;
    const centerY = this.bound.y + this.bound.h / 2;

    if (this.isEnabled) {
      ctx.save();
      ctx.strokeStyle = 'white';
      ctx.globalAlpha = 0.5;
      ctx.drawImage(this.icon, centerX - 25, centerY - 25, 25, 25);
      ctx.restore();
    }

  }

  getBoundingBox(): Rect | null {
    return this.bound;
  }

  onMouseDown?(e?: MouseEventArgs): void {
    // 제어 불가능하면 무시 (멀티플레이어 참가자)
    if (!this.canControl) {
      console.log('[FastForwarder] 빨리감기는 호스트만 사용할 수 있습니다.');
      return;
    }
    this.isEnabled = true;
  }

  onMouseUp?(e?: MouseEventArgs): void {
    // 제어 불가능하면 무시 (멀티플레이어 참가자)
    if (!this.canControl) {
      return;
    }
    this.isEnabled = false;
  }
}
