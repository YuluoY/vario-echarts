<template>
  <header class="app-header glass">
    <div class="header-left">
      <div class="logo">
        <div class="logo-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" fill-opacity="0.2"/>
            <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor"/>
            <rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor"/>
            <rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" fill-opacity="0.6"/>
          </svg>
        </div>
        <span class="logo-text">ECharts Vario</span>
      </div>
    </div>
    
    <div class="header-center">
      <div class="search-box">
        <el-icon class="search-icon"><Search /></el-icon>
        <input 
          type="text" 
          placeholder="搜索..." 
          class="search-input"
        />
        <span class="search-shortcut">⌘K</span>
      </div>
    </div>
    
    <div class="header-right">
      <!-- 主题切换 -->
      <div class="theme-switcher">
        <button 
          class="theme-btn" 
          :class="{ active: theme === 'light' }"
          @click="setTheme('light')"
          title="浅色模式"
        >
          <el-icon><Sunny /></el-icon>
        </button>
        <button 
          class="theme-btn" 
          :class="{ active: theme === 'auto' }"
          @click="setTheme('auto')"
          title="跟随系统"
        >
          <el-icon><Monitor /></el-icon>
        </button>
        <button 
          class="theme-btn" 
          :class="{ active: theme === 'dark' }"
          @click="setTheme('dark')"
          title="深色模式"
        >
          <el-icon><Moon /></el-icon>
        </button>
      </div>
      
      <div class="header-divider"></div>
      
      <!-- 版本信息 -->
      <span class="version">v1.0.0</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Sunny, Moon, Monitor, Search } from '@element-plus/icons-vue';

type Theme = 'light' | 'dark' | 'auto';
const theme = ref<Theme>('auto');

const getSystemTheme = (): 'light' | 'dark' => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (t: Theme) => {
  const actualTheme = t === 'auto' ? getSystemTheme() : t;
  document.documentElement.setAttribute('data-theme', actualTheme);
};

const setTheme = (t: Theme) => {
  theme.value = t;
  localStorage.setItem('theme', t);
  applyTheme(t);
};

onMounted(() => {
  const saved = localStorage.getItem('theme') as Theme | null;
  const initialTheme = saved || 'auto';
  theme.value = initialTheme;
  applyTheme(initialTheme);
  
  // 监听系统主题变化
  if (initialTheme === 'auto') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', () => {
      if (theme.value === 'auto') {
        applyTheme('auto');
      }
    });
  }
});
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  padding: 0 var(--spacing-5);
  position: relative;
  z-index: var(--z-fixed);
}

.header-left {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  
  .logo-icon {
    width: 32px;
    height: 32px;
    color: var(--primary-color);
    
    svg {
      width: 100%;
      height: 100%;
    }
  }
  
  .logo-text {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 var(--spacing-8);
  max-width: 480px;
  margin: 0 auto;
}

.search-box {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  width: 100%;
  height: 36px;
  padding: 0 var(--spacing-3);
  background: var(--bg-subtle);
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  transition: all var(--transition-fast);
  
  &:hover {
    background: var(--bg-hover);
  }
  
  &:focus-within {
    background: var(--bg-card);
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px var(--primary-light);
  }
  
  .search-icon {
    font-size: var(--font-size-md);
    color: var(--text-tertiary);
    flex-shrink: 0;
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
  
  .search-shortcut {
    font-size: var(--font-size-xs);
    color: var(--text-tertiary);
    padding: 2px 6px;
    background: var(--bg-base);
    border-radius: var(--radius-sm);
    font-family: var(--font-family-mono);
  }
}

.header-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  flex: 0 0 auto;
}

.theme-switcher {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
  background: var(--bg-subtle);
  border-radius: var(--radius-md);
}

.theme-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    color: var(--text-primary);
    background: var(--bg-hover);
  }
  
  &.active {
    background: var(--bg-card);
    color: var(--primary-color);
    box-shadow: var(--shadow-xs);
  }
  
  .el-icon {
    font-size: var(--font-size-md);
  }
}

.header-divider {
  width: 1px;
  height: 20px;
  background: var(--border-divider);
}

.version {
  font-size: var(--font-size-sm);
  color: var(--text-tertiary);
  font-weight: var(--font-weight-medium);
}
</style>
