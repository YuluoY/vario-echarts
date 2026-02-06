import type { App } from 'vue';

// 导入组件
import SmartColorInput from './components/SmartColorInput/index';
import SmartNumberInput from './components/SmartNumberInput/index';
import SmartOpacityInput from './components/SmartOpacityInput/index';
import SmartPositionInput from './components/SmartPositionInput/index';
import SmartSizeInput from './components/SmartSizeInput/index';
import SmartStyleSelect from './components/SmartStyleSelect/index';
import SmartUnionInput from './components/SmartUnionInput/index';

// 导出工具函数
export * from './utils/colorConverter';

// 导出组件
export {
  SmartColorInput,
  SmartNumberInput,
  SmartOpacityInput,
  SmartPositionInput,
  SmartSizeInput,
  SmartStyleSelect,
  SmartUnionInput,
};

// 导出默认安装函数
export default {
  install(app: App) {
    // 注册 smart components
    app.component('SmartColorInput', SmartColorInput);
    app.component('SmartNumberInput', SmartNumberInput);
    app.component('SmartOpacityInput', SmartOpacityInput);
    app.component('SmartPositionInput', SmartPositionInput);
    app.component('SmartSizeInput', SmartSizeInput);
    app.component('SmartStyleSelect', SmartStyleSelect);
    app.component('SmartUnionInput', SmartUnionInput);
  },
};
