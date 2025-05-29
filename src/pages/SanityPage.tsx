import React from 'react';
import { useSanityDocuments } from '../lib/useSanity';
import { urlFor } from '../lib/sanity';

// Define the Post interface
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
}

const SanityPage: React.FC = () => {
  // Use our custom hook to fetch posts
  const { data: posts, loading, error } = useSanityDocuments<Post>('post', 10);

  if (loading) return <div className="p-4">Loading posts...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;
  if (!posts || posts.length === 0) return <div className="p-4">No posts found</div>;

  return (
    <div className="container mx-auto p-4 pt-32 mb-16">
      <h1 className="text-4xl font-serif font-bold mb-8 text-gray-900">Posts from <span className="text-brand-mauve">KeepMe</span></h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-white rounded-2xl shadow-md overflow-hidden group">
            <div className="h-64 overflow-hidden">
              {post.mainImage ? (
                <img
                  src={urlFor(post.mainImage).width(600).height(400).url()}
                  alt={post.title || 'Post image'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-3 group-hover:text-brand-mauve transition-colors">{post.title}</h2>
              {post.publishedAt && (
                <p className="text-sm text-gray-500">
                  Published: {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              )}
              {post.slug && (
                <a
                  href={`/post/${post.slug.current}`}
                  className="mt-4 inline-flex items-center px-5 py-2 bg-brand-rose text-white rounded-full hover:bg-brand-mauve transition-colors"
                >
                  <span>Read more</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SanityPage;
