// React is imported automatically in newer versions of React
import {
  ArrowRight,   // Needed for Hero button
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { fetchSanityData } from '../lib/sanityUtils';
import { urlFor } from '../lib/sanity';
import Testimonials from '../components/Testimonials'; // Import the Testimonials component
import ClientLogos from '../components/ClientLogos'; // Import the ClientLogos component
// Import the FilterablePortfolio component and its type
import FilterablePortfolio, { PortfolioItem } from '../components/FilterablePortfolio';
// Import fetchPortfolioBrands utility
import { fetchPortfolioBrands } from '../lib/portfolioUtils';
import FlickityCarousel from '../components/FlickityCarousel'; // Re-import FlickityCarousel
import logoWhiteUrl from '../assets/images/logos/Logo_White.svg'; // Import the white logo for hero
import '../components/FlickityCarousel.css'; // Re-import FlickityCarousel styles
import { useSEO } from '../hooks/useSEO';

// Define Sanity Image Reference type
interface SanityImageReference {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

// Define the ServiceImage interface
interface ServiceImage {
  _id: string;
  title: string;
  image: SanityImageReference; // Use specific type
  shortDescription: string;
  slug: { current: string };
  displayOrder: number;
}

// Define About Section Data interface
interface AboutSectionData {
  _type: 'aboutSection';
  title?: string;
  description?: string;
  image?: SanityImageReference;
}

// Define Home Page Data interface
interface HomePageData {
  heroBackgroundImage?: SanityImageReference;
  heroLogoImage?: SanityImageReference;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  clientLogosTitle: string;
  servicesTitle: string;
  servicesDescription: string;
  portfolioTitle: string;
  portfolioDescription: string;
  contactCtaTitle: string;
  contactCtaDescription: string;
  contactCtaButtonText: string;
  seoTitle?: string;
  seoDescription?: string;
}

function Home() { // Component name is Home
  // State for service images, about section, portfolio brands, and home page data
  const [serviceImages, setServiceImages] = useState<ServiceImage[]>([]);
  const [aboutData, setAboutData] = useState<AboutSectionData | null>(null); // Use specific type
  const [portfolioBrands, setPortfolioBrands] = useState<PortfolioItem[]>([]); // Use PortfolioItem type
  const [homePageData, setHomePageData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Use SEO hook with static defaults to prevent initialization errors
  // Only use dynamic values after they're loaded
  const seoTitle = !loading && homePageData?.seoTitle ? homePageData.seoTitle : 'KeepMe | Expert Fragrance Manufacturer';
  const seoDescription = !loading && homePageData?.seoDescription ? homePageData.seoDescription : 'KeepMe is a leading UK-based fragrance manufacturer specialising in perfume production, packaging, and end-to-end solutions for luxury brands.';
  
  useSEO({
    title: seoTitle,
    description: seoDescription,
    canonical: 'https://keepme.co.uk/',
  });
  
  // Fetch service images, about section data, and portfolio brands from Sanity
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch service images - Updated query to remove icon field and sort
        const serviceImagesResult = await fetchSanityData<ServiceImage[]>(
          '*[_type == "serviceImage"]{ _id, title, image, shortDescription, slug, displayOrder } | order(displayOrder asc)'
        );
        setServiceImages(serviceImagesResult);

        // Fetch about section data
        const aboutResult = await fetchSanityData<AboutSectionData>('*[_type == "aboutSection"][0]'); // Add type hint
        setAboutData(aboutResult);

        // Fetch portfolio brands
        console.log('Fetching portfolio brands...');
        const portfolioResult = await fetchPortfolioBrands();
        console.log('Portfolio brands result:', portfolioResult);
        setPortfolioBrands(portfolioResult);
        
        // Fetch home page data
        const homeResult = await fetchSanityData<HomePageData>('*[_type == "homePage"][0]');
        setHomePageData(homeResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const heroImageUrl = homePageData?.heroBackgroundImage?.asset 
    ? urlFor(homePageData.heroBackgroundImage).width(2700).height(1336).fit('crop').format('webp').url()
    : "https://cdn.sanity.io/images/tyzs5imn/production/7feee1508aeaf269bf3ecdfa7c0c8bc62585b627-2700x1336.webp";

  return (
    <>
      {/* Hero Section - Updated with Full Width Background */}
      <section
        id="home"
        className="relative h-[60vh] min-h-[450px] md:min-h-[550px] text-white flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <img 
              src={logoWhiteUrl} 
              alt="KeepMe Lifestyle" 
              className="w-full h-auto mx-auto"
            />
          </div>
        </div>
      </section>

      {/* New Section for H1, Paragraph, and CTA */}
      <section className="bg-brand-mauve text-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
                  {homePageData?.ctaTitle?.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  )) || (
                    <>
                      Flawless Fragrances,<br />
                      Expertly Crafted
                    </>
                  )}
                </h1>
              </div>
              <p className="text-lg leading-relaxed">
                {homePageData?.ctaDescription || 'Your end-to-end partner in fragrance and packaging. We specialise in perfume production, from components to filling, assembly, and delivery.'}
              </p>
              <div className="flex justify-center">
                <Link to={homePageData?.ctaButtonLink || "/contact"} className="bg-brand-mauve text-white px-8 py-3 rounded-full hover:bg-brand-rose transition-colors flex items-center justify-center font-semibold">
                  {homePageData?.ctaButtonText || 'Contact Us'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section - Using Sanity Data */}
      <ClientLogos useSanity={true} title={homePageData?.clientLogosTitle || "Trusted by Leading Brands"} scrolling={true} />

      {/* About Section */}
      <section id="about" className="py-20 bg-brand-pink-light/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-xl">
                {/* Added transition effect for smooth image swap */}
                <img
                  src={aboutData && aboutData.image
                    ? urlFor(aboutData.image).url()
                    : "https://cdn.sanity.io/images/tyzs5imn/production/d85b8c75d2ed12b35ba152edf9482005fc9e8414-2700x1336.webp"}
                  alt={aboutData?.title || "KeepMe product showcase"}
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                  style={{ opacity: loading ? 0.7 : 1 }}
                />
                <div className="absolute inset-0 bg-brand-pink-light/20"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-lg">
                <div>
                  <p className="text-xl font-semibold text-brand-plum">Manufacturing</p>
                  <p className="text-gray-700">made simple</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-sans font-semibold text-brand-plum">
                About <span className="text-brand-rose">KeepMe</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutData?.description || 'We design and manufacture an extensive range of expertly created products from signature scents to home fragrances, each meticulously crafted from the finest raw materials. Beautifully designed packaging showcases each bespoke product, tailored to complement and enhance your brand.'}
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section - Restoring Flickity Carousel */}
      <section id="services" className="py-20 bg-white services-section"> 
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-semibold text-brand-plum mb-4">
              {homePageData?.servicesTitle?.split(' ').slice(0, -1).join(' ') || 'Our'} <span className="text-brand-rose">{homePageData?.servicesTitle?.split(' ').slice(-1).join(' ') || 'Services'}</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              {homePageData?.servicesDescription || 'We combine creativity with technical expertise to support our clients\' projects from concept to completion.'}
            </p>
          </div>

          {loading ? (
            <div className="text-center">Loading services...</div>
          ) : (
            <FlickityCarousel
              className="services-carousel" // Class for Flickity styling
              options={{
                // Recommended options for horizontal scroll feel
                freeScroll: true,
                contain: true,
                prevNextButtons: true, // Show arrows
                pageDots: false,     // Hide dots
                cellAlign: 'left',
                groupCells: true, // Group cells to show multiple at once if desired, or false/1 to show one partial
                draggable: true, // Allow dragging only if multiple cells
                // Add other options as needed from original implementation
                 friction: 0.2,
                 selectedAttraction: 0.01,
                 adaptiveHeight: false,
                 watchCSS: false
              }}
            >
              {serviceImages.map((service) => (
                 // Each child of FlickityCarousel is a cell
                <div key={service._id} className="px-3 pb-4"> {/* Cell container */}
                  <Link to={`/services/${service.slug.current}`} className="text-gray-700 hover:text-brand-rose font-medium flex flex-col group">
                    {/* Image Container - Now acts as the main visual block */}
                    {service.image?.asset && (
                      <div className="w-full h-80 overflow-hidden mb-4 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 flex-shrink-0">
                         <img
                           src={urlFor(service.image).width(600).height(400).fit('crop').crop('center').format('webp').url()} // Removed .fit('crop')
                           alt={service.image.alt || `${service.title} image`}
                           className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                           loading="lazy"
                         />
                       </div>
                    )}
                    {/* Text Content - Placed below the image */}
                    <div className="mt-4"> {/* Add margin-top to separate from image */}
                       <h3 className="text-xl font-sans font-normal mb-2 group-hover:text-brand-plum transition-colors">{service.title}</h3>
                       <p className="text-gray-600 text-sm mb-3">{service.shortDescription}</p>
                       {/* Optional: Keep Learn More link if desired, style appropriately */}
                       {/* <div className="mt-auto text-brand-mauve font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                         Learn More <ArrowRight className="ml-1 h-4 w-4" />
                       </div> */}
                     </div>
                  </Link>
                </div>
              ))}
            </FlickityCarousel>
          )} {/* Closes 'loading' ternary for services/FlickityCarousel */}
        </div>
      </section>

      {/* Portfolio Section */}
      {portfolioBrands.length > 0 && (
        <FilterablePortfolio
          title={homePageData?.portfolioTitle || "Our Portfolio"}
          subtitle={homePageData?.portfolioDescription || "Discover our partnerships with prestigious Niche and Luxury Brands. We're proud to work with some of the most distinguished names in the industry."}
          items={portfolioBrands}
          maxItems={6}
          showFilters={true}
          backgroundColor="bg-white"
        />
      )}
      {portfolioBrands.length === 0 && (
        <p>Portfolio fallback</p>
      )}
    {/* Testimonials Section - Using Sanity Data */}
    <Testimonials useSanity={true} />
    
    {/* Contact CTA Section */}
    <section className="py-20 bg-brand-pink-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">
          {homePageData?.contactCtaTitle || 'Ready to Start Your Project?'}
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          {homePageData?.contactCtaDescription || 'Let\'s discuss how we can bring your fragrance vision to life with our expertise in design, manufacturing, and delivery.'}
        </p>
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="bg-brand-mauve text-white px-8 py-3 rounded-full hover:bg-brand-rose transition-colors inline-block font-medium"
          >
            {homePageData?.contactCtaButtonText || 'Get Started'}
          </Link>
        </div>
      </div>
    </section>
  </>
);
}

export default Home;
