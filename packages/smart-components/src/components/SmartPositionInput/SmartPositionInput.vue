<template>
  <div class="smart-position-input" ref="containerRef">
    <!-- Trigger 区域 -->
    <div 
      ref="triggerRef"
      class="smart-position-input__trigger"
      @click="togglePanel"
    >
      <div class="smart-position-input__preview">
        <span v-if="isKeywordMode" class="smart-position-input__type-badge">关键字</span>
        <span v-else-if="isPercentageMode" class="smart-position-input__type-badge">百分比</span>
        <span v-else class="smart-position-input__type-badge">数值</span>
        <span class="smart-position-input__value-text">{{ displayValue }}</span>
      </div>
      <button 
        v-if="hasValue" 
        class="smart-position-input__clear-btn" 
        @click.stop="clearValue" 
        title="清除"
      >×</button>
    </div>

    <!-- 弹出面板 -->
    <Teleport to="body">
      <div 
        v-if="isPanelVisible"
        ref="panelRef"
        class="smart-position-input__panel"
        :style="panelStyle"
        @click.stop
      >
        <!-- 数值输入区域 -->
        <div class="smart-position-input__input-section">
          <div class="smart-position-input__input-group">
            <label class="smart-position-input__label">数值</label>
            <input
              v-model.number="numberValue"
              type="number"
              class="smart-position-input__number"
              :min="min"
              :max="max"
              :step="step"
              :placeholder="placeholder"
              @input="onNumberInput"
            />
          </div>

          <div v-if="allowPercentage" class="smart-position-input__input-group">
            <label class="smart-position-input__label">百分比</label>
            <div class="smart-position-input__percent-wrapper">
              <input
                v-model="percentValue"
                type="text"
                class="smart-position-input__percent"
                placeholder="0"
                @input="onPercentInput"
              />
              <span class="smart-position-input__percent-unit">%</span>
            </div>
          </div>
        </div>

        <!-- 关键字按钮区域 -->
        <div v-if="keywords.length > 0" class="smart-position-input__keywords-section">
          <div class="smart-position-input__section-title">快捷位置</div>
          <div class="smart-position-input__keywords-grid">
            <button
              v-for="kw in keywords"
              :key="kw"
              class="smart-position-input__keyword-btn"
              :class="{ 'smart-position-input__keyword-btn--active': keywordValue === kw }"
              @click="selectKeyword(kw)"
              :title="getKeywordDescription(kw)"
            >
              {{ getKeywordLabel(kw) }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, defineComponent, type PropType, onMounted, onBeforeUnmount, nextTick } from 'vue';

