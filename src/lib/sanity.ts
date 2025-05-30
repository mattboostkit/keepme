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
    // Return a mock builder that allows .url() and common chains to fail gracefully
    return {
      url: () => 'https://via.placeholder.com/1x1?text=No_Source',
      width: function() { return this; },
      height: function() { return this; },
      fit: function() { return this; },
      crop: function() { return this; },
      format: function() { return this; },
      quality: function() { return this; }
      // Cast to the main builder type. This is a pragmatic way to handle the mock.
      // A more robust mock would fully implement the ImageUrlBuilder interface.
    } as unknown as import('@sanity/image-url/lib/types/builder').ImageUrlBuilder;
  }

  // Return the raw builder; formatting and other transformations will be chained by the caller.
  return builder.image(source);
};
