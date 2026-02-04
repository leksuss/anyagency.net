<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="[
      'inline-block text-center font-outfit font-bold transition-all duration-300 rounded-lg',
      'hover:scale-105 active:scale-95',
      sizeClasses,
      variant === 'primary' && 'bg-gradient-to-r from-neon-purple to-neon-purple-dark text-white neon-glow-hover',
      variant === 'secondary' && 'border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg',
      variant === 'ghost' && 'text-white hover:text-neon-purple',
    ]"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  return sizes[props.size]
})

const handleClick = (event: MouseEvent) => {
  if (!props.href) {
    emit('click', event)
  }
}
</script>
