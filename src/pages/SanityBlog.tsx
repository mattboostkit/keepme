import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Search } from 'lucide-react';
import { useSanityDocuments, useSanityQuery } from '../lib/useSanity';
import { urlFor } from '../lib/sanity';
import { Link } from 'react-router-dom';

// Define the Post interface
interface Post {
  _id: string;
  _type: string;
  title?: string;
  slug?: {
    current: string;
  };
  author?: {
    _id: string;
    name: string;
    slug?: {
      current: string;
    };
  };
  mainImage?: {
    asset: {
      _ref: string;
    };
  };
  publishedAt?: string;
  readingTime?: number;
  excerpt?: string;
  isFeatured?: boolean;
  categories?: {
    _id: string;
    title: string;
  }[];
}

// Define the Category interface
interface Category {
  _id: string;
  _type: string;
  title?: string;
  slug?: {
    current: string;
  };
  description?: string;
}

function SanityBlog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch featured post
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
  const { data: featuredPost, loading: featuredLoading } = useSanityQuery<Post>(featuredPostQuery);

  // Fetch regular posts
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
  const { data: posts, loading: postsLoading } = useSanityQuery<Post[]>(postsQuery);

  // Fetch categories
  const { data: categories, loading: categoriesLoading } = useSanityDocuments<Category>('category');

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would redirect to a search results page or filter the posts
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-brand-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              The KeepMe <span className="text-brand-accent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Insights, trends, and expertise from the world of fragrance manufacturing
            </p>

            {/* Categories */}
            {categoriesLoading ? (
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="bg-gray-200 animate-pulse h-10 w-32 rounded-full"></div>
                ))}
              </div>
            ) : categories && categories.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <button
                  key="all"
                  className={`px-5 py-2 rounded-full transition-colors font-medium ${selectedCategory === null ? 'bg-[#f4cfd9] text-white' : 'bg-white text-gray-800 hover:bg-[#f4cfd9] hover:text-white'}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category._id}
                    className={`px-5 py-2 rounded-full transition-colors font-medium ${selectedCategory === category._id ? 'bg-[#f4cfd9] text-white' : 'bg-white text-gray-800 hover:bg-[#f4cfd9] hover:text-white'}`}
                    onClick={() => setSelectedCategory(category._id)}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            ) : null}

            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-5 py-4 pr-12 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-brand-card"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-brand-card"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {featuredLoading ? (
            <div className="h-[500px] bg-gray-200 animate-pulse rounded-2xl"></div>
          ) : featuredPost ? (
            <div className="relative rounded-2xl overflow-hidden group">
              <Link to={`/post/${featuredPost.slug?.current}`} className="absolute inset-0 z-10">
                <span className="sr-only">View {featuredPost.title}</span>
              </Link>
              {featuredPost.mainImage ? (
                <img
                  src={urlFor(featuredPost.mainImage).url()}
                  alt={featuredPost.title || 'Featured post'}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-[500px] bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                <div className="flex items-center space-x-4 text-white mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{formatDate(featuredPost.publishedAt)}</span>
                  </div>
                  {featuredPost.author && (
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span className="text-sm">{featuredPost.author.name}</span>
                    </div>
                  )}
                  {featuredPost.readingTime && (
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{featuredPost.readingTime} min read</span>
                    </div>
                  )}
                </div>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                {featuredPost.excerpt && (
                  <p className="text-gray-200 mb-6 md:text-lg">
                    {featuredPost.excerpt}
                  </p>
                )}
                <div className="relative z-20 inline-block">
                  <Link
                    to={`/post/${featuredPost.slug?.current}`}
                    className="bg-brand-button text-white px-5 py-2 rounded-full hover:bg-brand-card transition-colors flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center p-12 bg-gray-100 rounded-2xl">
              <p>No featured post available</p>
            </div>
          )}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
            {selectedCategory ?
              `${categories?.find(cat => cat._id === selectedCategory)?.title || 'Category'} Articles` :
              'Latest Articles'}
          </h2>

          {postsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-gray-200 animate-pulse h-96 rounded-2xl"></div>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div key={post._id} className="bg-white rounded-2xl shadow-md overflow-hidden group relative">
                  <Link to={`/post/${post.slug?.current}`} className="absolute inset-0 z-10">
                    <span className="sr-only">View {post.title}</span>
                  </Link>
                  <div className="h-64 overflow-hidden">
                    {post.mainImage ? (
                      <img
                        src={urlFor(post.mainImage).url()}
                        alt={post.title || 'Blog post'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No image available</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 relative">
                    <div className="flex items-center space-x-4 text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-xs">{formatDate(post.publishedAt)}</span>
                      </div>
                      {post.readingTime && (
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-xs">{post.readingTime} min read</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-card transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="relative z-20 inline-block">
                      <Link
                        to={`/post/${post.slug?.current}`}
                        className="bg-brand-button text-white px-5 py-2 rounded-full hover:bg-brand-card transition-colors flex items-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center p-12 bg-gray-100 rounded-2xl">
              <p>No posts available</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <button className="bg-brand-button text-white px-5 py-2 rounded-full hover:bg-brand-card transition-colors flex items-center mx-auto">
              <span>Load More Articles</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-brand-card text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-gray-800 mb-8">
              Stay updated with the latest articles, trends, and insights from the world of fragrance manufacturing.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-5 py-3 rounded-full focus:outline-none text-gray-800"
              />
              <button className="bg-white text-brand-card px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SanityBlog;
