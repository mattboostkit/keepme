import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'toolsPage',
  title: 'Tools Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main title for the hero section',
      initialValue: 'Our Tools',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      description: 'Main description text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
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
      name: 'whyToolsTitle',
      title: 'Why Tools Title',
      type: 'string',
      initialValue: 'Why Tools?',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'whyToolsDescription',
      title: 'Why Tools Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    
    // Tool Suite Section
    defineField({
      name: 'toolSuiteTitle',
      title: 'Tool Suite Title',
      type: 'string',
      initialValue: 'A Growing Suite of Tools for Every Stage',
      validation: Rule => Rule.required()
    }),
    
    // SEO
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Title for search engines',
      validation: Rule => Rule.required().max(60)
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Description for search engines',
      validation: Rule => Rule.required().max(160)
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Tools Page',
      }
    }
  }
})