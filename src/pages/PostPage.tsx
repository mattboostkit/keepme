import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useLiveMode } from '../lib/queryStore';
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
  }>;
}

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Enable live mode for Presentation Tool (Visual Editing)
  useLiveMode({});

  // Fetch the post by slug, including drafts
  const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    author->{name},
    categories[]->{title},
    body
  }`;
  const { data: post, loading, error } = useQuery<Post>(postQuery, { slug });

  // SEO for individual blog posts
  const seoTitle = !loading && post?.title ? `${post.title} | KeepMe Blog` : 'Blog Post | KeepMe';
  const seoDescription = !loading && post?.excerpt ? post.excerpt : 'Read the latest insights and expertise from KeepMe, the leading UK fragrance manufacturer.';
  const seoImage = !loading && post?.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined;
  useSEO({
    title: seoTitle,
    description: seoDescription,
    canonical: `https://keepme.co.uk/blog/${slug}`,
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
      '@id': `https://keepme.co.uk/blog/${slug}`
    }
  });

  if (loading) return <div className="p-4">Loading post...</div>;
  // Type guard for error
  const getErrorMessage = (err: unknown) => {
    if (typeof err === 'object' && err && 'message' in err) {
      return (err as { message: string }).message;
    }
    return String(err);
  };
  if (error) return <div className="p-4 text-red-500">Error: {getErrorMessage(error)}</div>;
  if (!post) {
    return <div className="p-4">Post not found</div>;
  }

  return (
    <div className="bg-white min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Back to Blog button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-brand-mauve hover:text-brand-rose transition-colors mb-6"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Blog</span>
        </Link>
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
        <div className="prose max-w-none mb-12">
          {post.body ? (
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          ) : (
            <p>This post has no content.</p>
          )}
        </div>
        <div className="text-center">
          <Link
            to="/blog"
            className="px-5 py-2 bg-brand-mauve text-white rounded-full hover:bg-brand-rose transition-colors inline-flex items-center"
          >
            <span>Back to all posts</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
