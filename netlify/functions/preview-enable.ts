import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST' && event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Get redirect URL from query params
  const redirect = event.queryStringParameters?.redirect || '/';

  return {
    statusCode: 302,
    headers: {
      'Set-Cookie': 'sanity-preview-mode=true; Path=/; HttpOnly; SameSite=None; Secure',
      'Location': redirect,
    },
    body: '',
  };
};