const { createClient } = require('@sanity/client');

// Initialize the client
const client = createClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  apiVersion: '2024-01-21',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
});

// Home Page data
const homePageData = {
  _type: 'homePage',
  ctaTitle: 'Flawless Fragrances,\nExpertly Crafted',
  ctaDescription: 'Your end-to-end partner in fragrance and packaging. We specialise in perfume production, from components to filling, assembly, and delivery.',
  ctaButtonText: 'Contact Us',
  ctaButtonLink: '/contact',
  clientLogosTitle: 'Trusted by Leading Brands',
  servicesTitle: 'Our Services',
  servicesDescription: 'We combine creativity with technical expertise to support our clients\' projects from concept to completion.',
  portfolioTitle: 'Our Portfolio',
  portfolioDescription: 'Explore our diverse range of fragrance creations and packaging solutions.',
  contactCtaTitle: 'Ready to Start Your Project?',
  contactCtaDescription: 'Let\'s discuss how we can bring your fragrance vision to life with our expertise in design, manufacturing, and delivery.',
  contactCtaButtonText: 'Get Started',
  seoTitle: 'KeepMe | Expert Fragrance Manufacturer',
  seoDescription: 'KeepMe is a leading UK-based fragrance manufacturer specialising in perfume production, packaging, and end-to-end solutions for luxury brands.'
};

async function uploadImage(imageUrl, altText = '') {
  console.log(`Uploading image: ${imageUrl}`);
  
  try {
    const response = await fetch(imageUrl);
    const buffer = await response.buffer();
    
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
      alt: altText,
    };
  } catch (error) {
    console.error(`Failed to upload image ${imageUrl}:`, error);
    return null;
  }
}

async function populate() {
  try {
    console.log('Starting population of Home page data...');
    
    // Upload images
    console.log('Uploading hero background image...');
    const heroBackgroundImage = await uploadImage(
      'https://cdn.sanity.io/images/tyzs5imn/production/7feee1508aeaf269bf3ecdfa7c0c8bc62585b627-2700x1336.webp',
      'KeepMe hero background'
    );
    
    // Note: The white logo is an SVG asset, so we'll handle it differently in the actual implementation
    // For now, we'll skip uploading the logo as it's an SVG file
    
    // Create Home Page
    console.log('Creating home page...');
    const homePage = await client.create({
      ...homePageData,
      heroBackgroundImage
    });
    console.log('Created home page document');
    
    console.log('Home page population completed successfully!');
    
  } catch (error) {
    console.error('Error populating data:', error);
  }
}

populate();