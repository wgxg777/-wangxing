import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@wangxing777/business/style.css'

createApp(App).use(ElementPlus).use(router).mount('#app')
