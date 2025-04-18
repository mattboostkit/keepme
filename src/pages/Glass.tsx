// React import removed - not needed in modern React
// Removed StickyScroll import
import { Timeline } from '../components/ui/Timeline';
// Removed unused Image import (and it's incorrect for Vite)
import {
  FlaskRound as Flask,
  Beaker,
  Layers,
  CheckCircle,
  ArrowRight,
  GlassWater
  // Removed unused Thermometer, FlaskConical, ShieldCheck
} from 'lucide-react';

// Adapt processContent for the Timeline component
const timelineData = [
  {
    title: "Material Selection",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-[#f4cfd9] dark:text-[#f4cfd9] mb-2">Material Selection</h3>
        <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base">
          We source the highest quality raw materials, ensuring each component meets our strict standards.
        </p>
        <img src="https://placehold.co/600x400/EEE/CCC?text=Process+Step+1" alt="Placeholder image for Material Selection" className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" />
      </div>
    ),
  },
  {
    title: "Melting & Moulding",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-[#f4cfd9] dark:text-[#f4cfd9] mb-2">Melting & Moulding</h3>
        <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base">
          Precision heating and moulding techniques create perfectly formed glass components.
        </p>
        <img src="https://placehold.co/600x400/EEE/CCC?text=Process+Step+2" alt="Placeholder image for Melting & Moulding" className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" />
      </div>
    ),
  },
  {
    title: "Finishing & Decorating",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-[#f4cfd9] dark:text-[#f4cfd9] mb-2">Finishing & Decorating</h3>
        <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base">
          Expert finishing techniques and decorative elements add distinctive character to each piece.
        </p>
        <img src="https://placehold.co/600x400/EEE/CCC?text=Process+Step+3" alt="Placeholder image for Finishing & Decorating" className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" />
      </div>
    ),
  },
  {
    title: "Quality Assurance",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-[#f4cfd9] dark:text-[#f4cfd9] mb-2">Quality Assurance</h3>
        <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base">
          Rigorous testing ensures each glass component meets our exacting standards before delivery.
        </p>
        <img src="https://placehold.co/600x400/EEE/CCC?text=Process+Step+4" alt="Placeholder image for Quality Assurance" className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" />
      </div>
    ),
  },
];


