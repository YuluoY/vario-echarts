<template>
  <div class="generator-view">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">批量生成 Schema</h1>
        <p class="page-subtitle">批量生成 ECharts 选项的 Vario Schema 文件</p>
      </div>
    </div>

    <!-- 信息提示 -->
    <div class="alert alert-info">
      <div class="alert-icon">
        <el-icon><InfoFilled /></el-icon>
      </div>
      <div class="alert-content">
        <div class="alert-title">输出路径说明</div>
        <p class="alert-desc">
          生成的 Schema 文件保存在: <code>output/{选项名}/index.mjs</code><br>
          例如: <code>output/title/index.mjs</code>, <code>output/legend/index.mjs</code>
        </p>
      </div>
    </div>

    <!-- 强制刷新数据提示 -->
    <div v-if="config.forceRefresh" class="alert alert-warning">
      <div class="alert-icon">
        <el-icon><WarningFilled /></el-icon>
      </div>
      <div class="alert-content">
        <div class="alert-title">强制刷新数据说明</div>
        <p class="alert-desc">
          启用强制刷新后，需要在终端执行以下命令来更新数据：<br><br>
          <code style="display: block; padding: 8px; background: #2d2d2d; border-radius: 4px; color: #a9dc76;">
            # 更新 base 数据（option.mjs + type.mjs）<br>
            pnpm cli fetch --force --save-to-base<br><br>
            # 更新 options 描述数据（data/base/options/*.mjs）<br>
            pnpm cli fetch --all --force --save-to-base
          </code><br>
          然后刷新页面重新生成 Schema。
        </p>
      </div>
    </div>

    <!-- 配置卡片 -->
    <div class="config-card">
      <div class="card-header">
        <div class="header-title">
          <el-icon><Setting /></el-icon>
          <span>生成配置</span>
        </div>
        <div class="header-actions">
          <button class="btn btn-sm btn-secondary" @click="selectAll">全选</button>
          <button class="btn btn-sm btn-secondary" @click="clearSelection">清空</button>
          <button
            class="btn btn-sm btn-secondary"
            :disabled="config.selectedOptions.length === 0 || isDownloading"
            @click="downloadZip"
          >
            <el-icon><Download /></el-icon>
            <span>下载文件包</span>
          </button>
          <button
            class="btn btn-primary"
            :disabled="config.selectedOptions.length === 0 || isGenerating"
            @click="startGeneration"
          >
            <el-icon v-if="isGenerating" class="is-loading"><Loading /></el-icon>
            <el-icon v-else><VideoPlay /></el-icon>
            <span>开始生成 ({{ config.selectedOptions.length }})</span>
          </button>
        </div>
      </div>

      <div class="card-body">
        <!-- 选项选择 -->
        <div class="form-section">
          <div class="form-header">
            <label class="form-label">选择选项</label>
            <span class="form-badge">{{ config.selectedOptions.length }} / {{ allOptions.length }}</span>
          </div>
          <div class="options-grid">
            <label
              v-for="opt in allOptions"
              :key="opt"
              class="option-checkbox"
              :class="{ checked: config.selectedOptions.includes(opt) }"
            >
              <input
                type="checkbox"
                :value="opt"
                v-model="config.selectedOptions"
                class="checkbox-input"
              />
              <span class="checkbox-box">
                <el-icon v-if="config.selectedOptions.includes(opt)"><Check /></el-icon>
              </span>
              <span class="checkbox-label">{{ opt }}</span>
            </label>
          </div>
        </div>

        <!-- 并发数 -->
        <div class="form-row">
          <label class="form-label">并发数</label>
          <div class="form-control">
            <el-slider
              v-model="config.concurrency"
              :min="1"
              :max="10"
              show-input
              style="width: 300px"
            />
            <span class="form-hint">同时处理的选项数量</span>
          </div>
        </div>

        <!-- 输出格式 -->
        <div class="form-row">
          <label class="form-label">输出格式</label>
          <div class="form-control">
            <div class="radio-group">
              <label class="radio-item" :class="{ active: config.format === 'mjs' }">
                <input type="radio" value="mjs" v-model="config.format" />
                <span>ESM (.mjs)</span>
              </label>
              <label class="radio-item" :class="{ active: config.format === 'cjs' }">
                <input type="radio" value="cjs" v-model="config.format" />
                <span>CommonJS (.cjs)</span>
              </label>
              <label class="radio-item" :class="{ active: config.format === 'json' }">
                <input type="radio" value="json" v-model="config.format" />
                <span>JSON (.json)</span>
              </label>
            </div>
            <span class="form-hint">当前格式: <code>output/{选项名}/index.{{ config.format }}</code></span>
          </div>
        </div>

        <!-- 智能组件 -->
        <div class="form-row">
          <label class="form-label">使用智能组件</label>
          <div class="form-control">
            <el-switch v-model="config.useSmartComponents" />
            <span class="form-hint">启用后将使用 SmartColorInput、SmartSizeInput 等组件</span>
          </div>
        </div>

        <!-- 输出模式 -->
        <div class="form-row">
          <label class="form-label">输出模式</label>
          <div class="form-control">
            <div class="radio-group">
              <label class="radio-item" :class="{ active: config.outputMode === 'folder' }">
                <input type="radio" value="folder" v-model="config.outputMode" />
                <span>文件夹模式</span>
              </label>
              <label class="radio-item" :class="{ active: config.outputMode === 'flat' }">
                <input type="radio" value="flat" v-model="config.outputMode" />
                <span>扁平文件</span>
              </label>
            </div>
            <span class="form-hint" v-if="config.outputMode === 'folder'">
              文件夹层级: <code>output/series/line/index.{{ config.format }}</code>
            </span>
            <span class="form-hint" v-else>
              扁平文件: <code>output/series-line.{{ config.format }}</code>
            </span>
          </div>
        </div>

        <!-- 压缩模式 -->
        <div class="form-row">
          <label class="form-label">压缩方式</label>
          <div class="form-control">
            <div class="radio-group">
              <label
                v-for="mode in compressionModes"
                :key="mode.value"
                class="radio-item"
                :class="{ active: config.compressionMode === mode.value }"
              >
                <input type="radio" :value="mode.value" v-model="config.compressionMode" />
                <span>{{ mode.label }}</span>
              </label>
            </div>
            <span class="form-hint">{{ compressionHintMap[config.compressionMode] }}</span>
          </div>
        </div>

        <!-- 国际化文件 -->
        <div class="form-row">
          <label class="form-label">生成国际化文件</label>
          <div class="form-control">
            <el-switch v-model="config.i18n" />
            <span class="form-hint">自动生成多语言翻译文件（需启用翻译功能）</span>
          </div>
        </div>

        <!-- 国际化语言 -->
        <div class="form-row" v-if="config.i18n">
          <label class="form-label">选择语言</label>
          <div class="form-control">
            <div class="checkbox-group">
              <label
                v-for="lang in availableLangs"
                :key="lang.code"
                class="checkbox-item"
                :class="{ checked: config.i18nLangs.includes(lang.code) }"
              >
                <input
                  type="checkbox"
                  :value="lang.code"
                  v-model="config.i18nLangs"
                  class="checkbox-input"
                />
                <span class="checkbox-box">
                  <el-icon v-if="config.i18nLangs.includes(lang.code)"><Check /></el-icon>
                </span>
                <span class="checkbox-label">{{ lang.name }}</span>
              </label>
            </div>
            <span class="form-hint">
              输出路径: <code>data/i18n/{语言代码}.json</code>
            </span>
          </div>
        </div>

        <!-- Schema语言 -->
        <div class="form-row">
          <label class="form-label">Schema 语言</label>
          <div class="form-control">
            <div class="radio-group">
              <label class="radio-item" :class="{ active: config.schemaLang === 'zh-CN' }">
                <input type="radio" value="zh-CN" v-model="config.schemaLang" />
                <span>简体中文</span>
              </label>
              <label class="radio-item" :class="{ active: config.schemaLang === 'en-US' }">
                <input type="radio" value="en-US" v-model="config.schemaLang" />
                <span>English</span>
              </label>
            </div>
            <span class="form-hint">生成的 Schema 中 label 和描述使用的语言</span>
          </div>
        </div>

        <!-- 强制刷新数据 -->
        <div class="form-row">
          <label class="form-label">强制刷新数据</label>
          <div class="form-control">
            <el-switch v-model="config.forceRefresh" />
            <span class="form-hint">忽略缓存，从 ECharts 官方 API 获取最新的 base 数据和 options 描述数据</span>
          </div>
        </div>

        <!-- 同步更新 options 描述 -->
        <div class="form-row" v-if="config.forceRefresh">
          <label class="form-label">同步更新 options 描述</label>
          <div class="form-control">
            <el-switch v-model="config.syncOptions" />
            <span class="form-hint">同时从 ECharts API 下载所有配置项的详细描述并缓存到 data/base/options/</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 进度卡片 -->
    <div v-if="progress.current > 0" class="progress-card">
      <div class="card-header">
        <div class="header-title">
          <el-icon><Loading /></el-icon>
          <span>生成进度</span>
        </div>
      </div>
      <div class="card-body">
        <div class="progress-bar">
          <div class="progress-track">
            <div
              class="progress-fill"
              :style="{ width: `${progress.percentage}%` }"
            ></div>
          </div>
          <span class="progress-text">{{ progress.percentage }}%</span>
        </div>
        <div class="progress-info">
          <span>{{ progress.current }} / {{ progress.total }}</span>
          <span v-if="progress.currentItem" class="current-item">
            正在处理: <code>{{ progress.currentItem }}</code>
          </span>
        </div>
      </div>
    </div>

    <!-- 结果卡片 -->
    <div v-if="results.length > 0" class="results-card">
      <div class="card-header">
        <div class="header-title">
          <el-icon><CircleCheckFilled /></el-icon>
          <span>生成结果</span>
        </div>
        <button class="btn btn-sm btn-secondary" @click="results = []">清空</button>
      </div>
      <div class="card-body">
        <div class="results-list">
          <div
            v-for="result in results"
            :key="result.key"
            class="result-item"
            :class="result.status"
          >
            <div class="result-icon">
              <el-icon v-if="result.status === 'success'" color="#34C759"><CircleCheckFilled /></el-icon>
              <el-icon v-else color="#FF3B30"><CircleCloseFilled /></el-icon>
            </div>
            <div class="result-content">
              <code class="result-key">{{ result.key }}</code>
              <span class="result-path">{{ result.path }}</span>
            </div>
            <div class="result-meta">
              <span class="result-time">{{ result.duration }}ms</span>
              <button
                v-if="result.status === 'success'"
                class="btn btn-sm btn-secondary"
                @click="viewSchema(result.key)"
              >
                查看
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import {
  InfoFilled,
  WarningFilled,
  Setting,
  VideoPlay,
  Loading,
  CircleCheckFilled,
  CircleCloseFilled,
  Check,
  Download
} from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

