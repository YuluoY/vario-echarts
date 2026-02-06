<template>
  <div class="materials-view">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">物料管理</h1>
        <p class="page-subtitle">管理 ECharts 选项的缓存状态</p>
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
        <el-select v-model="filterType" placeholder="过滤类型" clearable class="filter-select">
          <el-option label="全部" value="" />
          <el-option label="普通选项" value="option" />
          <el-option label="容器" value="container" />
          <el-option label="Series图表类型" value="series-child" />
        </el-select>
        <button
          v-if="selectedRows.length > 0"
          class="btn btn-success"
          :disabled="batchLoading"
          @click="batchFetch"
        >
          <el-icon v-if="batchLoading" class="is-loading"><Loading /></el-icon>
          <el-icon v-else><Download /></el-icon>
          <span>批量获取 ({{ selectedRows.length }})</span>
        </button>
        <button
          class="btn btn-primary"
          :disabled="fetcherStore.isFetching"
          @click="refreshData"
        >
          <el-icon v-if="fetcherStore.isFetching" class="is-loading"><Loading /></el-icon>
          <el-icon v-else><Refresh /></el-icon>
          <span>{{ fetcherStore.isFetching ? '加载中...' : '刷新' }}</span>
        </button>
      </div>
    </div>

    <!-- 数据表格 -->
    <div class="table-card">
      <el-table
        ref="tableRef"
        :data="filteredOptions"
        v-loading="fetcherStore.isLoading"
        @selection-change="handleSelectionChange"
        @row-click="handleRowClick"
      >
        <el-table-column type="selection" width="48" />
        <el-table-column prop="key" label="选项名" min-width="200">
          <template #default="{ row }">
            <code class="option-key">{{ row.key }}</code>
          </template>
        </el-table-column>

        <el-table-column prop="type" label="类型" width="120">
          <template #default="{ row }">
            <span class="type-badge" :class="row.type">
              {{ 
                row.type === 'container' ? '容器' : 
                row.type === 'series-parent' ? '系列父级' :
                row.type === 'series-child' ? '图表类型' : '选项'
              }}
            </span>
          </template>
        </el-table-column>

        <el-table-column label="缓存状态" width="120">
          <template #default="{ row }">
            <span class="status-badge" :class="row.cached ? 'cached' : 'uncached'">
              <el-icon :size="12">
                <component :is="row.cached ? 'CircleCheckFilled' : 'CircleClose'" />
              </el-icon>
              <span>{{ row.cached ? '已缓存' : '未缓存' }}</span>
            </span>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="160" fixed="right">
          <template #default="{ row }">
            <div class="action-btns">
              <button
                v-if="!row.cached"
                class="btn btn-sm btn-primary"
                @click.stop="fetchOption(row.key)"
              >
                <el-icon><Download /></el-icon>
                <span>获取</span>
              </button>
              <button
                v-else
                class="btn btn-sm btn-secondary"
                @click.stop="previewOption(row.key)"
              >
                <el-icon><View /></el-icon>
                <span>预览</span>
              </button>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <!-- 表格底部统计 -->
      <div class="table-footer">
        <span class="stats-text">
          共 <strong>{{ fetcherStore.optionCount }}</strong> 个选项，
          已缓存 <strong class="success">{{ fetcherStore.cachedCount }}</strong> 个
        </span>
      </div>
    </div>

    <!-- 详情抽屉 -->
    <el-drawer
      v-model="showDrawer"
      :title="selectedOption?.key"
      size="480px"
      class="detail-drawer"
    >
      <div v-if="selectedOption" class="option-detail">
        <div class="detail-section">
          <h3 class="section-title">基本信息</h3>
          <div class="info-list">
            <div class="info-item">
              <span class="info-label">选项名</span>
              <code class="info-value">{{ selectedOption.key }}</code>
            </div>
            <div class="info-item">
              <span class="info-label">类型</span>
              <span class="type-badge" :class="selectedOption.type">
                {{ 
                  selectedOption.type === 'container' ? '容器' : 
                  selectedOption.type === 'series-parent' ? '系列父级' :
                  selectedOption.type === 'series-child' ? '图表类型' : '选项'
                }}
              </span>
            </div>
            <div class="info-item">
              <span class="info-label">缓存状态</span>
              <span class="status-badge" :class="selectedOption.cached ? 'cached' : 'uncached'">
                {{ selectedOption.cached ? '已缓存' : '未缓存' }}
              </span>
            </div>
          </div>
        </div>

        <div class="detail-actions">
          <button
            v-if="!selectedOption.cached"
            class="btn btn-primary"
            :disabled="optionLoading"
            @click="fetchOption(selectedOption.key)"
          >
            <el-icon v-if="optionLoading" class="is-loading"><Loading /></el-icon>
            <el-icon v-else><Download /></el-icon>
            <span>获取数据</span>
          </button>
          <button class="btn btn-secondary" @click="previewOption(selectedOption.key)">
            <el-icon><View /></el-icon>
            <span>预览 Schema</span>
          </button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus';
import {
  Search,
  Download,
  Refresh,
  View,
  Loading,
  CircleCheckFilled,
  CircleClose
} from '@element-plus/icons-vue';
import { useFetcherStore } from '../stores';

interface OptionItem {
  key: string;
  type: 'option' | 'container' | 'series-parent' | 'series-child';
  parent?: string;
  cached: boolean;
}

const router = useRouter();
const fetcherStore = useFetcherStore();

