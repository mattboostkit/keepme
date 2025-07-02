// Script to populate Glass Page content in Sanity
// Run with: node scripts/populate-glass-page.js

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'tyzs5imn',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skmCR1sOjgIi7CJPDbyhCsQNudL5867EUCCu40sfORiHRIHoaWhVoEMVh8tdvLeMBOYlUhO7620lrRm9Cr2S4W2QznUFvBtgISsKDpXbbuQSPfkRqAnHYz11NYMZnvGEfdiMFNOSyXDUfJNR60qR2J2ji1mvS18QAMWZIuNINYHd3GWaZl8D'
});

// Glass Page content
const glassPage = {
  _type: 'glassPage',
  heroTitle: 'Premium Glass Solutions',
  heroDescription: 'We create custom-designed glass components that define and elevate your fragrance brand.  With a deep understanding of the fragrance industry\'s aesthetic and functional demands, we deliver exceptional quality, refined detail, and timeless craftsmanship—transforming glass into a powerful expression of identity.',
  expertiseTitle: 'Expert Glass Finishing',
  expertisePoints: [
    'Tailor-made bottle designs',
    'Premium materials and finishes',
    'Innovative forms, textures, and techniques',
    'Reliable production and uncompromising quality'
  ],
  heroBadge1Text: '20+ Years',
  heroBadge1Subtext: 'Glass Expertise',
  heroBadge2Text: 'Premium Quality',
  heroBadge2Subtext: 'Luxury Materials',
  glassTypesTitle: 'Premium Glass Decoration',
  glassTypesDescription: 'We offer a variety of high-quality glass finishes to suit your specific fragrance requirements',
  processTitle: 'Our Glass Manufacturing Process',
  processDescription: 'From raw materials to finished products, our meticulous process ensures exceptional quality',
  customSolutionsTitle: 'Custom Glass Solutions',
  customSolutionsDescription: 'Beyond our standard offerings, we specialise in creating bespoke glass components tailored to your specific vision and requirements.',
  customSolutionsFeatures: [
    {
      _key: 'custom-shapes',
      title: 'Custom Shapes & Designs',
      description: 'From traditional to avant-garde, we can bring your unique design vision to life.'
    },
    {
      _key: 'specialty-finishes',
      title: 'Speciality Finishes',
      description: 'Frosted, metallic, gradient, and textured finishes for distinctive visual appeal.'
    },
    {
      _key: 'exclusive-techniques',
      title: 'Exclusive Techniques',
      description: 'Hand-crafted elements, embedded features, and proprietary manufacturing processes.'
    }
  ],
  customSolutionsCta: 'Schedule a Consultation',
  ctaTitle: 'Elevate Your Fragrance with Premium Glass',
  ctaDescription: 'Contact our glass specialists today to discover how our exceptional glass components can enhance your fragrance products.',
  ctaButtonText: 'Contact Us',
  seoTitle: 'Premium Glass Solutions | KeepMe Glass Manufacturing',
  seoDescription: 'Expert glass manufacturing for luxury fragrances. Custom designs, premium finishes, and 20+ years of expertise in creating exceptional glass components.'
};

// Glass Types content
const glassTypes = [
  {
    _type: 'glassType',
    title: 'Glass Polishing',
    content: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [{
          _type: 'span',
          text: 'To achieve the flawless, crystal-clear surfaces that make fragrance bottles stand out, we use expert finishing techniques like hand and fire polishing, each delivering a high-gloss finish that enhances the beauty and luxury of your glass components.'
        }]
      },
      {
        _type: 'block',
        _key: 'hand-polishing',
        style: 'normal',
        children: [
          {_type: 'span', text: 'Hand Polishing', marks: ['strong']},
          {_type: 'span', text: ' is a meticulous, artisan process where skilled craftsmen refine every curve and edge using fine abrasives. It smooths out minor imperfections and creates an even surface with a subtle, elegant sheen making the glass as exquisite to touch as it is to behold.'}
        ]
      },
      {
        _type: 'block',
        _key: 'fire-polishing',
        style: 'normal',
        children: [
          {_type: 'span', text: 'Fire Polishing', marks: ['strong']},
          {_type: 'span', text: ' involves reheating the glass to a precise temperature, allowing the surface to naturally smooth and clarify under expert control. This technique reduces irregularities and produces a luminous, mirror-like finish that beautifully highlights design details.'}
        ]
      },
      {
        _type: 'block',
        _key: 'conclusion',
        style: 'normal',
        children: [{
          _type: 'span',
          text: 'Together, these techniques give your fragrance bottles a polished, premium look, reflecting the craftsmanship and quality your brand stands for.'
        }]
      }
    ],
    displayOrder: 0
  },
  {
    _type: 'glassType',
    title: 'Glass Printing and Decoration Techniques',
    content: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [{
          _type: 'span',
          text: 'To bring your fragrance bottles to life with captivating detail and unique branding, we offer a range of expert decoration techniques, each designed to enhance the visual impact and luxury feel of your glass components.'
        }]
      },
      {
        _type: 'block',
        _key: 'techniques',
        style: 'normal',
        children: [
          {_type: 'span', text: 'Printing & Silkscreen:', marks: ['strong']},
          {_type: 'span', text: ' Precision printing and silkscreen for vibrant, high-definition graphics and logos directly on the glass, ensuring sharp, lasting imagery.\n\n'},
          {_type: 'span', text: 'Spraying & Graduated Finishes:', marks: ['strong']},
          {_type: 'span', text: ' Sprayed coatings and graduated (ombre) finishes for stunning visual effects that transition smoothly in colour or texture, adding depth and sophistication.\n\n'},
          {_type: 'span', text: 'Foiling:', marks: ['strong']},
          {_type: 'span', text: ' Metallic foiling in gold, silver, or custom colours to highlight logos and patterns with a luxurious shine.\n\n'},
          {_type: 'span', text: 'Laser Etching:', marks: ['strong']},
          {_type: 'span', text: ' Subtle, tactile engraving of precise designs onto the glass surface without colour, producing a refined matte finish for intricate logos or patterns.\n\n'},
          {_type: 'span', text: 'Embossing & Debossing:', marks: ['strong']},
          {_type: 'span', text: ' Raised (embossing) or recessed (debossing) design elements to add dimension, texture, and a memorable sensory experience.'}
        ]
      },
      {
        _type: 'block',
        _key: 'conclusion',
        style: 'normal',
        children: [
          {_type: 'span', text: 'Each technique can be tailored and combined to create unique bottles that reflect your brand\'s personality and stand out. '},
          {
            _type: 'span',
            text: 'Browse our Portfolio',
            marks: ['link'],
            markDefs: [{
              _type: 'link',
              _key: 'portfolio-link',
              href: '/portfolio'
            }]
          },
          {_type: 'span', text: ' to see the results.'}
        ]
      }
    ],
    displayOrder: 1
  },
  {
    _type: 'glassType',
    title: 'Electroplating',
    content: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [{
          _type: 'span',
          text: 'Electroplating coats glass with a thin metal layer (gold, silver, chrome, copper) for enhanced aesthetics, durability, and a premium feel. It uses an electric current for a seamless, uniform coating customisable in thickness and finish, from reflective sheens to matte textures.'
        }]
      },
      {
        _type: 'block',
        _key: 'detail',
        style: 'normal',
        children: [{
          _type: 'span',
          text: 'This process allows for intricate detailing and can be combined with other techniques like etching or embossing for unique, luxurious designs.'
        }]
      },
      {
        _type: 'block',
        _key: 'conclusion',
        style: 'normal',
        children: [{
          _type: 'span',
          text: 'Ideal for conveying opulence, electroplated components make a bold statement, transforming bottles into art—perfect for limited editions or luxury lines aiming for a striking appearance.'
        }]
      }
    ],
    displayOrder: 2
  }
];

