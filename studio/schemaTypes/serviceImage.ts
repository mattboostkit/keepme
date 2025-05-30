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
          { title: 'Skincare Componentry', value: 'Skincare Componentry' },
          { title: 'Gift With Purchase', value: 'Gift With Purchase' },
          { title: 'Home Fragrance', value: 'Home Fragrance' },
          { title: 'Secondary Packaging', value: 'Secondary Packaging' },
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
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'A brief description of the service for the homepage.',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unique identifier for the service URL (usually auto-generated from title).',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the service appears on the page (e.g., 1, 2, 3). Lower numbers appear first.',
      validation: (Rule: any) => Rule.required().integer().positive(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
