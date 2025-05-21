// React import removed - not needed in modern React
// Removed StickyScroll import
import { Timeline } from '../components/ui/Timeline';
// Removed unused Image import (and it's incorrect for Vite)
// All icons removed as requested

// Adapt processContent for the Timeline component
const timelineData = [
  {
    title: "Material Selection",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-brand-plum dark:text-brand-plum mb-2">Material Selection</h3>
        <p className="text-brand-mauve dark:text-neutral-300 text-sm md:text-base">
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
        <h3 className="text-lg font-semibold text-brand-plum dark:text-brand-plum mb-2">Melting & Moulding</h3>
        <p className="text-brand-mauve dark:text-neutral-300 text-sm md:text-base">
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
        <h3 className="text-lg font-semibold text-brand-plum dark:text-brand-plum mb-2">Finishing & Decorating</h3>
        <p className="text-brand-mauve dark:text-neutral-300 text-sm md:text-base">
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
        <h3 className="text-lg font-semibold text-brand-plum dark:text-brand-plum mb-2">Quality Assurance</h3>
        <p className="text-brand-mauve dark:text-neutral-300 text-sm md:text-base">
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
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-plum mb-6">
                Premium <span className="text-brand-rose">Glass</span> Solutions
              </h1>
              <p className="text-lg text-brand-mauve leading-relaxed mb-8">
                Exquisite glass components custom-designed for your luxury fragrance products. From stunning bottles to precision caps, we deliver unmatched quality and craftsmanship.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand-mauve mb-4">Expert Glass Crafting</h3>
                <p className="text-base text-brand-mauve leading-relaxed">
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
                <div>
                  <p className="text-xl font-bold">20+ Years</p>
                  <p className="text-brand-mauve">Glass Expertise</p>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 bg-white rounded-xl p-6 shadow-lg hidden md:block">
                <div>
                  <p className="text-xl font-bold">Premium Quality</p>
                  <p className="text-brand-mauve">Luxury Materials</p>
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
              Premium Glass <span className="text-brand-rose">Types</span>
            </h2>
            <p className="text-lg text-brand-mauve leading-relaxed">
              We offer a variety of high-quality glass options to suit your specific fragrance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">

              <h3 className="text-xl font-semibold text-brand-plum mb-3">PCR Glass</h3>
              <p className="text-base text-brand-mauve leading-relaxed mb-4">
                Sustainably crafted glass made from post-consumer recycled materials. A responsible choice for eco-conscious fragrance brands, offering both quality and environmental impact.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-brand-mauve pl-4">
                  Sustainable Transparency
                </li>
                <li className="text-brand-mauve pl-4">
                  Refined Recycled Brilliance
                </li>
                <li className="text-brand-mauve pl-4">
                  Low-Impact Luxury
                </li>
              </ul>
              <a href="#" className="text-brand-rose font-medium hover:text-brand-plum transition-colors">
                View PCR Options
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">

              <h3 className="text-xl font-semibold text-brand-plum mb-3">Borosilicate Glass</h3>
              <p className="text-base text-brand-mauve leading-relaxed mb-4">
                High-performance glass with exceptional thermal resistance and durability. Ideal for fragrances with volatile compounds.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-brand-mauve pl-4">
                  Thermal shock resistant
                </li>
                <li className="text-brand-mauve pl-4">
                  Chemical durability
                </li>
                <li className="text-brand-mauve pl-4">
                  Lightweight yet strong
                </li>
              </ul>
              <a href="#" className="text-brand-rose font-medium hover:text-brand-plum transition-colors">
                View Borosilicate Options
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">

              <h3 className="text-xl font-semibold text-brand-plum mb-3">Coloured Glass</h3>
              <p className="text-base text-brand-mauve leading-relaxed mb-4">
                Vibrant coloured glass options that add distinctive visual appeal while providing UV protection for sensitive fragrances.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-brand-mauve pl-4">
                  UV protection
                </li>
                <li className="text-brand-mauve pl-4">
                  Custom colour matching
                </li>
                <li className="text-brand-mauve pl-4">
                  Gradient and multi-tone options
                </li>
              </ul>
              <a href="#" className="text-brand-rose font-medium hover:text-brand-plum transition-colors">
                View Colour Options
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section - Now using Timeline */}
      <section className="py-10 bg-white"> {/* Updated to white background */}
         <div className="container mx-auto px-6 text-center max-w-3xl mb-10">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-4">
               Our Glass Manufacturing <span className="text-brand-rose">Process</span>
             </h2>
             <p className="text-lg text-brand-mauve leading-relaxed">
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
                Custom Glass <span className="text-brand-card">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Beyond our standard offerings, we specialise in creating bespoke glass components tailored to your specific vision and requirements.
              </p>
              <div className="space-y-4 mb-8">
                <div className="pl-4">
                  <div>
                    <h3 className="font-bold text-lg">Custom Shapes & Designs</h3>
                    <p className="text-gray-600">From traditional to avant-garde, we can bring your unique design vision to life.</p>
                  </div>
                </div>
                <div className="pl-4">
                  <div>
                    <h3 className="font-bold text-lg">Specialty Finishes</h3>
                    <p className="text-gray-600">Frosted, metallic, gradient, and textured finishes for distinctive visual appeal.</p>
                  </div>
                </div>
                <div className="pl-4">
                  <div>
                    <h3 className="font-bold text-lg">Exclusive Techniques</h3>
                    <p className="text-gray-600">Hand-crafted elements, embedded features, and proprietary manufacturing processes.</p>
                  </div>
                </div>
              </div>
              <button className="bg-brand-button text-white px-8 py-3 rounded-full hover:bg-brand-card transition-colors">
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
      <section className="py-20 bg-brand-card text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Elevate Your Fragrance with Premium Glass
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-10">
            Contact our glass specialists today to discover how our exceptional glass components can enhance your fragrance products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-brand-accent text-white px-8 py-3 rounded-full hover:bg-brand-accent/80 transition-colors inline-block font-medium"
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
