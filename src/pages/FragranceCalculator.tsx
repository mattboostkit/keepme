import React, { useState, useEffect, useCallback } from 'react'; // Add useCallback
import { Droplets, Percent, Package, AlertTriangle, PoundSterling, Info, Calculator } from 'lucide-react';
import debounce from 'lodash/debounce'; // Import debounce
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { RECAPTCHA_ACTION } from '../config/recaptcha';
import RecaptchaWrapper from '../components/RecaptchaWrapper';


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
    <label htmlFor={id} className="flex items-center text-sm font-medium text-brand-mauve mb-1">
      <Icon className="w-4 h-4 mr-1 text-brand-peach" />
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
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-mauve focus:border-brand-mauve sm:text-sm"
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
  <div className={`p-4 rounded-lg ${isHighlighted ? 'bg-brand-pink-light border border-brand-peach' : 'bg-brand-plum/10'}`}>
    <p className="text-sm text-brand-plum mb-1">{title}</p>
    <p className={`text-2xl font-bold ${isHighlighted ? 'text-brand-plum' : 'text-brand-plum'}`}>
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
  
  // --- State for Enquiry Form ---
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
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
  const debouncedCalculateResults = useCallback(
    debounce(() => calculateResults(), 400),
    [calculateResults]
  ); // 400ms delay

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
    <section className="bg-gradient-to-br from-brand-peach to-brand-pink-light min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back to Tools Button */}
        <div className="mb-4">
          <a href="/tools" className="inline-flex items-center px-5 py-2 bg-brand-mauve text-white rounded-full hover:bg-brand-rose transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Tools
          </a>
        </div>

        {/* Header */}
        <div className="flex items-center justify-center mb-10 text-gray-800">
           <Droplets className="w-8 h-8 mr-2 text-brand-rose" />
           <h1 className="text-3xl font-bold text-brand-plum">Fragrance Calculator</h1>
        </div>

        {/* Calculator Body */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"> {/* Removed mb-10 */}
          {/* Input Parameters */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-brand-plum mb-4 flex items-center">
              <Calculator className="w-5 h-5 mr-2 text-brand-peach" /> Input Parameters
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
            <h2 className="text-lg font-semibold text-brand-plum mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2 text-brand-peach" /> Calculation Results
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
             onClick={() => {
               setShowEnquiryForm(!showEnquiryForm);
             }}
             className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-brand-mauve hover:bg-brand-rose transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
             disabled={!totalCost} // Disable if no valid calculation
           >
             {showEnquiryForm ? 'Hide Enquiry Form' : 'Get Quote - Auto-fill Calculator Results'}
           </button>
        </div>

        {/* Conditionally Render Enquiry Form */}
        {showEnquiryForm && (
          <EnquiryForm
            inputs={{ volumeInput, inclusionRateInput, orderQuantityInput, wastageInput, costPerKgInput }}
            outputs={{ mlPerProduct, totalKgRequired, costPerMl, costPerProduct, totalCost }}
            additionalInfo={additionalInfo}
            setAdditionalInfo={setAdditionalInfo}
            contactName={contactName}
            setContactName={setContactName}
            contactEmail={contactEmail}
            setContactEmail={setContactEmail}
            setShowEnquiryForm={setShowEnquiryForm}
          />
        )}

        {/* How to Use Section */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-brand-plum mb-4">How to Use This Calculator</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-brand-mauve">
            <li><strong>Volume (ml):</strong> The total volume of the product in millilitres.</li>
            <li><strong>Inclusion Rate (%):</strong> The percentage of fragrance to be included in the product.</li>
            <li><strong>Order Quantity (units):</strong> The number of products you plan to produce.</li>
            <li><strong>Wastage (%):</strong> The estimated percentage of material that might be wasted during production.</li>
            <li><strong>Cost per kg (£):</strong> Your custom price per kilogram of fragrance.</li>
          </ul>
          <p className="mt-4 text-sm text-brand-mauve">
            The calculator will automatically update all values based on your inputs, showing you the cost per millilitre, cost per product, and total cost for your order.
          </p>
        </div>

        {/* Simple Footer */}
        <footer className="text-center mt-10 text-xs text-gray-700">
          {new Date().getFullYear()} Fragrance Calculator. All rights reserved.
        </footer>
      </div>
    </section>
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

  additionalInfo: string;
  setAdditionalInfo: (value: string) => void;
  contactName: string;
  setContactName: (value: string) => void;
  contactEmail: string;
  setContactEmail: (value: string) => void;
  setShowEnquiryForm: (value: boolean) => void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ 
  inputs, 
  outputs,

  additionalInfo,
  setAdditionalInfo,
  contactName,
  setContactName,
  contactEmail,
  setContactEmail,
  setShowEnquiryForm
}) => {
  // Hook for reCAPTCHA v3
  const { executeRecaptcha } = useGoogleReCaptcha();
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'copied'>('idle');
  const [recaptchaError, setRecaptchaError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!contactName.trim() || !contactEmail.trim()) {
      setSubmitStatus('error');
      return;
    }

    // Check if reCAPTCHA is available
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setRecaptchaError('');

    // Execute reCAPTCHA v3
    let recaptchaToken = '';
    try {
      recaptchaToken = await executeRecaptcha(RECAPTCHA_ACTION.FRAGRANCE_CALCULATOR);
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      setRecaptchaError('Unable to verify reCAPTCHA. Please try again.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // Validate reCAPTCHA token with Netlify Function
    try {
      const validationResponse = await fetch('/.netlify/functions/validate-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: recaptchaToken,
          action: RECAPTCHA_ACTION.FRAGRANCE_CALCULATOR
        })
      });

      const validationResult = await validationResponse.json();

      if (!validationResult.success) {
        console.error('reCAPTCHA validation failed:', validationResult);
        
        // Provide user-friendly error messages
        if (validationResult.score !== undefined && validationResult.score < 0.5) {
          setRecaptchaError('Your submission was flagged as potentially automated. Please try again or contact us directly.');
        } else {
          setRecaptchaError('Security verification failed. Please refresh the page and try again.');
        }
        
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      // Log successful validation (can be removed in production)
      console.log('reCAPTCHA validation successful:', {
        score: validationResult.score,
        action: validationResult.action
      });

    } catch (error) {
      console.error('Error validating reCAPTCHA:', error);
      // Continue with form submission even if validation fails (graceful degradation)
      console.warn('reCAPTCHA validation error - continuing with form submission');
    }

    // Prepare comprehensive data for submission
    const calculatorSummary = `
CALCULATION INPUTS:
• Volume: ${inputs.volumeInput} ml
• Inclusion Rate: ${inputs.inclusionRateInput}%
• Order Quantity: ${inputs.orderQuantityInput} units
• Wastage: ${inputs.wastageInput}%
• Cost per kg: £${inputs.costPerKgInput}

CALCULATED RESULTS:
• ml per Product: ${formatNumber(outputs.mlPerProduct)}
• Total kg Required: ${formatNumber(outputs.totalKgRequired)}
• Cost per ml: ${formatCurrency(outputs.costPerMl)}
• Cost per Product: ${formatCurrency(outputs.costPerProduct)}
• TOTAL COST: ${formatCurrency(outputs.totalCost)}

PROJECT DETAILS:
${additionalInfo}
    `.trim();

    // Prepare form data for Netlify Forms
    const formData = new URLSearchParams();
    formData.append('form-name', 'fragrance-calculator');
    formData.append('name', contactName);
    formData.append('email', contactEmail);
    formData.append('subject', 'Fragrance Calculator Quote Request');
    formData.append('message', calculatorSummary);
    formData.append('volume_ml', inputs.volumeInput);
    formData.append('inclusion_rate', inputs.inclusionRateInput);
    formData.append('order_quantity', inputs.orderQuantityInput);
    formData.append('total_cost', formatCurrency(outputs.totalCost));
    formData.append('g-recaptcha-response', recaptchaToken); // Add reCAPTCHA token
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString()
      });

      if (response.ok) {
        // Success! Show success message
        setSubmitStatus('success');
        
        // Keep the success message visible for longer
        setTimeout(() => {
          setAdditionalInfo('');
          setContactName('');
          setContactEmail('');
          setSubmitStatus('idle');
          setShowEnquiryForm(false); // Hide the form
        }, 5000); // Show success message for 5 seconds
      } else {
        // If submission fails, show error
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="mt-10 bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-brand-plum/20">
      <h3 className="text-xl font-semibold text-brand-plum mb-6">Quote Request - Calculator Results Auto-Filled</h3>
      <form name="fragrance-calculator" method="POST" onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="form-name" value="fragrance-calculator" />
        
        {/* Auto-filled Calculation Results (Read-only display) */}
        <div className="bg-brand-peach/20 p-4 rounded-md border border-brand-peach">
          <h4 className="text-sm font-medium text-brand-plum mb-3">📊 Your Calculation Results</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong>Volume:</strong> {inputs.volumeInput} ml</div>
            <div><strong>Inclusion Rate:</strong> {inputs.inclusionRateInput}%</div>
            <div><strong>Order Quantity:</strong> {inputs.orderQuantityInput} units</div>
            <div><strong>Wastage:</strong> {inputs.wastageInput}%</div>
            <div><strong>Cost per kg:</strong> £{inputs.costPerKgInput}</div>
            <div className="md:col-span-2 pt-2 border-t border-brand-peach">
              <strong className="text-brand-plum">Total Cost: {formatCurrency(outputs.totalCost)}</strong>
            </div>
          </div>
        </div>

        {/* Auto-filled Additional Information */}
        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-brand-mauve">
            Project Details
            <button
              type="button"
              onClick={() => {
                const calculatorResults = `Based on fragrance calculator results:
• Volume: ${inputs.volumeInput} ml
• Inclusion Rate: ${inputs.inclusionRateInput}%
• Order Quantity: ${inputs.orderQuantityInput} units
• Wastage: ${inputs.wastageInput}%
• Cost per kg: £${inputs.costPerKgInput}

Calculated Results:
• ml per Product: ${formatNumber(outputs.mlPerProduct)}
• Total kg Required: ${formatNumber(outputs.totalKgRequired)}
• Cost per ml: ${formatCurrency(outputs.costPerMl)}
• Cost per Product: ${formatCurrency(outputs.costPerProduct)}
• Total Cost: ${formatCurrency(outputs.totalCost)}

Additional notes:
`;
                setAdditionalInfo(calculatorResults);
              }}
              className="ml-3 inline-flex items-center px-3 py-1 border border-brand-mauve text-xs font-medium rounded-full text-brand-mauve hover:bg-brand-mauve hover:text-white transition-colors"
            >
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Update with Calculator Results
            </button>
          </label>
          <textarea 
            id="additionalInfo" 
            value={additionalInfo} 
            onChange={(e) => setAdditionalInfo(e.target.value)} 
            rows={10} 
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-mauve focus:border-brand-mauve sm:text-sm bg-gray-50"
            placeholder="Click 'Update with Calculator Results' to populate this field, then add any additional project details..."
          />
          <p className="text-xs text-gray-700 mt-1">Click the button above to populate with calculator results, then add any additional project details</p>
        </div>

        {/* Simple Contact Fields */}
        <div className="bg-white p-4 rounded-md border border-gray-200">
          <h4 className="text-sm font-medium text-brand-plum mb-3">👤 Your Contact Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-brand-mauve">Your Name *</label>
              <input type="text" id="contactName" value={contactName} onChange={(e) => setContactName(e.target.value)} required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-mauve focus:border-brand-mauve sm:text-sm" placeholder="Enter your full name" />
            </div>
            <div>
              <label htmlFor="contactEmail" className="block text-sm font-medium text-brand-mauve">Your Email *</label>
              <input type="email" id="contactEmail" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-mauve focus:border-brand-mauve sm:text-sm" placeholder="Enter your email address" />
            </div>
          </div>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800 text-sm font-medium">
              ✓ Thanks for submitting the form! Your fragrance calculator results and enquiry have been sent to our team. We'll be in touch with you soon.
            </p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-800 text-sm font-medium">
              ✗ {recaptchaError || 'There was an error submitting your enquiry. Please ensure all required fields are filled in and try again.'}
            </p>
          </div>
        )}

        {/* Optional: reCAPTCHA branding text (only needed if badge is hidden) */}
        {/* Uncomment the following if you hide the reCAPTCHA badge in CSS */}
        {/* 
        <div className="text-xs text-gray-500 text-center mb-4">
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
            Terms of Service
          </a>{' '}
          apply.
        </div>
        */}

        <button
          type="submit"
          disabled={isSubmitting || !contactName.trim() || !contactEmail.trim()}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-brand-mauve hover:bg-brand-rose transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed w-full"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting Enquiry...
            </>
          ) : (
            'Submit Enquiry'
          )}
        </button>
      </form>
    </div>
  );
};


// Wrap the component with RecaptchaWrapper to load reCAPTCHA only on this page
const FragranceCalculatorWithRecaptcha = () => (
  <RecaptchaWrapper>
    <FragranceCalculator />
  </RecaptchaWrapper>
);

export default FragranceCalculatorWithRecaptcha; // Export wrapped component