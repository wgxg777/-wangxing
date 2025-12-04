<script setup>
import { WxTooltip } from '@wangxing777/business'
</script>

<template>
  <div class="demo-container">
    <h4>长文本（会显示 Tooltip）</h4>
    <div style="width: 200px; margin-bottom: 16px">
      <WxTooltip content="这是一段很长的文本，会自动显示 tooltip">
        <span>这是一段很长的文本，会自动显示 tooltip，超出部分会被省略</span>
      </WxTooltip>
    </div>

    <h4>短文本（不显示 Tooltip）</h4>
    <div style="width: 200px; margin-bottom: 16px">
      <WxTooltip content="短文本">
        <span>短文本</span>
      </WxTooltip>
    </div>

    <h4>自动使用插槽内容作为提示</h4>
    <div style="width: 300px">
      <WxTooltip placement="top">
        <span>这段文本会自动作为 tooltip 内容显示，无需手动指定 content 属性</span>
      </WxTooltip>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
  background: white;
  border-radius: 4px;
}

h4 {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #606266;
}
</style>