interface Result {
  key: string;
  status: 'success' | 'error';
  duration: number;
  path: string;
}

type CompressionMode = 'none' | 'zip' | 'brotli' | 'buffer';
type OutputMode = 'folder' | 'flat';
type CompressionOutput = {
  fileName: string;
  data: string | Uint8Array;
  binary?: boolean;
};
type FflateModule = {
  compressSync: (data: Uint8Array, options?: { level?: number; mem?: number }) => Uint8Array;
  strToU8: (str: string) => Uint8Array;
};
type MsgPackModule = {
  encode: (input: unknown) => Uint8Array;
};

const router = useRouter();

// 本地存储键
const STORAGE_KEY = 'generator-config';

// 所有可用选项（与 data/base/option.cjs 中的键对应）
// 注意：多级选项使用 "-" 分隔符（如 series-line），但output目录使用 "/" 分隔符
const allOptions = [
  // 布局与坐标系
  'title', 'legend', 'grid', 'xAxis', 'yAxis', 'polar', 'radiusAxis', 'angleAxis',
  'radar', 'parallel', 'parallelAxis', 'singleAxis', 'geo', 'calendar',
  // dataZoom 系列
  'dataZoom', 'dataZoom-inside', 'dataZoom-slider',
  // visualMap 系列
  'visualMap', 'visualMap-continuous', 'visualMap-piecewise',
  // 交互组件
  'tooltip', 'axisPointer', 'toolbox', 'brush', 'timeline',
  // 数据与图形
  'graphic', 'dataset', 'aria',
  // series 系列（22种图表类型）
  'series-line', 'series-bar', 'series-pie', 'series-scatter', 'series-effectScatter',
  'series-radar', 'series-tree', 'series-treemap', 'series-sunburst', 'series-boxplot',
  'series-candlestick', 'series-heatmap', 'series-map', 'series-parallel', 'series-lines',
  'series-graph', 'series-sankey', 'series-funnel', 'series-gauge', 'series-pictorialBar',
  'series-themeRiver', 'series-custom',
  // 全局样式
  'darkMode', 'color', 'backgroundColor', 'textStyle',
  // 动画
  'animation', 'animationThreshold', 'animationDuration', 'animationEasing',
  'animationDelay', 'animationDurationUpdate', 'animationEasingUpdate', 'animationDelayUpdate',
  'stateAnimation',
  // 其他
  'blendMode', 'hoverLayerThreshold', 'useUTC', 'options', 'media'
];

