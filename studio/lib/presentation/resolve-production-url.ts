import { defineLocations } from 'sanity/presentation';

const postLocations = defineLocations({
  select: {
    title: 'title',
    slug: 'slug.current',
  },
  resolve: (doc) => ({
    locations: [
      {
        title: doc?.title || 'Untitled',
        href: `/post/${doc?.slug}`,
      },
    ],
  }),
});

export default {
  locations: {
    post: postLocations,
  },
};