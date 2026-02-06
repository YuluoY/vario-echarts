<template>
  <div class="preview-view">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">实时预览</h1>
        <p class="page-subtitle">查看 ECharts 选项转换为 Vario Schema 的效果</p>
      </div>
      <div class="header-actions">
        <div class="search-box">
          <el-icon class="search-icon"><Search /></el-icon>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索选项..."
            class="search-input"
          />
        </div>
        <div class="view-toggle">
          <button
            class="toggle-btn"
            :class="{ active: viewMode === 'grid' }"
            @click="viewMode = 'grid'"
          >
            <el-icon><Grid /></el-icon>
          </button>
          <button
            class="toggle-btn"
            :class="{ active: viewMode === 'detail' }"
            @click="viewMode = 'detail'"
          >
            <el-icon><List /></el-icon>
          </button>
        </div>
      </div>
    </div>

    <!-- 网格视图 -->
    <div v-if="viewMode === 'grid'" class="options-grid">
      <div
        v-for="opt in filteredOptions"
        :key="opt.key"
        class="option-card"
        :class="{ 'is-active': selectedKey === opt.key, 'is-available': opt.available }"
        @click="selectOption(opt.key)"
      >
        <div class="card-header">
          <code class="option-key">{{ opt.key }}</code>
          <div class="status-badge" :class="opt.available ? 'available' : 'pending'">
            {{ opt.available ? '已生成' : '未生成' }}
          </div>
        </div>
        <div class="card-body">
          <p class="option-label">{{ opt.label }}</p>
        </div>
        <div class="card-footer">
          <button
            v-if="opt.available"
            class="action-btn primary"
            @click.stop="viewDetail(opt.key)"
          >
            <span>查看详情</span>
            <el-icon><ArrowRight /></el-icon>
          </button>
          <button v-else class="action-btn disabled" disabled>
            <span>需要生成</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 详细视图 -->
    <div v-else-if="selectedKey" class="detail-view" v-loading="loading">
      <!-- 子类型选择器 -->
      <el-alert
        v-if="availableSubTypes.length > 0"
        type="info"
        :closable="false"
        style="margin-bottom: 16px"
      >
        <template #title>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span>{{ selectedKey }} 有多种类型，请选择：</span>
            <el-radio-group v-model="selectedSubType" @change="loadOption">
              <el-radio-button
                v-for="subType in availableSubTypes"
                :key="subType"
                :value="subType"
              >
                {{ subType }}
              </el-radio-button>
            </el-radio-group>
          </div>
        </template>
      </el-alert>
      
      <div class="detail-layout">
        <!-- 左侧：Schema/状态数据 Tab 切换 -->
        <div class="detail-panel left-panel">
          <div class="panel-header">
            <el-tabs v-model="leftPanelTab" class="panel-tabs">
              <el-tab-pane label="Schema" name="schema">
                <template #label>
                  <div class="tab-label">
                    <el-icon><Document /></el-icon>
                    <span>Schema</span>
                  </div>
                </template>
              </el-tab-pane>
              <el-tab-pane label="完整 Schema" name="fullSchema">
                <template #label>
                  <div class="tab-label">
                    <el-icon><Memo /></el-icon>
                    <span>完整 Schema</span>
                  </div>
                </template>
              </el-tab-pane>
              <el-tab-pane label="布局 Schema" name="layoutSchema">
                <template #label>
                  <div class="tab-label">
                    <el-icon><SetUp /></el-icon>
                    <span>布局 Schema</span>
                  </div>
                </template>
              </el-tab-pane>
              <el-tab-pane label="状态数据" name="state">
                <template #label>
                  <div class="tab-label">
                    <el-icon><DataAnalysis /></el-icon>
                    <span>状态数据 (可编辑)</span>
                  </div>
                </template>
              </el-tab-pane>
            </el-tabs>
            <div class="panel-actions">
              <button class="icon-btn" title="复制" @click="copyCode">
                <el-icon><CopyDocument /></el-icon>
              </button>
              <button class="icon-btn" title="下载" @click="downloadCode">
                <el-icon><Download /></el-icon>
              </button>
            </div>
          </div>
          <div class="panel-body">
            <!-- 状态数据编辑提示 -->
            <el-alert
              v-if="leftPanelTab === 'state'"
              type="info"
              :closable="false"
              style="margin-bottom: 12px;"
            >
              <template #title>
                💡 实时编辑提示
              </template>
              编辑此 JSON 数据将实时同步到右侧预览组件，修改后会自动更新组件状态
            </el-alert>
            
            <CodeEditor 
              v-if="leftPanelTab === 'schema'" 
              v-model="schemaCode" 
              language="json" 
            />
            <CodeEditor 
              v-else-if="leftPanelTab === 'fullSchema'" 
              v-model="fullSchemaCode" 
              language="json" 
            />
            <CodeEditor 
              v-else-if="leftPanelTab === 'layoutSchema'" 
              v-model="layoutSchemaCode" 
              language="json" 
            />
            <CodeEditor 
              v-else 
              v-model="stateCode" 
              language="json"
              @update:modelValue="handleStateCodeChange"
            />
          </div>
        </div>

        <!-- 右侧：组件预览 -->
        <div class="detail-panel right-panel">
          <div class="panel-header">
            <div class="panel-title">
              <el-icon><View /></el-icon>
              <span>组件预览</span>
              <el-tag v-if="schemaNodeCount > 0" size="small" type="info" style="margin-left: 8px;">
                {{ schemaNodeCount }} 个节点
              </el-tag>
            </div>
            <div class="panel-actions">
              <button class="icon-btn" title="填充测试数据" @click="fillTestData">
                <el-icon><Edit /></el-icon>
              </button>
              <button class="icon-btn" title="清空数据" @click="clearTestData">
                <el-icon><Delete /></el-icon>
              </button>
              <button class="icon-btn" title="刷新" @click="refreshPreview">
                <el-icon><Refresh /></el-icon>
              </button>
            </div>
          </div>
          <div class="panel-body preview-panel">
            <SchemaPreview :schema="parsedSchema" :data="previewData" @state-change="handleStateChange" @node-count="handleNodeCount" />
          </div>
        </div>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-else class="empty-state">
      <div class="empty-icon">
        <el-icon :size="64"><View /></el-icon>
      </div>
      <h3 class="empty-title">选择一个选项</h3>
      <p class="empty-desc">点击上方卡片查看 Schema 预览效果</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import {
  Search,
  Grid,
  List,
  ArrowRight,
  Document,
  Memo,
  CopyDocument,
  Download,
  View,
  Refresh,
  DataAnalysis,
  SetUp,
  Edit,
  Delete
} from '@element-plus/icons-vue';
import CodeEditor from '../components/common/CodeEditor.vue';
import SchemaPreview from '../components/preview/SchemaPreview.vue';
import zhCN from '@data/i18n/zh-CN.json';
import { useSchemaFormLayout } from '@/composables/useSchemaFormLayout';

