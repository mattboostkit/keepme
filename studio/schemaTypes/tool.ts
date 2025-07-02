import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tool',
  title: 'Tool',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL path for the tool (e.g., fragrance-calculator)',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., FlaskConical, Settings)',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      description: 'Call to action text',
      initialValue: 'Explore',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the tool appears',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether the tool is currently available',
      initialValue: true
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      order: 'displayOrder',
      active: 'isActive'
    },
    prepare(selection) {
      const {title, slug, order, active} = selection
      return {
        title: title,
        subtitle: `${order + 1}. /tools/${slug} ${active ? '' : '(Inactive)'}`
      }
    }
  }
})