// Manufacturing Steps content
const manufacturingSteps = [
  {
    _type: 'manufacturingStep',
    title: 'Raw Materials',
    description: 'Sourcing and mixing high-quality raw materials such as silica sand, soda ash, limestone, and other additives required for glass production. Our facility uses state of the art technology to carefully mix the raw materials into a precise formula (batch).',
    bulletPoints: [],
    displayOrder: 0
  },
  {
    _type: 'manufacturingStep',
    title: 'Melting and Forming',
    description: 'Heating the batch in a furnace at extremely high temperatures (around 1,500°C / 2,732°F) until it melts into molten glass. The molten glass is then formed using traditional and modern methods including:',
    bulletPoints: ['Blow and Blow', 'Press and Blow'],
    displayOrder: 1
  },
  {
    _type: 'manufacturingStep',
    title: 'Annealing',
    description: 'Slowly cooling the formed glass bottles in an annealing oven (lehr) to relieve internal stresses and prevent cracking.',
    bulletPoints: [],
    displayOrder: 2
  },
  {
    _type: 'manufacturingStep',
    title: 'Quality Control',
    description: 'Checking bottles for defects such as bubbles, cracks, or irregular shapes using automated systems and manual inspection. The bottles are then packed for shipment to customers or decoration facilities.',
    bulletPoints: [],
    displayOrder: 3
  },
  {
    _type: 'manufacturingStep',
    title: 'Finishing & Decorating',
    description: 'Expert finishing techniques and decorative elements add distinctive character to each piece.',
    bulletPoints: [],
    displayOrder: 4
  }
];

async function populateGlassPage() {
  console.log('Starting to populate Glass Page content...\n');
  
  try {
    // Check if glass page already exists
    const existingPage = await client.fetch('*[_type == "glassPage"][0]');
    
    if (existingPage) {
      console.log('Glass Page already exists. You can update it in Sanity Studio.');
    } else {
      console.log('Creating Glass Page...');
      const result = await client.create(glassPage);
      console.log(`Created Glass Page (ID: ${result._id})`);
    }
    
    // Create Glass Types
    console.log('\nCreating Glass Types...');
    for (const glassType of glassTypes) {
      const existing = await client.fetch(`*[_type == "glassType" && title == "${glassType.title}"][0]`);
      if (!existing) {
        const result = await client.create(glassType);
        console.log(`Created Glass Type: ${glassType.title} (ID: ${result._id})`);
      } else {
        console.log(`Glass Type "${glassType.title}" already exists`);
      }
    }
    
    // Create Manufacturing Steps
    console.log('\nCreating Manufacturing Steps...');
    for (const step of manufacturingSteps) {
      const existing = await client.fetch(`*[_type == "manufacturingStep" && title == "${step.title}"][0]`);
      if (!existing) {
        const result = await client.create(step);
        console.log(`Created Manufacturing Step: ${step.title} (ID: ${result._id})`);
      } else {
        console.log(`Manufacturing Step "${step.title}" already exists`);
      }
    }
    
    console.log('\nSuccessfully populated Glass Page content!');
    console.log('\nNOTE: You need to upload images in Sanity Studio:');
    console.log('1. Go to your Sanity Studio (http://localhost:3333)');
    console.log('2. Navigate to Glass Page and upload:');
    console.log('   - Hero Image');
    console.log('   - 4 Custom Solutions Images');
    console.log('3. Navigate to Manufacturing Steps and upload an image for each step');
    
  } catch (error) {
    console.error('Error populating glass page:', error);
  }
}

populateGlassPage();