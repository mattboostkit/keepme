import React, { useState } from 'react';
import { Calculator, Info, Droplet } from 'lucide-react';
import FragranceConcentrations from '../components/FragranceConcentrations';

interface ProductType {
  name: string;
  minRate: number;
  maxRate: number;
  unit: string;
  note?: string;
  color: string;
}

const InclusionRatesCalculator: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('edp');
  const [batchSize, setBatchSize] = useState<number>(100);
  const [fragranceRate, setFragranceRate] = useState<number>(20);

  const productTypes: Record<string, ProductType> = {
    eauFraiche: { name: 'Eau Fraîche', minRate: 1, maxRate: 3, unit: 'ml', color: '#FFEDC5' },
    edc: { name: 'Eau de Cologne (EDC)', minRate: 2, maxRate: 4, unit: 'ml', color: '#FFE0B5' },
    bodyMist: { name: 'Body Mist', minRate: 2, maxRate: 7, unit: 'ml', note: 'Trending higher (up to 10%)', color: '#FFD4A3' },
    hairMist: { name: 'Hair Mist', minRate: 2, maxRate: 7, unit: 'ml', color: '#FFD4A3' },
    edt: { name: 'Eau de Toilette (EDT)', minRate: 5, maxRate: 15, unit: 'ml', color: '#FFC891' },
    candle: { name: 'Candles', minRate: 8, maxRate: 10, unit: 'g', color: '#FFBC7F' },
    edp: { name: 'Eau de Parfum (EDP)', minRate: 15, maxRate: 25, unit: 'ml', color: '#FFB06D' },
    diffuser: { name: 'Diffusers', minRate: 15, maxRate: 30, unit: 'ml', color: '#FFA45B' },
    parfum: { name: 'Parfum', minRate: 25, maxRate: 35, unit: 'ml', color: '#FF9849' },
    extrait: { name: 'Extrait de Parfum', minRate: 35, maxRate: 45, unit: 'ml', color: '#FF8C37' },
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

  // Visual bottle representation
  const BottleVisualization = () => {
    const fillPercentage = fragranceRate;
    
    if (selectedProduct === 'diffuser') {
      const liquidHeight = (fillPercentage / 100) * 80;
      const liquidY = 140 - liquidHeight;
      
      return (
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-brand-plum mb-4">{fragranceRate}%</div>
          <svg width="150" height="200" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: currentProduct.color, stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: currentProduct.color, stopOpacity: 0.9 }} />
              </linearGradient>
              <clipPath id="diffuserShape">
                <rect x="25" y="60" width="50" height="80" rx="2" />
              </clipPath>
            </defs>
            
            <rect x="25" y={liquidY} width="50" height={liquidHeight} 
                  fill="url(#liquidGradient)" clipPath="url(#diffuserShape)" />
            
            <path d="M 50 50 L 30 5 M 50 50 L 50 5 M 50 50 L 70 5" 
                  stroke="#8B4A8C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <rect x="42" y="48" width="16" height="12" fill="none" stroke="#8B4A8C" strokeWidth="2"/>
            <rect x="25" y="60" width="50" height="80" rx="2" fill="none" stroke="#8B4A8C" strokeWidth="2"/>
            <rect x="25" y="85" width="50" height="30" fill="none" stroke="#8B4A8C" strokeWidth="2" strokeDasharray="2 2" opacity="0.5"/>
          </svg>
          <div className="mt-4 text-sm text-brand-mauve font-medium">{currentProduct.name}</div>
        </div>
      );
    } else if (selectedProduct === 'candle') {
      const liquidHeight = (fillPercentage / 100) * 85;
      const liquidY = 125 - liquidHeight;
      
      return (
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-brand-plum mb-4">{fragranceRate}%</div>
          <svg width="150" height="200" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: currentProduct.color, stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: currentProduct.color, stopOpacity: 0.9 }} />
              </linearGradient>
              <clipPath id="candleShape">
                <path d="M 20 40 L 20 120 Q 20 130 30 130 L 70 130 Q 80 130 80 120 L 80 40" />
              </clipPath>
            </defs>
            
            <rect x="20" y={liquidY} width="60" height={liquidHeight} 
                  fill="url(#liquidGradient)" clipPath="url(#candleShape)" />
            
            <path d="M 50 15 Q 45 20 45 25 Q 45 30 50 30 Q 55 30 55 25 Q 55 20 50 15" 
                  fill="none" stroke="#8B4A8C" strokeWidth="2"/>
            <line x1="50" y1="30" x2="50" y2="40" stroke="#8B4A8C" strokeWidth="2"/>
            <ellipse cx="50" cy="40" rx="30" ry="5" fill="none" stroke="#8B4A8C" strokeWidth="2"/>
            <path d="M 20 40 L 20 120 Q 20 130 30 130 L 70 130 Q 80 130 80 120 L 80 40" 
                  fill="none" stroke="#8B4A8C" strokeWidth="2"/>
            <ellipse cx="50" cy="125" rx="30" ry="5" fill="none" stroke="#8B4A8C" strokeWidth="2"/>
            <rect x="20" y="70" width="60" height="30" fill="none" stroke="#8B4A8C" strokeWidth="2" strokeDasharray="2 2" opacity="0.5"/>
          </svg>
          <div className="mt-4 text-sm text-brand-mauve font-medium">{currentProduct.name}</div>
        </div>
      );
    } else if (selectedProduct === 'hairMist') {
      const liquidHeight = (fillPercentage / 100) * 95;
      const liquidY = 135 - liquidHeight;
      
      return (
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-brand-plum mb-4">{fragranceRate}%</div>
          <svg width="150" height="200" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: currentProduct.color, stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: currentProduct.color, stopOpacity: 0.9 }} />
              </linearGradient>
              <clipPath id="hairmistShape">
                <rect x="38" y="40" width="24" height="95" rx="2" />
              </clipPath>
            </defs>
            
            <rect x="38" y={liquidY} width="24" height={liquidHeight} 
                  fill="url(#liquidGradient)" clipPath="url(#hairmistShape)" />
            
            <rect x="47" y="10" width="6" height="8" fill="none" stroke="#8B4A8C" strokeWidth="2"/>
            <rect x="44" y="18" width="12" height="15" fill="none" stroke="#8B4A8C" strokeWidth="2"/>
            <rect x="46" y="33" width="8" height="7" fill="none" stroke="#8B4A8C" strokeWidth="2"/>
            <rect x="38" y="40" width="24" height="95" rx="2" fill="none" stroke="#8B4A8C" strokeWidth="2"/>
            <rect x="38" y="65" width="24" height="35" fill="none" stroke="#8B4A8C" strokeWidth="2" strokeDasharray="2 2" opacity="0.5"/>
          </svg>
          <div className="mt-4 text-sm text-brand-mauve font-medium">{currentProduct.name}</div>
        </div>
      );
    } else {
      // Default bottle for all other types
      const liquidHeight = (fillPercentage / 100) * 200;
      const liquidY = 250 - liquidHeight;

      return (
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-brand-plum mb-4">{fragranceRate}%</div>
          <svg width="120" height="260" viewBox="0 0 120 260" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: currentProduct.color, stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: currentProduct.color, stopOpacity: 0.9 }} />
              </linearGradient>
              <clipPath id="bottleShape">
                <rect x="20" y="50" width="80" height="200" rx="8" />
              </clipPath>
            </defs>
            
            <rect x="20" y={liquidY} width="80" height={liquidHeight} 
                  fill="url(#liquidGradient)" clipPath="url(#bottleShape)" />
            
            <g fill="none" stroke="#8B4A8C" strokeWidth="3">
              <rect x="20" y="50" width="80" height="200" rx="8" />
              <rect x="45" y="10" width="30" height="45" rx="4" />
              <rect x="40" y="5" width="40" height="15" rx="2" fill="#8B4A8C" />
              <rect x="30" y="120" width="60" height="40" rx="4" strokeDasharray="2 2" opacity="0.5" />
            </g>
          </svg>
          <div className="mt-4 text-sm text-brand-mauve font-medium">{currentProduct.name}</div>
        </div>
      );
    }
  };

  return (
    <div className="pt-24 pb-12 bg-brand-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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

          {/* Visual Reference Guide */}
          <div className="mb-12">
            <FragranceConcentrations />
          </div>

          {/* Calculator Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Controls */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-semibold text-brand-plum mb-6">Calculate Your Formula</h2>
              
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-mauve text-brand-plum"
                >
                  {Object.entries(productTypes).map(([key, product]) => (
                    <option key={key} value={key}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Fill Capacity Input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-brand-plum mb-2">
                  Fill Capacity ({currentProduct.unit})
                </label>
                <input
                  type="number"
                  value={batchSize}
                  onChange={(e) => setBatchSize(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-mauve"
                  min="1"
                  placeholder="100"
                />
              </div>

              {/* Fragrance Rate Slider */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-brand-plum mb-2">
                  Fragrance Inclusion Rate
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min={currentProduct.minRate}
                    max={currentProduct.maxRate}
                    step="0.5"
                    value={fragranceRate}
                    onChange={(e) => handleRateChange(parseFloat(e.target.value))}
                    className="w-full h-3 bg-brand-peach rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, ${currentProduct.color} 0%, ${currentProduct.color} ${((fragranceRate - currentProduct.minRate) / (currentProduct.maxRate - currentProduct.minRate)) * 100}%, #FFEDC5 ${((fragranceRate - currentProduct.minRate) / (currentProduct.maxRate - currentProduct.minRate)) * 100}%, #FFEDC5 100%)`
                    }}
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
                  <p className="text-sm text-brand-rose mt-2 font-medium">{currentProduct.note}</p>
                )}
              </div>

              {/* Results */}
              <div className="bg-brand-peach/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-brand-plum mb-4 flex items-center">
                  <Droplet className="h-5 w-5 mr-2" />
                  Calculated Amounts
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded">
                    <span className="text-gray-700">Fragrance Oil Required:</span>
                    <span className="text-xl font-bold text-brand-plum">
                      {fragranceAmount.toFixed(1)} {currentProduct.unit}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded">
                    <span className="text-gray-700">Base/Carrier Required:</span>
                    <span className="text-xl font-bold text-brand-mauve">
                      {baseAmount.toFixed(1)} {currentProduct.unit}
                    </span>
                  </div>
                  <div className="border-t-2 border-brand-peach pt-3 mt-3">
                    <div className="flex justify-between items-center p-3 bg-brand-plum/10 rounded">
                      <span className="text-gray-700 font-medium">Total Fill Capacity:</span>
                      <span className="text-xl font-bold text-brand-plum">
                        {batchSize} {currentProduct.unit}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold text-brand-plum mb-6">Visual Representation</h2>
              <BottleVisualization />
            </div>
          </div>

          {/* Information Box */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
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
          width: 24px;
          height: 24px;
          background: #8B4A8C;
          cursor: pointer;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #8B4A8C;
          cursor: pointer;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default InclusionRatesCalculator;