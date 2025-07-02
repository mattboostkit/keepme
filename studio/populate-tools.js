const { createClient } = require('@sanity/client');

// Initialize the client
const client = createClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  apiVersion: '2024-01-21',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
});

// Tools data
const tools = [
  {
    title: 'Fragrance Calculator',
    slug: { _type: 'slug', current: 'fragrance-calculator' },
    description: 'Experiment with fragrance notes and concentrations to refine your formulations.',
    icon: 'FlaskConical',
    linkText: 'Go to Calculator',
    displayOrder: 0,
    isActive: true
  },
  {
    title: 'Development Process',
    slug: { _type: 'slug', current: 'development-process' },
    description: 'See how we bring your ideas to life, from concept to completion.',
    icon: 'Settings',
    linkText: 'Explore Process',
    displayOrder: 1,
    isActive: true
  }
];

// Tools Page data
const toolsPageData = {
  _type: 'toolsPage',
  heroTitle: 'Our Tools',
  heroDescription: 'Discover a suite of digital tools designed to streamline your fragrance and packaging journey. From calculators to interactive guides, each tool is crafted to empower you at every stage of the process.',
  whyToolsTitle: 'Why Tools?',
  whyToolsDescription: 'We believe in making complex processes simple and accessible. Our tools are designed to give you clarity, confidence, and control—whether you\'re formulating a fragrance, designing packaging, or planning logistics.',
  toolSuiteTitle: 'A Growing Suite of Tools for Every Stage',
  seoTitle: 'Tools | KeepMe - Fragrance & Packaging Resources',
  seoDescription: 'Access KeepMe\'s suite of digital tools for fragrance formulation and packaging design. Interactive calculators and guides to streamline your product development.'
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
    console.log('Starting population of Tools page data...');
    
    // Create Tools
    console.log('Creating tools...');
    for (const tool of tools) {
      await client.create({
        _type: 'tool',
        ...tool
      });
      console.log(`Created tool: ${tool.title}`);
    }
    
    // Upload image for Tools Page
    console.log('Uploading hero image...');
    const heroImage = await uploadImage(
      'https://cdn.sanity.io/images/tyzs5imn/production/4aeefbbef8dae3dd080f930c8af649be6f7dac45-1600x1066.webp',
      'Tools and resources'
    );
    
    // Create Tools Page
    console.log('Creating tools page...');
    const toolsPage = await client.create({
      ...toolsPageData,
      heroImage
    });
    console.log('Created tools page document');
    
    console.log('Tools page population completed successfully!');
    
  } catch (error) {
    console.error('Error populating data:', error);
  }
}

populate();