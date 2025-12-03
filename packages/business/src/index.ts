// 组件导出（命名导出；默认导出不再指向单一组件）
export { default as WxButton } from './wx-button/index.vue'
export { default as WxBaseTable } from './wx-base-table/index.vue'

// 工具/类型导出（需手动）
export { SelectedItemType, getIcon } from './wx-button/util'
export type { BaseTableColumn, BaseTableProps } from './wx-base-table/useBaseTable'
