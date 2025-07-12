import { defineLocations } from 'sanity/presentation';

export default {
  post: defineLocations({
    select: { title: 'title', slug: 'slug.current' },
    resolve: (doc) => ({
      locations: [
        { title: doc?.title || 'Untitled', href: `/post/${doc?.slug}` },
        { title: 'Blog Index', href: '/blog' },
      ],
    }),
  }),
  // Add other types as needed
};