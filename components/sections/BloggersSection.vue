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

      <!-- Featured Bloggers -->
      <div v-if="filteredFeaturedBloggers.length > 0" class="mb-16">
        <h3 class="text-2xl font-outfit font-bold text-center mb-8">
          <span class="text-neon-purple">★</span> Featured Creators
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BloggerCard
            v-for="(blogger, index) in filteredFeaturedBloggers"
            :key="blogger.id"
            :blogger="blogger"
            :class="{ 'animate-slide-up': isVisible }"
            :style="{ animationDelay: `${index * 0.1}s` }"
          />
        </div>
      </div>

      <!-- All Bloggers Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <BloggerCard
          v-for="(blogger, index) in filteredRegularBloggers"
          :key="blogger.id"
          :blogger="blogger"
          :class="{ 'animate-fade-in': isVisible }"
          :style="{ animationDelay: `${(index + filteredFeaturedBloggers.length) * 0.05}s` }"
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

const filteredBloggers = computed(() => {
  if (selectedPlatform.value === 'all') {
    return bloggers
  }
  return bloggers.filter(b => b.platform === selectedPlatform.value)
})

const filteredFeaturedBloggers = computed(() => {
  return filteredBloggers.value.filter(b => b.featured)
})

const filteredRegularBloggers = computed(() => {
  return filteredBloggers.value.filter(b => !b.featured)
})
</script>
