import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import CursorAura from '@/components/CursorAura';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quintova Labs | Architects of the Decentralized Frontier',
  description: 'Engineering the unseen forces of decentralized finance. Precision, security, and elegance crafted by Quintova Labs.',
  openGraph: {
    title: 'Quintova Labs | Architects of the Decentralized Frontier',
    description: 'Engineering the unseen forces of decentralized finance. Precision, security, and elegance crafted by Quintova Labs.',
    url: 'https://quintovalabs.com', // Replace with actual domain when launching
    siteName: 'Quintova Labs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Quintova Labs: Architecting the Decentralized Frontier. A minimalist black banner featuring a glowing cyan geometric hypercube.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quintova Labs | Architects of the Decentralized Frontier',
    description: 'Engineering the unseen forces of decentralized finance.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorAura />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
