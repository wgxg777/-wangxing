<template>
  <div class="demo-page">
    <h2>Button 按钮组件</h2>
    <p>基础的按钮组件，支持不同的样式变体。</p>

    <el-divider content-position="left">基础用法</el-divider>
    <div class="demo-block">
      <WxButton variant="primary">主要按钮</WxButton>
      <WxButton variant="secondary">次要按钮</WxButton>
    </div>

    <el-divider content-position="left">代码示例</el-divider>
    <el-code-block>
      <pre><code>&lt;WxButton variant="primary"&gt;主要按钮&lt;/WxButton&gt;
&lt;WxButton variant="secondary"&gt;次要按钮&lt;/WxButton&gt;</code></pre>
    </el-code-block>

    <el-divider content-position="left">API</el-divider>
    <h4>Props</h4>
    <el-table :data="apiData" border>
      <el-table-column prop="name" label="属性名" width="120" />
      <el-table-column prop="type" label="类型" width="150" />
      <el-table-column prop="default" label="默认值" width="100" />
      <el-table-column prop="desc" label="说明" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { WxButton } from '@wangxing777/business'

const apiData = [
  {
    name: 'variant',
    type: "'primary' | 'secondary'",
    default: 'primary',
    desc: '按钮样式变体'
  }
]
</script>

<style scoped>
.demo-page {
  padding: 24px;
}

.demo-block {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

pre {
  background: #f5f7fa;
  padding: 12px;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
