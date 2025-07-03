import {Rule} from 'sanity'

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
      validation: (Rule: Rule) => Rule.required()
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
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Brand Image',
      type: 'image',
      description: 'An image showcasing the brand\'s products (recommended size: 800x600 pixels)',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required()
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
          { title: 'Secondary Packaging', value: 'Secondary Packaging' }
        ]
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the work done for this brand'
    },
    {
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      description: 'The brand\'s logo (recommended size: 320x160 pixels)',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'website',
      title: 'Website URL',
      type: 'url',
      description: 'The brand\'s official website URL (e.g., https://rojaparfums.com)'
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          }
        }
      ],
      description: 'Gallery images showcasing the brand\'s products (recommended: 4-8 images)'
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'The order in which to display this brand (lower numbers appear first)',
      validation: (Rule: Rule) => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'features',
      media: 'image'
    },
    prepare(value: { title?: string; subtitle?: string[]; media?: { _type: string; asset?: { _ref: string; _type: string } } }) {
      const { title = '', subtitle = [], media } = value;
      return {
        title,
        subtitle: Array.isArray(subtitle) ? subtitle.join(', ') : subtitle,
        media
      }
    }
  }
}
