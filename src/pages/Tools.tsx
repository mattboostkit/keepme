// React import removed - not needed in modern React
import { Link } from 'react-router-dom';
import { FlaskConical } from 'lucide-react';

function Tools() { // Renamed from ToolsLanding
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-brand-peach">
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-sans font-semibold text-brand-plum mb-6">
          Our <span className="text-brand-rose">Tools</span>
        </h1>
        <p className="text-lg text-brand-mauve leading-relaxed mb-12">
          Discover a suite of digital tools designed to streamline your fragrance and packaging journey. Whether you're formulating, calculating, or planning, our tools are built to empower your creativity and efficiency every step of the way.
        </p>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-6">Why <span className="text-brand-rose">Tools?</span></h2>
          <p className="text-lg text-brand-mauve leading-relaxed">
            We believe in making complex processes simple and accessible. Our mission is to give you powerful, easy-to-use resources so you can focus on what matters: bringing your ideas to life.
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://cdn.sanity.io/images/tyzs5imn/production/4aeefbbef8dae3dd080f930c8af649be6f7dac45-1600x1066.webp"
          alt="Tools and resources"
          className="rounded-2xl shadow-xl w-full h-[300px] md:h-[500px] object-cover"
        />
        {/* Optional: Overlay card or badge can go here */}
      </div>
    </div>
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
                <div className="bg-brand-pink-light p-4 rounded-xl inline-block mb-6 group-hover:bg-brand-mauve transition-colors">
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


        </div>
      </section>
    </div>
  );
}

export default Tools; // Renamed from ToolsLanding
