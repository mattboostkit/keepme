import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category for organizing FAQs',
      options: {
        list: [
          {title: 'General', value: 'general'},
          {title: 'Services', value: 'services'},
          {title: 'Production', value: 'production'},
          {title: 'Shipping', value: 'shipping'},
          {title: 'Compliance', value: 'compliance'}
        ]
      },
      initialValue: 'general',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the FAQ appears',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this FAQ is currently displayed',
      initialValue: true
    }),
  ],
  preview: {
    select: {
      title: 'question',
      category: 'category',
      order: 'displayOrder',
      active: 'isActive'
    },
    prepare(selection) {
      const {title, category, order, active} = selection
      return {
        title: title,
        subtitle: `${order + 1}. ${category} ${active ? '' : '(Inactive)'}`
      }
    }
  }
})