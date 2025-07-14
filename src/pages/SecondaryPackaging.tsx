import ServicePageWithSections from '../components/ServicePageWithSections';
import { useEffect, useState } from 'react';
import { fetchSanityData } from '../lib/sanityUtils';

// Dummy FAQ data specific to Secondary Packaging
const faqItems = [
  { question: "What defines 'secondary' packaging?", answer: "Secondary packaging often involves premium materials (rigid board, speciality papers), sophisticated construction, intricate finishes (embossing, foiling), and a focus on the unboxing experience." },
  { question: "What types of secondary packaging do you offer?", answer: "We specialise in rigid boxes, folding cartons with premium finishes, custom inserts (foam, paperboard, fabric), ribbons, and other decorative elements." },
  { question: "Can you design the packaging structure?", answer: "Yes, our structural design team can create bespoke packaging structures that are both protective and visually stunning, tailored to your product and brand." },
  { question: "What sustainable secondary packaging options are available?", answer: "We offer options like FSC-certified papers, recycled board, soy-based inks, and designs that minimise waste or encourage reuse." },
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

function SecondaryPackaging() {
  const [sectionImagesByTitle, setSectionImagesByTitle] = useState<Record<string, SanityImageObject | undefined>>({});

  useEffect(() => {
    async function fetchSectionImages() {
      const results: { sectionName: string; image: SanityImageObject }[] = await fetchSanityData(
        `*[_type == "servicePageSection" && serviceName == "Secondary Packaging"]{sectionName, image{..., asset->, alt}}`
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
      title: "Tuck Boxes",
      content: (
        <>
          <p className="mb-4">Custom-made, or ready-made, we can provide branded tuck boxes with tuck or roll tops, straight or reverse ends, or tab locks that will show off and protect your product.</p>
          <p>Easily assembled and stored these boxes can be enhanced with see-through windows and protective inserts. Our graphic design team can create a luxury finish that showcases and elevates your brand line.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Rigid Boxes",
      content: (
        <>
          <p className="mb-4">Showcase your product through expertly crafted, precision-made original rigid boxes, available in many shapes, sizes and finishes.</p>
          <p>Using our state-of-the-art production facilities, our expert designers will create and deliver high-quality products that look spectacular and provide superior, stylish protection for your product.</p>
        </>
      ),
      imageLeft: false
    },
    {
      title: "Magnetic Boxes",
      content: (
        <>
          <p className="mb-4">Created from rigid, long-lasting materials and enveloped in a luxury finish that oozes decadence, our designers will create a unique box with a magnetic closure for your products.</p>
          <p className="mb-4">With the option to print inside and out, you have an ideal opportunity to convey key information about the product, its benefits and its ingredients.</p>
          <p>Add a branded ribbon for a memorable unboxing experience. A cost-effective, re-usable box with shelf appeal.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Box Sleeves",
      content: (
        <>
          <p className="mb-4">Box sleeves offer a versatile, low-cost opportunity to brand your product. The perfect place to convey product information and add a touch of class.</p>
          <p>Custom box sleeves are available in a wide selection of finishes, either single or double-sided, and in a range of sizes. Sleek, simple and effective.</p>
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
      title="Secondary Packaging"
      description="Uplifting, secondary packaging is vital to showcase your brand's elegance and style."
      sections={sections}
      faqItems={faqItems}
      sectionImagesByTitle={normalizedSectionImages}
    />
  );
}

export default SecondaryPackaging;