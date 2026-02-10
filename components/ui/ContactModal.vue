<template>
  <ClientOnly>
    <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="close"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

        <!-- Modal Content -->
        <div class="relative w-full max-w-2xl max-h-[90vh] bg-dark-charcoal rounded-3xl shadow-2xl animate-scale-in overflow-y-auto">
          <!-- Close Button -->
          <button
            class="absolute top-6 right-6 text-dark-gray hover:text-white transition-colors z-10"
            @click="close"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Modal Header -->
          <div class="p-8 pb-6 border-b border-white/10">
            <h2 class="text-3xl font-outfit font-bold text-gradient">Let's Start Your Campaign</h2>
            <p class="text-dark-gray mt-2">Fill out the form and we'll get back to you within 24 hours</p>
          </div>

          <!-- Form -->
          <form class="p-8 space-y-6" @submit.prevent="handleSubmit">
            <!-- Name -->
            <div>
              <label class="block text-sm font-semibold mb-2">Full Name *</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg bg-dark-bg border border-white/10 text-white placeholder-dark-gray focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all"
                placeholder="John Doe"
              />
            </div>

            <!-- Email & Phone -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold mb-2">Email *</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-dark-bg border border-white/10 text-white placeholder-dark-gray focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2">Phone</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 rounded-lg bg-dark-bg border border-white/10 text-white placeholder-dark-gray focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <!-- Company & Budget -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold mb-2">Company</label>
                <input
                  v-model="form.company"
                  type="text"
                  class="w-full px-4 py-3 rounded-lg bg-dark-bg border border-white/10 text-white placeholder-dark-gray focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all"
                  placeholder="Your Company Inc."
                />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2">Budget Range</label>
                <select
                  v-model="form.budget"
                  class="w-full px-4 py-3 rounded-lg bg-dark-bg border border-white/10 text-white focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all"
                >
                  <option value="">Select budget</option>
                  <option value="<$10K">&lt; $10,000</option>
                  <option value="$10K-$50K">$10,000 - $50,000</option>
                  <option value="$50K-$100K">$50,000 - $100,000</option>
                  <option value="$100K+">$100,000+</option>
                </select>
              </div>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-sm font-semibold mb-2">Message *</label>
              <textarea
                v-model="form.message"
                required
                rows="4"
                class="w-full px-4 py-3 rounded-lg bg-dark-bg border border-white/10 text-white placeholder-dark-gray focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all resize-none"
                placeholder="Tell us about your campaign goals..."
              ></textarea>
            </div>

            <!-- Privacy Checkbox -->
            <div class="flex items-start gap-3">
              <input
                v-model="form.agreedToPrivacy"
                type="checkbox"
                required
                class="mt-1 w-4 h-4 rounded border-white/10 bg-dark-bg text-neon-purple focus:ring-neon-purple/50"
              />
              <label class="text-sm text-dark-gray">
                I agree to the privacy policy and terms of service *
              </label>
            </div>

            <!-- Success/Error Messages -->
            <div v-if="successMessage" class="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
              {{ errorMessage }}
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full px-8 py-4 rounded-lg font-outfit font-bold text-lg bg-gradient-to-r from-neon-purple to-neon-purple-dark text-white neon-glow-hover transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { ContactFormData } from '~/types'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const form = reactive<ContactFormData>({
  name: '',
  email: '',
  phone: '',
  company: '',
  budget: '',
  message: '',
  agreedToPrivacy: false,
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const close = () => {
  emit('close')
  // Reset messages after closing
  setTimeout(() => {
    successMessage.value = ''
    errorMessage.value = ''
  }, 300)
}

const handleSubmit = async () => {
  isSubmitting.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form,
    })

    successMessage.value = response.message || 'Message sent successfully!'

    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      phone: '',
      company: '',
      budget: '',
      message: '',
      agreedToPrivacy: false,
    })

    // Close modal after 2 seconds
    setTimeout(() => {
      close()
    }, 2000)
  } catch (error: any) {
    errorMessage.value = error.data?.statusMessage || 'Failed to send message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