const route = useRoute();
const router = useRouter();
const selectedKey = ref('');
const schemaCode = ref('[]');
const fullSchemaCode = ref('[]');
const layoutSchemaCode = ref('[]'); // 布局转换后的 schema
const stateCode = ref('{}');
const previewData = ref({});
const loading = ref(false);
const searchQuery = ref('');
const viewMode = ref<'grid' | 'detail'>('grid');
const leftPanelTab = ref<'schema' | 'fullSchema' | 'layoutSchema' | 'state'>('schema');
const selectedSubType = ref<string>(''); // 子类型选择（如 continuous/piecewise）
const availableSubTypes = ref<string[]>([]); // 可用的子类型

// 移除 schema 中的 _raw 属性（用于简化显示）
function removeRawMetadata(schema: any): any {
  if (!schema) return schema;
  
  if (Array.isArray(schema)) {
    return schema.map(node => removeRawMetadata(node));
  }
  
  const cleaned = { ...schema };
  
  // 只删除 _raw 元数据，保留其他所有属性（包括 props.options）
  delete cleaned._raw;
  
  // 递归处理子节点
  if (Array.isArray(cleaned.children)) {
    cleaned.children = cleaned.children.map((child: any) => removeRawMetadata(child));
  }
  
  return cleaned;
}

// st availableSubTypes = ref<string[]>([]); // 可用的子类型

