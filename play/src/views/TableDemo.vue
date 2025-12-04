<template>
  <div class="demo-page">
    <h2>BaseTable 基础表格组件</h2>
    <p>基于 Element Plus Table 封装的表格组件。</p>

    <el-divider content-position="left">基础用法</el-divider>
    <div class="demo-block">
      <WxBaseTable :column="columns" :tableData="data" />
    </div>

    <el-divider content-position="left">代码示例</el-divider>
    <pre><code>const columns = [
  { type: 'selection', width: 55, align: 'left' },
  { prop: 'name', label: '姓名' },
  { prop: 'age', label: '年龄' }
]

const data = [
  { name: '张三', age: 18 },
  { name: '李四', age: 20 }
]

&lt;WxBaseTable :column="columns" :tableData="data" /&gt;</code></pre>

    <el-divider content-position="left">API</el-divider>
    <h4>Props</h4>
    <el-table :data="apiData" border>
      <el-table-column prop="name" label="属性名" width="180" />
      <el-table-column prop="type" label="类型" width="200" />
      <el-table-column prop="desc" label="说明" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { WxBaseTable } from '@wangxing777/business'

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
  { name: '李四', age: 20 },
  { name: '王五', age: 22 }
]

const apiData = [
  {
    name: 'column',
    type: 'BaseTableColumn[]',
    desc: '表格列配置'
  },
  {
    name: 'tableData',
    type: 'unknown[]',
    desc: '表格数据'
  },
  {
    name: 'showOverflowTooltip',
    type: 'boolean',
    desc: '是否显示溢出提示'
  },
  {
    name: 'loading',
    type: 'boolean',
    desc: '加载状态'
  }
]
</script>

<style scoped>
.demo-page {
  padding: 24px;
}

.demo-block {
  margin-bottom: 24px;
}

pre {
  background: #f5f7fa;
  padding: 12px;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
