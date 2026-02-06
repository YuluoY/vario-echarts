import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// @ts-expect-error Element Plus locale file has no type declaration
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import SmartComponents from '@vario-echarts/smart-components';
import '@vario-echarts/smart-components/dist/style.css';
import App from './App.vue';
import router from './router';
import './styles/global.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus, { locale: zhCn as any });
app.use(SmartComponents); // 注册智能组件

app.mount('#app');
