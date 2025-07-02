import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroBackgroundImage',
      title: 'Hero Background Image',
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
      name: 'heroLogoImage',
      title: 'Hero Logo Image',
      type: 'image',
      description: 'White logo overlay for hero section',
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
    }),
    
    // CTA Section (below hero)
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      description: 'Main heading with line break',
      initialValue: 'Flawless Fragrances,\nExpertly Crafted',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Contact Us',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string',
      initialValue: '/contact',
      validation: Rule => Rule.required()
    }),
    
    // Client Logos Section
    defineField({
      name: 'clientLogosTitle',
      title: 'Client Logos Title',
      type: 'string',
      initialValue: 'Trusted by Leading Brands',
      validation: Rule => Rule.required()
    }),
    
    // Services Section
    defineField({
      name: 'servicesTitle',
      title: 'Services Section Title',
      type: 'string',
      initialValue: 'Our Services',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'servicesDescription',
      title: 'Services Section Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required()
    }),
    
    // Portfolio Section
    defineField({
      name: 'portfolioTitle',
      title: 'Portfolio Section Title',
      type: 'string',
      initialValue: 'Our Portfolio',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'portfolioDescription',
      title: 'Portfolio Section Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required()
    }),
    
    // Contact CTA Section
    defineField({
      name: 'contactCtaTitle',
      title: 'Contact CTA Title',
      type: 'string',
      initialValue: 'Ready to Start Your Project?',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'contactCtaDescription',
      title: 'Contact CTA Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'contactCtaButtonText',
      title: 'Contact CTA Button Text',
      type: 'string',
      initialValue: 'Get Started',
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
        title: 'Home Page',
      }
    }
  }
})