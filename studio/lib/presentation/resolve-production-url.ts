import { defineLocations } from 'sanity/presentation';

const postLocations = defineLocations({
  select: {
    title: 'title',
    slug: 'slug.current',
  },
  resolve: (value: { title?: string; slug?: string } | null) => {
    const { title, slug } = value || {};
    return {
      locations: [
        {
          title: title || 'Untitled',
          href: `https://keepme.co.uk/post/${slug ?? ''}`,
        },
        {
          title: 'Blog Index',
          href: 'https://keepme.co.uk/blog',
        },
      ],
    };
  },
});

export default {
  post: postLocations,
};