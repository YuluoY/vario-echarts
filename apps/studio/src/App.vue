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

    <!-- 主题切换扩散遮罩：从点击位置向外扩散 -->
    <Teleport to="body">
      <div
        v-if="transitionOrigin"
        class="theme-transition-overlay"
        :style="overlayStyle"
        :data-expanded="overlayExpanded"
        @transitionend="onOverlayTransitionEnd"
      />
    </Teleport>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted, nextTick } from 'vue';
// @ts-expect-error Element Plus locale file has no type declaration
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import AppHeader from './components/layout/AppHeader.vue';
import AppSidebar from './components/layout/AppSidebar.vue';
import { useTheme, type ResolvedTheme } from './composables/useTheme';

const locale = ref(zhCn);
const { theme, transitionOrigin, finishTransition, applyTheme, getResolvedTheme } = useTheme();
const overlayExpanded = ref(false);

const themeOverlayBg: Record<ResolvedTheme, string> = {
  light: '#F5F5F7',
  dark: '#000000',
};

const overlayStyle = computed(() => {
  if (!transitionOrigin.value) return {};
  const { x, y, theme } = transitionOrigin.value;
  const resolved = theme === 'auto' ? getResolvedTheme('auto') : theme;
  return {
    '--theme-origin-x': `${x}px`,
    '--theme-origin-y': `${y}px`,
    '--theme-overlay-bg': themeOverlayBg[resolved],
  };
});

function onOverlayTransitionEnd(e: TransitionEvent) {
  if (e.propertyName !== 'clip-path' || !transitionOrigin.value) return;
  finishTransition(transitionOrigin.value.theme);
  overlayExpanded.value = false;
}

watch(transitionOrigin, (origin) => {
  if (!origin) return;
  overlayExpanded.value = false;
  nextTick(() => {
    requestAnimationFrame(() => {
      overlayExpanded.value = true;
    });
  });
});

onMounted(() => {
  const saved = localStorage.getItem('theme') as 'light' | 'dark' | 'auto' | null;
  const initial = saved || 'auto';
  theme.value = initial;
  applyTheme(initial);
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', () => {
    if (theme.value === 'auto') applyTheme('auto');
  });
});
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

// 主题切换扩散遮罩：从点击位置向外扩散覆盖全屏
.theme-transition-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--theme-overlay-bg);
  clip-path: circle(0 at var(--theme-origin-x) var(--theme-origin-y));
  transition: clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;

  &[data-expanded='true'] {
    clip-path: circle(150vmax at var(--theme-origin-x) var(--theme-origin-y));
  }
}
</style>
