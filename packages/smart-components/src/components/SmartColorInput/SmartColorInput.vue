<template>
  <div ref="containerRef" class="smart-color-input">
    <!-- 触发器：显示当前颜色 -->
    <div ref="triggerRef" class="smart-color-input__trigger" @click="togglePanel">
      <div class="smart-color-input__preview" :style="previewStyle">
        <span v-if="!modelValue" class="smart-color-input__placeholder">选择</span>
      </div>
      <span class="smart-color-input__text">{{ displayText }}</span>
      <button v-if="modelValue" class="smart-color-input__clear-btn" @click.stop="clearValue" title="清除">×</button>
    </div>

    <!-- 弹出面板：使用 Teleport 避免被父层遮挡 -->
    <Teleport to="body">
      <div v-if="showPanel" ref="panelRef" class="smart-color-input__panel" :style="panelStyle" @click.stop>
        <!-- 集成 vue3-colorpicker - 支持纯色和渐变 -->
        <ColorPicker
          v-model:pureColor="pureColor"
          v-model:gradientColor="gradientColor"
          v-model:activeKey="activeColorMode"
          is-widget
          :useType="allowGradient ? 'both' : 'pure'"
          pickerType="chrome"
          format="hex"
          :disableHistory="false"
          :disableAlpha="false"
          :roundHistory="true"
          @pureColorChange="handlePureColorChange"
          @gradientColorChange="handleGradientColorChange"
        />

        <!-- 关键字选项和格式切换 -->
        <div v-if="keywords.length > 0 || activeColorMode === 'gradient'" class="smart-color-input__keyword-section">
          <label v-if="keywords.length > 0 || activeColorMode === 'gradient'" class="smart-color-input__section-label">
            {{ activeColorMode === 'gradient' && keywords.length === 0 ? '输出格式' : '特殊值' }}
          </label>
          <div class="smart-color-input__keyword-list">
            <!-- 特殊值按钮 -->
            <button
              v-for="kw in keywords"
              :key="kw"
              class="smart-color-input__keyword-btn"
              :class="{ 'smart-color-input__keyword-btn--active': isKeywordValue(kw) }"
              @click="selectKeyword(kw)"
            >
              {{ keywordLabels[kw] || kw }}
            </button>
            <!-- ECharts 格式转换按钮 - 在渐变标签页时始终显示 -->
            <button
              v-if="allowGradient && activeColorMode === 'gradient'"
              class="smart-color-input__keyword-btn smart-color-input__echarts-btn"
              :class="{ 'smart-color-input__keyword-btn--active': outputFormat === 'echarts' }"
              @click="toggleOutputFormat"
              title="切换输出格式：CSS 渐变 ↔ ECharts 对象"
            >
              <span class="smart-color-input__echarts-icon">📊</span>
              {{ outputFormat === 'echarts' ? 'ECharts✓' : 'ECharts' }}
            </button>
          </div>
        </div>
      </div>
      
      <!-- 遮罩层 -->
      <div v-if="showPanel" class="smart-color-input__overlay" @click="closePanel" />
    </Teleport>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, defineComponent, type PropType } from 'vue';
import { ColorPicker } from 'vue3-colorpicker';
import 'vue3-colorpicker/style.css';
import { cssGradientToECharts, echartsGradientToCSS, type EChartsGradient } from '../../utils/colorConverter';

