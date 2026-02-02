<template>
  <section id="services" ref="sectionRef" class="py-24 relative">
    <div class="section-container">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-outfit font-bold mb-4">
          <span class="text-white">What We </span>
          <span class="text-gradient">Offer</span>
        </h2>
        <p class="text-dark-gray text-lg max-w-3xl mx-auto">
          Full-service influencer marketing solutions tailored to your brand's goals
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard
          v-for="(service, index) in services"
          :key="service.id"
          :service="service"
          :class="{ 'animate-slide-up': isVisible }"
          :style="{ animationDelay: `${index * 0.1}s` }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from '~/data/services'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollAnimation(sectionRef, { threshold: 0.1 })
</script>
