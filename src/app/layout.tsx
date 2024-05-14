import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import Providers from '@/components/Providers/provider';

// Remove the export for metadata
export const metadata: Metadata = {
  title: 'Totally Jordan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
