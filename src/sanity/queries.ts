import {groq} from 'next-sanity'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  name,
  role,
  tagline,
  summary,
  email,
  githubUrl,
  linkedinUrl,
  "resumeUrl": resumeFile.asset->url
}`

export const experienceQuery = groq`*[_type == "experience"] | order(order asc){
  role,
  company,
  location,
  startDate,
  endDate,
  isCurrent,
  bullets
}`

export const projectsQuery = groq`*[_type == "project"] | order(order asc){
  title,
  subtitle,
  location,
  startDate,
  endDate,
  isCurrent,
  bullets,
  tags,
  repoUrl,
  liveUrl
}`

export const skillGroupsQuery = groq`*[_type == "skillGroup"] | order(order asc){
  category,
  items
}`

export const educationQuery = groq`*[_type == "education"] | order(order asc){
  school,
  degree,
  location,
  startDate,
  endDate
}`
