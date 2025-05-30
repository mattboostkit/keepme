// React import removed - not needed in modern React
// Removed StickyScroll import
import { Link } from 'react-router-dom';
import { Timeline } from '../components/ui/Timeline';
// Removed unused Image import (and it's incorrect for Vite)
// All icons removed as requested

// Adapt processContent for the Timeline component
const timelineData = [
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
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-brand-peach">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-sans font-semibold text-brand-plum mb-6">
                Premium <span className="text-brand-rose">Glass Solutions</span>
              </h1>
              <p className="text-lg text-brand-mauve leading-relaxed mb-8">
                We create custom-designed glass components that define and elevate your fragrance brand.  With a deep understanding of the fragrance industry's aesthetic and functional demands, we deliver exceptional quality, refined detail, and timeless craftsmanship—transforming glass into a powerful expression of identity.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand-mauve mb-4">Expert Glass Finishing</h3>
                <ul className="list-disc list-inside text-base text-brand-mauve leading-relaxed space-y-1">
                  <li>Tailor-made bottle designs</li>
                  <li>Premium materials and finishes</li>
                  <li>Innovative forms, textures, and techniques</li>
                  <li>Reliable production and uncompromising quality</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/59313bd50e9799ef00ea9c463cc5854043e98d95-1400x900.jpg"
                alt="KeepMe luxury glass perfume bottles"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                loading="eager"
                decoding="sync"
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
              Premium Glass Decoration
            </h2>
            <p className="text-lg text-brand-mauve leading-relaxed">
              We offer a variety of high-quality glass finishes to suit your specific fragrance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                Each technique can be tailored and combined to create unique bottles that reflect your brand’s personality and stand out. <a href="/portfolio" className="text-brand-rose font-semibold hover:underline">Browse our Portfolio</a> to see the results.
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
          </div>
        </div>
      </section>

      {/* Our Process Section - Now using Timeline */}
      {/* Placeholder for imagery/video of the manufacturing process */}
      {/* <!-- TODO: Add imagery or video of the manufacturing process here --> */}
      <section className="py-20 bg-white"> {/* Updated to white background and consistent padding */}
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Custom Glass <span className="text-brand-peach">Solutions</span>
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
                    <h3 className="font-bold text-lg">Speciality Finishes</h3>
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
              <Link to="/contact" className="bg-brand-rose text-white px-8 py-3 rounded-full hover:bg-brand-mauve transition-colors">
                Schedule a Consultation
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/2843ef942571776b77029faa8e5ccb0af285ec1d-3590x4787.webp"
                alt="Custom glass perfume bottle"
                className="rounded-2xl shadow-md w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/7b8ab701663d19cd36d8fddeaa1dfb1e73d4a5ac-3590x4787.webp"
                alt="Luxury glass bottle detail"
                className="rounded-2xl shadow-md w-full h-64 object-cover mt-12"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/d4beeb28634e5c79b343e100faceafde1efb533c-1226x958.webp"
                alt="Decorative glass elements"
                className="rounded-2xl shadow-md w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/d798aba6d18ef671fb30f31153ddbf3a3f79465b-803x850.png"
                alt="Frosted glass bottle"
                className="rounded-2xl shadow-md w-full h-64 object-cover mt-12"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-pink-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">
            Elevate Your Fragrance with Premium Glass
          </h2>
          <p className="text-xl text-brand-mauve max-w-3xl mx-auto mb-10">
            Contact our glass specialists today to discover how our exceptional glass components can enhance your fragrance products.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="bg-brand-mauve text-white px-8 py-3 rounded-full hover:bg-brand-rose transition-colors inline-block font-medium"
            >
              Request a Sample
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Glass;
