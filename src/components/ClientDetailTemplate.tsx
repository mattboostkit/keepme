import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { urlFor } from '@/lib/sanity';
import { useSanityQuery } from '@/lib/useSanity';
import { useSEO } from '@/hooks/useSEO';

interface ClientDetailTemplateProps {
  slug: string;
}

interface GalleryImage {
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
  _upload?: boolean;
}

// Hook for gallery modal functionality
function useGalleryModal(galleryImages: GalleryImage[]) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const prevImage = useCallback(() => {
    setModalIndex(idx => (idx === 0 ? galleryImages.length - 1 : idx - 1));
  }, [galleryImages.length]);
  
  const nextImage = useCallback(() => {
    setModalIndex(idx => (idx === galleryImages.length - 1 ? 0 : idx + 1));
  }, [galleryImages.length]);

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

  function closeModal() {
    setModalOpen(false);
  }
  return { modalOpen, setModalOpen, modalIndex, setModalIndex, closeModal, prevImage, nextImage };
}

const ClientDetailTemplate: React.FC<ClientDetailTemplateProps> = ({
  slug
}) => {
  // Fetch portfolio brand data from Sanity
interface PortfolioBrand {
  _id: string;
  name: string;
  description?: string;
  features?: string[];
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  logo?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  website?: string;
  gallery?: GalleryImage[];
}

  const { data: portfolioBrand, loading, error } = useSanityQuery<PortfolioBrand>(
    `*[_type == "portfolioBrand" && slug.current == "${slug}"][0] {
      _id,
      name,
      description,
      features,
      image,
      logo,
      website,
      gallery[]
    }`
  );

  const galleryImages = portfolioBrand?.gallery?.filter((item) => item.asset && !item._upload) || [];
  const { modalOpen, setModalOpen, modalIndex, setModalIndex, closeModal, prevImage, nextImage } = useGalleryModal(galleryImages);

  // Set dynamic SEO
  useSEO({
    title: portfolioBrand ? `${portfolioBrand.name} Case Study | KeepMe Portfolio` : 'Loading...',
    description: portfolioBrand?.description || `Discover how KeepMe partners with ${portfolioBrand?.name} for fragrance manufacturing and luxury packaging solutions.`,
    image: portfolioBrand?.image ? urlFor(portfolioBrand.image).width(1200).height(630).url() : undefined
  });

  if (loading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-plum mx-auto mb-4"></div>
          <p className="text-brand-mauve">Loading client details...</p>
        </div>
      </div>
    );
  }

  if (error || !portfolioBrand) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading client details</p>
          <Link
            to="/portfolio"
            className="inline-flex items-center text-brand-mauve hover:text-brand-plum transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-plum mb-6">
                {portfolioBrand.name}
              </h1>
              {portfolioBrand.description && (
                <p className="text-lg text-brand-mauve mb-8">
                  {portfolioBrand.description}
                </p>
              )}
              {portfolioBrand.features && portfolioBrand.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">Products & Services:</h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolioBrand.features.map((feature: string, index: number) => (
                      <span
                        key={index}
                        className="bg-[#f4cfd9] text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {portfolioBrand.website && (
                <a
                  href={portfolioBrand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-6 py-2 bg-brand-mauve text-white font-bold rounded-full hover:bg-brand-rose transition-colors mb-8"
                >
                  Visit Website
                </a>
              )}
              <div className="mt-8">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center text-black hover:text-gray-700 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Portfolio
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center">
              {portfolioBrand.image ? (
                <img
                  src={urlFor(portfolioBrand.image).width(800).height(600).url()}
                  alt={`${portfolioBrand.name} Product`}
                  className="rounded-2xl shadow-xl w-full object-cover mb-6"
                />
              ) : (
                <div className="w-full h-80 bg-gray-200 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-gray-400">Image coming soon</span>
                </div>
              )}
              {portfolioBrand.logo && (
                <img
                  src={urlFor(portfolioBrand.logo).width(320).height(160).url()}
                  alt={`${portfolioBrand.name} Logo`}
                  className="h-20 w-auto"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-brand-plum mb-6 text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {galleryImages.map((item, idx) => (
                <img
                  key={`gallery-${idx}`}
                  src={urlFor(item).width(400).height(300).fit('crop').url()}
                  alt={`${portfolioBrand.name} Gallery ${idx + 1}`}
                  className="rounded-xl shadow-md object-cover w-full h-48 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    setModalOpen(true);
                    setModalIndex(idx);
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Lightbox Modal */}
      {modalOpen && galleryImages[modalIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-all"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={urlFor(galleryImages[modalIndex]).width(1200).height(800).fit('crop').url()}
              alt={`${portfolioBrand.name} Gallery Large ${modalIndex + 1}`}
              className="rounded-xl shadow-2xl object-contain max-h-[80vh] w-auto"
            />
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
            <div className="text-white mt-2">{modalIndex + 1} / {galleryImages.length}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientDetailTemplate;
