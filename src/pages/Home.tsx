// React is imported automatically in newer versions of React
import {
  ArrowRight,   // Needed for Hero button
} from 'lucide-react';
import { Link } from 'react-router-dom';
import WorldMap from '../components/ui/WorldMap'; // Import the WorldMap component
import { TextShimmer } from '../components/ui/TextShimmer'; // Import TextShimmer
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
import '../components/FlickityCarousel.css'; // Re-import FlickityCarousel styles

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

function Home() { // Component name is Home
  // State for service images, about section, and portfolio brands
  const [serviceImages, setServiceImages] = useState<ServiceImage[]>([]);
  const [aboutData, setAboutData] = useState<AboutSectionData | null>(null); // Use specific type
  const [portfolioBrands, setPortfolioBrands] = useState<PortfolioItem[]>([]); // Use PortfolioItem type
  const [loading, setLoading] = useState(true);

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
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const heroImageUrl = "https://cdn.sanity.io/images/tyzs5imn/production/4f5dce1f245ef6f8bd2ae8129b532b118eae3561-2700x1336.webp";

  return (
    <>
      {/* Hero Section - Updated with Full Width Background */}
      <section
        id="home"
        className="relative flex items-center justify-center text-center text-white min-h-[60vh] md:min-h-[70vh] pt-16 pb-24 md:pt-20 md:pb-32 bg-cover bg-center bg-no-repeat" // Adjusted top padding
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl mx-auto"> {/* Centering content */}
            <div className="space-y-8"> {/* Text Content */}
              <div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-relaxed"> {/* Adjusted text color */}
                  Flawless Fragrances, <br />
                  <TextShimmer
                    as="span" // Keep as span
                    duration={2} // Adjust duration as needed
                    // Updated shimmer colors for light text on dark background
                    className="pb-2 [--base-color:#FFFFFF] [--base-gradient-color:#FFA5AB] dark:[--base-color:#FFFFFF] dark:[--base-gradient-color:#FFA5AB]"
                  >
                    Expertly Crafted
                  </TextShimmer>
                </h1>
              </div>
              <p className="text-lg leading-relaxed"> {/* Adjusted text color */}
                Your end-to-end partner in fragrance and packaging. We specialise in perfume production,
                from components to filling, assembly, and delivery.
              </p>
              <div className="flex justify-center"> {/* Centered button */}
                <Link to="/services" className="bg-brand-button text-white px-8 py-3 rounded-full hover:bg-brand-card transition-colors flex items-center justify-center">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section - Using Sanity Data */}
      <ClientLogos useSanity={true} title="Trusted by Leading Brands" scrolling={true} />

      {/* About Section */}
      <section id="about" className="py-20 bg-brand-highlight/20">
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
                <div className="absolute inset-0 bg-brand-highlight/20"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-lg">
                <div>
                  <p className="text-xl font-bold">Manufacturing</p>
                  <p className="text-gray-600">made simple</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                About <span className="text-brand-card">KeepMe</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutData?.description || 'We design and manufacture an extensive range of expertly created products from signature scents to home fragrances, each meticulously crafted from the finest raw materials. Beautifully designed packaging showcases each bespoke product, tailored to complement and enhance your brand.'}
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section - Restoring Flickity Carousel */}
      <section id="services" className="py-20 bg-[#f9f5e7] services-section"> 
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our <span className="text-brand-accent">Services</span> {/* Ensured class is applied */}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for your fragrance and lifestyle product needs, delivered with expertise and care.
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
                  <Link to={`/services/${service.slug.current}`} className="group block h-full">
                    {/* Image Container - Now acts as the main visual block */}
                    {service.image?.asset && (
                      <div className="w-full h-80 overflow-hidden mb-4 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 flex-shrink-0">
                         <img
                           src={urlFor(service.image).width(400).height(600).url()} // Removed .fit('crop')
                           alt={service.image.alt || `${service.title} image`}
                           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                           loading="lazy"
                         />
                       </div>
                    )}
                    {/* Text Content - Placed below the image */}
                    <div className="mt-4"> {/* Add margin-top to separate from image */}
                       <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-brand-accent transition-colors">{service.title}</h3>
                       <p className="text-gray-600 text-sm mb-3">{service.shortDescription}</p>
                       {/* Optional: Keep Learn More link if desired, style appropriately */}
                       {/* <div className="mt-auto text-brand-accent font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                         Learn More <ArrowRight className="ml-1 h-4 w-4" />
                       </div> */}
                     </div>
                  </Link>
                </div>
              ))}
            </FlickityCarousel>
          )}
        </div>
      </section>

      {/* Portfolio Section */}
      {portfolioBrands.length > 0 ? (
        <FilterablePortfolio
          title="Our Portfolio"
          subtitle="Discover our partnerships with prestigious Niche and Luxury Brands. We're proud to work with some of the most distinguished names in the industry."
          items={portfolioBrands}
          maxItems={6}
          showFilters={true}
          backgroundColor="bg-brand-highlight/20"
        />
      ) : (
        <section className="py-20 bg-brand-highlight/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our <span className="text-brand-card">Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover our partnerships with prestigious fragrance houses and luxury brands.
            </p>
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-card"></div>
              </div>
            ) : (
              <p>No portfolio brands found. Please add some in Sanity Studio.</p>
            )}
          </div>
        </section>
      )}

      {/* Our Reach Section */}
      <section id="reach" className="py-20 bg-white"> {/* Using bg-white, adjust if needed */}
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our <span className="text-brand-card">Reach</span>
            </h2>
            <p className="text-lg text-gray-600">
              We are a global supplier with a trusted worldwide production and distribution network, specialising in high-volume, complex manufacturing and fulfilment projects for a discerning customer base across six continents.
            </p>
          </div>
          <WorldMap
            locations={[ // Keep locations for individual points
              { name: "London, UK", lat: 51.5074, lng: -0.1278 },
              { name: "Istanbul, Turkey", lat: 41.0082, lng: 28.9784 },
              { name: "Trenton, NJ", lat: 40.2206, lng: -74.7597 },
              { name: "Shenzhen, China", lat: 22.5431, lng: 114.0579 },
              { name: "Sydney, Australia", lat: -33.8688, lng: 151.2093 },
            ]}
            dots={[ // Add dots for lines originating from London
              { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 41.0082, lng: 28.9784 } }, // London to Istanbul
              { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 40.2206, lng: -74.7597 } }, // London to Trenton (NJ)
              { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 22.5431, lng: 114.0579 } }, // London to Shenzhen
              { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: -33.8688, lng: 151.2093 } }, // London to Sydney
            ]}
            lineColor="#DA627D" // Use brand-card for points and lines
          />
        </div>
      </section>

      {/* Testimonials Section - Using Sanity Data */}
      <Testimonials useSanity={true} />
    </>
  );
}

export default Home;
