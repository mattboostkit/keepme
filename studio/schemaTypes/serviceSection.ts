import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'serviceSection',
  title: 'Service Section',
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
      description: 'URL anchor for this section (e.g., fragrance-componentry)',
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
      rows: 5,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'learnMoreLink',
      title: 'Learn More Link',
      type: 'string',
      description: 'Full path to the detailed service page (e.g., /services/fragrance-componentry)',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'learnMoreText',
      title: 'Learn More Text',
      type: 'string',
      initialValue: 'Learn More about',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
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
      description: 'Order in which the service appears on the page',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Background color class (e.g., bg-white, bg-brand-pink-light)',
      options: {
        list: [
          {title: 'White', value: 'bg-white'},
          {title: 'Pink Light', value: 'bg-brand-pink-light'}
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      description: 'Position of the image relative to text',
      options: {
        list: [
          {title: 'Right', value: 'right'},
          {title: 'Left', value: 'left'}
        ]
      },
      validation: Rule => Rule.required()
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      order: 'displayOrder',
      media: 'image'
    },
    prepare(selection) {
      const {title, slug, order} = selection
      return {
        title: title,
        subtitle: `${order + 1}. #${slug}`,
        media: selection.media
      }
    }
  }
})