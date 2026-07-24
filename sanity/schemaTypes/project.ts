import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({name: 'startDate', title: 'Start Date', type: 'date', options: {dateFormat: 'MMM YYYY'}}),
    defineField({name: 'endDate', title: 'End Date', type: 'date', options: {dateFormat: 'MMM YYYY'}}),
    defineField({name: 'isCurrent', title: 'Ongoing', type: 'boolean', initialValue: false}),
    defineField({
      name: 'bullets',
      title: 'Bullet Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'tags',
      title: 'Tags / Tech Used',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({name: 'repoUrl', title: 'Repository URL', type: 'url'}),
    defineField({name: 'liveUrl', title: 'Live URL', type: 'url'}),
    defineField({name: 'order', title: 'Order', type: 'number', description: 'Lower numbers appear first'}),
  ],
  orderings: [
    {title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'subtitle'},
  },
})
