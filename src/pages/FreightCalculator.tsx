// React import removed - not needed in modern React
import { useState } from 'react';
import { Truck, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

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

    // Validate inputs
    if (!origin || !destination || !weight || !dimensions.length || !dimensions.width || !dimensions.height) {
      alert('Please fill in all required fields');
      return;
    }

    // Calculate volumetric weight
    const volumetricWeight = (parseFloat(dimensions.length) * parseFloat(dimensions.width) * parseFloat(dimensions.height)) / 5000;
    const chargeableWeight = Math.max(parseFloat(weight), volumetricWeight);

    // Basic calculation logic (placeholder rates)
    const baseRate = shippingMethod === 'express' ? 25 : 15;
    const distanceMultiplier = origin === destination ? 0.5 : 1.5;
    const typeMultiplier = packageType === 'pallet' ? 2 : packageType === 'envelope' ? 0.5 : 1;
    
    const cost = Math.round(baseRate * chargeableWeight * distanceMultiplier * typeMultiplier * 100) / 100;
    const days = shippingMethod === 'express' ? '1-3' : '3-7';

    setCalculationResult({
      cost,
      estimatedDays: days,
      distance: origin === destination ? '0 km' : '1,245 km',
    });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-brand-background">
        <div className="container mx-auto px-6">
          <BackButton to="/tools" label="Back to Tools" />
          <div className="flex items-center mb-6">
            <div className="bg-brand-pink-light p-3 rounded-full mr-4">
              <Truck className="h-6 w-6 text-brand-peach" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum">
              Freight <span className="text-brand-mauve">Calculator</span>
            </h1>
          </div>
          <p className="text-lg text-brand-mauve max-w-3xl">
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
                <h2 className="text-2xl font-bold mb-6 text-brand-plum">Shipping Details</h2>

                <form onSubmit={handleSubmit}>
                  {/* Origin & Destination */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="origin" className="block text-sm font-medium text-brand-mauve mb-1">
                        Origin Country
                      </label>
                      <select
                        id="origin"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-rose focus:border-brand-rose"
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
                      <label htmlFor="destination" className="block text-sm font-medium text-brand-mauve mb-1">
                        Destination Country
                      </label>
                      <select
                        id="destination"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-rose focus:border-brand-rose"
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
                    <label className="block text-sm font-medium text-brand-mauve mb-1">
                      Package Type
                    </label>
                    <div className="grid grid-cols-3 gap-4" role="radiogroup" aria-label="Package Type">
                      <label
                        className={`border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                          packageType === 'box' ? 'bg-brand-pink-light border-brand-peach' : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="packageType"
                          value="box"
                          checked={packageType === 'box'}
                          onChange={(e) => setPackageType(e.target.value)}
                          className="sr-only"
                        />
                        <div className="flex justify-center mb-2">📦</div>
                        <div className="text-sm font-medium">Box</div>
                      </label>
                      <label
                        className={`border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                          packageType === 'pallet' ? 'bg-brand-pink-light border-brand-peach' : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="packageType"
                          value="pallet"
                          checked={packageType === 'pallet'}
                          onChange={(e) => setPackageType(e.target.value)}
                          className="sr-only"
                        />
                        <div className="flex justify-center mb-2">🔢</div>
                        <div className="text-sm font-medium">Pallet</div>
                      </label>
                      <label
                        className={`border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                          packageType === 'envelope' ? 'bg-brand-pink-light border-brand-peach' : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="packageType"
                          value="envelope"
                          checked={packageType === 'envelope'}
                          onChange={(e) => setPackageType(e.target.value)}
                          className="sr-only"
                        />
                        <div className="flex justify-center mb-2">✉️</div>
                        <div className="text-sm font-medium">Envelope</div>
                      </label>
                    </div>
                  </div>

                  {/* Weight */}
                  <div className="mb-6">
                    <label htmlFor="weight" className="block text-sm font-medium text-brand-mauve mb-1">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      id="weight"
                      min="0.1"
                      step="0.1"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-rose focus:border-brand-rose"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                    />
                  </div>

                  {/* Dimensions */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-brand-mauve mb-1">
                      Dimensions (cm)
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <input
                          type="number"
                          min="1"
                          placeholder="Length"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-rose focus:border-brand-rose"
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
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-rose focus:border-brand-rose"
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
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-rose focus:border-brand-rose"
                          value={dimensions.height}
                          onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Method */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-brand-mauve mb-1">
                      Shipping Method
                    </label>
                    <div className="grid grid-cols-3 gap-4" role="radiogroup" aria-label="Shipping Method">
                      <label
                        className={`border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                          shippingMethod === 'standard' ? 'bg-brand-pink-light border-brand-peach' : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="standard"
                          checked={shippingMethod === 'standard'}
                          onChange={(e) => setShippingMethod(e.target.value)}
                          className="sr-only"
                        />
                        <div className="text-sm font-medium">Standard</div>
                        <div className="text-xs text-gray-700">3-7 days</div>
                      </label>
                      <label
                        className={`border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                          shippingMethod === 'express' ? 'bg-brand-pink-light border-brand-peach' : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="express"
                          checked={shippingMethod === 'express'}
                          onChange={(e) => setShippingMethod(e.target.value)}
                          className="sr-only"
                        />
                        <div className="text-sm font-medium">Express</div>
                        <div className="text-xs text-gray-700">1-3 days</div>
                      </label>
                      <label
                        className={`border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                          shippingMethod === 'priority' ? 'bg-brand-pink-light border-brand-peach' : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="priority"
                          checked={shippingMethod === 'priority'}
                          onChange={(e) => setShippingMethod(e.target.value)}
                          className="sr-only"
                        />
                        <div className="text-sm font-medium">Priority</div>
                        <div className="text-xs text-gray-700">Next day</div>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-brand-mauve text-white py-3 px-6 rounded-full hover:bg-brand-rose transition-colors font-medium"
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
                  <h2 className="text-2xl font-bold mb-6 text-brand-plum">Shipping Estimate</h2>

                  <div className="mb-8">
                    <div className="flex justify-between items-center p-4 bg-brand-pink-light rounded-lg mb-4">
                      <div className="text-lg font-medium">Shipping Cost</div>
                      <div className="text-2xl font-bold">£{calculationResult.cost.toFixed(2)}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-brand-mauve mb-1">Estimated Delivery</div>
                        <div className="font-medium">{calculationResult.estimatedDays} business days</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-brand-mauve mb-1">Distance</div>
                        <div className="font-medium">{calculationResult.distance}</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold mb-3">Shipping Details</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div className="text-brand-mauve">Origin:</div>
                      <div>{origin}</div>
                      <div className="text-brand-mauve">Destination:</div>
                      <div>{destination}</div>
                      <div className="text-brand-mauve">Package Type:</div>
                      <div className="capitalize">{packageType}</div>
                      <div className="text-brand-mauve">Weight:</div>
                      <div>{weight} kg</div>
                      <div className="text-brand-mauve">Dimensions:</div>
                      <div>{dimensions.length} × {dimensions.width} × {dimensions.height} cm</div>
                      <div className="text-brand-mauve">Shipping Method:</div>
                      <div className="capitalize">{shippingMethod}</div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={() => setCalculationResult(null)}
                      className="text-brand-mauve hover:text-brand-plum transition-colors"
                    >
                      Recalculate
                    </button>
                    <button className="bg-brand-mauve text-white py-2 px-4 rounded-full hover:bg-brand-rose transition-colors font-medium">
                      Get Quote
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-2xl shadow-md h-full flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <div className="bg-brand-pink-light p-4 rounded-full inline-flex justify-center items-center mb-4">
                      <Truck className="h-8 w-8 text-brand-peach" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-brand-plum">Shipping Calculator</h2>
                    <p className="text-brand-mauve">
                      Fill in the shipping details to get an estimate of costs and delivery times.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Info className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-blue-900">
                          This calculator provides estimates only. Actual shipping costs and delivery times may vary.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-brand-mauve">
                    <div className="flex items-start">
                      <div className="bg-gray-100 rounded-full p-1 mr-3 mt-0.5">
                        <div className="w-4 h-4 flex items-center justify-center text-gray-700 font-bold text-xs">1</div>
                      </div>
                      <p>Enter the origin and destination countries for your shipment</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gray-100 rounded-full p-1 mr-3 mt-0.5">
                        <div className="w-4 h-4 flex items-center justify-center text-gray-700 font-bold text-xs">2</div>
                      </div>
                      <p>Specify the package type, weight, and dimensions</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gray-100 rounded-full p-1 mr-3 mt-0.5">
                        <div className="w-4 h-4 flex items-center justify-center text-gray-700 font-bold text-xs">3</div>
                      </div>
                      <p>Select your preferred shipping method</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gray-100 rounded-full p-1 mr-3 mt-0.5">
                        <div className="w-4 h-4 flex items-center justify-center text-gray-700 font-bold text-xs">4</div>
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
              <p className="text-brand-mauve">
                Our shipping estimates are based on current carrier rates and typical transit times.
                Actual costs and delivery times may vary based on factors such as customs processing,
                weather conditions, and carrier delays.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">Which shipping carriers do you use?</h3>
              <p className="text-brand-mauve">
                We work with a variety of trusted shipping carriers including DHL, FedEx, UPS, and local
                postal services depending on the destination and shipping method selected.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you offer shipping insurance?</h3>
              <p className="text-brand-mauve">
                Yes, shipping insurance is available for an additional fee. This covers loss or damage
                during transit. The insurance cost is not included in the basic shipping estimate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">How do I track my shipment?</h3>
              <p className="text-brand-mauve">
                Once your order is shipped, you'll receive a tracking number via email. You can use this
                number to track your package on our website or directly on the carrier's website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-brand-peach">
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