// 将选项键转换为output目录路径（将 "-" 替换为 "/"）
const optionToPath = (key: string) => key.replace(/-/g, '/');

const availableLangs = [
  { code: 'zh-CN', name: '简体中文' },
  { code: 'en-US', name: 'English' },
  { code: 'ja-JP', name: '日本語' },
  { code: 'ko-KR', name: '한국어' }
];

const compressionModes: Array<{ value: CompressionMode; label: string }> = [
  { value: 'none', label: '不压缩' },
  { value: 'zip', label: 'Zip (fflate)' },
  { value: 'brotli', label: 'Brotli' },
  { value: 'buffer', label: 'Buffer (msgpack)' }
];

const compressionHintMap: Record<CompressionMode, string> = {
  none: '导出原始 schema 文本文件',
  zip: '对每个 schema 文件使用 fflate 压缩，后缀 .zip',
  brotli: '对每个 schema 文件使用 Brotli 压缩，后缀 .br',
  buffer: '导出 MessagePack 二进制，后缀 .msgpack'
};

const config = reactive({
  selectedOptions: [] as string[],
  concurrency: 6,
  format: 'mjs',
  useSmartComponents: true,
  outputMode: 'folder' as OutputMode,
  i18n: false,
  i18nLangs: ['zh-CN', 'en-US'] as string[],
  schemaLang: 'zh-CN' as 'zh-CN' | 'en-US',
  compressionMode: 'none' as CompressionMode,
  forceRefresh: false,
  syncOptions: true  // 默认启用同步更新 options 描述
});

