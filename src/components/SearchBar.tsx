import React, { useState } from 'react';
import { client } from '../lib/sanity';
import { Link } from 'react-router-dom';

interface SearchResult {
  _id: string;
  _type: string;
  title?: string;
  slug?: { current: string };
  mainImage?: { asset: { _ref: string } };
  excerpt?: string;
  description?: string;
}

const typeLabels: Record<string, string> = {
  post: 'Blog Post',
  portfolioItem: 'Portfolio Item',
  portfolioBrand: 'Portfolio Brand',
  servicePage: 'Service Page',
  serviceImage: 'Service',
  serviceSection: 'Service Section',
  tool: 'Tool',
  gallery: 'Gallery',
  creativePage: 'Creative Page',
  aboutPage: 'About Page',
  homePage: 'Home Page',
  glassPage: 'Glass Page',
  faqItem: 'FAQ',
  // Add more as needed
};

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
    if (q.length < 2) {
      setResults([]);
      setShowDropdown(false);
      return;
    }
    setLoading(true);
    setShowDropdown(true);
    // Enhanced search across all major types, including slug and case-insensitive
    const data = await client.fetch(
      `*[_type in ["post", "portfolioItem", "portfolioBrand", "servicePage", "serviceImage", "serviceSection", "tool", "gallery", "creativePage", "aboutPage", "homePage", "glassPage", "faqItem"] && (
        title match $q ||
        excerpt match $q ||
        description match $q ||
        pt::text(description) match $q ||
        slug.current match $q ||
        title match $qLower ||
        excerpt match $qLower ||
        description match $qLower ||
        pt::text(description) match $qLower ||
        slug.current match $qLower
      )]{
        _id, _type, title, slug, mainImage, excerpt, description
      }[0...10]`,
      { q: `*${q}*`, qLower: `*${q.toLowerCase()}*` }
    );
    setResults(data);
    setLoading(false);
  };

  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        onFocus={() => query.length > 1 && setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
        className="border border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-brand-mauve"
      />
      {showDropdown && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {loading ? (
            <div className="p-4 text-center text-gray-500">Searching...</div>
          ) : results.length > 0 ? (
            <ul>
              {results.map((item) => (
                <li key={item._id} className="border-b last:border-b-0 border-gray-100 hover:bg-gray-50">
                  <Link
                    to={
                      item._type === 'post'
                        ? `/post/${item.slug?.current}`
                        : item._type === 'portfolioItem'
                        ? `/portfolio/${item.slug?.current}`
                        : item._type === 'portfolioBrand'
                        ? `/portfolio/${item.slug?.current}`
                        : item._type === 'servicePage' || item._type === 'serviceImage' || item._type === 'serviceSection'
                        ? `/services/${item.slug?.current}`
                        : item._type === 'tool'
                        ? `/tools/${item.slug?.current}`
                        : item._type === 'gallery'
                        ? `/gallery/${item.slug?.current}`
                        : item._type === 'creativePage'
                        ? `/creative`
                        : item._type === 'aboutPage'
                        ? `/about`
                        : item._type === 'homePage'
                        ? `/`
                        : item._type === 'glassPage'
                        ? `/glass`
                        : item._type === 'faqItem'
                        ? `/faq`
                        : '#'
                    }
                    className="flex items-center px-4 py-3"
                  >
                    {item.mainImage ? (
                      <img
                        src={`https://cdn.sanity.io/images/tyzs5imn/production/${item.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-webp', '.webp').replace('-png', '.png')}`}
                        alt={item.title || ''}
                        className="w-10 h-10 object-cover rounded mr-3 flex-shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gray-200 rounded mr-3 flex-shrink-0" />
                    )}
                    <div>
                      <div className="font-medium text-brand-plum">{item.title}</div>
                      <div className="text-xs text-gray-500">{typeLabels[item._type] || item._type}</div>
                      <div className="text-xs text-gray-400 truncate max-w-xs">
                        {item.excerpt || item.description || ''}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-gray-400">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar; 