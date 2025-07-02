import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'componentVisual',
  title: 'Component Visual',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the visual appears in the carousel',
      validation: Rule => Rule.required().min(0)
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      order: 'displayOrder'
    },
    prepare(selection) {
      const {title, media, order} = selection
      return {
        title: title,
        subtitle: `Order: ${order || 0}`,
        media: media
      }
    }
  }
})