const isGenerating = ref(false);
const isDownloading = ref(false);
const progress = reactive({
  current: 0,
  total: 0,
  percentage: 0,
  currentItem: ''
});
const results = ref<Result[]>([]);

const selectAll = () => {
  config.selectedOptions = [...allOptions];
};

const clearSelection = () => {
  config.selectedOptions = [];
};

const startGeneration = async () => {
  if (config.selectedOptions.length === 0) {
    ElMessage.warning('请至少选择一个选项');
    return;
  }

  isGenerating.value = true;
  progress.current = 0;
  progress.total = config.selectedOptions.length;
  results.value = [];

  for (const key of config.selectedOptions) {
    progress.currentItem = key;
    const startTime = Date.now();

    await new Promise(resolve => setTimeout(resolve, 100));

    const duration = Date.now() - startTime;
    progress.current++;
    progress.percentage = Math.round((progress.current / progress.total) * 100);

    // 转换路径格式（series-line -> series/line）
    const pathKey = optionToPath(key);
    results.value.push({
      key,
      status: 'success',
      duration,
      path: `output/${pathKey}/index.${config.format}`
    });
  }

  progress.currentItem = '';
  isGenerating.value = false;
  ElMessage.success(`成功生成 ${results.value.length} 个 Schema 文件`);
};

const viewSchema = (key: string) => {
  router.push(`/preview?key=${optionToPath(key)}`);
};

// 保存配置到 localStorage
const saveConfig = () => {
  try {
    const configToSave = {
      selectedOptions: config.selectedOptions,
      concurrency: config.concurrency,
      format: config.format,
      useSmartComponents: config.useSmartComponents,
      outputMode: config.outputMode,
      i18n: config.i18n,
      i18nLangs: config.i18nLangs,
      schemaLang: config.schemaLang,
      compressionMode: config.compressionMode,
      forceRefresh: config.forceRefresh,
      syncOptions: config.syncOptions
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(configToSave));
  } catch (e) {
    console.warn('保存配置失败:', e);
  }
};

// 从 localStorage 加载配置
const loadConfig = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const savedConfig = JSON.parse(saved);
      Object.assign(config, savedConfig);
      if (!compressionModes.some(mode => mode.value === config.compressionMode)) {
        config.compressionMode = 'none';
      }
      console.log('已加载保存的配置');
    }
  } catch (e) {
    console.warn('加载配置失败:', e);
  }
};

// 监听配置变化，自动保存
watch(
  () => ({ ...config }),
  () => {
    saveConfig();
  },
  { deep: true }
);

// 页面加载时恢复配置
onMounted(() => {
  loadConfig();
});

let fflateModulePromise: Promise<FflateModule> | null = null;
let msgpackModulePromise: Promise<MsgPackModule> | null = null;
let zhDictPromise: Promise<Record<string, string>> | null = null;

const getFflateModule = async (): Promise<FflateModule> => {
  if (!fflateModulePromise) {
    fflateModulePromise = import('fflate').then(mod => ({
      compressSync: mod.compressSync,
      strToU8: mod.strToU8
    }));
  }
  return fflateModulePromise;
};

const getMsgPackModule = async (): Promise<MsgPackModule> => {
  if (!msgpackModulePromise) {
    msgpackModulePromise = import('@msgpack/msgpack').then(mod => ({
      encode: mod.encode
    }));
  }
  return msgpackModulePromise;
};

