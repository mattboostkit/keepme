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
  image: any; // Sanity image reference
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
    <div className="pt-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">{title}</h1>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          {description}
        </p>

        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-card"></div>
          </div>
        )}
      </div>

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
              ? urlFor(sectionImage.image).width(500).height(500).url()
              : `https://via.placeholder.com/500x500.png?text=${encodeURIComponent(section.title)}`
            }
            imageLeft={section.imageLeft}
            index={index}
          />
        );
      })}

      {/* FAQ Section */}
      {faqItems.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <FaqAccordion items={faqItems} />
          </div>
        </section>
      )}
    </div>
  );
};

export default ServicePageWithSections;
