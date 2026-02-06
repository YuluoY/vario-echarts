<template>
  <aside class="app-sidebar">
    <nav class="sidebar-nav">
      <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        class="nav-item"
        :class="{ active: isActive(item.path) }"
        :title="item.title"
      >
        <div class="nav-icon">
          <el-icon :size="22">
            <component :is="item.icon" />
          </el-icon>
        </div>
        <span class="nav-label">{{ item.title }}</span>
        <div v-if="isActive(item.path)" class="nav-indicator"></div>
      </router-link>
    </nav>
    
    <div class="sidebar-footer">
      <a
        href="https://github.com/your-repo"
        target="_blank"
        class="nav-item"
        title="GitHub"
      >
        <div class="nav-icon">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </div>
        <span class="nav-label">GitHub</span>
      </a>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import {
  DataAnalysis,
  Coin,
  Refresh,
  Setting,
  View,
  VideoPlay,
  Monitor
} from '@element-plus/icons-vue';

const route = useRoute();

const menuItems = [
  { path: '/', title: '概览', icon: DataAnalysis },
  { path: '/materials', title: '物料', icon: Coin },
  { path: '/converter', title: '转换', icon: Refresh },
  { path: '/parser', title: '配置', icon: Setting },
  { path: '/preview', title: '预览', icon: View },
  { path: '/live-preview', title: '实时', icon: Monitor },
  { path: '/generator', title: '生成', icon: VideoPlay },
];

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/';
  }
  return route.path.startsWith(path);
};
</script>

<style lang="scss" scoped>
.app-sidebar {
  width: var(--sidebar-width);
  background: var(--bg-card);
  border-right: 1px solid var(--border-divider);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--spacing-3) 0;
  position: relative;
  z-index: var(--z-sticky);
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  padding: 0 var(--spacing-2);
}

.nav-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-2);
  border-radius: var(--radius-lg);
  color: var(--text-secondary);
  text-decoration: none;
  transition: all var(--transition-fast);
  position: relative;
  cursor: pointer;
  
  &:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }
  
  &.active {
    background: var(--primary-light);
    color: var(--primary-color);
    
    .nav-icon {
      transform: scale(1.05);
    }
  }
  
  .nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    transition: transform var(--transition-fast);
    
    svg {
      width: 22px;
      height: 22px;
    }
  }
  
  .nav-label {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    white-space: nowrap;
    opacity: 0;
    width: 0;
    overflow: hidden;
    transition: all var(--transition-normal);
  }
  
  .nav-indicator {
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 20px;
    background: var(--primary-color);
    border-radius: 0 var(--radius-full) var(--radius-full) 0;
    opacity: 0;
    transition: opacity var(--transition-fast);
  }
  
  &.active .nav-indicator {
    opacity: 1;
  }
}

.sidebar-footer {
  padding: 0 var(--spacing-2);
  border-top: 1px solid var(--border-divider);
  margin-top: auto;
  padding-top: var(--spacing-3);
}

// 展开状态 - 悬停时展开
.app-sidebar {
  transition: width var(--transition-normal);
  
  &:hover {
    width: var(--sidebar-expanded);
    
    .nav-label {
      opacity: 1;
      width: auto;
      margin-left: var(--spacing-1);
    }
  }
}

// 响应式 - 移动端和小屏幕
@media (max-width: 1280px) {
  .app-sidebar {
    width: 60px; // 在中等屏幕减小宽度
    
    &:hover {
      width: 200px; // 展开时也减小宽度
    }
  }
}

@media (max-width: 768px) {
  .app-sidebar {
    width: 100%;
    height: auto;
    flex-direction: row;
    padding: var(--spacing-2);
    border-right: none;
    border-top: 1px solid var(--border-divider);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    
    .sidebar-nav {
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
    }
    
    .nav-item {
      flex-direction: column;
      padding: var(--spacing-2);
      gap: var(--spacing-1);
      
      .nav-label {
        opacity: 1;
        width: auto;
        font-size: var(--font-size-xs);
      }
      
      .nav-indicator {
        display: none;
      }
    }
    
    .sidebar-footer {
      display: none;
    }
    
    &:hover {
      width: 100%;
    }
  }
}
</style>
