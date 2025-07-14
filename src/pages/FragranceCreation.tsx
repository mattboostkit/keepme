import React, { useEffect, useState } from 'react';
import ServicePageWithSections from '../components/ServicePageWithSections';
import FragranceConcentrations from '../components/FragranceConcentrations';
import { fetchSanityData } from '../lib/sanityUtils';

// Dummy FAQ data specific to Fragrance Creation
const faqItems = [
  { question: "What is the typical process for creating a custom fragrance?", answer: "Our process involves initial consultation, scent development based on your brief, sample evaluation, refinement, and final production. We collaborate closely with you at each stage." },
  { question: "How long does fragrance creation take?", answer: "The timeline varies depending on complexity, but typically ranges from a few weeks for modifications to several months for entirely new creations." },
  { question: "What are the recommended fragrance inclusion rates?", answer: "Inclusion rates vary by application: EDP (20-30%), EDT (15-20%), Body Mist (2-7%, trending up to 10%), Hair Mist (2-7%), Diffusers (15-30%), and Candles (8-10%). Regional preferences and regulations can affect these rates - for example, Middle Eastern markets often use higher concentrations. Our experts will guide you on optimal dosage for your specific needs." },
  { question: "Can you replicate an existing scent?", answer: "While we don't directly replicate trademarked scents, we can create fragrances inspired by specific profiles or notes you admire." },
  { question: "What are the minimum order quantities?", answer: "Minimum order quantities depend on the specific project details. Please contact us to discuss your requirements." },
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

function FragranceCreation() {
  const [sectionImagesByTitle, setSectionImagesByTitle] = useState<Record<string, SanityImageObject | undefined>>({});

  useEffect(() => {
    async function fetchSectionImages() {
      const results: { sectionName: string; image: SanityImageObject }[] = await fetchSanityData(
        `*[_type == "servicePageSection" && serviceName == "Fragrance Creation"]{sectionName, image{..., asset->, alt}}`
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
      title: "Creation Process",
      content: (
        <>
          <p className="mb-4">The creative journey transforms raw materials into stunning fragrances to evoke the senses.</p>
          <p className="mb-4">Carefully selected ingredients from a palette of natural and synthetic notes, including essential oils, floral absolutes, spices, woods, and musks are meticulously balanced to craft a harmonious, layered composition.</p>
          <p>Through patient trial, testing, and refinement, our perfumers blend and amend proportions, creating a fragrance that delights the senses and leaves a lasting impression.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Applications",
      content: (
        <>
          <p className="mb-4">Our fine fragrances can be reimaged for perfumes, candles, and diffusers, as well as luxury lotions and soaps.</p>
          <p className="mb-4">What works for a fine fragrance may need to be modified for a candle, or skincare product, so formulations are adapted to the medium, ensuring the scent interacts perfectly with heat, water, or skin.</p>
          <p>Each scent is perfectly tailored to its purpose, ensuring a fresh, engaging experience every time.</p>
        </>
      ),
      imageLeft: false
    },
    {
      title: "Blending & Maceration",
      content: (
        <>
          <p className="mb-4">Like a fine wine, fragrances mature gracefully over time, resulting in a smooth, balanced, and irresistibly captivating perfume. Through blending and maceration, the magic of perfumery comes to life.</p>
          <p className="mb-4">Blending is the artful process of combining various scent ingredients, like florals, woods, and spices, into a balanced composition that tells a story.</p>
          <p>It's all about experimenting and finding harmony between notes, often through many rounds of fine-tuning. When the blend is perfected, maceration begins, a crucial resting phase where the fragrance ingredients meld together over time, deepening and refining the scent.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Fragrance Strengths & Types",
      content: (
        <>
          <p className="mb-4">Understanding fragrance strengths is crucial for creating the perfect product. Each application requires specific concentration levels to achieve optimal performance and consumer satisfaction.</p>
          <div className="my-6">
            <FragranceConcentrations />
          </div>
          <p className="mb-4">A fragrance or aroma wheel illustrates the relationships between the four main olfactory groups based on their scent similarities and differences.</p>
          <p className="mb-4">The wheel is organised into segments, each representing a specific scent category, with adjacent groups sharing common traits. This helps to identify and classify scents, making it easier to understand how fragrances relate to and complement one another.</p>
        </>
      ),
      imageLeft: false
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
      title="Fragrance Creation"
      description="Discover the art and science behind crafting unique and captivating scents tailored specifically for your brand."
      sections={sections}
      faqItems={faqItems}
      sectionImagesByTitle={normalizedSectionImages}
    />
  );
}

export default FragranceCreation;