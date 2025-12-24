'use client';

import { useQuery } from '@tanstack/react-query';
import { InvestorStats, fetchInvestorStats, mockInvestorStats } from '@/types/investor-stats';

/**
 * Custom hook to fetch investor stats with TanStack Query
 * Caches data for 10 minutes to respect API rate limiting (5 requests per minute)
 * 
 * @param enabled - Whether the query should run (default: true)
 */
export const useInvestorStats = (enabled: boolean = true) => {
  return useQuery<InvestorStats>({
    queryKey: ['investorStats'],
    queryFn: async () => {
      try {
        return await fetchInvestorStats();
      } catch (error) {
        // If API fails, return mock data as fallback
        console.error('Error fetching investor stats:', error);
        return mockInvestorStats;
      }
    },
    enabled, // Only run query if enabled is true
    staleTime: 1000 * 60 * 10, // 10 minutes - data is considered fresh for 10 minutes
    gcTime: 1000 * 60 * 15, // 15 minutes - cache is kept for 15 minutes
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
    refetchOnMount: false, // Don't refetch on component mount if data is fresh
    retry: 1, // Only retry once on failure
  });
};

