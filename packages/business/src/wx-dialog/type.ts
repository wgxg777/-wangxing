import type { VNode } from 'vue'
import type { Component } from 'vue'

export interface WxDialogOptions {
  // 弹窗内容
  component?: Component
  componentProps?: Record<string, any>
  title?: string
  width?: string | number
  
  // 按钮配置
  showFooter?: boolean
  confirmText?: string
  cancelText?: string
  
  // 回调函数
  onConfirm?: (data?: any) => void
  onCancel?: () => void
  onClose?: () => void
}

export type CloseDialog = () => void

export interface WxDialogType {
  (options: WxDialogOptions): CloseDialog
  _context: any
}
