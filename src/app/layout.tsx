import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CT6 Companion Brand Guideline',
  description: 'Static brand guideline and design system for CT6 Companion.',
  icons: {
    icon: [
      {
        url: '/icon.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}