import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Timeline } from '../components/ui/Timeline';
import { fetchSanityData } from '../lib/sanityUtils';
import { urlFor } from '../lib/sanity';
import { PortableText } from '@portabletext/react';
import { useSEO } from '../hooks/useSEO';

// Types
interface SanityImageReference {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

interface GlassPageData {
  heroTitle: string;
  heroDescription: string;
  heroImage?: SanityImageReference;
  expertiseTitle: string;
  expertisePoints: string[];
  heroBadge1Text: string;
  heroBadge1Subtext: string;
  heroBadge2Text: string;
  heroBadge2Subtext: string;
  glassTypesTitle: string;
  glassTypesDescription: string;
  processTitle: string;
  processDescription: string;
  customSolutionsTitle: string;
  customSolutionsDescription: string;
  customSolutionsFeatures: Array<{
    _key: string;
    title: string;
    description: string;
  }>;
  customSolutionsCta: string;
  customSolutionsImages?: SanityImageReference[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  seoTitle?: string;
  seoDescription?: string;
}

interface GlassType {
  _id: string;
  title: string;
  content: any[];
  displayOrder: number;
}

interface ManufacturingStep {
  _id: string;
  title: string;
  description: string;
  bulletPoints?: string[];
  image?: SanityImageReference;
  displayOrder: number;
}

// Default timeline data (fallback)
const defaultTimelineData = [
  {
    title: "Raw Materials",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-brand-plum dark:text-brand-plum mb-2">Raw Materials</h3>
        <p className="text-brand-mauve dark:text-neutral-300 text-sm md:text-base">
          Sourcing and mixing high-quality raw materials such as silica sand, soda ash, limestone, and other additives required for glass production. Our facility uses state of the art technology to carefully mix the raw materials into a precise formula (batch).
        </p>
        <img 
          src="https://cdn.sanity.io/images/tyzs5imn/production/d44d11713334b38c92e50653c3f621ccef490718-1200x800.webp" 
          alt="Sourcing and mixing raw materials for glass production" 
          className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" 
          loading="lazy"
          decoding="async"
        />
      </div>
    ),
  },
  {
    title: "Melting and Forming",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-brand-plum dark:text-brand-plum mb-2">Melting and Forming</h3>
        <p className="text-brand-mauve dark:text-neutral-300 text-sm md:text-base">
          Heating the batch in a furnace at extremely high temperatures (around 1,500°C / 2,732°F) until it melts into molten glass. The molten glass is then formed using traditional and modern methods including:
        </p>
        <ul className="list-disc list-inside text-brand-mauve dark:text-neutral-300 text-sm md:text-base mt-2">
          <li>Blow and Blow</li>
          <li>Press and Blow</li>
        </ul>
        <img 
          src="https://cdn.sanity.io/images/tyzs5imn/production/eaf07ea735af0ef69759f30e3762caf39d7eeb92-1600x1066.webp" 
          alt="Molten glass being formed" 
          className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" 
          loading="lazy"
          decoding="async"
        />
      </div>
    ),
  },
  {
    title: "Annealing",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-brand-plum dark:text-brand-plum mb-2">Annealing</h3>
        <p className="text-brand-mauve dark:text-neutral-300 text-sm md:text-base">
          Slowly cooling the formed glass bottles in an annealing oven (lehr) to relieve internal stresses and prevent cracking.
        </p>
        <img 
          src="https://cdn.sanity.io/images/tyzs5imn/production/c04c75d97aa256414fdfc589f11e866905f2b000-1600x1066.webp" 
          alt="Glass bottles in an annealing oven" 
          className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" 
          loading="lazy"
          decoding="async"
        />
      </div>
    ),
  },
  {
    title: "Quality Control",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-brand-plum dark:text-brand-plum mb-2">Quality Control</h3>
        <p className="text-brand-mauve dark:text-neutral-300 text-sm md:text-base">
          Checking bottles for defects such as bubbles, cracks, or irregular shapes using automated systems and manual inspection. The bottles are then packed for shipment to customers or decoration facilities.
        </p>
        <img 
          src="https://cdn.sanity.io/images/tyzs5imn/production/582d5e7983c888e264a3e527547bf57632c026b7-1600x1066.webp" 
          alt="Manual inspection of glass bottles" 
          className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" 
          loading="lazy"
          decoding="async"
        />
      </div>
    ),
  },
  {
    title: "Finishing & Decorating",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-brand-plum dark:text-brand-plum mb-2">Finishing & Decorating</h3>
        <p className="text-brand-mauve dark:text-neutral-300 text-sm md:text-base">
          Expert finishing techniques and decorative elements add distinctive character to each piece.
        </p>
        <img 
          src="https://cdn.sanity.io/images/tyzs5imn/production/34c9b100b596972fdbf1429d14462043725ed3df-1600x1066.webp" 
          alt="Decorated glass perfume bottles" 
          className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" 
          loading="lazy"
          decoding="async"
        />
      </div>
    ),
  },
];

