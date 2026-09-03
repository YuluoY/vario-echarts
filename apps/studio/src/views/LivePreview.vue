<template>
  <div class="live-preview">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Vario 实时预览</h1>
        <p class="page-subtitle">使用 Vario 表单实时配置 ECharts 图表</p>
      </div>
      <div class="header-actions">
        <el-select v-model="selectedExample" placeholder="选择示例" style="width: 200px" @change="handleExampleChange">
          <el-option
            v-for="example in examples"
            :key="example.id"
            :label="example.label"
            :value="example.id"
          />
        </el-select>
        <el-button @click="resetChart">重置</el-button>
      </div>
    </div>

    <!-- 主体布局：左侧表单 + 拖拽条 + 右侧图表，拼成一个整体 -->
    <div
      ref="layoutRef"
      class="live-layout"
      :class="{ dragging: isDragging }"
      :style="{ '--form-width': `${leftWidth}px` }"
    >
      <!-- 左侧：Vario 表单 -->
      <div class="form-panel">
        <div class="panel-header">
          <h3 class="panel-title">配置面板</h3>
          <span class="field-count">{{ currentExample?.options.length || 0 }} 个模块</span>
        </div>
        <div class="panel-body">
          <VNodeRenderer v-if="varioResult.vnode.value" :vnode="varioResult.vnode.value" />
          <el-empty v-else description="请选择一个示例" />
        </div>
      </div>

      <!-- 中间：拖拽分隔条 -->
      <div
        class="panel-resizer"
        title="拖拽调整宽度（双击重置）"
        @mousedown="startDrag"
        @dblclick="leftWidth = DEFAULT_LEFT_WIDTH"
      >
        <div class="resizer-grip"></div>
      </div>

      <!-- 右侧：ECharts 预览 -->
      <div class="chart-panel">
        <div class="panel-header">
          <h3 class="panel-title">{{ viewMode === 'chart' ? '图表预览' : '配置预览' }}</h3>
          <div class="panel-actions">
            <el-radio-group v-model="viewMode" size="small" style="margin-right: 12px">
              <el-radio-button value="chart">图表</el-radio-button>
              <el-radio-button value="config">配置</el-radio-button>
            </el-radio-group>
            <el-button v-if="viewMode === 'chart'" size="small" @click="toggleFullscreen">
              <el-icon><FullScreen /></el-icon>
            </el-button>
            <el-button v-if="viewMode === 'chart'" size="small" @click="downloadImage">
              <el-icon><Download /></el-icon>
            </el-button>
          </div>
        </div>
        <div class="panel-body">
          <div v-show="viewMode === 'chart'" ref="chartRef" class="chart-container"></div>
          <MonacoEditor
            v-show="viewMode === 'config'"
            :value="formattedConfig"
            language="json"
            theme="vs-dark"
            :readonly="true"
            class="monaco-editor-container"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, shallowRef, reactive } from 'vue';
import { useVario, defineMethod } from '@variojs/vue';
import type { Schema } from '@variojs/schema';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
import { merge } from 'lodash-es';
import { FullScreen, Download } from '@element-plus/icons-vue';
import VNodeRenderer from '../components/preview/VNodeRenderer.vue';
import MonacoEditor from '../components/MonacoEditor.vue';
import { useSchemaFormLayout } from '@/composables/useSchemaFormLayout';
import zhCN from '@data/i18n/zh-CN.json';

// 图表示例定义
interface ChartExample {
  id: string;
  label: string;
  description: string;
  baseOption: EChartsOption;
  options: Array<{ key: string; label: string; subType?: string }>;
}

