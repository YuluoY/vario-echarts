<template>
  <div class="type-mapping">
    <el-table :data="mappings" stripe>
      <el-table-column prop="echartsType" label="ECharts 类型" width="180">
        <template #default="{ row }">
          <code>{{ row.echartsType }}</code>
        </template>
      </el-table-column>
      <el-table-column prop="uiComponent" label="UI 组件" width="180">
        <template #default="{ row }">
          <el-select v-model="row.uiComponent" placeholder="选择组件">
            <el-option label="ElInput" value="ElInput" />
            <el-option label="ElInputNumber" value="ElInputNumber" />
            <el-option label="ElSwitch" value="ElSwitch" />
            <el-option label="ElSelect" value="ElSelect" />
            <el-option label="ElSlider" value="ElSlider" />
            <el-option label="ElColorPicker" value="ElColorPicker" />
            <el-option label="SmartColorInput" value="SmartColorInput" />
            <el-option label="SmartSizeInput" value="SmartSizeInput" />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="defaultProps" label="默认属性">
        <template #default="{ row }">
          <el-input
            v-model="row.defaultProps"
            type="textarea"
            :rows="2"
            placeholder="{...}"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button type="danger" size="small" @click="deleteMapping(row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <div class="add-mapping">
      <el-button type="primary" @click="addMapping">
        <el-icon><Plus /></el-icon>
        添加映射
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Plus } from '@element-plus/icons-vue';

interface Mapping {
  echartsType: string;
  uiComponent: string;
  defaultProps: string;
}

const mappings = ref<Mapping[]>([
  { echartsType: 'Color', uiComponent: 'SmartColorInput', defaultProps: '{ showAlpha: true }' },
  { echartsType: 'number', uiComponent: 'ElInputNumber', defaultProps: '{ min: 0, step: 1 }' },
  { echartsType: 'string', uiComponent: 'ElInput', defaultProps: '{}' },
  { echartsType: 'boolean', uiComponent: 'ElSwitch', defaultProps: '{}' },
  { echartsType: 'enum', uiComponent: 'ElSelect', defaultProps: '{ clearable: true }' },
  { echartsType: 'angle', uiComponent: 'ElSlider', defaultProps: '{ min: -360, max: 360 }' },
  { echartsType: 'size', uiComponent: 'SmartSizeInput', defaultProps: '{}' },
  { echartsType: 'vector', uiComponent: 'ElInput', defaultProps: '{ separate: true }' },
]);

const addMapping = () => {
  mappings.value.push({
    echartsType: '',
    uiComponent: 'ElInput',
    defaultProps: '{}'
  });
};

const deleteMapping = (row: Mapping) => {
  const index = mappings.value.indexOf(row);
  if (index > -1) {
    mappings.value.splice(index, 1);
  }
};
</script>

<style lang="scss" scoped>
.type-mapping {
  .add-mapping {
    margin-top: var(--spacing-lg);
  }
}
</style>
