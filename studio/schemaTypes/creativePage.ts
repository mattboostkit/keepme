import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'creativePage',
  title: 'Creative Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main title for the hero section',
      initialValue: 'KeepMe Creative',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 4,
      description: 'Description text for the hero section',
      initialValue: 'This offers both new and existing clients a dedicated solution for premium, high-impact creative output. Delivered through our UK-based Design Studio, this service is designed to support brands with bespoke design and development across all aspects of product and packaging presentation.',
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
    
    // Our Approach Section
    defineField({
      name: 'approachTitle',
      title: 'Our Approach Title',
      type: 'string',
      initialValue: 'Our Approach',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'approachDescription',
      title: 'Our Approach Description',
      type: 'text',
      rows: 4,
      initialValue: 'Every project is shaped around your specific brief, objectives, and timelines. Our paid model means dedicated resources and faster turnaround compared to traditional agencies. From first sketch to final artwork, our approach combines creativity with commercial insight, helping you move from concept to shelf efficiently.',
      validation: Rule => Rule.required()
    }),
    
    // Component Visuals Section
    defineField({
      name: 'componentVisualsTitle',
      title: 'Component Visuals Section Title',
      type: 'string',
      initialValue: 'Primary and Secondary Component Visuals',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'componentVisualsDescription',
      title: 'Component Visuals Section Description',
      type: 'text',
      rows: 2,
      initialValue: 'We help fragrance and lifestyle brands turn concepts into stunning visual realities, ready for internal approval, and final production.',
      validation: Rule => Rule.required()
    }),
    
    // Logo Design Section
    defineField({
      name: 'logoDesignTitle',
      title: 'Logo Design Title',
      type: 'string',
      initialValue: 'Logo Design',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'logoDesignDescription',
      title: 'Logo Design Description',
      type: 'text',
      rows: 4,
      initialValue: 'Your logo is more than a mark, it\'s the first impression of your fragrance brand. At KeepMe Creative, we craft logos that capture the essence of your scent, your story, and your audience.',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'logoDesignSubDescription',
      title: 'Logo Design Sub Description',
      type: 'text',
      rows: 2,
      initialValue: 'Whether you\'re launching a new fragrance house or refreshing an established brand, our UK Design Studio delivers:',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'logoDesignFeatures',
      title: 'Logo Design Features',
      type: 'array',
      of: [{type: 'string'}],
      initialValue: [
        'Sophisticated, fragrance-focused design',
        'Fully bespoke logos',
        'Aligned typography, colour, and brand feel',
        'Specialist design from fragrance experts'
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'logoDesignImage',
      title: 'Logo Design Image',
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
    
    // Brand Guidelines Section
    defineField({
      name: 'brandGuidelinesTitle',
      title: 'Brand Guidelines Title',
      type: 'string',
      initialValue: 'Brand Guidelines',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'brandGuidelinesDescription',
      title: 'Brand Guidelines Description',
      type: 'text',
      rows: 4,
      initialValue: 'Your brand deserves more than a great logo—it needs a visual system that speaks with clarity and confidence across every touchpoint.',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'brandGuidelinesSubDescription',
      title: 'Brand Guidelines Sub Description',
      type: 'text',
      rows: 2,
      initialValue: 'At KeepMe Creative, we develop cohesive, professional brand guidelines tailored specifically for fragrance and lifestyle brands, including:',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'brandGuidelinesFeatures',
      title: 'Brand Guidelines Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Title'},
          {name: 'description', type: 'string', title: 'Description'}
        ]
      }],
      initialValue: [
        {title: 'Typography', description: 'Elegant, legible, and on-brand'},
        {title: 'Colour palettes', description: 'Sophisticated combinations that reflect your identity'},
        {title: 'Logo usage rules', description: 'Scalable, versatile, and crystal-clear'}
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'brandGuidelinesFooter',
      title: 'Brand Guidelines Footer Text',
      type: 'string',
      initialValue: 'We ensure your brand looks and feels seamless everywhere.',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'brandGuidelinesImage',
      title: 'Brand Guidelines Image',
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
    
    // SEO
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Title for search engines',
      initialValue: 'KeepMe Creative | Premium Design Studio for Fragrance Brands',
      validation: Rule => Rule.required().max(60)
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Description for search engines',
      initialValue: 'KeepMe Creative offers premium, high-impact creative output for fragrance brands. Our UK-based Design Studio provides bespoke design and development across all aspects of product and packaging presentation.',
      validation: Rule => Rule.required().max(160)
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
    },
    prepare(selection) {
      return {
        title: 'Creative Page',
        subtitle: selection.title
      }
    }
  }
})