import {defineLocations} from 'sanity/presentation'

export default defineLocations({
  // Map blog posts to frontend routes
  post: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    resolve: (doc: { title?: string; slug?: string }) => ({
      locations: [
        {
          title: doc.title || 'Untitled',
          href: `https://keepme.co.uk/.netlify/functions/preview-enable?redirect=/blog/${doc.slug}`,
        },
        {
          title: 'Blog Index',
          href: 'https://keepme.co.uk/blog',
        },
      ] as const,
    }),
  },
})