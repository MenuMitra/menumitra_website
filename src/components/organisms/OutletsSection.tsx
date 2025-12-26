'use client';

import React from 'react';
import {
  Store,
  Leaf,
  Fish,
  Coffee,
  Building,
  Utensils,
  Pizza,
  CircleDot as Bread,
  ShoppingBag,
  Truck,
  Cloud,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { InvestorStats, defaultInvestorStats } from '@/types/investor-stats';
import { useInvestorStats } from '@/hooks/useInvestorStats';

interface OutletsSectionProps {
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

const OutletsSection: React.FC<OutletsSectionProps> = ({ 
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
  // Outlet type icons mapping
  const outletTypeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    restaurant: Utensils,
    cafe: Coffee,
    hotel: Building,
    qsr: ShoppingBag,
    bakeries: Bread,
    pizzeria: Pizza,
    'fine-dine': Utensils,
    'food-courts': Store,
    'food-truck': Truck,
    'bar-pub': Coffee,
    catering: Utensils,
    'cloud-kitchens': Cloud,
    'large-chain': Building,
  };

  // Outlet type labels mapping
  const outletTypeLabels: Record<string, string> = {
    restaurant: 'Restaurant',
    cafe: 'Cafe',
    hotel: 'Hotel',
    qsr: 'QSR',
    bakeries: 'Bakeries',
    pizzeria: 'Pizzeria',
    'fine-dine': 'Fine Dine',
    'food-courts': 'Food Courts',
    'food-truck': 'Food Truck',
    'bar-pub': 'Bar & Pub',
    catering: 'Catering',
    'cloud-kitchens': 'Cloud Kitchens',
    'large-chain': 'Large Chain',
  };

  // Featured outlet stats
  const featuredOutletStats = [
    {
      value: stats.totalOutlets,
      label: 'Total Outlets',
      icon: Store,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      value: stats.totalVegOutlets,
      label: 'Veg Outlets',
      icon: Leaf,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      value: stats.totalNonVegOutlets,
      label: 'Non-Veg Outlets',
      icon: Fish,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      value: stats.outletsOnboardedThisMonth,
      label: 'Onboarded This Month',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  // Get outlet types with counts (filter out zeros)
  const outletTypesWithCounts = Object.entries(stats.outletsByType)
    .map(([type, count]) => ({
      type,
      count,
      label: outletTypeLabels[type] || type,
      icon: outletTypeIcons[type] || Store,
    }))
    .filter(item => item.count > 0)
    .sort((a, b) => b.count - a.count); // Sort by count descending

  // Loading state
  if (isActuallyLoading) {
    return (
      <div className={className}>
        <section className="mb-150 relative">
          <div className="container">
            <div className="mb-12 text-center max-w-[475px] mx-auto">
              <p className="section-tagline">Our Network</p>
              <h2>Outlets</h2>
              <p className="mt-4 text-gray-600">Loading outlet statistics...</p>
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
      {/* Outlets Section */}
      <section className="mb-150 relative">
        <div className="container">
          <div className="mb-12 text-center max-w-[475px] mx-auto">
            <p className="section-tagline">Our Network</p>
            <h2>Outlets</h2>
            <p className="mt-4 text-gray-600">
              Comprehensive overview of MenuMitra&apos;s growing network of restaurant partners
            </p>
          </div>

          {/* Featured Outlet Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-md:grid-cols-1 mb-12">
            {featuredOutletStats.map((stat, index) => {
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

          {/* Outlets by Type */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Outlets by Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {outletTypesWithCounts.length > 0 ? (
                outletTypesWithCounts.map((outletType, index) => {
                  const IconComponent = outletType.icon;
                  
                  return (
                    <div 
                      key={outletType.type}
                      className="bg-white shadow-box rounded-medium p-2.5 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="border border-dashed rounded border-gray-100 p-6 bg-white h-full flex flex-col">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-800 mb-1">{outletType.label}</h4>
                            <p className="text-3xl font-bold text-gray-900">
                              {formatNumber(outletType.count)}+
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-8 text-gray-500">
                  <Store className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No outlet data available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutletsSection;

