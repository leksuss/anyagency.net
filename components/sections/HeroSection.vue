<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture">
    <!-- Animated Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-dark-bg to-neon-cyan/10"></div>

    <!-- Floating Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-32 h-32 bg-neon-purple/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-40 right-20 w-48 h-48 bg-neon-cyan/20 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-neon-pink/20 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 section-container text-center">
      <div class="max-w-5xl mx-auto space-y-8">
        <!-- Headline -->
        <h1
          class="text-5xl md:text-7xl lg:text-8xl font-outfit font-black leading-tight"
          :class="{ 'animate-slide-up': isVisible }"
        >
          <span class="text-gradient">Amplify Your Brand</span>
          <br>
          <span class="text-white">Through Authentic Influence</span>
        </h1>

        <!-- Subheading -->
        <p
          class="text-xl md:text-2xl text-dark-gray max-w-3xl mx-auto"
          :class="{ 'animate-slide-up': isVisible }"
          style="animation-delay: 0.2s;"
        >
          Multi-platform campaigns with <span class="text-neon-cyan font-semibold">200M+ combined reach</span> across TikTok, YouTube, Telegram & VK
        </p>

        <!-- Platform Badges -->
        <div
          class="flex flex-wrap justify-center gap-4"
          :class="{ 'animate-slide-up': isVisible }"
          style="animation-delay: 0.4s;"
        >
          <div
            v-for="platform in platforms"
            :key="platform.name"
            class="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex items-center gap-3 hover:bg-white/10 hover:scale-105 hover:border-neon-purple/50 transition-all group"
          >
            <Icon :name="platform.icon" size="md" :class="['transition-colors', platform.color]" />
            <span class="font-semibold">{{ platform.name }}</span>
          </div>
        </div>

        <!-- CTA Button -->
        <div
          :class="{ 'animate-scale-in': isVisible }"
          style="animation-delay: 0.6s;"
        >
          <BaseButton variant="primary" @click="openModal" class="animate-glow-pulse">
            Launch Your Campaign
          </BaseButton>
        </div>

        <!-- Scroll Indicator -->
        <div class="mt-16 animate-bounce">
          <a href="#stats" class="inline-block text-dark-gray hover:text-white transition-colors">
            <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <span class="text-xs uppercase tracking-wider mt-2 block">Scroll</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  openModal: []
}>()

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollAnimation(sectionRef, { threshold: 0.3 })

const platforms = [
  { name: 'TikTok', icon: 'tiktok', color: 'text-white group-hover:text-neon-pink' },
  { name: 'YouTube', icon: 'youtube', color: 'text-white group-hover:text-red-500' },
  { name: 'Telegram', icon: 'telegram', color: 'text-white group-hover:text-neon-cyan' },
  { name: 'VK', icon: 'vk', color: 'text-white group-hover:text-blue-500' },
]

const openModal = () => {
  emit('openModal')
}

onMounted(() => {
  isVisible.value = true
})
</script>
