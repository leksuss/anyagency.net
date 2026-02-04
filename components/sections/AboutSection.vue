<template>
  <section id="about" ref="sectionRef" class="py-24 relative">
    <div class="section-container">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-outfit font-bold mb-4">
          <span class="text-gradient">About </span>
          <span class="text-white">AnyAgency</span>
        </h2>
        <p class="text-dark-gray text-lg max-w-3xl mx-auto">
          We connect brands with authentic creators across TikTok, YouTube, Telegram, and VKontakte
        </p>
      </div>

      <!-- Agency Description -->
      <div class="max-w-4xl mx-auto mb-16">
        <div class="bg-dark-charcoal rounded-3xl p-8 md:p-12 border border-white/10">
          <p class="text-lg text-dark-gray leading-relaxed mb-6">
            Based in <span class="text-neon-cyan font-semibold">Almaty, Kazakhstan</span>, AnyAgency specializes in multi-platform influencer campaigns that drive real results. With exclusive access to 100+ top-tier creators and a combined reach of over 200 million followers, we help brands tell their stories through authentic voices.
          </p>
          <p class="text-lg text-dark-gray leading-relaxed">
            Our data-driven approach combines creative strategy with performance optimization to ensure every campaign delivers measurable ROI. From campaign conception to execution and reporting, we handle every detail so you can focus on growing your brand.
          </p>
        </div>
      </div>

      <!-- Key Differentiators -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div
          v-for="(item, index) in differentiators"
          :key="index"
          class="text-center p-6 rounded-2xl bg-dark-charcoal border border-white/10 hover:border-neon-purple/50 transition-all card-lift"
          :class="{ 'animate-slide-up': isVisible }"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="mb-4 flex justify-center">
            <Icon :name="item.icon" size="xl" class="text-neon-purple" />
          </div>
          <h3 class="text-xl font-outfit font-bold mb-2">{{ item.title }}</h3>
          <p class="text-dark-gray text-sm">{{ item.description }}</p>
        </div>
      </div>

      <!-- Team Section -->
      <div>
        <h3 class="text-3xl font-outfit font-bold text-center mb-12">
          <span class="text-white">Meet the </span>
          <span class="text-gradient">Team</span>
        </h3>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(member, index) in team"
            :key="member.name"
            class="text-center group"
            :class="{ 'animate-fade-in': isVisible }"
            :style="{ animationDelay: `${(index + 4) * 0.1}s` }"
          >
            <!-- Profile Image -->
            <div class="w-32 h-32 mx-auto mb-4 relative">
              <img
                :src="`/images/employees/${member.photo}`"
                :alt="member.name"
                class="w-full h-full rounded-full object-cover border-4 border-white/10 group-hover:border-neon-purple/50 transition-all duration-300 group-hover:scale-105"
              />
              <div class="absolute inset-0 rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <!-- Name & Role -->
            <h4 class="text-xl font-outfit font-bold mb-1">{{ member.name }}</h4>
            <p class="text-neon-purple text-sm font-semibold mb-2">{{ member.role }}</p>
            <p class="text-dark-gray text-sm">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollAnimation(sectionRef, { threshold: 0.1 })

const differentiators = [
  {
    icon: 'shield-check',
    title: 'Exclusive Access',
    description: 'Direct partnerships with 100+ top-tier creators',
  },
  {
    icon: 'chart',
    title: 'Data-Driven',
    description: 'Performance optimization and transparent analytics',
  },
  {
    icon: 'globe',
    title: 'Multi-Platform',
    description: 'Coordinated campaigns across 4 major platforms',
  },
  {
    icon: 'lightning',
    title: '500+ Campaigns',
    description: 'Proven track record of successful collaborations',
  },
]

const team = [
  {
    name: 'Amir Bekzhan',
    role: 'CEO & Founder',
    bio: '10+ years in digital marketing',
    photo: 'Amir.webp',
  },
  {
    name: 'Alina Nurzhanova',
    role: 'Creative Director',
    bio: 'Former content creator turned strategist',
    photo: 'Alina.webp',
  },
  {
    name: 'Daniyar Tolegenov',
    role: 'Campaign Manager',
    bio: 'Performance marketing expert',
    photo: 'Daniyar.webp',
  },
  {
    name: 'Saule Amanova',
    role: 'Analytics Lead',
    bio: 'Data science background',
    photo: 'Saule.webp',
  },
]
</script>
