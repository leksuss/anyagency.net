<template>
  <section id="platform" class="py-12 relative">
    <div class="absolute inset-0 bg-gradient-to-b from-dark-charcoal to-dark-bg"></div>

    <div class="relative z-10 section-container">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left: Content -->
        <div>
          <h2 class="text-4xl md:text-5xl font-bebas text-gradient mb-6">
            Powerful Tools for Our Creators
          </h2>
          <p class="text-lg text-dark-gray mb-8">
            Join our network and get access to our advanced content management platform
          </p>

          <div class="space-y-6 mb-8">
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-neon-purple to-neon-purple-dark flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-outfit font-bold text-white mb-2">Multi-Platform Publishing</h3>
                <p class="text-dark-gray">Schedule and publish content across TikTok, YouTube, and more from one place</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-neon-purple to-neon-purple-dark flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-outfit font-bold text-white mb-2">Analytics Dashboard</h3>
                <p class="text-dark-gray">Track performance across all your social channels in one place</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-neon-purple to-neon-purple-dark flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-outfit font-bold text-white mb-2">Content Management</h3>
                <p class="text-dark-gray">Organize your videos, drafts, and published content in one dashboard</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-neon-purple to-neon-purple-dark flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-outfit font-bold text-white mb-2">Agency Support</h3>
                <p class="text-dark-gray">Get help from our experienced team for campaign collaborations</p>
              </div>
            </div>
          </div>

          <div class="text-center">
            <a
              href="https://app.anyagency.net"
              target="_blank"
              class="inline-block px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-purple-dark text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 neon-glow-hover shadow-lg shadow-neon-purple/50"
            >
              Join as Creator
            </a>
          </div>
        </div>

        <!-- Right: Platform Dashboard Image -->
        <div class="relative">
          <div class="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10">
            <img
              src="/images/platform.dashboard.webp"
              alt="AnyAgency Creator Platform Dashboard"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
