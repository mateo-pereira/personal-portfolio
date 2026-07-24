import {defineField, defineType} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({name: 'role', title: 'Role', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'company', title: 'Company', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({name: 'startDate', title: 'Start Date', type: 'date', options: {dateFormat: 'MMM YYYY'}}),
    defineField({name: 'endDate', title: 'End Date', type: 'date', options: {dateFormat: 'MMM YYYY'}}),
    defineField({name: 'isCurrent', title: 'Current Position', type: 'boolean', initialValue: false}),
    defineField({
      name: 'bullets',
      title: 'Bullet Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'order', title: 'Order', type: 'number', description: 'Lower numbers appear first'}),
  ],
  orderings: [
    {title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'role', subtitle: 'company'},
  },
})
