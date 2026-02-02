<template>
  <div class="bg-dark-charcoal rounded-3xl overflow-hidden border border-white/10 card-lift">
    <!-- Image Placeholder -->
    <div class="w-full h-64 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 relative overflow-hidden">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-8xl opacity-50">📊</div>
      </div>
      <div class="absolute top-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-sm font-semibold">
        {{ caseStudy.industry }}
      </div>
    </div>

    <!-- Content -->
    <div class="p-8">
      <!-- Client & Objective -->
      <div class="mb-6">
        <h3 class="text-3xl font-outfit font-bold text-gradient mb-2">{{ caseStudy.client }}</h3>
        <p class="text-dark-gray">{{ caseStudy.objective }}</p>
      </div>

      <!-- Strategy -->
      <div class="mb-6">
        <h4 class="text-lg font-outfit font-bold mb-3">Strategy</h4>
        <ul class="space-y-2">
          <li
            v-for="(item, index) in caseStudy.strategy"
            :key="index"
            class="flex items-start gap-2 text-sm text-dark-gray"
          >
            <span class="text-neon-purple mt-1">→</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Results Grid -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div
          v-for="(result, index) in caseStudy.results"
          :key="index"
          class="p-4 bg-dark-bg rounded-xl text-center"
        >
          <div class="text-3xl font-bebas text-neon-purple mb-1">{{ result.value }}</div>
          <div class="text-xs text-dark-gray">{{ result.label }}</div>
        </div>
      </div>

      <!-- Quote -->
      <div v-if="caseStudy.quote" class="relative p-6 bg-white/5 rounded-xl border-l-4 border-neon-cyan">
        <div class="text-4xl text-neon-cyan/30 absolute top-2 left-4">"</div>
        <p class="text-sm text-dark-gray italic pl-6">{{ caseStudy.quote }}</p>
      </div>

      <!-- Duration -->
      <div class="mt-6 text-sm text-dark-gray flex items-center gap-2">
        <span>⏱️</span>
        <span>Campaign duration: <span class="text-white font-semibold">{{ caseStudy.duration }}</span></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CaseStudy } from '~/types'

defineProps<{
  caseStudy: CaseStudy
}>()
</script>
