import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Montserrat } from 'next/font/google';
import './globals.css';
import { APP_NAME, APP_DESCRIPTION } from '../lib/constants';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

// Metadata for the application
export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: ['countdown', 'timer', 'event', 'customizable', 'countdown timer'],
  authors: [
    {
      name: 'SimpleCountdown Team',
      url: 'https://simplecountdown.org',
    },
  ],
  creator: 'SimpleCountdown Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://simplecountdown.org',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    creator: '@simplecountdown',
  },
  icons: {
    icon: './assets/images/icons/favicon.ico',
    shortcut: '/assets/images/icons/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen bg-background-light dark:bg-background-dark antialiased">
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}