import {defineField, defineType} from 'sanity'

export const skillGroup = defineType({
  name: 'skillGroup',
  title: 'Skill Group',
  type: 'document',
  fields: [
    defineField({name: 'category', title: 'Category', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'order', title: 'Order', type: 'number', description: 'Lower numbers appear first'}),
  ],
  orderings: [
    {title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'category'},
  },
})
