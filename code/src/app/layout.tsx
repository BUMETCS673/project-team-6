import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthProvider from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: '/favicon.svg',
  title: 'Car Rental App',
  description: 'Generated by CS673-Team6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