// 翻译 schema 中的文本为中文
function translateSchema(schema: any): any {
  if (!schema) return schema;
  
  if (Array.isArray(schema)) {
    return schema.map(node => translateSchema(node));
  }
  
  const translated = { ...schema };
  
  // 翻译 ElCollapseItem 的 title
  if (translated.type === 'ElCollapseItem' && translated.props?.title) {
    translated.props = {
      ...translated.props,
      title: zhCN[translated.props.title as keyof typeof zhCN] || translated.props.title
    };
  }
  
  // 翻译 placeholder
  if (translated.props?.placeholder) {
    translated.props = {
      ...translated.props,
      placeholder: zhCN[translated.props.placeholder as keyof typeof zhCN] || translated.props.placeholder
    };
  }
  
  // 递归处理子节点
  if (Array.isArray(translated.children)) {
    translated.children = translated.children.map((child: any) => translateSchema(child));
  }
  
  return translated;
}

const allOptions = ref([
  'angleAxis', 'animationDelay', 'animationDelayUpdate', 'animationDuration',
  'animationDurationUpdate', 'animationEasing', 'animationEasingUpdate', 'animationThreshold',
  'aria', 'axisPointer', 'blendMode', 'brush', 'calendar', 'dataZoom',
  'dataset', 'geo', 'graphic', 'grid', 'hoverLayerThreshold', 'legend',
  'media', 'parallel', 'parallelAxis', 'polar', 'radar', 'radiusAxis',
  'series', 'singleAxis', 'stateAnimation', 'textStyle', 'timeline', 'title',
  'toolbox', 'tooltip', 'useUTC', 'visualMap', 'xAxis', 'yAxis'
]);

const optionMeta: Record<string, { label: string; available: boolean }> = {};
allOptions.value.forEach(key => {
  optionMeta[key] = {
    label: getOptionLabel(key),
    available: true
  };
});

function getOptionLabel(key: string): string {
  const labels: Record<string, string> = {
    'title': '标题组件', 'legend': '图例组件', 'grid': '网格组件',
    'xAxis': 'X轴', 'yAxis': 'Y轴', 'polar': '极坐标系',
    'radiusAxis': '半径轴', 'angleAxis': '角度轴', 'radar': '雷达图',
    'dataZoom': '数据区域缩放', 'visualMap': '视觉映射', 'tooltip': '提示框',
    'axisPointer': '坐标轴指示器', 'toolbox': '工具箱', 'brush': '区域选择',
    'geo': '地理坐标系', 'parallel': '平行坐标系', 'parallelAxis': '平行坐标轴',
    'singleAxis': '单轴', 'timeline': '时间轴', 'graphic': '图形元素',
    'calendar': '日历坐标系', 'dataset': '数据集', 'aria': '无障碍访问',
    'series': '系列', 'textStyle': '全局文字样式',
    'animationDuration': '动画时长', 'animationEasing': '动画缓动',
    'animationDelay': '动画延迟', 'animationDurationUpdate': '更新动画时长',
    'animationEasingUpdate': '更新动画缓动', 'animationDelayUpdate': '更新动画延迟',
    'animationThreshold': '动画阈值', 'blendMode': '混合模式',
    'hoverLayerThreshold': '悬浮层阈值', 'useUTC': '使用UTC时间',
    'stateAnimation': '状态动画', 'media': '媒体查询'
  };
  return labels[key] || key;
}

const options = computed(() => {
  return allOptions.value.map(key => ({
    key,
    label: optionMeta[key]?.label || key,
    available: optionMeta[key]?.available ?? false
  }));
});

const filteredOptions = computed(() => {
  if (!searchQuery.value) return options.value;
  const query = searchQuery.value.toLowerCase();
  return options.value.filter(opt =>
    opt.key.toLowerCase().includes(query) ||
    opt.label.toLowerCase().includes(query)
  );
});

const parsedSchema = computed(() => {
  try {
    const parsed = JSON.parse(schemaCode.value);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    return [];
  }
});

const selectOption = (key: string) => {
  selectedKey.value = key;
};

const viewDetail = async (key: string) => {
  selectedKey.value = key;
  viewMode.value = 'detail';
  
  // 检测是否有子类型
  await checkSubTypes(key);
  
  // 如果有子类型，等待用户选择
  if (availableSubTypes.value.length === 0) {
    loadOption();
  }
};

