import ServicePageWithSections from '../components/ServicePageWithSections';
import { useEffect, useState } from 'react';
import { fetchSanityData } from '../lib/sanityUtils';

// Define the type for a Sanity image object (should match the one in ServicePageWithSections)
interface SanityImageObject {
  asset: {
    _id: string;
    _ref?: string;
    url?: string;
    _type: string;
  };
  alt?: string;
}

// Dummy FAQ data specific to Fragrance Componentry
const faqItems = [
  { question: "What is the PCR content in your glass?", answer: "Our glass contains up to 30% post-consumer recycled (PCR) content. This level ensures sustainability without compromising the clarity and quality essential for premium perfume packaging. Higher percentages can affect the glass’s integrity, which is why we prioritise both performance and environmental responsibility." },
  { question: "Can you source custom-designed components?", answer: "Yes, we work with a network of manufacturers and can source or develop custom components based on your specific design requirements and technical specifications." },
  { question: "Do you offer sustainable component options?", answer: "Absolutely. We can source components made from recycled materials (like PCR glass or plastic), biodegradable materials, or refillable designs." },
  { question: "What are the lead times for component sourcing?", answer: "Lead times vary depending on the component type, customisation level, and supplier. Standard components might take a few weeks, while custom moulds can take several months." },
  { question: "What type of furnace do you use?", answer: "We use an electric furnace, which offers greater energy efficiency and reduced emissions compared to traditional gas furnaces—supporting both high-quality glass production and our commitment to sustainability." },
  { question: "How do you check the quality and integrity of the glass?", answer: "We follow a strict quality control process that includes visual inspections and the use of polarised light machines to detect stress, ensure clarity, and maintain structural integrity—meeting the high standards required for premium fragrance glass." },
  { question: "What is the most critical part of the production process?", answer: "The most critical aspects are the quality of raw materials, our team’s expertise, and rigorous quality control. Together, they ensure each glass component meets the exacting standards required for luxury fragrance packaging." },
];

// Utility to clean section names for robust mapping
function cleanKey(str: string) {
  // Normalize to NFKC, remove all but a-z, A-Z, 0-9, space, and &
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

function FragranceComponentry() {
  const [sectionImagesByTitle, setSectionImagesByTitle] = useState<Record<string, SanityImageObject | undefined>>({});

  useEffect(() => {
    async function fetchSectionImages() {
      const results: { sectionName: string; image: SanityImageObject }[] = await fetchSanityData(
        `*[_type == "servicePageSection" && serviceName == "Fragrance Componentry"]{sectionName, image{..., asset->, alt}}`
      );
      console.log('Full Sanity response:', results);
      // Map images by cleaned section name
      const imagesByKey: Record<string, SanityImageObject> = {};
      results.forEach((section) => {
        const cleaned = cleanKey(section.sectionName || '');
        // Deep clean the entire image object, or use a default empty object
        const image: SanityImageObject = section.image
          ? (deepCleanStrings(section.image) as SanityImageObject)
          : { asset: { _type: '', _id: '' } };
        imagesByKey[cleaned] = image;
      });
      console.log('Final imagesByKey mapping:', JSON.stringify(imagesByKey, null, 2));
      setSectionImagesByTitle(imagesByKey);
    }
    fetchSectionImages();
  }, []);

  const sections = [
    {
      title: "Fragrance Bottles",
      content: (
        <>
          <p className="mb-4">We hold over 100 moulds for the immediate supply and ongoing production of stock bottles and candle jars. A cost-effective option that offers fast lead times, low MOQs, and a full decoration service from a simple logo to a full bottle coating with a custom finish.</p>
          <p>We also offer a full custom mould and production service for customers looking for a bespoke product. Our UK team will guide you through every step from concept design, to manufacture and delivery.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Vials & Pumps",
      content: (
        <>
          <p className="mb-4">We can provide a full range of pumps, collars, and closures, with the option of bespoke colours. Our pumps are available with various dosages and spray patterns, in a range of FEA sizes, with or without crimping.</p>
          <p>High-quality glass vials range from 1.5ml to 20ml, with a full decoration service and in-house filling on a state-of-the-art, fully automated carousel.</p>
        </>
      ),
      imageLeft: false
    },
    {
      title: "Caps & Collars",
      content: (
        <>
          <p className="mb-4">Perfume caps are available in a range of materials, from metallic and plastic to glass, marble, resin, and Zamac and can be bought as stock items from our extensive catalogue or custom-made for bespoke designs.</p>
          <p>The cap on a perfume bottle is not just there to preserve the liquid's aroma and freshness; it can also enhance the aesthetic appeal of the bottle, and make your product stand out from the competition.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Plaques & Shields",
      content: (
        <>
          <p className="mb-4">Customised plaque labels enhance a brand's personality, oozing decadence and luxury; a perfect opportunity to infuse a sense of sophistication and showcase the brand's identity.</p>
          <p>Intricate designs, either etched or stamped, enhance a brand's recognition and elevate the product's perceived value.</p>
        </>
      ),
      imageLeft: false
    }
  ];

  // Normalize section titles for lookup and log them
  const normalizedSectionImages: Record<string, SanityImageObject | undefined> = {};
  sections.forEach(section => {
    const cleaned = cleanKey(section.title);
    normalizedSectionImages[cleaned] = sectionImagesByTitle[cleaned];
    // Log each normalized key from the frontend
    console.log(`Frontend section title: '${section.title}' | Cleaned: '${cleaned}'`);
  });

  return (
    <ServicePageWithSections
      title="Fragrance Componentry"
      description="Find the perfect housing for your signature scent with our extensive selection of high-quality fragrance components."
      sections={sections}
      faqItems={faqItems}
      sectionImagesByTitle={normalizedSectionImages}
    />
  );
}

export default FragranceComponentry;