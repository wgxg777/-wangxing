<template>
  <div class="demo-page">
    <h2>Tooltip 自动检测溢出组件</h2>
    <p>基于 Element Plus Tooltip 封装，只在内容溢出时显示提示。</p>

    <el-divider content-position="left">基础用法</el-divider>
    <div class="demo-block">
      <div style="width: 200px; margin-bottom: 10px">
        <WxTooltip content="这是一段很长的文本，会自动显示 tooltip">
          <span>这是一段很长的文本，会自动显示 tooltip，超出部分会被省略</span>
        </WxTooltip>
      </div>
      <div style="width: 200px; margin-bottom: 10px">
        <WxTooltip content="短文本">
          <span>短文本</span>
        </WxTooltip>
      </div>
    </div>

    <el-divider content-position="left">自动使用插槽内容</el-divider>
    <div class="demo-block">
      <div style="width: 300px">
        <WxTooltip placement="top">
          <span>这段文本会自动作为 tooltip 内容显示，无需手动指定 content</span>
        </WxTooltip>
      </div>
    </div>

    <el-divider content-position="left">代码示例</el-divider>
    <pre><code>&lt;!-- 指定 content --&gt;
&lt;WxTooltip content="提示文本"&gt;
  &lt;span&gt;显示的内容&lt;/span&gt;
&lt;/WxTooltip&gt;

&lt;!-- 自动使用插槽内容 --&gt;
&lt;WxTooltip&gt;
  &lt;span&gt;这段文本会自动作为提示&lt;/span&gt;
&lt;/WxTooltip&gt;</code></pre>

    <el-divider content-position="left">API</el-divider>
    <h4>Props</h4>
    <el-table :data="apiData" border>
      <el-table-column prop="name" label="属性名" width="120" />
      <el-table-column prop="type" label="类型" width="150" />
      <el-table-column prop="desc" label="说明" />
    </el-table>
    <p style="margin-top: 16px; color: #909399;">
      * 继承 Element Plus Tooltip 的所有属性（如 placement、effect 等）
    </p>
  </div>
</template>

<script setup lang="ts">
import { WxTooltip } from '@wangxing777/business'

const apiData = [
  {
    name: 'content',
    type: 'string',
    desc: 'Tooltip 提示内容，不传则自动使用插槽文本'
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
