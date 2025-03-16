import type { Metadata, Viewport } from 'next';
import { Inter, Raleway } from 'next/font/google';

import './globals.css';

// Font setup with variable support
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: 'SimpleCountdown.org | Create Beautiful, Customizable Countdowns',
  description: 'Create highly customizable, beautiful countdown timers with weather effects, custom themes, music, and more. Set the perfect vibe for any special event.',
  keywords: 'countdown timer, customizable countdown, event timer, beautiful countdown',
  creator: 'SimpleCountdown.org Team',
  openGraph: {
    title: 'SimpleCountdown.org | Create Beautiful, Customizable Countdowns',
    description: 'Create highly customizable, beautiful countdown timers with weather effects, custom themes, music, and more.',
    url: 'https://simplecountdown.org',
    siteName: 'SimpleCountdown.org',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SimpleCountdown.org Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SimpleCountdown.org | Create Beautiful, Customizable Countdowns',
    description: 'Create highly customizable, beautiful countdown timers with weather effects, custom themes, music, and more.',
    images: ['/images/twitter-image.jpg'],
  },
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${raleway.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}