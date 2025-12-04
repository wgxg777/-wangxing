<template>
  <div style="padding: 20px">
    <p>在组件内部可以通过 props 方法关闭弹窗</p>
    <div style="margin-top: 20px; display: flex; gap: 10px">
      <el-button @click="close">直接关闭</el-button>
      <el-button type="primary" @click="confirm">确认并关闭</el-button>
      <el-button @click="cancel">取消</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  close?: () => void
  confirm?: (data: any) => void
  cancel?: () => void
}

const props = defineProps<Props>()
</script>
