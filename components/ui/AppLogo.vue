<template>
  <svg
    viewBox="0 0 48 48"
    class="logo-svg"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#A855F7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#06B6D4;stop-opacity:1" />
      </linearGradient>
    </defs>

    <!-- Central hub (agency) -->
    <circle cx="24" cy="24" r="6" fill="url(#logo-gradient)" />

    <!-- Connection lines -->
    <line x1="24" y1="24" x2="10" y2="10" stroke="url(#logo-gradient)" stroke-width="2" opacity="0.6" />
    <line x1="24" y1="24" x2="38" y2="10" stroke="url(#logo-gradient)" stroke-width="2" opacity="0.6" />
    <line x1="24" y1="24" x2="10" y2="38" stroke="url(#logo-gradient)" stroke-width="2" opacity="0.6" />
    <line x1="24" y1="24" x2="38" y2="38" stroke="url(#logo-gradient)" stroke-width="2" opacity="0.6" />
    <line x1="24" y1="24" x2="6" y2="24" stroke="url(#logo-gradient)" stroke-width="2" opacity="0.6" />
    <line x1="24" y1="24" x2="42" y2="24" stroke="url(#logo-gradient)" stroke-width="2" opacity="0.6" />

    <!-- Outer nodes (influencers) -->
    <circle cx="10" cy="10" r="3" fill="#A855F7" />
    <circle cx="38" cy="10" r="3" fill="#06B6D4" />
    <circle cx="10" cy="38" r="3" fill="#EC4899" />
    <circle cx="38" cy="38" r="3" fill="#A855F7" />
    <circle cx="6" cy="24" r="3" fill="#06B6D4" />
    <circle cx="42" cy="24" r="3" fill="#EC4899" />

    <!-- Accent ring around center -->
    <circle cx="24" cy="24" r="10" stroke="url(#logo-gradient)" stroke-width="1.5" fill="none" opacity="0.4" />
  </svg>
</template>

<style scoped>
.logo-svg {
  height: 36px;
  width: auto;
  transition: all 0.3s ease;
}

.logo-svg:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.5));
}

@media (max-width: 768px) {
  .logo-svg {
    height: 32px;
  }
}
</style>
