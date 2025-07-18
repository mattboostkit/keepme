import { useState, useEffect, useRef } from 'react'; // Import useState, useEffect, and useRef
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react'; // Import Menu and X icons, removed Droplets
import logoUrl from '../assets/images/logos/Logo_Black.svg'; // Import the dark logo
import SearchBar from './SearchBar';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
      <header className="fixed w-full z-50 py-2 md:py-4 bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-[5.5rem]">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={scrollToTop}>
            <img
              src={logoUrl}
              alt="KeepMe Logo"
              className="h-6 sm:h-6 md:h-6 w-auto object-contain"
            />
          </Link>
          {/* Desktop Menu */}
          <nav className="hidden xl:flex space-x-8 text-brand-plum items-center">
            <Link to="/" className="text-brand-plum hover:text-brand-rose transition-colors" onClick={scrollToTop}>Home</Link>
            <Link to="/about" className="text-brand-plum hover:text-brand-rose transition-colors">About</Link>
            {/* Services dropdown */}
            <div className="relative group">
              <Link to="/services" className="text-brand-plum hover:text-brand-rose transition-colors">Services</Link>
              {/* Dropdown menu */}
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top z-50">
                <div className="py-2">
                  <Link to="/services/fragrance-componentry" className="block px-4 py-2 text-brand-plum hover:bg-brand-rose hover:text-white transition-colors">Fragrance Componentry</Link>
                  <Link to="/services/home-fragrance" className="block px-4 py-2 text-brand-plum hover:bg-brand-rose hover:text-white transition-colors">Home Fragrance</Link>
                  <Link to="/services/secondary-packaging" className="block px-4 py-2 text-brand-plum hover:bg-brand-rose hover:text-white transition-colors">Secondary Packaging</Link>
                  <Link to="/services/gift-with-purchase" className="block px-4 py-2 text-brand-plum hover:bg-brand-rose hover:text-white transition-colors">Gift With Purchase</Link>
                  <Link to="/services/skincare-componentry" className="block px-4 py-2 text-brand-plum hover:bg-brand-rose hover:text-white transition-colors">Skincare Componentry</Link>
                  <Link to="/services/fragrance-creation" className="block px-4 py-2 text-brand-plum hover:bg-brand-rose hover:text-white transition-colors">Fragrance Creation</Link>
                </div>
              </div>
            </div>
            <Link to="/glass" className="text-brand-plum hover:text-brand-rose transition-colors">Glass</Link>
            <Link to="/creative" className="text-brand-plum hover:text-brand-rose transition-colors">Creative</Link>
            <Link to="/tools" className="text-brand-plum hover:text-brand-rose transition-colors">Tools</Link>
            <Link to="/portfolio" className="text-brand-plum hover:text-brand-rose transition-colors">Portfolio</Link>
            <Link to="/blog" className="text-brand-plum hover:text-brand-rose transition-colors">Blog</Link>
          </nav>
          {/* Contact and Search icon */}
          <div className="hidden xl:flex items-center gap-3 min-w-[180px] ml-6">
            <Link to="/contact" className="items-center bg-brand-mauve text-white px-4 py-2 text-sm rounded-full hover:bg-brand-rose transition-colors">
              Contact
            </Link>
            <button
              className="ml-2 p-2 rounded-full hover:bg-brand-peach/30 focus:outline-none focus:ring-2 focus:ring-brand-mauve"
              aria-label="Open search"
              onClick={() => setShowSearch(true)}
            >
              <Search className="h-6 w-6 text-brand-mauve" />
            </button>
          </div>
          {/* Hamburger Button */}
          <button
            ref={hamburgerRef}
            className="xl:hidden text-brand-plum focus:outline-none ml-4 bg-white p-2 rounded-md"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-brand-plum" /> : <Menu className="h-6 w-6 text-brand-plum" />}
          </button>
        </div>
      </header>
      {/* Floating SearchBar Overlay */}
      {showSearch && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/30 backdrop-blur-sm" onClick={() => setShowSearch(false)}>
          <div className="mt-28 bg-white rounded-2xl shadow-2xl p-6 w-full max-w-xl mx-auto relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-brand-mauve hover:text-brand-rose" onClick={() => setShowSearch(false)} aria-label="Close search">
              <X className="h-6 w-6" />
            </button>
            <SearchBar />
          </div>
        </div>
      )}

      {/* Mobile Menu - Absolutely positioned relative to the outer div */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="xl:hidden fixed inset-0 bg-white z-[100] flex flex-col"
        >
          {/* Mobile menu header with logo and close button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white shadow-sm z-10">
            <Link to="/" className="flex items-center" onClick={() => { closeMobileMenu(); scrollToTop(); }}>
              <img
                src={logoUrl}
                alt="KeepMe Logo"
                className="h-6 w-auto object-contain"
              />
            </Link>
            <button
              className="p-2 rounded-full hover:bg-brand-peach/30 focus:outline-none focus:ring-2 focus:ring-brand-mauve"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-brand-plum" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 pt-4 pb-8 flex flex-col space-y-3">
            {/* Search Bar - Mobile */}
            <div className="mb-4">
              <SearchBar />
            </div>
            <Link to="/" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={() => { closeMobileMenu(); scrollToTop(); }}>Home</Link>
            <Link to="/about" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={closeMobileMenu}>About</Link>
            {/* Services section */}
            <div className="py-1">
              <Link to="/services" className="text-brand-plum hover:text-brand-rose transition-colors font-normal" onClick={closeMobileMenu}>Services</Link>
              <div className="pl-4 mt-2 space-y-1 border-l border-brand-peach">
                <Link to="/services/fragrance-componentry" className="block text-brand-mauve hover:text-brand-rose transition-colors py-1 text-sm" onClick={closeMobileMenu}>Fragrance Componentry</Link>
                <Link to="/services/home-fragrance" className="block text-brand-mauve hover:text-brand-rose transition-colors py-1 text-sm" onClick={closeMobileMenu}>Home Fragrance</Link>
                <Link to="/services/secondary-packaging" className="block text-brand-mauve hover:text-brand-rose transition-colors py-1 text-sm" onClick={closeMobileMenu}>Secondary Packaging</Link>
                <Link to="/services/gift-with-purchase" className="block text-brand-mauve hover:text-brand-rose transition-colors py-1 text-sm" onClick={closeMobileMenu}>Gift With Purchase</Link>
                <Link to="/services/skincare-componentry" className="block text-brand-mauve hover:text-brand-rose transition-colors py-1 text-sm" onClick={closeMobileMenu}>Skincare Componentry</Link>
                <Link to="/services/fragrance-creation" className="block text-brand-mauve hover:text-brand-rose transition-colors py-1 text-sm" onClick={closeMobileMenu}>Fragrance Creation</Link>
              </div>
            </div>
            <Link to="/glass" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={closeMobileMenu}>Glass</Link>
            <Link to="/creative" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={closeMobileMenu}>Creative</Link>
            <Link to="/tools" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={closeMobileMenu}>Tools</Link>
            <Link to="/portfolio" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={closeMobileMenu}>Portfolio</Link>
            <Link to="/blog" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={closeMobileMenu}>Blog</Link>
            <Link to="/contact" className="text-brand-plum hover:text-brand-rose transition-colors py-1" onClick={closeMobileMenu}>Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;