import React from 'react';

interface PortfolioClientTemplateProps {
  clientName: string;
  description: string;
  features: string[];
  image: string;
  gallery?: string[];
  website?: string;
  logo?: string;
}

const PortfolioClientTemplate: React.FC<PortfolioClientTemplateProps> = ({
  clientName,
  description,
  features,
  image,
  gallery,
  website,
  logo,
}) => (
  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-7xl w-full mx-auto">
    <div className="grid grid-cols-2 grid-rows-2 gap-8 min-h-[500px] md:min-h-[600px] w-full max-w-7xl px-4 md:px-16 mx-auto">
      {/* Top-left: Main Image */}
      <div className="col-start-1 row-start-1 flex items-center justify-center bg-brand-rose/10 rounded-2xl overflow-hidden">
        <img src={image} alt={clientName} className="object-cover w-full h-full max-h-72 rounded-2xl shadow-xl" />
      </div>
      {/* Top-right: Dummy Text */}
      <div className="col-start-2 row-start-1 flex items-center justify-center bg-brand-plum/10 rounded-2xl">
        <span className="text-xl text-brand-plum font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
      {/* Bottom-left: Dummy Text */}
      <div className="col-start-1 row-start-2 flex items-center justify-center bg-brand-mauve/10 rounded-2xl">
        <span className="text-lg text-brand-plum font-serif">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
      </div>
      {/* Bottom-right: Client Logo */}
      <div className="col-start-2 row-start-2 flex items-center justify-center bg-white rounded-2xl shadow-md">
        {logo ? (
          <img src={logo} alt={`${clientName} logo`} className="object-contain max-w-[220px] max-h-[120px]" />
        ) : (
          <span className="text-brand-plum">No logo</span>
        )}
      </div>
    </div>

    {/* Added sections for description, features, website, and gallery */}
    <div className="mt-12 px-4 md:px-16 mx-auto">
      {description && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-brand-plum mb-3">Description</h3>
          <p className="text-brand-mauve leading-relaxed">{description}</p>
        </div>
      )}

      {features && features.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-brand-plum mb-3">Features</h3>
          <ul className="list-disc list-inside text-brand-mauve space-y-1">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {website && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-brand-plum mb-3">Website</h3>
          <a href={website} target="_blank" rel="noopener noreferrer" className="text-brand-mauve hover:underline">
            {website}
          </a>
        </div>
      )}

      {gallery && gallery.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-brand-plum mb-3">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((imgSrc, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden aspect-[3/2]">
                <img src={imgSrc} alt={`${clientName} gallery image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default PortfolioClientTemplate;
