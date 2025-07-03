interface SeoEntry {
  title: string;
  description: string;
  image?: string;
}

// Basic centralised SEO lookup per pathname
const seoConfig: Record<string, SeoEntry> = {
  '/': {
    title: 'KeepMe | Expert Fragrance Manufacturer',
    description: 'KeepMe is a leading UK-based fragrance manufacturer specialising in perfume production, packaging, and end-to-end solutions for luxury brands.'
  },
  '/about': {
    title: 'About Us | KeepMe - UK Fragrance Manufacturing Experts',
    description: 'Learn about KeepMe, a family-run manufacturer with 20+ years of expertise creating premium perfume, home-fragrance & lifestyle products.'
  },
  '/services': {
    title: 'Our Services | KeepMe - Expert Fragrance Manufacturing',
    description: 'Discover our complete fragrance manufacturing services: fragrance creation, componentry, packaging, secondary packaging and more.'
  },
  '/services/fragrance-creation': {
    title: 'Fragrance Creation Service | KeepMe',
    description: 'Bespoke perfume formulation & development with UK-based experts. Turn your fragrance concept into reality.'
  },
  '/services/fragrance-componentry': {
    title: 'Fragrance Componentry | KeepMe',
    description: 'High-quality pumps, collars, caps & accessories to complete your perfume product.'
  },
  '/services/skincare-componentry': {
    title: 'Skincare Componentry | KeepMe',
    description: 'Tubes, dispensers and closures engineered for premium skincare lines.'
  },
  '/services/home-fragrance': {
    title: 'Home Fragrance Manufacturing | KeepMe',
    description: 'Candles, diffusers and room sprays manufactured in the UK for luxury brands.'
  },
  '/services/secondary-packaging': {
    title: 'Secondary Packaging | KeepMe',
    description: 'Luxury rigid boxes, cartons & magnetic closures designed to elevate your fragrance brand.'
  },
  '/services/gift-with-purchase': {
    title: 'Gift With Purchase (GWP) Solutions | KeepMe',
    description: 'Delight customers with bespoke minis & promotional sets crafted by fragrance specialists.'
  },
  '/glass': {
    title: 'Glass Bottle Manufacturing | KeepMe',
    description: 'Custom glass bottle production and decoration for perfume & cosmetics.'
  },
  '/creative': {
    title: 'KeepMe Creative | Premium Design Studio for Fragrance Brands',
    description: 'KeepMe Creative offers premium, high-impact creative output for fragrance brands. Our UK-based Design Studio provides bespoke design and development across all aspects of product and packaging presentation.'
  },
  '/portfolio': {
    title: 'Portfolio | KeepMe - Fragrance Manufacturing Projects',
    description: 'View case studies of successful perfume manufacturing & packaging projects delivered for renowned brands.'
  },
  '/blog': {
    title: 'KeepMe Blog | Fragrance Manufacturing Insights & Expertise',
    description: 'Expert insights, industry trends, and manufacturing expertise from KeepMe. Discover the latest in fragrance production, packaging innovation, and luxury brand development.'
  },
  '/contact': {
    title: 'Contact KeepMe | Start Your Fragrance Project',
    description: 'Get in touch with our expert team to discuss perfume manufacturing, packaging or component needs.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | KeepMe',
    description: 'Read how KeepMe collects, uses and protects your personal data.'
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions | KeepMe',
    description: 'View the terms & conditions governing use of the KeepMe website and services.'
  },
  '/quality-policy': {
    title: 'Quality Policy | KeepMe',
    description: 'Our commitment to quality across fragrance manufacturing, packaging and customer service.'
  },
  '/tools': {
    title: 'Digital Tools | KeepMe',
    description: 'Utilise calculators & interactive guides that streamline your fragrance and packaging journey.'
  },
  '/tools/cost-calculator': {
    title: 'Cost Calculator | KeepMe - Calculate Your Fragrance Project Costs',
    description: 'Instantly estimate costs for your fragrance manufacturing project. Calculate packaging, components, and production expenses with our free online tool.'
  },
  '/tools/fragrance-calculator': {
    title: 'Fragrance Calculator | KeepMe - Formulation & Dilution Tool',
    description: 'Professional fragrance calculator for perfumers. Calculate dilutions, concentrations, and formulation ratios for your fragrance development projects.'
  },
  '/tools/freight-calculator': {
    title: 'Freight Calculator | KeepMe - Shipping Cost Estimator',
    description: 'Calculate shipping costs for fragrance products. Get instant freight estimates for UK and international delivery of your perfume orders.'
  },
  '/tools/inclusion-rates': {
    title: 'Fragrance Inclusion Rates Calculator | KeepMe - Dosage Guide',
    description: 'Calculate optimal fragrance oil concentrations for EDP, EDT, body mists, candles, and more. Interactive tool with industry-standard inclusion rates and regional variations.'
  },
  '/tools/development-process': {
    title: 'Development Process | KeepMe - From Concept to Launch',
    description: 'Explore our comprehensive fragrance development process. Learn how we take your perfume from initial concept to successful market launch.'
  },
  '/galleries': {
    title: 'Project Galleries | KeepMe - Manufacturing Showcase',
    description: 'Browse our visual galleries showcasing fragrance manufacturing projects, luxury packaging, and successful brand launches.'
  },
  '/videos': {
    title: 'Video Library | KeepMe - Manufacturing & Process Videos',
    description: 'Watch our collection of videos demonstrating fragrance manufacturing processes, packaging solutions, and industry insights.'
  },
  '/testimonials-demo': {
    title: 'Client Testimonials | KeepMe - What Our Partners Say',
    description: 'Read testimonials from luxury brands who trust KeepMe for their fragrance manufacturing and packaging needs.'
  },
  '/posts': {
    title: 'News & Updates | KeepMe - Industry Insights',
    description: 'Stay updated with the latest news, industry trends, and insights from KeepMe\'s fragrance manufacturing experts.'
  },
  // Client portfolio pages
  '/portfolio/roja-parfums': {
    title: 'Roja Parfums Case Study | KeepMe Portfolio',
    description: 'Discover how KeepMe partners with Roja Parfums to manufacture and package their ultra-luxury fragrance collections.'
  },
  '/portfolio/ormonde-jayne': {
    title: 'Ormonde Jayne Case Study | KeepMe Portfolio',
    description: 'See how KeepMe supports Ormonde Jayne with bespoke fragrance manufacturing and premium packaging solutions.'
  },
  '/portfolio/house-of-vision': {
    title: 'House of Vision Case Study | KeepMe Portfolio',
    description: 'Learn about our collaboration with House of Vision, delivering innovative fragrance concepts and luxury packaging.'
  },
  '/portfolio/boadicea': {
    title: 'Boadicea The Victorious Case Study | KeepMe Portfolio',
    description: 'Explore our partnership with Boadicea The Victorious, creating exceptional British luxury fragrances.'
  },
  '/portfolio/bdxy': {
    title: 'BDXY Case Study | KeepMe Portfolio',
    description: 'Discover how KeepMe manufactures contemporary fragrances for BDXY with cutting-edge packaging design.'
  },
  '/portfolio/stephane-humbert-lucas': {
    title: 'Stephane Humbert Lucas Case Study | KeepMe Portfolio',
    description: 'See how we bring Stephane Humbert Lucas\'s artistic fragrance visions to life through expert manufacturing.'
  },
  '/portfolio/house-of-brandt': {
    title: 'House of Brandt Case Study | KeepMe Portfolio',
    description: 'Learn about our work with House of Brandt, crafting sophisticated fragrances with meticulous attention to detail.'
  },
  '/portfolio/fragrance-du-bois': {
    title: 'Fragrance Du Bois Case Study | KeepMe Portfolio',
    description: 'Explore our partnership with Fragrance Du Bois, creating sustainable luxury fragrances with premium packaging.'
  },
  '/portfolio/flannels': {
    title: 'Flannels Case Study | KeepMe Portfolio',
    description: 'Discover how KeepMe develops exclusive fragrance collections and gift sets for premium retailer Flannels.'
  }
};

export default seoConfig;
