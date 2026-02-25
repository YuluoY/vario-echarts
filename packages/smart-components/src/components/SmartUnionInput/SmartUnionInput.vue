<template>
  <div ref="containerRef" class="smart-union-input">
    <!-- 触发器：显示当前值 -->
    <div ref="triggerRef" class="smart-union-input__trigger" @click="togglePanel">
      <div class="smart-union-input__preview">
        <span class="smart-union-input__type-badge">{{ getTypeLabel(currentType) }}</span>
        <span class="smart-union-input__value-text">{{ displayText }}</span>
      </div>
      <button v-if="hasValue" class="smart-union-input__clear-btn" @click.stop="clearValue" title="清除">×</button>
    </div>

    <!-- 弹出面板：使用 Teleport 避免被父层遮挡 -->
    <Teleport to="body">
      <div v-if="showPanel" ref="panelRef" class="smart-union-input__panel" :style="panelStyle" @click.stop>
        <!-- 类型切换标签 -->
        <div class="smart-union-input__tabs">
          <button
            v-for="t in availableTypes"
            :key="t"
            class="smart-union-input__tab"
            :class="{ 'smart-union-input__tab--active': currentType === t }"
            @click="switchType(t)"
          >
            {{ getTypeLabel(t) }}
          </button>
        </div>

        <!-- 动态输入区 -->
        <div class="smart-union-input__input-area">
          <!-- 字符串输入 -->
          <template v-if="currentType === 'string'">
            <div class="smart-union-input__string-wrapper">
              <input
                v-if="!showKeywordSelect"
                v-model="stringValue"
                type="text"
                class="smart-union-input__input"
                :placeholder="stringPlaceholder"
                @input="emitChange"
              />
              <!-- 关键字选择 -->
              <div v-else class="smart-union-input__keyword-tags">
                <button
                  v-for="kw in specialKeywords"
                  :key="kw"
                  class="smart-union-input__keyword-tag"
                  :class="{ 'smart-union-input__keyword-tag--active': stringValue === kw }"
                  @click="selectKeyword(kw)"
                >
                  {{ getKeywordLabel(kw) }}
                </button>
                <button class="smart-union-input__keyword-tag smart-union-input__keyword-tag--custom" @click="showKeywordSelect = false">
                  自定义
                </button>
              </div>
            </div>
          </template>

          <!-- 数字输入 -->
          <template v-if="currentType === 'number'">
            <div class="smart-union-input__number-wrapper">
              <input
                v-model.number="numberValue"
                type="number"
                class="smart-union-input__input smart-union-input__input--number"
                :min="min"
                :max="max"
                :step="step"
                @input="emitChange"
              />
              <div v-if="numericKeywords.length > 0" class="smart-union-input__keyword-btns">
                <button
                  v-for="kw in numericKeywords"
                  :key="kw"
                  class="smart-union-input__keyword-btn"
                  :class="{ 'smart-union-input__keyword-btn--active': isKeywordSelected(kw) }"
                  @click="toggleKeyword(kw)"
                >
                  {{ getKeywordLabel(kw) }}
                </button>
              </div>
            </div>
          </template>

          <!-- 数组输入 -->
          <template v-if="currentType === 'array'">
            <div class="smart-union-input__array-wrapper">
              <div class="smart-union-input__array-items">
                <div
                  v-for="(_, index) in arrayValue"
                  :key="index"
                  class="smart-union-input__array-item"
                >
                  <input
                    v-model.number="arrayValue[index]"
                    type="number"
                    class="smart-union-input__input smart-union-input__input--small"
                    @input="emitChange"
                  />
                  <button class="smart-union-input__remove-btn" @click="removeArrayItem(index)">×</button>
                </div>
              </div>
              <button class="smart-union-input__add-btn" @click="addArrayItem">
                + 添加
              </button>
            </div>
          </template>

          <!-- 布尔输入 -->
          <template v-if="currentType === 'boolean'">
            <label class="smart-union-input__boolean-toggle">
              <input
                v-model="booleanValue"
                type="checkbox"
                @change="emitChange"
              />
              <span class="smart-union-input__toggle-label">{{ booleanValue ? '是' : '否' }}</span>
            </label>
          </template>
        </div>
      </div>
      
      <!-- 遮罩层 -->
      <div v-if="showPanel" class="smart-union-input__overlay" @click="closePanel" />
    </Teleport>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'SmartUnionInput',
  props: {
    modelValue: {
      type: [String, Number, Array, Boolean, Object] as PropType<unknown>,
      default: undefined
    },
    types: {
      type: Array as PropType<string[]>,
      default: () => ['string', 'number']
    },
    defaultType: {
      type: String,
      default: 'string'
    },
    specialKeywords: {
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
    stringPlaceholder: {
      type: String,
      default: '请输入...'
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

    // 当前选中的类型
    const currentType = ref(props.defaultType);

    // 各类型的值
    const stringValue = ref('');
    const numberValue = ref<number | null>(null);
    const arrayValue = ref<number[]>([]);
    const booleanValue = ref(false);

    // 是否显示关键字选择
    const showKeywordSelect = ref(true);

    // 可用的类型
    const availableTypes = computed(() => {
      return props.types.filter((t) => ['string', 'number', 'array', 'boolean'].includes(t));
    });

    // 数值类型的关键字
    const numericKeywords = computed(() => {
      return props.specialKeywords.filter((k) => ['auto', 'inherit'].includes(k));
    });

    // 类型标签映射
    const typeLabels: Record<string, string> = {
      string: '文本',
      number: '数值',
      array: '数组',
      boolean: '布尔',
    };

    function getTypeLabel(type: string): string {
      return typeLabels[type] || type;
    }

    // 关键字标签映射
    const keywordLabels: Record<string, string> = {
      auto: '自动',
      inherit: '继承',
      none: '无',
      transparent: '透明',
    };

    function getKeywordLabel(kw: string): string {
      return keywordLabels[kw] || kw;
    }

    // 是否有值
    const hasValue = computed(() => {
      return props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== '';
    });

    // 显示文本
    const displayText = computed(() => {
      if (!hasValue.value) return '未设置';
      
      const val = props.modelValue;
      
      if (currentType.value === 'string') {
        if (typeof val === 'string') {
          const label = keywordLabels[val];
          return label || ((val as string).length > 20 ? (val as string).substring(0, 20) + '...' : val);
        }
      }
      
      if (currentType.value === 'number') {
        if (typeof val === 'number') return (val as number).toString();
        if (typeof val === 'string') return keywordLabels[val] || val;
      }
      
      if (currentType.value === 'array') {
        if (Array.isArray(val)) {
          return `[${(val as unknown[]).join(', ')}]`;
        }
      }
      
      if (currentType.value === 'boolean') {
        return val ? '是' : '否';
      }
      
      return String(val);
    });

    // 初始化值
    watch(() => props.modelValue, (val) => {
      if (val === undefined || val === null) return;
      
      if (typeof val === 'string') {
        currentType.value = 'string';
        stringValue.value = val;
        if (props.specialKeywords.includes(val)) {
          showKeywordSelect.value = true;
        }
      } else if (typeof val === 'number') {
        currentType.value = 'number';
        numberValue.value = val;
      } else if (Array.isArray(val)) {
        currentType.value = 'array';
        arrayValue.value = [...val];
      } else if (typeof val === 'boolean') {
        currentType.value = 'boolean';
        booleanValue.value = val;
      }
    }, { immediate: true });

    // 计算面板位置
    function updatePanelPosition() {
      if (!triggerRef.value) return;
      
      const triggerRect = triggerRef.value.getBoundingClientRect();
      const gap = 4;
      const margin = 16;
      
      // 获取实际面板尺寸，如果面板还没渲染则使用默认值
      let panelWidth = 320;
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

    // 类型切换
    function switchType(type: string) {
      currentType.value = type;
      emitChange();
    }

    // 选择关键字
    function selectKeyword(kw: string) {
      stringValue.value = kw;
      emitChange();
    }

    // 切换数值关键字
    function toggleKeyword(kw: string) {
      if (isKeywordSelected(kw)) {
        numberValue.value = null;
      } else {
        stringValue.value = kw;
        currentType.value = 'string';
      }
      emitChange();
    }

    // 是否选中关键字
    function isKeywordSelected(kw: string): boolean {
      return typeof props.modelValue === 'string' && props.modelValue === kw;
    }

    // 添加数组元素
    function addArrayItem() {
      arrayValue.value.push(0);
      emitChange();
    }

    // 移除数组元素
    function removeArrayItem(index: number) {
      arrayValue.value.splice(index, 1);
      emitChange();
    }

    // 清除值
    function clearValue() {
      emit('update:modelValue', undefined);
      emit('change', undefined);
    }

    // 发送变化
    function emitChange() {
      let value: unknown;
      
      switch (currentType.value) {
        case 'string':
          value = stringValue.value;
          break;
        case 'number':
          value = numberValue.value;
          break;
        case 'array':
          value = arrayValue.value;
          break;
        case 'boolean':
          value = booleanValue.value;
          break;
        default:
          value = undefined;
      }
      
      emit('update:modelValue', value);
      emit('change', value);
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
      currentType,
      stringValue,
      numberValue,
      arrayValue,
      booleanValue,
      showKeywordSelect,
      availableTypes,
      numericKeywords,
      typeLabels,
      keywordLabels,
      hasValue,
      displayText,
      getTypeLabel,
      getKeywordLabel,
      updatePanelPosition,
      togglePanel,
      openPanel,
      closePanel,
      switchType,
      selectKeyword,
      toggleKeyword,
      isKeywordSelected,
      addArrayItem,
      removeArrayItem,
      clearValue,
      emitChange,
      handleKeydown,
      handleScroll
    };
  }
});
</script>

<style scoped lang="scss">
.smart-union-input {
  display: inline-block;
  width: 100%;

  &__trigger {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 8px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    width: 100%;
    transition: border-color 0.2s;
    box-sizing: border-box;

    &:hover {
      border-color: #409eff;
    }
  }

  &__preview {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 6px;
    overflow: hidden;
  }

  &__type-badge {
    display: inline-block;
    padding: 2px 6px;
    background: #f0f0f0;
    border-radius: 3px;
    font-size: 11px;
    color: #666;
    flex-shrink: 0;
  }

  &__value-text {
    flex: 1;
    font-size: 13px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__clear-btn {
    width: 18px;
    height: 18px;
    border: none;
    background: #dcdfe6;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    font-size: 12px;
    line-height: 1;
    flex-shrink: 0;

    &:hover {
      background: #f56c6c;
    }
  }
}
</style>

<!-- 非 scoped 样式：用于 Teleport 内容 -->
<style lang="scss">
.smart-union-input__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
}

.smart-union-input__panel {
  position: fixed;
  z-index: 9999;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 12px;
  min-width: 320px;
}

.smart-union-input__tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
  padding: 4px;
  background: #f5f5f5;
  border-radius: 6px;
  flex-wrap: wrap;
}

