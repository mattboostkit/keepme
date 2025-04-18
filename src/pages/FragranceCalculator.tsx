import React, { useState, useEffect, useCallback } from 'react'; // Add useCallback
import { Droplets, Percent, Package, AlertTriangle, PoundSterling, Info, Calculator } from 'lucide-react';
import debounce from 'lodash/debounce'; // Import debounce

// Helper function to format currency
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value);
};

// Helper function to format numbers to 2 decimal places
const formatNumber = (value: number): string => {
  return value.toFixed(2);
};
// --- Input Field Component (Moved Outside) ---
const InputField = ({ id, label, value, onChange, placeholder, icon: Icon, unit }: {
  id: string;
  label: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon: React.ElementType;
  unit?: string;
}) => (
  <div>
    <label htmlFor={id} className="flex items-center text-sm font-medium text-gray-700 mb-1">
      <Icon className="w-4 h-4 mr-1 text-[#f4cfd9]" />
      {label} {unit && `(${unit})`}
    </label>
    <input
      type="number" // Change type back to number
      // inputMode="decimal" // Remove inputMode hint
      // Removed duplicate type="text"
      inputMode="decimal" // Keep inputMode hint for mobile
      id={id}
      value={value}
      step="any" // Allow any decimal step
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f4cfd9] focus:border-[#f4cfd9] sm:text-sm"
    />
  </div>
);

// --- Result Card Component (Moved Outside) ---
const ResultCard = ({ title, value, isCurrency = false, isHighlighted = false }: {
  title: string;
  value: number;
  isCurrency?: boolean;
  isHighlighted?: boolean;
}) => (
  <div className={`p-4 rounded-lg ${isHighlighted ? 'bg-[#fdf2f4] border border-[#f4cfd9]' : 'bg-gray-50'}`}>
    <p className="text-sm text-gray-600 mb-1">{title}</p>
    <p className={`text-2xl font-bold ${isHighlighted ? 'text-gray-800' : 'text-gray-900'}`}>
      {isCurrency ? formatCurrency(value) : formatNumber(value)}
    </p>
  </div>
);


