export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A title for internal reference',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Is this hero section currently active?',
      initialValue: false,
    },
    {
      name: 'heroImages',
      title: 'Hero Images',
      type: 'array',
      of: [
        {
          type: 'image',
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
            {
              name: 'position',
              title: 'Position',
              type: 'string',
              options: {
                list: [
                  { title: 'Top', value: 'top' },
                  { title: 'Bottom', value: 'bottom' },
                ],
              },
              description: 'Position of the image in the hero section',
            }
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().min(1).max(2),
      description: 'Upload 1-2 images for the hero section. Specify position for each image.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      active: 'active',
      media: 'heroImages.0', // Assuming heroImages is an array and we take the first
    },
    prepare(value: Record<string, any>) {
      const title = value.title as string;
      const active = value.active as boolean;
      const media = value.media; // Or value.media as SanityImageType if defined
      return {
        title,
        subtitle: active ? '✅ Active' : '❌ Inactive',
        media,
      };
    },
  },
}
