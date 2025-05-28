// React import removed - not needed in modern React
// Removed StickyScroll import
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
        <img src="https://cdn.sanity.io/images/tyzs5imn/production/2843ef942571776b77029faa8e5ccb0af285ec1d-3590x4787.webp" alt="Sourcing and mixing raw materials for glass production" className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" />
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
        <img src="https://cdn.sanity.io/images/tyzs5imn/production/7b8ab701663d19cd36d8fddeaa1dfb1e73d4a5ac-3590x4787.webp" alt="Molten glass being formed" className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" />
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
        <img src="https://cdn.sanity.io/images/tyzs5imn/production/d4beeb28634e5c79b343e100faceafde1efb533c-1226x958.webp" alt="Glass bottles in an annealing oven" className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" />
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
        <img src="https://cdn.sanity.io/images/tyzs5imn/production/d798aba6d18ef671fb30f31153ddbf3a3f79465b-803x850.png" alt="Manual inspection of glass bottles" className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" />
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
        <img src="https://placehold.co/600x400/EEE/CCC?text=Finishing+%26+Decorating" alt="Decorated glass perfume bottles" className="mt-4 rounded-lg shadow-md w-full h-auto object-cover" />
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
              <h1 className="text-4xl md:text-5xl font-sans font-semibold text-brand-plum mb-6">
                Premium Glass Solutions
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
                To achieve the flawless, crystal surfaces that make fragrance bottles truly stand out, we use expert finishing techniques like hand polishing and fire polishing—each delivering an immaculate, high-gloss finish that enhances the beauty and luxury of your glass components.
              </p>
              <p className="text-base text-brand-mauve leading-relaxed mb-4">
                <strong>Hand Polishing</strong> is a meticulous, artisan process where skilled craftsmen gently refine every curve and edge using fine abrasives and polishing tools. This technique smooths out any minor imperfections and creates a perfectly even surface with a subtle, elegant sheen. The result is glass that feels as exquisite to touch as it looks, elevating the tactile experience of your fragrance bottle.
              </p>
              <p className="text-base text-brand-mauve leading-relaxed mb-4">
                <strong>Fire Polishing</strong> involves carefully reheating the glass surface to a precise temperature, allowing the outer layer to soften and naturally smooth out under expert control. This process enhances clarity, reduces surface irregularities, and produces a brilliant, mirror-like gloss. Fire polishing gives the glass an exceptionally pure and luminous appearance, capturing light beautifully and highlighting the bottle’s design details.
              </p>
              <p className="text-base text-brand-mauve leading-relaxed mt-auto">
                Together, these finishing techniques ensure your fragrance bottles have an impeccable, polished look—reflecting the premium quality and craftsmanship your brand deserves.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
              <h3 className="text-xl font-semibold text-brand-plum mb-3">Glass Printing and Decoration Techniques</h3>
              <p className="text-base text-brand-mauve leading-relaxed mb-4">
                To bring your fragrance bottles to life with captivating detail and unique branding, we offer a range of expert decoration techniques—each carefully designed to enhance the visual impact and luxury feel of your glass components.
              </p>
              <div className="space-y-3 mb-4 text-sm text-brand-mauve leading-relaxed">
                <p><strong>Printing & Silkscreen:</strong> Our precision printing and silkscreen processes allow for vibrant, high-definition graphics and logos directly applied to the glass surface. Whether bold colours or delicate details, these techniques ensure sharp, lasting imagery that reinforces your brand identity.</p>
                <p><strong>Spraying & Graduated Finishes:</strong> Create stunning visual effects with sprayed coatings and graduated (ombre) finishes that transition smoothly in color or texture. These finishes add depth, sophistication, and an element of surprise, giving your bottles a truly bespoke look.</p>
                <p><strong>Foiling:</strong> Add a touch of glamour with metallic foiling, applying shimmering gold, silver, or custom colours that catch the light and elevate the bottle’s elegance. Foiling can highlight logos, borders, or decorative patterns with a luxurious shine.</p>
                <p><strong>Laser Etching:</strong> For a subtle, tactile effect, laser etching engraves precise designs onto the glass surface without color. This technique produces a refined matte finish that’s perfect for intricate logos or patterns, adding a sense of craftsmanship and exclusivity.</p>
                <p><strong>Embossing & Debossing:</strong> Add dimension and texture by raising (embossing) or recessing (debossing) your design elements into the glass. These tactile finishes enhance grip and invite touch, creating a memorable sensory experience and an unmistakable premium look.</p>
              </div>
              <p className="text-base text-brand-mauve leading-relaxed mt-auto">
                Each technique can be tailored and combined to create truly unique bottles that reflect your brand’s personality and stand out on the shelf. <a href="/portfolio" className="text-brand-rose font-semibold hover:underline">Browse our Portfolio</a> to see some of the results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
              <h3 className="text-xl font-semibold text-brand-plum mb-3">Electroplating</h3>
              <p className="text-base text-brand-mauve leading-relaxed mb-4">
                A sophisticated finishing technique that applies a thin, metallic coating onto the surface of fragrance glass, creating a striking and durable decorative effect. This process involves depositing metal layers—such as gold, silver, or chrome—through an electrochemical bath, resulting in a flawless, mirror-like surface that instantly elevates the bottle’s aesthetic.
              </p>
              <h4 className="text-md font-semibold text-brand-rose mt-3 mb-2">Benefits of Electroplating:</h4>
              <ul className="list-disc list-inside text-sm text-brand-mauve leading-relaxed space-y-1 mb-4">
                <li>Enhanced Elegance: The metallic sheen adds a premium, high-end look that captures light beautifully and gives your bottles a luxurious, reflective finish.</li>
                <li>Durability: Electroplated coatings are highly resistant to scratches, tarnishing, and corrosion, ensuring your fragrance bottles maintain their pristine appearance over time.</li>
                <li>Customization: Choose from a variety of metal tones and finishes—from bright chrome to warm gold—to perfectly complement your brand’s style and packaging design.</li>
                <li>Versatility: Electroplating can be applied to full surfaces or selective areas, allowing intricate patterns, logos, or accents that create unique, eye-catching details.</li>
              </ul>
              <p className="text-base text-brand-mauve leading-relaxed mt-auto">
                The result is a fragrance bottle that not only looks exquisite but also stands out for its quality and craftsmanship—making a lasting impression on customers and enhancing brand prestige.
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
              <button className="bg-brand-button text-white px-8 py-3 rounded-full hover:bg-brand-card transition-colors">
                Schedule a Consultation
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/2843ef942571776b77029faa8e5ccb0af285ec1d-3590x4787.webp"
                alt="Custom glass perfume bottle"
                className="rounded-2xl shadow-md w-full h-64 object-cover"
              />
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/7b8ab701663d19cd36d8fddeaa1dfb1e73d4a5ac-3590x4787.webp"
                alt="Luxury glass bottle detail"
                className="rounded-2xl shadow-md w-full h-64 object-cover mt-12"
              />
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/d4beeb28634e5c79b343e100faceafde1efb533c-1226x958.webp"
                alt="Decorative glass elements"
                className="rounded-2xl shadow-md w-full h-64 object-cover"
              />
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/d798aba6d18ef671fb30f31153ddbf3a3f79465b-803x850.png"
                alt="Frosted glass bottle"
                className="rounded-2xl shadow-md w-full h-64 object-cover mt-12"
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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-brand-mauve text-white px-8 py-3 rounded-full hover:bg-brand-rose transition-colors inline-block font-medium"
            >
              Request a Sample
            </a>
            <a
              href="#"
              className="bg-brand-mauve text-white px-8 py-3 rounded-full hover:bg-brand-rose transition-colors inline-block font-medium"
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
