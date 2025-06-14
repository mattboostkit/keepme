// React import removed - not needed in modern React
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react'; // Removed unused social icons
import logoWhite from '../assets/images/logo_white.webp';

function Footer() {
  return (
    <footer className="bg-brand-plum text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8"> {/* Changed to 3 columns */}
          <div>
            <div className="mb-6">
              <img
                src={logoWhite}
                alt="KeepMe Logo"
                className="h-4 w-auto"
                style={{ aspectRatio: '6222/354' }}
              />
            </div>
            <p className="text-white mb-6">
              Your end-to-end partner in fragrance and packaging. Specialising in perfume production,
              components, filling, assembly & delivery.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-6 text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li><Link to="/" className="text-white hover:text-white/80 transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-white hover:text-white/80 transition-colors">About</Link></li>
                <li><Link to="/services" className="text-white hover:text-white/80 transition-colors">Services</Link></li>
                <li><Link to="/glass" className="text-white hover:text-white/80 transition-colors">Glass</Link></li>
              </ul>
              <ul className="space-y-3">
                <li><Link to="/tools" className="text-white hover:text-white/80 transition-colors">Tools</Link></li>
                <li><Link to="/portfolio" className="text-white hover:text-white/80 transition-colors">Portfolio</Link></li>
                <li><Link to="/blog" className="text-white hover:text-white/80 transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-white hover:text-white/80 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>


          {/* New Contact Us Column */}
          <div>
            <h3 className="text-xl mb-6 text-white">Contact Us</h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>Unit 16 Quadrant Court, Crossways Business Park,<br/>Greenhithe, Kent, DA9 9AY</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <a href="tel:+441322381144" className="hover:text-white/80 transition-colors">+44 (0)1322 381144</a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:hello@keepme.co.uk" className="hover:text-white/80 transition-colors">hello@keepme.co.uk</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} KeepMe Lifestyle. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-white hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-white hover:text-white/80 transition-colors">Terms & Conditions</Link>
            <Link to="/quality-policy" className="text-white hover:text-white/80 transition-colors">Quality Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
