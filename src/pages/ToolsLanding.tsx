// React import removed - not needed in modern React
import { Link } from 'react-router-dom';
import { Calculator, FlaskConical, Truck } from 'lucide-react';

function ToolsLanding() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Our <span className="text-brand-accent">Tools</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our calculators designed to help you estimate costs and fragrance compositions.
          </p>
        </div>
      </section>

      {/* Tool Links Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Cost Calculator Card */}
            <Link to="/tools/cost-calculator" className="block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
              <div className="bg-brand-highlight/20 p-4 rounded-xl inline-block mb-6 group-hover:bg-brand-card transition-colors">
                <Calculator className="h-8 w-8 text-brand-card group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cost Calculator</h3>
              <p className="text-gray-600 mb-4">
                Estimate the potential costs for your fragrance production project based on various factors.
              </p>
              <span className="text-brand-card font-medium flex items-center">
                Go to Calculator
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>

            {/* Fragrance Calculator Card */}
            <Link to="/tools/fragrance-calculator" className="block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
              <div className="bg-brand-highlight/20 p-4 rounded-xl inline-block mb-6 group-hover:bg-brand-card transition-colors">
                <FlaskConical className="h-8 w-8 text-brand-card group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fragrance Calculator</h3>
              <p className="text-gray-600 mb-4">
                Experiment with fragrance notes and concentrations (Placeholder for future tool).
              </p>
              <span className="text-brand-card font-medium flex items-center">
                Go to Calculator
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>

            {/* Freight Calculator Card */}
            <Link to="/tools/freight-calculator" className="block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
              <div className="bg-brand-highlight/20 p-4 rounded-xl inline-block mb-6 group-hover:bg-brand-card transition-colors">
                <Truck className="h-8 w-8 text-brand-card group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">Freight Calculator</h3>
              <p className="text-gray-600 mb-4">
                Calculate shipping costs and delivery times for your fragrance products to destinations worldwide.
              </p>
              <span className="text-brand-card font-medium flex items-center">
                Go to Calculator
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ToolsLanding;