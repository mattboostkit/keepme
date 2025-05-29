import { useState, useEffect } from 'react';
import { fetchSanityData } from './sanityUtils';

/**
 * Custom hook to fetch data from Sanity using GROQ queries
 * @param query GROQ query string
 * @param params Query parameters
 * @returns Object with data, loading state, and error
 */
export function useSanityQuery<T>(query: string, params?: Record<string, unknown>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchSanityData<T>(query, params);
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        console.error('Error fetching Sanity data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, JSON.stringify(params)]);

  return { data, loading, error };
}

/**
 * Custom hook to fetch documents by type
 * @param type Document type
 * @param limit Optional limit of results
 * @returns Object with data, loading state, and error
 */
export function useSanityDocuments<T>(type: string, limit?: number) {
  const limitClause = limit ? `[0...${limit}]` : '';
  const query = `*[_type == "${type}"]${limitClause} | order(_createdAt desc)`;

  return useSanityQuery<T[]>(query);
}

/**
 * Custom hook to fetch a single document by its slug
 * @param type Document type
 * @param slug Document slug
 * @returns Object with data, loading state, and error
 */
export function useSanityDocumentBySlug<T>(type: string, slug: string) {
  const query = `*[_type == "${type}" && slug.current == "${slug}"][0]`;

  return useSanityQuery<T>(query);
}

/**
 * Custom hook to fetch a single document by its ID
 * @param id Document ID
 * @returns Object with data, loading state, and error
 */
export function useSanityDocumentById<T>(id: string) {
  const query = `*[_id == "${id}"][0]`;

  return useSanityQuery<T>(query);
}
