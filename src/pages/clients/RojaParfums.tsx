import PortfolioClientTemplate from '../../components/PortfolioClientTemplate';

const rojaImages = [
  'https://cdn.sanity.io/images/tyzs5imn/production/7d3fd66af3a5706fbe2e183f22e5700dc1b96086-1920x950.webp',
  // Add more images here if available
];

export default function RojaParfumsPage() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-brand-plum mb-2">Roja Parfums</h1>
          <p className="text-xl text-brand-mauve mb-4">British Heritage. Olfactory Artistry. Uncompromising Luxury.</p>
          <hr className="border-t-2 border-brand-rose w-24 mx-auto mb-6" />
        </div>
        <PortfolioClientTemplate
          clientName="Roja Parfums"
          description="We are honoured to manufacture and decorate the glass bottles for Roja Parfums, one of the world’s most prestigious fragrance houses. Known for its uncompromising luxury, British heritage, and olfactory artistry, Roja Parfums sets the global standard for excellence in perfumery. We also develop their vials and ceramic candle collection."
          features={["Fragrance Glass", "Vials", "Candle Ceramics", "Secondary Packaging"]}
          image="https://cdn.sanity.io/images/tyzs5imn/production/7d3fd66af3a5706fbe2e183f22e5700dc1b96086-1920x950.webp"
          gallery={rojaImages}
          website="https://rojaparfums.com"
          logo="https://cdn.sanity.io/images/tyzs5imn/production/1856a37e68a7c7f15ace41cb866aad4d931b7d46-320x160.webp"
        />
      </div>
    </div>
  );
}
