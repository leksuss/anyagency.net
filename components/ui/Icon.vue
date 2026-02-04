<template>
  <svg
    :class="['inline-block', sizeClasses]"
    :style="{ color: color }"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <!-- Target/Aim Icon -->
    <g v-if="name === 'target'">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </g>

    <!-- Globe Icon -->
    <g v-else-if="name === 'globe'">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </g>

    <!-- Sparkles Icon -->
    <g v-else-if="name === 'sparkles'">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      <path d="M12 8l1.5 3.5L17 13l-3.5 1.5L12 18l-1.5-3.5L7 13l3.5-1.5L12 8z" />
    </g>

    <!-- Chart Bar Icon -->
    <g v-else-if="name === 'chart'">
      <path d="M3 3v18h18" />
      <path d="M18 17V9M13 17V5M8 17v-3" />
    </g>

    <!-- Email Icon -->
    <g v-else-if="name === 'email'">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </g>

    <!-- Phone Icon -->
    <g v-else-if="name === 'phone'">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </g>

    <!-- Location Pin Icon -->
    <g v-else-if="name === 'location'">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </g>

    <!-- Instagram Icon -->
    <g v-else-if="name === 'instagram'">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </g>

    <!-- LinkedIn Icon -->
    <g v-else-if="name === 'linkedin'">
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
    </g>

    <!-- Telegram Icon -->
    <g v-else-if="name === 'telegram'">
      <path d="M21.5 3l-18 7.5 4.5 1.5L18 6l-7.5 9v5l3-3 4.5 1.5 3-15z" />
    </g>

    <!-- TikTok Icon -->
    <g v-else-if="name === 'tiktok'">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </g>

    <!-- User CEO Icon -->
    <g v-else-if="name === 'user-ceo'">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke-width="1.5" />
    </g>

    <!-- User Creative Icon -->
    <g v-else-if="name === 'user-creative'">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <path d="M15 2l3 3-3 3" stroke-width="1.5" />
      <path d="M9 2L6 5l3 3" stroke-width="1.5" />
    </g>

    <!-- User Manager Icon -->
    <g v-else-if="name === 'user-manager'">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <rect x="9" y="2" width="6" height="4" rx="1" stroke-width="1.5" />
    </g>

    <!-- User Analytics Icon -->
    <g v-else-if="name === 'user-analytics'">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <path d="M14 2v4M10 4v2M18 2v2" stroke-width="1.5" />
    </g>

    <!-- Shield Check Icon (for Exclusive Access) -->
    <g v-else-if="name === 'shield-check'">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </g>

    <!-- Lightning Icon (for Campaigns) -->
    <g v-else-if="name === 'lightning'">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </g>

    <!-- Globe World Icon (Earth) -->
    <g v-else-if="name === 'globe-world'">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
      <path d="M12 2c-2 4.5-2 10.5 0 20M12 2c2 4.5 2 10.5 0 20" />
    </g>

    <!-- Star Icon -->
    <g v-else-if="name === 'star'">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
    </g>

    <!-- Rocket Icon -->
    <g v-else-if="name === 'rocket'">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </g>

    <!-- Smartphone Icon -->
    <g v-else-if="name === 'smartphone'">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </g>

    <!-- YouTube Icon (Play Button) -->
    <g v-else-if="name === 'youtube'">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" fill="currentColor" />
    </g>

    <!-- VK Icon -->
    <g v-else-if="name === 'vk'">
      <path d="M21.579 6.855c.14-.465 0-.806-.662-.806h-2.193c-.558 0-.813.295-.953.619 0 0-1.115 2.719-2.695 4.482-.51.513-.743.675-1.021.675-.139 0-.341-.162-.341-.627V6.855c0-.558-.161-.806-.626-.806H9.642c-.348 0-.558.258-.558.504 0 .528.79.65.871 2.138v3.228c0 .707-.127.836-.407.836-.743 0-2.551-2.729-3.624-5.853-.209-.607-.42-.852-.98-.852H2.752c-.627 0-.752.295-.752.619 0 .582.743 3.462 3.461 7.271 1.812 2.601 4.363 4.011 6.687 4.011 1.393 0 1.565-.313 1.565-.853v-1.966c0-.626.133-.752.574-.752.324 0 .882.164 2.183 1.417 1.486 1.486 1.732 2.153 2.567 2.153h2.192c.626 0 .939-.313.759-.931-.197-.615-.907-1.51-1.849-2.569-.512-.604-1.277-1.254-1.51-1.579-.325-.419-.231-.604 0-.976.001.001 2.672-3.761 2.95-5.04z" fill="currentColor" />
    </g>

    <!-- Search Icon -->
    <g v-else-if="name === 'search'">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </g>

    <!-- Clock Icon -->
    <g v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </g>

    <!-- Check Icon -->
    <g v-else-if="name === 'check'">
      <path d="M20 6L9 17l-5-5" />
    </g>

    <!-- Close/X Icon -->
    <g v-else-if="name === 'close'">
      <path d="M18 6L6 18M6 6l12 12" />
    </g>

    <!-- Fallback: Question Mark -->
    <g v-else>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
    </g>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'currentColor'
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
    '2xl': 'w-16 h-16',
  }
  return sizes[props.size]
})
</script>
