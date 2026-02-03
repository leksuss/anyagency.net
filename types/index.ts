export type Platform = 'tiktok' | 'youtube' | 'telegram' | 'vk' | 'all'

export interface Blogger {
  id: string
  name: string
  platform: Exclude<Platform, 'all'>
  followers: string
  avgViews: string
  category: string
  featured?: boolean
  image?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features?: string[]
}

export interface CaseStudy {
  id: string
  client: string
  industry: string
  objective: string
  strategy: string[]
  results: {
    label: string
    value: string
  }[]
  duration: string
  quote?: string
  image?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  social?: {
    linkedin?: string
    twitter?: string
  }
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  budget?: string
  message: string
  agreedToPrivacy: boolean
}

export interface Stat {
  id: string
  label: string
  value: string
  icon: string
  suffix?: string
}

// Legal page types
export interface LegalPage {
  title: string
  lastUpdated: string // ISO format: "2026-02-03"
  description: string
  sections: LegalSection[]
  metadata: {
    keywords: string[]
  }
}

export interface LegalSection {
  id: string // для anchor links
  title: string
  content: string | string[] // один или несколько параграфов
  subsections?: LegalSubsection[]
  list?: LegalList
}

export interface LegalSubsection {
  title?: string
  content: string | string[]
  list?: LegalList
}

export interface LegalList {
  type: 'bullet' | 'numbered'
  items: (string | { text: string; subitems?: string[] })[]
}
