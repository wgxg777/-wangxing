import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import "element-plus/dist/index.css";
import '@wangxing777/business/style.css'
import './custom.css'
import ElementPlus from 'element-plus'


export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(ElementPlus)
  }
}
