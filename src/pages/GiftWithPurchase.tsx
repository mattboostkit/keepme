import ServicePageWithSections from '../components/ServicePageWithSections';
import { useEffect, useState } from 'react';
import { fetchSanityData } from '../lib/sanityUtils';

// Dummy FAQ data specific to Gift With Purchase
const faqItems = [
  { question: "What kind of GWP items can you source?", answer: "We can source a wide variety of items relevant to fragrance and lifestyle brands, such as miniature perfumes, cosmetic bags, pouches, candles, accessories, and more." },
  { question: "Can the GWP items be branded?", answer: "Yes, we work with suppliers who can customise items with your logo or brand design through various methods like printing, embroidery, or embossing." },
  { question: "How do you ensure the quality of GWP items?", answer: "We partner with reliable suppliers and implement quality control checks to ensure the GWP items meet your brand's standards and expectations." },
  { question: "What are the typical lead times for GWP sourcing?", answer: "Lead times depend heavily on the item, customisation, and quantity. We recommend planning GWP campaigns several months in advance." },
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

function GiftWithPurchase() {
  const [sectionImagesByTitle, setSectionImagesByTitle] = useState<Record<string, SanityImageObject | undefined>>({});

  useEffect(() => {
    async function fetchSectionImages() {
      const results: { sectionName: string; image: SanityImageObject }[] = await fetchSanityData(
        `*[_type == "servicePageSection" && serviceName == "Gift With Purchase"]{sectionName, image{..., asset->, alt}}`
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
      title: "Branded Goods",
      content: (
        <>
          <p className="mb-4">Expand your product range and communicate your brand values and identity with visually appealing branded goods.</p>
          <p className="mb-4">A greater selection of products helps to solidify your brand's position in the marketplace, increasing customer confidence and loyalty.</p>
          <p>Branded goods offer economical, ongoing advertising, from miniatures to travel bags, wash bags, ceramic discs, sample vials, wallets, and free samples.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Travel Size Products",
      content: (
        <>
          <p className="mb-4">Boost brand awareness with travel-sized perfumes, creams, and lip balms as complimentary products or miniature gift sets.</p>
          <p>Custom-made miniatures are available in bottles, jars, and tubes and are packaged in bespoke or off-the-shelf branded bags and boxes.</p>
        </>
      ),
      imageLeft: false
    },
    {
      title: "Travel Bags",
      content: (
        <>
          <p className="mb-4">An essential accessory for every discerning traveller. High-quality, branded, fully lined, travel washbags available in a range of sizes and materials.</p>
          <p className="mb-4">Stylish, practical, durable, and customisable, with an array of print options, swing tags, plaques, and zippers.</p>
          <p>Continuous customer brand awareness on the go.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Free Samples",
      content: (
        <>
          <p className="mb-4">Expand your customer base and increase brand awareness by offering complimentary items with purchase or as free samples to potential new customers.</p>
          <p className="mb-4">A reward for loyal customers and the perfect enticer for those who like to shop around for new and exciting luxury scents and home fragrance products, creating a positive consumer experience.</p>
          <p>Available as single or multi-use products for a longer customer experience, in a range of recyclable materials, folding cards, sleeves, glass, foil, burst-proof sachets, and pouches.</p>
        </>
      ),
      imageLeft: false
    },
    {
      title: "Robes",
      content: (
        <>
          <p className="mb-4">Whether a classic or modern style, created from plush or lightweight fabrics, high-quality branded dressing gowns are a sublime addition to any luxury brand.</p>
          <p>The ultimate item of customisable loungewear, perfect for relaxation and comfort, and created from durable, sustainable luxurious fabrics.</p>
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
      title="Gift With Purchase"
      description="Offering a gift with purchase is a powerful way to reward loyal customers, attract new ones, and showcase new products. Complimentary items make customers feel appreciated while increasing perceived value. From branded goods and travel-sized products to skincare kits, robes, and samples, we offer a wide range of options to help elevate your brand and engage buyers."
      sections={sections}
      faqItems={faqItems}
      sectionImagesByTitle={normalizedSectionImages}
    />
  );
}

export default GiftWithPurchase;
