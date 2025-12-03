<template>
  <div>
    <WxBaseTable :column="columns" :table-data="tableData" :loading="loading">
      <!-- <template #name="{ row }">
        <span style="color: #409eff">{{ row.name }}</span>
      </template> -->
    </WxBaseTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { WxBaseTable } from '@wangxing777/business'

const loading = ref(false)
const columns = [
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'age', label: '年龄', width: 80 },
  { prop: 'address', label: '地址' }
]
const tableData = [
  { name: '张三', age: 18, address: '北京市朝阳区' },
  { name: '李四', age: 22, address: '上海市浦东新区' },
  { name: '王五', age: 25, address: '深圳市南山区' }
]
</script>
