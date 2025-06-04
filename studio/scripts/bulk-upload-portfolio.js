// Bulk upload portfolio images to Sanity
// Usage: node scripts/bulk-upload-portfolio.js

const sanityClient = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Configure your Sanity client
const client = sanityClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  apiVersion: '2023-12-01',
  token: process.env.SANITY_TOKEN, // You'll need a write token
  useCdn: false
});

// Directory containing your images
const IMAGES_DIR = './portfolio-images'; // Change this to your images folder

async function uploadImage(filePath) {
  try {
    const imageFile = fs.readFileSync(filePath);
    const asset = await client.assets.upload('image', imageFile, {
      filename: path.basename(filePath)
    });
    return asset._id;
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error);
    return null;
  }
}

async function createPortfolioItem(assetId, order) {
  try {
    const doc = {
      _type: 'portfolioItem',
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: assetId
        }
      },
      displayOrder: order
    };
    
    const result = await client.create(doc);
    console.log(`Created portfolio item: ${result._id}`);
    return result;
  } catch (error) {
    console.error('Error creating portfolio item:', error);
    return null;
  }
}

async function bulkUpload() {
  console.log('Starting bulk upload...');
  
  // Get all image files from the directory
  const files = fs.readdirSync(IMAGES_DIR)
    .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
    .map(file => path.join(IMAGES_DIR, file));
  
  console.log(`Found ${files.length} images to upload`);
  
  let order = 1;
  for (const file of files) {
    console.log(`Uploading ${path.basename(file)}...`);
    
    // Upload image asset
    const assetId = await uploadImage(file);
    if (!assetId) continue;
    
    // Create portfolio item
    await createPortfolioItem(assetId, order);
    order += 1;
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('Bulk upload complete!');
}

// Run the upload
bulkUpload().catch(console.error);