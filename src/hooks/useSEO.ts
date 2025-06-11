import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string; // URL for OG/Twitter image
}

export const useSEO = ({ title, description, canonical, image }: SEOProps) => {
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

    if (canonical) {
      let linkEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkEl) {
        linkEl = document.createElement('link');
        linkEl.rel = 'canonical';
        document.head.appendChild(linkEl);
      }
      linkEl.href = canonical;
    }

    if (image) {
      const ensureMeta = (property: string) => {
        let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute('property', property);
          document.head.appendChild(el);
        }
        return el;
      };
      ensureMeta('og:image').content = image;
      ensureMeta('twitter:image').content = image;
    }
  }, [title, description, canonical, image]);
};