// React import removed - not needed in modern React
import { Link } from 'react-router-dom'; // Import Link
import {
  Droplets,
  Palette,
  Home,        // Added for Home Fragrance
  GlassWater,  // Added for Fragrance Componentry
  Package,     // Added for Luxury Packaging
  Gift,        // Added for Gifts With Purchase
  Truck        // Added to fix runtime error
} from 'lucide-react';

function Services() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#fffded] to-[#eed9b2]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Our <span className="text-[#f4cfd9]">Services</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                From concept to delivery, we provide end-to-end fragrance manufacturing solutions tailored to your brand's unique vision.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#f4cfd9]/20 p-2 rounded-full">
                    <Droplets className="h-6 w-6 text-[#f4cfd9]" />
                  </div>
                  <h3 className="text-xl font-bold">Full-Service Solutions</h3>
                </div>
                <p className="text-gray-600">
                  We offer comprehensive services from design and technical drawings, manufacturing of components to logistics and delivery, ensuring a seamless experience for your brand.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80"
                alt="Perfume manufacturing process"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-[#f4cfd9]/20 p-2 rounded-full">
                    <Palette className="h-6 w-6 text-[#f4cfd9]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">Full Service</p>
                    <p className="text-gray-600">Comprehensive Solutions</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 bg-white rounded-xl p-6 shadow-lg hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="bg-[#f4cfd9]/20 p-2 rounded-full">
                    <Truck className="h-6 w-6 text-[#f4cfd9]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">Global Reach</p>
                    <p className="text-gray-600">Worldwide Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">Our Service Categories</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Reordered Links */}
              <a href="#fragrance-componentry" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 font-medium">
                Fragrance Componentry
              </a>
              <a href="#home-fragrance" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 font-medium">
                Home Fragrance
              </a>
              <a href="#luxury-packaging" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 font-medium">
                Luxury Packaging
              </a>
              <a href="#gifts-with-purchase" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 font-medium">
                Gifts With Purchase
              </a>
              <a href="#cosmetic-componentry" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 font-medium">
                Cosmetic Componentry
              </a>
              <a href="#fragrance-creation" className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 font-medium">
                Fragrance Creation
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Reordered Service Sections */}

      {/* 1. Fragrance Componentry Section */}
      <section id="fragrance-componentry" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#f4cfd9] p-4 rounded-xl inline-block mb-6">
                <GlassWater className="h-6 w-6 text-[#f4cfd9]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Fragrance Componentry
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Discover our extensive range of fragrance glass and componentry. We source and supply premium bottles, sophisticated caps, reliable pumps, and other essential elements, ensuring your fragrance is presented in packaging that reflects its quality and your brand's aesthetic.
              </p>
              {/* Optional: Add bullet points if more detail is available */}
              <Link to="/fragrance-componentry" className="inline-block mt-6 bg-brand-pink text-white px-6 py-3 rounded-full hover:bg-[#ebbdc7] transition-colors">
                Learn More about Fragrance Componentry
              </Link>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80" alt="Fragrance Componentry" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Home Fragrance Section */}
      <section id="home-fragrance" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1602928298849-325cec8771c0?auto=format&fit=crop&q=80" alt="Home Fragrance" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-[#f4cfd9] p-4 rounded-xl inline-block mb-6">
                <Home className="h-6 w-6 text-[#f4cfd9]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Home Fragrance
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Expand your brand's presence into the home with our bespoke home fragrance solutions. From luxurious scented candles and elegant reed diffusers to room sprays and more, we help you create inviting atmospheres that resonate with your customers.
              </p>
              {/* Optional: Add bullet points if more detail is available */}
              <Link to="/home-fragrance" className="inline-block mt-6 bg-brand-pink text-white px-6 py-3 rounded-full hover:bg-[#ebbdc7] transition-colors">
                Learn More about Home Fragrance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Luxury Packaging Section */}
      <section id="luxury-packaging" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#f4cfd9] p-4 rounded-xl inline-block mb-6">
                <Package className="h-6 w-6 text-[#f4cfd9]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Luxury Packaging
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Specialising in luxury packaging for the fragrance industry, we help elevate your brand's perceived value. Our exquisite packaging solutions are meticulously designed to impress consumers, convey exclusivity, and protect the precious contents within.
              </p>
              {/* Optional: Add bullet points if more detail is available */}
              <Link to="/luxury-packaging" className="inline-block mt-6 bg-brand-pink text-white px-6 py-3 rounded-full hover:bg-[#ebbdc7] transition-colors">
                Learn More about Luxury Packaging
              </Link>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1592842232655-e5d345cbc2d0?auto=format&fit=crop&q=80" alt="Luxury Packaging" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Gifts With Purchase Section */}
      <section id="gifts-with-purchase" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80" alt="Gifts With Purchase" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-[#f4cfd9] p-4 rounded-xl inline-block mb-6">
                <Gift className="h-6 w-6 text-[#f4cfd9]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Gifts With Purchase
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Boost your marketing campaigns and enhance customer loyalty with compelling Gifts With Purchase (GWP). We design and source attractive, relevant items for fragrance and lifestyle gifting that drive sales and delight your customers.
              </p>
              {/* Optional: Add bullet points if more detail is available */}
              <Link to="/gifts-with-purchase" className="inline-block mt-6 bg-brand-pink text-white px-6 py-3 rounded-full hover:bg-[#ebbdc7] transition-colors">
                Learn More about Gifts With Purchase
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Cosmetic Componentry Section */}
      <section id="cosmetic-componentry" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#f4cfd9] p-4 rounded-xl inline-block mb-6">
                <Palette className="h-10 w-10 text-[#f4cfd9]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Cosmetic Componentry
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Source high-quality cosmetic parts through our extensive network. We provide a diverse selection of components for various cosmetic applications, focusing on functionality, durability, and the aesthetic details that elevate your product presentation.
              </p>
              {/* Optional: Add bullet points if more detail is available */}
              <Link to="/cosmetic-componentry" className="inline-block mt-6 bg-brand-pink text-white px-6 py-3 rounded-full hover:bg-[#ebbdc7] transition-colors">
                Learn More about Cosmetic Componentry
              </Link>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80" alt="Cosmetic Componentry" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Fragrance Creation Section */}
      <section id="fragrance-creation" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80" alt="Fragrance Creation" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-[#f4cfd9] p-4 rounded-xl inline-block mb-6">
                <Droplets className="h-10 w-10 text-[#f4cfd9]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Fragrance Creation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Leverage our expertise in the art and science of fragrance creation. Our master perfumers collaborate with you to develop unique, captivating scents that embody your brand's essence, guiding the journey from initial concept through meticulous refinement to the final, signature masterpiece.
              </p>
              {/* Optional: Add bullet points if more detail is available */}
              <Link to="/fragrance-creation" className="inline-block mt-6 bg-brand-pink text-white px-6 py-3 rounded-full hover:bg-[#ebbdc7] transition-colors">
                Learn More about Fragrance Creation
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-brand-pink text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Bring Your Fragrance Vision to Life?
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-10">
            Contact us today to discuss your project and discover how our comprehensive services can help you create exceptional fragrances.
          </p>
          <a
            href="/contact"
            className="bg-white text-gray-700 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-block font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;