function Glass() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#fffded] to-[#eed9b2]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Premium <span className="text-[#f4cfd9]">Glass</span> Solutions
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Exquisite glass components custom-designed for your luxury fragrance products. From stunning bottles to precision caps, we deliver unmatched quality and craftsmanship.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#f4cfd9]/20 p-2 rounded-full">
                    <GlassWater className="h-6 w-6 text-[#f4cfd9]" />
                  </div>
                  <h3 className="text-xl font-bold">Expert Glass Crafting</h3>
                </div>
                <p className="text-gray-600">
                  Our glass components are crafted with precision and artistry, ensuring each piece meets the highest standards of quality and aesthetic appeal.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/59313bd50e9799ef00ea9c463cc5854043e98d95-1400x900.jpg"
                alt="KeepMe luxury glass perfume bottles"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-[#f4cfd9]/20 p-2 rounded-full">
                    <Flask className="h-6 w-6 text-[#f4cfd9]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">20+ Years</p>
                    <p className="text-gray-600">Glass Expertise</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 bg-white rounded-xl p-6 shadow-lg hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="bg-[#f4cfd9]/20 p-2 rounded-full">
                    <Beaker className="h-6 w-6 text-[#f4cfd9]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">Premium Quality</p>
                    <p className="text-gray-600">Luxury Materials</p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Premium Glass <span className="text-[#f4cfd9]">Types</span>
            </h2>
            <p className="text-lg text-gray-600">
              We offer a variety of high-quality glass options to suit your specific fragrance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-[#f4cfd9]/20 p-4 rounded-xl inline-block mb-6">
                <Flask className="h-8 w-8 text-[#f4cfd9]" />
              </div>
              <h3 className="text-xl font-bold mb-3">PCR Glass</h3>
              <p className="text-gray-600 mb-4">
                Sustainably crafted glass made from post-consumer recycled materials. A responsible choice for eco-conscious fragrance brands, offering both quality and environmental impact.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-[#f4cfd9] mr-2" />
                  Sustainable Transparency
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-[#f4cfd9] mr-2" />
                  Refined Recycled Brilliance
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-[#f4cfd9] mr-2" />
                  Low-Impact Luxury
                </li>
              </ul>
              <a href="#" className="text-[#f4cfd9] font-medium flex items-center">
                View PCR Options
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-[#f4cfd9]/20 p-4 rounded-xl inline-block mb-6">
                <Beaker className="h-8 w-8 text-[#f4cfd9]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Borosilicate Glass</h3>
              <p className="text-gray-600 mb-4">
                High-performance glass with exceptional thermal resistance and durability. Ideal for fragrances with volatile compounds.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-[#f4cfd9] mr-2" />
                  Thermal shock resistant
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-[#f4cfd9] mr-2" />
                  Chemical durability
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-[#f4cfd9] mr-2" />
                  Lightweight yet strong
                </li>
              </ul>
              <a href="#" className="text-[#f4cfd9] font-medium flex items-center">
                View Borosilicate Options
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-[#f4cfd9]/20 p-4 rounded-xl inline-block mb-6">
                <Layers className="h-8 w-8 text-[#f4cfd9]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Coloured Glass</h3>
              <p className="text-gray-600 mb-4">
                Vibrant coloured glass options that add distinctive visual appeal while providing UV protection for sensitive fragrances.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-[#f4cfd9] mr-2" />
                  UV protection
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-[#f4cfd9] mr-2" />
                  Custom colour matching
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-[#f4cfd9] mr-2" />
                  Gradient and multi-tone options
                </li>
              </ul>
              <a href="#" className="text-[#f4cfd9] font-medium flex items-center">
                View Colour Options
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section - Now using Timeline */}
      <section className="py-10 bg-background"> {/* Adjusted padding and background */}
         <div className="container mx-auto px-6 text-center max-w-3xl mb-10">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
               Our Glass Manufacturing <span className="text-[#f4cfd9]">Process</span> {/* Adjusted color */}
             </h2>
             <p className="text-lg text-muted-foreground">
               From raw materials to finished products, our meticulous process ensures exceptional quality
             </p>
         </div>
         {/* Using a container div to manage width and centering if needed */}
         <div className="max-w-7xl mx-auto">
            <Timeline data={timelineData} />
         </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Custom Glass <span className="text-[#f4cfd9]">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Beyond our standard offerings, we specialise in creating bespoke glass components tailored to your specific vision and requirements.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-gray-700 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Custom Shapes & Designs</h3>
                    <p className="text-gray-600">From traditional to avant-garde, we can bring your unique design vision to life.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-gray-700 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Specialty Finishes</h3>
                    <p className="text-gray-600">Frosted, metallic, gradient, and textured finishes for distinctive visual appeal.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-gray-700 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Exclusive Techniques</h3>
                    <p className="text-gray-600">Hand-crafted elements, embedded features, and proprietary manufacturing processes.</p>
                  </div>
                </div>
              </div>
              <button className="bg-brand-pink text-white px-8 py-3 rounded-full hover:bg-[#ebbdc7] transition-colors">
                Schedule a Consultation
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1563170352-76e756f569aa?auto=format&fit=crop&q=80"
                alt="Custom glass perfume bottle"
                className="rounded-2xl shadow-md w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1612036782180-6f0822369c55?auto=format&fit=crop&q=80"
                alt="Luxury glass bottle detail"
                className="rounded-2xl shadow-md w-full h-64 object-cover mt-12"
              />
              <img
                src="https://images.unsplash.com/photo-1574616536048-61a842bc1850?auto=format&fit=crop&q=80"
                alt="Decorative glass elements"
                className="rounded-2xl shadow-md w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1550697560-af26217945dd?auto=format&fit=crop&q=80"
                alt="Frosted glass bottle"
                className="rounded-2xl shadow-md w-full h-64 object-cover mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-pink text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Elevate Your Fragrance with Premium Glass
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-10">
            Contact our glass specialists today to discover how our exceptional glass components can enhance your fragrance products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-gray-700 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-block font-medium"
            >
              Request a Sample
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors inline-block font-medium"
            >
              Download Catalogue
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Glass;