function Glass() {
  const [pageData, setPageData] = useState<GlassPageData | null>(null);
  const [glassTypes, setGlassTypes] = useState<GlassType[]>([]);
  const [manufacturingSteps, setManufacturingSteps] = useState<ManufacturingStep[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch Glass Page data
        const pageResult = await fetchSanityData<GlassPageData>(
          '*[_type == "glassPage"][0]'
        );
        setPageData(pageResult);
        
        // Fetch Glass Types
        const typesResult = await fetchSanityData<GlassType[]>(
          '*[_type == "glassType"] | order(displayOrder asc)'
        );
        setGlassTypes(typesResult);
        
        // Fetch Manufacturing Steps
        const stepsResult = await fetchSanityData<ManufacturingStep[]>(
          '*[_type == "manufacturingStep"] | order(displayOrder asc)'
        );
        setManufacturingSteps(stepsResult);
        
      } catch (error) {
        console.error('Error fetching glass page data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  // Use SEO hook with static defaults to prevent initialization errors
  const seoTitle = !loading && pageData?.seoTitle ? pageData.seoTitle : 'Premium Glass Solutions | KeepMe Glass Manufacturing';
  const seoDescription = !loading && pageData?.seoDescription ? pageData.seoDescription : 'Expert glass manufacturing for luxury fragrances. Custom designs, premium finishes, and 20+ years of expertise in creating exceptional glass components.';
  
  useSEO({
    title: seoTitle,
    description: seoDescription,
    canonical: 'https://keepme.co.uk/glass',
  });
  
  // Transform manufacturing steps to timeline format
  const timelineData = manufacturingSteps.length > 0 ? manufacturingSteps.map(step => ({
    title: step.title,
    content: (
      <div>
        <h3 className="text-lg font-semibold text-brand-plum dark:text-brand-plum mb-2">{step.title}</h3>
        <p className="text-brand-mauve dark:text-neutral-300 text-sm md:text-base">
          {step.description}
        </p>
        {step.bulletPoints && step.bulletPoints.length > 0 && (
          <ul className="list-disc list-inside text-brand-mauve dark:text-neutral-300 text-sm md:text-base mt-2">
            {step.bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        {step.image?.asset && (
          <img 
            src={urlFor(step.image).width(800).height(600).fit('crop').format('webp').url()}
            alt={step.image.alt || step.title}
            className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" 
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
    ),
  })) : defaultTimelineData;

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-brand-peach">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-sans font-semibold text-brand-plum mb-6">
                {pageData?.heroTitle?.split(' ').slice(0, -2).join(' ') || 'Premium'} <span className="text-brand-rose">{pageData?.heroTitle?.split(' ').slice(-2).join(' ') || 'Glass Solutions'}</span>
              </h1>
              <p className="text-lg text-brand-mauve leading-relaxed mb-8">
                {pageData?.heroDescription || 'We create custom-designed glass components that define and elevate your fragrance brand.  With a deep understanding of the fragrance industry\'s aesthetic and functional demands, we deliver exceptional quality, refined detail, and timeless craftsmanship—transforming glass into a powerful expression of identity.'}
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand-mauve mb-4">{pageData?.expertiseTitle || 'Expert Glass Finishing'}</h3>
                <ul className="list-disc list-inside text-base text-brand-mauve leading-relaxed space-y-1">
                  {(pageData?.expertisePoints || [
                    'Tailor-made bottle designs',
                    'Premium materials and finishes',
                    'Innovative forms, textures, and techniques',
                    'Reliable production and uncompromising quality'
                  ]).map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src={pageData?.heroImage?.asset ? urlFor(pageData.heroImage).width(800).height(500).fit('crop').format('webp').url() : "https://cdn.sanity.io/images/tyzs5imn/production/59313bd50e9799ef00ea9c463cc5854043e98d95-1400x900.jpg"}
                alt={pageData?.heroImage?.alt || "KeepMe luxury glass perfume bottles"}
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                loading="eager"
                decoding="sync"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg">
                <div>
                  <p className="text-xl font-semibold">{pageData?.heroBadge1Text || '20+ Years'}</p>
                  <p className="text-brand-mauve">{pageData?.heroBadge1Subtext || 'Glass Expertise'}</p>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 bg-white rounded-xl p-6 shadow-lg hidden md:block">
                <div>
                  <p className="text-xl font-semibold">{pageData?.heroBadge2Text || 'Premium Quality'}</p>
                  <p className="text-brand-mauve">{pageData?.heroBadge2Subtext || 'Luxury Materials'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glass Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-4">
              {pageData?.glassTypesTitle || 'Premium Glass Decoration'}
            </h2>
            <p className="text-lg text-brand-mauve leading-relaxed">
              {pageData?.glassTypesDescription || 'We offer a variety of high-quality glass finishes to suit your specific fragrance requirements'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {glassTypes.length > 0 ? (
              glassTypes.map((glassType) => (
                <div key={glassType._id} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-brand-plum mb-3">{glassType.title}</h3>
                  <div className="text-base text-brand-mauve leading-relaxed prose prose-sm">
                    <PortableText 
                      value={glassType.content}
                      components={{
                        marks: {
                          link: ({value, children}) => {
                            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
                            return (
                              <Link to={value?.href || '#'} target={target} className="text-brand-rose font-semibold hover:underline">
                                {children}
                              </Link>
                            )
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))
            ) : (
              // Fallback content
              <>
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-brand-plum mb-3">Glass Polishing</h3>
                  <p className="text-base text-brand-mauve leading-relaxed mb-4">
                    To achieve the flawless, crystal-clear surfaces that make fragrance bottles stand out, we use expert finishing techniques like hand and fire polishing, each delivering a high-gloss finish that enhances the beauty and luxury of your glass components.
                  </p>
                  <p className="text-base text-brand-mauve leading-relaxed mb-4">
                    <strong>Hand Polishing</strong> is a meticulous, artisan process where skilled craftsmen refine every curve and edge using fine abrasives. It smooths out minor imperfections and creates an even surface with a subtle, elegant sheen making the glass as exquisite to touch as it is to behold.
                  </p>
                  <p className="text-base text-brand-mauve leading-relaxed mb-4">
                    <strong>Fire Polishing</strong> involves reheating the glass to a precise temperature, allowing the surface to naturally smooth and clarify under expert control. This technique reduces irregularities and produces a luminous, mirror-like finish that beautifully highlights design details.
                  </p>
                  <p className="text-base text-brand-mauve leading-relaxed mt-auto">
                    Together, these techniques give your fragrance bottles a polished, premium look, reflecting the craftsmanship and quality your brand stands for.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-brand-plum mb-3">Glass Printing and Decoration Techniques</h3>
                  <p className="text-base text-brand-mauve leading-relaxed mb-4">
                    To bring your fragrance bottles to life with captivating detail and unique branding, we offer a range of expert decoration techniques, each designed to enhance the visual impact and luxury feel of your glass components.
                  </p>
                  <div className="space-y-3 mb-4 text-sm text-brand-mauve leading-relaxed">
                    <p><strong>Printing & Silkscreen:</strong> Precision printing and silkscreen for vibrant, high-definition graphics and logos directly on the glass, ensuring sharp, lasting imagery.</p>
                    <p><strong>Spraying & Graduated Finishes:</strong> Sprayed coatings and graduated (ombre) finishes for stunning visual effects that transition smoothly in colour or texture, adding depth and sophistication.</p>
                    <p><strong>Foiling:</strong> Metallic foiling in gold, silver, or custom colours to highlight logos and patterns with a luxurious shine.</p>
                    <p><strong>Laser Etching:</strong> Subtle, tactile engraving of precise designs onto the glass surface without colour, producing a refined matte finish for intricate logos or patterns.</p>
                    <p><strong>Embossing & Debossing:</strong> Raised (embossing) or recessed (debossing) design elements to add dimension, texture, and a memorable sensory experience.</p>
                  </div>
                  <p className="text-base text-brand-mauve leading-relaxed mt-auto">
                    Each technique can be tailored and combined to create unique bottles that reflect your brand's personality and stand out. <a href="/portfolio" className="text-brand-rose font-semibold hover:underline">Browse our Portfolio</a> to see the results.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-brand-plum mb-3">Electroplating</h3>
                  <p className="text-base text-brand-mauve leading-relaxed mb-4">
                    Electroplating coats glass with a thin metal layer (gold, silver, chrome, copper) for enhanced aesthetics, durability, and a premium feel. It uses an electric current for a seamless, uniform coating customisable in thickness and finish, from reflective sheens to matte textures.
                  </p>
                  <p className="text-base text-brand-mauve leading-relaxed mb-4">
                    This process allows for intricate detailing and can be combined with other techniques like etching or embossing for unique, luxurious designs.
                  </p>
                  <p className="text-base text-brand-mauve leading-relaxed mt-auto">
                    Ideal for conveying opulence, electroplated components make a bold statement, transforming bottles into art—perfect for limited editions or luxury lines aiming for a striking appearance.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Our Process Section - Now using Timeline */}
      {/* Placeholder for imagery/video of the manufacturing process */}
      {/* <!-- TODO: Add imagery or video of the manufacturing process here --> */}
      <section className="py-20 bg-white"> {/* Updated to white background and consistent padding */}
         <div className="container mx-auto px-6 text-center max-w-3xl mb-10">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-4">
               {pageData?.processTitle?.split(' ').slice(0, -1).join(' ') || 'Our Glass Manufacturing'} <span className="text-brand-rose">{pageData?.processTitle?.split(' ').slice(-1).join(' ') || 'Process'}</span>
             </h2>
             <p className="text-lg text-brand-mauve leading-relaxed">
               {pageData?.processDescription || 'From raw materials to finished products, our meticulous process ensures exceptional quality'}
             </p>
         </div>
         {/* Using a container div to manage width and centering if needed */}
         <div className="max-w-7xl mx-auto">
            <Timeline data={timelineData} />
         </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                {pageData?.customSolutionsTitle?.split(' ').slice(0, -1).join(' ') || 'Custom Glass'} <span className="text-brand-rose">{pageData?.customSolutionsTitle?.split(' ').slice(-1).join(' ') || 'Solutions'}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {pageData?.customSolutionsDescription || 'Beyond our standard offerings, we specialise in creating bespoke glass components tailored to your specific vision and requirements.'}
              </p>
              <div className="space-y-4 mb-8">
                {(pageData?.customSolutionsFeatures || [
                  {_key: 'custom-shapes', title: 'Custom Shapes & Designs', description: 'From traditional to avant-garde, we can bring your unique design vision to life.'},
                  {_key: 'specialty-finishes', title: 'Speciality Finishes', description: 'Frosted, metallic, gradient, and textured finishes for distinctive visual appeal.'},
                  {_key: 'exclusive-techniques', title: 'Exclusive Techniques', description: 'Hand-crafted elements, embedded features, and proprietary manufacturing processes.'}
                ]).map((feature) => (
                  <div key={feature._key} className="pl-4">
                    <div>
                      <h3 className="font-bold text-lg">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="bg-brand-rose text-white px-8 py-3 rounded-full hover:bg-brand-mauve transition-colors">
                {pageData?.customSolutionsCta || 'Schedule a Consultation'}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {pageData?.customSolutionsImages && pageData.customSolutionsImages.length >= 4 ? (
                <>
                  <img
                    src={urlFor(pageData.customSolutionsImages[0]).width(600).height(400).fit('crop').format('webp').url()}
                    alt={pageData.customSolutionsImages[0].alt || "Custom glass perfume bottle"}
                    className="rounded-2xl shadow-md w-full h-64 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={urlFor(pageData.customSolutionsImages[1]).width(600).height(400).fit('crop').format('webp').url()}
                    alt={pageData.customSolutionsImages[1].alt || "Luxury glass bottle detail"}
                    className="rounded-2xl shadow-md w-full h-64 object-cover mt-12"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={urlFor(pageData.customSolutionsImages[2]).width(600).height(400).fit('crop').format('webp').url()}
                    alt={pageData.customSolutionsImages[2].alt || "Decorative glass elements"}
                    className="rounded-2xl shadow-md w-full h-64 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={urlFor(pageData.customSolutionsImages[3]).width(600).height(400).fit('crop').format('webp').url()}
                    alt={pageData.customSolutionsImages[3].alt || "Frosted glass bottle"}
                    className="rounded-2xl shadow-md w-full h-64 object-cover mt-12"
                    loading="lazy"
                    decoding="async"
                  />
                </>
              ) : (
                // Fallback images
                <>
                  <img
                    src="https://cdn.sanity.io/images/tyzs5imn/production/e572c3e79aa7058c8659589996e7e31adddb7016-1200x800.webp"
                    alt="Custom glass perfume bottle"
                    className="rounded-2xl shadow-md w-full h-64 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://cdn.sanity.io/images/tyzs5imn/production/718c2341b303bd421c5d9cf130a180f30a25eb04-1200x800.webp"
                    alt="Luxury glass bottle detail"
                    className="rounded-2xl shadow-md w-full h-64 object-cover mt-12"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://cdn.sanity.io/images/tyzs5imn/production/e7a1afaa9f2519f408cdef907ec9b8a7252257c6-1200x800.webp"
                    alt="Decorative glass elements"
                    className="rounded-2xl shadow-md w-full h-64 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://cdn.sanity.io/images/tyzs5imn/production/c54611d8a40ead1d25a328878e38956459859d0f-1200x800.webp"
                    alt="Frosted glass bottle"
                    className="rounded-2xl shadow-md w-full h-64 object-cover mt-12"
                    loading="lazy"
                    decoding="async"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-pink-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">
            {pageData?.ctaTitle || 'Elevate Your Fragrance with Premium Glass'}
          </h2>
          <p className="text-xl text-brand-mauve max-w-3xl mx-auto mb-10">
            {pageData?.ctaDescription || 'Contact our glass specialists today to discover how our exceptional glass components can enhance your fragrance products.'}
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="bg-brand-mauve text-white px-8 py-3 rounded-full hover:bg-brand-rose transition-colors inline-block font-medium"
            >
              {pageData?.ctaButtonText || 'Contact Us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Glass;