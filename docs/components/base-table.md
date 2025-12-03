# BaseTable 基础表格

基于 Element Plus Table 封装的业务表格组件，简化表格配置，支持插槽自定义。

## 基础用法

通过 `column` 配置列信息，`table-data` 绑定数据源。

<ClientOnly>
  <div class="vp-raw">
    <DemoBaseTable />
  </div>
</ClientOnly>

::: details 查看代码
```vue
<template>
  <WxBaseTable :column="columns" :table-data="tableData" :loading="loading" />
</template>

<script setup>
import { ref } from 'vue'
import { WxBaseTable } from '@wangxing777/business'

const loading = ref(false)
const columns = [
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'age', label: '年龄', width: 80 },
  { prop: 'address', label: '地址' }
]
const tableData = [
  { name: '张三', age: 18, address: '北京市朝阳区' },
  { name: '李四', age: 22, address: '上海市浦东新区' }
]
</script>
```
:::

## 自定义列

通过具名插槽自定义列内容，插槽名为列的 `prop` 值。

```vue
<WxBaseTable :column="columns" :table-data="tableData">
  <template #name="{ row }">
    <span style="color: #409eff">{{ row.name }}</span>
  </template>
</WxBaseTable>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| column | 列配置 | `BaseTableColumn[]` | `[]` |
| tableData | 表格数据 | `Array` | `[]` |
| loading | 加载状态 | `boolean` | `false` |
| showOverflowTooltip | 内容过长时显示 tooltip | `boolean` | `false` |
| selectionChange | 选择项改变时的回调 | `(selection: unknown[]) => void` | - |

### BaseTableColumn

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| prop | 列字段名 | `string` | - |
| label | 列标题 | `string` | - |
| width | 列宽度 | `number \| string` | - |
| align | 对齐方式 | `'left' \| 'center' \| 'right'` | `'center'` |
| hidden | 是否隐藏 | `boolean` | `false` |

继承 Element Plus [Table Column](https://element-plus.org/zh-CN/component/table.html#table-column-attributes) 的所有属性。

### Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| toolButton | 表格上方工具栏 | - |
| [prop] | 自定义列内容 | `{ row, column, $index }` |
| header-[prop] | 自定义列表头 | - |

### Exposes

| 方法名 | 说明 | 参数 |
|--------|------|------|
| getSelectionRows | 获取选中行 | - |
| clearSelection | 清空选中项 | - |
| setCurrentRow | 设置当前行 | `(row: unknown)` |
| table | Element Plus Table 实例 | - |

## 类型定义

```typescript
import type { BaseTableColumn, BaseTableProps } from '@wangxing777/business'
```

<script setup>
import DemoBaseTable from '../demos/DemoBaseTable.vue'
</script>
