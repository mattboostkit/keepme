import { fetchSanityData } from './sanityUtils';
import { PortfolioItem } from '../components/FilterablePortfolio';

// Interface for Sanity portfolio brand
interface SanityPortfolioBrand {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      _ref: string;
    };
  };
  features: string[];
  description: string;
  displayOrder: number;
}

// Function to convert Sanity portfolio brands to the format expected by FilterablePortfolio
export const convertSanityPortfolioBrands = (brands: SanityPortfolioBrand[]): PortfolioItem[] => {
  return brands.map(brand => {
    // Create a direct CDN URL for the image
    const imageUrl = brand.image && brand.image.asset && brand.image.asset._ref
      ? (() => {
          const ref = brand.image.asset._ref;
          const [, id, dimensions, extension] = ref.split('-');
          return `https://cdn.sanity.io/images/tyzs5imn/production/${id}-${dimensions}.${extension}`;
        })()
      : '';


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
    const convertedBrands = convertSanityPortfolioBrands(sanityBrands);
    return convertedBrands;
  } catch (error) {
    console.error('Error fetching portfolio brands:', error);
    return [];
  }
};

// Function to fetch a specific portfolio brand by name
export const fetchPortfolioBrandByName = async (name: string): Promise<SanityPortfolioBrand | null> => {
  try {
    // Convert the name to a format that matches how we'd create a slug
    const normalizedName = name.toLowerCase().replace(/[^a-z0-9]/g, '-');

    // Query for the brand with a matching slug
    const brands = await fetchSanityData<SanityPortfolioBrand[]>(
      `*[_type == "portfolioBrand" && slug.current == "${normalizedName}"][0]`
    );

    if (brands) {
      return brands;
    }

    // If no match by slug, try matching by name (case insensitive)
    const brandsByName = await fetchSanityData<SanityPortfolioBrand[]>(
      `*[_type == "portfolioBrand" && lower(name) == "${name.toLowerCase()}"][0]`
    );

    return brandsByName || null;
  } catch (error) {
    console.error(`Error fetching portfolio brand by name ${name}:`, error);
    return null;
  }
};

// Function to get the Sanity image URL for a brand
export const getPortfolioBrandImageUrl = (brand: SanityPortfolioBrand | null): string => {
  if (!brand || !brand.image || !brand.image.asset || !brand.image.asset._ref) {
    return '';
  }

  // Extract the image ID from the reference
  const ref = brand.image.asset._ref;
  const [, id, dimensions, extension] = ref.split('-');

  // Construct the CDN URL directly
  return `https://cdn.sanity.io/images/tyzs5imn/production/${id}-${dimensions}.${extension}`;
};
