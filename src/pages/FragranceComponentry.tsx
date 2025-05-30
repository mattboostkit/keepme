import ServicePageWithSections from '../components/ServicePageWithSections';

// Dummy FAQ data specific to Fragrance Componentry
const faqItems = [
  { question: "What is the PCR content in your glass?", answer: "Our glass contains up to 30% post-consumer recycled (PCR) content. This level ensures sustainability without compromising the clarity and quality essential for premium perfume packaging. Higher percentages can affect the glass’s integrity, which is why we prioritise both performance and environmental responsibility." },
  { question: "Can you source custom-designed components?", answer: "Yes, we work with a network of manufacturers and can source or develop custom components based on your specific design requirements and technical specifications." },
  { question: "Do you offer sustainable component options?", answer: "Absolutely. We can source components made from recycled materials (like PCR glass or plastic), biodegradable materials, or refillable designs." },
  { question: "What are the lead times for component sourcing?", answer: "Lead times vary depending on the component type, customisation level, and supplier. Standard components might take a few weeks, while custom moulds can take several months." },
  { question: "What type of furnace do you use?", answer: "We use an electric furnace, which offers greater energy efficiency and reduced emissions compared to traditional gas furnaces—supporting both high-quality glass production and our commitment to sustainability." },
  { question: "How do you check the quality and integrity of the glass?", answer: "We follow a strict quality control process that includes visual inspections and the use of polarised light machines to detect stress, ensure clarity, and maintain structural integrity—meeting the high standards required for premium fragrance glass." },
  { question: "What is the most critical part of the production process?", answer: "The most critical aspects are the quality of raw materials, our team’s expertise, and rigorous quality control. Together, they ensure each glass component meets the exacting standards required for luxury fragrance packaging." },
];

function FragranceComponentry() {
  const sections = [
    {
      title: "Fragrance Bottles",
      content: (
        <>
          <p className="mb-4">We hold over 100 moulds for the immediate supply and ongoing production of stock bottles and candle jars. A cost-effective option that offers fast lead times, low MOQs, and a full decoration service from a simple logo to a full bottle coating with a custom finish.</p>
          <p>We also offer a full custom mould and production service for customers looking for a bespoke product. Our UK team will guide you through every step from concept design, to manufacture and delivery.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Vials & Pumps",
      content: (
        <>
          <p className="mb-4">We can provide a full range of pumps, collars, and closures, with the option of bespoke colours. Our pumps are available with various dosages and spray patterns, in a range of FEA sizes, with or without crimping.</p>
          <p>High-quality glass vials range from 1.5ml to 20ml, with a full decoration service and in-house filling on a state-of-the-art, fully automated carousel.</p>
        </>
      ),
      imageLeft: false
    },
    {
      title: "Caps & Collars",
      content: (
        <>
          <p className="mb-4">Perfume caps are available in a range of materials, from metallic and plastic to glass, marble, resin, and Zamac and can be bought as stock items from our extensive catalogue or custom-made for bespoke designs.</p>
          <p>The cap on a perfume bottle is not just there to preserve the liquid's aroma and freshness; it can also enhance the aesthetic appeal of the bottle, and make your product stand out from the competition.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Plaques & Shields",
      content: (
        <>
          <p className="mb-4">Customised plaque labels enhance a brand's personality, oozing decadence and luxury; a perfect opportunity to infuse a sense of sophistication and showcase the brand's identity.</p>
          <p>Intricate designs, either etched or stamped, enhance a brand's recognition and elevate the product's perceived value.</p>
        </>
      ),
      imageLeft: false
    }
  ];

  return (
    <ServicePageWithSections
      title="Fragrance Componentry"
      description="Find the perfect housing for your signature scent with our extensive selection of high-quality fragrance components."
      serviceName="Fragrance Componentry"
      sections={sections}
      faqItems={faqItems}
    />
  );
}

export default FragranceComponentry;