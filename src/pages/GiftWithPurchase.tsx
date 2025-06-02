import ServicePageWithSections from '../components/ServicePageWithSections';

// Dummy FAQ data specific to Gift With Purchase
const faqItems = [
  { question: "What kind of GWP items can you source?", answer: "We can source a wide variety of items relevant to fragrance and lifestyle brands, such as miniature perfumes, cosmetic bags, pouches, candles, accessories, and more." },
  { question: "Can the GWP items be branded?", answer: "Yes, we work with suppliers who can customise items with your logo or brand design through various methods like printing, embroidery, or embossing." },
  { question: "How do you ensure the quality of GWP items?", answer: "We partner with reliable suppliers and implement quality control checks to ensure the GWP items meet your brand's standards and expectations." },
  { question: "What are the typical lead times for GWP sourcing?", answer: "Lead times depend heavily on the item, customisation, and quantity. We recommend planning GWP campaigns several months in advance." },
];

function GiftWithPurchase() {
  const sections = [
    {
      title: "Branded Goods",
      content: (
        <>
          <p className="mb-4">Expand your product range and communicate your brand values and identity with visually appealing branded goods.</p>
          <p className="mb-4">A greater selection of products helps to solidify your brand's position in the marketplace, increasing customer confidence and loyalty.</p>
          <p>Branded goods offer economical, ongoing advertising, from miniatures to travel bags, wash bags, ceramic discs, sample vials, wallets, and free samples.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Travel Size Products",
      content: (
        <>
          <p className="mb-4">Boost brand awareness with travel-sized perfumes, creams, and lip balms as complimentary products or miniature gift sets.</p>
          <p>Custom-made miniatures are available in bottles, jars, and tubes and are packaged in bespoke or off-the-shelf branded bags and boxes.</p>
        </>
      ),
      imageLeft: false
    },
    {
      title: "Travel Bags",
      content: (
        <>
          <p className="mb-4">An essential accessory for every discerning traveller. High-quality, branded, fully lined, travel washbags available in a range of sizes and materials.</p>
          <p className="mb-4">Stylish, practical, durable, and customisable, with an array of print options, swing tags, plaques, and zippers.</p>
          <p>Continuous customer brand awareness on the go.</p>
        </>
      ),
      imageLeft: true
    },
    {
      title: "Free Samples",
      content: (
        <>
          <p className="mb-4">Expand your customer base and increase brand awareness by offering complimentary items with purchase or as free samples to potential new customers.</p>
          <p className="mb-4">A reward for loyal customers and the perfect enticer for those who like to shop around for new and exciting luxury scents and home fragrance products, creating a positive consumer experience.</p>
          <p>Available as single or multi-use products for a longer customer experience, in a range of recyclable materials, folding cards, sleeves, glass, foil, burst-proof sachets, and pouches.</p>
        </>
      ),
      imageLeft: false
    },
    {
      title: "Robes",
      content: (
        <>
          <p className="mb-4">Whether a classic or modern style, created from plush or lightweight fabrics, high-quality branded dressing gowns are a sublime addition to any luxury brand.</p>
          <p>The ultimate item of customisable loungewear, perfect for relaxation and comfort, and created from durable, sustainable luxurious fabrics.</p>
        </>
      ),
      imageLeft: true
    }
  ];

  return (
    <ServicePageWithSections
      title="Gift With Purchase"
      description="Offering a gift with purchase is a powerful way to reward loyal customers, attract new ones, and showcase new products. Complimentary items make customers feel appreciated while increasing perceived value. From branded goods and travel-sized products to skincare kits, robes, and samples, we offer a wide range of options to help elevate your brand and engage buyers."
      serviceName="Gift With Purchase"
      sections={sections}
      faqItems={faqItems}
    />
  );
}

export default GiftWithPurchase;
