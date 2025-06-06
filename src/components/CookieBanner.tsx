import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
    // If you had more sophisticated cookie management,
    // you might trigger other actions here.
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to enhance your browsing experience and analyze our traffic.
        By clicking "Accept", you consent to our use of cookies.
        Read our <a href="/privacy-policy">Privacy Policy</a> for more information.
      </p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default CookieBanner;
