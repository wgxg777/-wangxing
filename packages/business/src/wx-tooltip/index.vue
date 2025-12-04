<template>
  <el-tooltip
    v-if="isOverflow"
    v-bind="$attrs"
  >
    <template #content>
      <slot name="content">{{ content || contentRef?.textContent }}</slot>
    </template>
    <div ref="contentRef" class="wx-tooltip-content">
      <slot />
    </div>
  </el-tooltip>
  <div v-else ref="contentRef" class="wx-tooltip-content">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, nextTick } from 'vue'
import { ElTooltip } from 'element-plus'

const props = defineProps<{
  content?: string
}>()

const contentRef = ref<HTMLElement>()
const isOverflow = ref(false)

const checkOverflow = () => {

  nextTick(() => {
    if (!contentRef.value) return
    
    const element = contentRef.value
    // 检查是否有水平或垂直溢出
    isOverflow.value = 
      element.scrollWidth > element.clientWidth || 
      element.scrollHeight > element.clientHeight
  })
}

onMounted(() => {
  checkOverflow()
})

onUpdated(() => {
  checkOverflow()
})
</script>

<style scoped>
.wx-tooltip-content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  max-width: 100%;
}
</style>
