// Preview mode utilities for Sanity Presentation

export function isPreviewMode(): boolean {
  if (typeof window === 'undefined') return false
  
  // Check for preview mode cookie
  const cookies = document.cookie.split(';')
  return cookies.some(cookie => cookie.trim().startsWith('sanity-preview-mode=true'))
}

export function setPreviewMode(enabled: boolean): void {
  if (enabled) {
    document.cookie = 'sanity-preview-mode=true; Path=/; SameSite=None; Secure'
  } else {
    document.cookie = 'sanity-preview-mode=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure'
  }
}

// Handle preview mode URL parameters
export function handlePreviewParams(): void {
  const params = new URLSearchParams(window.location.search)
  const preview = params.get('preview')
  
  if (preview === 'true') {
    setPreviewMode(true)
    // Remove preview param from URL
    params.delete('preview')
    const newUrl = window.location.pathname + (params.toString() ? `?${params.toString()}` : '')
    window.history.replaceState({}, '', newUrl)
  } else if (preview === 'false') {
    setPreviewMode(false)
    // Remove preview param from URL
    params.delete('preview')
    const newUrl = window.location.pathname + (params.toString() ? `?${params.toString()}` : '')
    window.history.replaceState({}, '', newUrl)
  }
}