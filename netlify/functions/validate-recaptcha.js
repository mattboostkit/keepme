/**
 * Netlify Function to validate reCAPTCHA v3 tokens
 * This function verifies the reCAPTCHA token with Google's API
 * and returns whether the submission is likely from a human
 */

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Add CORS headers for browser requests
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    // Parse the request body
    const { token, action } = JSON.parse(event.body);

    // Validate required parameters
    if (!token) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          error: 'Missing reCAPTCHA token' 
        })
      };
    }

    // Get the secret key from environment variables
    const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!SECRET_KEY) {
      console.error('RECAPTCHA_SECRET_KEY not configured');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          success: false, 
          error: 'Server configuration error' 
        })
      };
    }

    // Verify the token with Google's reCAPTCHA API
    const verificationURL = 'https://www.google.com/recaptcha/api/siteverify';
    const params = new URLSearchParams({
      secret: SECRET_KEY,
      response: token
    });

    const response = await fetch(verificationURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString()
    });

    const data = await response.json();

    // Log the verification response for debugging (remove in production)
    console.log('reCAPTCHA verification response:', {
      success: data.success,
      score: data.score,
      action: data.action,
      challenge_ts: data.challenge_ts,
      hostname: data.hostname,
      errors: data['error-codes']
    });

    // Check if verification was successful
    if (!data.success) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          error: 'reCAPTCHA verification failed',
          details: data['error-codes']
        })
      };
    }

    // Check the score (0.0 - 1.0, where 1.0 is very likely a human)
    // You can adjust this threshold based on your needs
    const SCORE_THRESHOLD = 0.5;
    
    if (data.score < SCORE_THRESHOLD) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          score: data.score,
          message: 'Score below threshold',
          threshold: SCORE_THRESHOLD
        })
      };
    }

    // Optionally verify the action matches what was expected
    if (action && data.action !== action) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          error: 'Action mismatch',
          expected: action,
          received: data.action
        })
      };
    }

    // Verification successful
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        score: data.score,
        action: data.action,
        hostname: data.hostname
      })
    };

  } catch (error) {
    console.error('Error validating reCAPTCHA:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: 'Internal server error' 
      })
    };
  }
};