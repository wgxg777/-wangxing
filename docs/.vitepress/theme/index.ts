import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import "element-plus/dist/index.css";
import '@wangxing777/business/style.css'
import './custom.css'
import ElementPlus from 'element-plus'
import { WxDialog } from '@wangxing777/business'


export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(ElementPlus)
    // 设置 WxDialog 的应用上下文
    WxDialog._context = app._context
  }
}
