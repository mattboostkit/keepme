import { ArrowRight } from 'lucide-react';
import FilterablePortfolio, { PortfolioItem } from '../components/FilterablePortfolio';
import { fetchPortfolioBrands, fetchPortfolioBrandByName, getPortfolioBrandImageUrl } from '../lib/portfolioUtils';
import { useState, useEffect } from 'react';

function PortfolioPage() {
  const [portfolioBrands, setPortfolioBrands] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [heroImage, setHeroImage] = useState<string>('');

  // Fetch portfolio brands and Boadicea image from Sanity
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch portfolio brands
        const portfolioResult = await fetchPortfolioBrands();
        setPortfolioBrands(portfolioResult);

        // Fetch Boadicea image for hero section
        const boadiceaData = await fetchPortfolioBrandByName('Boadicea');
        if (boadiceaData) {
          const imageUrl = getPortfolioBrandImageUrl(boadiceaData);
          setHeroImage(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-brand-peach">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-sans font-semibold text-brand-plum mb-6">
                Our Portfolio
              </h1>
              <p className="text-lg text-brand-mauve leading-relaxed mb-8">
                Discover more about our work. From bold concepts to commercially minded solutions, we deliver quality that fits your vision and your budget.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-brand-plum/20 p-2 rounded-full">
                    <ArrowRight className="h-6 w-6 text-brand-rose" />
                  </div>
                  <h3 className="text-xl text-brand-mauve">Client Partnerships</h3>
                </div>
                <p className="text-base text-brand-mauve leading-relaxed">
                  We partner with niche, innovative, creative brands. We’re proud to work with some of the most distinguished names in the industry.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage || "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80"}
                alt="Luxury perfume bottles"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-brand-plum/20 p-2 rounded-full">
                    <ArrowRight className="h-6 w-6 text-brand-rose" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Over 100 Clients</p>
                    <p className="text-brand-mauve">Trusted Partnerships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {portfolioBrands.length > 0 ? (
        <FilterablePortfolio
          title="Featured Clients"
          subtitle="We're proud to partner with these prestigious brands to create exceptional products."
          items={portfolioBrands}
          showFilters={true}
          backgroundColor="bg-white"
        />
      ) : (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-sans font-semibold text-brand-plum mb-4">
              Featured <span className="text-brand-rose">Clients</span>
            </h2>
            <p className="text-lg text-brand-mauve leading-relaxed mb-8">
              We're proud to partner with these prestigious brands to create exceptional products.
            </p>
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-rose"></div>
              </div>
            ) : (
              <p>No portfolio brands found. Please add some in Sanity Studio.</p>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

export default PortfolioPage;