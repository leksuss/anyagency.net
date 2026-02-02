import type { CaseStudy } from '~/types'

export const caseStudies: CaseStudy[] = [
  {
    id: 'novatech-launch',
    client: 'NovaTech',
    industry: 'Consumer Electronics',
    objective: 'Launch wireless earbuds to Gen-Z market',
    strategy: [
      '15 TikTok creators with unboxing & lifestyle content',
      '5 YouTube tech reviewers with in-depth reviews',
      'Coordinated launch day across all platforms',
      'User-generated content campaign with hashtag #NovaSoundWave',
    ],
    results: [
      { label: 'Total Views', value: '45M' },
      { label: 'Website Traffic', value: '180K' },
      { label: 'Units Sold', value: '12K' },
      { label: 'ROI', value: '480%' },
    ],
    duration: '2 weeks',
    quote: "AnyAgency exceeded our expectations. The campaign generated massive awareness and drove real sales. We're already planning our next collaboration.",
  },
  {
    id: 'urbanwear-awareness',
    client: 'UrbanWear',
    industry: 'Fashion & Apparel',
    objective: 'Increase brand awareness in Kazakhstan & Russia',
    strategy: [
      '20 TikTok fashion influencers showcasing collections',
      '8 YouTube lookbook videos and styling guides',
      '5 VK posts with exclusive discount codes',
      'Instagram story takeovers from key creators',
    ],
    results: [
      { label: 'Impressions', value: '65M' },
      { label: 'Engagement Rate', value: '8.5%' },
      { label: 'New Followers', value: '250K' },
      { label: 'Store Traffic', value: '+340%' },
    ],
    duration: '1 month',
    quote: 'The multi-platform approach was genius. We saw engagement from audiences we never reached before. Sales went through the roof!',
  },
  {
    id: 'gameforce-installs',
    client: 'GameForce Mobile',
    industry: 'Gaming & Apps',
    objective: 'Drive mobile app installs',
    strategy: [
      '10 gaming YouTubers with gameplay walkthroughs',
      '25 TikTok creators with short-form gameplay clips',
      '5 Telegram channels with exclusive in-game bonuses',
      'Influencer tournament with live streams',
    ],
    results: [
      { label: 'App Installs', value: '3.2M' },
      { label: 'Active Users', value: '850K' },
      { label: 'Cost Per Install', value: '$0.45' },
      { label: 'Retention Rate', value: '42%' },
    ],
    duration: '3 weeks',
    quote: "Working with AnyAgency transformed our user acquisition. Their gaming influencer network is unmatched, and the results speak for themselves.",
  },
]