const getZhDict = async (): Promise<Record<string, string>> => {
  if (!zhDictPromise) {
    zhDictPromise = import('@data/i18n/zh-CN.json').then(mod => mod.default as Record<string, string>);
  }
  return zhDictPromise;
};

const getOutputRelativePath = (key: string, format: string, outputMode: OutputMode): string => {
  if (outputMode === 'flat') {
    return `${key}.${format}`;
  }
  return `${optionToPath(key)}/index.${format}`;
};

const fetchLocalSchemaFile = async (relativePath: string): Promise<string | null> => {
  try {
    const response = await fetch(`/output/${relativePath}`, { cache: 'no-store' });
    if (!response.ok) {
      return null;
    }
    return await response.text();
  } catch {
    return null;
  }
};

const parseSchemaFromFileContent = (content: string): unknown | null => {
  let schemaText = content.trim();

  const esmMatch = schemaText.match(/^export\s+default\s+([\s\S]*?);?\s*$/);
  if (esmMatch) {
    schemaText = esmMatch[1].trim();
  } else {
    const cjsMatch = schemaText.match(/^module\.exports\s*=\s*([\s\S]*?);?\s*$/);
    if (cjsMatch) {
      schemaText = cjsMatch[1].trim();
    }
  }

  try {
    return JSON.parse(schemaText);
  } catch {
    return null;
  }
};

const translateSchemaForZh = (schema: any, zhDict: Record<string, string>) => {
  if (!schema) {
    return;
  }
  if (Array.isArray(schema)) {
    schema.forEach(node => translateSchemaForZh(node, zhDict));
    return;
  }

  if (schema.type === 'ElCollapseItem' && schema.props?.title) {
    schema.props.title = zhDict[schema.props.title as keyof typeof zhDict] || schema.props.title;
  }
  if (schema.props?.placeholder) {
    schema.props.placeholder = zhDict[schema.props.placeholder as keyof typeof zhDict] || schema.props.placeholder;
  }
  if (schema._raw?.label) {
    schema._raw.label = zhDict[schema._raw.label as keyof typeof zhDict] || schema._raw.label;
  }
  if (Array.isArray(schema.children)) {
    schema.children.forEach((child: any) => translateSchemaForZh(child, zhDict));
  }
};

/**
 * 下载生成的Schema压缩包
 * 根据用户选择的语言动态生成 Schema
 */
