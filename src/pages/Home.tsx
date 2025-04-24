// React is imported automatically in newer versions of React
import {
  Star,         // Needed for About section
  Droplets,     // For Fragrance service + About section
  Users,        // Needed for About section
  ChevronRight, // Needed for Service card links
  ArrowRight,   // Needed for Hero button
  GlassWater,   // For Fragrance Componentry service
  Home as HomeIcon, // Alias Home icon to avoid conflict with component name
  Palette,      // For Cosmetic Componentry service
  Package,      // For Luxury Packaging service
  Gift,         // For Gifts With Purchase service
  Truck,        // For Delivery & Logistics service
  PenTool,      // Needed for About section
  PackageCheck  // Needed for About section
} from 'lucide-react';
import { Link } from 'react-router-dom';
import WorldMap from '../components/ui/WorldMap'; // Import the WorldMap component
import { TextShimmer } from '../components/ui/TextShimmer'; // Import TextShimmer
import { useState, useEffect } from 'react';
import { fetchSanityData } from '../lib/sanityUtils';
import { urlFor } from '../lib/sanity';
import Testimonials from '../components/Testimonials'; // Import the Testimonials component
import ClientLogos from '../components/ClientLogos'; // Import the ClientLogos component
// Import the FilterablePortfolio component
import FilterablePortfolio from '../components/FilterablePortfolio';
import { fetchPortfolioBrands } from '../lib/portfolioUtils';
import FlickityCarousel from '../components/FlickityCarousel'; // Import the FlickityCarousel component
import '../components/FlickityCarousel.css'; // Import the FlickityCarousel styles

// Define the Service interface
interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
}

// Define the ServiceImage interface
interface ServiceImage {
  _id: string;
  title: string;
  image: any; // Sanity image reference
}

