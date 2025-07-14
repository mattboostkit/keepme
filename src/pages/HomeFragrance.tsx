import React, { useEffect, useState } from 'react';
import ServicePageWithSections from '../components/ServicePageWithSections';
import { fetchSanityData } from '../lib/sanityUtils';

// Dummy FAQ data specific to Home Fragrance
const faqItems = [
  { question: "What types of home fragrance products can you create?", answer: "We specialise in scented candles (various waxes, vessels, wicks), reed diffusers (different base oils and reed types), room sprays, and wax melts." },
  { question: "Can you develop custom scents for home products?", answer: "Yes, our perfumers can create bespoke fragrances specifically designed for optimal performance and scent throw in home fragrance applications." },
  { question: "What vessel options are available for candles and diffusers?", answer: "We offer a wide selection of glass, ceramic, and metal vessels, and can also source or develop custom containers to match your brand aesthetic." },
  { question: "Do you handle filling and assembly for home fragrance products?", answer: "Yes, we provide full-service manufacturing, including fragrance development, component sourcing, filling, assembly, and packaging." },
];

// Define the type for a Sanity image object
interface SanityImageObject {
  asset: {
    _id: string;
    _ref?: string;
    url?: string;
    _type: string;
  };
  alt?: string;
}

// Utility to clean section names for robust mapping
function cleanKey(str: string) {
  return str
    .normalize('NFKC')
    .replace(/[^a-zA-Z0-9 &]/g, '')
    .trim()
    .toLowerCase();
}

// Recursively clean all string fields in an object
function deepCleanStrings(obj: unknown): unknown {
  if (typeof obj === 'string') {
    return obj
      .normalize('NFKC')
      .replace(/[^\x20-\x7E]/g, '') // keep only printable ASCII
      .trim();
  } else if (Array.isArray(obj)) {
    return obj.map(deepCleanStrings);
  } else if (obj && typeof obj === 'object') {
    const cleaned: Record<string, unknown> = {};
    for (const key in obj as Record<string, unknown>) {
      cleaned[key] = deepCleanStrings((obj as Record<string, unknown>)[key]);
    }
    return cleaned;
  }
  return obj;
}

function HomeFragrance() {
  const [sectionImagesByTitle, setSectionImagesByTitle] = useState<Record<string, SanityImageObject | undefined>>({});

  useEffect(() => {
    async function fetchSectionImages() {
      const results: { sectionName: string; image: SanityImageObject }[] = await fetchSanityData(
        `*[_type == "servicePageSection" && serviceName == "Home Fragrance"]{sectionName, image{..., asset->, alt}}`
      );
      // Map images by cleaned section name
      const imagesByKey: Record<string, SanityImageObject> = {};
      results.forEach((section) => {
        const cleaned = cleanKey(section.sectionName || '');
        const image: SanityImageObject = section.image
          ? (deepCleanStrings(section.image) as SanityImageObject)
          : { asset: { _type: '', _id: '' } };
        imagesByKey[cleaned] = image;
      });
      setSectionImagesByTitle(imagesByKey);
    }
    fetchSectionImages();
  }, []);

  const sections = [
    {
      title: "Candles",
      content: (
        <>
          <p className="mb-4">Our expertly crafted luxury scented candles are carefully blended to evoke the senses. They are made with the highest-quality ingredients and enriched with essential oils and unique botanical blends.</p>
          <p>Offering bespoke designs, a selection of wax types, and custom-made bottles to suit and enhance your brand, our clean-burning, long-lasting fragrances exude an air of refinement and tranquillity.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Diffusers",
      content: (
        <>
          <p className="mb-4">With a range of scents created to help you relax and unwind, promote sleep, increase your focus, or feel energised, reed diffusers offer a long-lasting, flame-free alternative to scented candles.</p>
          <p>Uniquely blended from natural ingredients, customised and branded reed diffusers are an excellent addition to a luxury product range, designed to delight the senses.</p>
        </>
      ),
      imageLeft: false
    },
    {
      title: "Room Sprays",
      content: (
        <>
          <p className="mb-4">The essential oils in mist sprays can instantly enhance your mood, help promote restful sleep and freshen up your space.</p>
          <p>Created from natural oils and botanicals, mist sprays have a long-lasting, uplifting effect, and can be customised to suit your brand.</p>
        </>
      ),
      imageLeft: true
    }
  ];

  // Normalize section titles for lookup
  const normalizedSectionImages: Record<string, SanityImageObject | undefined> = {};
  sections.forEach(section => {
    const cleaned = cleanKey(section.title);
    normalizedSectionImages[cleaned] = sectionImagesByTitle[cleaned];
  });

  return (
    <ServicePageWithSections
      title="Home Fragrance"
      description="Our extensive Lifestyle portfolio offers a beautiful selection of Home and Lifestyle products, including diffusers and luxury candles. Combining quality and style to create exquisite products."
      sections={sections}
      faqItems={faqItems}
      sectionImagesByTitle={normalizedSectionImages}
    />
  );
}

export default HomeFragrance;