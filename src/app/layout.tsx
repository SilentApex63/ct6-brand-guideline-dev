import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CT6 Companion Brand Guideline',
  description: 'Static brand guideline and design system for CT6 Companion.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