function Home() { // Component name is Home
  // State for service images, about section, and portfolio brands
  const [serviceImages, setServiceImages] = useState<ServiceImage[]>([]);
  const [aboutData, setAboutData] = useState<any>(null);
  const [portfolioBrands, setPortfolioBrands] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch service images, about section data, and portfolio brands from Sanity
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch service images
        const serviceImagesResult = await fetchSanityData<ServiceImage[]>('*[_type == "serviceImage"] | order(_createdAt desc)');
        setServiceImages(serviceImagesResult);

        // Fetch about section data
        const aboutResult = await fetchSanityData('*[_type == "aboutSection"][0]');
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

  // Hardcoded services
  const services: Service[] = [
    {
      id: '2',
      title: 'Fragrance Componentry',
      slug: 'fragrance-componentry',
      icon: 'GlassWater',
      shortDescription: 'Premium bottles, caps, pumps, and essential components to perfectly house and present your fragrance.'
    },
    {
      id: '4',
      title: 'Home Fragrance',
      slug: 'home-fragrance',
      icon: 'Home',
      shortDescription: 'Bespoke candles, diffusers, and room sprays to extend your brand\'s reach and create inviting atmospheres.'
    },
    {
      id: '5',
      title: 'Luxury Packaging',
      slug: 'luxury-packaging',
      icon: 'Package',
      shortDescription: 'Exquisite packaging solutions designed to impress, convey exclusivity, and protect your valuable fragrance.'
    },
    {
      id: '6',
      title: 'Gifts With Purchase',
      slug: 'gifts-with-purchase',
      icon: 'Gift',
      shortDescription: 'Attractive and relevant gift items for fragrance and lifestyle gifting to enhance loyalty and drive sales.'
    },
    {
      id: '3',
      title: 'Cosmetic Componentry',
      slug: 'cosmetic-componentry',
      icon: 'Palette',
      shortDescription: 'High-quality parts for various cosmetic applications, ensuring functionality and aesthetic appeal.'
    },
    {
      id: '1',
      title: 'Fragrance Creation',
      slug: 'fragrance-creation',
      icon: 'Droplets',
      shortDescription: 'Expert creation of unique, captivating scents tailored to your brand, from concept to final masterpiece.'
    },


  ];

  const heroImageUrl = "https://cdn.sanity.io/images/tyzs5imn/production/d85b8c75d2ed12b35ba152edf9482005fc9e8414-2700x1336.webp";

  return (
    <>
      {/* Hero Section - Updated with Full Width Background */}
      <section
        id="home"
        className="relative flex items-center justify-center text-center text-white min-h-[60vh] md:min-h-[70vh] py-24 md:py-32 bg-cover bg-center bg-no-repeat"
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
                    className="pb-2 [--base-color:#FFFFFF] [--base-gradient-color:#E0E0E0] dark:[--base-color:#FFFFFF] dark:[--base-gradient-color:#E0E0E0]"
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
                <Link to="/services" className="bg-[#f4cfd9] text-gray-800 px-8 py-3 rounded-full hover:bg-[#ebbdc7] transition-colors flex items-center justify-center">
                  Discover Our Services
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
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-xl">
                {aboutData && aboutData.image ? (
                  <img
                    src={urlFor(aboutData.image).url()}
                    alt={aboutData.title || "KeepMe product showcase"}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="https://cdn.sanity.io/images/tyzs5imn/production/d85b8c75d2ed12b35ba152edf9482005fc9e8414-2700x1336.webp"
                    alt="KeepMe product showcase"
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-[#f4cfd9]/20"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
                  <div>
                    <p className="text-xl font-bold">{aboutData?.yearsOfExperience || '15+'}+ Years</p>
                    <p className="text-gray-600">Of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                About <span className="text-[#f4cfd9]">KeepMe</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutData?.description || 'We design and manufacture an extensive range of expertly created products from signature scents to home fragrances, each meticulously crafted from the finest raw materials. Beautifully designed packaging showcases each bespoke product, tailored to complement and enhance your brand.'}
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Using Flickity for smooth scrolling */}
      <section id="services" className="py-20 relative services-section">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our <span className="text-[#f4cfd9]">Services</span>
            </h2>
            <p className="text-gray-600 mb-10">
              We offer a full range of services from bespoke design and production, to
              supplying stock items and components for cosmetic and fragrance products.
            </p>

            {/* Loading indicator */}
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f4cfd9]"></div>
              </div>
            ) : (
              <div className="relative">
                {/* Flickity Carousel with navigation arrows */}
                <FlickityCarousel
                  className="services-carousel"
                  options={{
                    freeScroll: true,
                    contain: true,
                    prevNextButtons: false,
                    pageDots: false,
                    cellAlign: 'left',
                    draggable: true,
                    friction: 0.2,
                    selectedAttraction: 0.01
                  }}
                  showArrows={true}
                >
                  {services.map((service) => {
                    // Get the icon component based on the icon name in the service
                    let IconComponent;
                    switch (service.icon) {
                      case 'Droplets': IconComponent = Droplets; break;
                      case 'GlassWater': IconComponent = GlassWater; break;
                      case 'Palette': IconComponent = Palette; break;
                      case 'Home': IconComponent = HomeIcon; break;
                      case 'Package': IconComponent = Package; break;
                      case 'Gift': IconComponent = Gift; break;
                      case 'Truck': IconComponent = Truck; break;
                      default: IconComponent = Droplets; // Default icon
                    }

                    // Change "Cosmetic Componentry" to "Skincare Componentry"
                    const displayTitle = service.title === "Cosmetic Componentry"
                      ? "Skincare Componentry"
                      : service.title;

                    return (
                      <div key={service.id} className="group relative w-full h-full">
                        {/* Make the entire card clickable with an overlay link */}
                        <Link to={`/${service.slug}`} className="absolute inset-0 z-10">
                          <span className="sr-only">Learn more about {displayTitle}</span>
                        </Link>

                        {/* Service image - increased height */}
                        <div className="w-full h-72 overflow-hidden mb-4 rounded-lg">
                          {serviceImages.find(img => img.title === service.title)?.image ? (
                            <img
                              src={urlFor(serviceImages.find(img => img.title === service.title)?.image).width(600).height(500).url()}
                              alt={serviceImages.find(img => img.title === service.title)?.image.alt || `${displayTitle} image`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full w-full bg-gray-200">
                              <IconComponent className="h-12 w-12 text-gray-400" />
                            </div>
                          )}
                        </div>

                        {/* Service title and description */}
                        <div>
                          <Link to={`/${service.slug}`} className="inline-block hover:text-[#f4cfd9] transition-colors relative z-20" onClick={(e) => e.stopPropagation()}>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-[#f4cfd9] transition-colors">{displayTitle}</h3>
                          </Link>
                          <p className="text-gray-600 text-sm">
                            {service.shortDescription.length > 80
                              ? `${service.shortDescription.substring(0, 80)}...`
                              : service.shortDescription}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </FlickityCarousel>

                {/* No gradient mask needed with arrows */}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {portfolioBrands.length > 0 ? (
        <FilterablePortfolio
          title="Our Portfolio"
          subtitle="Discover our partnerships with prestigious fragrance houses and luxury brands. We're proud to work with some of the most distinguished names in the industry."
          items={portfolioBrands}
          maxItems={6}
          showFilters={true}
          backgroundColor="bg-gray-50"
        />
      ) : (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our <span className="text-[#f4cfd9]">Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover our partnerships with prestigious fragrance houses and luxury brands.
            </p>
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f4cfd9]"></div>
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
              Our <span className="text-[#f4cfd9]">Reach</span>
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
            lineColor="#f4cfd9" // Use brand-pink for points and lines
          />
        </div>
      </section>

      {/* Testimonials Section - Using Sanity Data */}
      <Testimonials useSanity={true} />
    </>
  );
}

export default Home;
