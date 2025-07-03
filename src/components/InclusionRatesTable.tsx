import React from 'react';
import { Info } from 'lucide-react';

interface InclusionRate {
  application: string;
  dosage: string;
  note?: string;
}

const InclusionRatesTable: React.FC = () => {
  const inclusionRates: InclusionRate[] = [
    { application: 'EDP (Eau de Parfum)', dosage: '20-30%' },
    { application: 'EDT (Eau de Toilette)', dosage: '15-20%' },
    { application: 'Body Mist', dosage: '2-7%', note: 'Trending up to 10%' },
    { application: 'Hair Mist', dosage: '2-7%' },
    { application: 'Diffusers', dosage: '15-30%' },
    { application: 'Candles', dosage: '8-10%' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-brand-plum mb-4">Fragrance Inclusion Rates Guide</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-[400px]">
          <thead>
            <tr className="border-b-2 border-brand-peach">
              <th className="text-left py-3 px-4 font-semibold text-brand-plum">Application</th>
              <th className="text-left py-3 px-4 font-semibold text-brand-plum">Typical Dosage</th>
            </tr>
          </thead>
          <tbody>
            {inclusionRates.map((rate, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-brand-peach/20 transition-colors">
                <td className="py-3 px-4 text-gray-700">
                  {rate.application}
                  {rate.note && (
                    <span className="block text-sm text-brand-rose font-medium mt-1">
                      {rate.note}
                    </span>
                  )}
                </td>
                <td className="py-3 px-4 font-medium text-brand-mauve">{rate.dosage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-brand-peach/30 rounded-lg">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-brand-plum mt-0.5 flex-shrink-0" />
          <div className="text-sm text-gray-700">
            <p className="font-semibold mb-2">Important Considerations:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Dosages vary based on regional regulations and market preferences</li>
              <li>Middle Eastern markets often use dosages up to 40% with different regulations</li>
              <li>Body mists are trending stronger, with some reaching 10% concentration</li>
              <li>Final dosage depends on fragrance profile and desired claims</li>
            </ul>
            <p className="mt-3 font-medium text-brand-plum">
              Our experts are always happy to guide you on optimal dosage for your specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InclusionRatesTable;