<template>
  <div class="demo-page">
    <h2>Dialog 弹窗组件</h2>
    <p>基于 Element Plus Dialog 封装，支持通过 JavaScript 直接打开弹窗，弹窗内容可以是任意 Vue 组件。</p>

    <el-divider content-position="left">基础用法</el-divider>
    <div class="demo-block">
      <el-button type="primary" @click="openBasicDialog">打开基础弹窗</el-button>
      <el-button type="success" @click="openInComponentCloseDialog">组件内部关闭</el-button>
      <el-button type="warning" @click="openComponentDialog">打开组件弹窗</el-button>
      <el-button type="info" @click="openNoFooterDialog">打开无按钮弹窗</el-button>
    </div>

    <el-divider content-position="left">代码示例</el-divider>
    <pre><code>import { WxDialog } from '@wangxing777/business'
import MyComponent from './MyComponent.vue'

// 打开基础弹窗
const close = WxDialog({
  title: '提示',
  component: MyComponent,
  componentProps: {
    // 传递给组件的 props
  },
  onConfirm: (data) => {
    console.log('确认', data)
  },
  onCancel: () => {
    console.log('取消')
  }
})

// 关闭弹窗
close()</code></pre>

    <el-divider content-position="left">API</el-divider>
    <h4>WxDialog(options)</h4>
    <p>打开一个弹窗，返回关闭函数。</p>
    
    <h5>options 配置</h5>
    <el-table :data="apiData" border>
      <el-table-column prop="name" label="属性名" width="140" />
      <el-table-column prop="type" label="类型" width="180" />
      <el-table-column prop="default" label="默认值" width="120" />
      <el-table-column prop="desc" label="说明" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { WxDialog } from '@wangxing777/business'
import DialogContentComponent from './DialogContentComponent.vue'
import { ElMessage } from 'element-plus'
import { defineComponent, h } from 'vue'
import { ElButton } from 'element-plus'

// 组件内部关闭弹窗的示例
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

const openBasicDialog = () => {
  WxDialog({
    title: '基础弹窗',
    width: '600px',
    onConfirm: () => {
      ElMessage.success('点击了确认按钮')
    },
    onCancel: () => {
      ElMessage.info('点击了取消按钮')
    }
  })
}

const openInComponentCloseDialog = () => {
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

const openComponentDialog = () => {
  const dialogRef = WxDialog({
    title: '输入用户信息',
    width: '500px',
    component: DialogContentComponent,
    onConfirm: () => {
      ElMessage.success('数据已提交')
    },
    onCancel: () => {
      ElMessage.warning('已取消')
    }
  })
}

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

const openNoFooterDialog = () => {
  WxDialog({
    title: '提示信息',
    width: '400px',
    showFooter: false,
    component: NoFooterDialog
  })
}

const apiData = [
  {
    name: 'component',
    type: 'Component',
    default: '-',
    desc: '弹窗内容组件'
  },
  {
    name: 'componentProps',
    type: 'Record<string, any>',
    default: '{}',
    desc: '传递给组件的 props'
  },
  {
    name: 'title',
    type: 'string',
    default: '提示',
    desc: '弹窗标题'
  },
  {
    name: 'width',
    type: 'string | number',
    default: '500px',
    desc: '弹窗宽度'
  },
  {
    name: 'showFooter',
    type: 'boolean',
    default: 'true',
    desc: '是否显示底部按钮'
  },
  {
    name: 'confirmText',
    type: 'string',
    default: '确认',
    desc: '确认按钮文字'
  },
  {
    name: 'cancelText',
    type: 'string',
    default: '取消',
    desc: '取消按钮文字'
  },
  {
    name: 'onConfirm',
    type: '(data?: any) => void',
    default: '-',
    desc: '确认回调'
  },
  {
    name: 'onCancel',
    type: '() => void',
    default: '-',
    desc: '取消回调'
  },
  {
    name: 'onClose',
    type: '() => void',
    default: '-',
    desc: '关闭回调'
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
  flex-wrap: wrap;
}

pre {
  background: #f5f7fa;
  padding: 12px;
  border-radius: 4px;
  overflow-x: auto;
}

h5 {
  margin-top: 16px;
  margin-bottom: 12px;
}
</style>
