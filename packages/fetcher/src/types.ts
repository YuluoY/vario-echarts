/**
 * Fetcher 类型定义
 */

// 压缩模式
export type CompressMode = 'none' | 'zip' | 'brotli' | 'buffer';

// 输出格式
export type OutputFormat = 'cjs' | 'mjs' | 'json';

// 支持的语言
export type Locale = 'zh-CN' | 'en-US';

// 数据源配置
export interface DataSource {
  name: string;
  baseUrl: string;
  locale: Locale;
  optionOutlinePath: string;
  optionTypesPath: string;
  optionDetailPath: (key: string) => string;
}

// Fetcher 配置选项
export interface FetcherOptions {
  // 数据源
  source?: 'official' | DataSource;
  
  // 语言设置
  locale?: Locale;
  
  // 缓存配置
  cacheDir?: string;
  cacheEnabled?: boolean;
  
  // 并发配置
  concurrency?: number;
  retries?: number;
  retryDelay?: number;
  timeout?: number;
  
  // 请求间隔延迟（毫秒），用于避免触发反爬机制
  requestDelay?: number;
  
  // 压缩配置
  compress?: CompressMode;
  
  // 代理配置
  proxy?: string;
}

// 批处理选项
export interface BatchOptions {
  concurrency?: number;
  retryCount?: number;
  retryDelay?: number;
  timeout?: number;
  filter?: {
    include?: string[];
    exclude?: string[];
  };
}

// 保存选项
export interface SaveOptions {
  compress?: CompressMode;
  format?: OutputFormat;
  clean?: boolean;
}

// 基础数据
export interface BaseData {
  option: OptionOutline;
  type: TypeTree;
  version?: string;
  timestamp: number;
}

// 选项树大纲
export interface OptionOutline {
  [key: string]: OptionNode;
}

// 选项节点
export interface OptionNode {
  type: 'option' | 'component' | 'object';
  children?: OptionNode[];
  isArray?: boolean;
  dims?: string[];
}

// 类型树
export interface TypeTree {
  [key: string]: TypeDefinition;
}

// 类型定义
export interface TypeDefinition {
  type?: string | string[];
  default?: any;
  desc?: string;
  options?: string;
  isObject?: boolean;
  isArray?: boolean;
  dims?: string[];
  uiControl?: UIControl;
}

// UI 控制信息
export interface UIControl {
  component?: string;
  props?: Record<string, any>;
}

// 选项详情
export interface OptionDetail {
  __ROOT__: string;
  __UTILS__?: number;
  [key: string]: TypeDefinition | string | number | undefined;
}

// 获取结果
export interface FetchResult {
  key: string;
  data: OptionDetail;
  fromCache: boolean;
  duration: number;
}

// 进度信息
export interface FetchProgress {
  phase: 'metadata' | 'option-list' | 'option-details';
  current: number;
  total: number;
  item?: string;
  speed?: number;
  eta?: number;
}

// 错误信息
export interface FetchError {
  phase: 'metadata' | 'download' | 'parse' | 'cache' | 'save';
  item?: string;
  error: Error;
  retryCount: number;
}

// 更新信息
export interface UpdateInfo {
  hasUpdate: boolean;
  remoteVersion?: string;
  localVersion?: string;
  added?: string[];
  modified?: string[];
  removed?: string[];
}

// 保存结果
export interface SaveResult {
  outputDir: string;
  files: string[];
  format: OutputFormat;
  compress: CompressMode;
  duration: number;
}

// 版本信息
export interface VersionInfo {
  version: string;
  lastUpdated: string;
  source: string;
}

// 元数据
export interface Metadata {
  optionCount: number;
  categories: {
    global: string[];
    box: string[];
    regular: string[];
  };
}

// 缓存条目
export interface CacheEntry {
  key: string;
  data: any;
  timestamp: number;
  size: number;
}
