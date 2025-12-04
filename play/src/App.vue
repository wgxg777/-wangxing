<template>
  <div class="app-container">
    <el-container>
      <el-aside width="200px" class="sidebar">
        <div class="logo">
          <h2>王兴组件库</h2>
        </div>
        <el-menu
          :default-active="$route.path"
          router
          class="sidebar-menu"
        >
          <el-menu-item index="/">
            <el-icon><HomeFilled /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/button">
            <el-icon><Mouse /></el-icon>
            <span>Button 按钮</span>
          </el-menu-item>
          <el-menu-item index="/table">
            <el-icon><Grid /></el-icon>
            <span>BaseTable 表格</span>
          </el-menu-item>
          <el-menu-item index="/tooltip">
            <el-icon><ChatLineSquare /></el-icon>
            <span>Tooltip 提示</span>
          </el-menu-item>
          <el-menu-item index="/dialog">
            <el-icon><DocumentCopy /></el-icon>
            <span>Dialog 弹窗</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      
      <el-main class="main-content">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { HomeFilled, Mouse, Grid, ChatLineSquare, DocumentCopy } from '@element-plus/icons-vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
}

.app-container {
  height: 100vh;
}

.el-container {
  height: 100%;
}



.logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo h2 {
  font-size: 18px;
  font-weight: 600;
}



.main-content {
  background: #f5f7fa;
  overflow-y: auto;
}
</style>
