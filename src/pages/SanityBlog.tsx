import React, { useState } from 'react';
import { useQuery, useLiveMode } from '../lib/queryStore';

function isPost(obj: unknown): obj is {
  _id: string;
  title?: string;
  slug?: { current: string };
  mainImage?: { asset: { _ref: string } };
  publishedAt?: string;
  excerpt?: string;
  isFeatured?: boolean;
  author?: { name: string };
  categories?: { _id: string; title: string }[];
} {
  return typeof obj === 'object' && obj !== null && '_id' in obj;
}

function isCategory(obj: unknown): obj is { _id: string; title: string } {
  return typeof obj === 'object' && obj !== null && '_id' in obj && 'title' in obj;
}

function SanityBlog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useLiveMode({});

  const featuredPostQuery = `*[_type == "post" && isFeatured == true][0]{
    _id,
    title,
    slug,
    "author": author->{
      _id,
      name,
      slug
    },
    mainImage,
    publishedAt,
    readingTime,
    excerpt,
    "categories": categories[]->{ _id, title }
  }`;
  const { data: featuredPost, loading: featuredLoading } = useQuery<unknown>(featuredPostQuery);

  const postsQuery = `*[_type == "post" && isFeatured != true ${selectedCategory ? `&& "${selectedCategory}" in categories[]._ref` : ''}] | order(publishedAt desc)[0...6]{
    _id,
    title,
    slug,
    "author": author->{
      _id,
      name,
      slug
    },
    mainImage,
    publishedAt,
    readingTime,
    excerpt,
    "categories": categories[]->{ _id, title }
  }`;
  const { data: posts, loading: postsLoading } = useQuery<unknown[]>(postsQuery);

  const categoriesQuery = `*[_type == "category"]{_id, title}`;
  const { data: categories, loading: categoriesLoading } = useQuery<unknown[]>(categoriesQuery);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div>
      <h1>Blog</h1>
      {/* Categories */}
      {categoriesLoading ? (
        <div>Loading categories...</div>
      ) : Array.isArray(categories) && categories.filter(isCategory).length > 0 ? (
        <div>
          <button onClick={() => setSelectedCategory(null)} style={{ fontWeight: selectedCategory === null ? 'bold' : 'normal' }}>All Categories</button>
          {categories.filter(isCategory).map((category) => (
            <button
              key={category._id}
              onClick={() => setSelectedCategory(category._id)}
              style={{ fontWeight: selectedCategory === category._id ? 'bold' : 'normal' }}
            >
              {category.title}
            </button>
          ))}
        </div>
      ) : null}

      {/* Featured Post */}
      <h2>Featured Post</h2>
      {featuredLoading ? (
        <div>Loading featured post...</div>
      ) : isPost(featuredPost) ? (
        <div>
          <h3>{featuredPost.title}</h3>
          <div>{formatDate(featuredPost.publishedAt)}</div>
          <div>{featuredPost.excerpt}</div>
        </div>
      ) : (
        <div>No featured post available</div>
      )}

      {/* Posts */}
      <h2>Latest Articles</h2>
      {postsLoading ? (
        <div>Loading posts...</div>
      ) : Array.isArray(posts) && posts.filter(isPost).length > 0 ? (
        <ul>
          {posts.filter(isPost).map((post) => (
            <li key={post._id}>
              <h4>{post.title}</h4>
              <div>{formatDate(post.publishedAt)}</div>
              <div>{post.excerpt}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No posts available</div>
      )}
    </div>
  );
}

export default SanityBlog;
