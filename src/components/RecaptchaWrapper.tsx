import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { RECAPTCHA_SITE_KEY } from '../config/recaptcha';

interface RecaptchaWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper component that provides reCAPTCHA context to its children.
 * This should only wrap pages/components that actually need reCAPTCHA functionality.
 */
export const RecaptchaWrapper: React.FC<RecaptchaWrapperProps> = ({ children }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
        nonce: undefined,
      }}
      container={{ parameters: { theme: 'light' } }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default RecaptchaWrapper;