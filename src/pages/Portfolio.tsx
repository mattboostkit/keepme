// React import removed - not needed in modern React
import { ArrowRight } from 'lucide-react';

// Define the portfolio items data with client information
const portfolioItems = [
  { title: "Roja Parfums", subtitle: "Fragrance", imgSrc: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Roja Parfums fragrance products" },
  { title: "Ormonde Jayne", subtitle: "Luxury Packaging", imgSrc: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Ormonde Jayne luxury packaging" },
  { title: "Horatio", subtitle: "Luxury Packaging", imgSrc: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Horatio luxury packaging" },
  { title: "Boadacea", subtitle: "Vials", imgSrc: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Boadacea vials" },
  { title: "BDXY", subtitle: "Candles", imgSrc: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "BDXY candles" },
  { title: "Stephane Humbert Lucas", subtitle: "Shields & Caps", imgSrc: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Stephane Humbert Lucas shields and caps" },
];

function PortfolioPage() {
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
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Featured <span className="text-[#f4cfd9]">Clients</span>
            </h2>
            <p className="text-lg text-gray-600">
              We're proud to partner with these prestigious brands to create exceptional products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap */}
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden group relative">
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.imgSrc}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#f4cfd9] transition-colors">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.subtitle}</p>
                  <a href="#" className="bg-[#f4cfd9] text-white px-5 py-2 rounded-full hover:bg-[#f4cfd9]/80 transition-colors inline-flex items-center">
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage;