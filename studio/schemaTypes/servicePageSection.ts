export default {
  name: 'servicePageSection',
  title: 'Service Page Sections',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'display',
      title: 'Display Settings',
    },
  ],
  fields: [
    {
      name: 'serviceName',
      title: 'Service Name',
      type: 'string',
      group: 'content',
      description: 'Name of the service page',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Fragrance Creation', value: 'Fragrance Creation' },
          { title: 'Fragrance Componentry', value: 'Fragrance Componentry' },
          { title: 'Skincare Componentry', value: 'Skincare Componentry' },
          { title: 'Home Fragrance', value: 'Home Fragrance' },
          { title: 'Secondary Packaging', value: 'Secondary Packaging' },
          { title: 'Gift With Purchase', value: 'Gift With Purchase' },
        ],
      },
    },
    {
      name: 'sectionName',
      title: 'Section Name',
      type: 'string',
      group: 'content',
      description: 'Name of the section within this service page',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Section Image',
      type: 'image',
      group: 'content',
      description: 'Image for this section (recommended size: 600x400 pixels)',
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'display',
      description: 'Order in which this section appears on the page (1, 2, 3, etc.)',
      validation: (Rule) => Rule.required().integer().positive(),
    },
  ],
  preview: {
    select: {
      title: 'sectionName',
      subtitle: 'serviceName',
      order: 'order',
      media: 'image',
    },
    prepare(value: { title?: string; subtitle?: string; order?: number; media?: { _type: string; asset?: { _ref: string; _type: string } } }) {
      const { title = '', subtitle = '', order = 0, media } = value;
      return {
        title: title,
        subtitle: `${subtitle} - Section ${order}: ${title}`,
        media: media,
      };
    },
  },
  orderings: [
    {
      title: 'Service & Order',
      name: 'serviceAndOrder',
      by: [
        {field: 'serviceName', direction: 'asc'},
        {field: 'order', direction: 'asc'}
      ]
    },
  ],
}
