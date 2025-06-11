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
  '/portfolio': {
    title: 'Portfolio | KeepMe - Fragrance Manufacturing Projects',
    description: 'View case studies of successful perfume manufacturing & packaging projects delivered for renowned brands.'
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
  }
};

export default seoConfig;