const downloadZip = async () => {
  // 如果没有选中任何选项，提示用户
  if (config.selectedOptions.length === 0) {
    ElMessage.warning('请至少选择一个选项');
    return;
  }

  if (isDownloading.value) {
    return;
  }

  isDownloading.value = true;
  try {
    ElMessage.info('正在准备下载文件...');
    
    // 动态导入依赖
    const JSZip = (await import('jszip')).default;
    
    const zip = new JSZip();
    let successCount = 0;
    let failCount = 0;
    let brotliFallbackUsed = false;
    let generatedCount = 0;
    let localFileCount = 0;

    const ext = config.format;
    const filesToGenerate: Array<{ key: string; relativePath: string }> = [];

    // 优先直接读取本地 output 文件，避免每次都重新生成
    for (const key of config.selectedOptions) {
      const relativePath = getOutputRelativePath(key, ext, config.outputMode);
      const localContent = await fetchLocalSchemaFile(relativePath);

      if (!localContent) {
        filesToGenerate.push({ key, relativePath });
        continue;
      }

      let localSchema: unknown = null;
      if (config.compressionMode === 'buffer') {
        localSchema = parseSchemaFromFileContent(localContent);
        if (localSchema === null) {
          filesToGenerate.push({ key, relativePath });
          continue;
        }
      }

      const compressed = await compressFile({
        mode: config.compressionMode,
        fileName: relativePath,
        textContent: localContent,
        schema: localSchema
      });
      zip.file(compressed.fileName, compressed.data, { binary: compressed.binary });
      localFileCount++;
      successCount++;

      if (config.compressionMode === 'brotli' && compressed.fileName.endsWith('.zip')) {
        brotliFallbackUsed = true;
      }
    }

    // 如果本地都存在，直接下载，无需重新生成
    if (filesToGenerate.length === 0) {
      const blob = await zip.generateAsync({ type: 'blob', compression: 'STORE' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const modeLabel = config.outputMode === 'folder' ? 'folder' : 'flat';
      a.download = `echarts-schemas-${config.schemaLang}-${modeLabel}-${config.compressionMode}-${new Date().toISOString().split('T')[0]}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      if (brotliFallbackUsed) {
        ElMessage.warning('当前浏览器不支持 Brotli 压缩，已自动回退为 zip(fflate)');
      }
      ElMessage.success(`下载成功，全部使用本地文件（${localFileCount} 个）`);
      return;
    }

    ElMessage.info(`本地命中 ${localFileCount} 个，其余 ${filesToGenerate.length} 个正在动态生成...`);

    const { SchemaGenerator } = await import('@vario-echarts/core/browser');
    const zhDict = config.schemaLang === 'zh-CN' ? await getZhDict() : null;
    
    // 使用 Vite 的 glob import 预加载所有模块
    // 路径: apps/studio/src/views/ -> ../../../../data/base/
    const baseModules: Record<string, any> = import.meta.glob(
      '../../../../data/base/*.mjs',
      { eager: true }
    );
    const zhOptionsModules: Record<string, any> = import.meta.glob(
      '../../../../data/base/options/zh-CN/*.mjs',
      { eager: true }
    );
    const enOptionsModules: Record<string, any> = import.meta.glob(
      '../../../../data/base/options/en-US/*.mjs',
      { eager: true }
    );
    
    console.log('Available base modules:', Object.keys(baseModules));
    
    // 查找基础模块
    const optionKey = Object.keys(baseModules).find(k => k.includes('option.mjs'));
    const typeKey = Object.keys(baseModules).find(k => k.includes('type.mjs'));
    
    if (!optionKey || !typeKey) {
      console.error('Base modules not found. Available:', Object.keys(baseModules));
      throw new Error('无法找到基础数据模块');
    }
    
    const option = baseModules[optionKey].default;
    const type = baseModules[typeKey].default;
    
    if (!option || !type) {
      throw new Error('无法加载基础数据');
    }
    
    // 选择正确的 options 模块集合
    const optionsModules = config.schemaLang === 'zh-CN' ? zhOptionsModules : enOptionsModules;
    console.log('Available options modules:', Object.keys(optionsModules).length);
    
    // 加载对应语言的 options 详情
    const optionDetails: Record<string, any> = {};
    for (const key of filesToGenerate.map(item => item.key)) {
      // 查找匹配的模块
      const moduleKey = Object.keys(optionsModules).find(k => k.endsWith(`/${key}.mjs`));
      if (moduleKey && optionsModules[moduleKey]) {
        optionDetails[key] = optionsModules[moduleKey].default;
      } else {
        console.warn(`找不到 ${key} 的模块`);
      }
    }
    
    // 创建生成器
    const generator = new SchemaGenerator({ useSmartComponents: config.useSmartComponents });
    
    // 为缺失本地文件的选项生成 Schema
    for (const { key, relativePath } of filesToGenerate) {
      try {
        // 生成 Schema
        let schema = generator.generate(key, type, option[key]?.desc, optionDetails[key]);
        
        // 只有中文 locale 需要翻译字段名
        if (zhDict) {
          translateSchemaForZh(schema, zhDict);
        }
        
        // 将 schema 对象转换为字符串
        const schemaJson = JSON.stringify(schema, null, 2);
        
        // 根据格式转换内容
        let outputContent: string;
        if (ext === 'json') {
          // 纯 JSON 格式
          outputContent = schemaJson;
        } else if (ext === 'cjs') {
          // CommonJS 格式
          outputContent = `module.exports = ${schemaJson};`;
        } else {
          // ES Module 格式 (mjs)
          outputContent = `export default ${schemaJson};`;
        }
        
        const compressed = await compressFile({
          mode: config.compressionMode,
          fileName: relativePath,
          textContent: outputContent,
          schema
        });
        zip.file(compressed.fileName, compressed.data, { binary: compressed.binary });

        if (config.compressionMode === 'brotli' && compressed.fileName.endsWith('.zip')) {
          brotliFallbackUsed = true;
        }
        successCount++;
        generatedCount++;
      } catch (e) {
        console.warn(`无法加载 ${key} 的schema:`, e);
        failCount++;
      }
    }
    
    // 检查是否有文件
    const fileCount = Object.keys(zip.files).length;
    if (fileCount === 0) {
      ElMessage.warning('没有可下载的文件，请确保 schema 文件已生成');
      return;
    }
    
    // 生成并下载zip文件
    const blob = await zip.generateAsync({ type: 'blob', compression: 'STORE' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const modeLabel = config.outputMode === 'folder' ? 'folder' : 'flat';
    a.download = `echarts-schemas-${config.schemaLang}-${modeLabel}-${config.compressionMode}-${new Date().toISOString().split('T')[0]}.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    if (brotliFallbackUsed) {
      ElMessage.warning('当前浏览器不支持 Brotli 压缩，已自动回退为 zip(fflate)');
    }
    ElMessage.success(`下载成功，本地 ${localFileCount} 个，生成 ${generatedCount} 个，失败 ${failCount} 个`);
  } catch (error) {
    console.error('下载失败:', error);
    ElMessage.error('下载失败，请检查控制台');
  } finally {
    isDownloading.value = false;
  }
};

const compressWithBrotli = async (text: string): Promise<Uint8Array> => {
  const CompressionStreamCtor = (globalThis as unknown as { CompressionStream?: new (format: string) => CompressionStream }).CompressionStream;
  if (!CompressionStreamCtor) {
    throw new Error('CompressionStream 不可用');
  }

  let compressedStream: ReadableStream<Uint8Array>;
  try {
    compressedStream = new Blob([text]).stream().pipeThrough(new CompressionStreamCtor('brotli'));
  } catch (error) {
    throw new Error(`Brotli 压缩不可用: ${String(error)}`);
  }

  const buffer = await new Response(compressedStream).arrayBuffer();
  return new Uint8Array(buffer);
};

const compressFile = async (params: {
  mode: CompressionMode;
  fileName: string;
  textContent: string;
  schema: unknown;
}): Promise<CompressionOutput> => {
  const { mode, fileName, textContent, schema } = params;

  if (mode === 'none') {
    return { fileName, data: textContent };
  }

  if (mode === 'zip') {
    const { compressSync, strToU8 } = await getFflateModule();
    const compressed = compressSync(strToU8(textContent), { level: 9, mem: 8 });
    return { fileName: `${fileName}.zip`, data: compressed, binary: true };
  }

  if (mode === 'brotli') {
    try {
      const compressed = await compressWithBrotli(textContent);
      return { fileName: `${fileName}.br`, data: compressed, binary: true };
    } catch {
      const { compressSync, strToU8 } = await getFflateModule();
      const fallback = compressSync(strToU8(textContent), { level: 9, mem: 8 });
      return { fileName: `${fileName}.zip`, data: fallback, binary: true };
    }
  }

  const { encode } = await getMsgPackModule();
  const packed = encode(schema);
  return { fileName: `${fileName}.msgpack`, data: packed, binary: true };
};
</script>

<style lang="scss" scoped>
.generator-view {
  padding-bottom: var(--spacing-8);
}

.page-header {
  margin-bottom: var(--spacing-6);

  .page-title {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    color: var(--text-primary);
    margin: 0 0 var(--spacing-2) 0;
    letter-spacing: -0.02em;
  }

  .page-subtitle {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    margin: 0;
  }
}

// 提示框
.alert {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
  padding: var(--spacing-4) var(--spacing-5);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-5);

  &.alert-info {
    background: var(--primary-light);
    border: 1px solid rgba(0, 113, 227, 0.2);
  }

  &.alert-warning {
    background: rgba(255, 159, 10, 0.1);
    border: 1px solid rgba(255, 159, 10, 0.2);

    .alert-icon {
      color: #ff9f0a;
    }

    .alert-title {
      color: #ff9f0a;
    }
  }

  .alert-icon {
    color: var(--primary-color);
    font-size: var(--font-size-lg);
    flex-shrink: 0;
  }

  .alert-content {
    flex: 1;
  }

  .alert-title {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    color: var(--primary-color);
    margin-bottom: var(--spacing-1);
  }

  .alert-desc {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.6;

    code {
      background: rgba(0, 113, 227, 0.1);
      padding: 2px 6px;
      border-radius: var(--radius-sm);
      font-family: var(--font-family-mono);
    }
  }
}

// 卡片通用样式
.config-card,
.progress-card,
.results-card {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  margin-bottom: var(--spacing-5);
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-4) var(--spacing-5);
  border-bottom: 1px solid var(--border-divider);

  .header-title {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);

    .el-icon {
      color: var(--primary-color);
    }
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
  }
}

