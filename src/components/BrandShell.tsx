import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { getNavigationItem } from '@/data/navigation';

export function BrandShell({ children, activeSlug = 'overview' }: { children: ReactNode; activeSlug?: string }) {
  const activeItem = getNavigationItem(activeSlug);

  return (
    <div className="brandShell">
      <Sidebar activeSlug={activeSlug} />
      <div className="mainShell">
        <header className="commandBar" aria-label="Current guideline section">
          <div>
            <p className="commandBarLabel">CT6 Brand System</p>
            <strong>{activeItem?.label ?? 'Overview'}</strong>
          </div>
          <div className="commandBarMeta" aria-label="Project metadata">
            <span>Command Glass Ops</span>
            <span>v1.4</span>
            <span>Static</span>
          </div>
        </header>
        <main className="contentShell">{children}</main>
      </div>
    </div>
  );
}
