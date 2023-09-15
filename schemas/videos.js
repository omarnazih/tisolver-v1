import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
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
    defineField({
      name: 'videoURL',
      title: 'Video URL',
      type: 'url',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image', // You may need to adjust this to match your image schema type.
      options: {
        hotspot: true, // Enable hotspot for image cropping if needed.
      },
    }),
  ],
})
