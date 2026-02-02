<template>
  <div class="flex flex-wrap gap-3 justify-center">
    <button
      v-for="platform in platforms"
      :key="platform.value"
      :class="[
        'px-6 py-3 rounded-full font-outfit font-semibold transition-all duration-300',
        'hover:scale-105 active:scale-95',
        selected === platform.value
          ? 'bg-gradient-to-r from-neon-purple to-neon-purple-dark text-white neon-glow'
          : 'bg-white/5 text-dark-gray hover:text-white hover:bg-white/10',
      ]"
      @click="$emit('update:selected', platform.value)"
    >
      <span class="mr-2">{{ platform.emoji }}</span>
      {{ platform.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Platform } from '~/types'

defineProps<{
  selected: Platform
}>()

defineEmits<{
  'update:selected': [value: Platform]
}>()

const platforms = [
  { value: 'all' as Platform, label: 'All Platforms', emoji: '🌟' },
  { value: 'tiktok' as Platform, label: 'TikTok', emoji: '🎵' },
  { value: 'youtube' as Platform, label: 'YouTube', emoji: '▶️' },
  { value: 'telegram' as Platform, label: 'Telegram', emoji: '✈️' },
  { value: 'vk' as Platform, label: 'VK', emoji: '🌐' },
]
</script>
