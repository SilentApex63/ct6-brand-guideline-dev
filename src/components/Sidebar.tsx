import { navigation, navigationGroups } from '@/data/navigation';

export function Sidebar({ activeSlug = 'overview' }: { activeSlug?: string }) {
  return (
    <aside className="sidebar" aria-label="Brand guideline navigation">
      <a className="brandLockup" href="/" aria-label="CT6 Companion brand guideline home">
        <span className="brandMark" aria-hidden="true">CT6</span>
        <span className="brandLockupText">
          <strong>CT6 Companion</strong>
          <small>Brand Command Manual</small>
        </span>
      </a>

      <div className="sidebarStatus" aria-label="Static app status">
        <span className="statusDot" aria-hidden="true" />
        <span>Static guideline app</span>
      </div>

      <nav className="navList">
        {navigationGroups.map((group) => (
          <section className="navGroup" key={group} aria-label={group}>
            <h2>{group}</h2>
            <div className="navGroupLinks">
              {navigation
                .filter((item) => item.group === group)
                .map((item) => {
                  const isActive = item.slug === activeSlug;

                  return (
                    <a
                      key={item.slug}
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={isActive ? 'isActive' : undefined}
                    >
                      <span className="navIndex">{item.index}</span>
                      <span>{item.label}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        ))}
      </nav>
    </aside>
  );
}
