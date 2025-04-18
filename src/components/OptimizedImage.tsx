import React from 'react';
import { urlFor } from '../lib/sanity';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface OptimizedImageProps {
  image: SanityImageSource | undefined | null;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  format?: 'jpg' | 'png' | 'webp';
}

/**
 * Component for optimized images using Sanity's image pipeline
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  image,
  alt,
  width,
  height,
  className = '',
  sizes = '100vw',
  priority = false,
  quality = 80,
  format = 'webp',
}) => {
  if (!image) return null;

  // Build the base URL
  const baseBuilder = urlFor(image);
  
  // Build the final URL with all options
  let finalUrl = baseBuilder.url();
  
  // Add parameters manually to avoid TypeScript issues
  const params = new URLSearchParams();
  
  // Add dimensions if provided
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  
  // Add format and quality
  params.append('fm', format);
  params.append('q', quality.toString());
  
  // Combine URL with parameters
  finalUrl = `${finalUrl}?${params.toString()}`;

  // Generate srcSet for responsive images
  const generateSrcSet = () => {
    const breakpoints = [640, 768, 1024, 1280, 1536];
    return breakpoints
      .map((bp) => {
        const srcParams = new URLSearchParams();
        srcParams.append('w', bp.toString());
        srcParams.append('fm', format);
        srcParams.append('q', quality.toString());
        return `${baseBuilder.url()}?${srcParams.toString()} ${bp}w`;
      })
      .join(', ');
  };

  return (
    <img
      src={finalUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      sizes={sizes}
      srcSet={generateSrcSet()}
    />
  );
};

export default OptimizedImage;
