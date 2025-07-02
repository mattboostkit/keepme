const { createClient } = require('@sanity/client');

// Initialize the client
const client = createClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  apiVersion: '2024-01-21',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
});

// Company Values data
const companyValues = [
  {
    title: 'Passion',
    description: 'We are passionate about everything we do. Driven by creativity, integrity, and excellence. We create and deliver exceptional products that exceed expectations and make a meaningful impact.',
    displayOrder: 0
  },
  {
    title: 'Service',
    description: 'We believe great service starts with a calm, confident team. By creating a positive space to work, we make collaboration easy and communication effortless, so every customer feels supported and inspired.',
    displayOrder: 1
  },
  {
    title: 'Partnership',
    description: 'Honesty and integrity shape everything we do. We build trust through mutual respect within the team, with customers and partners. Real collaboration happens when everyone feels valued, heard, and empowered to contribute.',
    displayOrder: 2
  },
  {
    title: 'Quality',
    description: 'Quality means more than great products, it\'s about building lasting relationships rooted in trust, transparency, and shared success. We take pride in every detail, knowing that doing things right creates results people believe in.',
    displayOrder: 3
  }
];

// Company Timeline data
const timelineEvents = [
  {
    year: '2004',
    title: 'Where it all Began',
    description: 'Kevin and Steve Anderson opened the doors to what would become a trusted name in Branded Merchandise. Operating from our London office with a vision to support brands and distributors, KeepMe Promotions was founded. Utilising a network of newly established suppliers, the foundation was simple but powerful: strong relationships, reliable service, and a deep understanding of how merchandise could elevate brand presence.',
    displayOrder: 0
  },
  {
    year: '2005-2008',
    title: 'Integration and Expansion',
    description: 'This period marked a defining time as KeepMe. We integrated our businesses with our Shenzhen Operation, and we\'re proud to say: we still enjoy this relationship today. Here we laid the foundations for a robust, ethical supply chain, with audited factories and fully transparent practices.',
    displayOrder: 1
  },
  {
    year: '2009–2010',
    title: 'Enhancing our Services',
    description: 'KeepMe broaden our offering to include design, manufacturing and full service solutions. With a strong emphasis on creativity, technical excellence, and customer service, KeepMe built a solid foundation for future growth across a diverse range of industries. New team members supported our growing client demands in sales, logistics, and account management.',
    displayOrder: 2
  },
  {
    year: '2011',
    title: 'Entering the Fragrance & Lifestyle Market',
    description: 'Recognising the opportunity to innovate in new sectors, KeepMe moved into the fragrance and lifestyle market. The team began offering bespoke solutions across fragrance, skincare, beauty, cosmetics and wellness, helping brands create standout product experiences.',
    displayOrder: 3
  },
  {
    year: '2011-2018',
    title: 'Global Manufacturing Expansion',
    description: 'KeepMe expanded its global footprint, establishing strategic manufacturing capabilities across the UK, Europe and China. This global presence enabled the business to offer scalable, cost-effective production while maintaining high quality and speed to market.',
    displayOrder: 4
  },
  {
    year: '2020',
    title: 'Launch of the Lifestyle Lookbook',
    description: 'To inspire clients and showcase its full-service offering, KeepMe launched the Lifestyle Lookbook—a curated guide to its fragrance, skincare, wellness and packaging capabilities. This lookbook highlighted KeepMe\'s creative direction, market insight, and bespoke product range.',
    displayOrder: 5
  },
  {
    year: '2021',
    title: 'Commitment to Sustainability',
    description: 'Sustainability became a core focus. KeepMe Lifestyle adopted environmentally responsible practices across its operations, including eco-friendly materials, reduced waste processes and more sustainable packaging options—helping clients meet their own green goals.',
    displayOrder: 6
  },
  {
    year: '2023',
    title: 'Launch of KeepMe Glass',
    description: 'To further specialise in packaging, KeepMe established KeepMe Glass – a division dedicated to premium glass manufacturing for fragrance bottles, diffusers and candle jars. With a focus on quality, consistency and innovation, KeepMe Glass quickly became a trusted name in high-end packaging solutions.',
    displayOrder: 7
  },
  {
    year: '2024',
    title: 'Celebrating 20 Years of Innovation',
    description: 'In 2024, KeepMe proudly celebrated two decades of excellence. From humble beginnings to becoming a globally recognised partner, the anniversary marked a milestone of growth, innovation and unwavering dedication to quality and client success, offering clients a seamless route from concept to shelf.',
    displayOrder: 8
  },
  {
    year: 'Present',
    title: 'KeepMe Lifestyle & KeepMe Glass: A Unified Force',
    description: 'In 2025, KeepMe and KeepMe Glass brought their operations closer than ever before—uniting product development and packaging under one seamless offering. This reintegration created a powerful end-to-end partner for brands in the fragrance and lifestyle sector.',
    additionalContent: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'By combining bespoke product creation with premium packaging and global fulfilment, KeepMe now offers a single point of contact for brands seeking speed, consistency, and innovation. This strategic alignment enhances quality control, sustainability, and creative collaboration—ensuring that clients receive a truly connected, full-service experience from concept to delivery.'
          }
        ],
        markDefs: []
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [
          {
            _type: 'span',
            text: 'Established a reliable global supplier network, focusing on quality, integrity, and sustainability.'
          }
        ],
        markDefs: []
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [
          {
            _type: 'span',
            text: 'Built internal processes to support seamless integration, improved lead times, and consistent product quality.'
          }
        ],
        markDefs: []
      }
    ],
    displayOrder: 9
  }
];

