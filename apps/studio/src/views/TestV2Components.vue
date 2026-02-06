<template>
  <div class="test-v2-components">
    <h2>V2 组件定位测试 - 多个组件并排</h2>
    
    <div class="test-grid">
      <!-- 第一行：3个颜色选择器 -->
      <div class="test-item">
        <label>颜色选择器 1（左）</label>
        <SmartColorInput v-model="color1" />
      </div>
      
      <div class="test-item">
        <label>颜色选择器 2（中）</label>
        <SmartColorInput v-model="color2" />
      </div>
      
      <div class="test-item">
        <label>颜色选择器 3（右）</label>
        <SmartColorInput v-model="color3" />
      </div>

      <!-- 第二行：3个联合输入 -->
      <div class="test-item">
        <label>联合输入 1</label>
        <SmartUnionInput v-model="union1" />
      </div>
      
      <div class="test-item">
        <label>联合输入 2</label>
        <SmartUnionInput v-model="union2" />
      </div>
      
      <div class="test-item">
        <label>联合输入 3</label>
        <SmartUnionInput v-model="union3" />
      </div>

      <!-- 第三行：3个样式选择器 -->
      <div class="test-item">
        <label>样式选择 1</label>
        <SmartStyleSelect v-model="style1" />
      </div>
      
      <div class="test-item">
        <label>样式选择 2</label>
        <SmartStyleSelect v-model="style2" />
      </div>
      
      <div class="test-item">
        <label>样式选择 3</label>
        <SmartStyleSelect v-model="style3" />
      </div>

      <!-- 第四行：3个位置输入 -->
      <div class="test-item">
        <label>位置输入 1</label>
        <SmartPositionInput v-model="position1" />
      </div>
      
      <div class="test-item">
        <label>位置输入 2</label>
        <SmartPositionInput v-model="position2" />
      </div>
      
      <div class="test-item">
        <label>位置输入 3</label>
        <SmartPositionInput v-model="position3" />
      </div>
    </div>

    <div class="values-display">
      <h3>当前值：</h3>
      <pre>{{ JSON.stringify(values, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { 
  SmartColorInput,
  SmartUnionInput,
  SmartStyleSelect,
  SmartPositionInput
} from '@vario-echarts/smart-components';

const color1 = ref('#409eff');
const color2 = ref('linear-gradient(90deg, #409eff 0%, #67c23a 100%)');
const color3 = ref('transparent');

const union1 = ref<any>('auto');
const union2 = ref<any>(100);
const union3 = ref<any>([10, 20, 30]);

const style1 = ref('solid');
const style2 = ref('dashed');
const style3 = ref([5, 10]);

const position1 = ref<any>('center');
const position2 = ref<any>(['50%', '50%']);
const position3 = ref<any>(10);

const values = computed(() => ({
  colors: { color1: color1.value, color2: color2.value, color3: color3.value },
  unions: { union1: union1.value, union2: union2.value, union3: union3.value },
  styles: { style1: style1.value, style2: style2.value, style3: style3.value },
  positions: { position1: position1.value, position2: position2.value, position3: position3.value },
}));
</script>

<style scoped>
.test-v2-components {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  min-height: 100vh;
}

h2 {
  margin-bottom: 24px;
  color: #333;
  font-size: 20px;
}

.test-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 32px;
}

.test-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border: 1px dashed #ddd;
  border-radius: 8px;
}

.test-item label {
  font-size: 14px;
  font-weight: 500;
  color: #606266;
}

.values-display {
  background: #f5f7fa;
  border-radius: 8px;
  padding: 16px;
}

.values-display h3 {
  margin: 0 0 12px 0;
  color: #333;
  font-size: 14px;
}

.values-display pre {
  margin: 0;
  font-size: 12px;
  color: #606266;
  overflow-x: auto;
}
</style>
