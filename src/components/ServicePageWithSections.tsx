import React from 'react';
import ContentSection from './ContentSection';
import FaqAccordion from './FaqAccordion';
import { urlFor } from '../lib/sanity';

// Define the type for a Sanity image object
interface SanityImageObject {
  asset: {
    _ref?: string;
    _type: string;
    _id?: string;
    url?: string;
  };
  alt?: string;
}

interface ServicePageWithSectionsProps {
  title: string;
  description: string;
  sections: {
    title: string;
    content: React.ReactNode;
    imageLeft: boolean;
    image?: SanityImageObject; // Optional image per section
  }[];
  faqItems: { question: string; answer: string }[];
  sectionImagesByTitle?: Record<string, SanityImageObject | undefined>; // Map of section title to image (can be undefined)
}

// Utility to clean section names for robust mapping (must match FragranceComponentry)
function cleanKey(str: string) {
  return str
    .normalize('NFKC')
    .replace(/[^a-zA-Z0-9 &]/g, '')
    .trim()
    .toLowerCase();
}

const ServicePageWithSections: React.FC<ServicePageWithSectionsProps> = ({
  title,
  description,
  sections,
  faqItems,
  sectionImagesByTitle = {},
}) => {
  return (
    <div>
      {/* Hero Section with brand background */}
      <section className="py-16 md:py-20 bg-brand-peach">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-sans font-semibold text-brand-plum mb-6">{title}</h1>
            <p className="text-xl text-gray-600 mb-8">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Render each section */}
      {sections.map((section, index) => {
        const lookupKey = cleanKey(section.title);
        const image = sectionImagesByTitle[lookupKey];
        console.log(`ServicePageWithSections: lookupKey='${lookupKey}', found image:`, !!image, image);
        let imageUrl = '';
        if (image && image.asset && (image.asset._id || image.asset.url)) {
          imageUrl = urlFor(image).width(600).height(400).fit('crop').crop('center').format('webp').url();
        } else {
          imageUrl = `https://via.placeholder.com/600x400.png?text=${encodeURIComponent(section.title)}`;
        }
        if (!image || !image.asset || !(image.asset._id || image.asset.url)) {
          console.warn(`No Sanity image found for section: '${section.title}'. Using placeholder.`);
        }
        return (
          <ContentSection
            key={index}
            title={section.title}
            text={section.content}
            imageUrl={imageUrl}
            imageLeft={section.imageLeft}
            index={index}
          />
        );
      })}

      {/* FAQ Section */}
      {faqItems.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-sans font-semibold text-gray-900 mb-4">
                Frequently Asked <span className="text-brand-mauve">Questions</span>
              </h2>
              <p className="text-gray-600">
                Find quick answers to common enquiries about this service
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-20 bg-brand-pink-light">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Contact <span className="text-brand-plum">Us</span>
            </h2>
            <p className="text-lg text-gray-600">Get in touch to discuss your project requirements</p>
            <a href="/contact" className="inline-block mt-8 px-8 py-3 bg-brand-mauve text-white font-bold rounded-full hover:bg-brand-rose transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageWithSections;
