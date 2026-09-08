import React from 'react';
import { AppId } from '../../types/changelog';

interface FilterOption {
  id: 'all' | AppId;
  label: string;
}

interface ChangelogFilterProps {
  activeFilter: 'all' | AppId;
  onFilterChange: (filter: 'all' | AppId) => void;
  availableApps: AppId[];
}

const APP_LABEL_MAP: Record<AppId, string> = {
  pos: 'MenuMitra POS',
  mobile: 'Mobile App',
  kds: 'Kitchen Display System',
};

const ChangelogFilter: React.FC<ChangelogFilterProps> = ({
  activeFilter,
  onFilterChange,
  availableApps,
}) => {
  const filterOptions: FilterOption[] = [
    { id: 'all', label: 'All Products' },
    ...availableApps.map((app) => ({
      id: app,
      label: APP_LABEL_MAP[app] || app.toUpperCase(),
    })),
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 my-8 px-4">
      {filterOptions.map((option) => {
        const isActive = activeFilter === option.id;
        return (
          <button
            key={option.id}
            onClick={() => onFilterChange(option.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
              isActive
                ? 'bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-500/20'
                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default ChangelogFilter;
