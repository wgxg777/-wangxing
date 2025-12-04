import type { CloseDialog, WxDialogOptions, WxDialogType } from './type'
import { createVNode, h, render } from 'vue'
import WxDialogVue from './index.vue'

function WxDialog(options: WxDialogOptions): CloseDialog {
  // 创建挂载容器
  const container = document.createElement('div')
  document.body.appendChild(container)

  // 创建虚拟节点
  const vNode = createVNode(WxDialogVue, {
    component: options.component,
    componentProps: options.componentProps || {},
    title: options.title || '提示',
    width: options.width || '500px',
    showFooter: options.showFooter !== false,
    confirmText: options.confirmText || '确认',
    cancelText: options.cancelText || '取消',
    onConfirm: (data?: any) => {
      options.onConfirm?.(data)
      cleanup()
    },
    onCancel: () => {
      options.onCancel?.()
      cleanup()
    },
    onClose: () => {
      options.onClose?.()
      cleanup()
    }
  })

  // 设置应用上下文
  vNode.appContext = (WxDialog as any)._context

  // 挂载
  render(vNode, container)

  // 清理函数
  const cleanup = () => {
    render(null, container)
    document.body.removeChild(container)
  }

  // 返回关闭函数
  return () => {
    vNode.component?.exposeProxy?.close?.()
  }
}

// 存储应用上下文
WxDialog._context = null

export default WxDialog as WxDialogType
