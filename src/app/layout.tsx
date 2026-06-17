import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sze Zo Ey — Architecture Portfolio',
    template: '%s — Sze Zo Ey',
  },
  description:
    'Architecture portfolio of Sze Zo Ey — NUS graduate architect focused on regenerative design, adaptive structures, and contextual spatial thinking.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Sze Zo Ey',
    images: [{ url: '/og', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="bg-bg text-ink min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
