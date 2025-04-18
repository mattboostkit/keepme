// React import removed - not needed in modern React
import { useState } from 'react';
import { Truck, Info, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function FreightCalculator() {
  // State for form inputs
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [dimensions, setDimensions] = useState({ length: '', width: '', height: '' });
  const [packageType, setPackageType] = useState('box');
  const [shippingMethod, setShippingMethod] = useState('standard');
  
  // State for calculation results
  const [calculationResult, setCalculationResult] = useState<null | {
    cost: number;
    estimatedDays: string;
    distance: string;
  }>(null);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a placeholder calculation - replace with your actual calculation logic
    // For now, we'll just show a dummy result
    setCalculationResult({
      cost: 149.99,
      estimatedDays: '3-5',
      distance: '1,245 km',
    });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-[#fffded] to-[#eed9b2]">
        <div className="container mx-auto px-6">
          <Link to="/tools" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tools
          </Link>
          <div className="flex items-center mb-6">
            <div className="bg-[#f4cfd9]/20 p-3 rounded-full mr-4">
              <Truck className="h-6 w-6 text-[#f4cfd9]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Freight <span className="text-[#f4cfd9]">Calculator</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            Calculate shipping costs and delivery times for your fragrance products to destinations worldwide.
            This tool provides estimates based on current shipping rates and typical transit times.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Column */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>
                
                <form onSubmit={handleSubmit}>
                  {/* Origin & Destination */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-1">
                        Origin Country
                      </label>
                      <select
                        id="origin"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#f4cfd9] focus:border-[#f4cfd9]"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required
                      >
                        <option value="">Select country</option>
                        <option value="UK">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        {/* Add more countries as needed */}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                        Destination Country
                      </label>
                      <select
                        id="destination"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#f4cfd9] focus:border-[#f4cfd9]"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                      >
                        <option value="">Select country</option>
                        <option value="UK">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        {/* Add more countries as needed */}
                      </select>
                    </div>
                  </div>

                  {/* Package Type */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Package Type
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <div
                        className={`border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                          packageType === 'box' ? 'bg-[#f4cfd9]/20 border-[#f4cfd9]' : 'border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => setPackageType('box')}
                      >
                        <div className="flex justify-center mb-2">📦</div>
                        <div className="text-sm font-medium">Box</div>
                      </div>
                      <div
                        className={`border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                          packageType === 'pallet' ? 'bg-[#f4cfd9]/20 border-[#f4cfd9]' : 'border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => setPackageType('pallet')}
                      >
                        <div className="flex justify-center mb-2">🔢</div>
                        <div className="text-sm font-medium">Pallet</div>
                      </div>
                      <div
                        className={`border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                          packageType === 'envelope' ? 'bg-[#f4cfd9]/20 border-[#f4cfd9]' : 'border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => setPackageType('envelope')}
                      >
                        <div className="flex justify-center mb-2">✉️</div>
                        <div className="text-sm font-medium">Envelope</div>
                      </div>
                    </div>
                  </div>

                  {/* Weight */}
                  <div className="mb-6">
                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      id="weight"
                      min="0.1"
                      step="0.1"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#f4cfd9] focus:border-[#f4cfd9]"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                    />
                  </div>

                  {/* Dimensions */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Dimensions (cm)
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <input
                          type="number"
                          min="1"
                          placeholder="Length"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#f4cfd9] focus:border-[#f4cfd9]"
                          value={dimensions.length}
                          onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          min="1"
                          placeholder="Width"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#f4cfd9] focus:border-[#f4cfd9]"
                          value={dimensions.width}
                          onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          min="1"
                          placeholder="Height"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#f4cfd9] focus:border-[#f4cfd9]"
                          value={dimensions.height}
                          onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Method */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Shipping Method
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <div
                        className={`border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                          shippingMethod === 'standard' ? 'bg-[#f4cfd9]/20 border-[#f4cfd9]' : 'border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => setShippingMethod('standard')}
                      >
                        <div className="text-sm font-medium">Standard</div>
                        <div className="text-xs text-gray-500">5-7 days</div>
                      </div>
                      <div
                        className={`border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                          shippingMethod === 'express' ? 'bg-[#f4cfd9]/20 border-[#f4cfd9]' : 'border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => setShippingMethod('express')}
                      >
                        <div className="text-sm font-medium">Express</div>
                        <div className="text-xs text-gray-500">2-3 days</div>
                      </div>
                      <div
                        className={`border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                          shippingMethod === 'priority' ? 'bg-[#f4cfd9]/20 border-[#f4cfd9]' : 'border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => setShippingMethod('priority')}
                      >
                        <div className="text-sm font-medium">Priority</div>
                        <div className="text-xs text-gray-500">1-2 days</div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#f4cfd9] text-gray-800 py-3 px-6 rounded-lg hover:bg-[#ebbdc7] transition-colors font-medium"
                  >
                    Calculate Shipping
                  </button>
                </form>
              </div>
            </div>

            {/* Results Column */}
            <div>
              {calculationResult ? (
                <div className="bg-white p-8 rounded-2xl shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Shipping Estimate</h2>
                  
                  <div className="mb-8">
                    <div className="flex justify-between items-center p-4 bg-[#f4cfd9]/10 rounded-lg mb-4">
                      <div className="text-lg font-medium">Shipping Cost</div>
                      <div className="text-2xl font-bold">£{calculationResult.cost.toFixed(2)}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-500 mb-1">Estimated Delivery</div>
                        <div className="font-medium">{calculationResult.estimatedDays} business days</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-500 mb-1">Distance</div>
                        <div className="font-medium">{calculationResult.distance}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="font-bold mb-3">Shipping Details</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div className="text-gray-500">Origin:</div>
                      <div>{origin}</div>
                      <div className="text-gray-500">Destination:</div>
                      <div>{destination}</div>
                      <div className="text-gray-500">Package Type:</div>
                      <div className="capitalize">{packageType}</div>
                      <div className="text-gray-500">Weight:</div>
                      <div>{weight} kg</div>
                      <div className="text-gray-500">Dimensions:</div>
                      <div>{dimensions.length} × {dimensions.width} × {dimensions.height} cm</div>
                      <div className="text-gray-500">Shipping Method:</div>
                      <div className="capitalize">{shippingMethod}</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={() => setCalculationResult(null)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Recalculate
                    </button>
                    <button className="bg-[#f4cfd9] text-gray-800 py-2 px-4 rounded-lg hover:bg-[#ebbdc7] transition-colors font-medium">
                      Get Quote
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-2xl shadow-md h-full flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <div className="bg-[#f4cfd9]/20 p-4 rounded-full inline-flex justify-center items-center mb-4">
                      <Truck className="h-8 w-8 text-[#f4cfd9]" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Shipping Calculator</h2>
                    <p className="text-gray-600">
                      Fill in the shipping details to get an estimate of costs and delivery times.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Info className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-blue-700">
                          This calculator provides estimates only. Actual shipping costs and delivery times may vary.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-sm text-gray-600">
                    <div className="flex items-start">
                      <div className="bg-gray-100 rounded-full p-1 mr-3 mt-0.5">
                        <div className="w-4 h-4 flex items-center justify-center text-gray-500 font-bold text-xs">1</div>
                      </div>
                      <p>Enter the origin and destination countries for your shipment</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gray-100 rounded-full p-1 mr-3 mt-0.5">
                        <div className="w-4 h-4 flex items-center justify-center text-gray-500 font-bold text-xs">2</div>
                      </div>
                      <p>Specify the package type, weight, and dimensions</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gray-100 rounded-full p-1 mr-3 mt-0.5">
                        <div className="w-4 h-4 flex items-center justify-center text-gray-500 font-bold text-xs">3</div>
                      </div>
                      <p>Select your preferred shipping method</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gray-100 rounded-full p-1 mr-3 mt-0.5">
                        <div className="w-4 h-4 flex items-center justify-center text-gray-500 font-bold text-xs">4</div>
                      </div>
                      <p>Click "Calculate Shipping" to see your estimate</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">How accurate are the shipping estimates?</h3>
              <p className="text-gray-600">
                Our shipping estimates are based on current carrier rates and typical transit times. 
                Actual costs and delivery times may vary based on factors such as customs processing, 
                weather conditions, and carrier delays.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">Which shipping carriers do you use?</h3>
              <p className="text-gray-600">
                We work with a variety of trusted shipping carriers including DHL, FedEx, UPS, and local 
                postal services depending on the destination and shipping method selected.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you offer shipping insurance?</h3>
              <p className="text-gray-600">
                Yes, shipping insurance is available for an additional fee. This covers loss or damage 
                during transit. The insurance cost is not included in the basic shipping estimate.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">How do I track my shipment?</h3>
              <p className="text-gray-600">
                Once your order is shipped, you'll receive a tracking number via email. You can use this 
                number to track your package on our website or directly on the carrier's website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#f4cfd9]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Shipping Solution?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            For bulk shipments, specialized handling, or custom logistics solutions, 
            our team is ready to help create a tailored shipping plan for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-gray-800 py-3 px-8 rounded-full hover:bg-gray-100 transition-colors font-medium"
          >
            Contact Our Shipping Team
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FreightCalculator;
