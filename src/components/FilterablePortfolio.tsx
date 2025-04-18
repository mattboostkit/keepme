import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define the portfolio item interface
export interface PortfolioItem {
  id: string;
  title: string;
  features: string[];
  imgSrc: string;
  alt: string;
  description?: string;
}

// Define the props for the FilterablePortfolio component
interface FilterablePortfolioProps {
  title?: string;
  subtitle?: string;
  items: PortfolioItem[];
  maxItems?: number;
  showFilters?: boolean;
  backgroundColor?: string;
}

const FilterablePortfolio: React.FC<FilterablePortfolioProps> = ({
  title = "Our Portfolio",
  subtitle = "Discover our partnerships with prestigious fragrance houses and luxury brands.",
  items,
  maxItems,
  showFilters = true,
  backgroundColor = "bg-gray-50"
}) => {
  // State for the selected feature filter
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  // Extract all unique features from the portfolio items
  const allFeatures = Array.from(
    new Set(
      items.flatMap(item => item.features)
    )
  ).sort();

  // Filter the items based on the selected feature
  const filteredItems = selectedFeature
    ? items.filter(item => item.features.includes(selectedFeature))
    : items;

  // Limit the number of items if maxItems is provided
  const displayedItems = maxItems ? filteredItems.slice(0, maxItems) : filteredItems;

  return (
    <section id="portfolio" className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            {title.split(' ').map((word, index, array) =>
              index === array.length - 1 ?
                <span key={index}>
                  <span className="text-[#f4cfd9]">{word}</span>
                </span> :
                <span key={index}>{word} </span>
            )}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
          </p>
        </div>

        {/* Feature Filters */}
        {showFilters && allFeatures.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              key="all"
              className={`px-5 py-2 rounded-full transition-colors font-medium ${
                selectedFeature === null
                  ? 'bg-[#f4cfd9] text-white'
                  : 'bg-white text-gray-800 hover:bg-[#f4cfd9] hover:text-white'
              }`}
              onClick={() => setSelectedFeature(null)}
            >
              All Products
            </button>
            {allFeatures.map((feature) => (
              <button
                key={feature}
                className={`px-5 py-2 rounded-full transition-colors font-medium ${
                  selectedFeature === feature
                    ? 'bg-[#f4cfd9] text-white'
                    : 'bg-white text-gray-800 hover:bg-[#f4cfd9] hover:text-white'
                }`}
                onClick={() => setSelectedFeature(feature)}
              >
                {feature}
              </button>
            ))}
          </div>
        )}

        {/* Portfolio Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.length > 0 ? (
            displayedItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow group overflow-hidden relative flex flex-col">
                {/* Make the entire card clickable with an overlay link */}
                <Link to={`/portfolio/${item.id}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View {item.title}</span>
                </Link>

                <div className="w-full h-80 overflow-hidden bg-gray-100">
                  {item.imgSrc ? (
                    <img
                      src={item.imgSrc}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        console.error(`Error loading image for ${item.title}:`, e);
                        // Set a fallback image or placeholder
                        e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-400">Image not available</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <Link to={`/portfolio/${item.id}`} className="relative z-20 block" onClick={(e) => e.stopPropagation()}>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#f4cfd9] transition-colors hover:text-[#f4cfd9] cursor-pointer">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">
                    {item.features.join(', ')}
                  </p>
                  <Link
                    to={`/portfolio/${item.id}`}
                    className="bg-[#f4cfd9] text-white px-5 py-2 rounded-full hover:bg-[#f4cfd9]/80 transition-colors inline-flex items-center relative z-20 mt-auto self-start"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
              <p className="text-gray-500">No portfolio items match the selected filter.</p>
            </div>
          )}
        </div>

        {/* View All Button - Only show on homepage when maxItems is set */}
        {maxItems && items.length > maxItems && (
          <div className="mt-12 text-center">
            <Link to="/portfolio" className="bg-[#f4cfd9] text-white px-6 py-3 rounded-full hover:bg-[#f4cfd9]/80 transition-colors inline-flex items-center">
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterablePortfolio;
