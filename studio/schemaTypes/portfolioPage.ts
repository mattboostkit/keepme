import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioPage',
  title: 'Portfolio Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Our Portfolio',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroBoxTitle',
      title: 'Hero Box Title',
      type: 'string',
      initialValue: 'Client Partnerships',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroBoxDescription',
      title: 'Hero Box Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroBadgeNumber',
      title: 'Hero Badge Number',
      type: 'string',
      initialValue: 'Over 100 Clients',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroBadgeText',
      title: 'Hero Badge Text',
      type: 'string',
      initialValue: 'Trusted Partnerships',
      validation: Rule => Rule.required()
    }),
    
    // Portfolio Brands Section
    defineField({
      name: 'brandsTitle',
      title: 'Brands Section Title',
      type: 'string',
      initialValue: 'Our Clients',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'brandsDescription',
      title: 'Brands Section Description',
      type: 'text',
      rows: 3,
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
        title: 'Portfolio Page',
      }
    }
  }
})