const examples: ChartExample[] = [
  {
    id: 'line',
    label: '📈 折线图示例',
    description: '带标题、图例、工具箱的折线图',
    baseOption: {
      title: {
        text: '月度销售数据',
        left: 'center',
        top: 20
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['产品A', '产品B'],
        top: 60
      },
      toolbox: {
        feature: {
          saveAsImage: { title: '保存为图片' },
          dataZoom: { title: { zoom: '区域缩放', back: '还原' } }
        },
        right: 20,
        top: 20
      },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
        top: 120,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        name: '销量'
      },
      series: [
        {
          name: '产品A',
          type: 'line',
          data: [120, 132, 101, 134, 90, 230, 210],
          smooth: true,
          itemStyle: { color: '#5470c6' }
        },
        {
          name: '产品B',
          type: 'line',
          data: [220, 182, 191, 234, 290, 330, 310],
          smooth: true,
          itemStyle: { color: '#91cc75' }
        }
      ]
    },
    options: [
      { key: 'title', label: '标题' },
      { key: 'legend', label: '图例' },
      { key: 'grid', label: '网格' },
      { key: 'xAxis', label: 'X轴' },
      { key: 'yAxis', label: 'Y轴' },
      { key: 'series', label: '系列', subType: 'line' },
      { key: 'toolbox', label: '工具箱' },
      { key: 'tooltip', label: '提示框' }
    ]
  },
  {
    id: 'bar',
    label: '📊 柱状图示例',
    description: '带数据标签的柱状图',
    baseOption: {
      title: {
        text: '部门季度业绩',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Q1', 'Q2', 'Q3', 'Q4'],
        top: 40
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: 100,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['销售部', '市场部', '技术部', '运营部']
      },
      yAxis: {
        type: 'value',
        name: '业绩 (万元)'
      },
      series: [
        {
          name: 'Q1',
          type: 'bar',
          data: [320, 302, 301, 334],
          itemStyle: { color: '#5470c6' }
        },
        {
          name: 'Q2',
          type: 'bar',
          data: [220, 182, 191, 234],
          itemStyle: { color: '#91cc75' }
        },
        {
          name: 'Q3',
          type: 'bar',
          data: [150, 232, 201, 154],
          itemStyle: { color: '#fac858' }
        },
        {
          name: 'Q4',
          type: 'bar',
          data: [398, 352, 340, 390],
          itemStyle: { color: '#ee6666' }
        }
      ]
    },
    options: [
      { key: 'title', label: '标题' },
      { key: 'legend', label: '图例' },
      { key: 'grid', label: '网格' },
      { key: 'xAxis', label: 'X轴' },
      { key: 'yAxis', label: 'Y轴' },
      { key: 'series', label: '系列', subType: 'bar' },
      { key: 'tooltip', label: '提示框' }
    ]
  },
  {
    id: 'pie',
    label: '🥧 饼图示例',
    description: '带图例的饼图',
    baseOption: {
      title: {
        text: '流量来源分析',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 60
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '60%',
          center: ['50%', '60%'],
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    },
    options: [
      { key: 'title', label: '标题' },
      { key: 'legend', label: '图例' },
      { key: 'series', label: '系列', subType: 'pie' },
      { key: 'tooltip', label: '提示框' }
    ]
  },
  {
    id: 'scatter',
    label: '📍 散点图示例',
    description: '多维数据散点图',
    baseOption: {
      title: {
        text: '身高体重分布',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          return `${params.seriesName}<br/>身高: ${params.value[0]}cm<br/>体重: ${params.value[1]}kg`;
        }
      },
      legend: {
        data: ['男性', '女性'],
        top: 40
      },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
        top: 100,
        containLabel: true
      },
      xAxis: {
        type: 'value',
        name: '身高 (cm)',
        scale: true
      },
      yAxis: {
        type: 'value',
        name: '体重 (kg)',
        scale: true
      },
      series: [
        {
          name: '男性',
          type: 'scatter',
          symbolSize: 8,
          data: [
            [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0],
            [155.8, 53.6], [170.0, 59.0], [159.1, 47.6], [166.0, 69.8],
            [176.2, 66.8], [160.2, 75.2], [172.5, 55.2], [170.9, 54.2]
          ],
          itemStyle: { color: '#5470c6' }
        },
        {
          name: '女性',
          type: 'scatter',
          symbolSize: 8,
          data: [
            [174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6],
            [187.2, 78.8], [181.5, 74.8], [184.0, 86.4], [184.5, 78.4],
            [175.0, 62.0], [184.0, 81.6], [180.0, 76.6], [177.8, 83.6]
          ],
          itemStyle: { color: '#ee6666' }
        }
      ]
    },
    options: [
      { key: 'title', label: '标题' },
      { key: 'legend', label: '图例' },
      { key: 'grid', label: '网格' },
      { key: 'xAxis', label: 'X轴' },
      { key: 'yAxis', label: 'Y轴' },
      { key: 'series', label: '系列', subType: 'scatter' },
      { key: 'tooltip', label: '提示框' }
    ]
  }
];

