'use client';

import React from 'react';
import {
  ShoppingCart,
  Calendar,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { InvestorStats, defaultInvestorStats } from '@/types/investor-stats';
import { useInvestorStats } from '@/hooks/useInvestorStats';

interface OrdersSectionProps {
  stats?: InvestorStats;
  className?: string;
  useApi?: boolean; // Option to use API or passed stats
}

/**
 * Format number with commas (Indian numbering system)
 */
const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-IN').format(Math.round(num));
};

const OrdersSection: React.FC<OrdersSectionProps> = ({ 
  stats: providedStats,
  className = '',
  useApi = true
}) => {
  // Use TanStack Query for caching (same as InvestorStatsSection)
  const shouldFetch = useApi && !providedStats;
  const { data: queryStats, isLoading, isError } = useInvestorStats(shouldFetch);
  
  // Use provided stats if available, otherwise use query data, fallback to default
  const stats: InvestorStats = providedStats || queryStats || defaultInvestorStats;
  const isActuallyLoading = useApi && !providedStats && isLoading;

  // Order stats cards
  const orderStats = [
    {
      value: stats.totalOrders,
      label: 'Total Orders',
      icon: ShoppingCart,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      value: stats.avgMonthlyOrder,
      label: 'Avg Monthly Order',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      value: stats.avgDailyOrder,
      label: 'Avg Daily Order',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      value: stats.weeklyOrders,
      label: 'Weekly Orders',
      icon: BarChart3,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  // Loading state
  if (isActuallyLoading) {
    return (
      <div className={className}>
        <section className="mb-150 relative">
          <div className="container">
            <div className="mb-12 text-center max-w-[475px] mx-auto">
              <p className="section-tagline">Order Analytics</p>
              <h2>Orders</h2>
              <p className="mt-4 text-gray-600">Loading order statistics...</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-md:grid-cols-1">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="bg-white shadow-box rounded-medium p-2.5">
                  <div className="bg-white border border-dashed rounded border-gray-100 p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-300 rounded-full mb-4 animate-pulse"></div>
                    <div className="h-10 w-3/4 bg-gray-300 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Orders Section */}
      <section className="mb-150 relative">
        <div className="container">
          <div className="mb-12 text-center max-w-[475px] mx-auto">
            <p className="section-tagline">Order Analytics</p>
            <h2>Orders</h2>
            <p className="mt-4 text-gray-600">
              Comprehensive order statistics and trends
            </p>
          </div>

          {/* Order Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-md:grid-cols-1">
            {orderStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white shadow-box rounded-medium p-2.5 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-white border border-dashed rounded border-gray-100 p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${stat.bgColor}`}>
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <h3 className="text-[22px] font-bold mb-2">
                      {formatNumber(stat.value)}+
                    </h3>
                    <p className="font-jakarta_sans text-light text-base">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrdersSection;

