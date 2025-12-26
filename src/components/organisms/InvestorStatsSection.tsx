'use client';

import React from 'react';
import { 
  InvestorStats, 
  defaultInvestorStats
} from '@/types/investor-stats';
import { useInvestorStats } from '@/hooks/useInvestorStats';
import {
  ShoppingCart,
  IndianRupee,
  CreditCard,
  Clock,
  CheckCircle,
  XCircle,
  Utensils,
  Package,
  Leaf,
  Fish,
  Sprout,
  Egg,
  TrendingUp
} from 'lucide-react';

interface InvestorStatsSectionProps {
  stats?: InvestorStats;
  className?: string;
  useApi?: boolean; // Option to use API or passed stats
}

/**
 * Format number with commas
 */
const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

/**
 * Format currency (INR)
 */
const formatCurrency = (num: number): string => {
  if (num >= 10000000) {
    return `₹${(num / 10000000).toFixed(2)}Cr`;
  } else if (num >= 100000) {
    return `₹${(num / 100000).toFixed(2)}L`;
  } else if (num >= 1000) {
    return `₹${(num / 1000).toFixed(2)}K`;
  }
  return `₹${formatNumber(num)}`;
};

/**
 * Format time in minutes
 */
const formatTime = (minutes: number): string => {
  return `${minutes} min`;
};

/**
 * Format percentage
 */
const formatPercentage = (num: number): string => {
  return `${num.toFixed(2)}%`;
};

const InvestorStatsSection: React.FC<InvestorStatsSectionProps> = ({ 
  stats: providedStats,
  className = '',
  useApi = true
}) => {
  // Use TanStack Query for caching (10 minutes cache to respect rate limiting)
  // Only enable query if useApi is true and no stats were provided
  const shouldFetch = useApi && !providedStats;
  const { data: queryStats, isLoading, isError } = useInvestorStats(shouldFetch);
  
  // Use provided stats if available, otherwise use query data, fallback to default
  const stats: InvestorStats = providedStats || queryStats || defaultInvestorStats;
  // Only show loading if we're using API and no stats were provided
  const isActuallyLoading = useApi && !providedStats && isLoading;
  const error = (useApi && !providedStats && isError) ? 'Failed to load statistics. Showing cached data.' : null;

  // Featured stats (key metrics) - only backend data, no calculated values
  const featuredStats = [
    {
      value: stats.totalOrders,
      suffix: '+',
      label: 'Total Orders',
      icon: ShoppingCart,
      format: 'number' as const,
    },
    {
      value: stats.totalRevenue,
      suffix: '',
      prefix: '₹',
      label: 'Total Revenue',
      icon: IndianRupee,
      format: 'currency' as const,
    },
    {
      value: stats.avgOrderValue,
      suffix: '',
      prefix: '₹',
      label: 'Avg Order Value',
      icon: CreditCard,
      format: 'currency' as const,
    },
    {
      value: stats.avgTurnoverTime,
      suffix: ' min',
      label: 'Avg Turnover Time',
      icon: Clock,
      format: 'time' as const,
      formattedValue: stats.avgTurnoverTimeFormatted, // Original string format like "26m 53s"
    },
    {
      value: stats.totalSuccessOrders,
      suffix: '+',
      label: 'Success Orders',
      icon: CheckCircle,
      format: 'number' as const,
    },
  ];

  // Detailed stats grouped by category - only backend data, no calculated percentages
  const orderStatusStats = [
    {
      label: 'Success Orders',
      value: stats.totalSuccessOrders,
      icon: CheckCircle,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      label: 'Cancel Orders',
      value: stats.totalCancelOrders,
      icon: XCircle,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
  ];

  const orderTypeStats = [
    {
      label: 'Dine-in Orders',
      value: stats.totalDineInOrders,
      icon: Utensils,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Parcel Orders',
      value: stats.totalParcelOrders,
      icon: Package,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
  ];

  const foodCategoryStats = [
    {
      label: 'Veg Orders',
      value: stats.totalVegOrders,
      icon: Leaf,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      label: 'Non-Veg Orders',
      value: stats.totalNonVegOrders,
      icon: Fish,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      label: 'Vegan Orders',
      value: stats.totalVeganOrders,
      icon: Sprout,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      label: 'Egg Orders',
      value: stats.totalEggOrders,
      icon: Egg,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ];


  // Loading state
  if (isActuallyLoading) {
    return (
      <div className={className}>
        <section className="mb-150 relative">
          <div className="container">
            <div className="mb-12 text-center max-w-[475px] mx-auto">
              <p className="section-tagline">Our Impact</p>
              <h2>MenuMitra by the Numbers</h2>
              <p className="mt-4 text-gray-600">Loading statistics...</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-md:grid-cols-1">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white shadow-box rounded-medium p-2.5 animate-pulse">
                  <div className="bg-white border border-dashed rounded border-gray-100 p-8 h-full">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mb-4 mx-auto"></div>
                    <div className="h-12 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
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
      {/* Error message (if any) */}
      {error && (
        <div className="container mb-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
            <p className="text-yellow-800 text-sm">{error}</p>
          </div>
        </div>
      )}

      {/* Featured Stats Section */}
      <section className="mb-150 relative">
        <div className="absolute left-1/2 -top-[250px] w-full h-[550px] -translate-x-1/2 bg-cover bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
        <div className="container relative z-10">
          <div className="mb-12 text-center max-w-[475px] mx-auto">
            <p className="section-tagline">Our Impact</p>
            <h2>MenuMitra by the Numbers</h2>
            <p className="mt-4 text-gray-600">
              Real-time statistics showcasing our platform&apos;s success and growth
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-md:grid-cols-1">
            {featuredStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white shadow-box rounded-medium p-2.5 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-white border border-dashed rounded border-gray-100 p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      index % 2 === 0 ? 'bg-primary/10' : 'bg-primary-200/20'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        index % 2 === 0 ? 'text-primary' : 'text-primary-600'
                      }`} />
                    </div>
                    <h3 className="text-[22px] font-bold mb-2">
                      {stat.format === 'currency' ? (
                        <>
                          <span className="text-2xl">₹</span>
                          {formatNumber(stat.value)}
                          {stat.value >= 10000000 ? 'Cr' : stat.value >= 100000 ? 'L' : stat.value >= 1000 ? 'K' : ''}
                        </>
                      ) : stat.format === 'time' ? (
                        <>
                          {stat.formattedValue ? (
                            // Display the original formatted string directly (e.g., "26m 53s")
                            <span className="text-[22px]">{stat.formattedValue}</span>
                          ) : (
                            // Fallback to direct display if formatted value not available
                            <>
                              {typeof stat.value === 'number' && !isNaN(stat.value) ? formatNumber(stat.value) : '0'}
                              <span className="text-2xl"> min</span>
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          {formatNumber(stat.value)}
                          {stat.suffix}
                        </>
                      )}
                    </h3>
                    <p className="font-jakarta_sans text-light text-base">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Breakdown Section */}
      <section className="mb-150 relative">
        <div className="container">
          <div className="mb-12 text-center max-w-[475px] mx-auto">
            <p className="section-tagline">Detailed Analytics</p>
            <h2>Comprehensive Statistics</h2>
            <p className="mt-4 text-gray-600">
              Deep dive into order patterns, preferences, and performance metrics
            </p>
          </div>

          {/* Order Status */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Order Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {orderStatusStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white shadow-box rounded-medium p-2.5 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className={`border border-dashed rounded border-gray-100 p-6 ${stat.bgColor}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <IconComponent className={`w-8 h-8 ${stat.color}`} />
                          <h4 className="text-lg font-semibold">{stat.label}</h4>
                        </div>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <div>
                          <p className="text-3xl font-bold">
                            {formatNumber(stat.value)}+
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Types */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Order Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {orderTypeStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white shadow-box rounded-medium p-2.5 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className={`border border-dashed rounded border-gray-100 p-6 ${stat.bgColor}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <IconComponent className={`w-8 h-8 ${stat.color}`} />
                          <h4 className="text-lg font-semibold">{stat.label}</h4>
                        </div>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <div>
                          <p className="text-3xl font-bold">
                            {formatNumber(stat.value)}+
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Food Categories */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Food Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {foodCategoryStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white shadow-box rounded-medium p-2.5 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className={`border border-dashed rounded border-gray-100 p-6 ${stat.bgColor} h-full`}>
                      <div className="flex flex-col items-center text-center">
                        <IconComponent className={`w-10 h-10 ${stat.color} mb-4`} />
                        <h4 className="text-lg font-semibold mb-3">{stat.label}</h4>
                        <p className="text-2xl font-bold">
                          {formatNumber(stat.value)}+
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorStatsSection;

