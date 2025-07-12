import { useLiveMode } from '../lib/queryStore';
import { enableVisualEditing } from '@sanity/visual-editing';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { client } from '../lib/sanity';

export default function SanityVisualEditing() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
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
    return () => disable();
  }, [location, navigate]);

  useLiveMode({ client });

  return null;
} 