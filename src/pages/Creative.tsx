import { useSEO } from '../hooks/useSEO';
import { useJsonLd } from '../hooks/useJsonLd';
import { useState, useEffect } from 'react';
import { fetchSanityData } from '../lib/sanityUtils';
import { urlFor } from '../lib/sanity';
import FlickityCarousel from '../components/FlickityCarousel';
import '../components/FlickityCarousel.css';

interface ComponentVisual {
  _id: string;
  title: string;
  image: string;
  description: string;
  displayOrder: number;
}

function Creative() {
  const [componentVisuals, setComponentVisuals] = useState<ComponentVisual[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // For now, using dummy data until Sanity content is populated
        const dummyVisuals: ComponentVisual[] = [
          {
            _id: '1',
            title: 'Bottle Visuals',
            image: 'https://images.unsplash.com/photo-1594035910369-67c4c35ba3a1?auto=format&fit=crop&q=80&w=600&h=400',
            description: '3D renderings for mock-ups and presentations',
            displayOrder: 1
          },
          {
            _id: '2',
            title: 'Stock Bottle Selection',
            image: 'https://images.unsplash.com/photo-1619994121345-b61cd610c5a6?auto=format&fit=crop&q=80&w=600&h=400',
            description: 'Choose from our extensive range of stock bottles for your fragrance',
            displayOrder: 2
          },
          {
            _id: '3',
            title: 'Technical Design',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600&h=400',
            description: 'Precise, production-ready specs for bottles, caps, and components',
            displayOrder: 3
          },
          {
            _id: '4',
            title: 'Packaging Visuals',
            image: 'https://images.unsplash.com/photo-1594913615593-5dca0aaf4593?auto=format&fit=crop&q=80&w=600&h=400',
            description: 'Full creative support for primary and secondary packaging',
            displayOrder: 4
          },
          {
            _id: '5',
            title: 'Artwork Creation',
            image: 'https://images.unsplash.com/photo-1609207825181-52d3214556dd?auto=format&fit=crop&q=80&w=600&h=400',
            description: 'Professional artwork design from initial concept to final print-ready files',
            displayOrder: 5
          },
          {
            _id: '6',
            title: 'NPD Visuals',
            image: 'https://images.unsplash.com/photo-1586104237516-6b7b5a2e7e89?auto=format&fit=crop&q=80&w=600&h=400',
            description: 'New Product Development visuals to bring your ideas to life',
            displayOrder: 6
          }
        ];

        // Uncomment when ready to fetch from Sanity
        // const visualsResult = await fetchSanityData<ComponentVisual[]>(
        //   '*[_type == "componentVisual"] | order(displayOrder asc)'
        // );
        // setComponentVisuals(visualsResult);

        setComponentVisuals(dummyVisuals);
      } catch (error) {
        console.error('Error fetching component visuals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useSEO({
    title: 'KeepMe Creative | Premium Design Studio for Fragrance Brands',
    description: 'KeepMe Creative offers premium, high-impact creative output for fragrance brands. Our UK-based Design Studio provides bespoke design and development across all aspects of product and packaging presentation.',
    canonical: 'https://keepme.co.uk/creative',
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

      {/* Primary and Secondary Component Visuals Section */}
      <section className="py-20 bg-white services-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-semibold text-brand-plum mb-4">
              Primary and Secondary <span className="text-brand-rose">Component Visuals</span>
            </h2>
            <p className="text-lg text-brand-mauve leading-relaxed max-w-2xl mx-auto">
              We help fragrance and lifestyle brands turn concepts into stunning visual realities, ready for internal approval, and final production.
            </p>
          </div>

          {loading ? (
            <div className="text-center">Loading visuals...</div>
          ) : (
            <FlickityCarousel
              className="services-carousel"
              options={{
                freeScroll: true,
                contain: true,
                prevNextButtons: true,
                pageDots: false,
                cellAlign: 'left',
                groupCells: true,
                draggable: true,
                friction: 0.2,
                selectedAttraction: 0.01,
                adaptiveHeight: false,
                watchCSS: false
              }}
            >
              {componentVisuals.map((visual) => (
                <div key={visual._id} className="px-3 pb-4">
                  <div className="text-brand-mauve hover:text-brand-rose font-medium flex flex-col group">
                    <div className="w-full h-80 overflow-hidden mb-4 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 flex-shrink-0">
                      <img
                        src={visual.image}
                        alt={visual.title}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-sans font-normal mb-2 group-hover:text-brand-plum transition-colors">{visual.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{visual.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </FlickityCarousel>
          )}
        </div>
      </section>

      {/* Logo Design Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">Logo <span className="text-brand-rose">Design</span></h2>
              <p className="text-lg text-brand-mauve leading-relaxed mb-6">
                Your logo is more than a mark, it's the first impression of your fragrance brand. At KeepMe Creative, we craft logos that capture the essence of your scent, your story, and your audience.
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
                Your brand deserves more than a great logo—it needs a visual system that speaks with clarity and confidence across every touchpoint.
              </p>
              <p className="text-lg text-brand-mauve leading-relaxed mb-8">
                At KeepMe Creative, we develop cohesive, professional brand guidelines tailored specifically for fragrance and lifestyle brands, including:
              </p>
              <ul className="space-y-3 text-lg text-brand-mauve leading-relaxed">
                <li className="flex items-start">
                  <span className="text-brand-rose mr-3">•</span>
                  <strong>Typography</strong> – Elegant, legible, and on-brand
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