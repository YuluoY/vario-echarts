import { ref, computed } from 'vue';

export type Theme = 'light' | 'dark' | 'auto';
export type ResolvedTheme = 'light' | 'dark';

const theme = ref<Theme>('auto');

const getSystemTheme = (): ResolvedTheme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getResolvedTheme = (t: Theme): ResolvedTheme => (t === 'auto' ? getSystemTheme() : t);

// 平滑过渡：切换时给 <html> 挂一个临时 class，让全站颜色属性做短促的 CSS 过渡
// （组件、阴影、层级全部保持渲染，只有颜色在渐变），结束后移除避免影响日常交互动画
let transitionTimer: number | undefined;

const enableSmoothTransition = () => {
  const root = document.documentElement;
  root.classList.add('theme-transitioning');
  if (transitionTimer) window.clearTimeout(transitionTimer);
  transitionTimer = window.setTimeout(() => {
    root.classList.remove('theme-transitioning');
    transitionTimer = undefined;
  }, 400);
};

export function useTheme() {
  const resolvedTheme = computed<ResolvedTheme>(() => getResolvedTheme(theme.value));

  const applyTheme = (t: Theme) => {
    const actual = getResolvedTheme(t);
    document.documentElement.setAttribute('data-theme', actual);
  };

  const setTheme = (t: Theme) => {
    const nextResolved = getResolvedTheme(t);
    const currentResolved = getResolvedTheme(theme.value);
    if (nextResolved === currentResolved && t === theme.value) return;

    theme.value = t;
    localStorage.setItem('theme', t);
    enableSmoothTransition();
    applyTheme(t);
  };

  return {
    theme,
    resolvedTheme,
    setTheme,
    applyTheme,
    getSystemTheme,
    getResolvedTheme,
  };
}
