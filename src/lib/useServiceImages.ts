import { useSanityDocuments } from './useSanity';

// Define the ServiceImage interface
export interface ServiceImage {
  _id: string;
  title: string;
  image: any; // Sanity image reference
}

export function useServiceImages() {
  return useSanityDocuments<ServiceImage>('serviceImage');
}
