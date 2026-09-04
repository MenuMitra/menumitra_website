// API Configuration
// Single production base URL
// Can be overridden by NEXT_PUBLIC_API_BASE_URL environment variable

const API_CONFIG = {
  // Production base URL
  // Can be overridden by NEXT_PUBLIC_API_BASE_URL environment variable
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://menusmitra.xyz/v2.3/website_api',
  // Development base URL  : https://menu4.xyz
  // Production base URL : https://menusmitra.xyz
  // API Endpoints
  endpoints: {
    // Data Removal APIs
    requestDataRemoval: '/request_data_removal',
    verifyDataRemovalOTP: '/verify_data_removal_otp',
    
    // Booking API
    createWebsiteBooking: '/create_website_booking',
    
    // Investor Stats API
    appMetricsSummary: '/app_metrics_summary',
    
    // Onboarding API
    onboardingCreate: '/onboarding/create',
    
    // Downloads API
    getLatestDownloads: '/get_latest_downloads',
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
  APP_METRICS_SUMMARY: getApiUrl('appMetricsSummary'),
  ONBOARDING_CREATE: getApiUrl('onboardingCreate'),
  GET_LATEST_DOWNLOADS: getApiUrl('getLatestDownloads'),
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
