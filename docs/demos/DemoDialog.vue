<script setup>
import { WxDialog } from '@wangxing777/business'
import { ElMessage } from 'element-plus'
import { defineComponent, h } from 'vue'
import { ElButton } from 'element-plus'

// 简单的对话框内容组件 - 用 render function 实现
const SimpleDialog = defineComponent({
  props: {
    close: Function,
    confirm: Function,
    cancel: Function
  },
  setup(props) {
    return () => h('div', { style: { padding: '20px' } }, [
      h('p', null, '在组件内部可以通过 props 方法关闭弹窗'),
      h('div', { style: { marginTop: '20px', display: 'flex', gap: '10px' } }, [
        h(ElButton, { onClick: () => props.close?.() }, { default: () => '直接关闭' }),
        h(ElButton, { type: 'primary', onClick: () => props.confirm?.({ success: true }) }, { default: () => '确认并关闭' }),
        h(ElButton, { onClick: () => props.cancel?.() }, { default: () => '取消' })
      ])
    ])
  }
})

// 无按钮弹窗示例
const NoFooterDialog = defineComponent({
  setup() {
    return () => h('div', { style: { padding: '20px', textAlign: 'center' } }, [
      h('h3', null, '提示信息'),
      h('p', null, '这是一个无底部按钮的弹窗'),
      h('p', null, '点击标题栏的关闭按钮来关闭弹窗')
    ])
  }
})

const openDialog = () => {
  WxDialog({
    title: '组件内部控制',
    width: '400px',
    component: SimpleDialog,
    onConfirm: (data) => {
      ElMessage.success('确认: ' + JSON.stringify(data))
    },
    onCancel: () => {
      ElMessage.warning('已取消')
    }
  })
}

const openNoFooterDialog = () => {
  WxDialog({
    title: '提示信息',
    width: '400px',
    showFooter: false,
    component: NoFooterDialog
  })
}



</script>

<template>
  <div class="demo-container">
    <el-button type="primary" @click="openDialog">打开交互式弹窗</el-button>
    <el-button type="info" @click="openNoFooterDialog">打开无按钮弹窗</el-button>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
  background: white;
  border-radius: 4px;
}
</style>
