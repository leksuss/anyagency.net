<template>
  <section id="bloggers" ref="sectionRef" class="py-24 relative bg-dark-charcoal">
    <div class="section-container">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-outfit font-bold mb-4">
          <span class="text-gradient">Exclusive </span>
          <span class="text-white">Creators</span>
        </h2>
        <p class="text-dark-gray text-lg max-w-3xl mx-auto mb-8">
          Work with top influencers across multiple platforms to reach your target audience
        </p>

        <!-- Platform Filter -->
        <PlatformFilter v-model:selected="selectedPlatform" />
      </div>

      <!-- Bloggers Grid (4 columns) -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <BloggerCard
          v-for="(blogger, index) in filteredBloggers"
          :key="blogger.id"
          :blogger="blogger"
          :class="{ 'animate-slide-up': isVisible }"
          :style="{ animationDelay: `${index * 0.1}s` }"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredBloggers.length === 0" class="text-center py-16">
        <div class="mb-4 flex justify-center">
          <Icon name="search" size="2xl" class="w-16 h-16 text-dark-gray" />
        </div>
        <p class="text-dark-gray text-lg">No creators found for this platform</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Platform } from '~/types'
import { bloggers } from '~/data/bloggers'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollAnimation(sectionRef, { threshold: 0.05 })

const selectedPlatform = ref<Platform>('all')

// Show only featured bloggers
const filteredBloggers = computed(() => {
  const featured = bloggers.filter(b => b.featured)

  if (selectedPlatform.value === 'all') {
    return featured
  }
  return featured.filter(b => b.platform === selectedPlatform.value)
})
</script>
