// Script to populate Component Visuals in Sanity
// Run with: node scripts/populate-component-visuals.js

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skmCR1sOjgIi7CJPDbyhCsQNudL5867EUCCu40sfORiHRIHoaWhVoEMVh8tdvLeMBOYlUhO7620lrRm9Cr2S4W2QznUFvBtgISsKDpXbbuQSPfkRqAnHYz11NYMZnvGEfdiMFNOSyXDUfJNR60qR2J2ji1mvS18QAMWZIuNINYHd3GWaZl8D'
});

const componentVisuals = [
  {
    _type: 'componentVisual',
    title: 'Bottle Visuals',
    description: '3D renderings for mock-ups and presentations',
    displayOrder: 1
  },
  {
    _type: 'componentVisual',
    title: 'Stock Bottle Selection',
    description: 'Choose from our extensive range of stock bottles for your fragrance',
    displayOrder: 2
  },
  {
    _type: 'componentVisual',
    title: 'Technical Design',
    description: 'Precise, production-ready specs for bottles, caps, and components',
    displayOrder: 3
  },
  {
    _type: 'componentVisual',
    title: 'Packaging Visuals',
    description: 'Full creative support for primary and secondary packaging',
    displayOrder: 4
  },
  {
    _type: 'componentVisual',
    title: 'Artwork Creation',
    description: 'Professional artwork design from initial concept to final print-ready files',
    displayOrder: 5
  },
  {
    _type: 'componentVisual',
    title: 'NPD Visuals',
    description: 'New Product Development visuals to bring your ideas to life',
    displayOrder: 6
  }
];

async function populateComponentVisuals() {
  console.log('Starting to populate Component Visuals...');
  
  try {
    // First, delete existing component visuals
    const existingVisuals = await client.fetch('*[_type == "componentVisual"]');
    console.log(`Found ${existingVisuals.length} existing component visuals to delete`);
    
    for (const visual of existingVisuals) {
      await client.delete(visual._id);
      console.log(`Deleted visual: ${visual.title}`);
    }
    
    // Create new component visuals
    for (const visual of componentVisuals) {
      const result = await client.create(visual);
      console.log(`Created component visual: ${visual.title} (ID: ${result._id})`);
    }
    
    console.log('\nSuccessfully populated all component visuals!');
    console.log('\nNOTE: You need to upload images in Sanity Studio for each component visual.');
    console.log('1. Go to your Sanity Studio (http://localhost:3333)');
    console.log('2. Navigate to Component Visuals');
    console.log('3. For each item, click on it and upload an image');
    
  } catch (error) {
    console.error('Error populating component visuals:', error);
  }
}

populateComponentVisuals();