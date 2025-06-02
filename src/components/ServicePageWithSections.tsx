import React, { useState, useEffect } from 'react';
import ContentSection from './ContentSection';
import FaqAccordion from './FaqAccordion';
import { fetchSanityData } from '../lib/sanityUtils';
import { urlFor } from '../lib/sanity';

// Define the ServicePageSection interface
interface ServicePageSection {
  _id: string;
  serviceName: string;
  sectionName: string;
  image: {
    asset: {
      _ref: string;
    };
  }; // Sanity image reference
  order: number;
}

interface ServicePageWithSectionsProps {
  title: string;
  description: string;
  serviceName: string;
  sections: {
    title: string;
    content: React.ReactNode;
    imageLeft: boolean;
  }[];
  faqItems: { question: string; answer: string }[];
}

const ServicePageWithSections: React.FC<ServicePageWithSectionsProps> = ({
  title,
  description,
  serviceName,
  sections,
  faqItems,
}) => {
  // State for section images
  const [sectionImages, setSectionImages] = useState<ServicePageSection[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch section images from Sanity
  useEffect(() => {
    const fetchSectionImages = async () => {
      try {
        setLoading(true);
        const result = await fetchSanityData<ServicePageSection[]>(
          `*[_type == "servicePageSection" && serviceName == "${serviceName}"] | order(order asc)`
        );
        setSectionImages(result);
      } catch (error) {
        console.error(`Error fetching ${serviceName} section images:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchSectionImages();
  }, [serviceName]);

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

      {/* Loading indicator */}
      {loading && (
        <div className="flex justify-center items-center py-8 bg-white">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-peach"></div>
        </div>
      )}

      {/* Render each section */}
      {sections.map((section, index) => {
        // Find the matching image from Sanity
        const sectionImage = sectionImages.find(img => img.sectionName === section.title);

        return (
          <ContentSection
            key={index}
            title={section.title}
            text={section.content}
            imageUrl={sectionImage?.image
              ? urlFor(sectionImage.image).width(600).height(400).fit('crop').crop('center').format('webp').url()
              : `https://via.placeholder.com/600x400.png?text=${encodeURIComponent(section.title)}`
            }
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
              Contact <span className="text-brand-mauve">Us</span>
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
