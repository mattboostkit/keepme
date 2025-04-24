import React, { useEffect, useRef, useState } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

interface FlickityCarouselProps {
  children: React.ReactNode;
  options?: Flickity.Options;
  className?: string;
  showArrows?: boolean;
}

const FlickityCarousel: React.FC<FlickityCarouselProps> = ({
  children,
  options = {},
  className = '',
  showArrows = false
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const flickityInstance = useRef<Flickity | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Function to handle previous slide
  const handlePrevious = () => {
    if (flickityInstance.current) {
      flickityInstance.current.previous();
    }
  };

  // Function to handle next slide
  const handleNext = () => {
    if (flickityInstance.current) {
      flickityInstance.current.next();
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      // Initialize Flickity
      flickityInstance.current = new Flickity(carouselRef.current, {
        // Default options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false, // We'll use our custom arrows
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

      // Add event listeners for scroll position
      if (showArrows && flickityInstance.current) {
        // Initial state
        setAtStart(true);

        // Listen for scroll events
        flickityInstance.current.on('scroll', () => {
          if (flickityInstance.current) {
            const scrollProgress = flickityInstance.current.x / flickityInstance.current.maxScrollX;
            setAtStart(scrollProgress >= 0);
            setAtEnd(scrollProgress <= -0.99);
          }
        });
      }
    }

    // Cleanup on unmount
    return () => {
      if (flickityInstance.current) {
        flickityInstance.current.destroy();
      }
    };
  }, [options, showArrows]);

  return (
    <div className="relative">
      <div className={`carousel ${className}`} ref={carouselRef} style={{ background: 'transparent' }}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className="carousel-cell" style={{ background: 'transparent' }}>
            {child}
          </div>
        ))}
      </div>

      {/* Custom navigation arrows */}
      {showArrows && (
        <>
          <button
            onClick={handlePrevious}
            className={`carousel-arrow carousel-arrow-left ${atStart ? 'opacity-30' : 'opacity-100'}`}
            aria-label="Previous"
            disabled={atStart}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className={`carousel-arrow carousel-arrow-right ${atEnd ? 'opacity-30' : 'opacity-100'}`}
            aria-label="Next"
            disabled={atEnd}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default FlickityCarousel;