.card-body {
  padding: var(--spacing-5);
}

// 按钮
.btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all var(--transition-fast);
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.btn-primary {
    background: var(--primary-color);
    color: white;

    &:hover:not(:disabled) {
      background: var(--primary-hover);
      box-shadow: 0 4px 12px rgba(0, 113, 227, 0.3);
    }
  }

  &.btn-secondary {
    background: var(--bg-subtle);
    color: var(--text-primary);

    &:hover:not(:disabled) {
      background: var(--bg-hover);
    }
  }

  &.btn-sm {
    padding: var(--spacing-2) var(--spacing-3);
    font-size: var(--font-size-sm);
  }
}

// 表单
.form-section {
  margin-bottom: var(--spacing-6);

  &:last-child {
    margin-bottom: 0;
  }
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-3);
}

.form-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
}

.form-badge {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  padding: 2px 8px;
  background: var(--bg-subtle);
  color: var(--text-secondary);
  border-radius: var(--radius-full);
}

.form-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-5);

  &:last-child {
    margin-bottom: 0;
  }

  .form-label {
    width: 100px;
    flex-shrink: 0;
  }

  .form-control {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }
}

.form-hint {
  font-size: var(--font-size-sm);
  color: var(--text-tertiary);

  code {
    background: var(--bg-subtle);
    padding: 2px 6px;
    border-radius: var(--radius-sm);
    font-family: var(--font-family-mono);
  }
}

