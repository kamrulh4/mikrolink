import { Geist, Playfair_Display } from 'next/font/google';
import type React from 'react';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${geist.variable} ${playfair.variable} antialiased`}
      lang="en"
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
