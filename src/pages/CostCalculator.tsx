
import BackButton from '../components/BackButton';

function CostCalculator() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-plum mb-6">
            Cost <span className="text-brand-rose">Calculator</span>
          </h1>
          <p className="text-lg text-brand-mauve leading-relaxed max-w-2xl mx-auto">
            Estimate the costs associated with your fragrance production project.
          </p>
        </div>
      </section>

      {/* Calculator Section (Placeholder) */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <BackButton to="/tools" label="Back to Tools" />
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-brand-plum mb-6">Project Cost Estimator</h2>
            <p className="text-brand-mauve">
              This is a placeholder for the cost calculator tool. Functionality will be added here.
              You would typically input details like volume, packaging complexity, ingredient types, etc.
            </p>
            {/* Placeholder for form inputs */}
            <div className="mt-8 space-y-4">
              <div>
                <label className="block text-brand-mauve mb-1">Estimated Volume (Units)</label>
                <input type="number" placeholder="e.g., 1000" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-rose" />
              </div>
              <div>
                <label className="block text-brand-mauve mb-1">Packaging Complexity</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-rose bg-white">
                  <option>Standard</option>
                  <option>Custom</option>
                  <option>Luxury</option>
                </select>
              </div>
              <button className="bg-brand-mauve text-white px-6 py-3 rounded-full hover:bg-brand-rose transition-colors w-full">
                Calculate Estimate (Placeholder)
              </button>
            </div>
             <div className="mt-8 p-4 bg-brand-highlight/20 rounded-lg text-center">
               <p className="text-brand-mauve">Estimated Cost: <span className="font-bold text-brand-rose">TBD</span></p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CostCalculator;