import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import CursorFollower from '@/components/CursorFollower';
import { siteConfig } from '@/lib/content';

// Self-hosted variable fonts (no layout shift, no network at build time).
const satoshi = localFont({
  src: '../../public/fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
  weight: '300 900',
  display: 'swap',
});

const inter = localFont({
  src: '../../public/fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  weight: '100 900',
  display: 'swap',
});

const jetbrainsMono = localFont({
  src: '../../public/fonts/JetBrainsMono-Variable.woff2',
  variable: '--font-mono',
  weight: '100 800',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Swaroop · Brand & Content Leader',
  description:
    'I build brands students trust, and the systems that scale them. Associate Director, Brand & Content at Scaler School of Technology, with a 1M+ organic audience built from zero.',
  keywords: [
    'Swaroop',
    'B Jyothi Swaroop',
    'Scaler SST',
    'Telugu tech education',
    'content creator',
    'brand operator',
    'Mentiby',
  ],
  authors: [{ name: 'B. Jyothi Swaroop' }],
  creator: 'B. Jyothi Swaroop',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: 'Swaroop · Brand & Content Leader',
    description:
      'I build brands students trust, and the systems that scale them. Associate Director, Brand & Content at Scaler School of Technology, with a 1M+ organic audience built from zero.',
    siteName: 'Swaroop',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Swaroop' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swaroop · Brand & Content Leader',
    description:
      'I build brands students trust, and the systems that scale them. Associate Director, Brand & Content at Scaler School of Technology, with a 1M+ organic audience built from zero.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#050505',
  colorScheme: 'dark',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'B. Jyothi Swaroop',
  alternateName: 'Swaroop',
  url: siteConfig.url,
  jobTitle: 'Associate Director of Brand',
  worksFor: { '@type': 'Organization', name: 'Scaler School of Technology' },
  sameAs: [
    'https://youtube.com/@SwaroopVITB',
    'https://instagram.com/codewithswaroop',
    'https://linkedin.com/in/swaroop-talks',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
        <CursorFollower />
      </body>
    </html>
  );
}
