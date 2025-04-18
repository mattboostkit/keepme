export default {
  name: 'serviceImage',
  title: 'Service Images',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Name',
      type: 'string',
      description: 'Name of the service',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          { title: 'Fragrance Creation', value: 'Fragrance Creation' },
          { title: 'Fragrance Componentry', value: 'Fragrance Componentry' },
          { title: 'Cosmetic Componentry', value: 'Cosmetic Componentry' },
          { title: 'Home Fragrance', value: 'Home Fragrance' },
          { title: 'Luxury Packaging', value: 'Luxury Packaging' },
          { title: 'Gifts With Purchase', value: 'Gifts With Purchase' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Service Image',
      type: 'image',
      description: 'Image for this service (recommended size: 600x400 pixels)',
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
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
