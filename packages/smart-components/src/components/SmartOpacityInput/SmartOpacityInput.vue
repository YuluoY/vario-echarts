<template>
  <div ref="containerRef" class="smart-opacity-input">
    <!-- 触发器：显示当前透明度 -->
    <div ref="triggerRef" class="smart-opacity-input__trigger" @click="togglePanel">
      <div class="smart-opacity-input__preview" :style="{ opacity: previewOpacity }">
        <div class="smart-opacity-input__preview-bg"></div>
        <div class="smart-opacity-input__preview-value">{{ displayValue }}</div>
      </div>
      <span class="smart-opacity-input__text">{{ displayText }}</span>
      <button v-if="modelValue !== undefined && modelValue !== 1" class="smart-opacity-input__clear-btn" @click.stop="clearValue" title="重置为1">×</button>
    </div>

    <!-- 弹出面板：使用 Teleport 避免被父层遮挡 -->
    <Teleport to="body">
      <div v-if="showPanel" ref="panelRef" class="smart-opacity-input__panel" :style="panelStyle" @click.stop>
        <!-- 滑块控制 -->
        <div class="smart-opacity-input__slider-section">
          <div class="smart-opacity-input__slider-header">
            <span class="smart-opacity-input__slider-label">透明度</span>
            <span class="smart-opacity-input__slider-value">{{ Math.round(percentage) }}%</span>
          </div>
          <div class="smart-opacity-input__slider-container" @mousedown="handleSliderMouseDown">
            <div class="smart-opacity-input__slider-track">
              <div class="smart-opacity-input__slider-bg"></div>
              <div class="smart-opacity-input__slider-fill" :style="{ width: percentage + '%' }"></div>
              <div class="smart-opacity-input__slider-thumb" :style="{ left: percentage + '%' }"></div>
            </div>
          </div>
        </div>

        <!-- 数值输入 -->
        <div class="smart-opacity-input__input-section">
          <input
            v-model.number="inputValue"
            type="number"
            class="smart-opacity-input__value-input"
            :min="min"
            :max="max"
            :step="step"
            @input="handleInputChange"
            @blur="handleInputBlur"
          />
        </div>

        <!-- 快捷值 -->
        <div class="smart-opacity-input__quick-section">
          <button
            v-for="val in quickValues"
            :key="val"
            class="smart-opacity-input__quick-btn"
            :class="{ 'smart-opacity-input__quick-btn--active': !isKeywordMode && Math.abs((inputValue ?? 1) - val) < 0.01 }"
            @click="selectQuickValue(val)"
          >
            {{ Math.round(val * 100) }}%
          </button>
        </div>

        <!-- 关键字选项 -->
        <div v-if="keywords.length > 0" class="smart-opacity-input__keyword-section">
          <button
            v-for="kw in keywords"
            :key="kw"
            class="smart-opacity-input__keyword-btn"
            :class="{ 'smart-opacity-input__keyword-btn--active': isKeywordMode && keywordValue === kw }"
            @click="selectKeyword(kw)"
          >
            {{ getKeywordLabel(kw) }}
          </button>
        </div>
      </div>

      <!-- 遮罩层 -->
      <div v-if="showPanel" class="smart-opacity-input__overlay" @click="closePanel" />
    </Teleport>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount, defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'SmartOpacityInput',
  props: {
    modelValue: {
      type: [Number, String] as PropType<number | string>,
      default: undefined
    },
    keywords: {
      type: Array as PropType<string[]>,
      default: () => ['inherit']
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    },
    step: {
      type: Number,
      default: 0.01
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    // Refs
    const containerRef = ref<HTMLElement | null>(null);
    const triggerRef = ref<HTMLElement | null>(null);
    const panelRef = ref<HTMLElement | null>(null);
    const showPanel = ref(false);

    const inputValue = ref<number>(1);
    const keywordValue = ref('');

    // 判断是否为关键字模式
    const isKeywordMode = computed(() => {
      return keywordValue.value !== '';
    });

    // 当前数值（关键字模式下为 1）
    const currentNumber = computed(() => {
      return isKeywordMode.value ? 1 : (inputValue.value ?? 1);
    });

    // 预览透明度
    const previewOpacity = computed(() => {
      return isKeywordMode.value ? 0.5 : currentNumber.value;
    });

    // 百分比（用于滑块和显示）
    const percentage = computed(() => {
      const range = props.max! - props.min!;
      return ((currentNumber.value - props.min!) / range) * 100;
    });

    // 显示文本
    const displayText = computed(() => {
      if (isKeywordMode.value) {
        return getKeywordLabel(keywordValue.value);
      }
      return `${Math.round(percentage.value)}%`;
    });

    // 显示值
    const displayValue = computed(() => {
      if (isKeywordMode.value) {
        return getKeywordLabel(keywordValue.value).substring(0, 1);
      }
      return Math.round(percentage.value) + '%';
    });

    // 快捷值
    const quickValues = [0, 0.25, 0.5, 0.75, 1];

    // 面板位置
    const panelStyle = ref({});

    // 关键字标签
    const keywordLabels: Record<string, string> = {
      inherit: '继承',
      initial: '初始',
      unset: '未设置'
    };

    const keywordDescriptions: Record<string, string> = {
      inherit: '从父元素继承透明度',
      initial: '使用初始默认值',
      unset: '重置为未设置状态'
    };

    function getKeywordLabel(keyword: string): string {
      return keywordLabels[keyword] || keyword;
    }

    function getKeywordDescription(keyword: string): string {
      return keywordDescriptions[keyword] || keyword;
    }

    // 打开/关闭面板
    function togglePanel() {
      showPanel.value = !showPanel.value;
      if (showPanel.value) {
        nextTick(() => {
          updatePanelPosition();
        });
      }
    }

    function closePanel() {
      showPanel.value = false;
    }

    // 更新面板位置
    async function updatePanelPosition() {
      if (!triggerRef.value || !panelRef.value) return;

      await nextTick();
      await nextTick();

      const triggerRect = triggerRef.value.getBoundingClientRect();
      const panelRect = panelRef.value.getBoundingClientRect();

      let panelWidth = 260;
      let panelHeight = 200;

      if (panelRef.value) {
        panelWidth = panelRect.width || panelWidth;
        panelHeight = panelRect.height || panelHeight;
      }

      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;
      const spaceRight = window.innerWidth - triggerRect.left;
      const spaceLeft = triggerRect.right;

      let top = 0;
      let left = 0;

      if (spaceBelow >= panelHeight || spaceBelow >= spaceAbove) {
        top = triggerRect.bottom + 4;
      } else {
        top = triggerRect.top - panelHeight - 4;
      }

      if (spaceRight >= panelWidth) {
        left = triggerRect.left;
      } else if (spaceLeft >= panelWidth) {
        left = triggerRect.right - panelWidth;
      } else {
        left = Math.max(8, triggerRect.left);
      }

      top = Math.max(8, Math.min(top, window.innerHeight - panelHeight - 8));
      left = Math.max(8, Math.min(left, window.innerWidth - panelWidth - 8));

      panelStyle.value = {
        position: 'fixed',
        top: `${top}px`,
        left: `${left}px`,
        zIndex: 9999
      };
    }

    // Slider 拖拽处理
    let isDragging = false;
    let rafId: number | null = null;
    let pendingMouseEvent: MouseEvent | null = null;

    function handleSliderMouseDown(e: MouseEvent) {
      isDragging = true;
      updateValueFromMouse(e);
      
      const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
          pendingMouseEvent = e;
          if (!rafId) {
            rafId = requestAnimationFrame(() => {
              if (pendingMouseEvent) {
                updateValueFromMouse(pendingMouseEvent);
                pendingMouseEvent = null;
              }
              rafId = null;
            });
          }
        }
      };
      
      const handleMouseUp = () => {
        isDragging = false;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        pendingMouseEvent = null;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    function updateValueFromMouse(e: MouseEvent) {
      const sliderContainer = document.querySelector('.smart-opacity-input__slider-container');
      if (!sliderContainer) return;
      
      const rect = sliderContainer.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const ratio = x / rect.width;
      const value = props.min! + ratio * (props.max! - props.min!);
      // 以0.01为步进精确调整
      const roundedValue = Math.round(value * 100) / 100;
      const finalValue = Math.max(props.min!, Math.min(props.max!, roundedValue));
      
      inputValue.value = finalValue;
      keywordValue.value = ''; // 拖动滑块时自动取消关键字
      emitChange(finalValue);
    }

    // 输入框变化
    function handleInputChange() {
      let val = inputValue.value;
      if (isNaN(val)) val = props.min!;
      val = Math.max(props.min!, Math.min(props.max!, val));
      inputValue.value = val;
      keywordValue.value = ''; // 调整数值时自动取消关键字
      emitChange(val);
    }

    function handleInputBlur() {
      handleInputChange();
    }

    // 快捷值选择
    function selectQuickValue(val: number) {
      inputValue.value = val;
      keywordValue.value = '';
      emitChange(val);
    }

    // 关键字操作
    function selectKeyword(kw: string) {
      keywordValue.value = kw;
      emitChange(kw);
    }

    function clearKeyword() {
      keywordValue.value = '';
      emitChange(inputValue.value ?? 1);
    }

    // 清除值
    function clearValue() {
      inputValue.value = 1;
      keywordValue.value = '';
      emitChange(1);
    }

    // 发射变化事件
    function emitChange(value: number | string) {
      emit('update:modelValue', value);
      emit('change', value);
    }

    // 监听外部值变化
    watch(
      () => props.modelValue,
      (newVal) => {
        if (newVal === undefined || newVal === null) {
          inputValue.value = 1;
          keywordValue.value = '';
        } else if (typeof newVal === 'string' && props.keywords!.includes(newVal)) {
          keywordValue.value = newVal;
        } else if (typeof newVal === 'number') {
          keywordValue.value = '';
          inputValue.value = Math.max(props.min!, Math.min(props.max!, newVal));
        }
      },
      { immediate: true }
    );

    // 点击外部关闭
    function handleClickOutside(e: MouseEvent) {
      if (!containerRef.value || !showPanel.value) return;
      if (!containerRef.value.contains(e.target as Node) && !panelRef.value?.contains(e.target as Node)) {
        closePanel();
      }
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      containerRef,
      triggerRef,
      panelRef,
      showPanel,
      inputValue,
      keywordValue,
      isKeywordMode,
      currentNumber,
      previewOpacity,
      percentage,
      displayText,
      displayValue,
      quickValues,
      panelStyle,
      getKeywordLabel,
      getKeywordDescription,
      togglePanel,
      closePanel,
      handleSliderMouseDown,
      handleInputChange,
      handleInputBlur,
      selectQuickValue,
      selectKeyword,
      clearKeyword,
      clearValue
    };
  }
});
</script>

