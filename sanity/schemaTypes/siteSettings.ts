import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Full Name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'role', title: 'Role / Title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
    defineField({name: 'summary', title: 'Summary', type: 'text'}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'githubUrl', title: 'GitHub URL', type: 'url'}),
    defineField({name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url'}),
    defineField({name: 'resumeFile', title: 'Resume (PDF)', type: 'file'}),
  ],
})
