import React, { useEffect, useState } from 'react';
import ServicePageWithSections from '../components/ServicePageWithSections';
import { fetchSanityData } from '../lib/sanityUtils';

// Dummy FAQ data specific to Skincare Componentry
const faqItems = [
  { question: "What types of skincare components do you supply?", answer: "We supply a wide range, including jars, tubes, airless dispensers, droppers, and more specifically designed for skincare applications." },
  { question: "Can you help with material selection?", answer: "Yes, our team can advise on suitable materials (plastics like PP, PET, SAN; glass; aluminium) based on your product formula, budget, and aesthetic goals." },
  { question: "Do you offer eco-friendly skincare packaging?", answer: "We are committed to sustainability and offer options like PCR plastics, refillable systems, mono-material designs, and lightweight packaging." },
  { question: "What decoration options are available for skincare components?", answer: "We offer various decoration techniques, including silk screening, hot stamping, heat transfer labelling, metallisation, and custom colour matching." },
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

function SkincareComponentry() {
  const [sectionImagesByTitle, setSectionImagesByTitle] = useState<Record<string, SanityImageObject | undefined>>({});

  useEffect(() => {
    async function fetchSectionImages() {
      const results: { sectionName: string; image: SanityImageObject }[] = await fetchSanityData(
        `*[_type == "servicePageSection" && serviceName == "Skincare Componentry"]{sectionName, image{..., asset->, alt}}`
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
      title: "Jars",
      content: (
        <>
          <p className="mb-4">Premium quality glass and plastic jars, in a variety of shapes and sizes, with options for in-mould labelling to add a permanent, premium finish. Custom-made or stock items are available.</p>
          <p>Add an inner shive, a plastic liner that sits in the jar neck, to elevate the perceived value of a skincare product, helping to keep the product fresher for longer.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Tubes",
      content: (
        <>
          <p className="mb-4">Durable, eco-friendly sleek, stylish and versatile plastic or aluminium tubes are cost-effective and lightweight, available in a range of shapes, sizes, colours.</p>
          <p>Reusable, recyclable and refillable, they provide hygienic, airtight packaging for your product, custom-made or available from our catalogue of stock options.</p>
        </>
      ),
      imageLeft: false
    },
    {
      title: "Lids",
      content: (
        <>
          <p>Sustainable, Customisable, and Eco-Friendly Lids for Your Cosmetic Products available in a range of materials. Our lids can be customised or you can purchase from our extensive stock catalogue.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Bottles",
      content: (
        <>
          <p className="mb-4">Reinforce the shelf appeal of your product by opting for a customisable bottle with a unique shape and design and a range of caps to choose from.</p>
          <p>Sleek, lightweight, recyclable and reusable, bottles are a versatile, durable packaging option for health and beauty products. Custom-made and stock options are available.</p>
        </>
      ),
      imageLeft: false
    },
    {
      title: "Makeup Wands & Applicators",
      content: (
        <>
          <p className="mb-4">High-quality makeup wands and brushes are essential items for every makeup kit. They offer precise, even application of makeup and foundation, resulting in smoother coverage, accurate placement and a superior finish.</p>
          <p>Custom-made or stock options are available with wooden or synthetic handles and natural or synthetic brush fibres.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Droppers",
      content: (
        <>
          <p className="mb-4">Widely used in the beauty and aromatherapy industries for oils and perfumes, glass dropper bottles are a sleek, versatile option for the controlled, precise dispensing of potent liquids.</p>
          <p>Small, but perfectly formed, and made of the highest quality glass, available in a range of colours and sizes, either stock options or custom-made.</p>
        </>
      ),
      imageLeft: false
    },
    {
      title: "Spatulas",
      content: (
        <>
          <p>Single-use, multi-purpose hygienic applicators, perfect for testing, mixing and applying a range of products. Available in bulk as stock options or customisable to stay on brand.</p>
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
      title="Skincare Componentry"
      description="We supply fully tested, certified skincare products trusted by some of the most well-known skincare brands in the UK and Europe. We have a reliable supply chain of jars, tubes, lids, applicators, droppers & spatulas, available to order as standalone products or as part of a bespoke product range."
      sections={sections}
      faqItems={faqItems}
      sectionImagesByTitle={normalizedSectionImages}
    />
  );
}

export default SkincareComponentry;
