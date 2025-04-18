import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  // Basic display, no accordion functionality yet
  // TODO: Implement accordion toggle functionality if needed
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
      {items.map((item, index) => (
        <div key={index} className="border-b pb-4">
          <h4 className="text-lg font-medium text-gray-700 mb-2">{item.question}</h4>
          <p className="text-gray-600">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;