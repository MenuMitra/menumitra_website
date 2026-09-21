'use client';

import React, { useState, useMemo } from 'react';
import { CHANGELOG_RELEASES } from '../../data/changelogData';
import { AppId } from '../../types/changelog';
import ChangelogFilter from './ChangelogFilter';
import ChangelogTimeline from './ChangelogTimeline';

const ChangelogClient: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | AppId>('all');

  // Compute available apps dynamically from dataset
  const availableApps = useMemo(() => {
    const appsSet = new Set<AppId>();
    CHANGELOG_RELEASES.forEach((group) => {
      group.changes.forEach((change) => {
        change.apps.forEach((app) => appsSet.add(app));
      });
    });
    return Array.from(appsSet);
  }, []);

  return (
    <section className="py-12 bg-white min-h-[500px]">
      <div className="container mx-auto">
        <ChangelogFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          availableApps={availableApps}
        />
        <ChangelogTimeline
          releases={CHANGELOG_RELEASES}
          activeFilter={activeFilter}
        />
      </div>
    </section>
  );
};

export default ChangelogClient;
