const { createClient } = require('@sanity/client');

// Initialize the client
const client = createClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  apiVersion: '2024-01-21',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
});

// Service Sections data
const serviceSections = [
  {
    title: 'Fragrance Componentry',
    slug: { _type: 'slug', current: 'fragrance-componentry' },
    description: 'Discover our extensive range of fragrance glass and componentry. We manufacture and supply premium bottles, sophisticated caps, precision pumps, vials, and closures, ensuring your fragrance is presented to reflect its quality and your brand\'s aesthetic.',
    learnMoreLink: '/services/fragrance-componentry',
    learnMoreText: 'Learn More about Fragrance Componentry',
    displayOrder: 0,
    backgroundColor: 'bg-white',
    imagePosition: 'right'
  },
  {
    title: 'Home Fragrance',
    slug: { _type: 'slug', current: 'home-fragrance' },
    description: 'Expand your brand\'s presence into the home sector with our bespoke home fragrance solutions. From luxurious scented candles and elegant reed diffusers to room sprays and more, we help you create inviting atmospheres that resonate with your customers.',
    learnMoreLink: '/services/home-fragrance',
    learnMoreText: 'Learn More about Home Fragrance',
    displayOrder: 1,
    backgroundColor: 'bg-brand-pink-light',
    imagePosition: 'left'
  },
  {
    title: 'Secondary Packaging',
    slug: { _type: 'slug', current: 'secondary-packaging' },
    description: 'Specialising in secondary packaging for the fragrance industry, we help elevate your brand\'s value and presence. Our exquisite packaging solutions are meticulously designed to impress consumers, convey exclusivity, and protect the precious contents within.',
    learnMoreLink: '/services/secondary-packaging',
    learnMoreText: 'Learn More about Secondary Packaging',
    displayOrder: 2,
    backgroundColor: 'bg-white',
    imagePosition: 'right'
  },
  {
    title: 'Gift With Purchase',
    slug: { _type: 'slug', current: 'gift-with-purchase' },
    description: 'Boost your marketing campaigns and enhance customer loyalty with compelling Gift With Purchase (GWP). We design and source attractive, relevant items for fragrance and lifestyle gifting that drive sales and delight your customers.',
    learnMoreLink: '/services/gift-with-purchase',
    learnMoreText: 'Learn More about Gift With Purchase',
    displayOrder: 3,
    backgroundColor: 'bg-brand-pink-light',
    imagePosition: 'left'
  },
  {
    title: 'Skincare Componentry',
    slug: { _type: 'slug', current: 'skincare-componentry' },
    description: 'Source high-quality skincare parts through our extensive network. We provide a diverse selection of components for various skincare applications, focusing on functionality, durability, and the aesthetic details that elevate your product presentation.',
    learnMoreLink: '/services/skincare-componentry',
    learnMoreText: 'Learn More about Skincare Componentry',
    displayOrder: 4,
    backgroundColor: 'bg-white',
    imagePosition: 'right'
  },
  {
    title: 'Fragrance Creation',
    slug: { _type: 'slug', current: 'fragrance-creation' },
    description: 'Leverage on the expertise of our partners in the art and science of fragrance creation. We work with the best perfumers in Europe. We collaborate with you to develop unique, captivating scents that embody your brand\'s essence, guiding the journey from initial concept through meticulous refinement to the final, signature masterpiece.',
    learnMoreLink: '/services/fragrance-creation',
    learnMoreText: 'Learn More about Fragrance Creation',
    displayOrder: 5,
    backgroundColor: 'bg-brand-pink-light',
    imagePosition: 'left'
  }
];

