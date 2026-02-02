<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
    :class="scrolled ? 'backdrop-blur-frosted shadow-lg' : 'bg-transparent'"
  >
    <nav class="section-container py-6">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#hero" class="text-2xl font-outfit font-black text-gradient hover:scale-105 transition-transform">
          AnyAgency
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-semibold text-dark-gray hover:text-white transition-colors"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <BaseButton variant="primary" @click="openModal">
            Start Campaign
          </BaseButton>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white" @click="toggleMobileMenu">
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide-down">
        <div v-if="mobileMenuOpen" class="md:hidden mt-6 pb-6 space-y-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block text-lg font-semibold text-dark-gray hover:text-white transition-colors"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
          <BaseButton variant="primary" class="w-full" @click="openModalAndCloseMobileMenu">
            Start Campaign
          </BaseButton>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  openModal: []
}>()

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Creators', href: '#bloggers' },
  { label: 'Cases', href: '#cases' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const openModal = () => {
  emit('openModal')
}

const openModalAndCloseMobileMenu = () => {
  closeMobileMenu()
  openModal()
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
