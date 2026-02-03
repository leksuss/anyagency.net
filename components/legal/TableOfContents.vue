<template>
  <nav class="toc-container" aria-label="Table of Contents">
    <h3 class="toc-title">Table of Contents</h3>
    <ul class="toc-list">
      <li v-for="section in sections" :key="section.id">
        <a
          :href="`#${section.id}`"
          class="toc-link"
          :class="{ active: activeSection === section.id }"
          @click.prevent="scrollToSection(section.id)"
        >
          {{ section.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { LegalSection } from '~/types'
import { useLegalNavigation } from '~/composables/useLegalNavigation'

const props = defineProps<{
  sections: LegalSection[]
}>()

// Extract section IDs for navigation tracking
const sectionIds = computed(() => props.sections.map(s => s.id))
const { activeSection } = useLegalNavigation(sectionIds.value)

// Smooth scroll to section
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 100 // offset for fixed header
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
</script>

<style scoped>
.toc-container {
  @apply bg-white/5 rounded-lg p-6 sticky top-24;
}

.toc-title {
  @apply text-lg font-outfit font-bold text-white mb-4;
}

.toc-list {
  @apply space-y-1;
}

.toc-link {
  @apply block text-sm text-dark-gray hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-white/5;
}

.toc-link.active {
  @apply text-neon-cyan bg-white/5;
}
</style>
