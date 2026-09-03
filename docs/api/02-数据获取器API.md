# Fetcher API 文档

## 核心类

### EChartsFetcher

主获取器类，负责从 ECharts 官网获取物料数据。

```typescript
class EChartsFetcher {
  constructor(options?: FetcherOptions);
  
  // 获取基础数据（option + type）
  async fetchBaseData(force?: boolean): Promise<BaseData>;
  
  // 批量获取选项详情
  async fetchOptionsBatch(
    keys: string[], 
    options?: BatchOptions
  ): AsyncGenerator<FetchResult, void, unknown>;
  
  // 保存数据到 base 目录
  async saveToBase(
    outputDir: string,
    options?: SaveOptions
  ): Promise<SaveResult>;
  
  // 检查更新
  async checkUpdates(): Promise<UpdateInfo>;
  
  // 设置进度回调
  onProgress(callback: (progress: FetchProgress) => void): void;
  
  // 设置错误回调
  onError(callback: (error: FetchError) => void): void;
}
```

### 配置接口

#### FetcherOptions

```typescript
interface FetcherOptions {
  // 数据源配置
  source?: 'official' | DataSource;     // 默认 'official'
  
  // 缓存配置
  cacheDir?: string;                    // 默认 'data/.cache'
  cacheEnabled?: boolean;               // 默认 true
  
  // 并发配置
  concurrency?: number;                 // 默认 6
  retries?: number;                     // 默认 3
  retryDelay?: number;                  // 默认 1000 (ms)
  timeout?: number;                     // 默认 30000 (ms)
  
  // 压缩配置
  compress?: CompressMode;              // 默认 'none'
}
```

#### BatchOptions

```typescript
interface BatchOptions {
  concurrency?: number;                 // 并发数
  retryCount?: number;                  // 重试次数
  retryDelay?: number;                  // 重试延迟 (ms)
  timeout?: number;                     // 超时时间 (ms)
  
  // 过滤配置
  filter?: {
    include?: string[];                 // 仅包含指定选项
    exclude?: string[];                 // 排除指定选项
  };
}
```

#### SaveOptions

```typescript
type CompressMode = 'none' | 'zip' | 'brotli' | 'buffer';
type OutputFormat = 'cjs' | 'mjs' | 'json';

interface SaveOptions {
  compress?: CompressMode;              // 压缩模式
  format?: OutputFormat;                // 输出格式
  clean?: boolean;                      // 清空目标目录
}
```

### 数据类型

#### BaseData

```typescript
interface BaseData {
  option: OptionOutline;                // 选项树大纲
  type: TypeTree;                       // 类型定义树
  version?: string;                     // ECharts 版本
  timestamp: number;                    // 获取时间戳
}

interface OptionOutline {
  [key: string]: OptionNode;
}

interface OptionNode {
  type: 'option' | 'component' | 'object';
  children?: OptionNode[];
  isArray?: boolean;
  dims?: string[];
}

interface TypeTree {
  [key: string]: TypeDefinition;
}

interface TypeDefinition {
  type: string | string[];              // 类型
  default?: any;                        // 默认值
  desc?: string;                        // 描述
  options?: string;                     // 可选值（逗号分隔）
  isObject?: boolean;                   // 是否对象
  isArray?: boolean;                    // 是否数组
  uiControl?: UIControl;                // UI 控制信息
}

interface UIControl {
  component?: string;                   // 组件类型
  props?: Record<string, any>;          // 组件属性
}
```

#### FetchResult

```typescript
interface FetchResult {
  key: string;                          // 选项键名
  data: OptionDetail;                   // 选项详情
  fromCache: boolean;                   // 是否来自缓存
  duration: number;                     // 耗时 (ms)
}

interface OptionDetail {
  __ROOT__: string;                     // 根路径
  [key: string]: TypeDefinition;        // 属性定义
}
```

#### FetchProgress

```typescript
interface FetchProgress {
  phase: 'metadata' | 'option-list' | 'option-details';
  current: number;                      // 当前进度
  total: number;                        // 总数量
  item?: string;                        // 当前项
  speed?: number;                       // 速度 (bytes/s)
  eta?: number;                         // 预计剩余时间 (s)
}
```

#### FetchError

