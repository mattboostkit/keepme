export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the service',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A unique identifier used in URLs',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Name of the Lucide icon to use (e.g., "Droplets", "GlassWater", "Home", etc.)',
    },
    {
      name: 'image',
      title: 'Service Image',
      type: 'image',
      description: 'Image representing this service',
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
      description: 'Brief description for cards (1-2 sentences)',
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full description of the service',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this service (lower numbers appear first)',
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
