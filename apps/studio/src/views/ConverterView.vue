<template>
  <div class="converter-view">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Schema 转换器</h1>
        <p class="page-subtitle">在线查看 ECharts 选项转换为 Vario Schema 的结果</p>
      </div>
    </div>

    <div class="converter-layout">
      <!-- 左侧配置面板 -->
      <div class="config-panel">
        <div class="panel-card">
          <div class="panel-header">
            <div class="panel-title">
              <el-icon><Setting /></el-icon>
              <span>转换配置</span>
            </div>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label class="form-label">选项名称</label>
              <el-select
                v-model="selectedKey"
                filterable
                placeholder="选择要转换的选项"
                class="form-select"
                @change="loadSchema"
              >
                <el-option
                  v-for="key in availableKeys"
                  :key="key"
                  :label="key"
                  :value="key"
                />
              </el-select>
            </div>

            <div class="form-actions">
              <button
                class="btn btn-primary"
                :disabled="!selectedKey || loading"
                @click="loadSchema"
              >
                <el-icon v-if="loading" class="is-loading"><Loading /></el-icon>
                <el-icon v-else><View /></el-icon>
                <span>{{ loading ? '加载中...' : '查看 Schema' }}</span>
              </button>
              <button
                class="btn btn-secondary"
                :disabled="!result"
                @click="copyResult"
              >
                <el-icon><CopyDocument /></el-icon>
                <span>复制结果</span>
              </button>
            </div>
          </div>
        </div>

        <div class="panel-card info-card">
          <div class="panel-header">
            <div class="panel-title">
              <el-icon><InfoFilled /></el-icon>
              <span>使用说明</span>
            </div>
          </div>
          <div class="panel-body">
            <p class="info-text">
              <strong>Schema 转换器</strong>可以查看任意 ECharts 配置项转换为 Vario Schema 的结果。
            </p>
            <div class="info-divider"></div>
            <div class="info-hint">
              <el-icon><Document /></el-icon>
              <span>Schema 文件位于 <code>output/{option}/index.mjs</code></span>
            </div>
            <div class="info-hint">
              <el-icon><Document /></el-icon>
              <span>如果 Schema 不存在，请先运行：<br/><code>pnpm convert -- -k {option}</code></span>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧结果面板 -->
      <div class="result-panel">
        <div class="panel-card result-card">
          <div class="panel-header">
            <div class="panel-title">
              <el-icon><Document /></el-icon>
              <span>Schema 结果</span>
            </div>
            <div v-if="result" class="result-badge">
              {{ nodeCount }} 个节点
            </div>
          </div>
          <div class="panel-body">
            <div v-if="loading" class="loading-state">
              <el-icon class="is-loading" :size="32"><Loading /></el-icon>
              <p>正在加载 Schema...</p>
            </div>
            <pre v-else-if="result" class="result-code">{{ JSON.stringify(result, null, 2) }}</pre>
            <div v-else-if="!selectedKey" class="empty-state">
              <div class="empty-icon">
                <el-icon :size="48"><Document /></el-icon>
              </div>
              <h3 class="empty-title">选择一个选项</h3>
              <p class="empty-desc">从左侧面板选择要查看的 ECharts 选项</p>
            </div>
            <div v-else class="empty-state">
              <div class="empty-icon">
                <el-icon :size="48"><Warning /></el-icon>
              </div>
              <h3 class="empty-title">暂无数据</h3>
              <p class="empty-desc">该选项的 Schema 文件不存在</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';
import {
  View,
  CopyDocument,
  InfoFilled,
  Setting,
  Document,
  Loading,
  Warning
} from '@element-plus/icons-vue';

const selectedKey = ref('');
const availableKeys = ref([
  'angleAxis', 'aria', 'axisPointer', 'brush', 'calendar', 'color', 'darkMode',
  'dataZoom', 'dataset', 'geo', 'graphic', 'grid', 'legend', 'parallel',
  'parallelAxis', 'polar', 'radar', 'radiusAxis', 'singleAxis', 'textStyle',
  'timeline', 'title', 'toolbox', 'tooltip', 'visualMap', 'xAxis', 'yAxis'
]);
const loading = ref(false);
const result = ref<any[] | null>(null);

const nodeCount = computed(() => {
  if (!result.value) return 0;
  const countNodes = (nodes: any[]): number => {
    let count = 0;
    for (const node of nodes) {
      count++;
      if (node.children && Array.isArray(node.children)) {
        count += countNodes(node.children);
      }
    }
    return count;
  };
  return countNodes(result.value);
});

