const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
});

exports.handler = async function(event, context) {
  try {
    // Fetch all published blog posts
    const posts = await client.fetch(`
      *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
        slug,
        publishedAt,
        _updatedAt
      }
    `);

    // Fetch all portfolio brands
    const portfolioBrands = await client.fetch(`
      *[_type == "portfolioBrand"] | order(displayOrder asc) {
        slug,
        _updatedAt
      }
    `);

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://keepme.co.uk/</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/about</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/services</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/services/fragrance-creation</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/services/fragrance-componentry</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/services/skincare-componentry</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/services/home-fragrance</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/services/secondary-packaging</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/services/gift-with-purchase</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/creative</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/glass</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/portfolio</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/blog</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/contact</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/tools</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/privacy-policy</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/terms-and-conditions</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://keepme.co.uk/quality-policy</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  ${portfolioBrands.map(brand => `
  <url>
    <loc>https://keepme.co.uk/portfolio/${brand.slug.current}</loc>
    <lastmod>${new Date(brand._updatedAt).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  ${posts.map(post => `
  <url>
    <loc>https://keepme.co.uk/blog/${post.slug.current}</loc>
    <lastmod>${new Date(post._updatedAt || post.publishedAt).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      },
      body: sitemap
    };
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return {
      statusCode: 500,
      body: 'Error generating sitemap'
    };
  }
}; 