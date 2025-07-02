const { createClient } = require('@sanity/client');

// Initialize the client
const client = createClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  apiVersion: '2024-01-21',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
});

// Portfolio Page data
const portfolioPageData = {
  _type: 'portfolioPage',
  heroTitle: 'Our Portfolio',
  heroDescription: 'Discover more about our work. From bold concepts to commercially minded solutions, we deliver quality that fits your vision and your budget.',
  heroBoxTitle: 'Client Partnerships',
  heroBoxDescription: 'We partner with niche, innovative, creative brands. We\'re proud to work with some of the most distinguished names in the industry.',
  heroBadgeNumber: 'Over 100 Clients',
  heroBadgeText: 'Trusted Partnerships',
  brandsTitle: 'Our Clients',
  brandsDescription: 'Discover our partnerships with prestigious brands. We\'re proud to work with some of the most distinguished names in the industry.',
  seoTitle: 'Portfolio | KeepMe - Our Fragrance Manufacturing Projects',
  seoDescription: 'Explore our portfolio of successful fragrance manufacturing projects for prestigious brands including Roja Parfums, Ormonde Jayne, and other luxury fragrance houses.'
};

async function populate() {
  try {
    console.log('Starting population of Portfolio page data...');
    
    // Create Portfolio Page
    console.log('Creating portfolio page...');
    const portfolioPage = await client.create(portfolioPageData);
    console.log('Created portfolio page document');
    
    console.log('Portfolio page population completed successfully!');
    
  } catch (error) {
    console.error('Error populating data:', error);
  }
}

populate();