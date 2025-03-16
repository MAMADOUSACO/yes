import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat, JetBrains_Mono } from 'next/font/google';
import { Button } from '@/components/ui/button';

// Font configuration
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

// Metadata for the application
export const metadata: Metadata = {
  title: 'SimpleCountdown.org',
  description: 'Create beautiful, customizable countdowns for all your important moments',
  keywords: ['countdown', 'timer', 'event', 'customizable', 'celebration'],
  creator: 'SimpleCountdown Team',
  icons: {
    icon: '/assets/images/icons/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <header className="border-b border-slate-200 dark:border-slate-700">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <h1 className="font-display text-2xl font-bold">SimpleCountdown.org</h1>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-6">{children}</main>
        <footer className="mt-12 border-t border-slate-200 py-6 dark:border-slate-700">
          <div className="container mx-auto px-4 text-center text-muted">
            <p>© {new Date().getFullYear()} SimpleCountdown.org</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
