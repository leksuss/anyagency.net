// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Enable auto-import for components with folder prefixes
  components: [
    '~/components',
    '~/components/layout',
    '~/components/sections',
    '~/components/ui',
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      'Outfit': [400, 500, 600, 700, 800, 900],
      'DM Sans': [400, 500, 600, 700],
      'Bebas Neue': [400],
    },
    display: 'swap',
    preload: true,
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'AnyAgency - Multi-Platform Influencer Marketing',
      meta: [
        {
          name: 'description',
          content: 'Connect your brand with 100+ exclusive creators across TikTok, YouTube, Telegram & VK. 200M+ combined reach. Launch your campaign today.'
        },
        { property: 'og:title', content: 'AnyAgency - Influencer Marketing Agency' },
        { property: 'og:description', content: 'Multi-platform influencer campaigns that drive results' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'apple-mobile-web-app-title', content: 'AnyAgency' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon/favicon.svg' },
        { rel: 'shortcut icon', href: '/images/favicon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/images/favicon/site.webmanifest' },
      ],
    },
  },

  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
    smtpPort: process.env.SMTP_PORT || 587,
    smtpUser: process.env.SMTP_USER || '',
    smtpPass: process.env.SMTP_PASS || '',
    contactEmail: process.env.CONTACT_EMAIL || 'hello@anyagency.net',
  },
})
