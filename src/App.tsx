// React import removed - not needed in modern React
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ReturnToTop from './components/ReturnToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Glass from './pages/Glass';
// Blog import removed - using SanityBlog instead
import Contact from './pages/Contact';
import ToolsLanding from './pages/ToolsLanding'; // Import new page
import CostCalculator from './pages/CostCalculator'; // Import new page
import FragranceCalculator from './pages/FragranceCalculator'; // Import new page
import FreightCalculator from './pages/FreightCalculator'; // Import Freight Calculator page
import PortfolioPage from './pages/Portfolio'; // Import Portfolio page
import FragranceCreation from './pages/FragranceCreation';
import FragranceComponentry from './pages/FragranceComponentry';
import SkincareComponentry from './pages/SkincareComponentry';
import HomeFragrance from './pages/HomeFragrance';
import LuxuryPackaging from './pages/LuxuryPackaging';
import GiftWithPurchase from './pages/GiftWithPurchase';
// DeliveryAndLogistics removed as it's no longer needed
import SanityPage from './pages/SanityPage'; // Import Sanity pages
import PostPage from './pages/PostPage';
import { GalleriesListPage, SingleGalleryPage } from './pages/GalleryPage';
import { VideosListPage, SingleVideoPage } from './pages/VideoPage';
import SanityBlog from './pages/SanityBlog'; // Import Sanity-powered blog page
import TestimonialsDemo from './pages/TestimonialsDemo'; // Import Testimonials demo page
import PrivacyPolicy from './pages/PrivacyPolicy'; // Import Privacy Policy page
import TermsAndConditions from './pages/TermsAndConditions'; // Import Terms and Conditions page
import QualityPolicy from './pages/QualityPolicy'; // Import Quality Policy page
import ImageTestPage from './pages/ImageTest'; // Import Image Test page
// Import client pages
import {
  RojaParfumsPage,
  OrmondeJaynePage,
  HouseOfVisionPage,
  BoadiceaPage,
  BDXYPage,
  StephaneHumbertLucasPage
} from './pages/clients';

function App() {
  return (
    <div className="min-h-screen bg-brand-background text-gray-900 flex flex-col"> {/* Updated to use new brand background color */}
      <Header />
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24"> {/* Responsive padding for different screen sizes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/glass" element={<Glass />} />
          <Route path="/blog" element={<SanityBlog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add new routes */}
          <Route path="/tools" element={<ToolsLanding />} />
          <Route path="/tools/cost-calculator" element={<CostCalculator />} />
          <Route path="/tools/fragrance-calculator" element={<FragranceCalculator />} />
          <Route path="/tools/freight-calculator" element={<FreightCalculator />} />
          <Route path="/portfolio" element={<PortfolioPage />} /> {/* Add Portfolio route */}
          {/* Service Detail Routes */}
          <Route path="/services/fragrance-creation" element={<FragranceCreation />} />
          <Route path="/services/fragrance-componentry" element={<FragranceComponentry />} />
          <Route path="/services/skincare-componentry" element={<SkincareComponentry />} />
          <Route path="/services/home-fragrance" element={<HomeFragrance />} />
          <Route path="/services/luxury-packaging" element={<LuxuryPackaging />} />
          <Route path="/services/gift-with-purchase" element={<GiftWithPurchase />} />

          {/* Add redirects for old URLs */}
          <Route path="/fragrance-creation" element={<Navigate to="/services/fragrance-creation" replace />} />
          <Route path="/fragrance-componentry" element={<Navigate to="/services/fragrance-componentry" replace />} />
          <Route path="/skincare-componentry" element={<Navigate to="/services/skincare-componentry" replace />} />
          <Route path="/home-fragrance" element={<Navigate to="/services/home-fragrance" replace />} />
          <Route path="/luxury-packaging" element={<Navigate to="/services/luxury-packaging" replace />} />
          <Route path="/gift-with-purchase" element={<Navigate to="/services/gift-with-purchase" replace />} />
          <Route path="/gifts-with-purchase" element={<Navigate to="/services/gift-with-purchase" replace />} />
          {/* DeliveryAndLogistics route removed as it's no longer needed */}
          {/* Sanity Routes */}
          <Route path="/posts" element={<SanityPage />} />
          <Route path="/post/:slug" element={<PostPage />} />
          <Route path="/galleries" element={<GalleriesListPage />} />
          <Route path="/gallery/:slug" element={<SingleGalleryPage />} />
          <Route path="/videos" element={<VideosListPage />} />
          <Route path="/video/:id" element={<SingleVideoPage />} />
          {/* Old blog route replaced with Sanity-powered blog */}
          <Route path="/testimonials-demo" element={<TestimonialsDemo />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/quality-policy" element={<QualityPolicy />} />
          <Route path="/image-test" element={<ImageTestPage />} />
          {/* Client Detail Routes */}
          <Route path="/portfolio/roja-parfums" element={<RojaParfumsPage />} />
          <Route path="/portfolio/ormonde-jayne" element={<OrmondeJaynePage />} />
          <Route path="/portfolio/house-of-vision" element={<HouseOfVisionPage />} />
          <Route path="/portfolio/boadicea" element={<BoadiceaPage />} />
          <Route path="/portfolio/bdxy" element={<BDXYPage />} />
          <Route path="/portfolio/stephane-humbert-lucas" element={<StephaneHumbertLucasPage />} />
        </Routes>
      </main>
      <Footer />
      <ReturnToTop />
    </div>
  );
}

export default App;
