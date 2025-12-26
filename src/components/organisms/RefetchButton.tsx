'use client';

import React from 'react';
import { RotateCw } from 'lucide-react';
import { useInvestorStats } from '@/hooks/useInvestorStats';

interface RefetchButtonProps {
  className?: string;
}

const RefetchButton: React.FC<RefetchButtonProps> = ({ className = '' }) => {
  const { refetch, isRefetching } = useInvestorStats(true);
  
  const handleRefetch = async () => {
    await refetch();
  };

  // Determine if we should use fixed or absolute positioning
  const isAbsolute = className.includes('!absolute');
  const isRelative = className.includes('!relative');
  const baseClasses = isAbsolute 
    ? 'absolute top-0 right-0 z-50' 
    : isRelative
    ? 'relative inline-block'
    : 'fixed bottom-8 right-8 z-50';
  
  return (
    <button
      onClick={handleRefetch}
      disabled={isRefetching}
      className={`${baseClasses} p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed group ${className}`}
      title="Refresh data"
      aria-label="Refresh statistics"
    >
      <RotateCw 
        className={`w-6 h-6 text-gray-700 group-hover:text-primary transition-colors ${isRefetching ? 'animate-spin' : ''}`} 
      />
    </button>
  );
};

export default RefetchButton;

