/**
 * EChartsFetcher - 主获取器类
 * 从 ECharts 官网获取物料数据的核心类
 * 参考旧项目的 DataFetcher.js + ConcurrencyController.js
 */

import { EventEmitter } from 'events';
import type {
  FetcherOptions,
  BatchOptions,
  SaveOptions,
  BaseData,
  OptionDetail,
  FetchResult,
  FetchProgress,
  FetchError,
  UpdateInfo,
  SaveResult,
  VersionInfo,
  Metadata,
  DataSource,
  Locale,
} from './types.js';
import { CacheManager } from './cache-manager.js';
import { ConcurrentDownloader } from './downloader.js';
import { DataParser } from './parser.js';
import { DataCompressor } from './compressor.js';
import { ECHARTS_API, DEFAULT_CONFIG, DEFAULT_DATA_SOURCE, GLOBAL_OPTION_KEYS, BOX_OPTION_KEYS, getDataSource } from './constants.js';
import { promises as fs } from 'fs';
import { join } from 'path';

export class EChartsFetcher extends EventEmitter {
  private options: Required<Omit<FetcherOptions, 'proxy' | 'locale' | 'requestDelay'>> & { proxy?: string; locale: Locale; requestDelay: number };
  private cacheManager: CacheManager;

  constructor(options: FetcherOptions = {}) {
    super();
    
    this.options = {
      source: options.source || 'official',
      locale: options.locale || 'zh-CN',
      cacheDir: options.cacheDir || DEFAULT_CONFIG.cacheDir,
      cacheEnabled: options.cacheEnabled ?? DEFAULT_CONFIG.cacheEnabled,
      concurrency: options.concurrency || DEFAULT_CONFIG.concurrency,
      retries: options.retries || DEFAULT_CONFIG.retries,
      retryDelay: options.retryDelay || DEFAULT_CONFIG.retryDelay,
      timeout: options.timeout || DEFAULT_CONFIG.timeout,
      requestDelay: options.requestDelay || 0,
      compress: options.compress || DEFAULT_CONFIG.compress,
      proxy: options.proxy,
    };

    this.cacheManager = new CacheManager({
      cacheDir: this.options.cacheDir,
      compress: this.options.compress,
    });
  }

  /**
   * 初始化
   */
  async init(): Promise<void> {
    await this.cacheManager.init();
  }

  /**
   * 获取基础数据（option 大纲 + type 类型树）
   * @param force 是否强制更新（忽略缓存）
   */
  async fetchBaseData(force = false): Promise<BaseData> {
    this.emit('progress', {
      phase: 'metadata',
      current: 0,
      total: 2,
    } as FetchProgress);

    try {
      let option: Record<string, unknown> | undefined;
      let type: Record<string, unknown> | undefined;
      let fromCache = false;

      // 检查缓存
      if (!force && this.options.cacheEnabled) {
        const cachedOption = await this.cacheManager.get('option');
        const cachedType = await this.cacheManager.get('type');

        if (cachedOption && cachedType) {
          option = cachedOption as Record<string, unknown>;
          type = cachedType as Record<string, unknown>;
          fromCache = true;
        }
      }

      // 如果没有缓存或强制更新，则从远程获取
      if (!fromCache || !option || !type) {
        const dataSource = this.getDataSource();
        const downloader = new ConcurrentDownloader({
          concurrency: 2, // 基础数据只需要2个请求
          retryCount: this.options.retries,
          retryDelay: this.options.retryDelay,
          timeout: this.options.timeout,
          proxy: this.options.proxy,
          requestDelay: this.options.requestDelay,
        });

        // 下载选项大纲
        this.emit('progress', {
          phase: 'metadata',
          current: 0,
          total: 2,
          item: 'option-outline',
        } as FetchProgress);

        const optionUrl = dataSource.baseUrl + dataSource.optionOutlinePath;
        const optionResult = await downloader.download(optionUrl);
        option = DataParser.parseOptionOutline(optionResult.data);

        // 下载类型定义
        this.emit('progress', {
          phase: 'metadata',
          current: 1,
          total: 2,
          item: 'type-tree',
        } as FetchProgress);

        const typeUrl = dataSource.baseUrl + dataSource.optionTypesPath;
        const typeResult = await downloader.download(typeUrl);
        type = DataParser.parseTypeTree(typeResult.data);

        // 保存到缓存
        if (this.options.cacheEnabled) {
          await this.cacheManager.set('option', option);
          await this.cacheManager.set('type', type);
          
          // 更新版本信息
          await this.cacheManager.setVersion({
            version: 'unknown', // 可以从 option 中解析
            lastUpdated: new Date().toISOString(),
            source: typeof this.options.source === 'string' 
              ? this.options.source 
              : this.options.source.name,
          });
        }
      }

      this.emit('progress', {
        phase: 'metadata',
        current: 2,
        total: 2,
      } as FetchProgress);

      if (!option || !type) {
        throw new Error('Failed to fetch base data: option or type is undefined');
      }

      return {
        option: option as BaseData['option'],
        type: type as BaseData['type'],
        timestamp: Date.now(),
      };
    } catch (error) {
      this.emit('error', {
        phase: 'metadata',
        error: error as Error,
        retryCount: 0,
      } as FetchError);
      throw error;
    }
  }

  /**
   * 批量获取选项详情
   * @param keys 选项键列表
   * @param batchOptions 批处理选项
   */
  async *fetchOptionsBatch(
    keys: string[],
    batchOptions: BatchOptions = {}
  ): AsyncGenerator<FetchResult, void, unknown> {
    const batchConcurrency = batchOptions.concurrency || this.options.concurrency;
    const retryCount = batchOptions.retryCount || this.options.retries;
    const retryDelay = batchOptions.retryDelay || this.options.retryDelay;
    const timeout = batchOptions.timeout || this.options.timeout;

    // 过滤 keys
    let filteredKeys = keys;
    if (batchOptions.filter?.include) {
      filteredKeys = filteredKeys.filter(k => batchOptions.filter!.include!.includes(k));
    }
    if (batchOptions.filter?.exclude) {
      filteredKeys = filteredKeys.filter(k => !batchOptions.filter!.exclude!.includes(k));
    }

    const dataSource = this.getDataSource();
    const downloader = new ConcurrentDownloader({
      concurrency: batchConcurrency,
      retryCount,
      retryDelay,
      timeout,
      proxy: this.options.proxy,
      requestDelay: this.options.requestDelay,
    });

    let completed = 0;
    const total = filteredKeys.length;

    this.emit('progress', {
      phase: 'option-details',
      current: 0,
      total,
    } as FetchProgress);

    // 顺序处理每个键（简化版本，保证yield能正常工作）
    for (const key of filteredKeys) {
      const startTime = Date.now();

      try {
        // 检查缓存
        if (this.options.cacheEnabled) {
          const cached = await this.cacheManager.get(key);
          if (cached) {
            completed++;
            this.emit('progress', {
              phase: 'option-details',
              current: completed,
              total,
              item: key,
            } as FetchProgress);

            const result: FetchResult = {
              key,
              data: cached as OptionDetail,
              fromCache: true,
              duration: Date.now() - startTime,
            };

            this.emit('result', result);
            yield result;
            continue;
          }
        }

        // 从远程获取
        const url = dataSource.baseUrl + dataSource.optionDetailPath(key);
        const downloadResult = await downloader.download(url);
        const data = DataParser.parseOptionDetail(downloadResult.data, key);

        // 保存到缓存
        if (this.options.cacheEnabled) {
          await this.cacheManager.set(key, data);
        }

        completed++;
        this.emit('progress', {
          phase: 'option-details',
          current: completed,
          total,
          item: key,
        } as FetchProgress);

        const result: FetchResult = {
          key,
          data: data as OptionDetail,
          fromCache: false,
          duration: Date.now() - startTime,
        };

        this.emit('result', result);
        yield result;
      } catch (error) {
        this.emit('error', {
          phase: 'download',
          item: key,
          error: error as Error,
          retryCount,
        } as FetchError);
      }
    }
  }

  /**
   * 获取单个选项详情
   */
  async fetchOptionDetail(key: string): Promise<OptionDetail> {
    const results: FetchResult[] = [];
    
    for await (const result of this.fetchOptionsBatch([key])) {
      results.push(result);
    }

    if (results.length === 0) {
      throw new Error(`Failed to fetch option: ${key}`);
    }

    return results[0].data;
  }

  /**
   * 保存数据到 base 目录
   * @param outputDir 输出目录
   * @param saveOptions 保存选项
   */
  async saveToBase(outputDir: string, saveOptions: SaveOptions = {}): Promise<SaveResult> {
    const startTime = Date.now();
    const format = saveOptions.format || 'mjs';
    const compress = saveOptions.compress || 'none';
    const clean = saveOptions.clean ?? true;

    // 清空目录
    if (clean) {
      try {
        await fs.rm(outputDir, { recursive: true, force: true });
      } catch {
        // 忽略错误
      }
    }

    await fs.mkdir(outputDir, { recursive: true });

    // 创建 compressor
    const compressor = new DataCompressor(compress);
    const files: string[] = [];

    // 获取基础数据
    const baseData = await this.fetchBaseData();

    // 保存 option
    const optionPath = join(outputDir, `option.${compressor.getFileExtension()}`);
    const optionBuffer = compressor.compress(baseData.option);
    await fs.writeFile(optionPath, optionBuffer);
    files.push(optionPath);

    // 保存 type
    const typePath = join(outputDir, `type.${compressor.getFileExtension()}`);
    const typeBuffer = compressor.compress(baseData.type);
    await fs.writeFile(typePath, typeBuffer);
    files.push(typePath);

    // 保存各个选项详情
    const optionsDir = join(outputDir, 'options');
    await fs.mkdir(optionsDir, { recursive: true });

    const keys = this.getOptionKeys(baseData.option);
    
    for await (const result of this.fetchOptionsBatch(keys)) {
      const optionFilePath = join(optionsDir, `${result.key}.${compressor.getFileExtension()}`);
      const optionBuffer = compressor.compress(result.data);
      await fs.writeFile(optionFilePath, optionBuffer);
      files.push(optionFilePath);
    }

    const duration = Date.now() - startTime;

    return {
      outputDir,
      files,
      format,
      compress,
      duration,
    };
  }

  /**
   * 检查更新
   */
  async checkUpdates(): Promise<UpdateInfo> {
    try {
      // 获取本地版本
      const localVersion = await this.cacheManager.getVersion();
      
      // 获取远程基础数据
      const remoteBaseData = await this.fetchBaseData(true); // force
      
      // 获取远程选项列表
      const remoteKeys = this.getOptionKeys(remoteBaseData.option);
      
      // 获取本地缓存的选项
      const localKeys = await this.cacheManager.getCachedOptionKeys();
      
      // 对比
      const added = remoteKeys.filter(k => !localKeys.includes(k));
      const removed = localKeys.filter(k => !remoteKeys.includes(k));
      
      // 检查修改（简单对比缓存时间，实际可能需要对比内容哈希）
      const modified: string[] = [];
      
      return {
        hasUpdate: added.length > 0 || removed.length > 0 || modified.length > 0,
        remoteVersion: 'unknown',
        localVersion: localVersion?.version,
        added,
        modified,
        removed,
      };
    } catch (error) {
      throw new Error(`Failed to check updates: ${error}`);
    }
  }

  /**
   * 获取所有选项 keys
   */
  getOptionKeys(option: Record<string, unknown>): string[] {
    const keys: string[] = [];
    const globalSet = new Set<string>(GLOBAL_OPTION_KEYS);
    const boxSet = new Set<string>(BOX_OPTION_KEYS);

    for (const [key, value] of Object.entries(option)) {
      if (key.startsWith('_')) continue;
      if (globalSet.has(key)) continue;

      if (boxSet.has(key)) {
        // 容器选项需要展开子项
        if (typeof value === 'object' && value !== null) {
          for (const subKey of Object.keys(value)) {
            keys.push(`${key}-${subKey}`);
          }
        }
      } else {
        keys.push(key);
      }
    }

    return keys;
  }

  /**
   * 获取已缓存的选项列表
   */
  async getCachedOptions(): Promise<string[]> {
    return this.cacheManager.getCachedOptionKeys();
  }

  /**
   * 清空缓存
   */
  async clearCache(): Promise<void> {
    await this.cacheManager.clear();
  }

  /**
   * 设置进度回调（简化接口）
   */
  onProgress(callback: (progress: FetchProgress) => void): void {
    this.on('progress', callback);
  }

  /**
   * 设置错误回调（简化接口）
   */
  onError(callback: (error: FetchError) => void): void {
    this.on('error', callback);
  }

  /**
   * 设置结果回调（简化接口）
   */
  onResult(callback: (result: FetchResult) => void): void {
    this.on('result', callback);
  }

  /**
   * 获取数据源
   */
  private getDataSource(): DataSource {
    if (this.options.source === 'official') {
      return getDataSource(this.options.locale);
    }
    return this.options.source;
  }
}

// 默认导出
export default EChartsFetcher;
