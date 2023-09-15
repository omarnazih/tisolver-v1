import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'customerComment',
  title: 'Customer Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image', // You may need to adjust this to match your image schema type.
      options: {
        hotspot: true, // Enable hotspot for image cropping if needed.
      },
    }),
  ],
})
