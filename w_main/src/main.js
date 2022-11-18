import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { registerMicroApps, start } from 'qiankun';

let app = createApp(App)
app.use(router)
app.use(ElementPlus, { size: 'small' })
// 全局引入el-icon
for (const iconName in ElementPlusIconsVue) {
  app.component(iconName, ElementPlusIconsVue[iconName])
}
app.mount('#app');

// 注册微应用
const microApps = [
  {
    name: 'vue-component',
    entry: 'http://localhost:8082',
    container: '#app',
    activeRule: '/component',
  },
  {
    name: 'vue server', // app name registered
    entry: 'http://localhost:8083',
    container: '#app',
    activeRule: '/server',
  },
];

registerMicroApps(microApps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
})

start();
