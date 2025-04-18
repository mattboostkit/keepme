import { client } from './lib/sanity';

async function debugSanity() {
  try {
    console.log('Querying Sanity for portfolioBrand documents...');
    const result = await client.fetch('*[_type == "portfolioBrand"]');
    console.log('Result:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error querying Sanity:', error);
  }
}

debugSanity();
