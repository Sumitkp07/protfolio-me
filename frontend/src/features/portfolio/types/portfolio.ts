export interface Profile {
  name: string
  title: string
  tagline: string
  summary: string
  email: string
  phone: string | null
  location: string
  github_url: string | null
  linkedin_url: string | null
  resume_url: string | null
  years_experience: number
}

export interface Experience {
  id: number
  company: string
  role: string
  location: string
  started_on: string
  ended_on: string | null
  is_current: boolean
  highlights: string[]
}

export interface Project {
  slug: string
  title: string
  category: string
  summary: string
  highlights: string[]
  technologies: string[]
  live_url: string | null
  period: string | null
  is_featured: boolean
}

export interface SkillCategory {
  id: number
  name: string
  skills: string[]
}

export interface Education {
  id: number
  degree: string
  institution: string
  started_on: string
  ended_on: string
  grade: string | null
}

export interface Portfolio {
  profile: Profile | null
  experiences: Experience[]
  projects: Project[]
  skill_categories: SkillCategory[]
  educations: Education[]
}