// FAQ data
const faqItems = [
  {
    question: "What is the minimum order quantity?",
    answer: "Our minimum order quantities vary by product type. Stock Glass Bottles and Caps typically require a minimum of 1,000 units (this can increase depending on capacity and complexity), whilst Bespoke Glass Bottles and Caps have an MOQ of 10,000 units. Decoration MOQ's vary between 500-5,000 units.",
    category: 'production',
    displayOrder: 0,
    isActive: true
  },
  {
    question: "How long does the production process take?",
    answer: "We recommend 6 months when custom moulds aren't required, bespoke projects may require up to 9 months depending on complexity and required components. Our team will issue a Critical Path during the Development and Evaluation stages",
    category: 'production',
    displayOrder: 1,
    isActive: true
  },
  {
    question: "Do you offer sampling services?",
    answer: "Yes, all our components and finishes will undergo a Development and Sampling stage. Our team are able to supply Technical Drawings and product prototypes. Sample fees may apply but are typically credited toward your first order.",
    category: 'services',
    displayOrder: 2,
    isActive: true
  },
  {
    question: "What regions do you ship to?",
    answer: "We ship globally with established logistics networks in Europe, North America, Asia, and the Middle East. Custom shipping arrangements can be made for other regions. Our experienced and dedicated Operations Team will help manage all inbound and outbound deliveries",
    category: 'shipping',
    displayOrder: 3,
    isActive: true
  },
  {
    question: "Do you offer an end to end service?",
    answer: "Yes, we specialise in all stages of Development and Production. From concept to delivery we can support you. Many of our clients utilise all of our services, from Creative Design, to Sampling, Production, Shipping, Blending of oils, Testing, Filling and Assembly of finished goods",
    category: 'services',
    displayOrder: 4,
    isActive: true
  },
  {
    question: "Can you help with regulatory compliance?",
    answer: "Absolutely. We ensure all our products meet regulatory requirements for their intended markets, including EU, UK, US, and other international standards. Our Team can also support with the Back of Pack labelling and appropriate warning symbols.",
    category: 'compliance',
    displayOrder: 5,
    isActive: true
  }
];

// Services Page data
const servicesPageData = {
  _type: 'servicesPage',
  heroTitle: 'Our Services',
  heroDescription: 'From concept to delivery, we provide end-to-end fragrance manufacturing solutions tailored to your brand\'s unique vision.',
  heroBoxTitle: 'Full-Service Solutions',
  heroBoxDescription: 'We offer comprehensive services from design and technical drawings, manufacturing of components to logistics and delivery, ensuring a seamless experience for your brand.',
  heroBadge1Title: 'Full Service',
  heroBadge1Subtitle: 'Comprehensive Solutions',
  heroBadge2Title: 'Global Reach',
  heroBadge2Subtitle: 'Worldwide Delivery',
  serviceCategoriesTitle: 'Our Service Categories',
  ctaTitle: 'Ready to Bring Your Fragrance Vision to Life?',
  ctaDescription: 'Contact us today to discuss your project and how our services can help you create exceptional fragrances.',
  ctaButtonText: 'Get in Touch',
  ctaButtonLink: '/contact',
  faqTitle: 'Frequently Asked Questions',
  faqSubtitle: 'Find answers to common questions about our fragrance services',
  seoTitle: 'Our Services | KeepMe - Expert Fragrance Manufacturing',
  seoDescription: 'Explore our comprehensive fragrance manufacturing services including fragrance creation, componentry, packaging, and specialist solutions for luxury brands.'
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
    console.log('Starting population of Services page data...');
    
    // Create Service Sections with placeholder images
    console.log('Creating service sections...');
    for (const section of serviceSections) {
      // For now, use a placeholder image URL
      const imageUrl = `https://via.placeholder.com/600x400.png?text=${encodeURIComponent(section.title)}`;
      const image = await uploadImage(imageUrl, section.title);
      
      await client.create({
        _type: 'serviceSection',
        ...section,
        image
      });
      console.log(`Created service section: ${section.title}`);
    }
    
    // Create FAQ Items
    console.log('Creating FAQ items...');
    for (const faq of faqItems) {
      await client.create({
        _type: 'faqItem',
        ...faq
      });
      console.log(`Created FAQ: ${faq.question}`);
    }
    
    // Create Services Page
    console.log('Creating services page...');
    const servicesPage = await client.create(servicesPageData);
    console.log('Created services page document');
    
    console.log('Services page population completed successfully!');
    
  } catch (error) {
    console.error('Error populating data:', error);
  }
}

populate();