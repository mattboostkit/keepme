import * as React from 'react';
// import { Link } from 'react-router-dom'; // Import Link
import FaqAccordion from '../components/FaqAccordion';
import FragranceConcentrations from '../components/FragranceConcentrations';
import { useSanityQuery } from '../lib/useSanity';
import { urlFor } from '../lib/sanity';
import { useSEO } from '../hooks/useSEO';
import { useJsonLd } from '../hooks/useJsonLd';
import { fetchSanityData } from '../lib/sanityUtils';
import ServicePageWithSections from '../components/ServicePageWithSections'; // Added import

// Interface for the Sanity image object with alt text
interface SanityImageObject {
  asset: {
    _ref: string;
    _type: string;
  };
  alt: string;
}

// Interface for Service Image document
interface ServiceImageDoc {
  _id: string;
  title: string;
  image: SanityImageObject;
}

// Interface for the Services Page Images data from Sanity
interface ServicesPageImageData {
  _id: string;
  _type: string;
  mainOurServicesImage?: SanityImageObject;
  fragranceCreationImage?: SanityImageObject;
  fragranceComponentryImage?: SanityImageObject;
  skincareComponentryImage?: SanityImageObject;
  homeFragranceImage?: SanityImageObject;
  secondaryPackagingImage?: SanityImageObject;
  giftWithPurchaseImage?: SanityImageObject;
}

// Interface for Services Page data
interface ServicesPageData {
  heroTitle: string;
  heroDescription: string;
  heroBoxTitle: string;
  heroBoxDescription: string;
  heroBadge1Title: string;
  heroBadge1Subtitle: string;
  heroBadge2Title: string;
  heroBadge2Subtitle: string;
  serviceCategoriesTitle: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  faqTitle: string;
  faqSubtitle: string;
  seoTitle?: string;
  seoDescription?: string;
}

// Interface for Service Section
interface ServiceSection {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  learnMoreLink: string;
  learnMoreText: string;
  image: SanityImageObject;
  displayOrder: number;
  backgroundColor: string;
  imagePosition: string;
}

// Interface for FAQ Item
interface FAQItem {
  _id: string;
  question: string;
  answer: string;
  category: string;
  displayOrder: number;
  isActive: boolean;
}

const SERVICE_IMAGES_QUERY = `*[_type == "serviceImage"]{ _id, title, image }`;

