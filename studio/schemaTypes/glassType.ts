import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'glassType',
  title: 'Glass Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'}
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
      ],
      description: 'Rich text content for the glass type card',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the glass type appears',
      validation: Rule => Rule.required().min(0)
    }),
  ],
  preview: {
    select: {
      title: 'title',
      order: 'displayOrder'
    },
    prepare(selection) {
      const {title, order} = selection
      return {
        title: title,
        subtitle: `Order: ${order || 0}`
      }
    }
  }
})