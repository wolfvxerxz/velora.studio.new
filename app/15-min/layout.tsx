import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '15-Minute Meeting | Velora Studio',
  description: 'Schedule a quick 15-minute meeting with our team to discuss your project.',
  alternates: {
    canonical: 'https://velora.studio/15-min',
  },
};

export default function Layout({ children }: { children: React.ReactNode }): React.ReactElement {
  return <>{children}</>;
} 