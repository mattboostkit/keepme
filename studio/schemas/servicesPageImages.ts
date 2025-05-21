import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'servicesPageImages',
  title: 'Services Page Images',
  type: 'document',
  // Singleton document configuration
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title (for reference)',
      type: 'string',
      initialValue: 'Services Page Image Configuration',
      readOnly: true,
    }),
    defineField({
      name: 'mainOurServicesImage',
      title: 'Main "Our Services" Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping and focal point selection
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for SEO and accessibility.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'fragranceCreationImage',
      title: 'Fragrance Creation Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'fragranceComponentryImage',
      title: 'Fragrance Componentry Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'skincareComponentryImage',
      title: 'Skincare Componentry Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'homeFragranceImage',
      title: 'Home Fragrance Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'luxuryPackagingImage',
      title: 'Luxury Packaging Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'giftWithPurchaseImage',
      title: 'Gift With Purchase Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
      media: 'mainOurServicesImage', // Show main image in preview
    },
  },
})
