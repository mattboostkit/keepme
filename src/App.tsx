// React import removed - not needed in modern React
import { Routes, Route } from 'react-router-dom';
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
import CosmeticComponentry from './pages/CosmeticComponentry';
import HomeFragrance from './pages/HomeFragrance';
import LuxuryPackaging from './pages/LuxuryPackaging';
import GiftsWithPurchase from './pages/GiftsWithPurchase';
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
    <div className="min-h-screen bg-gradient-to-b from-[#fffded] to-[#eed9b2] text-gray-900 flex flex-col"> {/* Applied gradient to entire app */}
      <Header />
      <main className="flex-grow pt-24"> {/* Reverted pt back to 24 */}
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
          <Route path="/fragrance-creation" element={<FragranceCreation />} />
          <Route path="/fragrance-componentry" element={<FragranceComponentry />} />
          <Route path="/cosmetic-componentry" element={<CosmeticComponentry />} />
          <Route path="/home-fragrance" element={<HomeFragrance />} />
          <Route path="/luxury-packaging" element={<LuxuryPackaging />} />
          <Route path="/gifts-with-purchase" element={<GiftsWithPurchase />} />
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
