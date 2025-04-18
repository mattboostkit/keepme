import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  useCdn: true, // Set to true for production for better performance
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // No token needed for read-only operations
});

// Set up the image URL builder
const builder = imageUrlBuilder(client);

/**
 * Generate an optimized image URL from a Sanity image reference
 * @param source Sanity image reference
 * @returns Image URL builder with chainable methods
 *
 * Example usage:
 * <img
 *   src={urlFor(image)
 *     .width(800)
 *     .height(600)
 *     .format('webp')
 *     .quality(80)
 *     .url()}
 *   alt="Description"
 * />
 */
export const urlFor = (source: SanityImageSource | undefined | null) => {
  if (!source) {
    console.warn('No image source provided to urlFor');
    // Return a placeholder URL or empty string
    return {
      url: () => 'https://via.placeholder.com/800x600?text=No+Image+Source',
      width: () => ({ height: () => ({ url: () => 'https://via.placeholder.com/800x600?text=No+Image+Source', format: () => ({ quality: () => ({ url: () => 'https://via.placeholder.com/800x600?text=No+Image+Source' }) }) }) })
    };
  }

  console.log('Building image URL for source:', source);
  // Default to WebP format for better compression
  const imageBuilder = builder.image(source).format('webp');
  console.log('Image builder created:', imageBuilder);
  return imageBuilder;
};
