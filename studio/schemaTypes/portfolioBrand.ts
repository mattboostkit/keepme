export default {
  name: 'portfolioBrand',
  title: 'Portfolio Brands',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      description: 'The name of the brand (e.g., Roja Parfums)',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A unique identifier used in URLs',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Brand Image',
      type: 'image',
      description: 'An image showcasing the brand\'s products (recommended size: 800x600 pixels)',
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
      description: 'The types of products created for this brand (e.g., Fragrance Glass, Vials, etc.)',
      options: {
        list: [
          { title: 'Fragrance Glass', value: 'Fragrance Glass' },
          { title: 'Vials', value: 'Vials' },
          { title: 'Caps', value: 'Caps' },
          { title: 'Shields', value: 'Shields' },
          { title: 'Candle Glass', value: 'Candle Glass' },
          { title: 'Candle Ceramics', value: 'Candle Ceramics' },
          { title: 'Luxury Packaging', value: 'Luxury Packaging' }
        ]
      },
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the work done for this brand',
      validation: Rule => Rule.required()
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'The order in which to display this brand (lower numbers appear first)',
      validation: Rule => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      title: 'name',
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
