<template>
  <div class="text-center p-8 rounded-2xl bg-dark-charcoal border border-white/10 card-lift">
    <!-- Icon -->
    <div class="text-5xl mb-4">{{ stat.icon }}</div>

    <!-- Value with Animation -->
    <div class="text-5xl md:text-6xl font-bebas text-gradient mb-2">
      {{ formattedValue }}{{ stat.suffix || '' }}
    </div>

    <!-- Label -->
    <div class="text-dark-gray font-dm-sans">{{ stat.label }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Stat } from '~/types'

const props = defineProps<{
  stat: Stat
  animate: boolean
}>()

const displayValue = ref(0)

// Extract numeric value from stat.value
const numericValue = computed(() => {
  const match = props.stat.value.match(/[\d.]+/)
  return match ? parseFloat(match[0]) : 0
})

// Format the display value with the original suffix
const formattedValue = computed(() => {
  if (props.stat.value.includes('M')) {
    return displayValue.value.toFixed(0) + 'M'
  } else if (props.stat.value.includes('K')) {
    return displayValue.value.toFixed(0) + 'K'
  } else if (props.stat.value.includes('+')) {
    return displayValue.value.toFixed(0) + '+'
  }
  return displayValue.value.toFixed(0)
})

watch(
  () => props.animate,
  (shouldAnimate) => {
    if (shouldAnimate && process.client) {
      const target = numericValue.value
      const duration = 2000
      const steps = 60
      const stepValue = target / steps
      const stepDuration = duration / steps

      let current = 0
      const interval = setInterval(() => {
        current += stepValue
        if (current >= target) {
          displayValue.value = target
          clearInterval(interval)
        } else {
          displayValue.value = current
        }
      }, stepDuration)
    }
  }
)
</script>
