import { useSanityDocuments } from './useSanity';

// Define the ServiceImage interface
export interface ServiceImage {
  _id: string;
  title: string;
  image: {
    asset: {
      _ref: string;
    };
  }; // Sanity image reference
}

export function useServiceImages() {
  return useSanityDocuments<ServiceImage>('serviceImage');
}
