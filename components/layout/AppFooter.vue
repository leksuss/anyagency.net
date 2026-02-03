<template>
  <footer class="bg-black border-t border-white/10 py-16">
    <div class="section-container">
      <div class="grid md:grid-cols-3 gap-12 mb-12">
        <!-- Column 1: Brand -->
        <div>
          <div class="text-2xl font-outfit font-black text-gradient mb-4">AnyAgency</div>
          <p class="text-dark-gray text-sm leading-relaxed">
            Multi-platform influencer marketing agency connecting brands with authentic creators across TikTok, YouTube, Telegram, and VKontakte.
          </p>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h3 class="text-lg font-outfit font-bold mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.href">
              <a
                :href="link.href"
                class="text-dark-gray hover:text-white transition-colors text-sm"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Contact & Social -->
        <div>
          <h3 class="text-lg font-outfit font-bold mb-4">Get in Touch</h3>
          <ul class="space-y-3 mb-6">
            <li class="text-dark-gray text-sm flex items-start gap-2">
              <Icon name="email" size="sm" class="text-neon-cyan mt-0.5" />
              <a href="mailto:hello@anyagency.net" class="hover:text-white transition-colors">
                hello@anyagency.net
              </a>
            </li>
            <li class="text-dark-gray text-sm flex items-start gap-2">
              <Icon name="phone" size="sm" class="text-neon-cyan mt-0.5" />
              <span>+7 (727) 250-31-31</span>
            </li>
            <li class="text-dark-gray text-sm flex items-start gap-2">
              <Icon name="location" size="sm" class="text-neon-cyan mt-0.5" />
              <span>Dostyk Avenue 123, Office 456<br>Almaty, Kazakhstan 050010</span>
            </li>
          </ul>

          <!-- Social Links -->
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-dark-gray hover:text-white hover:bg-white/10 transition-all hover:scale-110"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" size="md" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-dark-gray text-sm">
          © 2026 AnyAgency. All rights reserved.
        </p>
        <div class="flex gap-6">
          <NuxtLink
            to="/privacy-policy"
            class="text-dark-gray hover:text-white transition-colors text-sm"
          >
            Privacy Policy
          </NuxtLink>
          <NuxtLink
            to="/terms-of-service"
            class="text-dark-gray hover:text-white transition-colors text-sm"
          >
            Terms of Service
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Creators', href: '/#bloggers' },
  { label: 'Case Studies', href: '/#cases' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

const socialLinks = [
  { name: 'Telegram', href: 'https://t.me/onyagency', icon: 'telegram' },
  { name: 'Instagram', href: 'https://www.instagram.com/anyagency/', icon: 'instagram' },
  { name: 'YouTube', href: 'https://www.youtube.com/@KWSMTeam', icon: 'youtube' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@anyagency.my', icon: 'tiktok' },
]
</script>
