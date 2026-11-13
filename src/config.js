
export const CONFIG = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || '',
  CONTACT_ENDPOINT: '/api/enquiries',
  WHATSAPP: '919699214019',
  PHONE: '+919699214019',
  EMAIL: 'devlisamasale@gmail.com',
  INSTAGRAM: 'devlisamasale',
}

export function waLink(message) {
  return `https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent(message)}`
}

// Backend-ready helper
export async function submitEnquiry(payload) {
  if (!CONFIG.API_BASE_URL) {
    throw new Error('Backend is not configured yet. Please use WhatsApp or email.')
  }

  const res = await fetch(`${CONFIG.API_BASE_URL}${CONFIG.CONTACT_ENDPOINT}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    throw new Error('Enquiry could not be submitted. Please try again.')
  }

  return res.json()
}
