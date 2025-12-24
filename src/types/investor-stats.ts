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
    avg_turnover: string; // Format: "26m 53s" or number (for backward compatibility)
    avg_turnover_minutes?: number; // Legacy field, may not be present
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
  avgTurnoverTimeFormatted?: string; // Original formatted string like "26m 53s"
  
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
 * Parse turnover time string (e.g., "26m 53s") to minutes
 * @param turnoverTime - String in format "Xm Ys" or number
 * @returns Number of minutes (rounded to 1 decimal place for display)
 */
const parseTurnoverTime = (turnoverTime: string | number): number => {
  // If it's already a number, return it rounded
  if (typeof turnoverTime === 'number') {
    return Math.round(turnoverTime * 10) / 10; // Round to 1 decimal place
  }

  // Parse string format like "26m 53s"
  const match = turnoverTime.match(/(\d+)m\s*(\d+)s?/);
  if (match) {
    const minutes = parseInt(match[1], 10);
    const seconds = parseInt(match[2] || '0', 10);
    // Convert to total minutes (including seconds as fraction) and round to 1 decimal
    const totalMinutes = minutes + seconds / 60;
    return Math.round(totalMinutes * 10) / 10;
  }

  // Try to parse as just minutes "26m"
  const minutesOnly = turnoverTime.match(/(\d+)m/);
  if (minutesOnly) {
    return parseInt(minutesOnly[1], 10);
  }

  // Fallback: try to parse as number string
  const parsed = parseFloat(turnoverTime);
  return isNaN(parsed) ? 0 : Math.round(parsed * 10) / 10;
};

/**
 * Transform API response (snake_case) to InvestorStats (camelCase)
 */
const transformApiResponse = (apiData: ApiInvestorStatsResponse['data']): InvestorStats => {
  // Handle avg_turnover - can be string "26m 53s" or number
  let avgTurnoverTime: number;
  let avgTurnoverTimeFormatted: string | undefined;
  
  if (apiData.avg_turnover_minutes !== undefined) {
    avgTurnoverTime = apiData.avg_turnover_minutes;
  } else if (typeof apiData.avg_turnover === 'string') {
    // Store the original formatted string
    avgTurnoverTimeFormatted = apiData.avg_turnover;
    avgTurnoverTime = parseTurnoverTime(apiData.avg_turnover);
  } else {
    avgTurnoverTime = parseTurnoverTime(apiData.avg_turnover);
  }

  const transformed = {
    totalOrders: apiData.total_orders,
    totalSuccessOrders: apiData.total_success_order,
    totalCancelOrders: apiData.total_cancel_order,
    totalRevenue: apiData.total_revenue,
    avgOrderValue: apiData.avg_order_value,
    avgTurnoverTime: avgTurnoverTime,
    avgTurnoverTimeFormatted: avgTurnoverTimeFormatted,
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
 * Default empty stats - Used as fallback when API fails
 */
export const defaultInvestorStats: InvestorStats = {
  totalOrders: 0,
  totalSuccessOrders: 0,
  totalCancelOrders: 0,
  totalRevenue: 0,
  avgOrderValue: 0,
  avgTurnoverTime: 0,
  totalDineInOrders: 0,
  totalParcelOrders: 0,
  totalVegOrders: 0,
  totalNonVegOrders: 0,
  totalVeganOrders: 0,
  totalEggOrders: 0,
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

