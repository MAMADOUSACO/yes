"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ButtonPreviewPage() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Button Component Preview</h1>
      
      {/* Variants */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Button Variants</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <Button>Default Button</Button>
            <span className="text-sm text-muted-foreground">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="destructive">Destructive</Button>
            <span className="text-sm text-muted-foreground">Destructive</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="outline">Outline</Button>
            <span className="text-sm text-muted-foreground">Outline</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="secondary">Secondary</Button>
            <span className="text-sm text-muted-foreground">Secondary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="ghost">Ghost</Button>
            <span className="text-sm text-muted-foreground">Ghost</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="link">Link Button</Button>
            <span className="text-sm text-muted-foreground">Link</span>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Button Sizes</h2>
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex flex-col items-center gap-2">
            <Button size="sm">Small Button</Button>
            <span className="text-sm text-muted-foreground">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button>Default Size</Button>
            <span className="text-sm text-muted-foreground">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="lg">Large Button</Button>
            <span className="text-sm text-muted-foreground">Large</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </Button>
            <span className="text-sm text-muted-foreground">Icon</span>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Button States</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <Button disabled>Disabled Button</Button>
            <span className="text-sm text-muted-foreground">Disabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button className="ring-2 ring-ring ring-offset-2">Focused (Visual)</Button>
            <span className="text-sm text-muted-foreground">Focus (simulated)</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-center">
              <Button id="clickable-button" onClick={() => alert('Button clicked!')}>
                Click Me
              </Button>
            </div>
            <span className="text-sm text-muted-foreground">Clickable</span>
          </div>
        </div>
      </section>

      {/* asChild Example */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">asChild Example</h2>
        <div className="flex justify-center">
          <Button asChild>
            <Link href="/">Go to Home</Link>
          </Button>
        </div>
        <div className="text-center mt-2">
          <span className="text-sm text-muted-foreground">
            This button is actually a Next.js Link component
          </span>
        </div>
      </section>

      {/* Variant Combinations */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Variant Combinations</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <Button variant="outline" size="sm">Small Outline</Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="secondary" size="lg">Large Secondary</Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="destructive" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="ghost" disabled>
              Disabled Ghost
            </Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="outline" className="border-2 border-primary">
              Custom Styled
            </Button>
          </div>
        </div>
      </section>

      {/* Theme Toggle */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Theme Integration</h2>
        <div className="flex justify-center gap-4">
          <Button 
            onClick={() => document.documentElement.classList.toggle('dark')}
            variant="outline"
          >
            Toggle Dark Mode
          </Button>
          <span className="text-sm text-muted-foreground pt-2">
            (Tests light/dark mode variable integration)
          </span>
        </div>
      </section>

      <footer className="text-center mt-12 text-sm text-muted-foreground">
        <p>SimpleCountdown.org Button Component Test</p>
      </footer>
    </div>
  );
}