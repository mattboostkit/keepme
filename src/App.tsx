import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ReturnToTop from './components/ReturnToTop';
import CookieBanner from './components/CookieBanner';
import SEOManager from './components/SEOManager';

// Eager load Home page as it's the landing page
import Home from './pages/Home';

// Lazy load all other pages
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Glass = lazy(() => import('./pages/Glass'));
const Contact = lazy(() => import('./pages/Contact'));
const Tools = lazy(() => import('./pages/Tools'));
const CostCalculator = lazy(() => import('./pages/CostCalculator'));
const FragranceCalculator = lazy(() => import('./pages/FragranceCalculator'));
const FreightCalculator = lazy(() => import('./pages/FreightCalculator'));
const InclusionRatesCalculator = lazy(() => import('./pages/InclusionRatesCalculator'));
const DevelopmentProcess = lazy(() => import('./pages/DevelopmentProcess'));
const PortfolioPage = lazy(() => import('./pages/Portfolio'));
const FragranceCreation = lazy(() => import('./pages/FragranceCreation'));
const FragranceComponentry = lazy(() => import('./pages/FragranceComponentry'));
const SkincareComponentry = lazy(() => import('./pages/SkincareComponentry'));
const HomeFragrance = lazy(() => import('./pages/HomeFragrance'));
const SecondaryPackaging = lazy(() => import('./pages/SecondaryPackaging'));
const GiftWithPurchase = lazy(() => import('./pages/GiftWithPurchase'));
const SanityPage = lazy(() => import('./pages/SanityPage'));
const PostPage = lazy(() => import('./pages/PostPage'));
const TestimonialsDemo = lazy(() => import('./pages/TestimonialsDemo'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const QualityPolicy = lazy(() => import('./pages/QualityPolicy'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const Creative = lazy(() => import('./pages/Creative'));

// Lazy load gallery and video pages
const GalleriesListPage = lazy(() => import('./pages/GalleryPage').then(module => ({ default: module.GalleriesListPage })));
const SingleGalleryPage = lazy(() => import('./pages/GalleryPage').then(module => ({ default: module.SingleGalleryPage })));
const VideosListPage = lazy(() => import('./pages/VideoPage').then(module => ({ default: module.VideosListPage })));
const SingleVideoPage = lazy(() => import('./pages/VideoPage').then(module => ({ default: module.SingleVideoPage })));

// Lazy load client pages
const RojaParfumsPage = lazy(() => import('./pages/clients').then(module => ({ default: module.RojaParfumsPage })));
const OrmondeJaynePage = lazy(() => import('./pages/clients').then(module => ({ default: module.OrmondeJaynePage })));
const HouseOfVisionPage = lazy(() => import('./pages/clients').then(module => ({ default: module.HouseOfVisionPage })));
const BoadiceaPage = lazy(() => import('./pages/clients').then(module => ({ default: module.BoadiceaPage })));
const BDXYPage = lazy(() => import('./pages/clients').then(module => ({ default: module.BDXYPage })));
const StephaneHumbertLucasPage = lazy(() => import('./pages/clients').then(module => ({ default: module.StephaneHumbertLucasPage })));
const HouseOfBrandtPage = lazy(() => import('./pages/clients').then(module => ({ default: module.HouseOfBrandtPage })));
const FragranceDuBoisPage = lazy(() => import('./pages/clients').then(module => ({ default: module.FragranceDuBoisPage })));
const FlannelsPage = lazy(() => import('./pages/clients').then(module => ({ default: module.FlannelsPage })));
import SanityVisualEditing from './components/SanityVisualEditing';
import LoadingSpinner from './components/LoadingSpinner';
import { useEffect } from 'react';
import { fixChatWidgetAccessibility } from './utils/chatWidgetAccessibility';
import { fixFontDisplay } from './utils/fontDisplayFix';

function App() {
  useEffect(() => {
    // Fix accessibility for third-party chat widget
    fixChatWidgetAccessibility();
    // Fix font-display for third-party fonts
    fixFontDisplay();
  }, []);
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <SanityVisualEditing />
      <SEOManager />
      <Header />
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/glass" element={<Glass />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/blog" element={<SanityPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add new routes */}
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/cost-calculator" element={<CostCalculator />} />
          <Route path="/tools/fragrance-calculator" element={<FragranceCalculator />} />
          <Route path="/tools/freight-calculator" element={<FreightCalculator />} />
          <Route path="/tools/inclusion-rates" element={<InclusionRatesCalculator />} />
          <Route path="/tools/development-process" element={<DevelopmentProcess />} />
          <Route path="/portfolio" element={<PortfolioPage />} /> {/* Add Portfolio route */}
          {/* Service Detail Routes */}
          <Route path="/services/fragrance-creation" element={<FragranceCreation />} />
          <Route path="/services/fragrance-componentry" element={<FragranceComponentry />} />
          <Route path="/services/skincare-componentry" element={<SkincareComponentry />} />
          <Route path="/services/home-fragrance" element={<HomeFragrance />} />
          <Route path="/services/secondary-packaging" element={<SecondaryPackaging />} />
          <Route path="/services/gift-with-purchase" element={<GiftWithPurchase />} />

          {/* Add redirects for old URLs */}
          <Route path="/fragrance-creation" element={<Navigate to="/services/fragrance-creation" replace />} />
          <Route path="/fragrance-componentry" element={<Navigate to="/services/fragrance-componentry" replace />} />
          <Route path="/skincare-componentry" element={<Navigate to="/services/skincare-componentry" replace />} />
          <Route path="/home-fragrance" element={<Navigate to="/services/home-fragrance" replace />} />
          <Route path="/secondary-packaging" element={<Navigate to="/services/secondary-packaging" replace />} />
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/quality-policy" element={<QualityPolicy />} />
          {/* Client Detail Routes */}
          <Route path="/portfolio/roja-parfums" element={<RojaParfumsPage />} />
          <Route path="/portfolio/ormonde-jayne" element={<OrmondeJaynePage />} />
          <Route path="/portfolio/house-of-vision" element={<HouseOfVisionPage />} />
          <Route path="/portfolio/boadicea" element={<BoadiceaPage />} />
          <Route path="/portfolio/bdxy" element={<BDXYPage />} />
          <Route path="/portfolio/stephane-humbert-lucas" element={<StephaneHumbertLucasPage />} />
          {/* Add routes for new client pages */}
          <Route path="/portfolio/house-of-brandt" element={<HouseOfBrandtPage />} />
          <Route path="/portfolio/fragrance-du-bois" element={<FragranceDuBoisPage />} />
          <Route path="/portfolio/flannels" element={<FlannelsPage />} />
          {/* Catch-all route for 404 Not Found page - MUST BE LAST */}
          <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ReturnToTop />
      <CookieBanner /> {/* Add CookieBanner here */}
    </div>
  );
}

export default App;