async function loadSchema() {
  if (!selectedKey.value) {
    ElMessage.warning('请先选择一个选项');
    return;
  }
  loading.value = true;
  try {
    const schemaModule = await import(
      /* @vite-ignore */
      `/schemas/${selectedKey.value}/index.mjs`
    );
    result.value = schemaModule.default;
    ElMessage.success(`成功加载 ${selectedKey.value} 的 Schema`);
  } catch (error: any) {
    console.error('Failed to load schema:', error);
    result.value = null;
    if (error?.message?.includes('Failed to fetch')) {
      ElMessage.error({
        message: `Schema 文件不存在，请先运行: pnpm convert -- -k ${selectedKey.value}`,
        duration: 5000
      });
    } else {
      ElMessage.error(`加载失败: ${error?.message || error}`);
    }
  } finally {
    loading.value = false;
  }
}

async function copyResult() {
  if (!result.value) return;
  try {
    const text = JSON.stringify(result.value, null, 2);
    await navigator.clipboard.writeText(text);
    ElMessage.success('已复制到剪贴板');
  } catch (error) {
    ElMessage.error('复制失败，请手动复制');
  }
}
</script>

<style lang="scss" scoped>
.converter-view {
  padding-bottom: var(--spacing-8);
}

// 桌面端：页面撑满可视区，结果面板内部滚动，外层容器不出滚动条
@media (min-width: 1025px) {
  .converter-view {
    // 100vh - 顶栏高度 - app-main 上下 padding（>1280 时为 spacing-6）
    height: calc(100vh - var(--header-height) - var(--spacing-6) * 2);
    display: flex;
    flex-direction: column;
    padding-bottom: 0;

    .page-header {
      flex-shrink: 0;
      margin-bottom: var(--spacing-4);
    }

    .converter-layout {
      flex: 1;
      min-height: 0;
    }

    .config-panel {
      min-height: 0;
      overflow-y: auto; // 矮窗口下左栏自身滚动
    }
  }

  // 1025-1280 区间 app-main padding 收窄为 spacing-4，高度同步修正
  @media (max-width: 1280px) {
    .converter-view {
      height: calc(100vh - var(--header-height) - var(--spacing-4) * 2);
    }
  }
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

.converter-layout {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: var(--spacing-5);
}

.panel-card {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4) var(--spacing-5);
  border-bottom: 1px solid var(--border-divider);
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

.panel-body {
  padding: var(--spacing-5);
}

// 配置面板
.config-panel {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.form-group {
  margin-bottom: var(--spacing-5);

  &:last-child {
    margin-bottom: 0;
  }
}

.form-label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-2);
}

.form-select {
  width: 100%;
}

.form-actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
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
}

// 信息卡片
.info-card {
  .info-text {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;

    strong {
      color: var(--text-primary);
    }
  }

  .info-divider {
    height: 1px;
    background: var(--border-divider);
    margin: var(--spacing-4) 0;
  }

  .info-hint {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-2);
    font-size: var(--font-size-sm);
    color: var(--text-tertiary);
    margin-bottom: var(--spacing-3);

    &:last-child {
      margin-bottom: 0;
    }

    .el-icon {
      margin-top: 2px;
      flex-shrink: 0;
    }

    code {
      background: var(--bg-subtle);
      padding: 2px 6px;
      border-radius: var(--radius-sm);
      font-family: var(--font-family-mono);
      color: var(--primary-color);
    }
  }
}

// 结果面板
.result-panel {
  min-height: 0;

  .result-card {
    height: 100%;
    display: flex;
    flex-direction: column;

    .panel-body {
      flex: 1;
      min-height: 0; // 允许收缩，代码区改为内部滚动
      display: flex;
      flex-direction: column;
      position: relative;
    }
  }
}

.result-badge {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  padding: 4px 10px;
  background: rgba(52, 199, 89, 0.1);
  color: var(--success-color);
  border-radius: var(--radius-full);
}

.result-code {
  background: var(--bg-subtle);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  overflow: auto;
  flex: 1;
  min-height: 0; // 超出面板高度时在代码区内部滚动
  font-size: var(--font-size-sm);
  line-height: 1.6;
  margin: 0;
  font-family: var(--font-family-mono);
  color: var(--text-primary);
}

// 状态
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--text-secondary);
  gap: var(--spacing-3);
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: var(--spacing-8);

  .empty-icon {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-subtle);
    border-radius: var(--radius-2xl);
    color: var(--text-tertiary);
    margin-bottom: var(--spacing-4);
  }

  .empty-title {
    font-size: var(--font-size-lg);
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
@media (max-width: 1024px) {
  .converter-layout {
    grid-template-columns: 1fr;
  }
}
</style>
