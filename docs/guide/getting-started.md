# 快速开始

本指南将帮助你快速上手王兴组件库。

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

## 使用方式

### 方式1：全局安装（推荐）

适合项目中大量使用组件库的场景。

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

安装后可在模板中直接使用：

```vue
<template>
  <div>
    <WxButton variant="primary">主要按钮</WxButton>
    <WxBaseTable :column="columns" :tableData="data" />
  </div>
</template>
```

### 方式2：按需导入

适合只使用少量组件的场景，可以减小打包体积。

```vue
<script setup lang="ts">
import { WxButton, WxBaseTable } from '@wangxing777/business'

const columns = [
  { prop: 'name', label: '姓名' },
  { prop: 'age', label: '年龄' }
]

const data = [
  { name: '张三', age: 18 },
  { name: '李四', age: 20 }
]
</script>

<template>
  <WxButton variant="primary">按钮</WxButton>
  <WxBaseTable :column="columns" :tableData="data" />
</template>
```

### 方式3：手动注册单个组件

适合需要精确控制组件注册的场景。

```typescript
import { createApp } from 'vue'
import WangXingBusiness from '@wangxing777/business'

const app = createApp(App)

// 只注册需要的组件
app.component('WxButton', WangXingBusiness.WxButton)
app.component('WxBaseTable', WangXingBusiness.WxBaseTable)

app.mount('#app')
```

## TypeScript 支持

组件库提供完整的 TypeScript 类型定义，开箱即用。

```typescript
import type { BaseTableColumn, BaseTableProps } from '@wangxing777/business'

const columns: BaseTableColumn[] = [
  { prop: 'name', label: '姓名' },
  { prop: 'age', label: '年龄' }
]
```

## 下一步

- 查看[组件列表](/components/button)了解所有可用组件
- 访问 [GitHub](https://github.com/wgxg777/-wangxing) 查看源码
