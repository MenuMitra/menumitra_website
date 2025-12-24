/**
 * Investor Statistics Types and Data Structure
 * This structure is designed to be easily replaceable with API calls
 */

// API Response interface (snake_case from API)
export interface ApiInvestorStatsResponse {
  detail: string;
  data: {
    total_orders: number;
    total_revenue: number;
    avg_order_value: number;
    avg_turnover_minutes: number;
    total_success_order: number;
    total_cancel_order: number;
    total_dine_in_order: number;
    total_parcel_order: number;
    total_veg_order: number;
    total_vegan_order: number;
    total_egg_order: number;
    total_nonveg_order: number;
  };
}

export interface InvestorStats {
  // Order Statistics
  totalOrders: number;
  totalSuccessOrders: number;
  totalCancelOrders: number;
  
  // Revenue Statistics
  totalRevenue: number; // in currency units
  avgOrderValue: number; // in currency units
  
  // Performance Metrics
  avgTurnoverTime: number; // in minutes
  
  // Order Type Statistics
  totalDineInOrders: number;
  totalParcelOrders: number;
  
  // Food Category Statistics
  totalVegOrders: number;
  totalNonVegOrders: number;
  totalVeganOrders: number;
  totalEggOrders: number;
}

export interface FeaturedStat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  icon: string; // Icon name from lucide-react
  format: 'number' | 'currency' | 'time' | 'percentage';
}

export interface DetailedStat {
  label: string;
  value: number;
  icon: string;
  format: 'number' | 'currency' | 'time' | 'percentage';
  category: 'order-status' | 'order-type' | 'food-category';
  percentage?: number; // Calculated percentage if applicable
}

/**
 * Transform API response (snake_case) to InvestorStats (camelCase)
 */
const transformApiResponse = (apiData: ApiInvestorStatsResponse['data']): InvestorStats => {
  const transformed = {
    totalOrders: apiData.total_orders,
    totalSuccessOrders: apiData.total_success_order,
    totalCancelOrders: apiData.total_cancel_order,
    totalRevenue: apiData.total_revenue,
    avgOrderValue: apiData.avg_order_value,
    avgTurnoverTime: apiData.avg_turnover_minutes,
    totalDineInOrders: apiData.total_dine_in_order,
    totalParcelOrders: apiData.total_parcel_order,
    totalVegOrders: apiData.total_veg_order,
    totalNonVegOrders: apiData.total_nonveg_order,
    totalVeganOrders: apiData.total_vegan_order,
    totalEggOrders: apiData.total_egg_order,
  };
  return transformed;
};

/**
 * Fetch investor stats from API
 * Note: This function should be used with TanStack Query for proper caching
 * Use the useInvestorStats hook instead of calling this directly
 */
export const fetchInvestorStats = async (): Promise<InvestorStats> => {
  // Use environment variable or direct URL
  const apiUrl = process.env.NEXT_PUBLIC_METRICS_API_URL || 'https://menusmitra.xyz/v2/website_api/app_metrics_summary';
  
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // TanStack Query handles caching, so we can use default cache behavior
    cache: 'default',
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  const apiResponse: ApiInvestorStatsResponse = await response.json();
  
  if (!apiResponse.data) {
    throw new Error('Invalid API response format');
  }

  return transformApiResponse(apiResponse.data);
};

/**
 * Mock data - Used as fallback when API fails
 */
export const mockInvestorStats: InvestorStats = {
  totalOrders: 1250000,
  totalSuccessOrders: 1187500,
  totalCancelOrders: 62500,
  totalRevenue: 45000000,
  avgOrderValue: 360,
  avgTurnoverTime: 18,
  totalDineInOrders: 750000,
  totalParcelOrders: 500000,
  totalVegOrders: 600000,
  totalNonVegOrders: 500000,
  totalVeganOrders: 100000,
  totalEggOrders: 50000,
};

/**
 * Helper function to calculate derived metrics
 */
export const calculateDerivedMetrics = (stats: InvestorStats) => {
  const successRate = (stats.totalSuccessOrders / stats.totalOrders) * 100;
  const cancelRate = (stats.totalCancelOrders / stats.totalOrders) * 100;
  const dineInPercentage = (stats.totalDineInOrders / stats.totalOrders) * 100;
  const parcelPercentage = (stats.totalParcelOrders / stats.totalOrders) * 100;
  
  return {
    successRate: parseFloat(successRate.toFixed(2)),
    cancelRate: parseFloat(cancelRate.toFixed(2)),
    dineInPercentage: parseFloat(dineInPercentage.toFixed(2)),
    parcelPercentage: parseFloat(parcelPercentage.toFixed(2)),
  };
};

