---
layout: home

hero:
  name: 王兴组件库
  text: 基于 Vue 3 + Element Plus
  tagline: 开箱即用的业务组件库，让开发更高效
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 组件列表
      link: /components/button
    - theme: alt
      text: GitHub
      link: https://github.com/wgxg777/-wangxing

features:
  - icon: 🚀
    title: 开箱即用
    details: 提供完整的 TypeScript 类型定义，支持按需导入和全局安装
  - icon: 🎨
    title: 基于 Element Plus
    details: 继承 Element Plus 的设计语言，保持一致的用户体验
  - icon: 📦
    title: 业务组件封装
    details: 针对常见业务场景进行封装，减少重复代码
  - icon: ⚡️
    title: Vue 3 + Vite
    details: 使用最新的 Vue 3 Composition API 和 Vite 构建工具
  - icon: 🛠️
    title: 智能检测
    details: 组件自动检测状态，提供最佳的交互体验
  - icon: 📝
    title: 完整文档
    details: 提供详细的文档和示例，快速上手
  - icon: 💡
    title: 灵活API
    details: 支持 JavaScript 直接调用，无需模板配置
---

## 安装

::: code-group
```bash [npm]
npm install @wangxing777/business element-plus
```

```bash [pnpm]
pnpm add @wangxing777/business element-plus
```

```bash [yarn]
yarn add @wangxing777/business element-plus
```
:::

## 快速开始

### 全局安装（推荐）

```typescript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import WangXingBusiness from '@wangxing777/business'
import 'element-plus/dist/index.css'
import '@wangxing777/business/style.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(WangXingBusiness) // 自动注册所有组件
app.mount('#app')
```

### 按需导入

```typescript
import { WxButton, WxBaseTable } from '@wangxing777/business'

export default {
  components: { WxButton, WxBaseTable }
}
```