```typescript
interface FetchError {
  phase: 'metadata' | 'download' | 'parse' | 'cache' | 'save';
  item?: string;                        // 出错的选项
  error: Error;                         // 错误对象
  retryCount: number;                   // 已重试次数
}
```

#### UpdateInfo

```typescript
interface UpdateInfo {
  hasUpdate: boolean;                   // 是否有更新
  remoteVersion?: string;               // 远程版本
  localVersion?: string;                // 本地版本
  added?: string[];                     // 新增选项
  modified?: string[];                  // 修改选项
  removed?: string[];                   // 移除选项
}
```

#### SaveResult

```typescript
interface SaveResult {
  outputDir: string;                    // 输出目录
  files: string[];                      // 生成的文件列表
  format: OutputFormat;                 // 格式
  compress: CompressMode;               // 压缩模式
  duration: number;                     // 耗时 (ms)
}
```

## 使用示例

### 基础使用

```typescript
import { EChartsFetcher } from '@vario-echarts/fetcher';

// 创建 fetcher 实例
const fetcher = new EChartsFetcher();

// 获取基础数据
const baseData = await fetcher.fetchBaseData();
console.log(`获取到 ${Object.keys(baseData.option).length} 个选项`);

// 获取单个选项详情
const keys = ['title', 'legend', 'series-line'];
for await (const result of fetcher.fetchOptionsBatch(keys)) {
  console.log(`✓ ${result.key} (${result.duration}ms)`);
}

// 保存到 base 目录
await fetcher.saveToBase('./data/base', {
  compress: 'none',
  format: 'mjs'
});
```

### 带进度监控

```typescript
const fetcher = new EChartsFetcher({
  concurrency: 10,
  retries: 5
});

// 设置进度回调
fetcher.onProgress((progress) => {
  const { phase, current, total, item, eta } = progress;
  const percent = Math.round((current / total) * 100);
  
  process.stdout.write(
    `\r[${phase}] ${item || ''} ${percent}% (${current}/${total}) ETA: ${eta}s`
  );
});

// 设置错误回调
fetcher.onError((error) => {
  console.error(`\n✗ ${error.item}: ${error.error.message}`);
});

// 批量获取
const allKeys = Object.keys((await fetcher.fetchBaseData()).option);
for await (const result of fetcher.fetchOptionsBatch(allKeys)) {
  // 处理结果
}
```

### 强制更新

```typescript
const fetcher = new EChartsFetcher();

// 检查更新
const updateInfo = await fetcher.checkUpdates();
if (updateInfo.hasUpdate) {
  console.log(`发现更新: ${updateInfo.remoteVersion}`);
  console.log(`新增: ${updateInfo.added?.length || 0} 个选项`);
  console.log(`修改: ${updateInfo.modified?.length || 0} 个选项`);
  
  // 强制重新获取
  const baseData = await fetcher.fetchBaseData(true);  // force = true
}
```

### 并发控制

```typescript
const fetcher = new EChartsFetcher({
  concurrency: 8,           // 同时下载 8 个
  retries: 3,               // 失败重试 3 次
  retryDelay: 2000,         // 重试间隔 2 秒
  timeout: 60000            // 超时 60 秒
});

const keys = ['title', 'legend', 'grid', 'xAxis', 'yAxis'];

for await (const result of fetcher.fetchOptionsBatch(keys, {
  concurrency: 5,           // 本次调用使用 5 并发
  filter: {
    exclude: ['animation']  // 排除动画相关选项
  }
})) {
  console.log(result.key);
}
```

### 压缩存储

```typescript
const fetcher = new EChartsFetcher({
  compress: 'zip'           // 默认压缩模式
});

// 获取数据
await fetcher.fetchBaseData(true);

// 保存（使用 zip 压缩）
await fetcher.saveToBase('./data/.cache', {
  compress: 'zip',          // zip 压缩
  format: 'mjs'             // 输出为 ESM 格式
});

// 后续从缓存读取时自动解压
```

### 自定义数据源

```typescript
const customSource: DataSource = {
  name: 'mirror-cn',
  baseUrl: 'https://echarts.apache.org.cn/zh',
  optionOutlinePath: '/documents/option-parts/option-outline.js',
  optionTypesPath: '/documents/option-parts/option.js',
  optionDetailPath: (key: string) => 
    `/documents/option-parts/option.${key}.js`
};

const fetcher = new EChartsFetcher({
  source: customSource
});

const data = await fetcher.fetchBaseData();
```

