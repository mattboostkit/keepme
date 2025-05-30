export default {
  name: 'portfolioItem',
  title: 'Portfolio Items',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Client Name',
      type: 'string',
      description: 'The name of the client',
      validation: Rule => Rule.required()
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
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Client Image',
      type: 'image',
      description: 'An image showcasing the client\'s products (recommended size: 800x600 pixels)',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'features',
      title: 'Product Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The types of products created for this client (e.g., Fragrance Glass, Vials, etc.)',
      options: {
        list: [
          { title: 'Fragrance Glass', value: 'Fragrance Glass' },
          { title: 'Vials', value: 'Vials' },
          { title: 'Caps', value: 'Caps' },
          { title: 'Shields', value: 'Shields' },
          { title: 'Candle Glass', value: 'Candle Glass' },
          { title: 'Candle Ceramics', value: 'Candle Ceramics' },
          { title: 'Secondary Packaging', value: 'Secondary Packaging' }
        ]
      },
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the work done for this client',
      validation: Rule => Rule.required()
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'The order in which to display this client (lower numbers appear first)',
      validation: Rule => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'features',
      media: 'image'
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: Array.isArray(subtitle) ? subtitle.join(', ') : subtitle,
        media
      }
    }
  }
}
