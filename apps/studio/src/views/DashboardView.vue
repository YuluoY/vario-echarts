<template>
  <div class="dashboard-view">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">系统概览</h1>
        <p class="page-subtitle">ECharts Schema 生成系统控制台 - v{{ version }}</p>
      </div>
      <div class="header-actions">
        <el-tag :type="isDark ? 'info' : 'warning'" effect="plain" size="large">
          <el-icon><component :is="isDark ? Moon : Sunny" /></el-icon>
          {{ isDark ? '深色模式' : '浅色模式' }}
        </el-tag>
      </div>
    </div>

    <!-- 核心统计 -->
    <div class="metrics-section">
      <div class="metrics-grid">
        <div class="metric-card metric-primary">
          <div class="metric-icon">
            <el-icon :size="24"><DocumentCopy /></el-icon>
          </div>
          <div class="metric-content">
            <div class="metric-value">{{ metrics.generatedSchemas }}<span class="metric-total">/68</span></div>
            <div class="metric-label">已生成 Schema</div>
            <div class="metric-progress">
              <el-progress 
                :percentage="schemaProgress" 
                :show-text="false"
                :stroke-width="4"
              />
            </div>
          </div>
        </div>

        <div class="metric-card metric-success">
          <div class="metric-icon">
            <el-icon :size="24"><ChatDotRound /></el-icon>
          </div>
          <div class="metric-content">
            <div class="metric-value">{{ metrics.translationCount }}</div>
            <div class="metric-label">中文翻译条目</div>
            <div class="metric-change positive">
              <el-icon><Check /></el-icon>
              完整覆盖
            </div>
          </div>
        </div>

        <div class="metric-card metric-info">
          <div class="metric-icon">
            <el-icon :size="24"><FolderOpened /></el-icon>
          </div>
          <div class="metric-content">
            <div class="metric-value">{{ metrics.cachedOptions }}<span class="metric-total">/68</span></div>
            <div class="metric-label">配置项详情缓存</div>
            <div class="metric-progress">
              <el-progress 
                :percentage="optionProgress" 
                :show-text="false"
                :stroke-width="4"
                color="#67c23a"
              />
            </div>
          </div>
        </div>

        <div class="metric-card metric-warning">
          <div class="metric-icon">
            <el-icon :size="24"><Clock /></el-icon>
          </div>
          <div class="metric-content">
            <div class="metric-value">{{ metrics.dataFreshness }}</div>
            <div class="metric-label">数据新鲜度</div>
            <div class="metric-subtitle">{{ metrics.lastUpdateTime }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 快捷操作 -->
    <div class="section">
      <div class="section-header">
        <h2 class="section-title">快捷操作</h2>
        <p class="section-desc">快速访问常用功能</p>
      </div>
      <div class="actions-grid">
        <button class="action-card" @click="router.push('/preview')">
          <div class="action-icon action-primary">
            <el-icon :size="20"><View /></el-icon>
          </div>
          <div class="action-content">
            <div class="action-title">查看所有 Schema</div>
            <div class="action-desc">浏览和预览所有已生成的配置 Schema</div>
          </div>
          <el-icon class="action-arrow"><ArrowRight /></el-icon>
        </button>

        <button class="action-card" @click="router.push('/generator')">
          <div class="action-icon action-success">
            <el-icon :size="20"><Setting /></el-icon>
          </div>
          <div class="action-content">
            <div class="action-title">配置生成器</div>
            <div class="action-desc">批量生成和管理 ECharts 配置 Schema</div>
          </div>
          <el-icon class="action-arrow"><ArrowRight /></el-icon>
        </button>

        <button class="action-card" @click="goToTranslation">
          <div class="action-icon action-info">
            <el-icon :size="20"><ChatDotRound /></el-icon>
          </div>
          <div class="action-content">
            <div class="action-title">管理翻译</div>
            <div class="action-desc">查看和编辑中英文翻译配置</div>
          </div>
          <el-icon class="action-arrow"><ArrowRight /></el-icon>
        </button>

        <button class="action-card" @click="handleRefreshData">
          <div class="action-icon action-warning">
            <el-icon :size="20"><Refresh /></el-icon>
          </div>
          <div class="action-content">
            <div class="action-title">刷新数据</div>
            <div class="action-desc">从 ECharts 官网获取最新配置数据</div>
          </div>
          <el-icon class="action-arrow"><ArrowRight /></el-icon>
        </button>

        <button class="action-card" @click="goToDocs">
          <div class="action-icon action-primary">
            <el-icon :size="20"><Document /></el-icon>
          </div>
          <div class="action-content">
            <div class="action-title">查看文档</div>
            <div class="action-desc">使用指南、API 文档和最佳实践</div>
          </div>
          <el-icon class="action-arrow"><ArrowRight /></el-icon>
        </button>

        <button class="action-card" @click="handleCleanCache">
          <div class="action-icon action-danger">
            <el-icon :size="20"><Delete /></el-icon>
          </div>
          <div class="action-content">
            <div class="action-title">清理缓存</div>
            <div class="action-desc">清除本地缓存数据并重新开始</div>
          </div>
          <el-icon class="action-arrow"><ArrowRight /></el-icon>
        </button>
      </div>
    </div>

    <!-- 系统信息 -->
    <div class="section">
      <div class="section-header">
        <h2 class="section-title">系统信息</h2>
      </div>
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">版本号</div>
          <div class="info-value">{{ version }}</div>
        </div>
        <div class="info-item">
          <div class="info-label">当前主题</div>
          <div class="info-value">{{ isDark ? '深色模式' : '浅色模式' }}</div>
        </div>
        <div class="info-item">
          <div class="info-label">数据存储</div>
          <div class="info-value">{{ dataPath }}</div>
        </div>
        <div class="info-item">
          <div class="info-label">输出目录</div>
          <div class="info-value">{{ outputPath }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus';
import {
  DocumentCopy,
  ChatDotRound,
  FolderOpened,
  Clock,
  Check,
  View,
  Setting,
  Refresh,
  Document,
  Delete,
  ArrowRight,
  Moon,
  Sunny
} from '@element-plus/icons-vue';

const router = useRouter();

// 版本信息
const version = ref('1.0.0');
const dataPath = ref('data/');
const outputPath = ref('output/');

// 主题检测
const isDark = computed(() => {
  if (typeof document !== 'undefined') {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }
  return false;
});

// 核心指标
const metrics = ref({
  generatedSchemas: 0, // 从 output 目录统计
  translationCount: 0, // 从 zh-CN.json 统计
  cachedOptions: 0, // 从 data/base/options 统计
  dataFreshness: '最新',
  lastUpdateTime: '刚刚'
});

// 计算进度
const schemaProgress = computed(() => Math.round(metrics.value.generatedSchemas / 68 * 100));
const optionProgress = computed(() => Math.round(metrics.value.cachedOptions / 68 * 100));

// 加载真实数据
const loadMetrics = async () => {
  try {
    // 获取已生成的schema数量
    const schemasRes = await fetch('/api/schemas');
    if (schemasRes.ok) {
      const schemas = await schemasRes.json() as string[];
      metrics.value.generatedSchemas = schemas.length;
    }

    // 获取翻译条目数量
    const translationsRes = await fetch('/api/translations/count');
    if (translationsRes.ok) {
      const data = await translationsRes.json() as { count: number };
      metrics.value.translationCount = data.count;
    }

    // 获取已缓存的options数量
    const cacheRes = await fetch('/api/cache/options');
    if (cacheRes.ok) {
      const cached = await cacheRes.json() as string[];
      metrics.value.cachedOptions = cached.length;
    }
  } catch (e) {
    console.error('Failed to load metrics:', e);
  }
};

// 刷新数据
const handleRefreshData = () => {
  ElMessageBox.confirm(
    '这将从 ECharts 官网重新获取最新的配置数据。是否继续？',
    '确认刷新',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(() => {
    ElMessage.info({
      message: '请在终端运行: pnpm cli fetch --all --force --save-to-base',
      duration: 5000
    });
  });
};

// 清理缓存
const handleCleanCache = () => {
  ElMessageBox.confirm(
    '这将清除所有缓存数据。是否继续？',
    '确认清理',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(() => {
    ElMessage.info({
      message: '请在终端运行: pnpm clean:cache',
      duration: 5000
    });
  });
};

// 跳转到翻译管理（打开文件）
const goToTranslation = () => {
  ElMessage.info({
    message: '翻译文件位于: data/i18n/zh-CN.json',
    duration: 3000
  });
};

// 跳转到文档
const goToDocs = () => {
  ElMessage.info({
    message: '文档位于: docs/ 目录',
    duration: 3000
  });
};

// 更新指标数据
const updateMetrics = () => {
  // 这里可以实际读取文件系统或 localStorage
  const lastUpdate = localStorage.getItem('lastUpdate');
  if (lastUpdate) {
    const updateDate = new Date(lastUpdate);
    const now = new Date();
    const diff = now.getTime() - updateDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
      metrics.value.dataFreshness = '最新';
      metrics.value.lastUpdateTime = '今天';
    } else if (days === 1) {
      metrics.value.dataFreshness = '较新';
      metrics.value.lastUpdateTime = '昨天';
    } else if (days <= 7) {
      metrics.value.dataFreshness = '较旧';
      metrics.value.lastUpdateTime = `${days} 天前`;
    } else {
      metrics.value.dataFreshness = '过期';
      metrics.value.lastUpdateTime = `${days} 天前`;
    }
  }
};

onMounted(async () => {
  await loadMetrics();
  updateMetrics();
});
</script>

<style scoped lang="scss">
.dashboard-view {
  padding: var(--spacing-6);
  max-width: 1400px;
  margin: 0 auto;
}

// 页面头部
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-8);
  gap: var(--spacing-4);
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
  :deep(.el-tag) {
    padding: var(--spacing-2) var(--spacing-4);
    font-size: var(--font-size-sm);
    
    .el-icon {
      margin-right: var(--spacing-2);
    }
  }
}

// 指标卡片
.metrics-section {
  margin-bottom: var(--spacing-8);
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-4);
}

