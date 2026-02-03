<template>
  <section id="contact" ref="sectionRef" class="py-24 relative bg-dark-charcoal">
    <div class="section-container">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-outfit font-bold mb-4">
          <span class="text-white">Get in </span>
          <span class="text-gradient">Touch</span>
        </h2>
        <p class="text-dark-gray text-lg">
          Ready to launch your influencer campaign? Let's talk!
        </p>
      </div>

      <!-- Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-outfit font-bold mb-6">Contact Information</h3>

            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-start gap-4 p-6 bg-dark-bg rounded-2xl border border-white/10 hover:border-neon-purple/50 transition-all">
                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center">
                  <Icon name="email" size="lg" class="text-neon-purple" />
                </div>
                <div>
                  <div class="text-dark-gray text-sm mb-1">Email</div>
                  <a href="mailto:hello@anyagency.net" class="text-lg font-semibold hover:text-neon-purple transition-colors">
                    hello@anyagency.net
                  </a>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start gap-4 p-6 bg-dark-bg rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-all">
                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center">
                  <Icon name="phone" size="lg" class="text-neon-cyan" />
                </div>
                <div>
                  <div class="text-dark-gray text-sm mb-1">Phone</div>
                  <a href="tel:+77272503131" class="text-lg font-semibold">
                    +7 (727) 250-31-31
                  </a>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start gap-4 p-6 bg-dark-bg rounded-2xl border border-white/10 hover:border-neon-pink/50 transition-all">
                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-neon-pink/10 flex items-center justify-center">
                  <Icon name="location" size="lg" class="text-neon-pink" />
                </div>
                <div>
                  <div class="text-dark-gray text-sm mb-1">Office</div>
                  <div class="text-lg font-semibold">
                    Dostyk Avenue 123, Office 456<br>
                    Almaty, Kazakhstan 050010
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="text-lg font-outfit font-bold mb-4">Follow Us</h4>
            <div class="flex gap-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                class="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all neon-glow-hover"
                :aria-label="social.name"
              >
                <Icon :name="social.icon" size="lg" class="text-white" />
              </a>
            </div>
          </div>
        </div>

        <!-- CTA & Map -->
        <div class="space-y-8">
          <!-- CTA Card -->
          <div class="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-3xl p-8 border border-white/10">
            <h3 class="text-2xl font-outfit font-bold mb-4">Start Your Campaign</h3>
            <p class="text-dark-gray mb-6">
              Fill out our contact form and we'll get back to you within 24 hours with a custom strategy for your brand.
            </p>
            <BaseButton variant="primary" @click="openModal" class="w-full">
              Launch Contact Form
            </BaseButton>
          </div>

          <!-- Map Embed -->
          <div class="rounded-3xl overflow-hidden border border-white/10 h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.5729085894384!2d76.93922131549024!3d43.238293179138524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e7d16c5cbab%3A0x392db7e7ba62baa7!2sDostyk%20Ave%2C%20Almaty%2C%20Kazakhstan!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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
const { isVisible } = useScrollAnimation(sectionRef, { threshold: 0.1 })

const socialLinks = [
  { name: 'Telegram', href: 'https://t.me/onyagency', icon: 'telegram' },
  { name: 'Instagram', href: 'https://www.instagram.com/anyagency/', icon: 'instagram' },
  { name: 'YouTube', href: 'https://www.youtube.com/@KWSMTeam', icon: 'youtube' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@anyagency.my', icon: 'tiktok' },
]

const openModal = () => {
  emit('openModal')
}
</script>
