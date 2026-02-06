<template>
  <div class="schema-preview" :key="renderKey">
    <div v-if="!schema || (Array.isArray(schema) && schema.length === 0)" class="empty-state">
      <el-empty description="暂无 Schema 数据" />
    </div>
    
    <div v-else class="preview-content">
      <!-- 左 label 右组件的表单布局 -->
      <div class="schema-render form-layout">
        <VNodeRenderer v-if="varioResult.vnode.value" :vnode="varioResult.vnode.value" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, getCurrentInstance, watch, h } from 'vue';
import { useVario } from '@variojs/vue';
import type { Schema } from '@variojs/schema';
import { useSchemaFormLayout } from '@/composables/useSchemaFormLayout';
import VNodeRenderer from './VNodeRenderer.vue';
import zhCN from '@data/i18n/zh-CN.json';

interface FormGroup {
  title: string;
  name: string;
  schema: Schema;
}

const props = defineProps<{
  schema: any[];
  data?: Record<string, unknown>;
}>();

const emit = defineEmits<{
  (e: 'state-change', state: any): void;
  (e: 'node-count', count: number): void;
}>();

// 获取全局注册的组件
const instance = getCurrentInstance();
const globalComponents = instance?.appContext.components || {};

// 字段标签直接使用 Schema 中的 placeholder（已通过 DeepSeek API 翻译）
// 使用高性能 composable 进行表单布局转换（空间换时间）

const activeCollapse = ref<string[]>([]);

// 计算 Schema 节点数量
const schemaNodeCount = computed(() => {
  if (!props.schema || !Array.isArray(props.schema)) return 0;
  
  let count = 0;
  const countNodes = (nodes: any[]) => {
    for (const node of nodes) {
      count++;
      if (Array.isArray(node.children)) {
        countNodes(node.children);
      }
    }
  };
  countNodes(props.schema);
  return count;
});

// 监听节点数量变化，通知父组件
watch(schemaNodeCount, (count) => {
  emit('node-count', count);
}, { immediate: true });

// 获取要渲染的 Schema（始终渲染所有节点）
const schemaToRender = computed(() => {
  if (!props.schema || !Array.isArray(props.schema)) return [];
  return props.schema;
});

// 使用中文字典翻译
// 使用高性能 composable（WeakMap 缓存，空间换时间）
const { wrapCollapse } = useSchemaFormLayout([], {
  labelMapper: (placeholder) => {
    // 使用中文字典翻译
    return zhCN[placeholder as keyof typeof zhCN] || placeholder;
  },
  cache: true, // 启用缓存提高性能
  labelPosition: 'left',
  labelWidth: '140px'
});

// 将 Schema 转换为分组结构
const formGroups = computed<FormGroup[]>(() => {
  const schema = schemaToRender.value;
  if (!schema || !Array.isArray(schema)) return [];
  
  return schema.map((node, index) => {
    const wrappedNode = wrapCollapse(node, `group-${index}`);
    const rawTitle = node.props?.title || node.props?.name || `Group ${index + 1}`;
    // 翻译 title
    const title = zhCN[rawTitle as keyof typeof zhCN] || rawTitle;
    const name = node.props?.name || `group-${index}`;
    
    return {
      title,
      name,
      schema: wrappedNode
    };
  });
});

// 用于强制重新渲染的 key
const renderKey = ref(0);

// 全局 vario 实例
// 注意：将 activeCollapse 从 varioSchema 中移除，避免折叠状态变化导致整个 Schema 重建
const varioSchema = computed<Schema>(() => {
  // 读取 renderKey 以便在需要时强制重新计算
  const _ = renderKey.value;
  
  const groups = formGroups.value;
  if (groups.length === 0) {
    return { type: 'div', children: '暂无数据' };
  }
  
  // 不再在这里绑定 modelValue，让 ElCollapse 自己管理状态
  return {
    type: 'ElCollapse',
    props: {},
    children: groups.map(g => g.schema)
  } as Schema;
});

