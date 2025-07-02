import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main title for the hero section',
      initialValue: 'About KeepMe',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 5,
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
      name: 'heroBadge1Text',
      title: 'Hero Badge 1 Text',
      type: 'string',
      initialValue: 'Since 2004',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroBadge1Subtext',
      title: 'Hero Badge 1 Subtext',
      type: 'string',
      initialValue: 'Crafting Excellence',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroBadge2Text',
      title: 'Hero Badge 2 Text',
      type: 'string',
      initialValue: '5M+ Units',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroBadge2Subtext',
      title: 'Hero Badge 2 Subtext',
      type: 'string',
      initialValue: 'Produced Per Annum',
      validation: Rule => Rule.required()
    }),
    
    // Mission Section
    defineField({
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'string',
      initialValue: 'Our Mission',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'missionDescription',
      title: 'Mission Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    
    // Values Section
    defineField({
      name: 'valuesTitle',
      title: 'Values Section Title',
      type: 'string',
      initialValue: 'Our Values',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'valuesSubtitle',
      title: 'Values Section Subtitle',
      type: 'string',
      initialValue: 'The principles that guide our work and relationships',
      validation: Rule => Rule.required()
    }),
    
    // Journey Section
    defineField({
      name: 'journeyTitle',
      title: 'Journey Section Title',
      type: 'string',
      initialValue: 'Our Journey',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'journeySubtitle',
      title: 'Journey Section Subtitle',
      type: 'string',
      initialValue: 'How KeepMe Lifestyle established itself as a key supplier in the fragrance and lifestyle sector',
      validation: Rule => Rule.required()
    }),
    
    // Glass Manufacturer Section
    defineField({
      name: 'glassManufacturerTitle',
      title: 'Glass Manufacturer Title',
      type: 'string',
      initialValue: 'Glass Manufacturer for the Fragrance and Lifestyle sector',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'glassManufacturerDescription1',
      title: 'Glass Manufacturer Description 1',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'glassManufacturerDescription2',
      title: 'Glass Manufacturer Description 2',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'glassManufacturerImage',
      title: 'Glass Manufacturer Image',
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
      name: 'glassManufacturerCtaText',
      title: 'Glass Manufacturer CTA Text',
      type: 'string',
      initialValue: 'Visit KeepMe Glass',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'glassManufacturerCtaUrl',
      title: 'Glass Manufacturer CTA URL',
      type: 'url',
      initialValue: 'https://keepmeglass.co.uk/',
      validation: Rule => Rule.required()
    }),
    
    // Contact CTA Section
    defineField({
      name: 'ctaTitle',
      title: 'Contact CTA Title',
      type: 'string',
      initialValue: 'Contact Us',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Contact CTA Description',
      type: 'string',
      initialValue: 'Get in touch to discuss your project requirements',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Contact CTA Button Text',
      type: 'string',
      initialValue: 'Contact Us',
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
        title: 'About Page',
      }
    }
  }
})