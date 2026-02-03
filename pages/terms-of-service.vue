<template>
  <LegalPageLayout :page-data="termsOfService" />
</template>

<script setup lang="ts">
import { termsOfService } from '~/data/legal/termsOfService'
import LegalPageLayout from '~/components/legal/LegalPageLayout.vue'

// SEO Meta Tags
useSeoMeta({
  title: 'Terms of Service - AnyAgency',
  description: termsOfService.description,
  ogTitle: 'Terms of Service - AnyAgency SaaS Platform',
  ogDescription: 'Read our Terms of Service to understand the rules and guidelines for using AnyAgency\'s TikTok integration platform.',
  ogType: 'website',
  keywords: termsOfService.metadata.keywords.join(', '),
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
        name: 'Terms of Service',
        description: termsOfService.description,
        dateModified: termsOfService.lastUpdated,
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
