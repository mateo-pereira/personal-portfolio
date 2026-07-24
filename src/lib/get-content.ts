import {client} from '@/sanity/client'
import {isSanityConfigured} from '@/sanity/env'
import {educationQuery, experienceQuery, projectsQuery, siteSettingsQuery, skillGroupsQuery} from '@/sanity/queries'
import {
  fallbackEducation,
  fallbackExperience,
  fallbackProjects,
  fallbackSiteSettings,
  fallbackSkillGroups,
} from './fallback-content'
import type {EducationItem, ExperienceItem, ProjectItem, SiteSettings, SkillGroup} from './types'

async function fetchOrFallback<T>(query: string, fallback: T): Promise<T> {
  if (!isSanityConfigured) return fallback
  try {
    const result = await client.fetch<T>(query)
    if (!result || (Array.isArray(result) && result.length === 0)) return fallback
    return result
  } catch {
    return fallback
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return fetchOrFallback(siteSettingsQuery, fallbackSiteSettings)
}

export async function getExperience(): Promise<ExperienceItem[]> {
  return fetchOrFallback(experienceQuery, fallbackExperience)
}

export async function getProjects(): Promise<ProjectItem[]> {
  return fetchOrFallback(projectsQuery, fallbackProjects)
}

export async function getSkillGroups(): Promise<SkillGroup[]> {
  return fetchOrFallback(skillGroupsQuery, fallbackSkillGroups)
}

export async function getEducation(): Promise<EducationItem[]> {
  return fetchOrFallback(educationQuery, fallbackEducation)
}
