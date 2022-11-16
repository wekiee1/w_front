import { createApp } from 'vue'
import "./public-path";
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import routes from './router'
import store from './store'
import './public-path';

let router = null;
let app = null;

function render(props = {}) {
  console.log('render: w_component');
  const { container } = props;

  app = createApp(App)
  app.use(store)
  app.use(routes)
  app.use(ElementPlus, { size: 'small' })
  // 全局引入el-icon
  for (const iconName in ElementPlusIconsVue) {
    app.component(iconName, ElementPlusIconsVue[iconName])
  }
  app.mount(container ? container.querySelector("#app") : "#app");

}

console.log('__POWERED_BY_QIANKUN__ :', window.__POWERED_BY_QIANKUN__);

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  console.log('w_component: 独立运行模式');
  render();
}


/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('react app bootstraped: w_server');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('w_component: 微应用模式');
  render(props)
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  app.$destroy();
  app.$el.innerHTML = '';
  app = null;
  router = null;
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}