<style scoped lang="scss">
.smart-opacity-input {
  display: inline-block;
  width: 100%;
  position: relative;

  &__trigger {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    cursor: pointer;
    background: #ffffff;
    transition: all 0.2s;
    min-width: 120px;

    &:hover {
      border-color: #409eff;
      background: #ecf5ff;
    }
  }

  &__preview {
    position: relative;
    width: 36px;
    height: 24px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    overflow: hidden;
    flex-shrink: 0;
  }

  &__preview-bg {
    position: absolute;
    inset: 0;
    background: 
      linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
      linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
      linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
    background-size: 8px 8px;
    background-position: 0 0, 0 4px, 4px -4px, -4px 0px;
  }

  &__preview-value {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #409eff 0%, #79bbff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  &__text {
    flex: 1;
    font-size: 13px;
    color: #606266;
    font-weight: 500;
  }

  &__clear-btn {
    width: 18px;
    height: 18px;
    border: none;
    background: #dcdfe6;
    color: #606266;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 1;
    transition: all 0.2s;
    flex-shrink: 0;
    padding: 0;

    &:hover {
      background: #c0c4cc;
      color: #303133;
    }
  }

  &__overlay {
    position: fixed;
    inset: 0;
    z-index: 9998;
    background: transparent;
  }

  &__panel {
    background: #ffffff;
    border: 1px solid #dcdfe6;
    border-radius: 6px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    padding: 12px;
    width: 260px;
    z-index: 9999;
  }

  &__slider-section {
    margin-bottom: 12px;
  }

  &__slider-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  &__slider-label {
    font-size: 12px;
    font-weight: 500;
    color: #606266;
  }

  &__slider-value {
    font-size: 13px;
    font-weight: 600;
    color: #409eff;
  }

  &__slider-container {
    padding: 10px 0;
    cursor: pointer;
    user-select: none;

    &:hover {
      .smart-opacity-input__slider-thumb {
        width: 16px;
        height: 16px;
        border-width: 2px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      }
    }
  }

  &__slider-track {
    position: relative;
    width: 100%;
    height: 6px;
    border-radius: 3px;
  }

  &__slider-bg {
    position: absolute;
    inset: 0;
    background: #f5f7fa;
    border: 1px solid #dcdfe6;
    border-radius: 3px;
  }

  &__slider-fill {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(90deg, #409eff 0%, #79bbff 100%);
    border-radius: 3px;
  }

  &__slider-thumb {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background: #ffffff;
    border: 2px solid #409eff;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
    pointer-events: none;
  }

  &__input-section {
    margin-bottom: 12px;
  }

  &__value-input {
    width: 100%;
    padding: 6px 10px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    font-size: 13px;
    text-align: center;
    transition: border-color 0.2s;
    background: #ffffff;

    &:focus {
      outline: none;
      border-color: #409eff;
      box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.1);
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &__quick-section {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
  }

  &__quick-btn {
    flex: 1;
    padding: 5px 8px;
    border: 1px solid #dcdfe6;
    background: #ffffff;
    color: #606266;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: #409eff;
      color: #409eff;
      background: #ecf5ff;
    }

    &--active {
      background: #409eff;
      border-color: #409eff;
      color: #ffffff;
    }
  }

  &__keyword-section {
    display: flex;
    gap: 6px;
    padding-top: 8px;
    border-top: 1px solid #ebeef5;
  }

  &__keyword-btn {
    flex: 1;
    padding: 5px 10px;
    border: 1px solid #dcdfe6;
    background: #f5f7fa;
    color: #606266;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: #67c23a;
      color: #67c23a;
      background: #f0f9ff;
    }

    &--active {
      background: #67c23a;
      border-color: #67c23a;
      color: #ffffff;
    }
  }
}
</style>
