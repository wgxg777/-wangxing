import { ref, computed } from 'vue'
import type { Ref } from 'vue'
// 使用方需提供 element-plus；此处仅做类型引用
import type { TableInstance } from 'element-plus'

export type BaseTableColumn = {
  prop?: string
  label?: string
  hidden?: boolean
  [key: string]: unknown
}

export type BaseTableProps = {
  column?: BaseTableColumn[]
}

export function useBaseTable(props: BaseTableProps) {
  const table: Ref<TableInstance | null> = ref(null)

  const getSelectionRows = () => {
    return table.value?.getSelectionRows?.()
  }

  const clearSelection = () => {
    return table.value?.clearSelection?.()
  }

  const setCurrentRow = (row: unknown) => {
    table.value?.setCurrentRow?.(row)
  }

  const tableColumn = computed<BaseTableColumn[]>(() => {
    return (props.column || []).filter(v => !v.hidden)
  })

  return {
    table,
    tableColumn,
    getSelectionRows,
    clearSelection,
    setCurrentRow
  }
}
