import { useState, useEffect, useCallback, memo } from 'react';
import { ArrowUp } from 'lucide-react';

const ReturnToTop = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  // Debounced scroll handler to reduce main thread work
  const toggleVisibility = useCallback(() => {
    const scrolled = window.pageYOffset > 300;
    setIsVisible(prev => {
      // Only update if the value actually changes
      if (prev !== scrolled) return scrolled;
      return prev;
    });
  }, []);

  // Set the top scroll position
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    let timeoutId: number;
    const debouncedToggle = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(toggleVisibility, 100);
    };

    window.addEventListener('scroll', debouncedToggle, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedToggle);
      clearTimeout(timeoutId);
    };
  }, [toggleVisibility]);

  return (
    <div className={`fixed bottom-24 right-8 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <button
        type="button"
        onClick={scrollToTop}
        className="bg-brand-rose text-white p-3 rounded-full shadow-lg hover:bg-brand-mauve transition-colors focus:outline-none"
        aria-label="Return to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
});

ReturnToTop.displayName = 'ReturnToTop';

export default ReturnToTop;