.metric-card {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-4);
  padding: var(--spacing-5);
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  transition: all var(--transition-fast);
  position: relative;
  overflow: hidden;
  
  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--primary-color);
    opacity: 0;
    transition: opacity var(--transition-fast);
  }
  
  &:hover::before {
    opacity: 1;
  }
}

.metric-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-subtle);
  color: var(--text-secondary);
  flex-shrink: 0;
}

.metric-primary .metric-icon {
  background: var(--primary-light);
  color: var(--primary-color);
}

.metric-success .metric-icon {
  background: rgba(52, 199, 89, 0.1);
  color: var(--success-color);
}

.metric-info .metric-icon {
  background: rgba(90, 200, 250, 0.1);
  color: var(--info-color);
}

.metric-warning .metric-icon {
  background: rgba(255, 149, 0, 0.1);
  color: var(--warning-color);
}

.metric-content {
  flex: 1;
  min-width: 0;
}

.metric-value {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: var(--spacing-1);
  
  .metric-total {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-normal);
    color: var(--text-tertiary);
    margin-left: var(--spacing-1);
  }
}

.metric-label {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-2);
}

.metric-subtitle {
  font-size: var(--font-size-xs);
  color: var(--text-tertiary);
  margin-top: var(--spacing-1);
}

.metric-progress {
  margin-top: var(--spacing-2);
  
  :deep(.el-progress-bar__outer) {
    background-color: var(--bg-subtle);
  }
}

