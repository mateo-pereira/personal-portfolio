import {defineField, defineType} from 'sanity'

export const education = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({name: 'school', title: 'School', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'degree', title: 'Degree', type: 'string'}),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({name: 'startDate', title: 'Start Date', type: 'date', options: {dateFormat: 'MMM YYYY'}}),
    defineField({name: 'endDate', title: 'End Date', type: 'date', options: {dateFormat: 'MMM YYYY'}}),
    defineField({name: 'order', title: 'Order', type: 'number'}),
  ],
  preview: {
    select: {title: 'school', subtitle: 'degree'},
  },
})
