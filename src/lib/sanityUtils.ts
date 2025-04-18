import { client } from './sanity';

/**
 * Fetch data from Sanity using GROQ queries
 * @param query GROQ query string
 * @param params Query parameters
 * @returns Promise with the query results
 */
export async function fetchSanityData<T>(query: string, params?: Record<string, any>): Promise<T> {
  try {
    return await client.fetch(query, params);
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw error;
  }
}

/**
 * Example query to fetch all documents of a specific type
 * @param type Document type
 * @param limit Optional limit of results
 * @returns Promise with the query results
 */
export async function fetchDocumentsByType<T>(type: string, limit?: number): Promise<T[]> {
  const limitClause = limit ? `[0...${limit}]` : '';
  const query = `*[_type == "${type}"]${limitClause} | order(_createdAt desc)`;
  return fetchSanityData<T[]>(query);
}

/**
 * Fetch a single document by its ID
 * @param id Document ID
 * @returns Promise with the document
 */
export async function fetchDocumentById<T>(id: string): Promise<T> {
  const query = `*[_id == "${id}"][0]`;
  return fetchSanityData<T>(query);
}

/**
 * Fetch a single document by its slug
 * @param type Document type
 * @param slug Document slug
 * @returns Promise with the document
 */
export async function fetchDocumentBySlug<T>(type: string, slug: string): Promise<T> {
  const query = `*[_type == "${type}" && slug.current == "${slug}"][0]`;
  return fetchSanityData<T>(query);
}
