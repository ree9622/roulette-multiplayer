/**
 * Logger 유틸리티 클래스
 * 브라우저 환경용 로깅 시스템
 *
 * 작성일: 2025-11-13
 * 기능: 콘솔 로그 + localStorage 저장, 로그 레벨 관리, 로그 내보내기
 */

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export interface LogEntry {
  timestamp: number;
  level: LogLevel;
  module: string;
  message: string;
  data?: any;
  error?: Error;
}

export class Logger {
  private static logs: LogEntry[] = [];
  private static maxLogs: number = 1000; // 최대 저장 로그 수
  private static storageKey: string = 'roulette_multiplayer_logs';

  /**
   * DEBUG 레벨 로그
   * @param module 모듈명 (예: 'PeerManager', 'RoomManager')
   * @param message 로그 메시지
   * @param data 추가 데이터 (선택)
   */
  static debug(module: string, message: string, data?: any): void {
    this.log(LogLevel.DEBUG, module, message, data);
  }

  /**
   * INFO 레벨 로그
   * @param module 모듈명
   * @param message 로그 메시지
   * @param data 추가 데이터 (선택)
   */
  static info(module: string, message: string, data?: any): void {
    this.log(LogLevel.INFO, module, message, data);
  }

  /**
   * WARN 레벨 로그
   * @param module 모듈명
   * @param message 로그 메시지
   * @param data 추가 데이터 (선택)
   */
  static warn(module: string, message: string, data?: any): void {
    this.log(LogLevel.WARN, module, message, data);
  }

  /**
   * ERROR 레벨 로그
   * @param module 모듈명
   * @param message 로그 메시지
   * @param error Error 객체 (선택)
   */
  static error(module: string, message: string, error?: Error): void {
    this.log(LogLevel.ERROR, module, message, undefined, error);
  }

  /**
   * 로그 기록 (내부 메서드)
   * @param level 로그 레벨
   * @param module 모듈명
   * @param message 로그 메시지
   * @param data 추가 데이터
   * @param error Error 객체
   */
  private static log(
    level: LogLevel,
    module: string,
    message: string,
    data?: any,
    error?: Error
  ): void {
    const entry: LogEntry = {
      timestamp: Date.now(),
      level,
      module,
      message,
      data,
      error: error ? {
        name: error.name,
        message: error.message,
        stack: error.stack,
      } as any : undefined,
    };

    // 메모리에 저장
    this.logs.push(entry);

    // 최대 개수 초과 시 오래된 로그 제거
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }

    // localStorage에 저장 (에러 무시)
    this.saveToStorage();

    // 콘솔에 출력
    this.printToConsole(entry);
  }

  /**
   * localStorage에 로그 저장
   */
  private static saveToStorage(): void {
    try {
      const recentLogs = this.logs.slice(-100); // 최근 100개만 저장
      localStorage.setItem(this.storageKey, JSON.stringify(recentLogs));
    } catch (err) {
      // localStorage 용량 초과 등의 에러 무시
    }
  }

  /**
   * 콘솔에 로그 출력
   * @param entry 로그 엔트리
   */
  private static printToConsole(entry: LogEntry): void {
    const time = new Date(entry.timestamp).toLocaleTimeString('ko-KR');
    const prefix = `[${time}] [${entry.module}]`;

    switch (entry.level) {
      case LogLevel.DEBUG:
        console.debug(prefix, entry.message, entry.data || '');
        break;
      case LogLevel.INFO:
        console.log(prefix, entry.message, entry.data || '');
        break;
      case LogLevel.WARN:
        console.warn(prefix, entry.message, entry.data || '');
        break;
      case LogLevel.ERROR:
        console.error(prefix, entry.message, entry.error || entry.data || '');
        break;
    }
  }

  /**
   * 모든 로그 내보내기 (JSON 문자열)
   * @returns JSON 형식의 로그
   */
  static exportLogs(): string {
    return JSON.stringify(this.logs, null, 2);
  }

  /**
   * 로그 다운로드
   * @param filename 파일명 (기본: roulette-logs-{timestamp}.json)
   */
  static downloadLogs(filename?: string): void {
    const defaultFilename = `roulette-logs-${Date.now()}.json`;
    const blob = new Blob([this.exportLogs()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || defaultFilename;
    a.click();
    URL.revokeObjectURL(url);
  }

  /**
   * 로그 클리어
   */
  static clearLogs(): void {
    this.logs = [];
    try {
      localStorage.removeItem(this.storageKey);
    } catch (err) {
      // 무시
    }
    console.log('[Logger] 로그가 클리어되었습니다.');
  }

  /**
   * localStorage에서 로그 불러오기
   */
  static loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        this.logs = JSON.parse(stored);
        console.log(`[Logger] ${this.logs.length}개의 로그를 불러왔습니다.`);
      }
    } catch (err) {
      console.error('[Logger] 로그 불러오기 실패:', err);
    }
  }

  /**
   * 현재 로그 개수 조회
   * @returns 로그 개수
   */
  static getLogCount(): number {
    return this.logs.length;
  }
}

// 페이지 로드 시 저장된 로그 불러오기
if (typeof window !== 'undefined') {
  Logger.loadFromStorage();
}
