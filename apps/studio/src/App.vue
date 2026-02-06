<template>
  <el-config-provider :locale="locale">
    <div class="app-container">
      <!-- 顶部导航 - 玻璃拟态效果 -->
      <AppHeader />
      
      <!-- 主体区域 -->
      <div class="app-body">
        <!-- 侧边栏 - 图标式导航 -->
        <AppSidebar />
        
        <!-- 主内容区 -->
        <main class="app-main">
          <router-view v-slot="{ Component }">
            <transition name="page" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </main>
      </div>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// @ts-expect-error Element Plus locale file has no type declaration
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import AppHeader from './components/layout/AppHeader.vue';
import AppSidebar from './components/layout/AppSidebar.vue';

const locale = ref(zhCn);
</script>

<style lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: var(--bg-base);
  overflow: hidden;
}

.app-body {
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
}

.app-main {
  flex: 1;
  padding: var(--spacing-6);
  overflow-y: auto;
  overflow-x: hidden;
  background: var(--bg-base);
  min-width: 0; // 允许内容缩小
  
  // 确保内容区域有最大宽度且居中，但不要强制限制
  > * {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
  }
  
  // 响应式 padding
  @media (max-width: 1280px) {
    padding: var(--spacing-4);
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-3);
    padding-bottom: calc(var(--spacing-3) + 60px); // 为底部导航留出空间
  }
}

// 页面切换动画 - Apple 风格
.page-enter-active,
.page-leave-active {
  transition: 
    opacity var(--duration-normal) var(--ease-standard),
    transform var(--duration-normal) var(--ease-standard);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

// 滚动条样式
.app-main {
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--text-tertiary);
    border-radius: var(--radius-full);
    
    &:hover {
      background: var(--text-secondary);
    }
  }
}
</style>
