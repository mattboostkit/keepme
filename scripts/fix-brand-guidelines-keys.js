// Script to fix missing keys in Brand Guidelines Features
// Run with: node scripts/fix-brand-guidelines-keys.js

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skmCR1sOjgIi7CJPDbyhCsQNudL5867EUCCu40sfORiHRIHoaWhVoEMVh8tdvLeMBOYlUhO7620lrRm9Cr2S4W2QznUFvBtgISsKDpXbbuQSPfkRqAnHYz11NYMZnvGEfdiMFNOSyXDUfJNR60qR2J2ji1mvS18QAMWZIuNINYHd3GWaZl8D'
});

async function fixBrandGuidelinesKeys() {
  console.log('Fixing Brand Guidelines Features keys...');
  
  try {
    // Fetch the creative page
    const creativePage = await client.fetch('*[_type == "creativePage"][0]');
    
    if (!creativePage) {
      console.log('No Creative Page found.');
      return;
    }
    
    console.log(`Found Creative Page (ID: ${creativePage._id})`);
    
    // Check if brandGuidelinesFeatures exists and needs fixing
    if (creativePage.brandGuidelinesFeatures && Array.isArray(creativePage.brandGuidelinesFeatures)) {
      const updatedFeatures = creativePage.brandGuidelinesFeatures.map((feature, index) => {
        if (!feature._key) {
          // Generate a key based on the title or index
          const key = feature.title ? 
            feature.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') : 
            `feature-${index}`;
          
          console.log(`Adding key "${key}" to feature: ${feature.title}`);
          return { ...feature, _key: key };
        }
        return feature;
      });
      
      // Update the document
      await client
        .patch(creativePage._id)
        .set({ brandGuidelinesFeatures: updatedFeatures })
        .commit();
      
      console.log('Successfully updated Brand Guidelines Features with keys!');
    } else {
      console.log('No Brand Guidelines Features found or already has keys.');
    }
    
  } catch (error) {
    console.error('Error fixing brand guidelines keys:', error);
  }
}

fixBrandGuidelinesKeys();