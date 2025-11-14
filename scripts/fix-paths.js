/**
 * GitHub Pages 배포를 위한 경로 수정 스크립트
 * dist/index.html의 절대 경로를 /roulette-multiplayer/로 변경
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.join(__dirname, '../dist/index.html');
const publicUrl = '/roulette-multiplayer/';

console.log('[fix-paths] HTML 파일 경로 수정 시작...');

// HTML 파일 읽기
let html = fs.readFileSync(htmlPath, 'utf-8');

// importmap의 경로 수정
html = html.replace(
  /"imports":\{([^}]+)\}/,
  (match, imports) => {
    // / 로 시작하는 경로를 찾아서 publicUrl 추가
    const fixed = imports.replace(/":\s*"\/(?!roulette-multiplayer)/g, `":"${publicUrl}`);
    return `"imports":{${fixed}}`;
  }
);

// href, src, content 속성의 절대 경로 수정
// 단, http:// 또는 https:// 로 시작하거나 이미 /roulette-multiplayer/로 시작하는 경로는 제외
html = html.replace(/href="\/(?!roulette-multiplayer|\/|https?:)([^"]+)"/g, `href="${publicUrl}$1"`);
html = html.replace(/src="\/(?!roulette-multiplayer|\/|https?:)([^"]+)"/g, `src="${publicUrl}$1"`);
html = html.replace(/content="\/(?!roulette-multiplayer|\/|https?:)([^"]+)"/g, `content="${publicUrl}$1"`);

// 수정된 내용 저장
fs.writeFileSync(htmlPath, html, 'utf-8');

console.log('[fix-paths] 경로 수정 완료!');
console.log(`[fix-paths] 모든 절대 경로를 ${publicUrl}로 시작하도록 수정했습니다.`);
