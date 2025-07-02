import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'companyValue',
  title: 'Company Value',
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
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the value appears',
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