// 检测选项是否有子类型（如 visualMap 有 continuous/piecewise，series 有 line/bar/pie 等）
const checkSubTypes = async (key: string) => {
  // 不同选项的已知子类型映射（直接使用实际存在的类型，无需检测）
  const knownSubTypes: Record<string, string[]> = {
    visualMap: ['continuous', 'piecewise'],
    dataZoom: ['inside', 'slider'],
    series: [
      'bar', 'boxplot', 'candlestick', 'custom', 'effectScatter', 'funnel',
      'gauge', 'graph', 'heatmap', 'line', 'lines', 'map', 'parallel',
      'pictorialBar', 'pie', 'radar', 'sankey', 'scatter', 'sunburst',
      'themeRiver', 'tree', 'treemap'
    ]
  };
  
  const detectedTypes = knownSubTypes[key] || [];
  
  availableSubTypes.value = detectedTypes;
  selectedSubType.value = detectedTypes[0] || '';
};

const loadOption = async () => {
  if (!selectedKey.value) return;
  loading.value = true;
  try {
    // 如果有选中的子类型，加载子类型的 Schema
    const schemaPath = selectedSubType.value 
      ? `/schemas/${selectedKey.value}/${selectedSubType.value}/index.mjs`
      : `/schemas/${selectedKey.value}/index.mjs`;
    
    const schemaModule = await import(/* @vite-ignore */ schemaPath);
    let schema = schemaModule.default;
    
    // 翻译 schema 为中文
    const translatedSchema = translateSchema(schema);
    
    // 使用 useSchemaFormLayout 转换生成布局 schema
    const { wrapCollapse } = useSchemaFormLayout([], {
      labelMapper: (placeholder) => zhCN[placeholder as keyof typeof zhCN] || placeholder,
      cache: false,
      labelPosition: 'left',
      labelWidth: '140px'
    });
    
    const layoutSchema = Array.isArray(translatedSchema) 
      ? translatedSchema.map((node: any, index: number) => wrapCollapse(node, `group-${index}`))
      : [wrapCollapse(translatedSchema, 'group-0')];
    
    layoutSchemaCode.value = JSON.stringify(layoutSchema, null, 2);
    
    // 保存完整的 schema（包含 _raw 和 props.options）
    fullSchemaCode.value = JSON.stringify(translatedSchema, null, 2);
    
    // 移除 _raw 生成简化版本（保留 props.options）
    const cleanedSchema = removeRawMetadata(translatedSchema);
    schemaCode.value = JSON.stringify(cleanedSchema, null, 2);
    
    stateCode.value = JSON.stringify({}, null, 2); // 初始状态为空
    schemaCode.value = JSON.stringify(cleanedSchema, null, 2);
    
    stateCode.value = JSON.stringify({}, null, 2); // 初始状态为空
  } catch (error: any) {
    console.error('Failed to load schema:', error);
    const errorMsg = error?.message?.includes('Failed to fetch') 
      ? `Schema 文件不存在，请先运行: pnpm convert -- -k ${selectedKey.value}`
      : `加载失败: ${error?.message || error}`;
    schemaCode.value = JSON.stringify([{ type: 'div', children: errorMsg }], null, 2);
    fullSchemaCode.value = schemaCode.value;
  } finally {
    loading.value = false;
  }
};

// 处理状态变化（从组件同步）
let isUpdatingFromEditor = false; // 标记是否来自编辑器更新
const handleStateChange = (state: any) => {
  if (!isUpdatingFromEditor) {
    const newCode = JSON.stringify(state, null, 2);
    if (stateCode.value !== newCode) {
      stateCode.value = newCode;
      console.log('🔄 从组件更新编辑器');
    }
  }
};

// 处理状态代码编辑（从编辑器同步到 previewData）
let stateCodeChangeTimeout: ReturnType<typeof setTimeout> | null = null;
const handleStateCodeChange = (newCode: string) => {
  // 防抖处理，避免频繁解析
  if (stateCodeChangeTimeout) {
    clearTimeout(stateCodeChangeTimeout);
  }
  
  stateCodeChangeTimeout = setTimeout(() => {
    try {
      isUpdatingFromEditor = true;
      const parsed = JSON.parse(newCode);
      previewData.value = parsed;
      console.log('📝 从编辑器更新 state:', parsed);
      
      // 延迟重置标记
      setTimeout(() => {
        isUpdatingFromEditor = false;
      }, 100);
    } catch (e) {
      // JSON 解析错误，忽略（用户可能正在编辑中）
      console.log('⚠️ JSON 解析失败（可能正在编辑中）');
      isUpdatingFromEditor = false;
    }
  }, 500); // 500ms 防抖
};

