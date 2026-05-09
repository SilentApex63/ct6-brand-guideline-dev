import { navigation } from '@/data/navigation';

export function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Brand guideline navigation">
      <a className="brandLockup" href="/" aria-label="CT6 Companion brand guideline home">
        <span className="brandMark">CT6</span>
        <span>
          <strong>CT6 Companion</strong>
          <small>Brand Command Manual</small>
        </span>
      </a>
      <nav className="navList">
        {navigation.map((item) => (
          <a key={item.slug} href={item.href}>{item.label}</a>
        ))}
      </nav>
    </aside>
  );
}
