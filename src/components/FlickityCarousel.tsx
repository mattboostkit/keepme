import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

interface FlickityCarouselProps {
  children: React.ReactNode;
  options?: Flickity.Options;
  className?: string;
}

const FlickityCarousel: React.FC<FlickityCarouselProps> = ({ 
  children, 
  options = {}, 
  className = '' 
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const flickityInstance = useRef<Flickity | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      // Initialize Flickity
      flickityInstance.current = new Flickity(carouselRef.current, {
        // Default options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        // Override with provided options
        ...options
      });
    }

    // Cleanup on unmount
    return () => {
      if (flickityInstance.current) {
        flickityInstance.current.destroy();
      }
    };
  }, [options]);

  return (
    <div className={`carousel ${className}`} ref={carouselRef}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className="carousel-cell">
          {child}
        </div>
      ))}
    </div>
  );
};

export default FlickityCarousel;
