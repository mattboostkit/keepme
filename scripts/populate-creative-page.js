// Script to populate Creative Page and update carousel items in Sanity
// Run with: node scripts/populate-creative-page.js

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skmCR1sOjgIi7CJPDbyhCsQNudL5867EUCCu40sfORiHRIHoaWhVoEMVh8tdvLeMBOYlUhO7620lrRm9Cr2S4W2QznUFvBtgISsKDpXbbuQSPfkRqAnHYz11NYMZnvGEfdiMFNOSyXDUfJNR60qR2J2ji1mvS18QAMWZIuNINYHd3GWaZl8D'
});

const creativePage = {
  _type: 'creativePage',
  heroTitle: 'KeepMe',
  heroDescription: 'This offers both new and existing clients a dedicated solution for premium, high-impact creative output. Delivered through our UK-based Design Studio, this service is designed to support brands with bespoke design and development across all aspects of product and packaging presentation.',
  approachTitle: 'Our',
  approachDescription: 'Every project is shaped around your specific brief, objectives, and timelines. Our paid model means dedicated resources and faster turnaround compared to traditional agencies. From first sketch to final artwork, our approach combines creativity with commercial insight, helping you move from concept to shelf efficiently.',
  componentVisualsTitle: 'Primary and Secondary Component Visuals',
  componentVisualsDescription: 'We help fragrance and lifestyle brands turn concepts into stunning visual realities, ready for internal approval, and final production.',
  logoDesignTitle: 'Logo Design',
  logoDesignDescription: "Your logo is more than a mark, it's the first impression of your fragrance brand. At KeepMe Creative, we craft logos that capture the essence of your scent, your story, and your audience.",
  logoDesignSubDescription: "Whether you're launching a new fragrance house or refreshing an established brand, our UK Design Studio delivers:",
  logoDesignFeatures: [
    'Sophisticated, fragrance-focused design',
    'Fully bespoke logos',
    'Aligned typography, colour, and brand feel',
    'Specialist design from fragrance experts'
  ],
  brandGuidelinesTitle: 'Brand Guidelines',
  brandGuidelinesDescription: 'Your brand deserves more than a great logo—it needs a visual system that speaks with clarity and confidence across every touchpoint.',
  brandGuidelinesSubDescription: 'At KeepMe Creative, we develop cohesive, professional brand guidelines tailored specifically for fragrance and lifestyle brands, including:',
  brandGuidelinesFeatures: [
    {_key: 'typography', title: 'Typography', description: 'Elegant, legible, and on-brand'},
    {_key: 'colour-palettes', title: 'Colour palettes', description: 'Sophisticated combinations that reflect your identity'},
    {_key: 'logo-usage', title: 'Logo usage rules', description: 'Scalable, versatile, and crystal-clear'}
  ],
  brandGuidelinesFooter: 'We ensure your brand looks and feels seamless everywhere.',
  seoTitle: 'KeepMe Creative | Premium Design Studio for Fragrance Brands',
  seoDescription: 'KeepMe Creative offers premium, high-impact creative output for fragrance brands. Our UK-based Design Studio provides bespoke design and development across all aspects of product and packaging presentation.'
};

async function updateCreativeCarousels() {
  console.log('Updating Creative Carousel items (formerly Component Visuals)...');
  
  try {
    // First, delete existing items with old type
    const oldItems = await client.fetch('*[_type == "componentVisual"]');
    console.log(`Found ${oldItems.length} old component visual items to delete`);
    
    for (const item of oldItems) {
      await client.delete(item._id);
      console.log(`Deleted old item: ${item.title}`);
    }
    
    // Check if we already have creative carousel items
    const existingItems = await client.fetch('*[_type == "creativeCarousel"]');
    
    if (existingItems.length === 0) {
      console.log('No creative carousel items found. Creating new ones...');
      
      const carouselItems = [
        {
          _type: 'creativeCarousel',
          title: 'Bottle Visuals',
          description: '3D renderings for mock-ups and presentations',
          displayOrder: 1
        },
        {
          _type: 'creativeCarousel',
          title: 'Stock Bottle Selection',
          description: 'Choose from our extensive range of stock bottles for your fragrance',
          displayOrder: 2
        },
        {
          _type: 'creativeCarousel',
          title: 'Technical Design',
          description: 'Precise, production-ready specs for bottles, caps, and components',
          displayOrder: 3
        },
        {
          _type: 'creativeCarousel',
          title: 'Packaging Visuals',
          description: 'Full creative support for primary and secondary packaging',
          displayOrder: 4
        },
        {
          _type: 'creativeCarousel',
          title: 'Artwork Creation',
          description: 'Professional artwork design from initial concept to final print-ready files',
          displayOrder: 5
        },
        {
          _type: 'creativeCarousel',
          title: 'NPD Visuals',
          description: 'New Product Development visuals to bring your ideas to life',
          displayOrder: 6
        }
      ];
      
      for (const item of carouselItems) {
        const result = await client.create(item);
        console.log(`Created carousel item: ${item.title} (ID: ${result._id})`);
      }
    } else {
      console.log(`Found ${existingItems.length} existing creative carousel items. Skipping creation.`);
    }
    
  } catch (error) {
    console.error('Error updating creative carousel items:', error);
  }
}

async function populateCreativePage() {
  console.log('\nChecking Creative Page...');
  
  try {
    // Check if creative page already exists
    const existingPage = await client.fetch('*[_type == "creativePage"][0]');
    
    if (existingPage) {
      console.log('Creative Page already exists. You can update it in Sanity Studio.');
    } else {
      console.log('Creating Creative Page...');
      const result = await client.create(creativePage);
      console.log(`Created Creative Page (ID: ${result._id})`);
    }
    
    console.log('\nSuccessfully set up Creative Page!');
    console.log('\nNOTE: You need to upload images in Sanity Studio:');
    console.log('1. Go to your Sanity Studio (http://localhost:3333)');
    console.log('2. Navigate to Creative Page and upload:');
    console.log('   - Hero Image');
    console.log('   - Logo Design Image');
    console.log('   - Brand Guidelines Image');
    console.log('3. Navigate to Creative Carousel and upload images for each item');
    
  } catch (error) {
    console.error('Error populating creative page:', error);
  }
}

async function main() {
  await updateCreativeCarousels();
  await populateCreativePage();
}

main();