// About Page data
const aboutPageData = {
  _type: 'aboutPage',
  heroTitle: 'About KeepMe',
  heroDescription: 'We specialise in the creation, manufacture, and delivery of premium fragrance, home, and lifestyle products. Based in the UK, we are a family-run business with over 20 years of industry experience. We work closely with brands, license holders, distributors, and retailers to bring their visions to life — from initial concept through to final product delivery. Whether you need individual components or a retail-ready product, KeepMe is the trusted partner to support your project at every stage.',
  heroBadge1Text: 'Since 2004',
  heroBadge1Subtext: 'Crafting Excellence',
  heroBadge2Text: '5M+ Units',
  heroBadge2Subtext: 'Produced Per Annum',
  missionTitle: 'Our Mission',
  missionDescription: 'We\'re all about turning big ideas into high-quality products — and making the whole process feel easy and collaborative.',
  valuesTitle: 'Our Values',
  valuesSubtitle: 'The principles that guide our work and relationships',
  journeyTitle: 'Our Journey',
  journeySubtitle: 'How KeepMe Lifestyle established itself as a key supplier in the fragrance and lifestyle sector',
  glassManufacturerTitle: 'Glass Manufacturer for the Fragrance and Lifestyle sector',
  glassManufacturerDescription1: 'At KeepMe Glass, we specialise in designing and manufacturing premium quality glass bottles and components for the fragrance, beauty, and lifestyle industries.',
  glassManufacturerDescription2: 'We offer a full design and decoration service for customers looking for a high-end, bespoke finish, and a catalogue of hundreds of stock bottles, with short lead times with low MOQs and short lead times for those looking for a faster turnaround.',
  glassManufacturerCtaText: 'Visit KeepMe Glass',
  glassManufacturerCtaUrl: 'https://keepmeglass.co.uk/',
  ctaTitle: 'Contact Us',
  ctaDescription: 'Get in touch to discuss your project requirements',
  ctaButtonText: 'Contact Us',
  seoTitle: 'About Us | KeepMe - UK Fragrance Manufacturing Experts',
  seoDescription: 'Learn about KeepMe, a family-run UK fragrance manufacturer with 20+ years of experience creating premium perfume, home, and lifestyle products for luxury brands.'
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
    console.log('Starting population of About page data...');
    
    // Create Company Values
    console.log('Creating company values...');
    for (const value of companyValues) {
      await client.create({
        _type: 'companyValue',
        ...value
      });
      console.log(`Created company value: ${value.title}`);
    }
    
    // Create Company Timeline Events
    console.log('Creating company timeline events...');
    for (const event of timelineEvents) {
      await client.create({
        _type: 'companyTimeline',
        ...event
      });
      console.log(`Created timeline event: ${event.year} - ${event.title}`);
    }
    
    // Upload images for About Page
    console.log('Uploading images...');
    const heroImage = await uploadImage(
      'https://cdn.sanity.io/images/tyzs5imn/production/4aeefbbef8dae3dd080f930c8af649be6f7dac45-1600x1066.webp',
      'KeepMe perfume bottles'
    );
    
    const glassManufacturerImage = await uploadImage(
      'https://cdn.sanity.io/images/tyzs5imn/production/d1b61dc82170aa5a21ee677f8ce6423223fad74f-603x664.webp',
      'KeepMe Glass perfume bottle'
    );
    
    // Create About Page
    console.log('Creating about page...');
    const aboutPage = await client.create({
      ...aboutPageData,
      heroImage,
      glassManufacturerImage
    });
    console.log('Created about page document');
    
    console.log('About page population completed successfully!');
    
  } catch (error) {
    console.error('Error populating data:', error);
  }
}

populate();