import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'manufacturingStep',
  title: 'Manufacturing Step',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'bulletPoints',
      title: 'Bullet Points',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Optional bullet points for additional details'
    }),
    defineField({
      name: 'image',
      title: 'Step Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the step appears in the timeline',
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
        subtitle: `Step ${order + 1}`,
        media: media
      }
    }
  }
})