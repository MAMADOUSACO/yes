import type { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-primary">
          SimpleCountdown.org
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          Create beautiful, highly customizable countdown experiences with immersive themes,
          effects, and animations.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/creator-studio" 
            className="rounded-md bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Create a Countdown
          </Link>
          <Link 
            href="/gallery" 
            className="rounded-md border border-input bg-background px-6 py-3 text-lg font-semibold hover:bg-secondary"
          >
            Explore Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;