export type AppId = 'pos' | 'mobile' | 'kds';

export type ChangeCategory = 'added' | 'improved' | 'fixed' | 'changed' | 'security';

export interface ChangeItem {
  id: string;
  category: ChangeCategory;
  description: string;
  apps: AppId[];
}

export interface ReleaseVersionGroup {
  version: string;
  releaseDate?: string;
  changes: ChangeItem[];
}
