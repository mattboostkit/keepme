// Preview mode disable endpoint
// This endpoint is called by Sanity Studio to disable preview mode

export async function disablePreview(): Promise<Response> {
  // Remove the preview mode cookie
  return new Response(null, {
    status: 200,
    headers: {
      'Set-Cookie': 'sanity-preview-mode=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=None; Secure',
    },
  })
}