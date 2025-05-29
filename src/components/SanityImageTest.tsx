import React, { useEffect, useState } from 'react';
import { client } from '../lib/sanity';
import { urlFor } from '../lib/sanity';

interface SanityBrand {
  _id: string;
  name: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}

const SanityImageTest: React.FC = () => {
  const [imageData, setImageData] = useState<SanityBrand | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        // Fetch the first portfolioBrand document
        const result = await client.fetch('*[_type == "portfolioBrand"][0]');
        console.log('Fetched brand:', result);
        setImageData(result);
      } catch (err) {
        console.error('Error fetching image:', err);
        setError('Failed to fetch image');
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  if (loading) {
    return <div>Loading image...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!imageData) {
    return <div>No image data found</div>;
  }

  // Generate image URL
  const imageUrl = imageData.image ? urlFor(imageData.image).width(800).height(600).url() : null;
  console.log('Generated image URL:', imageUrl);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sanity Image Test</h2>
      <div className="mb-4">
        <h3 className="font-bold">Brand: {imageData.name}</h3>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto">
          {JSON.stringify(imageData.image, null, 2)}
        </pre>
      </div>
      <div className="border p-4 rounded">
        {imageUrl ? (
          <>
            <p className="mb-2">Image URL: {imageUrl}</p>
            <img 
              src={imageUrl} 
              alt={`${imageData.name} image`} 
              className="max-w-full h-auto"
              onError={(e) => {
                console.error('Image failed to load:', e);
                e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image+Load+Error';
              }}
            />
          </>
        ) : (
          <div>No image URL generated</div>
        )}
      </div>
    </div>
  );
};

export default SanityImageTest;
