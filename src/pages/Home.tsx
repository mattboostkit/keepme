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
  // State for service images and about section
  const [serviceImages, setServiceImages] = useState<ServiceImage[]>([]);
  const [aboutData, setAboutData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch service images and about section data from Sanity
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
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"> {/* Centered buttons */}
                <Link to="/services" className="bg-[#f4cfd9] text-gray-800 px-8 py-3 rounded-full hover:bg-[#ebbdc7] transition-colors flex items-center justify-center">
                  Discover Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-800 transition-colors flex justify-center"> {/* Adjusted border/text color */}
                  Contact Us
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
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#f4cfd9]/20 p-2 rounded-full">
                    <PenTool className="h-5 w-5 text-[#f4cfd9]" />
                  </div>
                  <p className="font-medium">Precision Formulation</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#f4cfd9]/20 p-2 rounded-full">
                    <Droplets className="h-5 w-5 text-[#f4cfd9]" />
                  </div>
                  <p className="font-medium">Finest Raw Materials</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#f4cfd9]/20 p-2 rounded-full">
                    <PackageCheck className="h-5 w-5 text-[#f4cfd9]" />
                  </div>
                  <p className="font-medium">Consistent Quality Control</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#f4cfd9]/20 p-2 rounded-full">
                    <Users className="h-5 w-5 text-[#f4cfd9]" />
                  </div>
                  <p className="font-medium">Specialist Partner Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our <span className="text-[#f4cfd9]">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Discover our comprehensive range of services designed to bring your fragrance vision to life,
              from concept to finished product.
            </p>
          </div>
          {/* Adjusted grid for services - using 3 columns on large screens */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Loading indicator */}
            {loading && (
              <div className="col-span-3 flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f4cfd9]"></div>
              </div>
            )}
            {/* Service Cards */}
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

              return (
                <div key={service.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow group overflow-hidden flex flex-col">
                  {/* Service image section with hover zoom effect */}
                  <div className="w-full h-80 bg-gray-200 flex items-center justify-center overflow-hidden">
                    {/* If we have a matching service image from Sanity, display it */}
                    {serviceImages.find(img => img.title === service.title)?.image ? (
                      <img
                        src={urlFor(serviceImages.find(img => img.title === service.title)?.image).width(600).height(400).url()}
                        alt={serviceImages.find(img => img.title === service.title)?.image.alt || `${service.title} image`}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full w-full">
                        <IconComponent className="h-12 w-12 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="bg-[#f4cfd9]/20 p-3 rounded-xl inline-block mb-4 self-start group-hover:bg-[#f4cfd9] transition-colors">
                      <IconComponent className="h-7 w-7 text-[#f4cfd9] group-hover:text-white transition-colors" />
                    </div>
                    <Link to={`/${service.slug}`} className="inline-block hover:text-[#f4cfd9] transition-colors">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    </Link>
                    <p className="text-gray-600 mb-4 text-sm flex-grow">
                      {service.shortDescription}
                    </p>
                    <Link to={`/${service.slug}`} className="text-[#f4cfd9] font-medium flex items-center mt-auto text-sm">
                      Learn more
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our <span className="text-[#f4cfd9]">Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600">
              Discover our partnerships with prestigious fragrance houses and luxury brands. We're proud to work with some of the most distinguished names in the industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden group relative">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Luxury perfume bottle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Link to="/portfolio" className="block">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#f4cfd9] transition-colors hover:text-[#f4cfd9] cursor-pointer">Roja Parfums</h3>
                </Link>
                <p className="text-gray-600 mb-4">Fragrance</p>
                <Link to="/portfolio" className="bg-[#f4cfd9] text-gray-800 px-5 py-2 rounded-full hover:bg-[#ebbdc7] transition-colors inline-flex items-center">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden group relative">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern perfume bottle design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Link to="/portfolio" className="block">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#f4cfd9] transition-colors hover:text-[#f4cfd9] cursor-pointer">Ormonde Jayne</h3>
                </Link>
                <p className="text-gray-600 mb-4">Luxury Packaging</p>
                <Link to="/portfolio" className="bg-[#f4cfd9] text-gray-800 px-5 py-2 rounded-full hover:bg-[#ebbdc7] transition-colors inline-flex items-center">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden group relative">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Artisan perfume collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Link to="/portfolio" className="block">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#f4cfd9] transition-colors hover:text-[#f4cfd9] cursor-pointer">Horatio</h3>
                </Link>
                <p className="text-gray-600 mb-4">Luxury Packaging</p>
                <Link to="/portfolio" className="bg-[#f4cfd9] text-gray-800 px-5 py-2 rounded-full hover:bg-[#ebbdc7] transition-colors inline-flex items-center">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden group relative">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Premium perfume packaging"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Link to="/portfolio" className="block">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#f4cfd9] transition-colors hover:text-[#f4cfd9] cursor-pointer">Boadacea</h3>
                </Link>
                <p className="text-gray-600 mb-4">Vials</p>
                <Link to="/portfolio" className="bg-[#f4cfd9] text-gray-800 px-5 py-2 rounded-full hover:bg-[#ebbdc7] transition-colors inline-flex items-center">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden group relative">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Luxury perfume gift set"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Link to="/portfolio" className="block">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#f4cfd9] transition-colors hover:text-[#f4cfd9] cursor-pointer">BDXY</h3>
                </Link>
                <p className="text-gray-600 mb-4">Candles</p>
                <Link to="/portfolio" className="bg-[#f4cfd9] text-gray-800 px-5 py-2 rounded-full hover:bg-[#ebbdc7] transition-colors inline-flex items-center">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden group relative">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Eco-friendly perfume packaging"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Link to="/portfolio" className="block">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#f4cfd9] transition-colors hover:text-[#f4cfd9] cursor-pointer">Stephane Humbert Lucas</h3>
                </Link>
                <p className="text-gray-600 mb-4">Shields & Caps</p>
                <Link to="/portfolio" className="bg-[#f4cfd9] text-gray-800 px-5 py-2 rounded-full hover:bg-[#ebbdc7] transition-colors inline-flex items-center">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