// 清理空字符串默认值的辅助函数
function cleanEmptyStrings(obj: any): any {
  if (!obj || typeof obj !== 'object') return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(item => cleanEmptyStrings(item));
  }
  
  const cleaned: any = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value === '') {
      // 跳过空字符串，让字段保持 undefined
      continue;
    } else if (value && typeof value === 'object') {
      cleaned[key] = cleanEmptyStrings(value);
    } else {
      cleaned[key] = value;
    }
  }
  return cleaned;
}

// 直接使用 useVario，让它内部处理响应式
const varioResult = useVario(varioSchema, {
  components: globalComponents,
  modelOptions: { lazy: true },
  rendererOptions: {
    loopItemAsComponent: true,
    usePathMemo: true
  },
  state: props.data ? cleanEmptyStrings(props.data) : undefined
});

// 监听 props.data 变化，更新 vario state
watch(
  () => props.data,
  (newData) => {
    if (newData && varioResult.state) {
      console.log('📥 接收到外部数据更新:', JSON.parse(JSON.stringify(newData)));
      // 清理空字符串后再合并
      const cleanedData = cleanEmptyStrings(newData);
      Object.assign(varioResult.state, cleanedData);
    }
  },
  { deep: true }
);

// 监听状态变化，发出事件（使用防抖避免频繁触发）
let stateEmitTimeout: ReturnType<typeof setTimeout> | null = null;
watch(
  () => varioResult.state,
  (newState) => {
    if (newState) {
      // 深度监听，控制台打印整个 state
      console.log('🔄 State 变化:', JSON.parse(JSON.stringify(newState)));
      
      // 防抖处理，避免频繁触发父组件更新
      if (stateEmitTimeout) {
        clearTimeout(stateEmitTimeout);
      }
      stateEmitTimeout = setTimeout(() => {
        emit('state-change', newState);
      }, 100);
    }
  },
  { deep: true }
);
</script>

<style lang="scss" scoped>
.schema-preview {
  min-height: 300px;
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.preview-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.schema-render {
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background: var(--bg-base);
  max-height: 600px;
  overflow-y: auto;
}

// 表单选项行样式：左 label 右组件
.form-options {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

:deep(.form-option-row) {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-xs) 0;
  
  &.standalone {
    padding: var(--spacing-sm);
    background: var(--bg-subtle);
    border-radius: var(--radius-sm);
    margin-bottom: var(--spacing-xs);
  }
}

:deep(.option-label) {
  flex: 0 0 180px;
  font-size: var(--font-size-small);
  color: var(--text-secondary);
  text-align: right;
  padding-right: var(--spacing-sm);
  word-break: break-word;
  
  &::after {
    content: ':';
  }
}

:deep(.option-control) {
  flex: 1;
  min-width: 0;
  
  .el-input,
  .el-input-number,
  .el-select,
  .el-color-picker {
    width: 100%;
  }
  
  .el-switch {
    width: auto;
  }
}

// 嵌套分组样式
:deep(.el-collapse-item) {
  .el-collapse-item__header {
    font-weight: 500;
    background: var(--bg-subtle);
  }
  
  .el-collapse-item__content {
    padding: var(--spacing-sm) var(--spacing-md);
  }
  
  // 嵌套的折叠面板
  .el-collapse {
    border: none;
    
    .el-collapse-item__header {
      background: transparent;
      font-size: var(--font-size-small);
    }
    
    // 多级折叠面板层级缩进
    .el-collapse-item {
      &[data-depth="1"] {
        margin-left: 20px;
      }
      
      &[data-depth="2"] {
        margin-left: 40px;
      }
      
      &[data-depth="3"] {
        margin-left: 60px;
      }
      
      &[data-depth="4"] {
        margin-left: 80px;
      }
    }
  }
}

.preview-data {
  margin-top: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.data-header {
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--bg-subtle);
  border-bottom: 1px solid var(--border-color);
  
  :deep(.el-radio-group) {
    display: flex;
  }
}

.data-content {
  pre {
    margin: 0;
    
    code {
      display: block;
      padding: var(--spacing-md);
      background: var(--bg-base);
      font-size: var(--font-size-small);
      font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
      overflow-x: auto;
      max-height: 300px;
      overflow-y: auto;
      color: var(--text-primary);
      line-height: 1.5;
    }
  }
}
</style>
