import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation(); // Get the full location object

  useEffect(() => {
    // Check for hash fragment
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the '#'
      // Use setTimeout to allow the page layout to settle before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Fallback to top if element not found immediately
          window.scrollTo(0, 0);
        }
      }, 100); // Small delay (100ms)
    } else {
      // Scroll to the top if no hash
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]); // Rerun effect if pathname or hash changes

  // This component does not render any visible UI
  return null;
}

export default ScrollToTop;