<template>
  <button
    :class="[
      'px-8 py-4 rounded-lg font-outfit font-bold text-lg transition-all duration-300',
      'hover:scale-105 active:scale-95',
      variant === 'primary' && 'bg-gradient-to-r from-neon-purple to-neon-purple-dark text-white neon-glow-hover',
      variant === 'secondary' && 'border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg',
      variant === 'ghost' && 'text-white hover:text-neon-purple',
    ]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
}>()

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>
