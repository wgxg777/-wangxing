<template>
    <div style="margin-bottom: 20px">
        <slot name="toolButton"></slot>
    </div>
    <el-table class="base-table" ref="table" :show-overflow-tooltip="showOverflowTooltip" v-bind="$attrs"
        v-loading="loading" :data="tableData" @selection-change="selectionChange">
        <el-table-column v-for="item in tableColumn" v-bind="item" :key="item.prop" :align="item.align || 'center'">
            <template v-slot:header>
                <template v-if="item.prop && $slots[`header-${item.prop}`]">
                    <slot :name="`header-${item.prop}`"></slot>
                </template>
                <template v-else>
                    {{ item.label }}
                </template>
            </template>
            <template v-if="item.prop && $slots[item.prop]" #default="scope">
                <slot :name="item.prop" v-bind="scope"></slot>
            </template>
        </el-table-column>
    </el-table>
</template>
<script setup lang="ts">
import { defineProps, defineExpose } from 'vue'
import { useBaseTable, type BaseTableColumn } from './useBaseTable'

const props = defineProps<{
  showOverflowTooltip?: boolean
  column?: BaseTableColumn[]
  tableData?: unknown[]
  loading?: boolean
  selectionChange?: (selection: unknown[]) => void
}>()

const {
  table,
  tableColumn,
  getSelectionRows,
  clearSelection,
  setCurrentRow
} = useBaseTable(props)

defineExpose({
  table,
  getSelectionRows,
  clearSelection,
  setCurrentRow
})
</script>
