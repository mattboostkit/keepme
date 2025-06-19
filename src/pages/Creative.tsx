import { useSEO } from '../hooks/useSEO';
import { useJsonLd } from '../hooks/useJsonLd';

function Creative() {
  useSEO({
    title: 'KeepMe Creative | Premium Design Studio for Fragrance Brands',
    description: 'KeepMe Creative offers premium, high-impact creative output for fragrance brands. Our UK-based Design Studio provides bespoke design and development across all aspects of product and packaging presentation.',
    canonical: window.location.href,
  });
  useJsonLd('creative-breadcrumb', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://keepme.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Creative' }
    ]
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-brand-peach">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-sans font-semibold text-brand-plum mb-6">
                KeepMe <span className="text-brand-rose">Creative</span>
              </h1>
              <p className="text-lg text-brand-mauve leading-relaxed mb-12">
                This offers both new and existing clients a dedicated solution for premium, high-impact creative output. Delivered through our UK-based Design Studio, this service is designed to support brands with bespoke design and development across all aspects of product and packaging presentation.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">Our <span className="text-brand-rose">Approach</span></h2>
                <p className="text-lg text-brand-mauve leading-relaxed">
                  Every project is shaped around your specific brief, objectives, and timelines. Our paid model means dedicated resources and faster turnaround compared to traditional agencies. From first sketch to final artwork, our approach combines creativity with commercial insight, helping you move from concept to shelf efficiently.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80"
                alt="KeepMe Creative design studio"
                className="rounded-2xl shadow-xl w-full h-[300px] md:h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg">
                <div>
                  <p className="text-xl font-semibold">UK-Based</p>
                  <p className="text-gray-600">Design Studio</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-lg hidden md:block">
                <div>
                  <p className="text-xl font-semibold">Premium</p>
                  <p className="text-gray-600">Creative Output</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Design Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">Logo <span className="text-brand-rose">Design</span></h2>
              <p className="text-lg text-brand-mauve leading-relaxed mb-6">
                Your logo is more than a mark—it's the first impression of your fragrance brand. At KeepMe Creative, we craft logos that capture the essence of your scent, your story, and your audience.
              </p>
              <p className="text-lg text-brand-mauve leading-relaxed mb-8">
                Whether you're launching a new fragrance house or refreshing an established brand, our UK Design Studio delivers:
              </p>
              <ul className="space-y-3 text-lg text-brand-mauve leading-relaxed">
                <li className="flex items-start">
                  <span className="text-brand-rose mr-3">•</span>
                  Sophisticated, fragrance-focused design
                </li>
                <li className="flex items-start">
                  <span className="text-brand-rose mr-3">•</span>
                  Fully bespoke logos
                </li>
                <li className="flex items-start">
                  <span className="text-brand-rose mr-3">•</span>
                  Aligned typography, colour, and brand feel
                </li>
                <li className="flex items-start">
                  <span className="text-brand-rose mr-3">•</span>
                  Specialist design from fragrance experts
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80"
                alt="Logo design process"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Guidelines Section */}
      <section className="py-20 bg-brand-pink-light">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80"
                alt="Brand guidelines and identity"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">Brand <span className="text-brand-rose">Guidelines</span></h2>
              <p className="text-lg text-brand-mauve leading-relaxed mb-6">
                Cohesive, professional brand identity systems to ensure consistency across all platforms. Your brand deserves more than a great logo—it needs a visual system that speaks with clarity and confidence across every touchpoint.
              </p>
              <p className="text-lg text-brand-mauve leading-relaxed mb-8">
                At KeepMe Creative, we develop cohesive, professional brand guidelines tailored specifically for fragrance and lifestyle brands, including:
              </p>
              <ul className="space-y-3 text-lg text-brand-mauve leading-relaxed">
                <li className="flex items-start">
                  <span className="text-brand-rose mr-3">•</span>
                  <strong>Typography systems</strong> – Elegant, legible, and on-brand
                </li>
                <li className="flex items-start">
                  <span className="text-brand-rose mr-3">•</span>
                  <strong>Colour palettes</strong> – Sophisticated combinations that reflect your identity
                </li>
                <li className="flex items-start">
                  <span className="text-brand-rose mr-3">•</span>
                  <strong>Logo usage rules</strong> – Scalable, versatile, and crystal-clear
                </li>
              </ul>
              <p className="text-lg text-brand-mauve leading-relaxed mt-6">
                We ensure your brand looks and feels seamless everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary and Secondary Component Visuals Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">Primary and Secondary <span className="text-brand-rose">Component Visuals</span></h2>
            <p className="text-lg text-brand-mauve leading-relaxed">
              We help fragrance and lifestyle brands turn concepts into stunning visual realities, ready for internal approval, and final production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Bottle Visuals */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-brand-plum">Bottle Visuals</h3>
              <p className="text-lg text-brand-mauve leading-relaxed">
                3D renderings for mock-ups and presentations.
              </p>
            </div>
            {/* Technical Drawings */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-brand-plum">Technical Drawings</h3>
              <p className="text-lg text-brand-mauve leading-relaxed">
                Precise, production-ready specs for bottles, caps, and components—ensuring a smooth handover to our production team.
              </p>
            </div>
            {/* Packaging Visuals */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-brand-plum">Packaging Visuals</h3>
              <p className="text-lg text-brand-mauve leading-relaxed">
                Full creative support for primary and secondary packaging, from initial concept to final artwork.
              </p>
            </div>
            {/* 3D Samples & Prototypes */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-brand-plum">3D Samples & Prototypes</h3>
              <p className="text-lg text-brand-mauve leading-relaxed">
                Physical or digital prototypes to evaluate shape, size, finish, and feel before committing to production.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-brand-mauve leading-relaxed max-w-3xl mx-auto">
              Whether you're designing a signature bottle or refining a luxury gift box, we give your product the visual clarity and technical precision it needs to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-brand-pink-light">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Ready to Start Your <span className="text-brand-mauve">Creative Journey?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">Get in touch to discuss your creative project requirements</p>
            <a href="/contact" className="inline-block px-8 py-3 bg-brand-mauve text-white font-bold rounded-full hover:bg-brand-rose transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Creative; 