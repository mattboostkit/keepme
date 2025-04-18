// update-featured-post.js
const { createClient } = require('@sanity/client');

// Initialize the Sanity client
const client = createClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  token: process.env.SANITY_TOKEN, // You'll need to set this environment variable
  useCdn: false,
  apiVersion: '2023-05-03',
});

async function updateFeaturedPosts() {
  try {
    // First, find all posts with isFeatured = true and set them to false
    const featuredPosts = await client.fetch('*[_type == "post" && isFeatured == true]._id');
    
    console.log(`Found ${featuredPosts.length} currently featured posts`);
    
    // Update all currently featured posts to not be featured
    if (featuredPosts.length > 0) {
      const transaction = client.transaction();
      
      featuredPosts.forEach(postId => {
        transaction.patch(postId, {
          set: { isFeatured: false }
        });
      });
      
      await transaction.commit();
      console.log('Reset featured status for all posts');
    }
    
    // Now find the "Trends Shaping Luxury Fragrance Packaging" post and set it as featured
    const packagingPost = await client.fetch('*[_type == "post" && title == "Trends Shaping Luxury Fragrance Packaging in 2025"][0]');
    
    if (packagingPost) {
      await client.patch(packagingPost._id)
        .set({ isFeatured: true })
        .commit();
      
      console.log('Successfully set "Trends Shaping Luxury Fragrance Packaging in 2025" as the featured post');
    } else {
      console.error('Could not find the packaging post');
    }
  } catch (error) {
    console.error('Error updating featured posts:', error);
  }
}

// Run the update function
updateFeaturedPosts();
