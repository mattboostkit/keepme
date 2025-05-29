import React from 'react';
import ServicePageWithSections from '../components/ServicePageWithSections';

// Dummy FAQ data specific to Home Fragrance
const faqItems = [
  { question: "What types of home fragrance products can you create?", answer: "We specialise in scented candles (various waxes, vessels, wicks), reed diffusers (different base oils and reed types), room sprays, and wax melts." },
  { question: "Can you develop custom scents for home products?", answer: "Yes, our perfumers can create bespoke fragrances specifically designed for optimal performance and scent throw in home fragrance applications." },
  { question: "What vessel options are available for candles and diffusers?", answer: "We offer a wide selection of glass, ceramic, and metal vessels, and can also source or develop custom containers to match your brand aesthetic." },
  { question: "Do you handle filling and assembly for home fragrance products?", answer: "Yes, we provide full-service manufacturing, including fragrance development, component sourcing, filling, assembly, and packaging." },
];

function HomeFragrance() {
  const sections = [
    {
      title: "Candles",
      content: (
        <>
          <p className="mb-4">Our expertly crafted luxury scented candles are carefully blended to evoke the senses. They are made with the highest-quality ingredients and enriched with essential oils and unique botanical blends.</p>
          <p>Offering bespoke designs, a selection of wax types, and custom-made bottles to suit and enhance your brand, our clean-burning, long-lasting fragrances exude an air of refinement and tranquillity.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Diffusers",
      content: (
        <>
          <p className="mb-4">With a range of scents created to help you relax and unwind, promote sleep, increase your focus, or feel energised, reed diffusers offer a long-lasting, flame-free alternative to scented candles.</p>
          <p>Uniquely blended from natural ingredients, customised and branded reed diffusers are an excellent addition to a luxury product range, designed to delight the senses.</p>
        </>
      ),
      imageLeft: false
    },
    {
      title: "Room Sprays",
      content: (
        <>
          <p className="mb-4">The essential oils in mist sprays can instantly enhance your mood, help promote restful sleep and freshen up your space.</p>
          <p>Created from natural oils and botanicals, mist sprays have a long-lasting, uplifting effect, and can be customised to suit your brand.</p>
        </>
      ),
      imageLeft: true
    }
  ];

  return (
    <ServicePageWithSections
      title="Home Fragrance"
      description="Our extensive Lifestyle portfolio offers a beautiful selection of Home and Lifestyle products, including diffusers and luxury candles. Combining quality and style to create exquisite products."
      serviceName="Home Fragrance"
      sections={sections}
      faqItems={faqItems}
    />
  );
}

export default HomeFragrance;