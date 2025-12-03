<template>
  <button :class="['wx-btn', variantClass]">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ variant?: 'primary' | 'secondary' }>()

const variantClass = computed(() =>
  props.variant === 'secondary' ? 'wx-btn--secondary' : 'wx-btn--primary'
)
</script>

<style scoped>
.wx-btn {
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #64748b;
  cursor: pointer;
}
.wx-btn--primary {
  background: #3b82f6;
  color: #ffffff;
  border-color: #2563eb;
}
.wx-btn--secondary {
  background: #e2e8f0;
  color: #0f172a;
  border-color: #64748b;
}
</style>