// 监听 previewData 变化，同步到 stateCode（初始化时）
watch(
  () => previewData.value,
  (newData) => {
    if (!isUpdatingFromEditor) {
      const newCode = JSON.stringify(newData, null, 2);
      // 只有当内容真正改变时才更新，避免循环
      if (stateCode.value !== newCode) {
        stateCode.value = newCode;
        console.log('🔄 从 previewData 初始化编辑器');
      }
    }
  },
  { deep: true, immediate: true }
);

// Schema 节点数量
const schemaNodeCount = ref(0);
const handleNodeCount = (count: number) => {
  schemaNodeCount.value = count;
};

// 刷新预览
const refreshPreview = () => {
  // 触发重新渲染
  const temp = schemaCode.value;
  schemaCode.value = '';
  setTimeout(() => {
    schemaCode.value = temp;
  }, 100);
};

// 填充测试数据
const fillTestData = () => {
  // 根据当前 schema 生成嵌套结构的测试数据
  const testData: Record<string, any> = {
    title: {
      text: '测试标题',
      textStyle: {
        color: '#409eff',
        fontSize: 18
      },
      left: 'center',
      top: 10
    },
    series: [
      {
        type: 'line',
        name: '销量',
        smooth: true,
        lineStyle: {
          width: 2,
          color: 'linear-gradient(90deg, #409eff 0%, #67c23a 100%)'
        }
      }
    ],
    xAxis: {
      type: 'category'
    },
    yAxis: {
      type: 'value'
    },
    legend: {
      show: true,
      orient: 'horizontal'
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    grid: {
      left: 60,
      right: 40,
      top: 80,
      bottom: 60
    }
  };
  
  previewData.value = testData;
  console.log('✅ 填充测试数据:', JSON.stringify(testData, null, 2));
  ElMessage.success('已填充测试数据');
};

// 清空测试数据
const clearTestData = () => {
  previewData.value = {};
  console.log('🗑️ 清空测试数据');
  ElMessage.info('已清空测试数据');
};

// 复制代码
const copyCode = async () => {
  let code = schemaCode.value;
  if (leftPanelTab.value === 'fullSchema') {
    code = fullSchemaCode.value;
  } else if (leftPanelTab.value === 'layoutSchema') {
    code = layoutSchemaCode.value;
  } else if (leftPanelTab.value === 'state') {
    code = stateCode.value;
  }
  try {
    await navigator.clipboard.writeText(code);
    ElMessage.success('已复制到剪贴板');
  } catch (error) {
    ElMessage.error('复制失败');
  }
};

// 下载代码
const downloadCode = () => {
  let code = schemaCode.value;
  let type = 'schema';
  if (leftPanelTab.value === 'fullSchema') {
    code = fullSchemaCode.value;
    type = 'full-schema';
  } else if (leftPanelTab.value === 'layoutSchema') {
    code = layoutSchemaCode.value;
    type = 'layout-schema';
  } else if (leftPanelTab.value === 'state') {
    code = stateCode.value;
    type = 'state';
  }
  const blob = new Blob([code], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${selectedKey.value}-${type}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

onMounted(() => {
  const key = route.query.key as string;
  if (key && allOptions.value.includes(key)) {
    selectedKey.value = key;
    viewMode.value = 'detail';
    loadOption();
  }
});
</script>

<style lang="scss" scoped>
.preview-view {
  padding-bottom: var(--spacing-8);
}

// 页面头部
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-6);
  gap: var(--spacing-4);
  flex-wrap: wrap;
}

.header-content {
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

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.search-box {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  width: 240px;
  height: 40px;
  padding: 0 var(--spacing-3);
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: all var(--transition-fast);

  &:hover {
    border-color: var(--border-hover);
  }

  &:focus-within {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px var(--primary-light);
  }

  .search-icon {
    font-size: var(--font-size-md);
    color: var(--text-tertiary);
  }

  .search-input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    font-size: var(--font-size-base);
    color: var(--text-primary);

    &::placeholder {
      color: var(--text-tertiary);
    }
  }
}

.view-toggle {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
}

.toggle-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    color: var(--text-primary);
    background: var(--bg-hover);
  }

  &.active {
    background: var(--primary-light);
    color: var(--primary-color);
  }
}

