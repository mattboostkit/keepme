import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { useSEO } from '../hooks/useSEO';
import { useJsonLd } from '../hooks/useJsonLd';
import seoConfig from '../seoConfig';

const BASE_URL = 'https://keepme.co.uk';

export default function SEOManager() {
  const { pathname } = useLocation();

  const seo = useMemo(() => {
    // Try exact match; fallback to root
    return seoConfig[pathname] || seoConfig[pathname.replace(/\/$/, '')] || seoConfig['/'];
  }, [pathname]);

  // Basic on-page SEO – will run on every route change
  useSEO({
    title: seo.title,
    description: seo.description,
    canonical: `${BASE_URL}${pathname}`,
    image: seo.image,
  });

  // Inject static Organization schema once
  useJsonLd('org', {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KeepMe Lifestyle',
    url: BASE_URL,
    logo: `${BASE_URL}/favicon/favicon-96x96.png`,
    sameAs: [
      'https://www.linkedin.com/company/keepme-lifestyle',
      'https://www.instagram.com/keepme_lifestyle'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '35 Theydon Park Road, Theydon Bois',
      addressLocality: 'Epping',
      postalCode: 'CM16 7LR',
      addressCountry: 'GB'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-1992-xxx-xxx',
      contactType: 'customer service',
      areaServed: 'GB'
    }
  });

  return null; // This component renders nothing
}
