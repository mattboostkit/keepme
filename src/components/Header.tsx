import { useState, useEffect, useRef } from 'react'; // Import useState, useEffect, and useRef
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Import Menu and X icons, removed Droplets
import logoUrl from '../assets/images/logo.svg'; // Import the logo

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle clicks outside the mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    // Add event listener when the menu is open
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    // Wrap header and mobile menu in a relative div for positioning context
    <div className="relative">
      <header className="fixed w-full bg-white z-50 py-2 md:py-4 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Updated Logo - with responsive sizing */}
          <Link to="/" className="flex items-center">
            <img
              src={logoUrl}
              alt="KeepMe Logo"
              className="h-12 sm:h-16 md:h-20 lg:h-[5.5rem] w-auto min-w-[80px]"
            />
          </Link>
          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="text-brand-plum hover:text-brand-rose transition-colors">Home</Link>
            <Link to="/about" className="text-brand-plum hover:text-brand-rose transition-colors">About</Link>

            {/* Services dropdown */}
            <div className="relative group">
              <Link to="/services" className="text-brand-plum hover:text-brand-rose transition-colors">Services</Link>

              {/* Dropdown menu */}
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top z-50">
                <div className="py-2">
                  <Link to="/services/fragrance-componentry" className="block px-4 py-2 text-brand-plum hover:bg-brand-rose hover:text-white transition-colors">Fragrance Componentry</Link>
                  <Link to="/services/home-fragrance" className="block px-4 py-2 text-brand-plum hover:bg-brand-rose hover:text-white transition-colors">Home Fragrance</Link>
                  <Link to="/services/luxury-packaging" className="block px-4 py-2 text-brand-plum hover:bg-brand-rose hover:text-white transition-colors">Luxury Packaging</Link>
                  <Link to="/services/gift-with-purchase" className="block px-4 py-2 text-brand-plum hover:bg-brand-rose hover:text-white transition-colors">Gift With Purchase</Link>
                  <Link to="/services/skincare-componentry" className="block px-4 py-2 text-brand-plum hover:bg-brand-rose hover:text-white transition-colors">Skincare Componentry</Link>
                  <Link to="/services/fragrance-creation" className="block px-4 py-2 text-brand-plum hover:bg-brand-rose hover:text-white transition-colors">Fragrance Creation</Link>
                </div>
              </div>
            </div>

            <Link to="/glass" className="text-brand-plum hover:text-brand-rose transition-colors">Glass</Link>
            <Link to="/tools" className="text-brand-plum hover:text-brand-rose transition-colors">Tools</Link>
            <Link to="/portfolio" className="text-brand-plum hover:text-brand-rose transition-colors">Portfolio</Link>
            <Link to="/blog" className="text-brand-plum hover:text-brand-rose transition-colors">Blog</Link>
          </nav>
          <Link to="/contact" className="hidden lg:flex items-center bg-brand-mauve text-white px-4 py-2 text-sm rounded-full hover:bg-brand-rose transition-colors">
            Contact
          </Link>

          {/* Hamburger Button */}
          <button
            ref={hamburgerRef}
            className="lg:hidden text-brand-plum focus:outline-none ml-4 bg-brand-peach p-2 rounded-md"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Absolutely positioned relative to the outer div */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden fixed top-[calc(3rem+1px)] sm:top-[calc(4rem+1px)] md:top-[calc(5rem+1px)] left-0 right-0 bg-white shadow-md py-4 border-t border-brand-peach z-[60] max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="container mx-auto px-6 flex justify-end mb-2">
            <button
              onClick={closeMobileMenu}
              className="text-brand-mauve hover:text-brand-plum focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="container mx-auto px-6 flex flex-col space-y-3">
            <Link to="/" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={closeMobileMenu}>Home</Link>
            <Link to="/about" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={closeMobileMenu}>About</Link>

            {/* Services section */}
            <div className="py-1">
              <Link to="/services" className="text-brand-plum hover:text-brand-rose transition-colors font-medium" onClick={closeMobileMenu}>Services</Link>
              <div className="pl-4 mt-2 space-y-1 border-l border-brand-peach">
                <Link to="/services/fragrance-componentry" className="block text-brand-mauve hover:text-brand-rose transition-colors py-1 text-sm" onClick={closeMobileMenu}>Fragrance Componentry</Link>
                <Link to="/services/home-fragrance" className="block text-brand-mauve hover:text-brand-rose transition-colors py-1 text-sm" onClick={closeMobileMenu}>Home Fragrance</Link>
                <Link to="/services/luxury-packaging" className="block text-brand-mauve hover:text-brand-rose transition-colors py-1 text-sm" onClick={closeMobileMenu}>Luxury Packaging</Link>
                <Link to="/services/gift-with-purchase" className="block text-brand-mauve hover:text-brand-rose transition-colors py-1 text-sm" onClick={closeMobileMenu}>Gift With Purchase</Link>
                <Link to="/services/skincare-componentry" className="block text-brand-mauve hover:text-brand-rose transition-colors py-1 text-sm" onClick={closeMobileMenu}>Skincare Componentry</Link>
                <Link to="/services/fragrance-creation" className="block text-brand-mauve hover:text-brand-rose transition-colors py-1 text-sm" onClick={closeMobileMenu}>Fragrance Creation</Link>
              </div>
            </div>

            <Link to="/glass" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={closeMobileMenu}>Glass</Link>
            <Link to="/tools" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={closeMobileMenu}>Tools</Link>
            <Link to="/portfolio" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={closeMobileMenu}>Portfolio</Link>
            <Link to="/blog" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={closeMobileMenu}>Blog</Link>
            <Link to="/contact" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={closeMobileMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </div> // Close the relative wrapper div
  ); // Correctly placed closing parenthesis
}

export default Header;