export default defineComponent({
  name: 'SmartColorInput',
  components: {
    ColorPicker: ColorPicker as any
  },
  props: {
    modelValue: {
      type: [String, Object] as PropType<string | EChartsGradient>,
      default: ''
    },
    keywords: {
      type: Array as PropType<string[]>,
      default: () => ['transparent', 'inherit', 'none']
    },
    allowInherit: {
      type: Boolean,
      default: true
    },
    // 是否允许渐变色（某些属性如文字颜色不支持渐变）
    allowGradient: {
      type: Boolean,
      default: true
    },
    // 默认输出格式：css 或 echarts
    defaultOutputFormat: {
      type: String as PropType<'css' | 'echarts'>,
      default: 'css'
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // Refs
    const containerRef = ref<HTMLElement | null>(null);
    const triggerRef = ref<HTMLElement | null>(null);
    const panelRef = ref<HTMLElement | null>(null);
    const showPanel = ref(false);
    const panelStyle = ref({ left: '0px', top: '0px' });

    // 用于 vue3-colorpicker 的颜色值
    const pureColor = ref<string>('#000000');
    const gradientColor = ref<string>('linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)');
    
    // 当前激活的 tab（solid、gradient 线性渐变、radial 径向渐变）
    // 注意：vue3-colorpicker 的 activeKey 可能只支持 'solid' 和 'gradient'
    // 渐变类型由 gradientColor 的值决定（linear-gradient 或 radial-gradient）
    const activeColorMode = ref<'solid' | 'gradient'>('solid');
    
    // 输出格式：css 或 echarts
    const outputFormat = ref<'css' | 'echarts'>(props.defaultOutputFormat);
    
    // 当前存储的 ECharts 渐变对象（用于在两种格式间转换）
    const currentEChartsGradient = ref<EChartsGradient | null>(null);

    // 关键字标签
    const keywordLabels: Record<string, string> = {
      transparent: '透明',
      inherit: '继承',
      none: '无',
      auto: '自动',
    };

    // 是否是关键字
    const isKeyword = computed(() => {
      return typeof props.modelValue === 'string' && props.keywords!.includes(props.modelValue);
    });
    
    // 检查某个关键字是否为当前值
    function isKeywordValue(keyword: string): boolean {
      return props.modelValue === keyword;
    }

    // 显示文本
    const displayText = computed(() => {
      if (!props.modelValue) return '未设置';
      
      const val = props.modelValue;
      
      // 如果是对象类型（ECharts 格式）
      if (typeof val === 'object') {
        return 'ECharts 渐变';
      }
      
      // 字符串类型
      if (typeof val === 'string') {
        if (isKeyword.value) return keywordLabels[val] || val;
        // 直接显示完整值（包括渐变），CSS会自动处理省略号
        return val;
      }
      
      return '未设置';
    });

    // 预览样式
    const previewStyle = computed(() => {
      const val = props.modelValue;
      
      if (!val || val === 'none') {
        return { background: '#f5f5f5', border: '1px dashed #ddd' };
      }
      
      // 如果是 ECharts 对象，转换为 CSS
      if (typeof val === 'object') {
        const cssGradient = echartsGradientToCSS(val as EChartsGradient);
        return { background: cssGradient };
      }
      
      // 字符串类型
      if (typeof val === 'string') {
        if (val === 'transparent') {
          return { 
            background: 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%)',
            backgroundSize: '8px 8px',
            backgroundPosition: '0 0, 4px 4px'
          };
        }
        if (val === 'inherit' || val === 'auto') {
          return { background: 'linear-gradient(135deg, #409eff 0%, #67c23a 100%)' };
        }
        // 渐变或纯色都用 background 属性
        return { background: val };
      }
      
      return { background: '#f5f5f5' };
    });

    // 同步外部值到 pureColor 和 gradientColor，并设置激活的 tab
    watch(() => props.modelValue, (val) => {
      if (!val) return;

      // 如果是关键字，跳过
      if (typeof val === 'string' && props.keywords!.includes(val)) return;

      // 如果是 ECharts 对象格式（线性或径向渐变）
      if (typeof val === 'object' && ('type' in val)) {
        const gradient = val as EChartsGradient;
        currentEChartsGradient.value = gradient;
        // 转换为 CSS 格式供 vue3-colorpicker 显示
        // echartsGradientToCSS 会根据 type 自动生成 linear-gradient 或 radial-gradient
        const cssGradient = echartsGradientToCSS(gradient);
        gradientColor.value = cssGradient;
        // 使用 nextTick 确保 gradientColor 更新后再设置 activeColorMode
        // 这样 vue3-colorpicker 才能根据 gradientColor 的值正确识别并激活线性/径向 tab
        nextTick(() => {
          activeColorMode.value = 'gradient';
          outputFormat.value = 'echarts';
        });
        return;
      }

      // 如果是字符串
      if (typeof val === 'string') {
        // 渐变字符串（线性或径向）
        if (val.startsWith('linear-gradient') || val.startsWith('radial-gradient')) {
          // 设置 gradientColor，vue3-colorpicker 会根据前缀自动识别并激活对应的 tab
          gradientColor.value = val;
          // 使用 nextTick 确保 gradientColor 更新后再设置 activeColorMode
          nextTick(() => {
            activeColorMode.value = 'gradient';
            outputFormat.value = 'css';
          });
          // 保存转换后的 ECharts 格式，以便格式切换
          const echartsGradient = cssGradientToECharts(val);
          if (echartsGradient) {
            currentEChartsGradient.value = echartsGradient;
          }
        } else if (val.startsWith('#') || val.startsWith('rgb')) {
          // 纯色
          pureColor.value = val;
          activeColorMode.value = 'solid';
        }
      }
    }, { immediate: true });

    // 计算面板位置
    function updatePanelPosition() {
      if (!triggerRef.value) return;
      
      const triggerRect = triggerRef.value.getBoundingClientRect();
      const gap = 4;
      const margin = 16;
      
      // 获取实际面板尺寸，如果面板还没渲染则使用默认值
      let panelWidth = 280;
      let panelHeight = 360;
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

    // 处理纯色变化
    function handlePureColorChange(color: string) {
      emit('update:modelValue', color);
    }

    // 处理渐变色变化（支持线性渐变和径向渐变）
    function handleGradientColorChange(gradient: string) {
      // cssGradientToECharts 会自动检测渐变类型（linear-gradient 或 radial-gradient）
      // 并调用相应的转换函数转换为 ECharts 格式
      const echartsGradient = cssGradientToECharts(gradient);
      currentEChartsGradient.value = echartsGradient;

      // 根据输出格式决定输出内容
      if (outputFormat.value === 'echarts' && echartsGradient) {
        // 直接输出 ECharts 对象
        emit('update:modelValue', echartsGradient);
      } else {
        // 输出 CSS 字符串
        emit('update:modelValue', gradient);
      }
    }

    // 切换输出格式
    function toggleOutputFormat() {
      if (outputFormat.value === 'css') {
        outputFormat.value = 'echarts';
        // 转换为 ECharts 对象格式
        if (gradientColor.value) {
          const echartsGradient = cssGradientToECharts(gradientColor.value);
          if (echartsGradient) {
            currentEChartsGradient.value = echartsGradient;
            emit('update:modelValue', echartsGradient);
          }
        }
      } else {
        outputFormat.value = 'css';
        // 转换回 CSS 字符串格式
        if (gradientColor.value) {
          emit('update:modelValue', gradientColor.value);
        }
      }
    }

    // 选择关键字
    function selectKeyword(keyword: string) {
      emit('update:modelValue', keyword);
      closePanel();
    }

    // 清除值
    function clearValue() {
      emit('update:modelValue', undefined);
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
      pureColor,
      gradientColor,
      activeColorMode,
      keywordLabels,
      isKeyword,
      displayText,
      previewStyle,
      updatePanelPosition,
      togglePanel,
      openPanel,
      closePanel,
      handlePureColorChange,
      handleGradientColorChange,
      toggleOutputFormat,
      outputFormat,
      isKeywordValue,
      selectKeyword,
      clearValue,
      handleKeydown,
      handleScroll
    };
  }
});
</script>

<style scoped lang="scss">
.smart-color-input {
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

    &:hover {
      border-color: #409eff;
    }
  }

  &__preview {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0,0,0,0.1);
  }

  &__placeholder {
    font-size: 10px;
    color: #999;
  }

  &__text {
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
.smart-color-input__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
}

.smart-color-input__panel {
  position: fixed;
  z-index: 9999;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 12px;

  .vc-colorpicker {
    box-shadow: none !important;
  }
}

.smart-color-input__keyword-section {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #ebeef5;
}

.smart-color-input__section-label {
  display: block;
  font-size: 12px;
  color: #909399;
  margin-bottom: 8px;
}

.smart-color-input__keyword-list {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.smart-color-input__keyword-btn {
  padding: 6px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-size: 12px;
  color: #606266;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 4px;

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

// ECharts 按钮特殊样式（使用橙色色系）
.smart-color-input__echarts-btn {
  border-color: #e6a23c;
  color: #e6a23c;
  
  &:hover {
    border-color: #e6a23c;
    color: #e6a23c;
    background: #fdf6ec;
  }
  
  &.smart-color-input__keyword-btn--active {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
    
    &:hover {
      background: #cf9236;
      border-color: #cf9236;
    }
  }
}

.smart-color-input__echarts-icon {
  font-size: 12px;
}
</style>
