export default {
  name: 'logo',
  title: 'Client Logos',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Company Name',
      type: 'string',
      description: 'The name of the company',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Logo Image',
      type: 'image',
      description: 'The company logo (preferably with transparent background)',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      title: 'Website URL',
      type: 'url',
      description: 'The company website URL (optional)',
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'The order in which to display this logo (lower numbers appear first)',
      validation: Rule => Rule.required().min(1)
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
