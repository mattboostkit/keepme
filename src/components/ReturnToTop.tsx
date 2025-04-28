import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ReturnToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll position
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <button
        type="button"
        onClick={scrollToTop}
        className="bg-brand-button text-white p-3 rounded-full shadow-lg hover:bg-brand-card transition-colors focus:outline-none"
        aria-label="Return to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ReturnToTop;
