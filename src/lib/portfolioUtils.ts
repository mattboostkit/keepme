import { fetchSanityData } from './sanityUtils';
import { urlFor } from './sanity';
import { PortfolioItem } from '../components/FilterablePortfolio';

// Interface for Sanity portfolio brand
interface SanityPortfolioBrand {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image: any;
  features: string[];
  description: string;
  displayOrder: number;
}

// Function to convert Sanity portfolio brands to the format expected by FilterablePortfolio
export const convertSanityPortfolioBrands = (brands: SanityPortfolioBrand[]): PortfolioItem[] => {
  return brands.map(brand => {
    // Create a direct CDN URL for the image
    let imageUrl = '';

    if (brand.image && brand.image.asset && brand.image.asset._ref) {
      // Extract the image ID from the reference
      const ref = brand.image.asset._ref;
      const [, id, dimensions, extension] = ref.split('-');

      // Construct the CDN URL directly
      imageUrl = `https://cdn.sanity.io/images/tyzs5imn/production/${id}-${dimensions}.${extension}`;
    }

    // Create a URL-friendly ID from the brand name
    const urlFriendlyId = brand.name.toLowerCase().replace(/[^a-z0-9]/g, '-');

    return {
      id: urlFriendlyId, // Use URL-friendly ID that matches our routes
      _id: brand._id, // Keep the original ID for reference
      title: brand.name,
      features: brand.features,
      imgSrc: imageUrl,
      alt: `${brand.name} portfolio image`,
      description: brand.description
    };
  });
};

// Function to fetch portfolio brands from Sanity
export const fetchPortfolioBrands = async (): Promise<PortfolioItem[]> => {
  try {
    const sanityBrands = await fetchSanityData<SanityPortfolioBrand[]>(
      '*[_type == "portfolioBrand"] | order(displayOrder asc)'
    );
    console.log('Fetched portfolio brands from Sanity:', sanityBrands);
    const convertedBrands = convertSanityPortfolioBrands(sanityBrands);
    console.log('Converted portfolio brands:', convertedBrands);
    return convertedBrands;
  } catch (error) {
    console.error('Error fetching portfolio brands:', error);
    return [];
  }
};