.metric-change {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-1);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  margin-top: var(--spacing-2);
  
  &.positive {
    background: rgba(52, 199, 89, 0.1);
    color: var(--success-color);
  }
}

// 区块
.section {
  margin-bottom: var(--spacing-8);
}

.section-header {
  margin-bottom: var(--spacing-4);
  
  .section-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    margin: 0 0 var(--spacing-1) 0;
  }
  
  .section-desc {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    margin: 0;
  }
}

// 快捷操作
.actions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-4);
}

.action-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  padding: var(--spacing-5);
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all var(--transition-fast);
  text-align: left;
  
  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
    border-color: var(--border-hover);
  }
  
  &:active {
    transform: translateY(0);
  }
}

.action-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  &.action-primary {
    background: var(--primary-light);
    color: var(--primary-color);
  }
  
  &.action-success {
    background: rgba(52, 199, 89, 0.1);
    color: var(--success-color);
  }
  
  &.action-info {
    background: rgba(90, 200, 250, 0.1);
    color: var(--info-color);
  }
  
  &.action-warning {
    background: rgba(255, 149, 0, 0.1);
    color: var(--warning-color);
  }
  
  &.action-danger {
    background: rgba(255, 59, 48, 0.1);
    color: var(--danger-color);
  }
}

.action-content {
  flex: 1;
  min-width: 0;
}

.action-title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-1);
}

.action-desc {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  line-height: 1.4;
}

.action-arrow {
  color: var(--text-tertiary);
  transition: transform var(--transition-fast);
}

.action-card:hover .action-arrow {
  transform: translateX(4px);
  color: var(--text-secondary);
}

// 系统信息
.info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-4);
}

.info-item {
  padding: var(--spacing-4);
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
}

.info-label {
  font-size: var(--font-size-xs);
  color: var(--text-tertiary);
  margin-bottom: var(--spacing-1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-value {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  font-family: var(--font-mono);
}

// 响应式
@media (max-width: 1200px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .actions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    gap: var(--spacing-4);
  }
  
  .metrics-grid,
  .actions-grid,
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .metric-card {
    padding: var(--spacing-4);
  }
}
</style>
