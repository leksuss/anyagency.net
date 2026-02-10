<template>
  <section id="cases" ref="sectionRef" class="py-12 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-dark-charcoal to-dark-bg"></div>

    <div class="relative z-10 section-container">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-outfit font-bold mb-4">
          <span class="text-white">Success </span>
          <span class="text-gradient">Stories</span>
        </h2>
        <p class="text-dark-gray text-lg max-w-3xl mx-auto">
          Real campaigns, real results. See how we've helped brands achieve their goals.
        </p>
      </div>

      <!-- Case Studies Grid -->
      <div class="grid lg:grid-cols-3 gap-8">
        <CaseStudyCard
          v-for="(caseStudy, index) in caseStudies"
          :key="caseStudy.id"
          :case-study="caseStudy"
          :class="{ 'animate-slide-up': isVisible }"
          :style="{ animationDelay: `${index * 0.15}s` }"
        />
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <p class="text-xl text-dark-gray mb-6">Ready to create your own success story?</p>
        <BaseButton variant="primary" @click="openModal">
          Get Started Today
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { caseStudies } from '~/data/caseStudies'

const emit = defineEmits<{
  openModal: []
}>()

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollAnimation(sectionRef, { threshold: 0.1 })

const openModal = () => {
  emit('openModal')
}
</script>
