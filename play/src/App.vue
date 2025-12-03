<template>
  <div style="padding:24px">
    <h1>Playground</h1>
    <wxButton variant="primary">主要按钮</wxButton>
    <wxButton variant="secondary" style="margin-left:8px">次要按钮</wxButton>

    <WxBaseTable :column="columns" :tableData="data" />
  </div>
</template>

<script setup lang="ts">


import { WxButton,WxBaseTable } from '@wangxing777/business'
const columns = [
    {
        type: 'selection',
        width: 55,
        align: 'left'
    },
    { prop: 'name', label: '姓名' },
    { prop: 'age', label: '年龄' }
]

const data = [
    { name: '张三', age: 18 },
    { name: '李四', age: 20 }
]

</script>