function Services() {
  const [pageData, setPageData] = React.useState<ServicesPageData | null>(null);
  const [serviceSections, setServiceSections] = React.useState<ServiceSection[]>([]);
  const [faqItems, setFaqItems] = React.useState<FAQItem[]>([]);
  const [serviceImages, setServiceImages] = React.useState<ServiceImageDoc[]>([]);
  const [dataLoading, setDataLoading] = React.useState(true);
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setDataLoading(true);
        
        // Fetch Services Page data
        const pageResult = await fetchSanityData<ServicesPageData>(
          '*[_type == "servicesPage"][0]'
        );
        setPageData(pageResult);
        
        // Fetch Service Sections
        const sectionsResult = await fetchSanityData<ServiceSection[]>(
          '*[_type == "serviceSection"] | order(displayOrder asc)'
        );
        setServiceSections(sectionsResult);
        // Debug: log section titles
        console.log('DEBUG: serviceSections titles:', sectionsResult.map(s => s.title));
        
        // Fetch all serviceImage docs
        const serviceImagesResult = await fetchSanityData<ServiceImageDoc[]>(SERVICE_IMAGES_QUERY);
        setServiceImages(serviceImagesResult);
        
        // Fetch FAQ Items
        const faqResult = await fetchSanityData<FAQItem[]>(
          '*[_type == "faqItem" && isActive == true] | order(displayOrder asc)'
        );
        setFaqItems(faqResult);
        
      } catch (error) {
        console.error('Error fetching services page data:', error);
      } finally {
        setDataLoading(false);
      }
    };

    fetchData();
  }, []);
  
  // Use SEO hook with static defaults to prevent initialization errors
  const seoTitle = !dataLoading && pageData?.seoTitle ? pageData.seoTitle : 'Our Services | KeepMe - Expert Fragrance Manufacturing';
  const seoDescription = !dataLoading && pageData?.seoDescription ? pageData.seoDescription : 'Explore our comprehensive fragrance manufacturing services including fragrance creation, componentry, packaging, and specialist solutions for luxury brands.';
  
  useSEO({
    title: seoTitle,
    description: seoDescription
  });

  // Add structured data for services
  useJsonLd('services', {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fragrance Manufacturing Services',
    provider: {
      '@type': 'Organization',
      name: 'KeepMe',
      url: 'https://keepme.co.uk'
    },
    description: seoDescription,
    serviceType: ['Fragrance Creation', 'Fragrance Componentry', 'Skincare Componentry', 'Home Fragrance', 'Secondary Packaging', 'Gift With Purchase'],
    areaServed: {
      '@type': 'Place',
      name: 'United Kingdom'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fragrance Manufacturing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fragrance Creation',
            description: 'Bespoke perfume formulation & development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fragrance Componentry',
            description: 'High-quality pumps, collars, caps & accessories'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Skincare Componentry',
            description: 'Tubes, dispensers and closures for skincare'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Fragrance',
            description: 'Candles, diffusers and room sprays'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Secondary Packaging',
            description: 'Luxury rigid boxes, cartons & magnetic closures'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gift With Purchase',
            description: 'Bespoke minis & promotional sets'
          }
        }
      ]
    }
  });

  // Build a mapping from serviceImage.title to image
  const sectionImagesByTitle: Record<string, SanityImageObject | undefined> = {};
  for (const img of serviceImages) {
    sectionImagesByTitle[img.title] = img.image;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-brand-peach">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-sans font-semibold text-brand-plum mb-6">
                {pageData?.heroTitle?.split(' ').slice(0, -1).join(' ') || 'Our'} <span className="text-brand-rose">{pageData?.heroTitle?.split(' ').slice(-1).join(' ') || 'Services'}</span>
              </h1>
              <p className="text-lg text-brand-mauve leading-relaxed mb-8">
                {pageData?.heroDescription || 'From concept to delivery, we provide end-to-end fragrance manufacturing solutions tailored to your brand\'s unique vision.'}
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-normal text-brand-mauve mb-4">{pageData?.heroBoxTitle || 'Full-Service Solutions'}</h3>
                <p className="text-base text-brand-mauve leading-relaxed">
                  {pageData?.heroBoxDescription || 'We offer comprehensive services from design and technical drawings, manufacturing of components to logistics and delivery, ensuring a seamless experience for your brand.'}
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={pageData?.mainOurServicesImage ? urlFor(pageData.mainOurServicesImage).width(600).height(400).fit('crop').crop('center').format('webp').url() : 'https://via.placeholder.com/600x400.png?text=Main+Service+Image'}
                alt={pageData?.mainOurServicesImage?.alt || 'Main Our Services Image'}
                className="rounded-2xl shadow-xl w-full h-[300px] md:h-[500px] object-cover"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg">
                <div>
                  <p className="text-xl font-semibold">{pageData?.heroBadge1Title || 'Full Service'}</p>
                  <p className="text-gray-600">{pageData?.heroBadge1Subtitle || 'Comprehensive Solutions'}</p>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 bg-white rounded-xl p-6 shadow-lg hidden md:block">
                <div>
                  <p className="text-xl font-semibold">{pageData?.heroBadge2Title || 'Global Reach'}</p>
                  <p className="text-gray-600">{pageData?.heroBadge2Subtitle || 'Worldwide Delivery'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-sans font-normal text-brand-plum mb-6 text-center">
              {pageData?.serviceCategoriesTitle?.split('Categories').length > 1 ? (
                <>
                  {pageData.serviceCategoriesTitle.split('Categories')[0]}<span className="text-brand-rose">Categories{pageData.serviceCategoriesTitle.split('Categories')[1]}</span>
                </>
              ) : (
                <>Our Service <span className="text-brand-rose">Categories</span></>
              )}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {serviceSections.length > 0 ? (
                serviceSections.map((section) => (
                  <a 
                    key={section._id}
                    href={`#${section.slug.current}`} 
                    className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-brand-pink-light transition-all text-gray-700 font-normal"
                  >
                    {section.title}
                  </a>
                ))
              ) : (
                // Fallback links
                <>
                  <a href="#fragrance-componentry" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-brand-pink-light transition-all text-gray-700 font-normal">
                    Fragrance Componentry
                  </a>
                  <a href="#home-fragrance" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-brand-pink-light transition-all text-gray-700 font-normal">
                    Home Fragrance
                  </a>
                  <a href="#secondary-packaging" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-brand-pink-light transition-all text-gray-700 font-normal">
                    Secondary Packaging
                  </a>
                  <a href="#gift-with-purchase" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-brand-pink-light transition-all text-gray-700 font-normal">
                    Gift With Purchase
                  </a>
                  <a href="#skincare-componentry" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-brand-pink-light transition-all text-gray-700 font-normal">
                    Skincare Componentry
                  </a>
                  <a href="#fragrance-creation" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-brand-pink-light transition-all text-gray-700 font-normal">
                    Fragrance Creation
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Service Sections */}
      <ServicePageWithSections
        title={pageData?.serviceCategoriesTitle ?? 'Our Service Categories'}
        description={pageData?.heroDescription ?? ''}
        sections={serviceSections.map(section => ({
          title: section.title,
          content: <p>{section.description}</p>,
          imageLeft: section.imagePosition === 'left',
        }))}
        faqItems={faqItems.map(faq => ({ question: faq.question, answer: faq.answer }))}
        sectionImagesByTitle={sectionImagesByTitle}
      />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-4">
              {pageData?.faqTitle?.split(' ').map((word, index) => {
                if (word === 'Questions') {
                  return <span key={index} className="text-brand-rose">{word}</span>;
                }
                return <span key={index}>{word} </span>;
              }) || <>Frequently Asked <span className="text-brand-rose">Questions</span></>}
            </h2>
            <p className="text-lg text-brand-mauve leading-relaxed">
              {pageData?.faqSubtitle || 'Find answers to common questions about our fragrance services'}
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Fragrance Concentrations Visual Guide */}
            <FragranceConcentrations />
            
            {/* FAQ Accordion */}
            <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
              <FaqAccordion
                items={faqItems.length > 0 ? faqItems.map(faq => ({
                question: faq.question,
                answer: faq.answer
              })) : [
                {
                  question: "What is the minimum order quantity?",
                  answer: "Our minimum order quantities vary by product type. Stock Glass Bottles and Caps typically require a minimum of 1,000 units (this can increase depending on capacity and complexity), whilst Bespoke Glass Bottles and Caps have an MOQ of 10,000 units. Decoration MOQ's vary between 500-5,000 units."
                },
                {
                  question: "How long does the production process take?",
                  answer: "We recommend 6 months when custom moulds aren't required, bespoke projects may require up to 9 months depending on complexity and required components. Our team will issue a Critical Path during the Development and Evaluation stages"
                },
                {
                  question: "Do you offer sampling services?",
                  answer: "Yes, all our components and finishes will undergo a Development and Sampling stage. Our team are able to supply Technical Drawings and product prototypes. Sample fees may apply but are typically credited toward your first order."
                },
                {
                  question: "What regions do you ship to?",
                  answer: "We ship globally with established logistics networks in Europe, North America, Asia, and the Middle East. Custom shipping arrangements can be made for other regions. Our experienced and dedicated Operations Team will help manage all inbound and outbound deliveries"
                },
                {
                  question: "Do you offer an end to end service?",
                  answer: "Yes, we specialise in all stages of Development and Production. From concept to delivery we can support you. Many of our clients utilise all of our services, from Creative Design, to Sampling, Production, Shipping, Blending of oils, Testing, Filling and Assembly of finished goods"
                },
                {
                  question: "Can you help with regulatory compliance?",
                  answer: "Absolutely. We ensure all our products meet regulatory requirements for their intended markets, including EU, UK, US, and other international standards. Our Team can also support with the Back of Pack labelling and appropriate warning symbols."
                }
              ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-pink-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-plum">
            {pageData?.ctaTitle || 'Ready to Bring Your Fragrance Vision to Life?'}
          </h2>
          <p className="text-xl text-brand-plum max-w-3xl mx-auto mb-10">
            {pageData?.ctaDescription || 'Contact us today to discuss your project and how our services can help you create exceptional fragrances.'}
          </p>
          <a
            href={pageData?.ctaButtonLink || "/contact"}
            className="bg-brand-mauve text-white px-8 py-3 rounded-full hover:bg-brand-rose transition-colors inline-block font-medium"
          >
            {pageData?.ctaButtonText || 'Get in Touch'}
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;