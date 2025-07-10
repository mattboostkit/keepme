import {defineLocations} from 'sanity/presentation'

export default defineLocations({
  post: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    resolve: (doc: { title?: string; slug?: { current?: string } }) => ({
      locations: [
        {
          title: doc.title || 'Untitled',
          href: `https://keepme.co.uk/.netlify/functions/preview-enable?redirect=/blog/${doc.slug?.current ?? ''}`,
        },
        {
          title: 'Blog Index',
          href: 'https://keepme.co.uk/blog',
        },
      ] as const,
    }),
  },
} as const)