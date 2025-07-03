import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static routes from seoConfig
const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/services/fragrance-creation',
  '/services/fragrance-componentry',
  '/services/skincare-componentry',
  '/services/home-fragrance',
  '/services/secondary-packaging',
  '/services/gift-with-purchase',
  '/glass',
  '/creative',
  '/portfolio',
  '/blog',
  '/contact',
  '/tools',
  '/tools/cost-calculator',
  '/tools/fragrance-calculator',
  '/tools/freight-calculator',
  '/tools/development-process',
  '/privacy-policy',
  '/terms-and-conditions',
  '/quality-policy',
  '/portfolio/roja-parfums',
  '/portfolio/ormonde-jayne',
  '/portfolio/house-of-vision',
  '/portfolio/boadicea',
  '/portfolio/bdxy',
  '/portfolio/stephane-humbert-lucas',
  '/portfolio/house-of-brandt',
  '/portfolio/fragrance-du-bois',
  '/portfolio/flannels'
];

// Priority mapping
const priorityMap = {
  '/': 1.0,
  '/services': 0.9,
  '/portfolio': 0.9,
  '/about': 0.8,
  '/contact': 0.8,
  '/blog': 0.8,
  '/glass': 0.7,
  '/creative': 0.7,
  '/tools': 0.6
};

function getPriority(url) {
  // Check exact match
  if (priorityMap[url]) return priorityMap[url];
  
  // Check if it's a service page
  if (url.startsWith('/services/')) return 0.8;
  
  // Check if it's a portfolio page
  if (url.startsWith('/portfolio/')) return 0.7;
  
  // Check if it's a tool page
  if (url.startsWith('/tools/')) return 0.5;
  
  // Default priority
  return 0.6;
}

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map(route => `  <url>
    <loc>https://keepme.co.uk${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '/' ? 'daily' : route.includes('blog') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, sitemap);
  console.log('Sitemap generated successfully at:', publicPath);
}

generateSitemap();