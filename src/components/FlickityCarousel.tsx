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

      // Fix for white background overlay - set background to transparent
      const flickityViewport = carouselRef.current.querySelector('.flickity-viewport');
      if (flickityViewport) {
        (flickityViewport as HTMLElement).style.background = 'transparent';
      }

      const flickitySlider = carouselRef.current.querySelector('.flickity-slider');
      if (flickitySlider) {
        (flickitySlider as HTMLElement).style.background = 'transparent';
      }
    }

    // Cleanup on unmount
    return () => {
      if (flickityInstance.current) {
        flickityInstance.current.destroy();
      }
    };
  }, [options]);

  return (
    <div className={`carousel ${className}`} ref={carouselRef} style={{ background: 'transparent' }}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className="carousel-cell" style={{ background: 'transparent' }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default FlickityCarousel;
