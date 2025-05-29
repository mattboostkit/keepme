# Sanity Integration Guide

This guide explains how to use the Sanity integration in your React application.

## Setup

The integration is already set up with the following:

- Sanity client configuration in `src/lib/sanity.ts`
- Utility functions for fetching data in `src/lib/sanityUtils.ts`
- Custom React hooks for fetching data in `src/lib/useSanity.ts`
- Example components in `src/components/SanityExample.tsx`
- Example pages for posts, galleries, and videos
- Custom Portable Text components for rich content rendering

## Sanity Studio

The Sanity Studio is set up in the `studio` folder. You can run it with:

```bash
cd studio
npm run dev
```

This will start the Sanity Studio at http://localhost:3333.

## Content Schema

The following schemas have been created:

- **Post** (`studio/schemaTypes/post.ts`) - For blog posts with rich text, images, and embedded videos
- **Gallery** (`studio/schemaTypes/gallery.ts`) - For image galleries
- **Video** (`studio/schemaTypes/video.ts`) - For video content from YouTube or Vimeo

You can add more schemas by:

1. Creating new schema files in the `studio/schemaTypes` directory
2. Adding them to the `schemaTypes` array in `studio/schemaTypes/index.ts`

## Fetching Data

There are several ways to fetch data from Sanity:

### Using the utility functions

```typescript
import { fetchDocumentsByType, fetchDocumentById, fetchDocumentBySlug } from '../lib/sanityUtils';

// Fetch all posts
const posts = await fetchDocumentsByType('post');

// Fetch a specific post by ID
const post = await fetchDocumentById('post-id');

// Fetch a post by slug
const post = await fetchDocumentBySlug('post', 'post-slug');
```

### Using the custom hooks

```typescript
import { useSanityDocuments, useSanityDocumentBySlug, useSanityDocumentById, useSanityQuery } from '../lib/useSanity';

// In your component:
const { data: posts, loading, error } = useSanityDocuments('post');

// Or fetch a specific post by slug:
const { data: post, loading, error } = useSanityDocumentBySlug('post', 'post-slug');

// Or fetch a document by ID:
const { data: video, loading, error } = useSanityDocumentById('video-id');

// Or use a custom GROQ query:
const { data, loading, error } = useSanityQuery('*[_type == "post" && publishedAt < now()]');
```

## Displaying Images

To display images from Sanity, use the `urlFor` function:

```typescript
import { urlFor } from '../lib/sanity';

// In your component:
<img
  src={urlFor(post.mainImage).width(800).height(500).url()}
  alt={post.title}
/>
```

## Rendering Portable Text

The Portable Text content (like the `body` field in the post schema) is rendered using custom components defined in `src/components/PortableTextComponents.tsx`:

```typescript
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '../components/PortableTextComponents';

// In your component:
<PortableText
  value={post.body}
  components={portableTextComponents}
/>
```

These components handle:

- Text formatting (headings, paragraphs, lists, etc.)
- Images with captions and alt text
- Embedded videos from YouTube and Vimeo
- Links with proper attributes

## Displaying Galleries

The `Gallery` component in `src/components/Gallery.tsx` provides a simple image gallery with navigation controls and captions:

```typescript
import Gallery from '../components/Gallery';

// In your component:
<Gallery images={gallery.images} />
```

## Embedding Videos

Videos from YouTube and Vimeo can be embedded in two ways:

1. As standalone video documents (using the `video` schema)
2. As embedded videos within Portable Text content (using the `video` object in the `body` field of a post)

## Routes

The following routes have been added to `App.tsx`:

- `/posts` - Displays a list of posts from Sanity
- `/post/:slug` - Displays a single post by slug
- `/galleries` - Displays a list of galleries
- `/gallery/:slug` - Displays a single gallery
- `/videos` - Displays a list of videos
- `/video/:id` - Displays a single video

## Next Steps

1. Create content in the Sanity Studio
2. Customize the components to match your design
3. Add more fields to the existing schemas
4. Create more content types as needed

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Portable Text](https://www.sanity.io/docs/portable-text)
- [Image URL Builder](https://www.sanity.io/docs/image-url)
