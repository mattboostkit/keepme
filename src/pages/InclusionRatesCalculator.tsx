import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

interface ProductType {
  name: string;
  minRate: number;
  maxRate: number;
  unit: string;
  note?: string;
}

const InclusionRatesCalculator: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('edp');
  const [batchSize, setBatchSize] = useState<number>(1000);
  const [fragranceRate, setFragranceRate] = useState<number>(25);

  const productTypes: Record<string, ProductType> = {
    edp: { name: 'EDP (Eau de Parfum)', minRate: 20, maxRate: 30, unit: 'ml' },
    edt: { name: 'EDT (Eau de Toilette)', minRate: 15, maxRate: 20, unit: 'ml' },
    bodyMist: { name: 'Body Mist', minRate: 2, maxRate: 10, unit: 'ml', note: 'Trending higher (up to 10%)' },
    hairMist: { name: 'Hair Mist', minRate: 2, maxRate: 7, unit: 'ml' },
    diffuser: { name: 'Diffuser', minRate: 15, maxRate: 30, unit: 'ml' },
    candle: { name: 'Candle', minRate: 8, maxRate: 10, unit: 'g' },
  };

  const currentProduct = productTypes[selectedProduct];
  const fragranceAmount = (batchSize * fragranceRate) / 100;
  const baseAmount = batchSize - fragranceAmount;

  const handleRateChange = (value: number) => {
    const clampedValue = Math.max(
      currentProduct.minRate,
      Math.min(currentProduct.maxRate, value)
    );
    setFragranceRate(clampedValue);
  };

  return (
    <div className="pt-24 pb-12 bg-brand-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-peach rounded-full mb-4">
              <Calculator className="h-8 w-8 text-brand-plum" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-plum mb-4">
              Fragrance Inclusion Rates Calculator
            </h1>
            <p className="text-lg text-brand-mauve max-w-2xl mx-auto">
              Calculate the optimal fragrance oil amounts for your products based on industry-standard inclusion rates.
            </p>
          </div>

          {/* Calculator */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            {/* Product Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-brand-plum mb-2">
                Select Product Type
              </label>
              <select
                value={selectedProduct}
                onChange={(e) => {
                  setSelectedProduct(e.target.value);
                  const newProduct = productTypes[e.target.value];
                  setFragranceRate((newProduct.minRate + newProduct.maxRate) / 2);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-mauve"
              >
                {Object.entries(productTypes).map(([key, product]) => (
                  <option key={key} value={key}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Batch Size Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-brand-plum mb-2">
                Batch Size ({currentProduct.unit})
              </label>
              <input
                type="number"
                value={batchSize}
                onChange={(e) => setBatchSize(Math.max(1, parseInt(e.target.value) || 0))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-mauve"
                min="1"
              />
            </div>

            {/* Fragrance Rate Slider */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-brand-plum mb-2">
                Fragrance Inclusion Rate: {fragranceRate}%
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min={currentProduct.minRate}
                  max={currentProduct.maxRate}
                  step="0.5"
                  value={fragranceRate}
                  onChange={(e) => handleRateChange(parseFloat(e.target.value))}
                  className="w-full h-2 bg-brand-peach rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{currentProduct.minRate}%</span>
                  <span className="font-medium text-brand-mauve">
                    Recommended Range
                  </span>
                  <span>{currentProduct.maxRate}%</span>
                </div>
              </div>
              {currentProduct.note && (
                <p className="text-sm text-brand-rose mt-2">{currentProduct.note}</p>
              )}
            </div>

            {/* Results */}
            <div className="bg-brand-peach/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-brand-plum mb-4">
                Calculated Amounts
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Fragrance Oil Required:</span>
                  <span className="text-xl font-bold text-brand-plum">
                    {fragranceAmount.toFixed(1)} {currentProduct.unit}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Base/Carrier Required:</span>
                  <span className="text-xl font-bold text-brand-mauve">
                    {baseAmount.toFixed(1)} {currentProduct.unit}
                  </span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Total Batch:</span>
                    <span className="text-xl font-bold text-brand-plum">
                      {batchSize} {currentProduct.unit}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Information Box */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-brand-plum mt-0.5 flex-shrink-0" />
              <div className="text-sm text-gray-700">
                <p className="font-semibold mb-2">Important Considerations:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>These are typical industry ranges - actual rates may vary based on fragrance profile</li>
                  <li>Regional regulations affect maximum allowable concentrations</li>
                  <li>Middle Eastern markets often use higher concentrations (up to 40%)</li>
                  <li>Always conduct stability and safety testing at your chosen concentration</li>
                  <li>Consider the fragrance's strength and intended use when selecting rates</li>
                </ul>
                <p className="mt-3 font-medium text-brand-plum">
                  Contact our experts for personalized guidance on optimal inclusion rates for your specific project.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-brand-mauve mb-6">
              Need help determining the perfect fragrance concentration for your product?
            </p>
            <a
              href="/contact"
              className="inline-block bg-brand-mauve text-white px-8 py-3 rounded-full hover:bg-brand-rose transition-colors"
            >
              Consult Our Experts
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #8B4A8C;
          cursor: pointer;
          border-radius: 50%;
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #8B4A8C;
          cursor: pointer;
          border-radius: 50%;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default InclusionRatesCalculator;