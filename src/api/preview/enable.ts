// Preview mode enable endpoint
// This endpoint is called by Sanity Studio to enable preview mode

export async function enablePreview(request: Request): Promise<Response> {
  // Set a cookie to enable preview mode
  const response = new Response(null, {
    status: 200,
    headers: {
      'Set-Cookie': 'sanity-preview-mode=true; Path=/; HttpOnly; SameSite=None; Secure',
    },
  })
  
  // Redirect to the preview URL if provided
  const url = new URL(request.url)
  const redirect = url.searchParams.get('redirect')
  
  if (redirect) {
    return Response.redirect(redirect, 307)
  }
  
  return response
}