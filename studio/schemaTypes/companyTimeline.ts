import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'companyTimeline',
  title: 'Company Timeline',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'e.g., "2004" or "2005-2008" or "Present"',
      validation: Rule => Rule.required()
    }),
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
      rows: 5,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'additionalContent',
      title: 'Additional Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'}
            ],
          },
        },
      ],
      description: 'Optional additional paragraphs or bullet points'
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this item appears in the timeline',
      validation: Rule => Rule.required().min(0)
    }),
  ],
  preview: {
    select: {
      title: 'year',
      subtitle: 'title',
      order: 'displayOrder'
    },
    prepare(selection) {
      const {title, subtitle, order} = selection
      return {
        title: title,
        subtitle: `${order + 1}. ${subtitle}`
      }
    }
  }
})