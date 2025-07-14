import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import ScrollToTop from './components/ScrollToTop.tsx'; // Import the new component
import { handlePreviewParams } from './lib/previewMode';
import './index.css';

// Handle preview mode parameters on app initialization
handlePreviewParams();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop /> {/* Add the component here */}
      <App />
    </BrowserRouter>
  </StrictMode>
);