export default defineComponent({
  name: 'SmartPositionInput',
  props: {
    modelValue: {
      type: [Number, String] as PropType<number | string>,
      default: undefined
    },
    keywords: {
      type: Array as PropType<string[]>,
      default: () => ['left', 'top', 'right', 'bottom', 'center', 'auto']
    },
    allowPercentage: {
      type: Boolean,
      default: true
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
      default: '请输入位置'
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const numberValue = ref<number | null>(null);
    const percentValue = ref<string>('');
    const keywordValue = ref('');
    const isPanelVisible = ref(false);
    const containerRef = ref<HTMLElement | null>(null);
    const triggerRef = ref<HTMLElement | null>(null);
    const panelRef = ref<HTMLElement | null>(null);
    const panelStyle = ref<Record<string, string>>({});

    const isKeywordMode = computed(() => {
      return keywordValue.value !== '' && props.keywords!.includes(keywordValue.value);
    });

    const isPercentageMode = computed(() => {
      return percentValue.value !== '' && !isKeywordMode.value;
    });

    const hasValue = computed(() => {
      return isKeywordMode.value || isPercentageMode.value || numberValue.value !== null;
    });

    const displayValue = computed(() => {
      if (isKeywordMode.value) {
        return getKeywordLabel(keywordValue.value);
      }
      if (isPercentageMode.value) {
        return `${percentValue.value}%`;
      }
      if (numberValue.value !== null) {
        return String(numberValue.value);
      }
      return '选择位置';
    });

    const keywordLabels: Record<string, string> = {
      left: '左',
      top: '上',
      right: '右',
      bottom: '下',
      center: '中',
      auto: '自动',
    };

    const keywordDescriptions: Record<string, string> = {
      left: '靠左对齐',
      top: '靠上对齐',
      right: '靠右对齐',
      bottom: '靠下对齐',
      center: '居中对齐',
      auto: '自动定位',
    };

    function getKeywordLabel(keyword: string): string {
      return keywordLabels[keyword] || keyword;
    }

    function getKeywordDescription(keyword: string): string {
      return keywordDescriptions[keyword] || keyword;
    }

    function togglePanel() {
      isPanelVisible.value = !isPanelVisible.value;
      if (isPanelVisible.value) {
        nextTick(() => {
          updatePanelPosition();
        });
      }
    }

    function updatePanelPosition() {
      if (!triggerRef.value) return;
      
      const triggerRect = triggerRef.value.getBoundingClientRect();
      const gap = 4;
      const margin = 16;
      
      // 获取实际面板尺寸，如果面板还没渲染则使用默认值
      let panelWidth = 280;
      let panelHeight = 200;
      if (panelRef.value) {
        const panelRect = panelRef.value.getBoundingClientRect();
        panelWidth = panelRect.width || panelWidth;
        panelHeight = panelRect.height || panelHeight;
      }
      
      // 计算可用空间
      const spaceBelow = window.innerHeight - triggerRect.bottom - margin;
      const spaceAbove = triggerRect.top - margin;
      const spaceRight = window.innerWidth - triggerRect.left - margin;
      const spaceLeft = triggerRect.right - margin;
      
      let left = triggerRect.left;
      let top = triggerRect.bottom + gap;
      
      // 垂直位置：优先显示在下方
      if (spaceBelow < panelHeight && spaceAbove > spaceBelow) {
        // 下方空间不够且上方空间更大，显示在上方
        top = triggerRect.top - panelHeight - gap;
      }
      
      // 水平位置：优先左对齐
      if (spaceRight < panelWidth && spaceLeft > spaceRight) {
        // 右侧空间不够，右对齐
        left = triggerRect.right - panelWidth;
      }
      
      // 确保不超出边界
      left = Math.max(margin, Math.min(left, window.innerWidth - panelWidth - margin));
      top = Math.max(margin, Math.min(top, window.innerHeight - panelHeight - margin));
      
      panelStyle.value = {
        left: `${left}px`,
        top: `${top}px`
      };
    }

    function handleClickOutside(event: MouseEvent) {
      if (!isPanelVisible.value) return;
      
      const panel = panelRef.value;
      if (
        containerRef.value &&
        !containerRef.value.contains(event.target as Node) &&
        panel &&
        !panel.contains(event.target as Node)
      ) {
        isPanelVisible.value = false;
      }
    }

    function clearValue() {
      numberValue.value = null;
      percentValue.value = '';
      keywordValue.value = '';
      emitChange();
    }

    function onNumberInput() {
      percentValue.value = '';
      keywordValue.value = '';
      emitChange();
    }

    function onPercentInput() {
      numberValue.value = null;
      keywordValue.value = '';
      emitChange();
    }

    function selectKeyword(keyword: string) {
      if (keywordValue.value === keyword) {
        keywordValue.value = '';
      } else {
        keywordValue.value = keyword;
        numberValue.value = null;
        percentValue.value = '';
      }
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
              numberValue.value = null;
              percentValue.value = '';
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

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
      window.addEventListener('scroll', updatePanelPosition, true);
      window.addEventListener('resize', updatePanelPosition);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', updatePanelPosition, true);
      window.removeEventListener('resize', updatePanelPosition);
    });

    return {
      numberValue,
      percentValue,
      keywordValue,
      isPanelVisible,
      containerRef,
      triggerRef,
      panelRef,
      panelStyle,
      displayValue,
      hasValue,
      isKeywordMode,
      isPercentageMode,
      getKeywordLabel,
      getKeywordDescription,
      togglePanel,
      clearValue,
      onNumberInput,
      onPercentInput,
      selectKeyword,
      emitChange,
      parseValue
    };
  }
});
</script>

<style scoped lang="scss">
.smart-position-input {
  position: relative;
  display: inline-block;
  width: 100%;

  &__trigger {
    width: 100%;
    min-height: 32px;
    padding: 6px 30px 6px 10px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    position: relative;
    transition: all 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      border-color: #c0c4cc;
    }
  }

  &__preview {
    display: flex;
    align-items: center;
    gap: 6px;
    flex: 1;
    min-width: 0;
  }

  &__type-badge {
    flex-shrink: 0;
    padding: 2px 6px;
    background: #f0f2f5;
    border-radius: 3px;
    font-size: 11px;
    color: #909399;
    font-weight: 500;
  }

  &__value-text {
    flex: 1;
    font-size: 13px;
    color: #606266;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__clear-btn {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    border: none;
    background: #c0c4cc;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    flex-shrink: 0;
    transition: background 0.2s;

    &:hover {
      background: #f56c6c;
    }
  }
}
</style>

<!-- 非 scoped 样式：用于 Teleport 内容 -->
<style lang="scss">
.smart-position-input__panel {
  position: fixed;
  z-index: 9999;
  width: 280px;
  background: #fff;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.smart-position-input__input-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.smart-position-input__input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.smart-position-input__label {
  font-size: 12px;
  color: #909399;
  font-weight: 500;
}

.smart-position-input__number {
  width: 100%;
  height: 32px;
  padding: 0 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #409eff;
  }

  &::placeholder {
    color: #c0c4cc;
  }
}

.smart-position-input__percent-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.smart-position-input__percent {
  width: 100%;
  height: 32px;
  padding: 0 32px 0 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #409eff;
  }

  &::placeholder {
    color: #c0c4cc;
  }
}

.smart-position-input__percent-unit {
  position: absolute;
  right: 12px;
  font-size: 13px;
  color: #909399;
  pointer-events: none;
}

.smart-position-input__keywords-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.smart-position-input__section-title {
  font-size: 12px;
  color: #909399;
  font-weight: 500;
}

.smart-position-input__keywords-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.smart-position-input__keyword-btn {
  height: 32px;
  padding: 0 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  color: #606266;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #409eff;
    color: #409eff;
  }

  &--active {
    border-color: #409eff;
    background: #409eff;
    color: #fff;

    &:hover {
      background: #66b1ff;
      border-color: #66b1ff;
    }
  }
}
</style>
