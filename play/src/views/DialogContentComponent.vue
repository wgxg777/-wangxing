<template>
  <div class="dialog-demo">
    <h4>弹窗内容组件示例</h4>
    <div class="form-group">
      <label>用户名：</label>
      <el-input v-model="formData.username" placeholder="请输入用户名" />
    </div>
    <div class="form-group">
      <label>邮箱：</label>
      <el-input v-model="formData.email" placeholder="请输入邮箱" />
    </div>
    
    <div class="form-group" style="margin-top: 20px">
      <el-button @click="close">关闭</el-button>
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineProps, defineEmits } from 'vue'
import { ElInput, ElButton } from 'element-plus'

const props = defineProps<{
  close?: () => void
  confirm?: (data: any) => void
}>()

const emit = defineEmits(['confirm', 'cancel'])

const formData = reactive({
  username: '',
  email: ''
})

const close = () => {
  props.close?.()
}

const submit = () => {
  props.confirm?.(formData)
}

defineExpose({
  getData() {
    return formData
  }
})
</script>

<style scoped>
.dialog-demo {
  padding: 16px;
}

.form-group {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.form-group label {
  min-width: 80px;
  font-weight: 500;
}
</style>