// ECharts 实例
const chartRef = ref<HTMLElement | null>(null);
const chartInstance = shallowRef<echarts.ECharts | null>(null);

// 左右面板拖拽调整宽度
const layoutRef = ref<HTMLElement | null>(null);
const DEFAULT_LEFT_WIDTH = 400;
const MIN_LEFT_WIDTH = 280;   // 配置面板最小宽度
const MIN_RIGHT_WIDTH = 360;  // 图表面板最小宽度
const leftWidth = ref(DEFAULT_LEFT_WIDTH);
const isDragging = ref(false);

function startDrag(e: MouseEvent) {
  if (!layoutRef.value) return;
  e.preventDefault();
  isDragging.value = true;
  document.body.style.cursor = 'col-resize';

  const startX = e.clientX;
  const startWidth = leftWidth.value;
  const maxWidth = layoutRef.value.getBoundingClientRect().width - MIN_RIGHT_WIDTH;
  let rafId = 0;

  const onMove = (ev: MouseEvent) => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = 0;
      const delta = ev.clientX - startX;
      leftWidth.value = Math.min(Math.max(startWidth + delta, MIN_LEFT_WIDTH), Math.max(maxWidth, MIN_LEFT_WIDTH));
    });
  };
  const onUp = () => {
    isDragging.value = false;
    document.body.style.cursor = '';
    if (rafId) cancelAnimationFrame(rafId);
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
  };
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
}

// 选中的示例
const selectedExample = ref('line');
const currentExample = computed(() => examples.find(e => e.id === selectedExample.value));
const currentSchemas = ref<any[]>([]);

// 视图模式：图表 or 配置
const viewMode = ref<'chart' | 'config'>('chart');

// 最终的 ECharts 配置（响应式）
const finalOption = computed(() => {
  if (!currentExample.value) return {};
  
  // 深度合并基础配置和用户配置
  const baseOption = JSON.parse(JSON.stringify(currentExample.value.baseOption));
  return merge({}, baseOption, varioResult.state || {});
});

// 格式化的配置 JSON
const formattedConfig = computed(() => {
  return JSON.stringify(finalOption.value, null, 2);
});

// 获取全局组件
const instance = getCurrentInstance();
const globalComponents = instance?.appContext.components || {};

// 折叠面板当前激活状态
const activeNames = ref<string[]>([]);

// 使用 composable 进行表单布局转换
const { wrapCollapse } = useSchemaFormLayout({
  labelMapper: (placeholder: string) => {
    return zhCN[placeholder as keyof typeof zhCN] || placeholder;
  },
  labelPosition: 'left',
  labelWidth: '120px'
});

// 面板打开状态（用于懒加载）
const panelOpenedState = reactive<Record<string, boolean>>({});

// 构建 Vario Schema
// 注意：读取 panelOpenedState 使 computed 能响应其变化
const varioSchema = computed<Schema>(() => {
  if (!currentSchemas.value || currentSchemas.value.length === 0) {
    return { type: 'div', children: [] };
  }

  // 读取 panelOpenedState 以建立响应式依赖
  const opened = { ...panelOpenedState };

  const groups = currentSchemas.value.map((schemaData, index) => {
    // 传入 panelOpenedState 实现懒加载
    const wrappedNode = wrapCollapse(schemaData.schema, `group-${index}`, 0, opened);
    return wrappedNode;
  });

  return {
    type: 'ElCollapse',
    props: {
      modelValue: activeNames.value
    },
    events: {
      'update:modelValue': { type: 'call', method: 'onCollapseChange' }
    },
    children: groups
  } as unknown as Schema;
});