// 选项网格
.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-4);
}

.option-card {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-5);
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
    border-color: var(--border-hover);
  }

  &.is-active {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px var(--primary-light);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-3);
  }

  .option-key {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    background: var(--bg-subtle);
    padding: 4px 10px;
    border-radius: var(--radius-md);
  }

  .status-badge {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    padding: 2px 8px;
    border-radius: var(--radius-full);

    &.available {
      background: rgba(52, 199, 89, 0.1);
      color: var(--success-color);
    }

    &.pending {
      background: var(--bg-subtle);
      color: var(--text-tertiary);
    }
  }

  .card-body {
    flex: 1;
    margin-bottom: var(--spacing-4);
  }

  .option-label {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
  }

  .card-footer {
    margin-top: auto;
  }

  .action-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2);
    padding: var(--spacing-3);
    border-radius: var(--radius-lg);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    transition: all var(--transition-fast);
    border: none;

    &.primary {
      background: var(--primary-color);
      color: white;

      &:hover {
        background: var(--primary-hover);
        box-shadow: 0 4px 12px rgba(0, 113, 227, 0.3);
      }
    }

    &.disabled {
      background: var(--bg-subtle);
      color: var(--text-tertiary);
      cursor: not-allowed;
    }
  }
}

// 详细视图
.detail-view {
  height: calc(100vh - 240px); // 减去头部高度
  min-height: 600px;
  display: flex;
  flex-direction: column;
}

.detail-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-5);
  flex: 1;
  min-height: 0; // 重要：允许子元素缩小
  
  // 确保在小屏幕时内容不会溢出
  max-width: 100%;
  overflow: hidden;
}

.detail-panel {
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  overflow: hidden;
  min-height: 0; // 重要：允许子元素缩小

  &.left-panel,
  &.right-panel {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-3) var(--spacing-5);
    border-bottom: 1px solid var(--border-divider);
    flex-shrink: 0;
    
    // Tabs 样式
    :deep(.panel-tabs) {
      flex: 1;
      
      .el-tabs__header {
        margin: 0;
        border: none;
      }
      
      .el-tabs__nav-wrap::after {
        display: none;
      }
      
      .el-tabs__item {
        padding: 0;
        height: auto;
      }
      
      .tab-label {
        display: flex;
        align-items: center;
        gap: var(--spacing-2);
        padding: var(--spacing-2) var(--spacing-3);
        font-size: var(--font-size-base);
        
        .el-icon {
          color: var(--primary-color);
        }
      }
    }
  }

  .panel-title {
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

  .panel-actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    flex-shrink: 0;
  }

  .panel-body {
    flex: 1;
    min-height: 0; // 重要：允许内容滚动
    overflow: auto;
    
    // CodeEditor 自适应高度
    :deep(.code-editor) {
      height: 100%;
    }
  }

  .preview-panel {
    padding: var(--spacing-5);
  }

  &.preview-panel {
    background: var(--bg-subtle);
  }
}

.icon-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }
}

// 空状态
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-12);
  text-align: center;

  .empty-icon {
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-subtle);
    border-radius: var(--radius-2xl);
    color: var(--text-tertiary);
    margin-bottom: var(--spacing-5);
  }

  .empty-title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    margin: 0 0 var(--spacing-2) 0;
  }

  .empty-desc {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    margin: 0;
  }
}

// 响应式
@media (max-width: 1280px) {
  .detail-layout {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }

  .search-box {
    width: 200px;
  }
}

@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
  }

  .header-actions {
    width: 100%;

    .search-box {
      flex: 1;
      min-width: 0;
    }
  }

  .options-grid {
    grid-template-columns: 1fr;
  }
  
  .detail-view {
    height: auto;
    min-height: auto;
  }
}
</style>
