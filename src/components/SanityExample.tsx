import React, { useEffect, useState } from 'react';
import { fetchDocumentsByType } from '../lib/sanityUtils';
import OptimizedImage from './OptimizedImage';

// Define a type for your Sanity document
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
  body?: Array<{
    _type: string;
    _key: string;
    [key: string]: unknown;
  }>;
  description?: string;
}

const SanityExample: React.FC = () => {
  const [documents, setDocuments] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posts from Sanity
        const data = await fetchDocumentsByType<Post>('post', 10);
        setDocuments(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data from Sanity');
        setLoading(false);
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (documents.length === 0) return <div>No documents found</div>;

  return (
    <div className="sanity-example">
      <h2>Data from Sanity</h2>
      <div className="documents-grid">
        {documents.map((doc, index) => (
          <div key={doc._id} className="document-card">
            {doc.mainImage && (
              <OptimizedImage
                image={doc.mainImage}
                alt={doc.title || 'Document image'}
                className="document-image"
                width={400}
                height={300}
                priority={index < 4} // Load first 4 images with priority
              />
            )}
            <h3>{doc.title}</h3>
            {doc.description && <p>{doc.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SanityExample;
