import type { Metadata } from 'next';
import './globals.css';
import LayoutClient from './core/providers/clientProvinder';
import { Plus_Jakarta_Sans } from 'next/font/google';

const PlusJakarta = Plus_Jakarta_Sans({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Loka-loka',
  description: 'Pusat Pembelian Tiket Event Terbesar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PlusJakarta.variable} antialiased bg-background text-foreground`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
