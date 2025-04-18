export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The testimonial quote from the client',
      validation: Rule => Rule.required()
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the person giving the testimonial',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      description: 'The job title of the person',
      validation: Rule => Rule.required()
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'The company the person works for',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'A photo of the person (recommended size: 80x80 pixels)',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'The order in which to display this testimonial (lower numbers appear first)',
      validation: Rule => Rule.required().min(1)
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'image'
    }
  }
}
