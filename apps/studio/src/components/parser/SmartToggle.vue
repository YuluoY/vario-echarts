<template>
  <div class="smart-toggle">
    <el-alert
      title="智能识别说明"
      type="info"
      description="启用智能识别后，系统会自动检测 ECharts 属性的语义类型，并映射到最合适的 UI 组件。"
      :closable="false"
      class="info-alert"
    />
    
    <div class="toggle-list">
      <div v-for="item in toggles" :key="item.key" class="toggle-item">
        <div class="toggle-info">
          <span class="toggle-label">{{ item.label }}</span>
          <span class="toggle-desc">{{ item.description }}</span>
        </div>
        <el-switch v-model="item.enabled" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface ToggleItem {
  key: string;
  label: string;
  description: string;
  enabled: boolean;
}

const toggles = ref<ToggleItem[]>([
  {
    key: 'color',
    label: '颜色识别',
    description: '自动识别 Color 类型属性，映射到颜色选择器',
    enabled: true
  },
  {
    key: 'size',
    label: '尺寸识别',
    description: '自动识别尺寸相关属性，支持百分比和 auto 关键字',
    enabled: true
  },
  {
    key: 'position',
    label: '位置识别',
    description: '自动识别位置属性，支持百分比和方向关键字',
    enabled: true
  },
  {
    key: 'opacity',
    label: '透明度识别',
    description: '自动识别透明度属性（0-1 范围）',
    enabled: true
  },
  {
    key: 'style',
    label: '样式识别',
    description: '自动识别线条样式、字体样式等枚举类型',
    enabled: true
  },
  {
    key: 'union',
    label: '联合类型识别',
    description: '自动处理 string | number 等联合类型',
    enabled: true
  },
  {
    key: 'function',
    label: '函数类型识别',
    description: '识别回调函数类型，显示为代码编辑器',
    enabled: true
  },
  {
    key: 'array',
    label: '数组类型识别',
    description: '识别数组类型，自动生成数组输入组件',
    enabled: true
  }
]);
</script>

<style lang="scss" scoped>
.smart-toggle {
  .info-alert {
    margin-bottom: var(--spacing-lg);
  }
  
  .toggle-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .toggle-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-md);
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
  }
  
  .toggle-info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }
  
  .toggle-label {
    font-weight: 500;
    color: var(--text-primary);
  }
  
  .toggle-desc {
    font-size: var(--font-size-small);
    color: var(--text-secondary);
  }
}
</style>
