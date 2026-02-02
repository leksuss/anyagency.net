<template>
  <section id="stats" ref="sectionRef" class="py-24 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-dark-bg to-dark-charcoal"></div>

    <div class="relative z-10 section-container">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-outfit font-bold text-gradient mb-4">
          The Numbers Speak
        </h2>
        <p class="text-dark-gray text-lg">Proven results across multiple platforms</p>
      </div>

      <!-- Stats Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCounter
          v-for="stat in stats"
          :key="stat.id"
          :stat="stat"
          :animate="isVisible"
          :class="{ 'animate-slide-up': isVisible }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Stat } from '~/types'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollAnimation(sectionRef, { threshold: 0.2 })

const stats: Stat[] = [
  {
    id: 'reach',
    label: 'Total Reach',
    value: '200M',
    icon: 'globe-world',
    suffix: '+',
  },
  {
    id: 'creators',
    label: 'Exclusive Creators',
    value: '100',
    icon: 'star',
    suffix: '+',
  },
  {
    id: 'campaigns',
    label: 'Campaigns Delivered',
    value: '500',
    icon: 'rocket',
    suffix: '+',
  },
  {
    id: 'platforms',
    label: 'Major Platforms',
    value: '4',
    icon: 'smartphone',
  },
]
</script>
