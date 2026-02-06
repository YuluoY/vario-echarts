<template>
  <div ref="containerRef" class="smart-style-select">
    <!-- 触发器：显示当前样式 -->
    <div ref="triggerRef" class="smart-style-select__trigger" @click="togglePanel">
      <span class="smart-style-select__preview" :class="`smart-style-select__preview--${currentPreviewClass}`"></span>
      <span class="smart-style-select__text">{{ displayText }}</span>
      <span class="smart-style-select__arrow">▾</span>
    </div>

    <!-- 弹出面板 -->
    <Teleport to="body">
      <div v-if="showPanel" ref="panelRef" class="smart-style-select__panel" :style="panelStyle" @click.stop>
        <!-- 预设选项 -->
        <div class="smart-style-select__section">
          <label class="smart-style-select__section-label">预设样式</label>
          <div class="smart-style-select__options">
            <button
              v-for="opt in normalizedOptions"
              :key="opt.value"
              class="smart-style-select__option-btn"
              :class="{ 'smart-style-select__option-btn--active': isPresetSelected(opt.value) }"
              @click="selectPreset(opt.value)"
              :title="opt.description"
            >
              <span class="smart-style-select__option-preview" :class="`smart-style-select__option-preview--${opt.value}`"></span>
              <span class="smart-style-select__option-label">{{ opt.label }}</span>
            </button>
          </div>
        </div>

        <!-- 自定义输入区 -->
        <div v-if="allowCustom" class="smart-style-select__custom">
          <label class="smart-style-select__section-label">自定义</label>
          
          <!-- 数字输入 -->
          <div v-if="allowNumber" class="smart-style-select__input-row">
            <span class="smart-style-select__input-label">数值:</span>
            <input
              v-model.number="customNumber"
              type="number"
              class="smart-style-select__input"
              placeholder="如: 4"
              @change="updateCustomValue"
            />
          </div>

          <!-- 数组输入 -->
          <div v-if="allowArray" class="smart-style-select__input-row">
            <span class="smart-style-select__input-label">数组:</span>
            <div class="smart-style-select__array-input">
              <input
                v-for="(_, index) in customArray"
                :key="index"
                v-model.number="customArray[index]"
                type="number"
                class="smart-style-select__input smart-style-select__input--small"
                placeholder="0"
                @change="updateCustomValue"
              />
              <button class="smart-style-select__array-btn smart-style-select__array-btn--add" @click="addArrayItem">+</button>
              <button v-if="customArray.length > 0" class="smart-style-select__array-btn smart-style-select__array-btn--remove" @click="removeArrayItem">−</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 遮罩层 -->
      <div v-if="showPanel" class="smart-style-select__overlay" @click="closePanel" />
    </Teleport>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, defineComponent, type PropType } from 'vue';

interface StyleOption {
  value: string;
  label: string;
  description: string;
}

