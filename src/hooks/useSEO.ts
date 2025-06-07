import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

export const useSEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      // Update meta description if it exists, or create one
      let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (metaDesc) {
        metaDesc.content = description;
      } else {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        metaDesc.content = description;
        document.head.appendChild(metaDesc);
      }
    }
  }, [title, description]);
};