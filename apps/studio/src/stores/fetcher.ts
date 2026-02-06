import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useFetcherStore = defineStore('fetcher', () => {
  // 状态
  const isLoading = ref(false);
  const isFetching = ref(false);
  const fetchProgress = ref<{
    phase: string;
    current: number;
    total: number;
    item?: string;
  } | null>(null);

  const baseData = ref<{
    option: Record<string, unknown>;
    type: Record<string, unknown>;
    timestamp: number;
  } | null>(null);

  const cachedOptions = ref<string[]>([]);
  const optionsList = ref<Array<{
    key: string;
    type: string;
    cached: boolean;
  }>>([]);

  const error = ref<Error | null>(null);

  // 计算属性
  const optionCount = computed(() => optionsList.value.length);
  const cachedCount = computed(() => optionsList.value.filter(o => o.cached).length);

  // 模拟数据
  const mockOptionKeys = [
    'title', 'legend', 'grid', 'xAxis', 'yAxis', 'polar', 'radiusAxis', 'angleAxis',
    'radar', 'dataZoom', 'visualMap', 'tooltip', 'axisPointer', 'toolbox', 'brush',
    'geo', 'series-line', 'series-bar', 'series-pie', 'series-scatter'
  ];

  // 操作
  const fetchBaseData = async (force = false) => {
    isFetching.value = true;
    error.value = null;

    try {
      // TODO: 通过 API 获取数据
      // 模拟异步操作
      await new Promise(resolve => setTimeout(resolve, 500));

      // 模拟进度更新
      fetchProgress.value = { phase: 'fetching', current: 0, total: 100 };
      for (let i = 0; i <= 100; i += 20) {
        fetchProgress.value = { phase: 'fetching', current: i, total: 100 };
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // 模拟数据
      baseData.value = {
        option: {},
        type: {},
        timestamp: Date.now()
      };

      // 提取选项列表
      const cached = ['title', 'legend', 'grid', 'xAxis', 'yAxis'];
      cachedOptions.value = cached;

      optionsList.value = mockOptionKeys.map(key => ({
        key,
        type: key.includes('-') ? 'box' : 'option',
        cached: cached.includes(key)
      }));

      return baseData.value;
    } catch (e) {
      error.value = e as Error;
      throw e;
    } finally {
      isFetching.value = false;
      fetchProgress.value = null;
    }
  };

  const fetchOption = async (key: string) => {
    try {
      // TODO: 通过 API 获取选项详情
      await new Promise(resolve => setTimeout(resolve, 300));

      // 更新缓存状态
      const index = optionsList.value.findIndex(o => o.key === key);
      if (index > -1) {
        optionsList.value[index].cached = true;
      }
      if (!cachedOptions.value.includes(key)) {
        cachedOptions.value.push(key);
      }

      return { key, data: {} };
    } catch (e) {
      error.value = e as Error;
      throw e;
    }
  };

  const batchFetchOptions = async (keys: string[]) => {
    try {
      // TODO: 批量获取选项
      for (const key of keys) {
        await fetchOption(key);
      }
    } catch (e) {
      error.value = e as Error;
      throw e;
    }
  };

  const checkUpdates = async () => {
    try {
      // TODO: 通过 API 检查更新
      await new Promise(resolve => setTimeout(resolve, 200));
      return { hasUpdate: false, added: [], removed: [], modified: [] };
    } catch (e) {
      error.value = e as Error;
      throw e;
    }
  };

  return {
    // 状态
    isLoading,
    isFetching,
    fetchProgress,
    baseData,
    optionsList,
    cachedOptions,
    error,

    // 计算属性
    optionCount,
    cachedCount,

    // 操作
    fetchBaseData,
    fetchOption,
    batchFetchOptions,
    checkUpdates
  };
});
