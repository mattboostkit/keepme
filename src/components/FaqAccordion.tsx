import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  // State to track which FAQ items are open
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Toggle function to open/close FAQ items
  const toggleItem = (index: number) => {
    setOpenItems(prevOpenItems => {
      if (prevOpenItems.includes(index)) {
        return prevOpenItems.filter(item => item !== index);
      } else {
        return [...prevOpenItems, index];
      }
    });
  };

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 pb-4 mb-4">
          <button
            onClick={() => toggleItem(index)}
            className="flex justify-between items-center w-full text-left py-3 focus:outline-none"
            aria-expanded={openItems.includes(index)}
            aria-controls={`faq-answer-${index}`}
          >
            <h4 className="text-lg font-normal text-gray-800">{item.question}</h4>
            <span className="text-brand-accent">
              {openItems.includes(index) ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </span>
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(index)
                ? 'max-h-96 opacity-100 mt-2'
                : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-gray-600 pb-2">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;