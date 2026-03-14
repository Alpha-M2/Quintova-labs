import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import CursorAura from '@/components/CursorAura';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quintova Labs | The Edge in Web3',
  description: 'Engineering the unseen forces of decentralized finance. Precision, security, and elegance crafted by Quintova Labs.',
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
