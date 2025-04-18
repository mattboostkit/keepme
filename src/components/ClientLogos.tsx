import React, { useState, useEffect } from 'react';
import { fetchSanityData } from '../lib/sanityUtils';
import { urlFor } from '../lib/sanity';

// Define the Logo interface
interface Logo {
  _id: string;
  name: string;
  image: any; // Sanity image reference
  url?: string;
  displayOrder: number;
}

// Define the props for the ClientLogos component
interface ClientLogosProps {
  title?: string;
  useSanity?: boolean;
  logos?: Logo[];
  scrolling?: boolean;
  backgroundColor?: string;
}

const ClientLogos: React.FC<ClientLogosProps> = ({
  title = "Trusted by Leading Brands",
  useSanity = true,
  logos: propLogos,
  scrolling = true,
  backgroundColor = "bg-white"
}) => {
  const [logos, setLogos] = useState<Logo[]>(propLogos || []);
  const [loading, setLoading] = useState(useSanity);

  // Fetch logos from Sanity if useSanity is true
  useEffect(() => {
    if (useSanity) {
      const fetchLogos = async () => {
        try {
          setLoading(true);
          const result = await fetchSanityData<Logo[]>(
            '*[_type == "logo"] | order(displayOrder asc)'
          );
          setLogos(result);
        } catch (error) {
          console.error('Error fetching logos:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchLogos();
    }
  }, [useSanity]);

  if (loading) {
    return (
      <section className={`py-12 ${backgroundColor}`}>
        <div className="container mx-auto px-6">
          {title && (
            <h2 className="text-2xl font-serif font-bold text-center mb-10">{title}</h2>
          )}
          <div className="flex flex-wrap justify-center">
            {Array(6).fill(0).map((_, index) => (
              <div key={index} className="w-40 h-20 mx-8 mb-8 bg-gray-200 animate-pulse rounded"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!logos || !logos.length) {
    // Return a minimal section with just the title if no logos
    return (
      <section className={`py-12 ${backgroundColor}`}>
        <div className="container mx-auto px-6">
          {title && (
            <h2 className="text-2xl font-serif font-bold text-center mb-10">{title}</h2>
          )}
          <div className="text-center py-8">
            <p className="text-gray-500">No client logos available.</p>
          </div>
        </div>
      </section>
    );
  }

  if (scrolling) {
    return (
      <section className={`py-12 ${backgroundColor}`}>
        <div className="container mx-auto px-6">
          {title && (
            <h2 className="text-2xl font-serif font-bold text-center mb-10">{title}</h2>
          )}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {/* Logos duplicated for seamless scroll effect */}
              {[...Array(2)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  {logos.map((logo) => (
                    <div key={`${setIndex}-${logo._id}`} className="flex-shrink-0 w-40 mx-8 flex items-center justify-center h-20">
                      {logo.url ? (
                        <a href={logo.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                          <img
                            src={urlFor(logo.image).width(160).height(80).url()}
                            alt={logo.name}
                            className="max-h-20 max-w-full object-contain"
                          />
                        </a>
                      ) : (
                        <img
                          src={urlFor(logo.image).width(160).height(80).url()}
                          alt={logo.name}
                          className="max-h-20 max-w-full object-contain"
                        />
                      )}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Static display (non-scrolling)
  return (
    <section className={`py-12 ${backgroundColor}`}>
      <div className="container mx-auto px-6">
        {title && (
          <h2 className="text-2xl font-serif font-bold text-center mb-10">{title}</h2>
        )}
        <div className="flex flex-wrap justify-center">
          {logos.map((logo) => (
            <div key={logo._id} className="w-40 mx-8 mb-8 flex items-center justify-center h-20">
              {logo.url ? (
                <a href={logo.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img
                    src={urlFor(logo.image).width(160).height(80).url()}
                    alt={logo.name}
                    className="max-h-20 max-w-full object-contain"
                  />
                </a>
              ) : (
                <img
                  src={urlFor(logo.image).width(160).height(80).url()}
                  alt={logo.name}
                  className="max-h-20 max-w-full object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
