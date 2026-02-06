<template>
  <div class="smart-number-input">
    <div class="smart-number-input__wrapper">
      <!-- 数字输入框 -->
      <input
        v-if="!isKeywordMode"
        v-model.number="numValue"
        type="number"
        class="smart-number-input__input smart-number-input__input--number"
        :min="min"
        :max="max"
        :step="step"
        :placeholder="placeholder"
        @change="emitChange"
      />

      <!-- 关键字显示 -->
      <div v-else class="smart-number-input__keyword">
        <span class="smart-number-input__keyword-text">{{ getKeywordLabel(stringValue) }}</span>
        <button class="smart-number-input__clear-btn" @click="clearKeyword">×</button>
      </div>

      <!-- 关键字快捷按钮 -->
      <div v-if="keywords.length > 0" class="smart-number-input__shortcuts">
        <button
          v-for="kw in keywords"
          :key="kw"
          class="smart-number-input__shortcut-btn"
          :class="{ 'smart-number-input__shortcut-btn--active': stringValue === kw }"
          @click="selectKeyword(kw)"
          :title="getKeywordDescription(kw)"
        >
          {{ getKeywordLabel(kw) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'SmartNumberInput',
  props: {
    modelValue: {
      type: [Number, String] as PropType<number | string>,
      default: undefined
    },
    keywords: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    min: {
      type: Number,
      default: undefined
    },
    max: {
      type: Number,
      default: undefined
    },
    step: {
      type: Number,
      default: 1
    },
    placeholder: {
      type: String,
      default: '请输入数值'
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const numValue = ref<number | null>(null);
    const stringValue = ref('');

    // 是否处于关键字模式
    const isKeywordMode = computed(() => {
      return stringValue.value !== '' && props.keywords!.includes(stringValue.value);
    });

    // 关键字标签映射
    const keywordLabels: Record<string, string> = {
      auto: '自动',
      inherit: '继承',
      none: '无',
    };

    // 关键字描述映射
    const keywordDescriptions: Record<string, string> = {
      auto: '自动计算最佳值',
      inherit: '继承父级设置',
      none: '不设置此属性',
    };

    function getKeywordLabel(keyword: string): string {
      return keywordLabels[keyword] || keyword;
    }

    function getKeywordDescription(keyword: string): string {
      return keywordDescriptions[keyword] || keyword;
    }

    // 选择关键字
    function selectKeyword(keyword: string) {
      if (stringValue.value === keyword) {
        // 取消选择
        stringValue.value = '';
        numValue.value = null;
      } else {
        stringValue.value = keyword;
        numValue.value = null;
      }
      emitChange();
    }

    // 清除关键字
    function clearKeyword() {
      stringValue.value = '';
      numValue.value = null;
      emitChange();
    }

    // 发送变更
    function emitChange() {
      const value = isKeywordMode.value ? stringValue.value : numValue.value;
      emit('update:modelValue', value);
      emit('change', value);
    }

    // 监听外部值变化
    watch(
      () => props.modelValue,
      (newVal) => {
        if (newVal === undefined || newVal === null) {
          numValue.value = null;
          stringValue.value = '';
        } else if (typeof newVal === 'string') {
          stringValue.value = newVal;
          numValue.value = null;
        } else if (typeof newVal === 'number') {
          numValue.value = newVal;
          stringValue.value = '';
        }
      },
      { immediate: true }
    );

    return {
      numValue,
      stringValue,
      isKeywordMode,
      keywordLabels,
      keywordDescriptions,
      getKeywordLabel,
      getKeywordDescription,
      selectKeyword,
      clearKeyword,
      emitChange
    };
  }
});
</script>

<style scoped lang="scss">
.smart-number-input {
  width: 100%;

  &__wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  &__input {
    padding: 6px 12px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    font-size: 13px;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: #409eff;
    }

    &--number {
      width: 100px;
    }
  }

  &__keyword {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background: #f0f9ff;
    border: 1px solid #409eff;
    border-radius: 4px;
  }

  &__keyword-text {
    font-size: 13px;
    color: #409eff;
    font-weight: 500;
  }

  &__clear-btn {
    width: 18px;
    height: 18px;
    border: none;
    background: #409eff;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    font-size: 12px;
    line-height: 1;
  }

  &__shortcuts {
    display: flex;
    gap: 4px;
  }

  &__shortcut-btn {
    padding: 4px 10px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    font-size: 12px;
    color: #606266;
    transition: all 0.2s;

    &:hover {
      border-color: #409eff;
      color: #409eff;
    }

    &--active {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
  }
}
</style>
