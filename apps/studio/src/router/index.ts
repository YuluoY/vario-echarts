import { createRouter, createWebHistory } from 'vue-router';
import GeneratorView from '../views/GeneratorView.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { title: '概览', icon: 'dashboard' }
  },
  {
    path: '/materials',
    name: 'Materials',
    component: () => import('../views/MaterialsView.vue'),
    meta: { title: '物料管理', icon: 'database' }
  },
  {
    path: '/converter',
    name: 'Converter',
    component: () => import('../views/ConverterView.vue'),
    meta: { title: 'Schema 转换器', icon: 'refresh' }
  },
  {
    path: '/parser',
    name: 'Parser',
    component: () => import('../views/ParserView.vue'),
    meta: { title: '解析器配置', icon: 'setting' }
  },
  {
    path: '/preview',
    name: 'Preview',
    component: () => import('../views/PreviewView.vue'),
    meta: { title: '实时预览', icon: 'eye' }
  },
  {
    path: '/preview/:key',
    name: 'PreviewDetail',
    component: () => import('../views/PreviewView.vue'),
    meta: { title: '实时预览', icon: 'eye' }
  },
  {
    path: '/live-preview',
    name: 'LivePreview',
    component: () => import('../views/LivePreview.vue'),
    meta: { title: 'Vario 实时预览', icon: 'monitor' }
  },
  {
    path: '/generator',
    name: 'Generator',
    component: GeneratorView,
    meta: { title: '批量生成', icon: 'play-circle' }
  },
  {
    path: '/test-v2',
    name: 'TestV2',
    component: () => import('../views/TestV2Components.vue'),
    meta: { title: 'V2测试', icon: 'experiment' }
  }
];

const router = createRouter({
  // BASE_URL 由 vite base 决定，子路径部署（如 GitHub Pages）时自动带上前缀
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title || 'ECharts Vario'} - Studio`;
  next();
});

export default router;
