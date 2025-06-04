import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSanityQuery } from '../lib/useSanity';
import { urlFor } from '../lib/sanity';

interface PortfolioItem {
  _id: string;
  title: string;
  slug: { current: string };
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  features: string[];
  description: string;
  displayOrder: number;
}

function PortfolioPage() {
  const { data: portfolioItems, loading, error } = useSanityQuery<PortfolioItem[]>(
  '*[_type == "portfolioItem"] | order(displayOrder asc)'
);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // Transform Sanity data to match the existing grid format
  const gridImages = portfolioItems?.map((item: PortfolioItem) => ({
    src: item.image ? urlFor(item.image).width(800).height(600).url() : '',
    title: item.title,
    subtitle: item.features?.join(', ') || '',
    description: item.description
  })) || [];

  useEffect(() => {
    if (!modalOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setModalOpen(false);
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modalOpen, modalIndex]);

  function closeModal() { setModalOpen(false); }
  function prevImage() { setModalIndex(idx => (idx === 0 ? gridImages.length - 1 : idx - 1)); }
  function nextImage() { setModalIndex(idx => (idx === gridImages.length - 1 ? 0 : idx + 1)); }

  // Hero image (keep as before)
  const heroImage = gridImages[0]?.src;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-plum mx-auto mb-4"></div>
          <p className="text-brand-mauve">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading portfolio items</p>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!gridImages.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-brand-mauve mb-4">No portfolio items found</p>
          <p className="text-gray-600">Please add portfolio items in Sanity Studio</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-brand-peach">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-sans font-semibold text-brand-plum mb-6">
                Our Portfolio
              </h1>
              <p className="text-lg text-brand-mauve leading-relaxed mb-8">
                Discover more about our work. From bold concepts to commercially minded solutions, we deliver quality that fits your vision and your budget.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-brand-pink-light p-2 rounded-full">
                    <ArrowRight className="h-6 w-6 text-brand-rose" />
                  </div>
                  <h3 className="text-xl text-brand-mauve">Client Partnerships</h3>
                </div>
                <p className="text-base text-brand-mauve leading-relaxed">
                  We partner with niche, innovative, creative brands. We’re proud to work with some of the most distinguished names in the industry.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage || "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80"}
                alt="Luxury perfume bottles"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-brand-pink-light p-2 rounded-full">
                    <ArrowRight className="h-6 w-6 text-brand-rose" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Over 100 Clients</p>
                    <p className="text-brand-mauve">Trusted Partnerships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20 bg-white">
        <div className="w-full">
          <div className="grid grid-cols-4 gap-0 w-full">
            {(() => {
              const rows = [];
              for (let i = 0, row = 0; i < gridImages.length; row++) {
                // Odd row: [2,1,1] (first image col-span-2)
                if (row % 2 === 0) {
                  const first = gridImages[i];
                  const second = gridImages[i+1];
                  const third = gridImages[i+2];
                  if (first) rows.push(
                    <div key={first.src + '-row-' + i} className="col-span-2 relative group cursor-pointer overflow-hidden h-72" onClick={() => { setModalOpen(true); setModalIndex(i); }}>
                      <img src={first.src} alt={first.title} className="object-cover w-full h-full group-hover:brightness-75 transition duration-200" />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition flex flex-col items-center justify-center">
                        <div className="text-center">
                          <h3 className="text-lg md:text-xl font-bold text-white drop-shadow mb-1">{first.title}</h3>
                          <p className="text-sm md:text-base text-white drop-shadow">{first.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  );
                  if (second) rows.push(
                    <div key={second.src + '-row-' + (i+1)} className="relative group cursor-pointer overflow-hidden h-72" onClick={() => { setModalOpen(true); setModalIndex(i+1); }}>
                      <img src={second.src} alt={second.title} className="object-cover w-full h-full group-hover:brightness-75 transition duration-200" />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition flex flex-col items-center justify-center">
                        <div className="text-center">
                          <h3 className="text-lg md:text-xl font-bold text-white drop-shadow mb-1">{second.title}</h3>
                          <p className="text-sm md:text-base text-white drop-shadow">{second.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  );
                  if (third) rows.push(
                    <div key={third.src + '-row-' + (i+2)} className="relative group cursor-pointer overflow-hidden h-72" onClick={() => { setModalOpen(true); setModalIndex(i+2); }}>
                      <img src={third.src} alt={third.title} className="object-cover w-full h-full group-hover:brightness-75 transition duration-200" />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition flex flex-col items-center justify-center">
                        <div className="text-center">
                          <h3 className="text-lg md:text-xl font-bold text-white drop-shadow mb-1">{third.title}</h3>
                          <p className="text-sm md:text-base text-white drop-shadow">{third.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  );
                  i += 3;
                } else {
                  // Even row: [1,1,2] (third image col-span-2)
                  const first = gridImages[i];
                  const second = gridImages[i+1];
                  const third = gridImages[i+2];
                  if (first) rows.push(
                    <div key={first.src + '-row-' + i} className="relative group cursor-pointer overflow-hidden h-72" onClick={() => { setModalOpen(true); setModalIndex(i); }}>
                      <img src={first.src} alt={first.title} className="object-cover w-full h-full group-hover:brightness-75 transition duration-200" />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition flex flex-col items-center justify-center">
                        <div className="text-center">
                          <h3 className="text-lg md:text-xl font-bold text-white drop-shadow mb-1">{first.title}</h3>
                          <p className="text-sm md:text-base text-white drop-shadow">{first.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  );
                  if (second) rows.push(
                    <div key={second.src + '-row-' + (i+1)} className="relative group cursor-pointer overflow-hidden h-72" onClick={() => { setModalOpen(true); setModalIndex(i+1); }}>
                      <img src={second.src} alt={second.title} className="object-cover w-full h-full group-hover:brightness-75 transition duration-200" />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition flex flex-col items-center justify-center">
                        <div className="text-center">
                          <h3 className="text-lg md:text-xl font-bold text-white drop-shadow mb-1">{second.title}</h3>
                          <p className="text-sm md:text-base text-white drop-shadow">{second.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  );
                  if (third) rows.push(
                    <div key={third.src + '-row-' + (i+2)} className="col-span-2 relative group cursor-pointer overflow-hidden h-72" onClick={() => { setModalOpen(true); setModalIndex(i+2); }}>
                      <img src={third.src} alt={third.title} className="object-cover w-full h-full group-hover:brightness-75 transition duration-200" />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition flex flex-col items-center justify-center">
                        <div className="text-center">
                          <h3 className="text-lg md:text-xl font-bold text-white drop-shadow mb-1">{third.title}</h3>
                          <p className="text-sm md:text-base text-white drop-shadow">{third.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  );
                  i += 3;
                }
              }
              return rows;
            })()}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-all"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={gridImages[modalIndex].src}
              alt={gridImages[modalIndex].title}
              className="rounded-xl shadow-2xl object-contain max-h-[80vh] w-auto"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-bold mb-1">{gridImages[modalIndex].title}</h3>
              <p className="text-base">{gridImages[modalIndex].subtitle}</p>
              <div className="flex justify-between w-full mt-4">
                <button
                  className="text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full w-12 h-12 flex items-center justify-center"
                  onClick={prevImage}
                  aria-label="Previous"
                >
                  &#8592;
                </button>
                <button
                  className="text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full w-12 h-12 flex items-center justify-center"
                  onClick={nextImage}
                  aria-label="Next"
                >
                  &#8594;
                </button>
              </div>
              <div className="text-white mt-2">{modalIndex + 1} / {gridImages.length}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioPage;