<template>
  <div class="smart-size-input">
    <div class="smart-size-input__wrapper">
      <div class="smart-size-input__group">
        <input
          v-if="!isKeywordMode"
          v-model.number="numberValue"
          type="number"
          class="smart-size-input__number"
          :min="min"
          :max="max"
          :step="step"
          :placeholder="placeholder"
          @change="onNumberChange"
        />
        <input
          v-if="!isKeywordMode"
          v-model="percentValue"
          type="text"
          class="smart-size-input__percent"
          placeholder="%"
          :disabled="!allowPercentage"
          @blur="onPercentChange"
        />
      </div>

      <div v-if="isKeywordMode" class="smart-size-input__keyword-display">
        <span class="smart-size-input__keyword-badge smart-size-input__keyword-badge--{{ keywordValue }}">
          {{ getKeywordLabel(keywordValue) }}
        </span>
        <button class="smart-size-input__clear-btn" @click="clearKeyword">
          <svg viewBox="0 0 1024 1024" width="12" height="12">
            <path d="M764.288 214.592L512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      <div v-if="keywords.length > 0" class="smart-size-input__shortcuts">
        <button
          v-for="kw in keywords"
          :key="kw"
          class="smart-size-input__shortcut-btn"
          :class="{ 'smart-size-input__shortcut-btn--active': keywordValue === kw }"
          @click="selectKeyword(kw)"
          :title="getKeywordDescription(kw)"
        >
          {{ getKeywordLabel(kw) }}
        </button>
      </div>
    </div>

    <div v-if="isPercentageMode && !isKeywordMode" class="smart-size-input__indicator">
      <svg viewBox="0 0 1024 1024" width="14" height="14">
        <path d="M213.333 896h597.334v85.334H213.333zM725.333 128H298.667v85.334h85.334v85.333H384v256h85.334v-85.333h85.333v85.333H725.33V213.333H384v85.334h-85.333V128z" fill="#909399"/>
      </svg>
      <span>百分比模式</span>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'SmartSizeInput',
  props: {
    modelValue: {
      type: [Number, String] as PropType<number | string>,
      default: undefined
    },
    keywords: {
      type: Array as PropType<string[]>,
      default: () => ['auto']
    },
    allowPercentage: {
      type: Boolean,
      default: true
    },
    min: {
      type: Number,
      default: 0
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
      default: '请输入尺寸'
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const numberValue = ref<number | null>(null);
    const percentValue = ref<string>('');
    const keywordValue = ref('');

    const isKeywordMode = computed(() => {
      return keywordValue.value !== '' && props.keywords!.includes(keywordValue.value);
    });

    const isPercentageMode = computed(() => {
      return percentValue.value !== '' && !isKeywordMode.value;
    });

    const keywordLabels: Record<string, string> = {
      auto: '自动',
    };

    const keywordDescriptions: Record<string, string> = {
      auto: '自动计算尺寸',
    };

    function getKeywordLabel(keyword: string): string {
      return keywordLabels[keyword] || keyword;
    }

    function getKeywordDescription(keyword: string): string {
      return keywordDescriptions[keyword] || keyword;
    }

    function onNumberChange() {
      percentValue.value = '';
      emitChange();
    }

    function onPercentChange() {
      if (percentValue.value !== '') {
        const percent = parseFloat(percentValue.value);
        if (!isNaN(percent)) {
          numberValue.value = null;
          emitChange();
        } else {
          percentValue.value = '';
        }
      }
    }

    function selectKeyword(keyword: string) {
      if (keywordValue.value === keyword) {
        keywordValue.value = '';
      } else {
        keywordValue.value = keyword;
      }
      emitChange();
    }

    function clearKeyword() {
      keywordValue.value = '';
      emitChange();
    }

    function emitChange() {
      let value: number | string | undefined;
      if (isKeywordMode.value) {
        value = keywordValue.value;
      } else if (isPercentageMode.value) {
        value = `${percentValue.value}%`;
      } else if (numberValue.value !== null) {
        value = numberValue.value;
      } else {
        value = undefined;
      }
      emit('update:modelValue', value);
      emit('change', value);
    }

    function parseValue(val: unknown): { type: 'number' | 'percent' | 'keyword'; value: number | string } {
      if (val === undefined || val === null) {
        return { type: 'number', value: 0 };
      }
      if (typeof val === 'string') {
        if (props.keywords!.includes(val)) {
          return { type: 'keyword', value: val };
        }
        if (val.endsWith('%')) {
          return { type: 'percent', value: parseFloat(val.slice(0, -1)) };
        }
        const num = parseFloat(val);
        if (!isNaN(num)) {
          return { type: 'number', value: num };
        }
        return { type: 'number', value: 0 };
      }
      if (typeof val === 'number') {
        return { type: 'number', value: val };
      }
      return { type: 'number', value: 0 };
    }

    watch(
      () => props.modelValue,
      (newVal) => {
        if (newVal === undefined || newVal === null) {
          numberValue.value = null;
          percentValue.value = '';
          keywordValue.value = '';
        } else {
          const parsed = parseValue(newVal);
          switch (parsed.type) {
            case 'keyword':
              keywordValue.value = parsed.value as string;
              break;
            case 'percent':
              keywordValue.value = '';
              numberValue.value = null;
              percentValue.value = String(parsed.value);
              break;
            case 'number':
              keywordValue.value = '';
              numberValue.value = parsed.value as number;
              percentValue.value = '';
              break;
          }
        }
      },
      { immediate: true }
    );

    return {
      numberValue,
      percentValue,
      keywordValue,
      isKeywordMode,
      isPercentageMode,
      keywordLabels,
      keywordDescriptions,
      getKeywordLabel,
      getKeywordDescription,
      onNumberChange,
      onPercentChange,
      selectKeyword,
      clearKeyword,
      emitChange,
      parseValue
    };
  }
});
</script>

<style scoped lang="scss">
.smart-size-input {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;

  &__wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  &__group {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__number {
    width: 100px;
    padding: 6px 10px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    font-size: 13px;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
  }

  &__percent {
    width: 60px;
    padding: 6px 8px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    font-size: 13px;
    text-align: center;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: #409eff;
    }

    &:disabled {
      background: #f5f7fa;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }

  &__keyword-display {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__keyword-badge {
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 500;

    &--auto {
      background: #f0f9ff;
      border: 1px solid #409eff;
      color: #409eff;
    }
  }

  &__clear-btn {
    width: 20px;
    height: 20px;
    border: none;
    background: #dcdfe6;
    color: #606266;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      background: #f56c6c;
      color: #fff;
    }
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

  &__indicator {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: #909399;
  }
}
</style>
