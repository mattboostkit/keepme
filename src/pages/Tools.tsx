// React import removed - not needed in modern React
import { Link } from 'react-router-dom';
import { Calculator, FlaskConical, Truck } from 'lucide-react';

function Tools() { // Renamed from ToolsLanding
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-plum mb-6">
            Our <span className="text-brand-rose">Tools</span>
          </h1>
          <p className="text-lg text-brand-mauve leading-relaxed max-w-2xl mx-auto">
            Useful resources for your fragrance journey.
          </p>
        </div>
      </section>

      {/* Tool Links Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-4">
              Tools for <span className="text-brand-rose">Every Stage</span>
            </h2>
            <p className="text-lg text-brand-mauve leading-relaxed max-w-2xl mx-auto">
              From initial cost estimates to fragrance formulation, our tools are here to assist you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Cost Calculator Card */}
            <Link to="/tools/cost-calculator" className="block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
              <div className="bg-brand-highlight/20 p-4 rounded-xl inline-block mb-6 group-hover:bg-brand-card transition-colors">
                <Calculator className="h-8 w-8 text-brand-rose group-hover:text-brand-plum transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-brand-plum mb-3">Cost Calculator</h3>
              <p className="text-base text-brand-mauve leading-relaxed mb-4">
                Estimate the potential costs for your fragrance production project based on various factors.
              </p>
              <span className="text-brand-rose font-medium flex items-center">
                Go to Calculator
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>

            {/* Fragrance Calculator Card */}
            <Link to="/tools/fragrance-calculator" className="block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
              <div className="bg-brand-highlight/20 p-4 rounded-xl inline-block mb-6 group-hover:bg-brand-card transition-colors">
                <FlaskConical className="h-8 w-8 text-brand-rose group-hover:text-brand-plum transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-brand-plum mb-3">Fragrance Calculator</h3>
              <p className="text-base text-brand-mauve leading-relaxed mb-4">
                Experiment with fragrance notes and concentrations (Placeholder for future tool).
              </p>
              <span className="text-brand-rose font-medium flex items-center">
                Go to Calculator
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>

            {/* Freight Calculator Card */}
            <Link to="/tools/freight-calculator" className="block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
              <div className="bg-brand-highlight/20 p-4 rounded-xl inline-block mb-6 group-hover:bg-brand-card transition-colors">
                <Truck className="h-8 w-8 text-brand-rose group-hover:text-brand-plum transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-brand-plum mb-3">Freight Calculator</h3>
              <p className="text-base text-brand-mauve leading-relaxed mb-4">
                Calculate shipping costs and delivery times for your fragrance products to destinations worldwide.
              </p>
              <span className="text-brand-rose font-medium flex items-center">
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

export default Tools; // Renamed from ToolsLanding
