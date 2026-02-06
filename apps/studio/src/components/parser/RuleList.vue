<template>
  <div class="rule-list">
    <el-alert
      title="自定义规则说明"
      type="warning"
      description="自定义规则可以覆盖默认的类型映射行为，用于处理特殊场景。"
      :closable="false"
      class="info-alert"
    />
    
    <el-table :data="rules" stripe>
      <el-table-column prop="name" label="规则名称" width="200">
        <template #default="{ row }">
          <el-input v-model="row.name" placeholder="规则名称" />
        </template>
      </el-table-column>
      
      <el-table-column prop="pattern" label="匹配模式" width="250">
        <template #default="{ row }">
          <el-input v-model="row.pattern" placeholder="prop=value 或正则表达式" />
        </template>
      </el-table-column>
      
      <el-table-column prop="component" label="目标组件" width="180">
        <template #default="{ row }">
          <el-select v-model="row.component" placeholder="选择组件">
            <el-option label="SmartColorInput" value="SmartColorInput" />
            <el-option label="SmartSizeInput" value="SmartSizeInput" />
            <el-option label="SmartPositionInput" value="SmartPositionInput" />
            <el-option label="SmartUnionInput" value="SmartUnionInput" />
            <el-option label="ElInput" value="ElInput" />
            <el-option label="ElSwitch" value="ElSwitch" />
          </el-select>
        </template>
      </el-table-column>
      
      <el-table-column prop="priority" label="优先级" width="100">
        <template #default="{ row }">
          <el-input-number v-model="row.priority" :min="1" :max="100" size="small" />
        </template>
      </el-table-column>
      
      <el-table-column prop="enabled" label="启用" width="80">
        <template #default="{ row }">
          <el-switch v-model="row.enabled" size="small" />
        </template>
      </el-table-column>
      
      <el-table-column label="操作" width="100">
        <template #default="{ row, $index }">
          <el-button type="danger" size="small" @click="deleteRule($index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <div class="add-rule">
      <el-button type="primary" @click="addRule">
        <el-icon><Plus /></el-icon>
        添加规则
      </el-button>
      <el-button @click="exportRules">
        <el-icon><Download /></el-icon>
        导出规则
      </el-button>
      <el-button @click="importRules">
        <el-icon><Upload /></el-icon>
        导入规则
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Plus, Download, Upload } from '@element-plus/icons-vue';

interface Rule {
  name: string;
  pattern: string;
  component: string;
  priority: number;
  enabled: boolean;
}

const rules = ref<Rule[]>([
  {
    name: '标题颜色',
    pattern: 'title.color',
    component: 'SmartColorInput',
    priority: 10,
    enabled: true
  },
  {
    name: '背景色',
    pattern: 'backgroundColor',
    component: 'SmartColorInput',
    priority: 10,
    enabled: true
  },
  {
    name: '字体大小',
    pattern: '.*\\.fontSize',
    component: 'SmartSizeInput',
    priority: 5,
    enabled: true
  }
]);

const addRule = () => {
  rules.value.push({
    name: '',
    pattern: '',
    component: 'ElInput',
    priority: 50,
    enabled: true
  });
};

const deleteRule = (index: number) => {
  rules.value.splice(index, 1);
};

const exportRules = () => {
  const data = JSON.stringify(rules.value, null, 2);
  console.log('Exporting rules:', data);
};

const importRules = () => {
  console.log('Importing rules...');
};
</script>

<style lang="scss" scoped>
.rule-list {
  .info-alert {
    margin-bottom: var(--spacing-lg);
  }
  
  .add-rule {
    margin-top: var(--spacing-lg);
    display: flex;
    gap: var(--spacing-md);
  }
}
</style>
