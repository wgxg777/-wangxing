# @wangxing777/business

Vue 3 业务组件库，基于 Element Plus 封装。

## 安装

```bash
npm install @wangxing777/business element-plus
# 或
pnpm add @wangxing777/business element-plus
```

## 使用

### 方式1：全局安装（推荐）

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
  <WxButton variant="primary">按钮</WxButton>
  <WxBaseTable :column="columns" :tableData="data" />
</template>
```

### 方式2：按需导入

```typescript
import { WxButton, WxBaseTable } from '@wangxing777/business'

// 局部注册
export default {
  components: { WxButton, WxBaseTable }
}
```

### 方式3：手动注册单个组件

```typescript
import WangXingBusiness from '@wangxing777/business'

app.component('WxButton', WangXingBusiness.WxButton)
app.component('WxBaseTable', WangXingBusiness.WxBaseTable)
```

## 组件列表

- **WxButton** - 按钮组件
- **WxBaseTable** - 基础表格组件（基于 Element Plus Table 封装）

## Peer Dependencies

- Vue >= 3.4
- Element Plus >= 2.7.0

## 文档

查看完整文档：[https://wgxg777.github.io/-wangxing/](https://wgxg777.github.io/-wangxing/)

## License

MIT
