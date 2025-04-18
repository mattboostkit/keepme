export default {
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title for the About section (e.g., "About KeepMe")'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Text content for the About section'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true // Enables the hotspot functionality for responsive cropping
      },
      description: 'Image for the About section'
    },
    {
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
      description: 'Number of years of experience to display in the badge'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}
