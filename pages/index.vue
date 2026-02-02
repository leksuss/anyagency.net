<template>
  <div class="relative">
    <!-- Header -->
    <AppHeader @open-modal="openContactModal" />

    <!-- Main Content -->
    <main>
      <HeroSection @open-modal="openContactModal" />
      <StatsSection />
      <ServicesSection />
      <BloggersSection />
      <CaseStudiesSection @open-modal="openContactModal" />
      <AboutSection />
      <ContactSection @open-modal="openContactModal" />
    </main>

    <!-- Footer -->
    <AppFooter />

    <!-- Contact Modal -->
    <ContactModal :is-open="isContactModalOpen" @close="closeContactModal" />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import StatsSection from '~/components/sections/StatsSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import BloggersSection from '~/components/sections/BloggersSection.vue'
import CaseStudiesSection from '~/components/sections/CaseStudiesSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import ContactModal from '~/components/ui/ContactModal.vue'

const { isOpen: isContactModalOpen, open: openContactModal, close: closeContactModal } = useModal()

useSeoMeta({
  title: 'AnyAgency - Multi-Platform Influencer Marketing',
  description: 'Connect your brand with 100+ exclusive creators across TikTok, YouTube, Telegram & VK. 200M+ combined reach. Launch your campaign today.',
  ogTitle: 'AnyAgency - Influencer Marketing Agency',
  ogDescription: 'Multi-platform influencer campaigns that drive results',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>
