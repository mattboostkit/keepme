// reCAPTCHA v3 Configuration
// You need to get your own site key from https://www.google.com/recaptcha/admin/create
// Choose reCAPTCHA v3 when creating your site

export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

// This is a test key that always passes (for development)
// Replace with your actual site key in production
// The test key above is Google's official test key that always passes validation

export const RECAPTCHA_ACTION = {
  FRAGRANCE_CALCULATOR: 'fragrance_calculator_submit',
  CONTACT: 'contact_form_submit',
} as const;

// Score threshold (0.0 to 1.0)
// 0.5 is recommended default, adjust based on your needs
export const RECAPTCHA_THRESHOLD = 0.5;

// Badge visibility options:
// 'bottomright' - Default position (conflicts with chat widget)
// 'bottomleft' - Moved via CSS to avoid chat widget
// 'inline' - Shows badge inline with the form
// 'hidden' - Hides badge (requires privacy policy text)
export const RECAPTCHA_BADGE_POSITION = 'bottomleft'; // Changed from default to avoid chat widget