.smart-union-input__tab {
  flex: 1;
  padding: 6px 12px;
  border: none;
  background: transparent;
  border-radius: 4px;
  font-size: 13px;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(64, 158, 255, 0.1);
    color: #409eff;
  }

  &--active {
    background: #409eff;
    color: #fff;
  }
}

.smart-union-input__input-area {
  min-height: 100px;
}

.smart-union-input__input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #409eff;
  }

  &--number {
    text-align: right;
  }

  &--small {
    width: 80px;
    padding: 6px 8px;
  }
}

.smart-union-input__keyword-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.smart-union-input__keyword-tag {
  padding: 8px 16px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-size: 13px;
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

  &--custom {
    background: #f5f5f5;
    border-color: #e0e0e0;
  }
}

.smart-union-input__keyword-btns {
  display: flex;
  gap: 6px;
  margin-top: 8px;
}

.smart-union-input__keyword-btn {
  padding: 6px 12px;
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

.smart-union-input__array-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}

.smart-union-input__array-item {
  display: flex;
  gap: 8px;
  align-items: center;
}

.smart-union-input__remove-btn {
  width: 24px;
  height: 24px;
  border: none;
  background: #f56c6c;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;

  &:hover {
    background: #f34848;
  }
}

.smart-union-input__add-btn {
  width: 100%;
  padding: 8px;
  border: 1px dashed #dcdfe6;
  border-radius: 4px;
  background: #fafafa;
  cursor: pointer;
  font-size: 13px;
  color: #409eff;
  transition: all 0.2s;

  &:hover {
    border-color: #409eff;
    background: #f0f8ff;
  }
}

.smart-union-input__boolean-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 6px;

  input[type="checkbox"] {
    width: 40px;
    height: 22px;
    appearance: none;
    background: #dcdfe6;
    border-radius: 11px;
    position: relative;
    cursor: pointer;
    transition: background 0.3s;

    &:checked {
      background: #409eff;

      &::before {
        transform: translateX(18px);
      }
    }

    &::before {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #fff;
      top: 2px;
      left: 2px;
      transition: transform 0.3s;
    }
  }
}

.smart-union-input__toggle-label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}
</style>
