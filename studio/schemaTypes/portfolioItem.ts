export default {
  name: 'portfolioItem',
  title: 'Portfolio Items',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Portfolio Image',
      type: 'image',
      description: 'Upload portfolio image (recommended size: 800x600 pixels or larger)',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Client Name (Optional)',
      type: 'string',
      description: 'The name of the client - leave blank if not needed'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A unique identifier used in URLs',
      options: {
        source: 'title',
        maxLength: 96,
      }
    },
    {
      name: 'features',
      title: 'Product Features (Optional)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The types of products created for this client',
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
      }
    },
    {
      name: 'description',
      title: 'Description (Optional)',
      type: 'text',
      description: 'A brief description of the work done for this client'
    },
    {
      name: 'displayOrder',
      title: 'Display Order (Optional)',
      type: 'number',
      description: 'The order in which to display this image (lower numbers appear first)',
      initialValue: 100
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
        title: title || 'Portfolio Image',
        subtitle: Array.isArray(subtitle) ? subtitle.join(', ') : subtitle || '',
        media
      }
    }
  }
}
