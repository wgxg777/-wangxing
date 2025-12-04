<template>
  <div class="home">
    <h1>王兴组件库 Playground</h1>
    <p>选择左侧菜单查看组件示例</p>
    
    <div class="component-list">
      <el-card class="component-card" @click="$router.push('/button')">
        <h3>WxButton</h3>
        <p>按钮组件</p>
      </el-card>
      
      <el-card class="component-card" @click="$router.push('/table')">
        <h3>WxBaseTable</h3>
        <p>基础表格组件</p>
      </el-card>
      
      <el-card class="component-card" @click="$router.push('/tooltip')">
        <h3>WxTooltip</h3>
        <p>自动检测溢出的 Tooltip</p>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 24px;
}

.component-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.component-card {
  cursor: pointer;
  transition: all 0.3s;
}

.component-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.component-card h3 {
  margin: 0 0 8px 0;
  color: #409eff;
}

.component-card p {
  margin: 0;
  color: #606266;
}
</style>
