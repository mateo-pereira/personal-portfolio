export interface SiteSettings {
  name: string
  role: string
  tagline?: string
  summary?: string
  email?: string
  githubUrl?: string
  linkedinUrl?: string
  resumeUrl?: string
}

export interface ExperienceItem {
  role: string
  company: string
  location?: string
  startDate?: string
  endDate?: string
  isCurrent?: boolean
  bullets?: string[]
}

export interface ProjectItem {
  title: string
  subtitle?: string
  location?: string
  startDate?: string
  endDate?: string
  isCurrent?: boolean
  bullets?: string[]
  tags?: string[]
  repoUrl?: string
  liveUrl?: string
}

export interface SkillGroup {
  category: string
  items?: string[]
}

export interface EducationItem {
  school: string
  degree?: string
  location?: string
  startDate?: string
  endDate?: string
}
