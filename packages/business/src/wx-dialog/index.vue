<template>
  <el-dialog
    v-model="visible"
    :title="title"
    :width="width"
    :close-on-click-modal="false"
    @close="handleClose"
  >
    <!-- 动态组件内容 -->
    <component
      v-if="component"
      :is="component"
      v-bind="componentProps"
      :close="handleClose"
      :confirm="handleConfirm"
      :cancel="handleCancel"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    />
    
    <!-- 底部按钮 -->
    <template #footer v-if="showFooter">
      <el-button @click="handleCancel">{{ cancelText }}</el-button>
      <el-button type="primary" @click="handleConfirm">{{ confirmText }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, defineProps, defineExpose } from 'vue'
import { ElDialog, ElButton } from 'element-plus'
import type { Component } from 'vue'

interface Props {
  component?: Component
  componentProps?: Record<string, any>
  title?: string
  width?: string | number
  showFooter?: boolean
  confirmText?: string
  cancelText?: string
  onConfirm?: (data?: any) => void
  onCancel?: () => void
  onClose?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  width: '500px',
  showFooter: true,
  confirmText: '确认',
  cancelText: '取消'
})

const visible = ref(true)

const handleConfirm = (data?: any) => {
  props.onConfirm?.(data)
  visible.value = false
}

const handleCancel = () => {
  props.onCancel?.()
  visible.value = false
}

const handleClose = () => {
  props.onClose?.()
}

// 暴露 close 方法供外部调用
defineExpose({
  close: () => {
    visible.value = false
  }
})
</script>

<style scoped>
/* 弹窗样式可自定义 */
</style>

