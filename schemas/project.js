import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image', // You may need to adjust this to match your image schema type.
      options: {
        hotspot: true, // Enable hotspot for image cropping if needed.
      },
    }),
    defineField({
      name: 'subImage',
      title: 'Sub Image',
      type: 'image', // You may need to adjust this to match your image schema type.
      options: {
        hotspot: true, // Enable hotspot for image cropping if needed.
      },
    }),
    defineField({
      name: 'viewImage',
      title: 'View Image',
      type: 'image', // You may need to adjust this to match your image schema type.
      options: {
        hotspot: true, // Enable hotspot for image cropping if needed.
      },
    }),
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'projectCategories',
      title: 'Project Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'projectCategory'}}],
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
    }),
    defineField({
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image', // You may need to adjust this to match your image schema type.
          options: {
            hotspot: true, // Enable hotspot for image cropping if needed.
          },
        },
      ],
    }),
    defineField({
      name: 'numberOfScreens',
      title: 'Number of Screens',
      type: 'number', // Assuming the number of screens is a numeric value.
    }),
  ],
})
