import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@wangxing777/business/style.css'
import { WxDialog } from '@wangxing777/business'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)

// 设置 WxDialog 的应用上下文
WxDialog._context = app._context

app.mount('#app')
