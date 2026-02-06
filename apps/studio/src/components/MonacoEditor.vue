<template>
  <div ref="editorContainer" class="monaco-editor-wrapper"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as monaco from 'monaco-editor';

interface Props {
  value?: string;
  language?: string;
  theme?: string;
  readonly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  language: 'json',
  theme: 'vs-dark',
  readonly: false
});

const editorContainer = ref<HTMLElement | null>(null);
let editor: monaco.editor.IStandaloneCodeEditor | null = null;

onMounted(() => {
  if (!editorContainer.value) return;

  // 创建编辑器实例
  editor = monaco.editor.create(editorContainer.value, {
    value: props.value,
    language: props.language,
    theme: props.theme,
    readOnly: props.readonly,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    fontSize: 13,
    tabSize: 2,
    automaticLayout: true,
    wordWrap: 'on',
    folding: true,
    lineNumbers: 'on',
    renderWhitespace: 'none',
    scrollbar: {
      verticalScrollbarSize: 10,
      horizontalScrollbarSize: 10
    }
  });
});

// 监听值变化
watch(() => props.value, (newValue) => {
  if (editor && editor.getValue() !== newValue) {
    editor.setValue(newValue);
  }
});

// 监听语言变化
watch(() => props.language, (newLanguage) => {
  if (editor) {
    monaco.editor.setModelLanguage(editor.getModel()!, newLanguage);
  }
});

// 监听主题变化
watch(() => props.theme, (newTheme) => {
  if (editor) {
    monaco.editor.setTheme(newTheme);
  }
});

onBeforeUnmount(() => {
  editor?.dispose();
});
</script>

<style scoped>
.monaco-editor-wrapper {
  width: 100%;
  height: 100%;
}
</style>
