import React from 'react';
import Testimonials from '../components/Testimonials';

function TestimonialsDemo() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Testimonials Component Demo</h1>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          This page demonstrates how to use the Testimonials component on different pages with custom content.
        </p>

        {/* Example 1: Sanity Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Example 1: Sanity Testimonials</h2>
          <p className="mb-8">Using the component with data from Sanity:</p>

          <Testimonials useSanity={true} />
        </div>

        {/* Example 2: Custom Title and Subtitle */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Example 2: Custom Title and Subtitle</h2>
          <p className="mb-8">Customizing the title and subtitle:</p>

          <Testimonials
            title="Customer Success Stories"
            subtitle="See how our products have helped businesses achieve their goals"
            useSanity={false}
            testimonials={[
              {
                _id: '1',
                quote: "The fragrance componentry provided by KeepMe elevated our product line to a new level of luxury. Our customers immediately noticed the difference.",
                name: "Michael Thompson",
                title: "Product Manager",
                company: "Elite Scents",
                image: "https://placehold.co/80x80/png",
                displayOrder: 1
              },
              {
                _id: '2',
                quote: "Their home fragrance solutions perfectly captured our brand essence. Sales have increased by 30% since we launched the new collection.",
                name: "Olivia Parker",
                title: "Marketing Director",
                company: "Ambiance Co.",
                image: "https://placehold.co/80x80/png",
                displayOrder: 2
              }
            ]}
          />
        </div>

        {/* Example 3: Single Testimonial */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Example 3: Single Testimonial</h2>
          <p className="mb-8">Using the component with just one testimonial:</p>

          <Testimonials
            title="Featured Testimonial"
            subtitle="Hear from our most valued partner"
            useSanity={false}
            testimonials={[
              {
                _id: '3',
                quote: "KeepMe's luxury packaging solutions have become an integral part of our brand identity. The attention to detail and quality of materials exceed our expectations every time. We wouldn't trust anyone else with our packaging needs.",
                name: "Alexandra Bennett",
                title: "Founder & CEO",
                company: "Lumière Parfums",
                image: "https://placehold.co/80x80/png",
                displayOrder: 1
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsDemo;