export default defineComponent({
  name: 'SmartStyleSelect',
  props: {
    modelValue: {
      type: [String, Number, Array] as PropType<string | number | number[]>,
      default: 'solid'
    },
    options: {
      type: Array as PropType<StyleOption[]>,
      default: () => [
        { value: 'solid', label: '实线', description: '连续的实线' },
        { value: 'dashed', label: '虚线', description: '短横线组成的虚线' },
        { value: 'dotted', label: '点线', description: '点组成的虚线' },
      ]
    },
    allowCustom: {
      type: Boolean,
      default: true
    },
    allowNumber: {
      type: Boolean,
      default: true
    },
    allowArray: {
      type: Boolean,
      default: true
    },
    allowString: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    // Refs
    const containerRef = ref<HTMLElement | null>(null);
    const triggerRef = ref<HTMLElement | null>(null);
    const panelRef = ref<HTMLElement | null>(null);
    const showPanel = ref(false);
    const panelStyle = ref({ left: '0px', top: '0px' });

    // 当前值
    const currentValue = ref<string | number | number[]>(props.modelValue!);

    // 自定义值
    const customNumber = ref<number | null>(null);
    const customArray = ref<number[]>([]);

    // 标准化 options
    const normalizedOptions = computed(() => {
      if (!props.options || props.options.length === 0) {
        return [
          { value: 'solid', label: '实线', description: '连续的实线' },
          { value: 'dashed', label: '虚线', description: '短横线组成的虚线' },
          { value: 'dotted', label: '点线', description: '点组成的虚线' },
        ];
      }
      
      // 如果第一个元素是字符串，转换为对象格式
      if (typeof props.options[0] === 'string') {
        return (props.options as unknown as string[]).map((val: string) => ({
          value: val,
          label: val === 'solid' ? '实线' : val === 'dashed' ? '虚线' : val === 'dotted' ? '点线' : val,
          description: val
        }));
      }
      
      // 已经是对象格式，直接返回
      return props.options;
    });

    // 预设选项值集合
    const presetValues = computed(() => normalizedOptions.value.map((o) => o.value));

    // 当前预览样式类
    const currentPreviewClass = computed(() => {
      if (typeof currentValue.value === 'string' && presetValues.value.includes(currentValue.value)) {
        return currentValue.value;
      }
      return 'custom';
    });

    // 显示文本
    const displayText = computed(() => {
      if (typeof currentValue.value === 'string') {
        const opt = normalizedOptions.value.find(o => o.value === currentValue.value);
        if (opt) return opt.label;
        return currentValue.value;
      }
      if (typeof currentValue.value === 'number') {
        return `数值: ${currentValue.value}`;
      }
      if (Array.isArray(currentValue.value)) {
        return `[${currentValue.value.join(', ')}]`;
      }
      return '选择样式';
    });

    // 检查是否选中了预设
    function isPresetSelected(value: string): boolean {
      return currentValue.value === value;
    }

    // 选择预设
    function selectPreset(value: string) {
      currentValue.value = value;
      emitChange();
      closePanel();
    }

    // 更新自定义值
    function updateCustomValue() {
      if (customArray.value.length > 0 && customArray.value.some(v => v !== 0)) {
        currentValue.value = [...customArray.value];
      } else if (customNumber.value !== null && customNumber.value !== 0) {
        currentValue.value = customNumber.value;
      }
      emitChange();
    }

    // 数组操作
    function addArrayItem() {
      customArray.value.push(0);
    }

    function removeArrayItem() {
      customArray.value.pop();
      updateCustomValue();
    }

    // 发送变更
    function emitChange() {
      emit('update:modelValue', currentValue.value);
      emit('change', currentValue.value);
    }

    // 计算面板位置
    function updatePanelPosition() {
      if (!triggerRef.value) return;
      
      const triggerRect = triggerRef.value.getBoundingClientRect();
      const gap = 4;
      const margin = 16;
      
      // 获取实际面板尺寸，如果面板还没渲染则使用默认值
      let panelWidth = 260;
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
        top = triggerRect.top - panelHeight - gap;
      }
      
      // 水平位置：优先左对齐
      if (spaceRight < panelWidth && spaceLeft > spaceRight) {
        left = triggerRect.right - panelWidth;
      }
      
      // 确保不超出边界
      left = Math.max(margin, Math.min(left, window.innerWidth - panelWidth - margin));
      top = Math.max(margin, Math.min(top, window.innerHeight - panelHeight - margin));
      
      panelStyle.value = { left: `${left}px`, top: `${top}px` };
    }

    // 切换面板
    function togglePanel() {
      if (showPanel.value) {
        closePanel();
      } else {
        openPanel();
      }
    }

    // 打开面板
    function openPanel() {
      showPanel.value = true;
      // 第一次 nextTick: 面板渲染到 DOM
      nextTick(() => {
        updatePanelPosition();
        // 第二次 nextTick: 获取实际尺寸后重新计算
        nextTick(() => {
          updatePanelPosition();
        });
      });
    }

    // 关闭面板
    function closePanel() {
      showPanel.value = false;
    }

    // ESC 关闭
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape' && showPanel.value) {
        closePanel();
      }
    }

    // 滚动时更新位置
    function handleScroll() {
      if (showPanel.value) {
        updatePanelPosition();
      }
    }

    // 监听外部值变化
    watch(
      () => props.modelValue,
      (newVal) => {
        currentValue.value = newVal!;

        if (typeof newVal === 'number') {
          customNumber.value = newVal;
        } else if (Array.isArray(newVal)) {
          customArray.value = [...newVal];
        }
      },
      { immediate: true }
    );

    onMounted(() => {
      document.addEventListener('keydown', handleKeydown);
      window.addEventListener('scroll', handleScroll, true);
      window.addEventListener('resize', handleScroll);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', handleScroll);
    });

    return {
      containerRef,
      triggerRef,
      panelRef,
      showPanel,
      panelStyle,
      currentValue,
      customNumber,
      customArray,
      normalizedOptions,
      presetValues,
      currentPreviewClass,
      displayText,
      isPresetSelected,
      selectPreset,
      updateCustomValue,
      addArrayItem,
      removeArrayItem,
      emitChange,
      updatePanelPosition,
      togglePanel,
      openPanel,
      closePanel,
      handleKeydown,
      handleScroll
    };
  }
});
</script>

<style scoped lang="scss">
.smart-style-select {
  display: inline-block;
  width: 100%;

  &__trigger {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background: #fff;
    width: 100%;
    cursor: pointer;
    min-width: 100px;
    transition: border-color 0.2s;

    &:hover {
      border-color: #409eff;
    }
  }

  &__preview {
    width: 24px;
    height: 2px;
    background: #606266;
    flex-shrink: 0;

    &--solid {
      background: linear-gradient(to right, #606266 100%, transparent 100%);
    }

    &--dashed {
      background: repeating-linear-gradient(to right, #606266 0px, #606266 6px, transparent 6px, transparent 10px);
    }

    &--dotted {
      background: repeating-linear-gradient(to right, #606266 0px, #606266 2px, transparent 2px, transparent 6px);
    }

    &--custom {
      background: linear-gradient(135deg, #409eff 0%, #67c23a 100%);
      height: 3px;
    }
  }

  &__text {
    flex: 1;
    font-size: 13px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__arrow {
    font-size: 10px;
    color: #909399;
  }
}
</style>

<!-- 非 scoped 样式：用于 Teleport 内容 -->
<style lang="scss">
.smart-style-select__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
}

.smart-style-select__panel {
  position: fixed;
  z-index: 9999;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 12px;
  min-width: 200px;
}

.smart-style-select__section-label {
  display: block;
  font-size: 12px;
  color: #909399;
  margin-bottom: 8px;
}

.smart-style-select__section {
  margin-bottom: 12px;
}

.smart-style-select__options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.smart-style-select__option-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
  flex: 0 0 auto;
  min-width: 100px;
  text-align: left;

  &:hover {
    border-color: #409eff;
    background: #f0f9ff;
  }

  &--active {
    background: #409eff;
    border-color: #409eff;

    .smart-style-select__option-label {
      color: #fff;
    }

    .smart-style-select__option-preview {
      background: #fff !important;
    }
  }
}

.smart-style-select__option-preview {
  width: 24px;
  height: 2px;
  background: #606266;

  &--solid {
    background: linear-gradient(to right, #606266 100%, transparent 100%);
  }

  &--dashed {
    background: repeating-linear-gradient(to right, #606266 0px, #606266 6px, transparent 6px, transparent 10px);
  }

  &--dotted {
    background: repeating-linear-gradient(to right, #606266 0px, #606266 2px, transparent 2px, transparent 6px);
  }
}

.smart-style-select__option-label {
  font-size: 13px;
  color: #606266;
}

.smart-style-select__custom {
  padding-top: 12px;
  border-top: 1px solid #ebeef5;
}

.smart-style-select__input-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.smart-style-select__input-label {
  font-size: 12px;
  color: #909399;
  min-width: 40px;
}

.smart-style-select__input {
  padding: 6px 8px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 13px;
  width: 60px;

  &--small {
    width: 45px;
  }

  &:focus {
    outline: none;
    border-color: #409eff;
  }
}

.smart-style-select__array-input {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.smart-style-select__array-btn {
  width: 24px;
  height: 24px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  color: #606266;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #409eff;
    color: #409eff;
  }

  &--remove:hover {
    border-color: #f56c6c;
    color: #f56c6c;
  }
}
</style>
