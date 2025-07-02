// Script to clean up unused Sanity schemas
// Run with: node scripts/cleanup-unused-schemas.js

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skmCR1sOjgIi7CJPDbyhCsQNudL5867EUCCu40sfORiHRIHoaWhVoEMVh8tdvLeMBOYlUhO7620lrRm9Cr2S4W2QznUFvBtgISsKDpXbbuQSPfkRqAnHYz11NYMZnvGEfdiMFNOSyXDUfJNR60qR2J2ji1mvS18QAMWZIuNINYHd3GWaZl8D'
});

// Schemas that are unused and can be removed
const unusedSchemas = ['heroSection', 'video', 'service'];

// Schemas to check for documents before deciding
const checkSchemas = ['category', 'author'];

async function cleanupUnusedSchemas() {
  console.log('Starting cleanup of unused Sanity schemas...\n');
  
  try {
    // Check for documents in unused schemas
    for (const schemaType of unusedSchemas) {
      const count = await client.fetch(`count(*[_type == "${schemaType}"])`);
      console.log(`Schema "${schemaType}": ${count} documents found`);
      
      if (count > 0) {
        console.log(`⚠️  Warning: Found ${count} documents of type "${schemaType}"`);
        const docs = await client.fetch(`*[_type == "${schemaType}"]{_id, title}[0...5]`);
        console.log('  Sample documents:', docs.map(d => d.title || d._id).join(', '));
        
        // Optional: Delete documents if confirmed
        const shouldDelete = false; // Set to true if you want to delete
        if (shouldDelete) {
          for (const doc of docs) {
            await client.delete(doc._id);
            console.log(`  Deleted document: ${doc._id}`);
          }
        }
      }
    }
    
    console.log('\n---\n');
    
    // Check schemas that might be partially used
    for (const schemaType of checkSchemas) {
      const count = await client.fetch(`count(*[_type == "${schemaType}"])`);
      console.log(`Schema "${schemaType}": ${count} documents found`);
      
      if (count > 0) {
        // Check if referenced by other documents
        if (schemaType === 'category') {
          const postsWithCategory = await client.fetch(`count(*[_type == "post" && defined(categories)])`);
          console.log(`  Referenced by ${postsWithCategory} blog posts`);
        }
        if (schemaType === 'author') {
          const postsWithAuthor = await client.fetch(`count(*[_type == "post" && defined(author)])`);
          console.log(`  Referenced by ${postsWithAuthor} blog posts`);
        }
      }
    }
    
    console.log('\n=== RECOMMENDATIONS ===');
    console.log('\n1. Remove these schemas from studio/schemaTypes/index.ts:');
    console.log('   - heroSection (unused)');
    console.log('   - video (feature not exposed in UI)');
    console.log('   - service (replaced by serviceImage)');
    
    console.log('\n2. Keep these schemas (used as references):');
    console.log('   - category (used in blog posts)');
    console.log('   - author (used in blog posts)');
    
    console.log('\n3. Consider removing these features if not planned:');
    console.log('   - Video page functionality');
    console.log('   - Gallery page functionality (if not used)');
    
    console.log('\n4. Delete the following schema files:');
    console.log('   - studio/schemaTypes/heroSection.ts');
    console.log('   - studio/schemaTypes/video.ts');
    console.log('   - studio/schemaTypes/service.ts');
    
  } catch (error) {
    console.error('Error during cleanup:', error);
  }
}

cleanupUnusedSchemas();