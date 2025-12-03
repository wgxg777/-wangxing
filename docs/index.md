# 王兴组件库

基于 Vue 3 + Element Plus 的业务组件库。

## 快速开始

安装依赖：
```bash
pnpm add @wangxing777/business vue element-plus
```

全局引入：
```ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

createApp(App).use(ElementPlus).mount('#app')
```

## 组件列表

- [Button 按钮](/components/button)
- [BaseTable 基础表格](/components/base-table)
