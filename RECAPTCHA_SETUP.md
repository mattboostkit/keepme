# reCAPTCHA v3 Setup Instructions

## Overview
This site now has reCAPTCHA v3 integrated into the Fragrance Calculator form at https://keepme.co.uk/tools/fragrance-calculator to prevent spam submissions. reCAPTCHA v3 runs invisibly in the background and doesn't interrupt users with challenges.

## Current Setup

### 1. Test Mode (Development)
The site is currently using Google's test keys that always pass validation:
- **Site Key**: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI` (Google's test key)
- This key will work for testing but provides no actual spam protection

### 2. Production Setup - COMPLETED ✅

You have successfully configured the following:

#### Step 1: Create reCAPTCHA Keys
1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Sign in with your Google account
3. Fill in the form:
   - **Label**: "KeepMe Website" (or your preferred name)
   - **reCAPTCHA Type**: Select **reCAPTCHA v3**
   - **Domains**: Add:
     - `keepme.co.uk`
     - `www.keepme.co.uk`
     - `localhost` (for local development)
     - Any other domains you use for staging/testing
4. Accept the reCAPTCHA Terms of Service
5. Click "Submit"
6. You'll receive two keys:
   - **Site Key**: (starts with `6Le...`)
   - **Secret Key**: (keep this secure, never commit to git)

#### Step 2: Configure Environment Variables

##### For Local Development:
1. Create a `.env` file in the root directory (if it doesn't exist)
2. Add your Site Key:
```env
VITE_RECAPTCHA_SITE_KEY=your_actual_site_key_here
```

##### For Netlify Production:
1. Go to your Netlify dashboard
2. Navigate to Site Settings → Environment variables
3. Add the following environment variable:
   - **Key**: `VITE_RECAPTCHA_SITE_KEY`
   - **Value**: Your actual reCAPTCHA site key

#### Step 3: Server-Side Validation - IMPLEMENTED ✅

The server-side validation has been fully implemented using Netlify Functions:

##### Netlify Function Created
The validation function is located at `netlify/functions/validate-recaptcha.js` and includes:
- Full reCAPTCHA v3 token validation with Google's API
- Score threshold checking (default: 0.5)
- Action verification to prevent token reuse
- Comprehensive error handling and logging
- CORS headers for browser requests
- Graceful degradation if validation service is unavailable

##### Integration with Form
The FragranceCalculator form now:
1. Generates a reCAPTCHA token when the form is submitted
2. Validates the token with the Netlify Function before form submission
3. Only submits the form if validation passes (score > 0.5)
4. Shows user-friendly error messages for different failure scenarios
5. Falls back gracefully if the validation service is temporarily unavailable

##### Environment Variables Required
Make sure you have set these in Netlify:
- **VITE_RECAPTCHA_SITE_KEY**: Your reCAPTCHA site key (for frontend)
- **RECAPTCHA_SECRET_KEY**: Your reCAPTCHA secret key (for backend validation)

## How It Works

1. **Invisible Protection**: reCAPTCHA v3 runs in the background without user interaction
2. **Score-Based**: Each submission receives a score from 0.0 (likely bot) to 1.0 (likely human)
3. **Action Tracking**: The form uses action name `fragrance_calculator_submit` for analytics
4. **Token Generation**: A new token is generated for each form submission
5. **Token Expiry**: Tokens expire after 2 minutes, so they're generated on submit, not page load

## Testing

To test the implementation:
1. Visit https://keepme.co.uk/tools/fragrance-calculator
2. Fill in the calculator fields
3. Click "Get Quote - Auto-fill Calculator Results"
4. Fill in the enquiry form
5. Submit the form
6. Check the browser console for any reCAPTCHA-related messages
7. In production, check the reCAPTCHA Admin Console for analytics

## Monitoring

Once in production with real keys:
1. Visit [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Select your site
3. View analytics including:
   - Score distribution
   - Top actions
   - Suspicious traffic patterns

## Customization

### Adjusting Score Threshold
The default threshold is 0.5. You can adjust this in your server-side validation:
- **0.3**: More permissive (allows more submissions)
- **0.5**: Balanced (recommended default)
- **0.7**: More strict (may block legitimate users)

### Adding to Other Forms
To add reCAPTCHA to other forms:

1. Import the hook in your component:
```typescript
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { RECAPTCHA_ACTION } from '../config/recaptcha';
```

2. Use the hook in your form component:
```typescript
const { executeRecaptcha } = useGoogleReCaptcha();
```

3. Generate token on form submit:
```typescript
const token = await executeRecaptcha(RECAPTCHA_ACTION.YOUR_ACTION);
```

4. Add token to form data:
```typescript
formData.append('g-recaptcha-response', token);
```

5. Update the HTML form in `index.html` to include the hidden field

## Troubleshooting

### "Execute recaptcha not yet available"
- This message appears briefly while reCAPTCHA loads
- If persistent, check that the Site Key is correct

### Low Scores
- Legitimate users getting low scores may indicate:
  - Testing from localhost (scores may be lower)
  - VPN/Proxy usage
  - Browser extensions blocking scripts
  - Automated testing tools

### Form Not Submitting
- Check browser console for errors
- Verify Site Key is correct
- Ensure domains are properly configured in reCAPTCHA admin

## Security Notes

1. **Never expose the Secret Key** in client-side code
2. **Always validate server-side** - client validation alone is not secure
3. **Monitor scores regularly** to adjust thresholds if needed
4. **Use action names** to track different form types
5. **Consider fallback options** for users who consistently get low scores

## Support

For reCAPTCHA issues:
- [reCAPTCHA Documentation](https://developers.google.com/recaptcha/docs/v3)
- [reCAPTCHA Support](https://support.google.com/recaptcha)

For implementation questions:
- Check the implementation in `/src/pages/FragranceCalculator.tsx`
- Review the configuration in `/src/config/recaptcha.ts`