// 选项网格
.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: var(--spacing-2);
  max-height: 320px;
  overflow-y: auto;
  padding: var(--spacing-3);
  background: var(--bg-subtle);
  border-radius: var(--radius-lg);
}

.option-checkbox {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    background: var(--bg-hover);
  }

  &.checked {
    background: var(--primary-light);
  }

  .checkbox-input {
    display: none;
  }

  .checkbox-box {
    width: 18px;
    height: 18px;
    border: 2px solid var(--border-color);
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-fast);
    flex-shrink: 0;

    .el-icon {
      font-size: 12px;
      color: white;
      opacity: 0;
      transform: scale(0);
      transition: all var(--transition-fast);
    }
  }

  &.checked .checkbox-box {
    background: var(--primary-color);
    border-color: var(--primary-color);

    .el-icon {
      opacity: 1;
      transform: scale(1);
    }
  }

  .checkbox-label {
    font-size: var(--font-size-sm);
    color: var(--text-primary);
    font-family: var(--font-family-mono);
  }
}

// 单选组
.radio-group {
  display: flex;
  gap: var(--spacing-2);
}

.radio-item {
  display: flex;
  align-items: center;
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  border: 1px solid var(--border-color);
  background: var(--bg-card);

  &:hover {
    border-color: var(--border-hover);
  }

  &.active {
    border-color: var(--primary-color);
    background: var(--primary-light);
  }

  input {
    display: none;
  }

  span {
    font-size: var(--font-size-sm);
    color: var(--text-primary);
  }
}

// 复选框组（用于语言选择）
.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  border: 1px solid var(--border-color);
  background: var(--bg-card);

  &:hover {
    border-color: var(--border-hover);
    background: var(--bg-hover);
  }

  &.checked {
    border-color: var(--primary-color);
    background: var(--primary-light);
  }

  .checkbox-input {
    display: none;
  }

  .checkbox-box {
    width: 16px;
    height: 16px;
    border: 2px solid var(--border-color);
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-fast);
    flex-shrink: 0;

    .el-icon {
      font-size: 10px;
      color: white;
      opacity: 0;
      transform: scale(0);
      transition: all var(--transition-fast);
    }
  }

  &.checked .checkbox-box {
    background: var(--primary-color);
    border-color: var(--primary-color);

    .el-icon {
      opacity: 1;
      transform: scale(1);
    }
  }

  .checkbox-label {
    font-size: var(--font-size-sm);
    color: var(--text-primary);
  }
}

// 进度条
.progress-bar {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-3);
}

.progress-track {
  flex: 1;
  height: 8px;
  background: var(--bg-subtle);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-hover));
  border-radius: var(--radius-full);
  transition: width var(--transition-normal);
}

.progress-text {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--primary-color);
  min-width: 40px;
  text-align: right;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-sm);
  color: var(--text-secondary);

  .current-item {
    code {
      background: var(--bg-subtle);
      padding: 2px 6px;
      border-radius: var(--radius-sm);
      font-family: var(--font-family-mono);
    }
  }
}

// 结果列表
.results-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.result-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-lg);
  background: var(--bg-subtle);
  transition: all var(--transition-fast);

  &:hover {
    background: var(--bg-hover);
  }

  &.success {
    border-left: 3px solid var(--success-color);
  }

  &.error {
    border-left: 3px solid var(--danger-color);
  }

  .result-icon {
    flex-shrink: 0;
  }

  .result-content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .result-key {
    font-family: var(--font-family-mono);
    font-size: var(--font-size-sm);
    color: var(--text-primary);
  }

  .result-path {
    font-size: var(--font-size-xs);
    color: var(--text-tertiary);
  }

  .result-meta {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
  }

  .result-time {
    font-size: var(--font-size-xs);
    color: var(--text-tertiary);
    font-family: var(--font-family-mono);
  }
}

// 响应式
@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    align-items: flex-start;

    .form-label {
      width: auto;
    }
  }

  .radio-group {
    flex-wrap: wrap;
  }

  .options-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}
</style>