// 使用 Vario
const varioResult = useVario(varioSchema, {
  components: globalComponents,
  methods: {
    // 使用 defineMethod 获得类型推导，value 自动推导为 string[]
    onCollapseChange: defineMethod<string[]>(({ value }) => {
      activeNames.value = value;
      // 在状态中标记面板为已打开，触发 varioSchema 重新计算
      value.forEach(name => {
        panelOpenedState[name] = true;
      });
    })
  },
  modelOptions: { lazy: true },
  rendererOptions: {
    loopItemAsComponent: true
  }
});

// 加载 schemas
async function loadSchemas() {
  if (!currentExample.value) return;
  
  currentSchemas.value = [];
  
  for (const option of currentExample.value.options) {
    try {
      // BASE_URL 末尾带 /，本地为 /，子路径部署（GitHub Pages）时为 /vario-echarts/
      const base = import.meta.env.BASE_URL as string;
      const schemaPath = option.subType
        ? `${base}schemas/${option.key}/${option.subType}/index.mjs`
        : `${base}schemas/${option.key}/index.mjs`;
      
      const schemaModule = await import(/* @vite-ignore */ schemaPath);
      const schema = schemaModule.default;
      
      currentSchemas.value.push({
        key: option.key,
        label: option.label,
        schema: Array.isArray(schema) ? schema[0] : schema
      });
    } catch (error) {
      console.error(`加载 ${option.key} schema 失败:`, error);
    }
  }
  
  // 初始化第一个面板为打开状态
  if (currentSchemas.value.length > 0) {
    activeNames.value = ['group-0'];
    // 标记第一个面板为已打开
    panelOpenedState['group-0'] = true;
  }
}

// 处理示例切换
async function handleExampleChange() {
  await loadSchemas();
  resetChart();
}

// 初始化 ECharts
function initChart() {
  if (!chartRef.value) return;
  
  chartInstance.value = echarts.init(chartRef.value);
  if (finalOption.value) {
    chartInstance.value.setOption(finalOption.value);
  }
  
  // 监听窗口大小变化
  window.addEventListener('resize', handleResize);
}

// 监听 finalOption 变化，自动更新图表
watch(
  finalOption,
  (newOption) => {
    if (newOption && chartInstance.value) {
      chartInstance.value.setOption(newOption, { notMerge: false });
    }
  },
  { deep: true }
);

// 重置图表
function resetChart() {
  if (varioResult.state) {
    // 清空 vario state（state 是响应式的，会自动触发 finalOption 更新）
    Object.keys(varioResult.state).forEach(key => {
      delete varioResult.state[key];
    });
  }
}

// 处理窗口大小变化
function handleResize() {
  chartInstance.value?.resize();
}

// 全屏切换
function toggleFullscreen() {
  if (!chartRef.value) return;
  
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    chartRef.value.requestFullscreen();
  }
}

// 下载图片
function downloadImage() {
  if (!chartInstance.value) return;
  
  const url = chartInstance.value.getDataURL({
    type: 'png',
    pixelRatio: 2,
    backgroundColor: '#fff'
  });
  
  const link = document.createElement('a');
  link.download = `echarts-${selectedExample.value}-${Date.now()}.png`;
  link.href = url;
  link.click();
}

// 生命周期
let chartResizeObserver: ResizeObserver | null = null;

onMounted(async () => {
  initChart();
  // 拖拽/窗口变化时自动重算图表尺寸
  if (chartRef.value && typeof ResizeObserver !== 'undefined') {
    chartResizeObserver = new ResizeObserver(() => chartInstance.value?.resize());
    chartResizeObserver.observe(chartRef.value);
  }
  await loadSchemas();
});

