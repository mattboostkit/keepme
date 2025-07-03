import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSanityQuery } from '../lib/useSanity';
import { urlFor } from '../lib/sanity';
import { useSEO } from '../hooks/useSEO';
import { fetchSanityData } from '../lib/sanityUtils';

interface PortfolioItem {
  _id: string;
  title: string;
  slug: { current: string };
  image: {
    _type: string;
    asset?: {
      _ref: string;
      _type: string;
    };
    _upload?: {
      createdAt: string;
      file: {
        name: string;
        type: string;
      };
      previewImage: string;
      progress: number;
      updatedAt: string;
    };
  };
  features: string[];
  description: string;
  displayOrder: number;
}

interface PortfolioPageData {
  heroTitle: string;
  heroDescription: string;
  heroBoxTitle: string;
  heroBoxDescription: string;
  heroBadgeNumber: string;
  heroBadgeText: string;
  brandsTitle: string;
  brandsDescription: string;
  seoTitle?: string;
  seoDescription?: string;
}

function PortfolioPage() {
  const [pageData, setPageData] = useState<PortfolioPageData | null>(null);
  const [pageLoading, setPageLoading] = useState(true);
  
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setPageLoading(true);
        const result = await fetchSanityData<PortfolioPageData>(
          '*[_type == "portfolioPage"][0]'
        );
        setPageData(result);
      } catch (error) {
        console.error('Error fetching portfolio page data:', error);
      } finally {
        setPageLoading(false);
      }
    };

    fetchPageData();
  }, []);
  
  // Use SEO hook with static defaults to prevent initialization errors
  const seoTitle = !pageLoading && pageData?.seoTitle ? pageData.seoTitle : 'Portfolio | KeepMe - Our Fragrance Manufacturing Projects';
  const seoDescription = !pageLoading && pageData?.seoDescription ? pageData.seoDescription : 'Explore our portfolio of successful fragrance manufacturing projects for prestigious brands including Roja Parfums, Ormonde Jayne, and other luxury fragrance houses.';
  
  useSEO({
    title: seoTitle,
    description: seoDescription
  });

  const { data: portfolioItems, loading, error } = useSanityQuery<PortfolioItem[]>(
  '*[_type == "portfolioItem"] | order(displayOrder asc)'
);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // Transform Sanity data to match the existing grid format
  const gridImages = portfolioItems
    ?.filter((item: PortfolioItem) => item.image && item.image.asset && !item.image._upload) // Filter out uploading images
    .map((item: PortfolioItem) => ({
      src: item.image ? urlFor(item.image).width(1200).height(800).url() : '',
      title: item.title || '',
      subtitle: item.features?.join(', ') || '',
      description: item.description || ''
    })) || [];

  const closeModal = useCallback(() => { setModalOpen(false); }, []);
  const prevImage = useCallback(() => { setModalIndex(idx => (idx === 0 ? gridImages.length - 1 : idx - 1)); }, [gridImages.length]);
  const nextImage = useCallback(() => { setModalIndex(idx => (idx === gridImages.length - 1 ? 0 : idx + 1)); }, [gridImages.length]);

  useEffect(() => {
    if (!modalOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setModalOpen(false);
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modalOpen, prevImage, nextImage]);

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
                {pageData?.heroTitle || 'Our Portfolio'}
              </h1>
              <p className="text-lg text-brand-mauve leading-relaxed mb-8">
                {pageData?.heroDescription || 'Discover more about our work. From bold concepts to commercially minded solutions, we deliver quality that fits your vision and your budget.'}
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-brand-pink-light p-2 rounded-full">
                    <ArrowRight className="h-6 w-6 text-brand-rose" />
                  </div>
                  <h3 className="text-xl text-brand-mauve">{pageData?.heroBoxTitle || 'Client Partnerships'}</h3>
                </div>
                <p className="text-base text-brand-mauve leading-relaxed">
                  {pageData?.heroBoxDescription || 'We partner with niche, innovative, creative brands. We\'re proud to work with some of the most distinguished names in the industry.'}
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
                    <p className="text-xl font-semibold">{pageData?.heroBadgeNumber || 'Over 100 Clients'}</p>
                    <p className="text-brand-mauve">{pageData?.heroBadgeText || 'Trusted Partnerships'}</p>
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
          <div className="flex flex-wrap">
            {(() => {
              // Shuffle images on each render for randomization
              const shuffledImages = [...gridImages].sort(() => Math.random() - 0.5);
              
              return shuffledImages.map((image, index) => {
                // Create varied sizes using percentages for seamless layout
                const sizes = [
                  'w-1/2 md:w-1/3 lg:w-1/4', // small
                  'w-1/2 md:w-1/3 lg:w-1/4', // small
                  'w-full md:w-2/3 lg:w-1/2', // large
                  'w-1/2 md:w-1/3 lg:w-1/4', // small
                  'w-1/2 md:w-1/3 lg:w-1/4', // small
                ];
                
                const sizeClass = sizes[index % sizes.length];
                
                return (
                  <div 
                    key={`${image.src}-${index}`}
                    className={`${sizeClass} relative group cursor-pointer overflow-hidden aspect-[3/2]`}
                    onClick={() => { 
                      const originalIndex = gridImages.findIndex(img => img.src === image.src);
                      setModalOpen(true); 
                      setModalIndex(originalIndex); 
                    }}
                  >
                    <img 
                      src={image.src} 
                      alt={image.title || 'Portfolio image'} 
                      className="object-cover w-full h-full group-hover:brightness-75 transition duration-200" 
                    />
                    {(image.title || image.subtitle) && (
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex flex-col items-center justify-center">
                        <div className="text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {image.title && <h3 className="text-lg md:text-xl font-bold text-white drop-shadow mb-1">{image.title}</h3>}
                          {image.subtitle && <p className="text-sm md:text-base text-white drop-shadow">{image.subtitle}</p>}
                        </div>
                      </div>
                    )}
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {modalOpen && gridImages[modalIndex] && (
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
              {gridImages[modalIndex].title && <h3 className="text-xl font-bold mb-1">{gridImages[modalIndex].title}</h3>}
              {gridImages[modalIndex].subtitle && <p className="text-base">{gridImages[modalIndex].subtitle}</p>}
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

      {/* Portfolio Brands Section */}
      <PortfolioBrandsSection />
    </div>
  );
}

// Portfolio Brands Component
function PortfolioBrandsSection() {
  const [pageData, setPageData] = useState<PortfolioPageData | null>(null);
  
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const result = await fetchSanityData<PortfolioPageData>(
          '*[_type == "portfolioPage"][0]'
        );
        setPageData(result);
      } catch (error) {
        console.error('Error fetching portfolio page data:', error);
      }
    };

    fetchPageData();
  }, []);
  
  interface PortfolioBrand {
    _id: string;
    name: string;
    slug: {
      current: string;
    };
    description?: string;
    features?: string[];
    image?: {
      _type: string;
      asset?: {
        _ref: string;
        _type: string;
      };
    };
    logo?: {
      _type: string;
      asset?: {
        _ref: string;
        _type: string;
      };
    };
    displayOrder: number;
  }

  const { data: portfolioBrands, loading, error } = useSanityQuery<PortfolioBrand[]>(
    `*[_type == "portfolioBrand"] | order(displayOrder asc) {
      _id,
      name,
      slug,
      description,
      features,
      image,
      logo
    }`
  );

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-plum mx-auto mb-4"></div>
          <p className="text-brand-mauve">Loading our clients...</p>
        </div>
      </section>
    );
  }

  if (error || !portfolioBrands || portfolioBrands.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-semibold text-brand-plum mb-4">
            {pageData?.brandsTitle || 'Our Clients'}
          </h2>
          <p className="text-lg text-brand-mauve max-w-3xl mx-auto">
            {pageData?.brandsDescription || 'Discover our partnerships with prestigious brands. We\'re proud to work with some of the most distinguished names in the industry.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioBrands.map((brand) => (
            <Link
              key={brand._id}
              to={`/portfolio/${brand.slug.current}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Brand Image */}
              <div className="aspect-[4/3] overflow-hidden">
                {brand.image ? (
                  <img
                    src={urlFor(brand.image).width(600).height(450).fit('crop').url()}
                    alt={`${brand.name} showcase`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image coming soon</span>
                  </div>
                )}
              </div>

              {/* Brand Content */}
              <div className="p-6">
                {/* Logo */}
                {brand.logo && (
                  <div className="mb-4 h-20 flex items-center">
                    <img
                      src={urlFor(brand.logo).width(200).height(100).fit('crop').url()}
                      alt={`${brand.name} logo`}
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
                )}

                {/* Brand Name */}
                <h3 className="text-xl font-semibold text-brand-plum mb-2 group-hover:text-brand-rose transition-colors">
                  {brand.name}
                </h3>

                {/* Description */}
                {brand.description && (
                  <p className="text-brand-mauve text-sm mb-4 line-clamp-3">
                    {brand.description}
                  </p>
                )}

                {/* Features */}
                {brand.features && brand.features.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {brand.features.slice(0, 3).map((feature: string, index: number) => (
                      <span
                        key={index}
                        className="bg-brand-pink-light text-brand-rose px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {brand.features.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        +{brand.features.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* Call to Action */}
                <div className="flex items-center text-brand-mauve group-hover:text-brand-plum transition-colors">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPage;