import { useLiveMode } from '../lib/queryStore';
import { enableVisualEditing } from '@sanity/visual-editing';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { client } from '../lib/sanity';

export default function SanityVisualEditing() {
  const location = useLocation();
  const navigate = useNavigate();

  // Only enable visual editing for logged-in users or in development
  useEffect(() => {
    // Check for Sanity session cookie or development environment
    const isDev = import.meta.env.MODE === 'development' || import.meta.env.NODE_ENV === 'development';
    const hasSanitySession = document.cookie.includes('sanitySession=');
    if (!isDev && !hasSanitySession) {
      // Do not enable Presentation Tool UI for anonymous/incognito users in production
      return;
    }
    const disable = enableVisualEditing({
      history: {
        subscribe: (navigateFn) => {
          navigateFn({ type: 'push', url: location.pathname });
          return () => {};
        },
        update: (u) => {
          switch (u.type) {
            case 'push':
              return navigate(u.url);
            case 'replace':
              return navigate(u.url, { replace: true });
            case 'pop':
              return window.history.back();
            default:
              throw new Error(`Unknown update type: ${u.type}`);
          }
        }
      },
      zIndex: 1000,
      refresh: () => Promise.resolve(),
    });
    return () => disable && disable();
  }, [location, navigate]);

  useLiveMode({ client });

  return null;
} 