<template>
  <div
    class="relative bg-dark-charcoal rounded-2xl overflow-hidden card-lift border border-white/10"
    :class="{ 'col-span-1 md:col-span-2 lg:col-span-1': blogger.featured }"
  >
    <!-- Platform Badge -->
    <div class="absolute top-4 right-4 z-10">
      <div
        class="px-3 py-1 rounded-full text-xs font-bold uppercase backdrop-blur-sm"
        :class="platformStyles[blogger.platform]"
      >
        {{ platformLabels[blogger.platform] }}
      </div>
    </div>

    <!-- Profile Image -->
    <div
      class="w-full aspect-square bg-gradient-to-br relative overflow-hidden group/image"
      :class="gradientClasses[blogger.platform]"
    >
      <img
        v-if="blogger.image"
        :src="blogger.image"
        :alt="blogger.name"
        class="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-500"
      />
      <div v-else class="absolute inset-0 flex items-center justify-center">
        <Icon
          :name="platformIcons[blogger.platform]"
          size="2xl"
          class="w-20 h-20 text-white/80 group-hover/image:scale-110 transition-transform duration-300"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-outfit font-bold mb-2">{{ blogger.name }}</h3>

      <div class="flex items-center gap-4 mb-3">
        <div class="flex items-center gap-2">
          <span class="text-2xl font-bebas text-neon-purple">{{ blogger.followers }}</span>
          <span class="text-sm text-dark-gray">followers</span>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="text-sm text-dark-gray">
          <span class="text-neon-cyan">{{ blogger.avgViews }}</span> avg views
        </div>
        <div class="text-xs px-3 py-1 rounded-full bg-white/5 text-white">
          {{ blogger.category }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Blogger } from '~/types'

defineProps<{
  blogger: Blogger
}>()

const platformLabels = {
  tiktok: 'TikTok',
  youtube: 'YouTube',
  telegram: 'Telegram',
  vk: 'VK',
}

const platformStyles = {
  tiktok: 'bg-black/50 text-white border border-white/20',
  youtube: 'bg-red-600/50 text-white border border-red-500/30',
  telegram: 'bg-blue-500/50 text-white border border-blue-400/30',
  vk: 'bg-blue-700/50 text-white border border-blue-600/30',
}

const platformIcons = {
  tiktok: 'tiktok',
  youtube: 'youtube',
  telegram: 'telegram',
  vk: 'vk',
}

const gradientClasses = {
  tiktok: 'from-pink-500/20 to-cyan-500/20',
  youtube: 'from-red-500/20 to-pink-500/20',
  telegram: 'from-blue-500/20 to-cyan-500/20',
  vk: 'from-blue-600/20 to-purple-500/20',
}
</script>
