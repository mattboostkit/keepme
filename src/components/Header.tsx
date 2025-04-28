import { useState, useEffect, useRef } from 'react'; // Import useState, useEffect, and useRef
import { Link } from 'react-router-dom';
import { ChevronRight, Menu, X } from 'lucide-react'; // Import Menu and X icons, removed Droplets
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
      <header className="fixed w-full bg-white/70 backdrop-blur-sm z-50 py-2 md:py-4 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Updated Logo - with responsive sizing */}
          <Link to="/" className="flex items-center">
            <img
              src={logoUrl}
              alt="KeepMe Logo"
              className="h-12 sm:h-16 md:h-[5.5rem] w-auto min-w-[80px]"
            />
          </Link>
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-brand-card transition-colors">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-brand-card transition-colors">About</Link>

            {/* Services dropdown */}
            <div className="relative group">
              <Link to="/services" className="text-gray-800 hover:text-brand-card transition-colors">Services</Link>

              {/* Dropdown menu */}
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top z-50">
                <div className="py-2">
                  <Link to="/fragrance-componentry" className="block px-4 py-2 text-gray-800 hover:bg-brand-card hover:text-white transition-colors">Fragrance Componentry</Link>
                  <Link to="/home-fragrance" className="block px-4 py-2 text-gray-800 hover:bg-brand-card hover:text-white transition-colors">Home Fragrance</Link>
                  <Link to="/luxury-packaging" className="block px-4 py-2 text-gray-800 hover:bg-brand-card hover:text-white transition-colors">Luxury Packaging</Link>
                  <Link to="/gifts-with-purchase" className="block px-4 py-2 text-gray-800 hover:bg-brand-card hover:text-white transition-colors">Gifts With Purchase</Link>
                  <Link to="/cosmetic-componentry" className="block px-4 py-2 text-gray-800 hover:bg-brand-card hover:text-white transition-colors">Cosmetic Componentry</Link>
                  <Link to="/fragrance-creation" className="block px-4 py-2 text-gray-800 hover:bg-brand-card hover:text-white transition-colors">Fragrance Creation</Link>
                </div>
              </div>
            </div>

            <Link to="/glass" className="text-gray-800 hover:text-brand-card transition-colors">Glass</Link>
            <Link to="/tools" className="text-gray-800 hover:text-brand-card transition-colors">Tools</Link>
            <Link to="/portfolio" className="text-gray-800 hover:text-brand-card transition-colors">Portfolio</Link>
            <Link to="/blog" className="text-gray-800 hover:text-brand-card transition-colors">Blog</Link>
          </nav>
          <Link to="/contact" className="hidden md:flex items-center bg-brand-button text-white px-5 py-2 rounded-full hover:bg-brand-card transition-colors">
            Contact Us
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
          {/* Contact Us button for small screens (but not the smallest) */}
          <Link to="/contact" className="hidden sm:flex md:hidden items-center bg-brand-button text-white px-4 py-1.5 rounded-full hover:bg-brand-card transition-colors text-sm">
            Contact
          </Link>

          {/* Hamburger Button */}
          <button
            ref={hamburgerRef}
            className="md:hidden text-gray-800 focus:outline-none ml-4 bg-white/80 p-2 rounded-md"
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
          className="md:hidden fixed top-[calc(3rem+1px)] sm:top-[calc(4rem+1px)] md:top-[calc(5.5rem+1px)] left-0 right-0 bg-white shadow-md py-4 border-t border-gray-200 z-[60] max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="container mx-auto px-6 flex justify-end mb-2">
            <button
              onClick={closeMobileMenu}
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="container mx-auto px-6 flex flex-col space-y-3">
            <Link to="/" className="text-gray-800 hover:text-brand-card transition-colors py-1" onClick={closeMobileMenu}>Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-brand-card transition-colors py-1" onClick={closeMobileMenu}>About</Link>

            {/* Services section */}
            <div className="py-1">
              <Link to="/services" className="text-gray-800 hover:text-brand-card transition-colors font-medium" onClick={closeMobileMenu}>Services</Link>
              <div className="pl-4 mt-2 space-y-1 border-l border-gray-200">
                <Link to="/fragrance-componentry" className="block text-gray-700 hover:text-brand-card transition-colors py-1 text-sm" onClick={closeMobileMenu}>Fragrance Componentry</Link>
                <Link to="/home-fragrance" className="block text-gray-700 hover:text-brand-card transition-colors py-1 text-sm" onClick={closeMobileMenu}>Home Fragrance</Link>
                <Link to="/luxury-packaging" className="block text-gray-700 hover:text-brand-card transition-colors py-1 text-sm" onClick={closeMobileMenu}>Luxury Packaging</Link>
                <Link to="/gifts-with-purchase" className="block text-gray-700 hover:text-brand-card transition-colors py-1 text-sm" onClick={closeMobileMenu}>Gifts With Purchase</Link>
                <Link to="/cosmetic-componentry" className="block text-gray-700 hover:text-brand-card transition-colors py-1 text-sm" onClick={closeMobileMenu}>Cosmetic Componentry</Link>
                <Link to="/fragrance-creation" className="block text-gray-700 hover:text-brand-card transition-colors py-1 text-sm" onClick={closeMobileMenu}>Fragrance Creation</Link>
              </div>
            </div>

            <Link to="/glass" className="text-gray-800 hover:text-brand-card transition-colors py-1" onClick={closeMobileMenu}>Glass</Link>
            <Link to="/tools" className="text-gray-800 hover:text-brand-card transition-colors py-1" onClick={closeMobileMenu}>Tools</Link>
            <Link to="/portfolio" className="text-gray-800 hover:text-brand-card transition-colors py-1" onClick={closeMobileMenu}>Portfolio</Link>
            <Link to="/blog" className="text-gray-800 hover:text-brand-card transition-colors py-1" onClick={closeMobileMenu}>Blog</Link>
            <Link to="/contact" className="text-gray-800 hover:text-brand-card transition-colors py-1" onClick={closeMobileMenu}>Contact Us</Link>
          </nav>
        </div>
      )}
    </div> // Close the relative wrapper div
  ); // Correctly placed closing parenthesis
}

export default Header;