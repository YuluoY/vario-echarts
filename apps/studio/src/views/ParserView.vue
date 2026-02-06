<template>
  <div class="parser-view">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">解析器配置</h1>
        <p class="page-subtitle">配置 Schema 解析的类型映射和规则</p>
      </div>
    </div>

    <!-- 标签页 -->
    <div class="tabs-card">
      <div class="tabs-header">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          class="tab-btn"
          :class="{ active: activeTab === tab.name }"
          @click="activeTab = tab.name"
        >
          <el-icon :size="18">
            <component :is="tab.icon" />
          </el-icon>
          <span>{{ tab.label }}</span>
        </button>
      </div>
      <div class="tabs-content">
        <TypeMapping v-if="activeTab === 'mapping'" />
        <SmartToggle v-if="activeTab === 'smart'" />
        <RuleList v-if="activeTab === 'rules'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MapLocation, MagicStick, List } from '@element-plus/icons-vue';
import TypeMapping from '../components/parser/TypeMapping.vue';
import SmartToggle from '../components/parser/SmartToggle.vue';
import RuleList from '../components/parser/RuleList.vue';

const tabs = [
  { name: 'mapping', label: '类型映射', icon: MapLocation },
  { name: 'smart', label: '智能识别', icon: MagicStick },
  { name: 'rules', label: '自定义规则', icon: List },
];

const activeTab = ref('mapping');
</script>

<style lang="scss" scoped>
.parser-view {
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

.tabs-card {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.tabs-header {
  display: flex;
  gap: var(--spacing-1);
  padding: var(--spacing-2);
  border-bottom: 1px solid var(--border-divider);
  background: var(--bg-subtle);
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    color: var(--text-primary);
    background: var(--bg-hover);
  }

  &.active {
    color: var(--primary-color);
    background: var(--bg-card);
    box-shadow: var(--shadow-sm);
  }

  .el-icon {
    font-size: var(--font-size-lg);
  }
}

.tabs-content {
  padding: var(--spacing-5);
}

// 响应式
@media (max-width: 768px) {
  .tabs-header {
    flex-wrap: wrap;
  }

  .tab-btn {
    flex: 1;
    justify-content: center;
  }
}
</style>
