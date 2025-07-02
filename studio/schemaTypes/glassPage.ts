import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'glassPage',
  title: 'Glass Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main title for the hero section',
      initialValue: 'Premium Glass Solutions',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 4,
      description: 'Main description text',
      initialValue: 'We create custom-designed glass components that define and elevate your fragrance brand.  With a deep understanding of the fragrance industry\'s aesthetic and functional demands, we deliver exceptional quality, refined detail, and timeless craftsmanship—transforming glass into a powerful expression of identity.',
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
      name: 'expertiseTitle',
      title: 'Expertise Box Title',
      type: 'string',
      initialValue: 'Expert Glass Finishing',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'expertisePoints',
      title: 'Expertise Bullet Points',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroBadge1Text',
      title: 'Hero Badge 1 Text',
      type: 'string',
      initialValue: '20+ Years',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroBadge1Subtext',
      title: 'Hero Badge 1 Subtext',
      type: 'string',
      initialValue: 'Glass Expertise',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroBadge2Text',
      title: 'Hero Badge 2 Text',
      type: 'string',
      initialValue: 'Premium Quality',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroBadge2Subtext',
      title: 'Hero Badge 2 Subtext',
      type: 'string',
      initialValue: 'Luxury Materials',
      validation: Rule => Rule.required()
    }),
    
    // Glass Types Section
    defineField({
      name: 'glassTypesTitle',
      title: 'Glass Types Section Title',
      type: 'string',
      initialValue: 'Premium Glass Decoration',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'glassTypesDescription',
      title: 'Glass Types Section Description',
      type: 'text',
      rows: 2,
      initialValue: 'We offer a variety of high-quality glass finishes to suit your specific fragrance requirements',
      validation: Rule => Rule.required()
    }),
    
    // Manufacturing Process Section
    defineField({
      name: 'processTitle',
      title: 'Process Section Title',
      type: 'string',
      initialValue: 'Our Glass Manufacturing Process',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'processDescription',
      title: 'Process Section Description',
      type: 'text',
      rows: 2,
      initialValue: 'From raw materials to finished products, our meticulous process ensures exceptional quality',
      validation: Rule => Rule.required()
    }),
    
    // Custom Solutions Section
    defineField({
      name: 'customSolutionsTitle',
      title: 'Custom Solutions Title',
      type: 'string',
      initialValue: 'Custom Glass Solutions',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'customSolutionsDescription',
      title: 'Custom Solutions Description',
      type: 'text',
      rows: 3,
      initialValue: 'Beyond our standard offerings, we specialise in creating bespoke glass components tailored to your specific vision and requirements.',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'customSolutionsFeatures',
      title: 'Custom Solutions Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Feature Title',
            validation: Rule => Rule.required()
          },
          {
            name: 'description',
            type: 'string',
            title: 'Feature Description',
            validation: Rule => Rule.required()
          }
        ]
      }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'customSolutionsCta',
      title: 'Custom Solutions CTA Text',
      type: 'string',
      initialValue: 'Schedule a Consultation',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'customSolutionsImages',
      title: 'Custom Solutions Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
          }
        ]
      }],
      validation: Rule => Rule.required().min(4).max(4)
    }),
    
    // CTA Section
    defineField({
      name: 'ctaTitle',
      title: 'CTA Section Title',
      type: 'string',
      initialValue: 'Elevate Your Fragrance with Premium Glass',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Section Description',
      type: 'text',
      rows: 2,
      initialValue: 'Contact our glass specialists today to discover how our exceptional glass components can enhance your fragrance products.',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
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
        title: 'Glass Page',
      }
    }
  }
})