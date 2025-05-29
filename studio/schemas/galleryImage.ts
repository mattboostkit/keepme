import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A descriptive title for the image (e.g., for internal reference or a caption).',
    }),
    defineField({
      name: 'imageFile',
      title: 'Image File',
      type: 'image',
      options: {
        hotspot: true, // Enables hotspot for better cropping
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alternative Text',
      type: 'string',
      description: 'Important for SEO and accessibility. Describe the image content.',
      validation: (Rule: any) => Rule.required(),
    }),
    // Optional: Add more fields like tags, categories, etc.
    // defineField({
    //   name: 'tags',
    //   title: 'Tags',
    //   type: 'array',
    //   of: [{type: 'string'}],
    //   options: {
    //     layout: 'tags',
    //   },
    // }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'imageFile',
    },
  },
})
