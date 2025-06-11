import { useEffect } from 'react';

/**
 * Inject arbitrary JSON-LD into the document <head>.
 * If an element with the specified id already exists it will be replaced.
 */
export const useJsonLd = (id: string, json: Record<string, unknown>) => {
  useEffect(() => {
    const scriptId = `jsonld-${id}`;
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.id = scriptId;
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(json);
    return () => {
      // Optionally keep it; if removed, SEO might flicker on SPA route change.
      // document.head.removeChild(scriptEl);
    };
  }, [id, json]);
};
