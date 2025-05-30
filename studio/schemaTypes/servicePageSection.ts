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
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Section Image',
      type: 'image',
      group: 'content',
      description: 'Image for this section (recommended size: 500x500 pixels)',
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
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'display',
      description: 'Order in which this section appears on the page (1, 2, 3, etc.)',
      validation: (Rule: any) => Rule.required().integer().positive(),
    },
  ],
  preview: {
    select: {
      title: 'sectionName',
      subtitle: 'serviceName',
      order: 'order',
      media: 'image',
    },
    prepare(value: Record<string, any>) {
      const title = value.title as string;
      const subtitle = value.subtitle as string;
      const order = value.order as number;
      const media = value.media; // Typically 'any' or a specific Sanity image type
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
