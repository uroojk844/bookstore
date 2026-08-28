<script setup lang="ts">
const { variant = "filled" } = defineProps<{
  variant?: "filled" | "outlined";
}>();
</script>

<template>
  <button
    class="inline-flex items-center gap-1 px-4 min-w-10 hover:brightness-90 active:brightness-100 h-10 uppercase outline-maroon outline-offset-2 cursor-pointer"
    :class="{
      'bg-transparent text-maroon border': variant == 'outlined',
      'bg-maroon text-amber-50': variant == 'filled',
    }"
  >
    <slot></slot>
  </button>
</template>