const searchQuery = ref('');
const filterType = ref('');
const showDrawer = ref(false);
const selectedOption = ref<OptionItem | null>(null);
const optionLoading = ref(false);
const selectedRows = ref<OptionItem[]>([]);
const batchLoading = ref(false);
const tableRef = ref();

const filteredOptions = computed(() => {
  let result = fetcherStore.optionsList;

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(opt => opt.key.toLowerCase().includes(query));
  }

  if (filterType.value) {
    result = result.filter(opt => opt.type === filterType.value);
  }

  return result;
});

const refreshData = async () => {
  await fetcherStore.fetchBaseData(true);
};

const fetchOption = async (key: string) => {
  optionLoading.value = true;
  try {
    await fetcherStore.fetchOption(key);
    if (selectedOption.value?.key === key) {
      selectedOption.value.cached = true;
    }
    ElMessage.success(`成功获取 ${key}`);
  } catch (e) {
    const error = e as Error;
    // 如果是CLI命令提示，使用不同的样式
    if (error.message.includes('请在终端运行')) {
      ElMessageBox.alert(error.message, '需要手动下载', {
        confirmButtonText: '我知道了',
        type: 'info',
        dangerouslyUseHTMLString: false,
        customStyle: {
          width: '600px'
        }
      });
    } else {
      ElMessage.error(`获取失败: ${error.message}`);
    }
  } finally {
    optionLoading.value = false;
  }
};

const previewOption = (key: string) => {
  router.push(`/preview/${key}`);
};

const handleRowClick = (row: OptionItem) => {
  selectedOption.value = row;
  showDrawer.value = true;
};

const handleSelectionChange = (selection: OptionItem[]) => {
  selectedRows.value = selection;
};

const batchFetch = async () => {
  const uncachedRows = selectedRows.value.filter(row => !row.cached);
  if (uncachedRows.length === 0) return;

  batchLoading.value = true;
  try {
    await fetcherStore.batchFetchOptions(uncachedRows.map(r => r.key));
    tableRef.value?.clearSelection();
  } finally {
    batchLoading.value = false;
  }
};

onMounted(async () => {
  // 等待数据加载完成
  if (fetcherStore.optionsList.length === 0) {
    await fetcherStore.fetchBaseData();
  }
});
</script>

<style lang="scss" scoped>
.materials-view {
  padding-bottom: var(--spacing-8);
}

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
  flex-wrap: wrap;
}

.search-box {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  width: 200px;
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

.filter-select {
  width: 140px;
}

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

  &.btn-success {
    background: var(--success-color);
    color: white;

    &:hover:not(:disabled) {
      background: #2db14c;
      box-shadow: 0 4px 12px rgba(52, 199, 89, 0.3);
    }
  }

  &.btn-sm {
    padding: var(--spacing-2) var(--spacing-3);
    font-size: var(--font-size-sm);
  }
}

// 表格卡片
.table-card {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  overflow: hidden;

  :deep(.el-table) {
    --el-table-bg-color: var(--bg-card);
    --el-table-tr-bg-color: var(--bg-card);
    --el-table-header-bg-color: var(--bg-subtle);
    --el-table-row-hover-bg-color: var(--bg-hover);
    --el-table-border-color: var(--border-divider);

    .el-table__header {
      th {
        font-weight: var(--font-weight-semibold);
        color: var(--text-primary);
      }
    }
  }
}

.option-key {
  background: var(--bg-subtle);
  padding: 4px 10px;
  border-radius: var(--radius-md);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--text-primary);
}

.type-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);

  &.container {
    background: rgba(255, 149, 0, 0.1);
    color: var(--warning-color);
  }

  &.option {
    background: var(--primary-light);
    color: var(--primary-color);
  }

  &.series-parent {
    background: rgba(103, 194, 58, 0.1);
    color: #67c23a;
  }

  &.series-child {
    background: rgba(144, 147, 153, 0.1);
    color: #909399;
  }
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);

  &.cached {
    background: rgba(52, 199, 89, 0.1);
    color: var(--success-color);
  }

  &.uncached {
    background: var(--bg-subtle);
    color: var(--text-tertiary);
  }
}

.action-btns {
  display: flex;
  gap: var(--spacing-2);
}

.table-footer {
  display: flex;
  justify-content: flex-end;
  padding: var(--spacing-4) var(--spacing-5);
  border-top: 1px solid var(--border-divider);

  .stats-text {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);

    strong {
      color: var(--text-primary);

      &.success {
        color: var(--success-color);
      }
    }
  }
}

// 详情抽屉
:deep(.detail-drawer) {
  .el-drawer__header {
    margin-bottom: 0;
    padding: var(--spacing-5);
    border-bottom: 1px solid var(--border-divider);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
  }

  .el-drawer__body {
    padding: var(--spacing-5);
  }
}

.option-detail {
  .detail-section {
    margin-bottom: var(--spacing-6);
  }

  .section-title {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    margin: 0 0 var(--spacing-4) 0;
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
  }

  .info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-3) 0;
    border-bottom: 1px solid var(--border-divider);

    &:last-child {
      border-bottom: none;
    }
  }

  .info-label {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
  }

  .info-value {
    font-family: var(--font-family-mono);
    font-size: var(--font-size-sm);
  }

  .detail-actions {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    margin-top: var(--spacing-6);

    .btn {
      width: 100%;
      justify-content: center;
    }
  }
}

// 响应式
@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
  }

  .header-actions {
    width: 100%;

    .search-box {
      flex: 1;
    }
  }
}
</style>
