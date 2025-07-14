import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Our Services',
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
      initialValue: 'Full-Service Solutions',
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
      name: 'heroBadge1Title',
      title: 'Hero Badge 1 Title',
      type: 'string',
      initialValue: 'Full Service',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroBadge1Subtitle',
      title: 'Hero Badge 1 Subtitle',
      type: 'string',
      initialValue: 'Comprehensive Solutions',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroBadge2Title',
      title: 'Hero Badge 2 Title',
      type: 'string',
      initialValue: 'Global Reach',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroBadge2Subtitle',
      title: 'Hero Badge 2 Subtitle',
      type: 'string',
      initialValue: 'Worldwide Delivery',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainOurServicesImage',
      title: 'Main "Our Services" Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
        },
      ],
      description: 'Main hero image for the Our Services page',
    }),
    
    // Service Categories Section
    defineField({
      name: 'serviceCategoriesTitle',
      title: 'Service Categories Title',
      type: 'string',
      initialValue: 'Our Service Categories',
      validation: Rule => Rule.required()
    }),
    
    // CTA Section
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      initialValue: 'Ready to Bring Your Fragrance Vision to Life?',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Get in Touch',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string',
      initialValue: '/contact',
      validation: Rule => Rule.required()
    }),
    
    // FAQ Section
    defineField({
      name: 'faqTitle',
      title: 'FAQ Title',
      type: 'string',
      initialValue: 'Frequently Asked Questions',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'faqSubtitle',
      title: 'FAQ Subtitle',
      type: 'string',
      initialValue: 'Find answers to common questions about our fragrance services',
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
        title: 'Services Page',
      }
    }
  }
})