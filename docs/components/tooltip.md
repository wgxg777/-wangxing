# Tooltip 提示

自动检测内容溢出的 Tooltip 组件，只在内容超出容器时显示提示。

## 基础用法

基于 Element Plus Tooltip 封装，自动检测是否溢出，只在溢出时显示提示。

<ClientOnly>
  <DemoTooltip />
</ClientOnly>

## 自动使用插槽内容

如果不指定 `content` 属性，组件会自动使用插槽中的文本内容作为提示。

```vue
<template>
  <!-- 指定 content -->
  <WxTooltip content="自定义提示">
    <span>显示的内容</span>
  </WxTooltip>

  <!-- 自动使用插槽内容 -->
  <WxTooltip>
    <span>这段文本会自动作为提示内容</span>
  </WxTooltip>
</template>
```

## API

### Props

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| content | string | - | Tooltip 提示内容，不传则自动使用插槽文本 |

### 继承属性

继承 Element Plus Tooltip 的所有属性：

- `placement` - 提示位置
- `effect` - 主题样式
- `disabled` - 是否禁用
- `offset` - 偏移量
- 等等...

详见 [Element Plus Tooltip 文档](https://element-plus.org/zh-CN/component/tooltip.html)

## 特性

- ✅ 自动检测内容是否溢出
- ✅ 只在溢出时显示 tooltip
- ✅ 支持自定义提示内容
- ✅ 自动使用插槽文本作为提示
- ✅ 继承 Element Plus Tooltip 所有功能
<script setup>
import DemoTooltip from '../demos/DemoTooltip.vue'
</script>