## 辅助工具

### ConcurrentDownloader

并发下载器，用于底层 HTTP 请求。

```typescript
import { ConcurrentDownloader } from '@vario-echarts/fetcher';

const downloader = new ConcurrentDownloader({
  concurrency: 6,
  retries: 3,
  timeout: 30000
});

// 下载单个 URL
const data = await downloader.download('https://example.com/data.js');

// 批量下载
const urls = ['url1', 'url2', 'url3'];
for await (const result of downloader.downloadBatch(urls)) {
  console.log(result.url, result.data);
}
```

### CacheManager

缓存管理器，用于读写缓存文件。

```typescript
import { CacheManager } from '@vario-echarts/fetcher';

const cache = new CacheManager({
  cacheDir: './data/.cache',
  compress: 'zip'
});

// 写入缓存
await cache.set('title', titleData);

// 读取缓存
const data = await cache.get('title');

// 检查存在
const exists = await cache.has('title');

// 删除缓存
await cache.delete('title');

// 清空缓存
await cache.clear();

// 获取版本
const version = await cache.getVersion();

// 设置版本
await cache.setVersion('5.4.3');
```

### DataCompressor

数据压缩器，支持多种压缩算法。

```typescript
import { DataCompressor } from '@vario-echarts/fetcher';

const compressor = new DataCompressor('zip');

// 压缩
const compressed = await compressor.compress(data);

// 解压
const decompressed = await compressor.decompress(compressed);

// 切换压缩模式
compressor.setMode('brotli');
```

## 错误处理

### 常见错误类型

```typescript
enum FetchErrorType {
  NETWORK_ERROR = 'NETWORK_ERROR',      // 网络错误
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',      // 超时
  PARSE_ERROR = 'PARSE_ERROR',          // 解析错误
  CACHE_ERROR = 'CACHE_ERROR',          // 缓存错误
  VALIDATION_ERROR = 'VALIDATION_ERROR' // 验证错误
}
```

### 错误处理示例

```typescript
const fetcher = new EChartsFetcher();

fetcher.onError((error) => {
  switch (error.phase) {
    case 'metadata':
      console.error('获取元数据失败:', error.error.message);
      break;
    case 'download':
      console.error(`下载 ${error.item} 失败:`, error.error.message);
      break;
    case 'parse':
      console.error(`解析 ${error.item} 失败:`, error.error.message);
      break;
    case 'save':
      console.error('保存失败:', error.error.message);
      break;
  }
  
  if (error.retryCount > 0) {
    console.log(`已重试 ${error.retryCount} 次`);
  }
});
```

## 最佳实践

### 1. 合理使用缓存

```typescript
// 开发环境：使用缓存加快调试
const devFetcher = new EChartsFetcher({
  cacheEnabled: true
});

// 生产环境：强制更新确保数据最新
const prodFetcher = new EChartsFetcher();
await prodFetcher.fetchBaseData(true);  // force update
```

### 2. 控制并发数

```typescript
// 根据网络环境调整
const slowNetwork = new EChartsFetcher({
  concurrency: 3,   // 慢网络减少并发
  timeout: 60000    // 增加超时
});

const fastNetwork = new EChartsFetcher({
  concurrency: 10,  // 快网络增加并发
  timeout: 10000   // 减少超时
});
```

### 3. 增量更新

```typescript
const fetcher = new EChartsFetcher();

// 检查更新
const updateInfo = await fetcher.checkUpdates();

if (updateInfo.hasUpdate) {
  // 仅更新变化的选项
  const keysToUpdate = [
    ...(updateInfo.added || []),
    ...(updateInfo.modified || [])
  ];
  
  for await (const result of fetcher.fetchOptionsBatch(keysToUpdate)) {
    console.log(`更新: ${result.key}`);
  }
}
```

### 4. 流式处理大数据

```typescript
// 使用 AsyncGenerator 避免内存溢出
const keys = Object.keys((await fetcher.fetchBaseData()).option);

for await (const result of fetcher.fetchOptionsBatch(keys)) {
  // 立即处理，不缓存所有结果
  await processOption(result.key, result.data);
}
```

---

**版本**: 1.0.0
**更新日期**: 2025-01-31
