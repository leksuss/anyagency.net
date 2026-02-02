# AnyAgency - Influencer Marketing Website

A bold, edgy marketing agency website for AnyAgency - specializing in multi-platform influencer campaigns across TikTok, YouTube, Telegram, and VKontakte.

## Features

- 🎨 **Bold Design**: Dark theme with neon accents (purple, cyan, pink)
- 🚀 **Modern Stack**: Built with Nuxt 3, Vue 3, TypeScript, and Tailwind CSS
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ✨ **Smooth Animations**: GSAP-powered scroll animations and micro-interactions
- 🎯 **100+ Creators**: Showcase of exclusive influencers across multiple platforms
- 📊 **Case Studies**: Real campaign results and success stories
- 📧 **Contact Form**: Integrated email submission with nodemailer
- 🌐 **Multi-Platform**: TikTok, YouTube, Telegram, and VK integration

## Project Structure

```
anyagency.net/
├── components/          # Vue components
│   ├── layout/         # Header, Footer
│   ├── sections/       # Page sections (Hero, Stats, Services, etc.)
│   ├── ui/             # Reusable UI components
│   └── effects/        # Animation effects
├── composables/        # Vue composables (hooks)
├── data/               # Static data (bloggers, services, case studies)
├── pages/              # Nuxt pages
├── server/             # Server API routes
│   └── api/           # API endpoints
├── assets/             # CSS, fonts, images
├── public/             # Static assets
└── types/              # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd anyagency.net
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your SMTP settings in `.env` for the contact form:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=hello@anyagency.net
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Configuration

### Adding/Editing Bloggers

Edit `data/bloggers.ts` to add or modify influencer profiles.

### Adding Services

Edit `data/services.ts` to customize service offerings.

### Adding Case Studies

Edit `data/caseStudies.ts` to add success stories.

### Customizing Theme

Edit `tailwind.config.ts` to modify colors, fonts, and animations.

## Tech Stack

- **Framework**: Nuxt 3
- **UI Library**: Vue 3 with Composition API
- **Styling**: Tailwind CSS
- **Animations**: GSAP
- **TypeScript**: Full type safety
- **Utilities**: VueUse
- **Fonts**: Google Fonts (Outfit, DM Sans, Bebas Neue)
- **Email**: Nodemailer

## Features Breakdown

### Hero Section
- Full-screen animated gradient background
- Platform badges (TikTok, YouTube, Telegram, VK)
- CTA button with glow animation

### Stats Section
- Animated counters (200M+ reach, 100+ creators, etc.)
- Scroll-triggered animations

### Services Section
- 4 service cards with hover effects
- Gradient borders and glow effects

### Bloggers Section
- Platform filtering (All/TikTok/YouTube/Telegram/VK)
- Featured creators showcase
- 40+ influencer profiles

### Case Studies Section
- 3 detailed success stories
- Results metrics and client quotes

### About Section
- Agency description
- Key differentiators
- Team member profiles

### Contact Section
- Contact information with icons
- Google Maps embed
- CTA to open contact modal
- Social media links

### Contact Modal
- Full-featured contact form
- Real-time validation
- Success/error states
- Email submission via API

## Deployment

### Vercel/Netlify
```bash
npm run build
```

Upload the `.output` directory.

### Custom Server
```bash
npm run build
node .output/server/index.mjs
```

## Performance

- Lighthouse Score: 90+ (Performance)
- Optimized images with lazy loading
- Code splitting for components
- Minimal JavaScript bundle
- CSS-first animations where possible

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android)

## License

Private - All rights reserved © 2026 AnyAgency

## Contact

For questions or support, contact: hello@anyagency.net
