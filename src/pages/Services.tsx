// React import removed - not needed in modern React
import { Link } from 'react-router-dom'; // Import Link
import FaqAccordion from '../components/FaqAccordion';
import { useSanityQuery } from '../lib/useSanity';
import { urlFor } from '../lib/sanity';

// Helper interface for type assertion with Sanity's image URL builder
interface ChainableUrl {
  url: () => string;
}

// Interface for the Sanity image object with alt text
interface SanityImageObject {
  asset: {
    _ref: string;
    _type: string;
  };
  alt: string;
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
  luxuryPackagingImage?: SanityImageObject;
  giftWithPurchaseImage?: SanityImageObject;
}

const SERVICES_PAGE_IMAGES_QUERY = `*[_type == "servicesPageImages"][0]{
  _id,
  _type,
  mainOurServicesImage { asset, alt },
  fragranceCreationImage { asset, alt },
  fragranceComponentryImage { asset, alt },
  skincareComponentryImage { asset, alt },
  homeFragranceImage { asset, alt },
  luxuryPackagingImage { asset, alt },
  giftWithPurchaseImage { asset, alt }
}`;

function Services() {
  const { data: servicesImages, loading, error } = useSanityQuery<ServicesPageImageData>(SERVICES_PAGE_IMAGES_QUERY);

  if (loading) {
    return <div className="pt-24 text-center">Loading service images...</div>;
  }

  if (error) {
    return <div className="pt-24 text-center text-red-500">Error loading service images. Please try again later.</div>;
  }

  // Fallback if data isn't loaded for some reason, though error state should catch it.
  // Or if the singleton document doesn't exist yet.
  if (!servicesImages) {
    return <div className="pt-24 text-center">Service image configuration not found. Please ensure it's set up in Sanity.</div>;
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-sans font-semibold text-brand-plum mb-6">
                Our <span className="text-brand-rose">Services</span>
              </h1>
              <p className="text-lg text-brand-mauve leading-relaxed mb-8">
                From concept to delivery, we provide end-to-end fragrance manufacturing solutions tailored to your brand's unique vision.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-normal text-brand-mauve mb-4">Full-Service Solutions</h3>
                <p className="text-base text-brand-mauve leading-relaxed">
                  We offer comprehensive services from design and technical drawings, manufacturing of components to logistics and delivery, ensuring a seamless experience for your brand.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={servicesImages.mainOurServicesImage ? (urlFor(servicesImages.mainOurServicesImage).width(1200) as unknown as ChainableUrl).url() : 'https://via.placeholder.com/1226x958.png?text=Main+Service+Image'}
                alt={servicesImages.mainOurServicesImage?.alt || 'Main Our Services Image'}
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg">
                <div>
                  <p className="text-xl font-semibold">Full Service</p>
                  <p className="text-gray-600">Comprehensive Solutions</p>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 bg-white rounded-xl p-6 shadow-lg hidden md:block">
                <div>
                  <p className="text-xl font-semibold">Global Reach</p>
                  <p className="text-gray-600">Worldwide Delivery</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-sans font-normal text-brand-plum mb-6 text-center">Our Service <span className="text-brand-rose">Categories</span></h3>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Reordered Links */}
              <a href="#fragrance-componentry" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-brand-highlight/20 transition-all text-gray-700 font-normal">
                Fragrance Componentry
              </a>
              <a href="#home-fragrance" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-brand-highlight/20 transition-all text-gray-700 font-normal">
                Home Fragrance
              </a>
              <a href="#luxury-packaging" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-brand-highlight/20 transition-all text-gray-700 font-normal">
                Luxury Packaging
              </a>
              <a href="#gift-with-purchase" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-brand-highlight/20 transition-all text-gray-700 font-normal">
                Gift With Purchase
              </a>
              <a href="#skincare-componentry" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-brand-highlight/20 transition-all text-gray-700 font-normal">
                Skincare Componentry
              </a>
              <a href="#fragrance-creation" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-brand-highlight/20 transition-all text-gray-700 font-normal">
                Fragrance Creation
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Reordered Service Sections */}

      {/* 1. Fragrance Componentry Section */}
      <section id="fragrance-componentry" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>

              <h2 className="text-3xl md:text-4xl font-sans font-semibold text-brand-plum mb-6">
                Fragrance <span className="text-brand-rose">Componentry</span>
              </h2>
              <p className="text-lg text-brand-mauve leading-relaxed mb-6">
                Discover our extensive range of fragrance glass and componentry. We manufacture and supply premium bottles, sophisticated caps, precision pumps, vials, and closures, ensuring your fragrance is presented to reflect its quality and your brand's aesthetic.
              </p>
              {/* Optional: Add bullet points if more detail is available */}
              <Link to="/services/fragrance-componentry" className="inline-block mt-6 bg-brand-mauve text-white px-6 py-3 rounded-full hover:bg-brand-rose transition-colors">
                Learn More about Fragrance Componentry
              </Link>
            </div>
            <div>
              <img src={servicesImages.fragranceComponentryImage ? (urlFor(servicesImages.fragranceComponentryImage).width(800) as unknown as ChainableUrl).url() : 'https://via.placeholder.com/800x350.png?text=Fragrance+Componentry'} alt={servicesImages.fragranceComponentryImage?.alt || 'Fragrance Componentry'} className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Home Fragrance Section */}
      <section id="home-fragrance" className="py-20 bg-brand-highlight/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={servicesImages.homeFragranceImage ? (urlFor(servicesImages.homeFragranceImage).width(800) as unknown as ChainableUrl).url() : 'https://via.placeholder.com/800x350.png?text=Home+Fragrance'} alt={servicesImages.homeFragranceImage?.alt || 'Home Fragrance'} className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </div>
            <div className="order-1 md:order-2">

              <h2 className="text-3xl md:text-4xl font-sans font-semibold text-brand-plum mb-6">
                Home <span className="text-brand-rose">Fragrance</span>
              </h2>
              <p className="text-lg text-brand-mauve leading-relaxed mb-6">
                Expand your brand's presence into the home sector with our bespoke home fragrance solutions. From luxurious scented candles and elegant reed diffusers to room sprays and more, we help you create inviting atmospheres that resonate with your customers.
              </p>
              {/* Optional: Add bullet points if more detail is available */}
              <Link to="/services/home-fragrance" className="inline-block mt-6 bg-brand-mauve text-white px-6 py-3 rounded-full hover:bg-brand-rose transition-colors">
                Learn More about Home Fragrance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Luxury Packaging Section */}
      <section id="luxury-packaging" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>

              <h2 className="text-3xl md:text-4xl font-sans font-semibold text-brand-plum mb-6">
                Luxury <span className="text-brand-rose">Packaging</span>
              </h2>
              <p className="text-lg text-brand-mauve leading-relaxed mb-6">
                Specialising in luxury packaging for the fragrance industry, we help elevate your brand's perceived value. Our exquisite packaging solutions are meticulously designed to impress consumers, convey exclusivity, and protect the precious contents within.
              </p>
              {/* Optional: Add bullet points if more detail is available */}
              <Link to="/services/luxury-packaging" className="inline-block mt-6 bg-brand-mauve text-white px-6 py-3 rounded-full hover:bg-brand-rose transition-colors">
                Learn More about Luxury Packaging
              </Link>
            </div>
            <div>
              <img src={servicesImages.luxuryPackagingImage ? (urlFor(servicesImages.luxuryPackagingImage).width(800) as unknown as ChainableUrl).url() : 'https://via.placeholder.com/800x350.png?text=Luxury+Packaging'} alt={servicesImages.luxuryPackagingImage?.alt || 'Luxury Packaging'} className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Gift With Purchase Section */}
      <section id="gift-with-purchase" className="py-20 bg-brand-highlight/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={servicesImages.giftWithPurchaseImage ? (urlFor(servicesImages.giftWithPurchaseImage).width(800) as unknown as ChainableUrl).url() : 'https://via.placeholder.com/800x350.png?text=Gift+With+Purchase'} alt={servicesImages.giftWithPurchaseImage?.alt || 'Gift With Purchase'} className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </div>
            <div className="order-1 md:order-2">

              <h2 className="text-3xl md:text-4xl font-sans font-semibold text-brand-plum mb-6">
                Gift With <span className="text-brand-rose">Purchase</span>
              </h2>
              <p className="text-lg text-brand-mauve leading-relaxed mb-6">
                Boost your marketing campaigns and enhance customer loyalty with compelling Gift With Purchase (GWP). We design and source attractive, relevant items for fragrance and lifestyle gifting that drive sales and delight your customers.
              </p>
              {/* Optional: Add bullet points if more detail is available */}
              <Link to="/services/gift-with-purchase" className="inline-block mt-6 bg-brand-mauve text-white px-6 py-3 rounded-full hover:bg-brand-rose transition-colors">
                Learn More about Gift With Purchase
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Skincare Componentry Section */}
      <section id="skincare-componentry" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>

              <h2 className="text-3xl md:text-4xl font-sans font-semibold text-brand-plum mb-6">
                Skincare <span className="text-brand-rose">Componentry</span>
              </h2>
              <p className="text-lg text-brand-mauve leading-relaxed mb-6">
                Source high-quality skincare parts through our extensive network. We provide a diverse selection of components for various skincare applications, focusing on functionality, durability, and the aesthetic details that elevate your product presentation.
              </p>
              {/* Optional: Add bullet points if more detail is available */}
              <Link to="/services/skincare-componentry" className="inline-block mt-6 bg-brand-mauve text-white px-6 py-3 rounded-full hover:bg-brand-rose transition-colors">
                Learn More about Skincare Componentry
              </Link>
            </div>
            <div>
              <img src={servicesImages.skincareComponentryImage ? (urlFor(servicesImages.skincareComponentryImage).width(800) as unknown as ChainableUrl).url() : 'https://via.placeholder.com/800x350.png?text=Skincare+Componentry'} alt={servicesImages.skincareComponentryImage?.alt || 'Skincare Componentry'} className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Fragrance Creation Section */}
      <section id="fragrance-creation" className="py-20 bg-brand-highlight/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={servicesImages.fragranceCreationImage ? (urlFor(servicesImages.fragranceCreationImage).width(800) as unknown as ChainableUrl).url() : 'https://via.placeholder.com/800x350.png?text=Fragrance+Creation'} alt={servicesImages.fragranceCreationImage?.alt || 'Fragrance Creation'} className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-sans font-semibold text-brand-plum mb-6">
                Fragrance <span className="text-brand-rose">Creation</span>
              </h2>
              <p className="text-lg text-brand-mauve leading-relaxed mb-6">
                Leverage on the expertise of our partners in the art and science of fragrance creation. We work with the best perfumers in Europe. We collaborate with you to develop unique, captivating scents that embody your brand's essence, guiding the journey from initial concept through meticulous refinement to the final, signature masterpiece.
              </p>
              {/* Optional: Add bullet points if more detail is available */}
              <Link to="/services/fragrance-creation" className="inline-block mt-6 bg-brand-mauve text-white px-6 py-3 rounded-full hover:bg-brand-rose transition-colors">
                Learn More about Fragrance Creation
              </Link>
            </div>
          </div> {/* Closing tag for grid md:grid-cols-2 */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-4">
              Frequently Asked <span className="text-brand-rose">Questions</span>
            </h2>
            <p className="text-lg text-brand-mauve leading-relaxed">
              Find answers to common questions about our fragrance services
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <FaqAccordion
              items={[
                {
                  question: "What is the minimum order quantity?",
                  answer: "Our minimum order quantities vary by product type. Stock Glass Bottles and Caps typically require a minimum of 1,000 units (this can increase depending on capacity and complexity), whilst Bespoke Glass Bottles and Caps have an MOQ of 10,000 units. Decoration MOQ’s vary between 500-5,000 units."
                },
                {
                  question: "How long does the production process take?",
                  answer: "We recommend 6 months when custom moulds aren’t required, bespoke projects may require up to 9 months depending on complexity and required components. Our team will issue a Critical Path during the Development and Evaluation stages"
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-pink-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-plum">
            Ready to Bring Your Fragrance Vision to Life?
          </h2>
          <p className="text-xl text-brand-plum max-w-3xl mx-auto mb-10">
            Contact us today to discuss your project and how our services can help you create exceptional fragrances.
          </p>
          <a
            href="/contact"
            className="bg-brand-mauve text-white px-8 py-3 rounded-full hover:bg-brand-rose transition-colors inline-block font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;