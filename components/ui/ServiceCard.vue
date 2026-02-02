<template>
  <div class="group relative bg-dark-charcoal rounded-2xl p-8 card-lift border border-white/10 overflow-hidden">
    <!-- Gradient Background Effect -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div class="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <!-- Icon -->
      <div class="mb-6">
        <Icon :name="service.icon" size="2xl" class="text-neon-purple group-hover:text-neon-cyan transition-colors duration-300" />
      </div>

      <!-- Title -->
      <h3 class="text-2xl font-outfit font-bold mb-4 group-hover:text-gradient transition-all">
        {{ service.title }}
      </h3>

      <!-- Description -->
      <p class="text-dark-gray leading-relaxed mb-6">
        {{ service.description }}
      </p>

      <!-- Features -->
      <ul v-if="service.features" class="space-y-2">
        <li
          v-for="(feature, index) in service.features"
          :key="index"
          class="flex items-start gap-2 text-sm text-dark-gray"
        >
          <svg class="w-4 h-4 mt-0.5 text-neon-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>

    <!-- Border Gradient Effect -->
    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style="
        background: linear-gradient(135deg, #a855f7, #06b6d4, #ec4899);
        padding: 2px;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      "
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { Service } from '~/types'

defineProps<{
  service: Service
}>()
</script>
