import React from 'react';
import { useParams } from 'react-router-dom';
import { useSanityDocumentBySlug } from '../lib/useSanity';
import { urlFor } from '../lib/sanity';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '../components/PortableTextComponents';
import { useSEO } from '../hooks/useSEO';
import { useJsonLd } from '../hooks/useJsonLd';

// Define the Post interface with body content
interface Post {
  _id: string;
  _type: string;
  title?: string;
  slug?: {
    current: string;
  };
  mainImage?: {
    asset: {
      _ref: string;
    };
  };
  publishedAt?: string;
  excerpt?: string;
  author?: {
    name: string;
  };
  categories?: {
    title: string;
  }[];
  body?: Array<{
    _type: string;
    _key: string;
    [key: string]: unknown;
  }>; // Portable Text block array
}

const PostPage: React.FC = () => {
  // Get the slug from the URL
  const { slug } = useParams<{ slug: string }>();

  // Use our custom hook to fetch a single post by slug
  const { data: post, loading, error } = useSanityDocumentBySlug<Post>('post', slug || '');

  // SEO for individual blog posts - use static defaults to prevent initialization errors
  const seoTitle = !loading && post?.title ? `${post.title} | KeepMe Blog` : 'Blog Post | KeepMe';
  const seoDescription = !loading && post?.excerpt ? post.excerpt : 'Read the latest insights and expertise from KeepMe, the leading UK fragrance manufacturer.';
  const seoImage = !loading && post?.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined;
  
  useSEO({
    title: seoTitle,
    description: seoDescription,
    canonical: `https://keepme.co.uk/post/${slug}`,
    image: seoImage,
  });

  // Structured data for blog posts
  useJsonLd(`post-${slug}`, {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post?.title,
    description: post?.excerpt,
    image: post?.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined,
    datePublished: post?.publishedAt,
    dateModified: post?.publishedAt,
    author: post?.author ? {
      '@type': 'Person',
      name: post.author.name
    } : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'KeepMe',
      logo: {
        '@type': 'ImageObject',
        url: 'https://keepme.co.uk/favicon/favicon-96x96.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://keepme.co.uk/post/${slug}`
    }
  });

  if (loading) return <div className="p-4">Loading post...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;
  if (!post) return <div className="p-4">Post not found</div>;

  return (
    <div className="bg-white min-h-screen py-8 md:py-12"> {/* Outer wrapper for full page white and vertical padding */}
      <div className="container mx-auto px-4 max-w-3xl"> {/* Inner content container */}
        <h1 className="text-4xl font-serif font-bold mb-6 text-brand-plum">{post.title}</h1>

        {post.publishedAt && (
          <p className="text-brand-mauve mb-6">
            Published: {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        )}

        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).width(800).height(500).url()}
            alt={post.title || 'Post image'}
            className="w-full h-auto rounded-lg mb-6"
          />
        )}

        {/* Render the body content using Portable Text */}
        <div className="prose max-w-none mb-12"> {/* Added mb-12 to prose for spacing before button */}
          {post.body ? (
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          ) : (
            <p>This post has no content.</p>
          )}
        </div>

        <div className="text-center"> {/* Centering the button, removed original mt/mb which is now on outer py */} 
          <a
            href="/blog"
            className="px-5 py-2 bg-brand-mauve text-white rounded-full hover:bg-brand-rose transition-colors inline-flex items-center"
          >
            <span>Back to all posts</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
