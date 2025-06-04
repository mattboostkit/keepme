import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const galleryImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800"
];

function useGalleryModal(galleryImages: string[]) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    if (!modalOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setModalOpen(false);
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line
  }, [modalOpen, modalIndex]);

  function closeModal() {
    setModalOpen(false);
  }
  function prevImage() {
    setModalIndex(idx => (idx === 0 ? galleryImages.length - 1 : idx - 1));
  }
  function nextImage() {
    setModalIndex(idx => (idx === galleryImages.length - 1 ? 0 : idx + 1));
  }
  return { modalOpen, setModalOpen, modalIndex, setModalIndex, closeModal, prevImage, nextImage };
}

export default function RojaParfumsPage() {
  const { modalOpen, setModalOpen, modalIndex, setModalIndex, closeModal, prevImage, nextImage } = useGalleryModal(galleryImages);

  return (
    <div className="pt-24">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left: Text */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-plum mb-6">Roja Parfums</h1>
              <p className="text-lg text-brand-mauve mb-8">
                We are honoured to manufacture and decorate the glass bottles for Roja Parfums, one of the world’s most prestigious fragrance houses. Known for its uncompromising luxury, British heritage, and olfactory artistry, Roja Parfums sets the global standard for excellence in perfumery. We also develop their vials and ceramic candle collection.
              </p>
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3">Products & Services:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Fragrance Glass', 'Vials', 'Candle Ceramics', 'Secondary Packaging'].map((feature, idx: number) => (
                    <span
                      key={idx}
                      className="bg-[#f4cfd9] text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="https://rojaparfums.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-6 py-2 bg-brand-mauve text-white font-bold rounded-full hover:bg-brand-rose transition-colors mb-8"
              >
                Visit Website
              </a>
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
            {/* Right: Image & Logo */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/7d3fd66af3a5706fbe2e183f22e5700dc1b96086-1920x950.webp"
                alt="Roja Parfums Bottle"
                className="rounded-2xl shadow-xl w-full object-cover mb-6"
              />
              <img
                src="https://cdn.sanity.io/images/tyzs5imn/production/1856a37e68a7c7f15ace41cb866aad4d931b7d46-320x160.webp"
                alt="Roja Parfums Logo"
                className="h-20 w-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-brand-plum mb-6 text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((img, idx: number) => (
              <img
                key={img}
                src={img + '&fit=crop'}
                alt={`Gallery ${idx + 1}`}
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
      {/* Lightbox Modal */}
      {modalOpen && (
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
              src={galleryImages[modalIndex] + '&fit=crop'}
              alt={`Gallery Large ${modalIndex + 1}`}
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
}
