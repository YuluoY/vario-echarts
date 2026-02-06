/**
 * @vario-echarts/fetcher
 * ECharts 物料数据获取器
 * 
 * 从 Apache ECharts 官网获取配置数据并缓存到本地
 * 
 * @example
 * ```typescript
 * import { EChartsFetcher } from '@vario-echarts/fetcher';
 * 
 * const fetcher = new EChartsFetcher();
 * 
 * // 获取基础数据
 * const baseData = await fetcher.fetchBaseData();
 * 
 * // 批量获取选项
 * for await (const result of fetcher.fetchOptionsBatch(['title', 'legend'])) {
 *   console.log(result.key);
 * }
 * ```
 */

// 核心类
export { EChartsFetcher } from './fetcher.js';
export { CacheManager } from './cache-manager.js';
export { ConcurrentDownloader } from './downloader.js';
export { DataParser } from './parser.js';
export { DataCompressor } from './compressor.js';

// 类型定义
export type {
  // 基础类型
  CompressMode,
  OutputFormat,
  DataSource,
  Locale,
  
  // 配置类型
  FetcherOptions,
  BatchOptions,
  SaveOptions,
  
  // 数据类型
  BaseData,
  OptionOutline,
  OptionNode,
  TypeTree,
  TypeDefinition,
  UIControl,
  OptionDetail,
  
  // 结果类型
  FetchResult,
  FetchProgress,
  FetchError,
  UpdateInfo,
  SaveResult,
  VersionInfo,
  Metadata,
  CacheEntry,
} from './types.js';

// 常量
export {
  ECHARTS_API,
  DEFAULT_DATA_SOURCE,
  GLOBAL_OPTION_KEYS,
  BOX_OPTION_KEYS,
  DEFAULT_CONFIG,
  EXTENSION_MAP,
  getDataSource,
} from './constants.js';

// 版本
export const version = '1.0.0';
