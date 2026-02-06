<template>
  <div class="code-editor" :class="{ 'has-error': hasError }">
    <div class="editor-header">
      <span class="language-badge">{{ language }}</span>
      <div class="editor-actions">
        <el-button size="small" @click="formatCode">
          <el-icon><Document /></el-icon>
          格式化
        </el-button>
        <el-button size="small" @click="copyCode">
          <el-icon><CopyDocument /></el-icon>
          复制
        </el-button>
      </div>
    </div>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      class="editor-textarea"
      :class="{ 'editor-focused': focused }"
      @focus="focused = true"
      @blur="focused = false; validateCode()"
      spellcheck="false"
    />
    <div v-if="hasError" class="editor-error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Document, CopyDocument } from '@element-plus/icons-vue';

const props = defineProps<{
  modelValue: string;
  language?: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const focused = ref(false);
const hasError = ref(false);
const errorMessage = ref('');

const validateCode = () => {
  if (!props.modelValue.trim()) return;
  try {
    JSON.parse(props.modelValue);
    hasError.value = false;
  } catch (e) {
    hasError.value = true;
    errorMessage.value = (e as Error).message;
  }
};

const formatCode = () => {
  try {
    const parsed = JSON.parse(props.modelValue);
    emit('update:modelValue', JSON.stringify(parsed, null, 2));
  } catch {
    // Ignore format errors
  }
};

const copyCode = async () => {
  await navigator.clipboard.writeText(props.modelValue);
};
</script>

<style lang="scss" scoped>
.code-editor {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  overflow: hidden;
  
  &.has-error {
    border-color: var(--danger-color);
  }
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--bg-subtle);
  border-bottom: 1px solid var(--border-color);
}

.language-badge {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.editor-actions {
  display: flex;
  gap: var(--spacing-xs);
}

.editor-textarea {
  width: 100%;
  height: 100%;
  padding: var(--spacing-md);
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 14px;
  line-height: 1.6;
  background: var(--bg-card);
  border: none;
  resize: vertical;
  color: var(--text-primary);
  
  &:focus {
    outline: none;
  }
}

.editor-error {
  padding: var(--spacing-sm) var(--spacing-md);
  background: rgba(245, 108, 108, 0.1);
  color: var(--danger-color);
  font-size: var(--font-size-small);
  border-top: 1px solid var(--danger-color);
}
</style>
