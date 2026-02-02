import type { Service } from '~/types'

export const services: Service[] = [
  {
    id: 'influencer-campaigns',
    title: 'Influencer Campaigns',
    description: 'Full-service campaign management from strategy to execution. We handle everything from creator selection to performance tracking.',
    icon: '🎯',
    features: [
      'Campaign strategy & planning',
      'Creator matching & outreach',
      'Content approval & scheduling',
      'Performance monitoring',
    ],
  },
  {
    id: 'multi-platform-reach',
    title: 'Multi-Platform Reach',
    description: 'Coordinated campaigns across TikTok, YouTube, Telegram, and VKontakte. Maximize your brand exposure with synchronized multi-platform strategies.',
    icon: '🌐',
    features: [
      'Cross-platform coordination',
      'Unified brand messaging',
      'Platform-specific optimization',
      'Audience overlap analysis',
    ],
  },
  {
    id: 'content-strategy',
    title: 'Content Strategy',
    description: 'Creative direction and performance optimization. Our team ensures your message resonates with target audiences while maintaining authenticity.',
    icon: '✨',
    features: [
      'Creative brief development',
      'Content guidelines & review',
      'A/B testing strategies',
      'Trend analysis & insights',
    ],
  },
  {
    id: 'analytics-reporting',
    title: 'Analytics & Reporting',
    description: 'Real-time campaign tracking with detailed ROI analysis. Get transparent insights into your campaign performance with actionable recommendations.',
    icon: '📊',
    features: [
      'Real-time dashboards',
      'Engagement metrics',
      'ROI calculation',
      'Monthly performance reports',
    ],
  },
]
