/**
 * ECharts API 常量定义
 * 参考旧项目 echarts-options-integration/constants.js
 */

import type { Locale, DataSource } from './types.js';

// 语言到 URL 路径的映射
const LOCALE_PATH_MAP: Record<Locale, string> = {
  'zh-CN': 'zh',
  'en-US': 'en',
};

// 获取数据源（根据语言）
export const getDataSource = (locale: Locale = 'zh-CN'): DataSource => {
  const langPath = LOCALE_PATH_MAP[locale];
  return {
    name: 'official',
    baseUrl: `https://echarts.apache.org/${langPath}`,
    locale,
    optionOutlinePath: '/documents/option-parts/option-outline.js',
    optionTypesPath: '/documents/option-parts/option.js',
    optionDetailPath: (key: string) => `/documents/option-parts/option.${key}.js`,
  };
};

// ECharts 官方 API 端点（动态生成）
export const ECHARTS_API = {
  // 选项树大纲
  OPTION_OUTLINE: (locale: Locale = 'zh-CN'): string => {
    const langPath = LOCALE_PATH_MAP[locale];
    return `https://echarts.apache.org/${langPath}/documents/option-parts/option-outline.js`;
  },
  
  // 类型定义和默认值
  OPTION_TYPES: (locale: Locale = 'zh-CN'): string => {
    const langPath = LOCALE_PATH_MAP[locale];
    return `https://echarts.apache.org/${langPath}/documents/option-parts/option.js`;
  },
  
  // 单个选项详情
  OPTION_DETAIL: (key: string, locale: Locale = 'zh-CN'): string => {
    const langPath = LOCALE_PATH_MAP[locale];
    return `https://echarts.apache.org/${langPath}/documents/option-parts/option.${key}.js`;
  },
} as const;

// 默认数据源（中文）
export const DEFAULT_DATA_SOURCE = getDataSource('zh-CN');

// 全局选项（不需要单独获取详细数据的顶层选项）
export const GLOBAL_OPTION_KEYS = [
  'options',
  'animation',
  'darkMode',
  'animationDelay',
  'animationDuration',
  'animationDurationUpdate',
  'animationEasing',
  'animationEasingUpdate',
  'color',
  'backgroundColor',
  'animationThreshold',
  'blendMode',
  'hoverLayerThreshold',
  'useDirtyRect',
  'stateAnimation',
  'textStyle',
  'media',
] as const;

// 容器选项（仅折叠，无实际数据的选项）
export const BOX_OPTION_KEYS = [
  'dataZoom',
  'visualMap',
] as const;

// 默认配置
export const DEFAULT_CONFIG = {
  // 缓存
  cacheDir: 'data/.cache',
  cacheEnabled: true,
  
  // 并发
  concurrency: 6,
  retries: 3,
  retryDelay: 1000,
  timeout: 30000,
  
  // 压缩
  compress: 'none' as const,
  
  // 输出
  format: 'mjs' as const,
};

// 文件扩展名映射
export const EXTENSION_MAP: Record<import('./types.js').CompressMode | 'default', string> = {
  none: 'mjs',
  zip: 'zip',
  brotli: 'br',
  buffer: 'bin',
  default: 'mjs',
};
