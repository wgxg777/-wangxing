# Button 按钮

基础按钮组件，支持多种样式变体。

## 基础用法

使用 `variant` 属性设置按钮样式。

<ClientOnly>
  <DemoButton />
</ClientOnly>

::: details 查看代码
```vue
<template>
  <WxButton variant="primary">主要按钮</WxButton>
  <WxButton variant="secondary">次要按钮</WxButton>
</template>

<script setup>
import { WxButton } from '@wangxing777/business'
</script>
```
:::

## API

### Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| variant | 按钮样式类型 | `string` | `primary` / `secondary` | `primary` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 按钮内容 |

## 样式变量

组件使用以下 CSS 变量，可通过覆盖实现自定义样式：

- 主要按钮背景色：`#3b82f6`
- 次要按钮背景色：`#e2e8f0`
- 边框圆角：`6px`
- 内边距：`8px 12px`

<script setup>
import DemoButton from '../demos/DemoButton.vue'
</script>
