import { Sidebar } from './Sidebar';

export function BrandShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="brandShell">
      <Sidebar />
      <main className="contentShell">{children}</main>
    </div>
  );
}
