<template>
  <div class="legal-page">
    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <main class="section-container py-12 md:py-20">
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs mb-8" aria-label="Breadcrumb">
        <ol class="flex items-center gap-2 text-sm">
          <li>
            <NuxtLink to="/" class="text-dark-gray hover:text-white transition-colors">
              Home
            </NuxtLink>
          </li>
          <li class="text-dark-gray">/</li>
          <li class="text-white">{{ pageData.title }}</li>
        </ol>
      </nav>

      <!-- Page Header -->
      <header class="mb-12">
        <h1 class="text-4xl md:text-5xl font-outfit font-black text-gradient mb-4">
          {{ pageData.title }}
        </h1>
        <div class="last-updated">
          <Icon name="calendar" size="sm" class="text-neon-cyan" />
          <span>Last Updated: {{ formattedDate }}</span>
        </div>
      </header>

      <!-- Two-column layout (TOC + Content) -->
      <div class="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
        <!-- Table of Contents (Desktop: Sidebar, Mobile: Above content) -->
        <aside class="lg:order-1">
          <div class="lg:sticky lg:top-24">
            <TableOfContents :sections="pageData.sections" />
          </div>
        </aside>

        <!-- Main Content -->
        <article class="legal-content lg:order-2">
          <LegalSection
            v-for="section in pageData.sections"
            :key="section.id"
            :section="section"
          />
        </article>
      </div>

      <!-- Back to top button -->
      <div class="mt-12 text-center">
        <button
          @click="scrollToTop"
          class="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-neon-cyan hover:text-white transition-all"
        >
          <Icon name="arrow-up" size="sm" />
          <span>Back to Top</span>
        </button>
      </div>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import type { LegalPage } from '~/types'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import TableOfContents from './TableOfContents.vue'
import LegalSection from './LegalSection.vue'
import Icon from '~/components/ui/Icon.vue'

const props = defineProps<{
  pageData: LegalPage
}>()

// Format date for display
const formattedDate = computed(() => {
  const date = new Date(props.pageData.lastUpdated)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
.legal-page {
  @apply min-h-screen bg-dark-bg;
}

.breadcrumbs ol {
  @apply list-none;
}

.last-updated {
  @apply inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm text-dark-gray;
}

.legal-content {
  @apply max-w-none;
}

/* Print styles */
@media print {
  header nav,
  aside,
  footer,
  button {
    @apply hidden;
  }

  .legal-content {
    @apply text-black;
  }

  h1,
  h2,
  h3 {
    @apply text-black;
  }
}
</style>
