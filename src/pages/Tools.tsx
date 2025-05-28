// React import removed - not needed in modern React
import { Link } from 'react-router-dom';
import { FlaskConical } from 'lucide-react';

function Tools() { // Renamed from ToolsLanding
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-plum mb-6">
            Our <span className="text-brand-rose">Tools</span>
          </h1>
        </div>
      </section>

      {/* Tool Links Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-4">
              A Growing Suite of <span className="text-brand-rose">Tools for Every Stage</span>
            </h2>
            <p className="text-lg text-brand-mauve leading-relaxed max-w-2xl mx-auto">
              Discover our Fragrance Calculator—the first in a series of tools designed to support every step of your fragrance production process. Stay tuned as we expand our collection to help you create, refine, and succeed in the world of fragrance.
            </p>
          </div>
          {/* Centered Fragrance Calculator Card */}
          <div className="flex justify-center mb-16">
            <div className="max-w-md w-full">
              <Link to="/tools/fragrance-calculator" className="block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
                <div className="bg-brand-highlight/20 p-4 rounded-xl inline-block mb-6 group-hover:bg-brand-card transition-colors">
                  <FlaskConical className="h-8 w-8 text-brand-rose group-hover:text-brand-plum transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-brand-plum mb-3">Fragrance Calculator</h3>
                <p className="text-base text-brand-mauve leading-relaxed mb-4">
                  Experiment with fragrance notes and concentrations to refine your formulations.
                </p>
                <span className="text-brand-rose font-medium flex items-center">
                  Go to Calculator
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Supporting Copy & Coming Soon Section */}
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-brand-plum mb-4">We’re just getting started!</h3>
            <p className="text-lg text-brand-mauve leading-relaxed mb-2">
              More tools are on the way to help with everything from costing and logistics to advanced formulation and compliance.
            </p>
            <p className="text-lg text-brand-mauve leading-relaxed font-medium text-brand-rose">
              Your feedback and ideas are welcome as we build the ultimate fragrance resource hub.
            </p>
            <div className="mt-8">
              <span className="inline-block bg-brand-highlight/30 text-brand-rose font-semibold px-6 py-3 rounded-full text-sm">
                More Tools Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tools; // Renamed from ToolsLanding
