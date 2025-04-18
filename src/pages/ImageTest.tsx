import React from 'react';
import SanityImageTest from '../components/SanityImageTest';

const ImageTestPage: React.FC = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Sanity Image Test Page</h1>
        <SanityImageTest />
      </div>
    </div>
  );
};

export default ImageTestPage;
