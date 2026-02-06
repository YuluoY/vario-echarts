/**
 * 并发下载器
 * 支持并发控制、重试机制、超时处理
 * 参考旧项目 ConcurrencyController.js 和 DataFetcher.js
 */

import https from 'https';
import http from 'http';
import dns from 'dns';
import { URL } from 'url';

// 强制使用 IPv4 优先，解决部分网络环境下 IPv6 连接超时问题
dns.setDefaultResultOrder('ipv4first');
import type { BatchOptions, FetchError } from './types.js';

// 常见浏览器 User-Agent 列表，用于模拟真实浏览器访问
const USER_AGENTS = [
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/120.0.0.0 Safari/537.36',
];

export interface DownloadResult {
  url: string;
  data: string;
  duration: number;
  fromCache: boolean;
}

export interface DownloadError {
  url: string;
  error: Error;
  retryCount: number;
}

export class ConcurrentDownloader {
  private concurrency: number;
  private retryCount: number;
  private retryDelay: number;
  private timeout: number;
  private proxy?: string;
  private httpAgent: http.Agent;
  private httpsAgent: https.Agent;
  private requestDelay: number; // 请求间隔延迟（毫秒）

  constructor(options: BatchOptions & { proxy?: string; requestDelay?: number }) {
    this.concurrency = options.concurrency || 6;
    this.retryCount = options.retryCount || 3;
    this.retryDelay = options.retryDelay || 1000;
    this.timeout = options.timeout || 30000;
    this.proxy = options.proxy;
    this.requestDelay = options.requestDelay || 0; // 默认无延迟
    this.httpAgent = new http.Agent({ keepAlive: true, maxSockets: this.concurrency });
    this.httpsAgent = new https.Agent({ keepAlive: true, maxSockets: this.concurrency });
  }

  /**
   * 获取随机 User-Agent
   */
  private getRandomUserAgent(): string {
    return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
  }

  /**
   * 获取随机延迟（在基础延迟上增加随机浮动）
   */
  private getRandomDelay(): number {
    if (this.requestDelay <= 0) return 0;
    // 在基础延迟上随机浮动 ±30%
    const variance = this.requestDelay * 0.3;
    return this.requestDelay + (Math.random() * variance * 2 - variance);
  }

  /**
   * 下载单个 URL
   * @param url 要下载的 URL
   * @param retryCount 当前重试次数
   */
  async download(url: string, retryCount = 0): Promise<DownloadResult> {
    const startTime = Date.now();

    // 请求前延迟，避免触发反爬机制
    const delay = this.getRandomDelay();
    if (delay > 0) {
      await this.sleep(delay);
    }

    try {
      const data = await this.fetchWithTimeout(url);
      const duration = Date.now() - startTime;

      return {
        url,
        data,
        duration,
        fromCache: false,
      };
    } catch (error) {
      // 重试逻辑
      if (retryCount < this.retryCount) {
        const delay = this.calculateRetryDelay(retryCount);
        await this.sleep(delay);
        return this.download(url, retryCount + 1);
      }

      throw {
        url,
        error: error as Error,
        retryCount,
      } as DownloadError;
    }
  }

  /**
   * 批量下载
   * @param urls URL 列表
   * @returns 结果数组
   */
  async downloadBatch(urls: string[]): Promise<DownloadResult[]> {
    const results: DownloadResult[] = [];
    const errors: DownloadError[] = [];
    
    // 使用 Promise.all 并发处理
    const batchSize = Math.min(this.concurrency, urls.length);
    
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      
      const batchPromises = batch.map(async (url) => {
        try {
          const result = await this.download(url);
          results.push(result);
          return result;
        } catch (error) {
          const downloadError = error as DownloadError;
          errors.push(downloadError);
          throw downloadError;
        }
      });
      
      await Promise.allSettled(batchPromises);
    }
    
    return results;
  }

  /**
   * 带超时的 HTTP 请求
   */
  private fetchWithTimeout(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const parsedUrl = new URL(url);
      const client = parsedUrl.protocol === 'https:' ? https : http;
      const agent = parsedUrl.protocol === 'https:' ? this.httpsAgent : this.httpAgent;

      const requestOptions: https.RequestOptions = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port,
        path: parsedUrl.pathname + parsedUrl.search,
        method: 'GET',
        family: 4, // 强制使用 IPv4
        headers: {
          'User-Agent': this.getRandomUserAgent(),
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
          'Accept-Encoding': 'identity',
          'Connection': 'keep-alive',
          'Cache-Control': 'no-cache',
        },
        timeout: this.timeout,
        agent,
      };

      // 代理支持
      if (this.proxy) {
        // 简单的代理支持，实际项目中可能需要更复杂的代理处理
        console.warn(`Proxy support is basic. Proxy: ${this.proxy}`);
      }

      const req = client.request(requestOptions, (res) => {
        let data = '';

        // 处理重定向
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          resolve(this.fetchWithTimeout(res.headers.location));
          return;
        }

        // 检查状态码
        if (res.statusCode && res.statusCode >= 400) {
          reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
          return;
        }

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          resolve(data);
        });
      });

      req.on('error', (error) => {
        reject(new Error(`Request failed: ${error.message}`));
      });

      req.setTimeout(this.timeout, () => {
        req.destroy();
        reject(new Error(`Request timeout after ${this.timeout}ms`));
      });

      req.end();
    });
  }

  /**
   * 计算重试延迟（指数退避）
   */
  private calculateRetryDelay(attempt: number): number {
    return this.retryDelay * Math.pow(2, attempt);
  }

  /**
   * 休眠
   */
  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
