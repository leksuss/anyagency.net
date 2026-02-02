import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#A855F7',
        'neon-purple-dark': '#7C3AED',
        'neon-cyan': '#06B6D4',
        'neon-pink': '#EC4899',
        'dark-bg': '#0A0A0A',
        'dark-charcoal': '#1A1A1A',
        'dark-gray': '#A3A3A3',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.3)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config
