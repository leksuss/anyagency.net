<template>
  <section :id="section.id" class="legal-section scroll-mt-24">
    <!-- Main section title -->
    <h2 class="section-title">
      {{ section.title }}
    </h2>

    <!-- Main content -->
    <div v-if="section.content" class="section-content">
      <template v-if="Array.isArray(section.content)">
        <p v-for="(paragraph, index) in section.content" :key="index" class="paragraph">
          {{ paragraph }}
        </p>
      </template>
      <p v-else class="paragraph">
        {{ section.content }}
      </p>
    </div>

    <!-- Main section list -->
    <LegalList v-if="section.list" :list="section.list" />

    <!-- Subsections -->
    <div v-if="section.subsections && section.subsections.length" class="subsections">
      <div
        v-for="(subsection, index) in section.subsections"
        :key="index"
        class="subsection"
      >
        <!-- Subsection title -->
        <h3 v-if="subsection.title" class="subsection-title">
          {{ subsection.title }}
        </h3>

        <!-- Subsection content -->
        <div v-if="subsection.content" class="subsection-content">
          <template v-if="Array.isArray(subsection.content)">
            <p v-for="(paragraph, pIndex) in subsection.content" :key="pIndex" class="paragraph">
              {{ paragraph }}
            </p>
          </template>
          <p v-else class="paragraph">
            {{ subsection.content }}
          </p>
        </div>

        <!-- Subsection list -->
        <LegalList v-if="subsection.list" :list="subsection.list" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { LegalSection } from '~/types'
import LegalList from './LegalList.vue'

defineProps<{
  section: LegalSection
}>()
</script>

<style scoped>
.legal-section {
  @apply mb-16;
}

.section-title {
  @apply text-2xl font-outfit font-bold text-white mt-12 mb-6 pb-4 border-b border-white/10;
}

.section-title:first-child,
.legal-section:first-child .section-title {
  @apply mt-0;
}

.section-content {
  @apply mb-6;
}

.paragraph {
  @apply text-dark-gray leading-relaxed mb-4;
}

.paragraph:last-child {
  @apply mb-0;
}

.subsections {
  @apply space-y-8;
}

.subsection {
  @apply pl-0;
}

.subsection-title {
  @apply text-xl font-outfit font-semibold text-white mt-8 mb-4;
}

.subsection-content {
  @apply mb-4;
}

/* Smooth scroll offset for anchor links */
.scroll-mt-24 {
  scroll-margin-top: 6rem;
}
</style>
