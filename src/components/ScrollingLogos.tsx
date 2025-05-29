// src/components/ScrollingLogos.tsx
import React from 'react';

function ScrollingLogos() {
  // Placeholder logos - these should ideally come from props or a data source
  const logos = [
    "Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5", "Logo 6"
  ];

  return (
    <section className="py-12 bg-white"> {/* Consider making bg optional via props */}
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden">
          {/* Using 'animate-marquee' class assumed to be defined in CSS (e.g., index.css or via Tailwind config) */}
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Logos duplicated for seamless scroll effect */}
            {[...Array(2)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {logos.map((logoText, logoIndex) => (
                  <div key={`${setIndex}-${logoIndex}`} className="flex-shrink-0 w-24 sm:w-32 md:w-40 mx-4 sm:mx-6 md:mx-8 flex items-center justify-center h-12 sm:h-14 md:h-16">
                    {/* In a real app, this would likely be an <img> tag */}
                    <span className="text-brand-peach text-lg sm:text-xl md:text-2xl font-bold">{logoText}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollingLogos;