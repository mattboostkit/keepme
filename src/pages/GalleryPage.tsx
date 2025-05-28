import React from 'react';
import { useParams } from 'react-router-dom';
import { useSanityDocumentBySlug, useSanityDocuments } from '../lib/useSanity';
import { urlFor } from '../lib/sanity';
import Gallery from '../components/Gallery';

// Define the Gallery interface
interface GalleryType {
  _id: string;
  _type: string;
  title?: string;
  slug?: {
    current: string;
  };
  description?: string;
  images: {
    _key: string;
    asset: {
      _ref: string;
    };
    caption?: string;
    alt?: string;
  }[];
}

// Component to display a single gallery
const SingleGalleryPage: React.FC = () => {
  // Get the slug from the URL
  const { slug } = useParams<{ slug: string }>();
  
  // Use our custom hook to fetch a single gallery by slug
  const { data: gallery, loading, error } = useSanityDocumentBySlug<GalleryType>('gallery', slug || '');

  if (loading) return <div className="p-4">Loading gallery...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;
  if (!gallery) return <div className="p-4">Gallery not found</div>;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-sans font-semibold mb-4">{gallery.title}</h1>
      
      {gallery.description && (
        <p className="text-gray-700 mb-6">{gallery.description}</p>
      )}
      
      {gallery.images && gallery.images.length > 0 ? (
        <Gallery images={gallery.images} />
      ) : (
        <p>No images in this gallery</p>
      )}
      
      <div className="mt-8">
        <a 
          href="/galleries"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to all galleries
        </a>
      </div>
    </div>
  );
};

// Component to display a list of all galleries
const GalleriesListPage: React.FC = () => {
  // Use our custom hook to fetch all galleries
  const { data: galleries, loading, error } = useSanityDocuments<GalleryType>('gallery');

  if (loading) return <div className="p-4">Loading galleries...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;
  if (!galleries || galleries.length === 0) return <div className="p-4">No galleries found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-sans font-semibold mb-8">Galleries</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleries.map((gallery) => (
          <div key={gallery._id} className="border rounded-lg overflow-hidden shadow-md">
            {gallery.images && gallery.images.length > 0 && (
              <img
                src={urlFor(gallery.images[0]).width(600).height(400).url()}
                alt={gallery.images[0].alt || gallery.title || 'Gallery thumbnail'}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-sans font-semibold mb-2">{gallery.title}</h2>
              {gallery.description && (
                <p className="text-gray-700 mb-4 line-clamp-2">{gallery.description}</p>
              )}
              {gallery.slug && (
                <a 
                  href={`/gallery/${gallery.slug.current}`}
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  View Gallery
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { GalleriesListPage, SingleGalleryPage };
