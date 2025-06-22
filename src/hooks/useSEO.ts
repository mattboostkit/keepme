import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string; // URL for OG/Twitter image
  noindex?: boolean; // Add noindex option
}

export const useSEO = ({ title, description, canonical, image, noindex = false }: SEOProps) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update or create meta description
    if (description) {
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

    // Handle canonical URL - ensure it's absolute and clean
    if (canonical) {
      let linkEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkEl) {
        linkEl = document.createElement('link');
        linkEl.rel = 'canonical';
        document.head.appendChild(linkEl);
      }
      // Ensure canonical URL is clean (no trailing slash issues)
      const cleanCanonical = canonical.replace(/\/$/, '');
      linkEl.href = cleanCanonical;
    }

    // Handle noindex
    let noindexMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (noindex) {
      if (!noindexMeta) {
        noindexMeta = document.createElement('meta');
        noindexMeta.name = 'robots';
        document.head.appendChild(noindexMeta);
      }
      noindexMeta.content = 'noindex, nofollow';
    } else if (noindexMeta && noindexMeta.content.includes('noindex')) {
      // Remove noindex if it was previously set
      noindexMeta.content = 'index, follow';
    }

    // Update Open Graph and Twitter meta tags
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

    // Update Open Graph title and description
    if (title) {
      const ensureOGMeta = (property: string) => {
        let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute('property', property);
          document.head.appendChild(el);
        }
        return el;
      };
      
      ensureOGMeta('og:title').content = title;
      ensureOGMeta('twitter:title').content = title;
    }

    if (description) {
      const ensureOGMeta = (property: string) => {
        let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute('property', property);
          document.head.appendChild(el);
        }
        return el;
      };
      
      ensureOGMeta('og:description').content = description;
      ensureOGMeta('twitter:description').content = description;
    }

    // Update Open Graph URL
    if (canonical) {
      const ensureOGMeta = (property: string) => {
        let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute('property', property);
          document.head.appendChild(el);
        }
        return el;
      };
      
      ensureOGMeta('og:url').content = canonical;
      ensureOGMeta('twitter:url').content = canonical;
    }

  }, [title, description, canonical, image, noindex]);
};