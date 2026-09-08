import React from 'react';
import { ReleaseVersionGroup, AppId, ChangeCategory } from '../../types/changelog';
import { Sparkles, ArrowUpRight, CheckCircle2, RefreshCw, ShieldCheck } from 'lucide-react';

interface ChangelogTimelineProps {
  releases: ReleaseVersionGroup[];
  activeFilter: 'all' | AppId;
}

const CATEGORY_BADGE_STYLE: Record<ChangeCategory, { label: string; className: string }> = {
  added: {
    label: 'Added',
    className: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
  },
  improved: {
    label: 'Improved',
    className: 'bg-blue-50 text-blue-700 border-blue-200/80',
  },
  fixed: {
    label: 'Fixed',
    className: 'bg-amber-50 text-amber-700 border-amber-200/80',
  },
  changed: {
    label: 'Changed',
    className: 'bg-purple-50 text-purple-700 border-purple-200/80',
  },
  security: {
    label: 'Security',
    className: 'bg-rose-50 text-rose-700 border-rose-200/80',
  },
};

const APP_BADGE_MAP: Record<AppId, string> = {
  pos: 'MenuMitra POS',
  mobile: 'Mobile App',
  kds: 'Kitchen Display System',
};

const ChangelogTimeline: React.FC<ChangelogTimelineProps> = ({ releases, activeFilter }) => {
  if (releases.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200 max-w-2xl mx-auto my-8 p-8">
        <p className="text-gray-500 text-lg font-medium">No release entries found for this product selection.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      {releases.map((group) => {
        // Filter changes for the specific app if activeFilter is not 'all'
        const filteredChanges = activeFilter === 'all'
          ? group.changes
          : group.changes.filter((change) => change.apps.includes(activeFilter));

        if (filteredChanges.length === 0) return null;

        return (
          <div key={group.version} className="relative pl-6 sm:pl-8 border-l-2 border-emerald-200 space-y-6">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />

            {/* Version Header Card */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                  Version {group.version}
                </span>
                {group.version === '2.3.3' && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <Sparkles className="w-3 h-3" /> Latest Release
                  </span>
                )}
              </div>
              {group.releaseDate && (
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {group.releaseDate}
                </span>
              )}
            </div>

            {/* Changes List Container */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-dashed border-gray-200 shadow-sm space-y-6">
              <ul className="space-y-4 divide-y divide-gray-100">
                {filteredChanges.map((item, idx) => {
                  const badge = CATEGORY_BADGE_STYLE[item.category] || CATEGORY_BADGE_STYLE.improved;
                  return (
                    <li key={item.id} className={`${idx > 0 ? 'pt-4' : ''} flex flex-col sm:flex-row sm:items-start gap-3`}>
                      {/* Category Badge */}
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border shrink-0 w-fit ${badge.className}`}
                      >
                        {badge.label}
                      </span>

                      {/* Description & App Tag Badges */}
                      <div className="flex-1 space-y-2">
                        <p className="text-base text-gray-800 font-normal leading-relaxed">
                          {item.description}
                        </p>

                        {/* Show App tags when viewing 'all' */}
                        {activeFilter === 'all' && item.apps.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {item.apps.map((app) => (
                              <span
                                key={app}
                                className="inline-block text-[11px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600 border border-gray-200/60"
                              >
                                {APP_BADGE_MAP[app] || app}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChangelogTimeline;
