import { ArrowRight } from 'lucide-react';
import FilterablePortfolio from '../components/FilterablePortfolio';
import { fetchPortfolioBrands } from '../lib/portfolioUtils';
import { useState, useEffect } from 'react';

function PortfolioPage() {
  const [portfolioBrands, setPortfolioBrands] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch portfolio brands from Sanity
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const portfolioResult = await fetchPortfolioBrands();
        setPortfolioBrands(portfolioResult);
      } catch (error) {
        console.error('Error fetching portfolio brands:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#fffded] to-[#eed9b2]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Our <span className="text-[#f4cfd9]">Portfolio</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Discover our partnerships with prestigious fragrance houses and luxury brands. We're proud to work with some of the most distinguished names in the industry.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#f4cfd9]/20 p-2 rounded-full">
                    <ArrowRight className="h-6 w-6 text-[#f4cfd9]" />
                  </div>
                  <h3 className="text-xl font-bold">Client Partnerships</h3>
                </div>
                <p className="text-gray-600">
                  We collaborate with luxury brands to create exceptional products that elevate their customer experience and strengthen their market position.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80"
                alt="Luxury perfume bottles"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-[#f4cfd9]/20 p-2 rounded-full">
                    <ArrowRight className="h-6 w-6 text-[#f4cfd9]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">100+ Premium Clients</p>
                    <p className="text-gray-600">Trusted Partnerships</p>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Featured <span className="text-[#f4cfd9]">Clients</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're proud to partner with these prestigious brands to create exceptional products.
            </p>
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f4cfd9]"></div>
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