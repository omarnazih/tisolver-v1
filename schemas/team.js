import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
            }),
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: (Rule) => Rule.min(0).max(5),
            }),
            defineField({
              name: 'icon1',
              title: 'Icon 1',
              type: 'image', // Adjust this to your image schema type if needed
              options: {
                hotspot: true, // Enable hotspot for image cropping if needed.
              },
            }),
            defineField({
              name: 'icon2',
              title: 'Icon 2',
              type: 'image', // Adjust this to your image schema type if needed
              options: {
                hotspot: true, // Enable hotspot for image cropping if needed.
              },
            }),
            defineField({
              name: 'icon3',
              title: 'Icon 3',
              type: 'image', // Adjust this to your image schema type if needed
              options: {
                hotspot: true, // Enable hotspot for image cropping if needed.
              },
            }),
            defineField({
              name: 'bio',
              title: 'Bio',
              type: 'text',
            }),
            defineField({
              name: 'skills',
              title: 'Skills',
              type: 'array',
              of: [{type: 'string'}],
            }),
          ],
        },
      ],
    }),
  ],
})
