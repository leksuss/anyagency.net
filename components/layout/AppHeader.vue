<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
    :class="scrolled ? 'backdrop-blur-frosted shadow-lg' : 'bg-transparent'"
  >
    <nav class="section-container py-6">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a
          href="/#hero"
          class="flex items-center gap-1.5 md:gap-3 hover:scale-105 transition-transform"
        >
          <AppLogo class="w-5 h-5 md:w-9 md:h-9 flex-shrink-0" />
          <span class="text-base md:text-2xl font-outfit font-black text-gradient">AnyAgency</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-4 md:gap-6 xl:gap-8 flex-wrap xl:flex-nowrap justify-center xl:justify-start">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-semibold text-dark-gray hover:text-white transition-colors whitespace-nowrap"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- CTA Buttons -->
        <div class="hidden md:flex items-center gap-3 xl:gap-4 flex-shrink-0">
          <a
            href="https://app.anyagency.net"
            target="_blank"
            class="px-4 xl:px-6 py-2 xl:py-3 text-xs xl:text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Join as Creator
          </a>
          <BaseButton variant="primary" @click="openModal" class="text-xs xl:text-sm px-4 xl:px-6 py-2 xl:py-3">
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
        <div v-if="mobileMenuOpen" class="md:hidden mt-6 pb-6 space-y-4 bg-dark-charcoal/95 backdrop-blur-md rounded-2xl p-6 -mx-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block text-lg font-semibold text-dark-gray hover:text-white transition-colors"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
          <div class="flex flex-col items-center gap-4 pt-4">
            <a
              href="https://app.anyagency.net"
              target="_blank"
              class="block px-8 py-3 text-center text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
              @click="closeMobileMenu"
            >
              Join as Creator
            </a>
            <BaseButton variant="primary" class="w-full max-w-xs" @click="openModalAndCloseMobileMenu">
              Start Campaign
            </BaseButton>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import AppLogo from '~/components/ui/AppLogo.vue'

const emit = defineEmits<{
  openModal: []
}>()

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Creators', href: '/#bloggers' },
  { label: 'Cases', href: '/#cases' },
  { label: 'About', href: '/#about' },
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms-of-service' },
  { label: 'Contact', href: '/#contact' },
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
