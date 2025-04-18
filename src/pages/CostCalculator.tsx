import React from 'react';

function CostCalculator() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-[#fdf2f4]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Cost <span className="text-[#f4cfd9]">Calculator</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estimate the costs associated with your fragrance production project.
          </p>
        </div>
      </section>

      {/* Calculator Section (Placeholder) */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Cost Estimator</h2>
            <p className="text-gray-600">
              This is a placeholder for the cost calculator tool. Functionality will be added here.
              You would typically input details like volume, packaging complexity, ingredient types, etc.
            </p>
            {/* Placeholder for form inputs */}
            <div className="mt-8 space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Estimated Volume (Units)</label>
                <input type="number" placeholder="e.g., 1000" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Packaging Complexity</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                  <option>Standard</option>
                  <option>Custom</option>
                  <option>Luxury</option>
                </select>
              </div>
              <button className="bg-brand-pink text-white px-6 py-3 rounded-lg hover:bg-[#ebbdc7] transition-colors w-full">
                Calculate Estimate (Placeholder)
              </button>
            </div>
             <div className="mt-8 p-4 bg-[#fdf2f4] rounded-lg text-center">
               <p className="text-gray-700">Estimated Cost: <span className="font-bold text-[#f4cfd9]">TBD</span></p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CostCalculator;