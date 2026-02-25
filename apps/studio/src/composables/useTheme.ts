import { ref, computed } from 'vue';

export type Theme = 'light' | 'dark' | 'auto';
export type ResolvedTheme = 'light' | 'dark';

export interface ThemeTransitionOrigin {
  theme: Theme;
  x: number;
  y: number;
}

const theme = ref<Theme>('auto');
const transitionOrigin = ref<ThemeTransitionOrigin | null>(null);

const getSystemTheme = (): ResolvedTheme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getResolvedTheme = (t: Theme): ResolvedTheme => (t === 'auto' ? getSystemTheme() : t);

export function useTheme() {
  const resolvedTheme = computed<ResolvedTheme>(() => getResolvedTheme(theme.value));

  const applyTheme = (t: Theme) => {
    const actual = getResolvedTheme(t);
    document.documentElement.setAttribute('data-theme', actual);
  };

  const setTheme = (t: Theme, event?: MouseEvent) => {
    const nextResolved = getResolvedTheme(t);
    const currentResolved = getResolvedTheme(theme.value);
    if (nextResolved === currentResolved && t === theme.value) return;

    theme.value = t;
    localStorage.setItem('theme', t);

    if (event) {
      transitionOrigin.value = { theme: t, x: event.clientX, y: event.clientY };
    } else {
      applyTheme(t);
    }
  };

  const finishTransition = (t: Theme) => {
    applyTheme(t);
    transitionOrigin.value = null;
  };

  return {
    theme,
    resolvedTheme,
    transitionOrigin,
    setTheme,
    applyTheme,
    finishTransition,
    getSystemTheme,
    getResolvedTheme,
  };
}
