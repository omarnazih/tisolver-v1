import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Industry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