function FragranceCalculator() {
// Removed duplicate function definition
  // --- State for Inputs ---
  // State for raw input strings
  const [volumeInput, setVolumeInput] = useState<string>('100');
  const [inclusionRateInput, setInclusionRateInput] = useState<string>('22');
  const [orderQuantityInput, setOrderQuantityInput] = useState<string>('1000');
  const [wastageInput, setWastageInput] = useState<string>('5');
  const [costPerKgInput, setCostPerKgInput] = useState<string>('95');

  // --- State for Outputs ---
  const [mlPerProduct, setMlPerProduct] = useState<number>(0);
  const [totalKgRequired, setTotalKgRequired] = useState<number>(0);
  const [costPerMl, setCostPerMl] = useState<number>(0);
  const [costPerProduct, setCostPerProduct] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [orderQuantityWarning, setOrderQuantityWarning] = useState<string>(''); // State for MOQ warning
  const [showEnquiryForm, setShowEnquiryForm] = useState<boolean>(false); // State for form visibility
  // Removed mailtoLink state
  // --- Calculation Logic ---
  // Define the calculation logic in a memoized callback
  const calculateResults = useCallback(() => {
    // Parse raw input strings
    const numVolume = parseFloat(volumeInput);
    const numInclusionRate = parseFloat(inclusionRateInput);
    const numOrderQuantity = parseInt(orderQuantityInput, 10);
    const numWastage = parseFloat(wastageInput);
    const numCostPerKg = parseFloat(costPerKgInput);

    // Clear previous warning
    setOrderQuantityWarning('');

    // Basic validation for all fields first
    if (isNaN(numVolume) || numVolume <= 0 ||
        isNaN(numInclusionRate) || numInclusionRate < 0 || numInclusionRate > 100 ||
        isNaN(numOrderQuantity) || // Check only for NaN initially
        isNaN(numWastage) || numWastage < 0 ||
        isNaN(numCostPerKg) || numCostPerKg < 0)
    {
      // Reset outputs if any input (except quantity check below) is invalid
      setMlPerProduct(0);
      setTotalKgRequired(0);
      setCostPerMl(0);
      setCostPerProduct(0);
      setTotalCost(0);
      return; // Stop if basic validation fails
    }

    // Minimum Order Quantity Check - Still show warning, but don't reset calculations
    if (numOrderQuantity < 1000) {
      setOrderQuantityWarning('Minimum order quantity is 1000 units.');
      // NOTE: We no longer reset outputs or return here, calculations will proceed.
    }

    // Perform calculations
    const calcMlPerProduct = numVolume * (numInclusionRate / 100);
    const totalMlRequired = (calcMlPerProduct * numOrderQuantity) * (1 + numWastage / 100);
    const calcTotalKgRequired = totalMlRequired / 1000;
    const calcCostPerMl = numCostPerKg / 1000;
    const calcCostPerProduct = calcMlPerProduct * calcCostPerMl;
    const calcTotalCost = calcTotalKgRequired * numCostPerKg;

    // Update state
    setMlPerProduct(calcMlPerProduct);
    setTotalKgRequired(calcTotalKgRequired);
    setCostPerMl(calcCostPerMl);
    setCostPerProduct(calcCostPerProduct);
    setTotalCost(calcTotalCost);

    // Removed mailto link generation logic
  }, [volumeInput, inclusionRateInput, orderQuantityInput, wastageInput, costPerKgInput]); // Dependencies for useCallback

  // Create a debounced version of the calculation function
  const debouncedCalculateResults = useCallback(debounce(calculateResults, 400), [calculateResults]); // 400ms delay

  // useEffect now calls the debounced function
  useEffect(() => {
    debouncedCalculateResults();

    // Cleanup function to cancel the debounce on unmount or dependency change
    return () => {
      debouncedCalculateResults.cancel();
    };
  }, [debouncedCalculateResults]); // Depend on the debounced function instance

  // --- Input Handler ---
  // Update handler to work with string state setters
  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // No validation here for now, just update the raw string state
    setter(value);
  };

  // Component definitions are now outside

  return (
    <div className="pb-16 bg-gray-100 min-h-screen"> {/* Removed pt-28 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28"> {/* Added pt-28 here */}

        {/* Header */}
        <div className="flex items-center justify-center mb-10 text-gray-800">
           <Droplets className="w-8 h-8 mr-2 text-[#f4cfd9]" />
           <h1 className="text-3xl font-bold">Fragrance Calculator</h1>
        </div>

        {/* Calculator Body */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"> {/* Removed mb-10 */}
          {/* Input Parameters */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
              <Calculator className="w-5 h-5 mr-2 text-[#f4cfd9]" /> Input Parameters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Bind inputs to raw string state variables */}
              <InputField id="volume" label="Volume" unit="ml" value={volumeInput} onChange={handleInputChange(setVolumeInput)} placeholder="e.g., 100" icon={Droplets} />
              <InputField id="inclusionRate" label="% Inclusion Rate" unit="%" value={inclusionRateInput} onChange={handleInputChange(setInclusionRateInput)} placeholder="e.g., 22" icon={Percent} />
              {/* Wrap InputField and warning message in a div for proper layout */}
              <div>
                <InputField id="orderQuantity" label="Order Quantity" unit="units" value={orderQuantityInput} onChange={handleInputChange(setOrderQuantityInput)} placeholder="e.g., 1000" icon={Package} />
                {orderQuantityWarning && <p className="text-xs text-red-600 mt-1">{orderQuantityWarning}</p>}
              </div>
              <InputField id="wastage" label="Wastage" unit="%" value={wastageInput} onChange={handleInputChange(setWastageInput)} placeholder="e.g., 5" icon={AlertTriangle} />
              <InputField id="costPerKg" label="Cost per kg" unit="£" value={costPerKgInput} onChange={handleInputChange(setCostPerKgInput)} placeholder="e.g., 95" icon={PoundSterling} />
            </div>
          </div>

          {/* Calculation Results */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2 text-[#f4cfd9]" /> Calculation Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <ResultCard title="ml per Product" value={mlPerProduct} />
              <ResultCard title="Total kg Required" value={totalKgRequired} />
              <ResultCard title="Cost per ml" value={costPerMl} isCurrency />
              <ResultCard title="Cost per Product" value={costPerProduct} isCurrency />
              <ResultCard title="Total Cost" value={totalCost} isCurrency isHighlighted />
            </div>
          </div>
        </div> {/* End of Calculator Body div */}

        {/* Toggle Enquiry Form Button - Moved outside calculator body div */}
        <div className="flex justify-center my-8"> {/* Added vertical margin */}
           <button
             type="button"
             onClick={() => setShowEnquiryForm(!showEnquiryForm)}
             className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-pink hover:bg-[#ebbdc7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f4cfd9] disabled:opacity-50 disabled:cursor-not-allowed"
             disabled={!totalCost} // Disable if no valid calculation
           >
             {showEnquiryForm ? 'Hide Enquiry Form' : 'Request Quote / Add Details'}
           </button>
        </div>

        {/* Conditionally Render Enquiry Form */}
        {showEnquiryForm && (
          <EnquiryForm
            inputs={{ volumeInput, inclusionRateInput, orderQuantityInput, wastageInput, costPerKgInput }}
            outputs={{ mlPerProduct, totalKgRequired, costPerMl, costPerProduct, totalCost }}
          />
        )}

        {/* How to Use Section */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">How to Use This Calculator</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
            <li><strong>Volume (ml):</strong> The total volume of the product in millilitres.</li>
            <li><strong>Inclusion Rate (%):</strong> The percentage of fragrance to be included in the product.</li>
            <li><strong>Order Quantity (units):</strong> The number of products you plan to produce.</li>
            <li><strong>Wastage (%):</strong> The estimated percentage of material that might be wasted during production.</li>
            <li><strong>Cost per kg (£):</strong> Your custom price per kilogram of fragrance.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            The calculator will automatically update all values based on your inputs, showing you the cost per millilitre, cost per product, and total cost for your order.
          </p>
        </div>

        {/* Simple Footer */}
        <footer className="text-center mt-10 text-xs text-gray-500">
          © {new Date().getFullYear()} Fragrance Calculator. All rights reserved.
        </footer>
      </div>
    </div>
  );
} // Closing brace for the main FragranceCalculator function


// --- Enquiry Form Component ---
interface EnquiryFormProps {
  inputs: {
    volumeInput: string;
    inclusionRateInput: string;
    orderQuantityInput: string;
    wastageInput: string;
    costPerKgInput: string;
  };
  outputs: {
    mlPerProduct: number;
    totalKgRequired: number;
    costPerMl: number;
    costPerProduct: number;
    totalCost: number;
  };
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ inputs, outputs }) => {
  // Dummy state for form fields
  const [fragranceName, setFragranceName] = useState('');
  const [notesDescription, setNotesDescription] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual submission logic (e.g., API call)
    alert('Enquiry Submitted (Placeholder)\n\nData:\n' + JSON.stringify({
      inputs,
      outputs: { // Format outputs for display
        mlPerProduct: formatNumber(outputs.mlPerProduct),
        totalKgRequired: formatNumber(outputs.totalKgRequired),
        costPerMl: formatCurrency(outputs.costPerMl),
        costPerProduct: formatCurrency(outputs.costPerProduct),
        totalCost: formatCurrency(outputs.totalCost),
      },
      enquiryDetails: {
        fragranceName,
        notesDescription,
        targetAudience,
        additionalInfo,
        contactName,
        contactEmail,
      }
    }, null, 2));
     // Optionally hide form after submission: setShowEnquiryForm(false);
  };

  return (
    <div className="mt-10 bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-[#fdf2f4]">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Enquiry Details</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Display Calculation Summary (Readonly) */}
        <details className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
           <summary className="text-sm font-medium text-gray-700 cursor-pointer hover:text-[#f4cfd9]">Show Calculation Summary</summary>
           <div className="mt-3 text-xs space-y-1 text-gray-600">
             <p>Volume: {inputs.volumeInput} ml</p>
             <p>Inclusion Rate: {inputs.inclusionRateInput}%</p>
             <p>Order Quantity: {inputs.orderQuantityInput} units</p>
             <p>Wastage: {inputs.wastageInput}%</p>
             <p>Cost/kg: {formatCurrency(parseFloat(inputs.costPerKgInput || '0'))}</p>
             <hr className="my-2"/>
             <p>Total Cost: <strong>{formatCurrency(outputs.totalCost)}</strong></p>
           </div>
        </details>

        {/* Dummy Enquiry Fields */}
        <div>
          <label htmlFor="fragranceName" className="block text-sm font-medium text-gray-700">Fragrance Name (Optional)</label>
          <input type="text" id="fragranceName" value={fragranceName} onChange={(e) => setFragranceName(e.target.value)} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f4cfd9] focus:border-[#f4cfd9] sm:text-sm" />
        </div>
        <div>
          <label htmlFor="notesDescription" className="block text-sm font-medium text-gray-700">Notes Description / Concept</label>
          <textarea id="notesDescription" value={notesDescription} onChange={(e) => setNotesDescription(e.target.value)} rows={3} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f4cfd9] focus:border-[#f4cfd9] sm:text-sm" placeholder="e.g., Woody base, floral heart, citrus top notes..."></textarea>
        </div>
         <div>
          <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">Target Audience (Optional)</label>
          <input type="text" id="targetAudience" value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f4cfd9] focus:border-[#f4cfd9] sm:text-sm" placeholder="e.g., Young professionals, luxury market..." />
        </div>
         <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional Information</label>
          <textarea id="additionalInfo" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} rows={3} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f4cfd9] focus:border-[#f4cfd9] sm:text-sm" placeholder="Any specific requirements, packaging ideas, etc."></textarea>
        </div>
         <hr className="my-4"/>
         <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Your Name *</label>
          <input type="text" id="contactName" value={contactName} onChange={(e) => setContactName(e.target.value)} required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f4cfd9] focus:border-[#f4cfd9] sm:text-sm" />
        </div>
         <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Your Email *</label>
          <input type="email" id="contactEmail" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f4cfd9] focus:border-[#f4cfd9] sm:text-sm" />
        </div>

        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-pink hover:bg-[#ebbdc7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f4cfd9]"
        >
          Submit Enquiry (Placeholder)
        </button>
      </form>
    </div>
  );
};


export default FragranceCalculator; // Ensure export is at the top level