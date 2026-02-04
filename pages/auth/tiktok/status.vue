<template>
  <div class="min-h-screen bg-black flex items-center justify-center px-4">
    <div class="max-w-md w-full">
      <!-- Success State -->
      <div v-if="code" class="text-center">
        <div class="mb-6">
          <div class="w-20 h-20 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="check" size="xl" class="text-white" />
          </div>
          <h1 class="text-3xl font-outfit font-black text-gradient mb-2">
            Authorization Successful
          </h1>
          <p class="text-dark-gray">
            Your TikTok account has been connected successfully.
          </p>
        </div>

        <!-- Debug Info (visible in development) -->
        <div v-if="showDebugInfo" class="mt-8 p-4 bg-white/5 rounded-lg border border-white/10 text-left">
          <h3 class="text-sm font-outfit font-bold text-white mb-2">Debug Info:</h3>
          <div class="space-y-1 text-xs font-mono">
            <div class="text-dark-gray">
              <span class="text-neon-cyan">code:</span>
              <span class="break-all">{{ truncatedCode }}</span>
            </div>
            <div v-if="state" class="text-dark-gray">
              <span class="text-neon-cyan">state:</span> {{ state }}
            </div>
            <div v-if="error" class="text-red-400">
              <span class="text-neon-cyan">error:</span> {{ error }}
            </div>
            <div v-if="errorDescription" class="text-red-400">
              <span class="text-neon-cyan">error_description:</span> {{ errorDescription }}
            </div>
          </div>
        </div>

        <div class="mt-8">
          <BaseButton href="/" variant="primary" size="lg" class="w-full">
            Return to Home
          </BaseButton>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center">
        <div class="mb-6">
          <div class="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="close" size="xl" class="text-red-400" />
          </div>
          <h1 class="text-3xl font-outfit font-black text-white mb-2">
            Authorization Failed
          </h1>
          <p class="text-dark-gray mb-4">
            {{ errorDescription || 'There was an error connecting your TikTok account.' }}
          </p>

          <div v-if="errorDescription" class="p-4 bg-red-500/10 rounded-lg border border-red-500/20 text-left">
            <p class="text-sm text-red-400">{{ errorDescription }}</p>
          </div>
        </div>

        <div class="mt-8 space-y-3">
          <BaseButton @click="retryAuthorization" variant="primary" size="lg" class="w-full">
            Try Again
          </BaseButton>
          <BaseButton href="/" variant="secondary" size="lg" class="w-full">
            Return to Home
          </BaseButton>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else class="text-center">
        <div class="mb-6">
          <div class="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Icon name="tiktok" size="xl" class="text-neon-cyan" />
          </div>
          <h1 class="text-3xl font-outfit font-black text-white mb-2">
            Processing...
          </h1>
          <p class="text-dark-gray">
            Please wait while we complete the authorization.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Get query parameters from the URL
const route = useRoute()

const code = computed(() => route.query.code as string | undefined)
const state = computed(() => route.query.state as string | undefined)
const error = computed(() => route.query.error as string | undefined)
const errorDescription = computed(() => route.query.error_description as string | undefined)

// Truncate code for display (showing first and last few characters)
const truncatedCode = computed(() => {
  if (!code.value) return ''
  if (code.value.length <= 20) return code.value
  return `${code.value.substring(0, 10)}...${code.value.substring(code.value.length - 10)}`
})

// Show debug info in development or if explicitly requested
const showDebugInfo = computed(() => {
  return process.dev || route.query.debug === 'true'
})

// Retry authorization function
const retryAuthorization = () => {
  // TODO: Implement actual TikTok authorization flow
  // For now, just redirect to home
  navigateTo('/')
}

// SEO Meta Tags
useSeoMeta({
  title: 'TikTok Authorization Status - AnyAgency',
  description: 'TikTok account connection status page.',
  robots: 'noindex, nofollow', // Don't index this page
})

// Log parameters for debugging (server-side)
if (process.server) {
  console.log('[TikTok Auth Callback]', {
    code: code.value ? 'present' : 'missing',
    state: state.value,
    error: error.value,
    errorDescription: errorDescription.value,
  })
}
</script>
