import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { isPreviewMode } from './previewMode';

// Add your Sanity read token here (store securely in env vars in production)
const previewToken = import.meta.env.VITE_SANITY_PREVIEW_TOKEN || '';

// Use Vite environment variables for Sanity config
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'tyzs5imn';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const studioUrl = import.meta.env.VITE_SANITY_STUDIO_URL || 'https://keepmeadmin.sanity.studio';

export const client = createClient({
  projectId,
  dataset,
  useCdn: !isPreviewMode(), // Disable CDN in preview mode for fresh content
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  token: isPreviewMode() ? previewToken : undefined, // Use token for draft access in preview mode
  stega: {
    enabled: true,
    studioUrl,
  },
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
