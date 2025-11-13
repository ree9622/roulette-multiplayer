import './localization';
import { Roulette } from './roulette';
import options from './options';
import { registerServiceWorker } from './registerServiceWorker';
import { MultiplayerUI } from './multiplayer/MultiplayerUI';


registerServiceWorker();

const roulette = new Roulette();
const multiplayerUI = new MultiplayerUI();

// 멀티플레이어 UI 초기화
document.addEventListener('DOMContentLoaded', () => {
  multiplayerUI.init();
});

// eslint-disable-next-line
(window as any).roulette = roulette;
// eslint-disable-next-line
(window as any).options = options;
// eslint-disable-next-line
(window as any).multiplayerUI = multiplayerUI;
