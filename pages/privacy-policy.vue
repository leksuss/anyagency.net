<template>
  <LegalPageLayout :page-data="privacyPolicy" />
</template>

<script setup lang="ts">
import { privacyPolicy } from '~/data/legal/privacyPolicy'
import LegalPageLayout from '~/components/legal/LegalPageLayout.vue'

// SEO Meta Tags
useSeoMeta({
  title: 'Privacy Policy - AnyAgency',
  description: privacyPolicy.description,
  ogTitle: 'Privacy Policy - AnyAgency SaaS Platform',
  ogDescription: 'Learn how AnyAgency protects your data and respects your privacy when using our TikTok integration service.',
  ogType: 'website',
  keywords: privacyPolicy.metadata.keywords.join(', '),
  robots: 'index, follow',
})

// Structured Data for SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Privacy Policy',
        description: privacyPolicy.description,
        dateModified: privacyPolicy.lastUpdated,
        publisher: {
          '@type': 'Organization',
          name: 'ТОО "I-Con"',
          legalName: 'Товарищество с ограниченной ответственностью "I-Con"',
          url: 'https://anyagency.net',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Микрорайон ЖУЛДЫЗ-1, дом 13, кв. 59',
            addressLocality: 'Almaty',
            addressRegion: 'Turksibsky District',
            postalCode: '050039',
            addressCountry: 'KZ',
          },
        },
      }),
    },
  ],
})
</script>
