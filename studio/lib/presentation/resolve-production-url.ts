import {defineLocations} from 'sanity/presentation'

export default defineLocations({
  // Map blog posts to frontend routes
  post: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    resolve: (doc) => ({
      locations: [
        {
          title: doc.title || 'Untitled',
          href: `/blog/${doc.slug}`,
        },
        {
          title: 'Blog Index',
          href: '/blog',
        },
      ],
    }),
  },
})