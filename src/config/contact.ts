// Contact and Company Information Configuration
// Update these values to change across the entire project

export const CONTACT_CONFIG = {
  // Primary contact email
  email: 'menumitra.info@gmail.com',
  
  // Phone number
  phone: '+91 93178 18283',
  
  // Company name
  companyName: 'MenuMitra',
  
  // Website URLs
  website: {
    base: 'https://menumitra.com',
    www: 'menumitra.com',
    // Subdomain URLs
    stats: 'https://stats-v2.menumitra.com',
    kds: 'https://kds-v2.menumitra.com',
    cds: 'https://customer-v2.menumitra.com',
    customer: 'https://customer-v2.menumitra.com',
  },
  
  // Social media handles
  social: {
    youtube: '@menumitra',
    instagram: 'menumitra',
    facebook: 'menumitra',
    twitter: '@menumitra',
  },
  
  // Location
  location: 'Muktangan English School & Jr College, office No. 6, 2 Floor manogat, Parvati, Pune, Maharashtra 411009',
  
  // Business hours
  businessHours: 'Mon-Fri 9AM-6PM IST',
  
  // Response time
  responseTime: 'We\'ll respond within 24 hours',
  
  // WhatsApp configuration
  whatsapp: {
    phone: '919317818283',
    defaultMessage: 'Hello MenuMitra, I\'m interested in your restaurant management solutions and would like to know more details about your services.',
  },
} as const;

// Helper functions for common use cases
export const getEmailLink = (email: string = CONTACT_CONFIG.email) => `mailto:${email}`;
export const getPhoneLink = (phone: string = CONTACT_CONFIG.phone) => `tel:${phone}`;
export const getWebsiteUrl = (path: string = '') => `${CONTACT_CONFIG.website.base}${path}`;
export const getWhatsAppLink = (phone: string = CONTACT_CONFIG.whatsapp.phone, message: string = CONTACT_CONFIG.whatsapp.defaultMessage) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedMessage}&type=phone_number&app_absent=0`;
};

// Export individual values for convenience
export const {
  email,
  phone,
  companyName,
  website,
  social,
  location,
  businessHours,
  responseTime,
  whatsapp,
} = CONTACT_CONFIG;
