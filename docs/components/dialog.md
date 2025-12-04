# Dialog 弹窗

基于 Element Plus Dialog 封装，支持通过 JavaScript 直接打开弹窗，弹窗内容可以是任意 Vue 组件。

<script setup>
import DemoDialog from '../demos/DemoDialog.vue'
</script>

## 基础用法

通过 `WxDialog()` 函数直接打开弹窗，无需在模板中声明。

<ClientOnly>
  <DemoDialog />
</ClientOnly>

## 直接调用示例

```typescript
import { WxDialog } from '@wangxing777/business'
import MyComponent from './MyComponent.vue'

// 打开弹窗
const close = WxDialog({
  title: '用户信息',
  width: '500px',
  component: MyComponent,
  componentProps: {
    // 传递给组件的 props
    userId: 123
  },
  onConfirm: (data) => {
    console.log('用户确认，数据:', data)
  },
  onCancel: () => {
    console.log('用户取消')
  },
  onClose: () => {
    console.log('弹窗已关闭')
  }
})

// 外部关闭弹窗
close()
```

## 自定义按钮

自定义确认和取消按钮的文字。

```typescript
WxDialog({
  title: '确认删除',
  confirmText: '删除',
  cancelText: '保留',
  onConfirm: () => {
    console.log('已删除')
  }
})
```

## 无按钮弹窗

通过 `showFooter: false` 隐藏底部按钮。

```typescript
WxDialog({
  title: '提示',
  showFooter: false,
  component: MyComponent
})
```

## 弹窗内容组件

弹窗内容可以是任意 Vue 组件，组件可以通过接收的 `close`、`confirm` 方法与弹窗交互。

```vue
<template>
  <div>
    <el-input v-model="name" placeholder="请输入姓名" />
    <el-input v-model="email" placeholder="请输入邮箱" />
    
    <!-- 在组件内部关闭弹窗 -->
    <el-button @click="close">关闭</el-button>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps<{
  close?: () => void      // 关闭弹窗方法
  confirm?: (data: any) => void  // 确认弹窗方法
}>()

const name = ref('')
const email = ref('')

// 直接关闭弹窗
const close = () => {
  props.close?.()
}

// 确认并关闭弹窗
const submit = () => {
  props.confirm?.({
    name: name.value,
    email: email.value
  })
}
</script>
```

## 在组件内部关闭弹窗

弹窗会自动将 `close`、`confirm`、`cancel` 三个方法作为 props 传递给内容组件：

- `close()` - 直接关闭弹窗，不触发任何回调
- `confirm(data)` - 确认并关闭，触发 `onConfirm` 回调
- `cancel()` - 取消并关闭，触发 `onCancel` 回调

## API

### WxDialog(options)

打开一个弹窗，返回关闭函数。

#### options 配置

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| component | Component | - | 弹窗内容组件 |
| componentProps | Record<string, any> | {} | 传递给组件的 props |
| title | string | '提示' | 弹窗标题 |
| width | string \| number | '500px' | 弹窗宽度 |
| showFooter | boolean | true | 是否显示底部按钮 |
| confirmText | string | '确认' | 确认按钮文字 |
| cancelText | string | '取消' | 取消按钮文字 |
| onConfirm | (data?: any) => void | - | 确认回调 |
| onCancel | () => void | - | 取消回调 |
| onClose | () => void | - | 关闭回调 |

#### 返回值

`CloseDialog` - 关闭弹窗的函数

```typescript
const close = WxDialog(options)
close() // 关闭弹窗
```

## 特性

- ✅ 通过 JavaScript API 直接打开弹窗
- ✅ 支持任意 Vue 组件作为弹窗内容
- ✅ 灵活的回调函数配置
- ✅ 可自定义按钮文字
- ✅ 支持隐藏底部按钮
- ✅ 外部可调用关闭函数
- ✅ 完整的 TypeScript 支持
