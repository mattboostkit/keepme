export default {
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      description: 'The team member\'s full name',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      description: 'The team member\'s job title or position',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      description: 'A professional photo of the team member (recommended size: 600x600 pixels)',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      description: 'The URL to the team member\'s LinkedIn profile (optional)',
    },

    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'The order in which to display this team member (lower numbers appear first)',
      validation: Rule => Rule.required().min(1)
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image'
    }
  }
}