onBeforeUnmount(() => {
  chartResizeObserver?.disconnect();
  window.removeEventListener('resize', handleResize);
  chartInstance.value?.dispose();
});
</script>

<script lang="ts">
import { getCurrentInstance } from 'vue';
export default {
  name: 'LivePreview'
};
</script>

<style lang="scss" scoped>
.live-preview {
  height: 100%;
  display: flex;
  flex-direction: column;
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

// 主体布局：左右面板拼成一个整体卡片，中间由拖拽条分隔
.live-layout {
  display: flex;
  flex: 1;
  min-height: 0;
  max-width: 100%;
  overflow: hidden;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);

  &.dragging {
    cursor: col-resize;
    user-select: none;
  }
}

// 面板通用样式
.form-panel,
.chart-panel {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0;
}

.form-panel {
  width: var(--form-width, 400px);
  flex-shrink: 0;
}

.chart-panel {
  flex: 1;
  min-width: 0;
}

// 拖拽分隔条
.panel-resizer {
  flex-shrink: 0;
  width: 7px;
  cursor: col-resize;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border-left: 1px solid var(--border-divider);
  border-right: 1px solid var(--border-divider);
  transition: background var(--transition-fast);
  touch-action: none;

  .resizer-grip {
    width: 3px;
    height: 28px;
    border-radius: var(--radius-full);
    background: var(--text-disabled);
    transition: background var(--transition-fast);
  }

  &:hover,
  .live-layout.dragging & {
    background: var(--primary-light);

    .resizer-grip {
      background: var(--primary-color);
    }
  }
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-4) var(--spacing-5);
  border-bottom: 1px solid var(--border-divider);
  flex-shrink: 0;
}

.panel-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin: 0;
}

.field-count {
  font-size: var(--font-size-sm);
  color: var(--text-tertiary);
  background: var(--bg-subtle);
  padding: 4px 12px;
  border-radius: var(--radius-full);
}

.panel-actions {
  display: flex;
  gap: var(--spacing-2);
}

.panel-body {
  flex: 1;
  min-height: 0;
  overflow: auto;
}

// 表单面板
.form-panel {
  .panel-body {
    padding: var(--spacing-4);
    
    :deep(.el-collapse) {
      border: none;
    }
    
    :deep(.el-collapse-item) {
      margin-bottom: var(--spacing-3);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      overflow: hidden;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    :deep(.el-collapse-item__header) {
      background: var(--bg-subtle);
      padding: 0 var(--spacing-4);
      font-weight: var(--font-weight-medium);
      border-bottom: 1px solid var(--border-color);
    }
    
    :deep(.el-collapse-item__content) {
      padding: var(--spacing-4);
    }
    
    // useSchemaFormLayout 生成的表单行样式
    :deep(.form-option-row) {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      
      .option-label {
        flex-shrink: 0;
        width: 120px;
        margin-right: 12px;
        text-align: right;
        font-size: 14px;
        color: var(--text-primary);
      }
      
      .option-control {
        flex: 1;
        min-width: 0;
        
        // 确保所有输入组件占满宽度
        > * {
          width: 100%;
        }
      }
    }
    
    // 强制表单项inline显示（兜底样式）
    :deep(.el-form-item) {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      
      .el-form-item__label {
        flex-shrink: 0;
        min-width: 120px;
        margin-right: 12px;
        text-align: right;
      }
      
      .el-form-item__content {
        flex: 1;
        min-width: 0;
      }
    }
  }
}

// 图表面板
.chart-panel {
  .panel-body {
    padding: var(--spacing-4);
    background: var(--bg-base);
  }
}

.chart-container {
  width: 100%;
  height: 100%;
  min-height: 500px;
}

.monaco-editor-container {
  width: 100%;
  height: 100%;
  min-height: 500px;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

// 响应式
@media (max-width: 1280px) {
  .live-layout {
    flex-direction: column;
  }

  .form-panel {
    width: auto;
    max-height: 400px;
  }

  .panel-resizer {
    display: none;
  }
}

@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
  }

  .header-actions {
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>
