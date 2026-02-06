<script lang="ts">
import { defineComponent, h, type VNode } from 'vue';

/**
 * VNode 渲染器组件
 * 用于正确渲染由 useVario 生成的 VNode
 * 
 * 参考 vario 官方实现
 */
export default defineComponent({
  name: 'VNodeRenderer',
  props: {
    vnode: {
      type: Object as () => VNode | null,
      default: null
    }
  },
  setup(props) {
    // 使用 setup 返回 render 函数，这是 Vue 3 推荐的方式
    return () => {
      return props.vnode || h('div', { class: 'vnode-placeholder' }, '加载中...');
    };
  }
});
</script>
