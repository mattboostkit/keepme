import React, { useState } from 'react';
import { urlFor } from '../lib/sanity';

interface GalleryImage {
  _key: string;
  asset: {
    _ref: string;
  };
  caption?: string;
  alt?: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  const activeImage = images[activeIndex];

  return (
    <div className="gallery-container my-8">
      {/* Main image display */}
      <div className="relative">
        <img
          src={urlFor(activeImage).width(1200).height(800).url()}
          alt={activeImage.alt || 'Gallery image'}
          className="w-full h-auto rounded-lg"
        />
        
        {/* Navigation arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          aria-label="Next image"
        >
          →
        </button>
        
        {/* Caption */}
        {activeImage.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
            {activeImage.caption}
          </div>
        )}
      </div>
      
      {/* Thumbnails */}
      <div className="flex overflow-x-auto gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={image._key}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 ${index === activeIndex ? 'ring-2 ring-blue-500' : ''}`}
          >
            <img
              src={urlFor(image).width(100).height(100).url()}
              alt={image.alt || `Thumbnail ${index + 1}`}
              className="w-20 h-20 object-cover rounded"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
