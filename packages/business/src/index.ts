// 组件导出
export { default as WxButton } from './wx-button/index.vue'
export { default as WxBaseTable } from './wx-base-table/index.vue'
export { default as WxTooltip } from './wx-tooltip/index.vue'

// 工具/类型导出
export { SelectedItemType, getIcon } from './wx-button/util'
export type { BaseTableColumn, BaseTableProps } from './wx-base-table/useBaseTable'
export { default as WxDialog } from './wx-dialog/useDialog'
export type { WxDialogOptions } from './wx-dialog/type'

// 所有组件
import WxButton from './wx-button/index.vue'
import WxBaseTable from './wx-base-table/index.vue'
import WxTooltip from './wx-tooltip/index.vue'
import type { App } from 'vue'

const components = {
  WxButton,
  WxBaseTable,
  WxTooltip
}

// Vue 插件 install 方法
const install = (app: App) => {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component)
  })
}

// 默认导出
export default {
  install,
  ...components
}
