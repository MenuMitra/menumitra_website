// API Configuration
// Conditional domain selection based on environment

const isDevelopment = process.env.NODE_ENV === 'development';

const API_CONFIG = {
  // Conditional base domain
  // Development: uses men4u.xyz
  // Production/Staging: uses ghanish.in
  baseUrl: isDevelopment 
    ? 'https://ghanish.in/v2/website_api'    // Production
    : 'https://menu4.xyz/v2/website_api',  // Testing
  
  // API Endpoints
  endpoints: {
    // Data Removal APIs
    requestDataRemoval: '/request_data_removal',
    verifyDataRemovalOTP: '/verify_data_removal_otp',
    
    // Booking API
    createWebsiteBooking: '/create_website_booking',
  },
  
  // Default headers
  defaultHeaders: {
    'Content-Type': 'application/json',
  },
};

// Helper function to get full API URL
export const getApiUrl = (endpoint: keyof typeof API_CONFIG.endpoints): string => {
  return `${API_CONFIG.baseUrl}${API_CONFIG.endpoints[endpoint]}`;
};

// Export configuration
export default API_CONFIG;

// Export individual endpoints for convenience
export const API_ENDPOINTS = {
  REQUEST_DATA_REMOVAL: getApiUrl('requestDataRemoval'),
  VERIFY_DATA_REMOVAL_OTP: getApiUrl('verifyDataRemovalOTP'),
  CREATE_WEBSITE_BOOKING: getApiUrl('createWebsiteBooking'),
};

// Export base URL for other uses
export const API_BASE_URL = API_CONFIG.baseUrl;
export const API_HEADERS = API_CONFIG.defaultHeaders;

// Helper function to get base domain (without /v2/website_api path)
const getBaseDomain = (): string => {
  const baseUrl = API_CONFIG.baseUrl;
  // Extract domain from baseUrl (remove /v2/website_api)
  return baseUrl.replace('/v2/website_api', '');
};

// Helper function to get product download URL
export const getProductDownloadUrl = (filename: string): string => {
  return `${getBaseDomain()}/website/${filename}`;
};
