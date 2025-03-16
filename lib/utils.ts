import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines and merges class names using clsx and tailwind-merge
 * Useful for conditionally applying Tailwind CSS classes
 *
 * @example
 * cn('fixed inset-0', isOpen && 'bg-slate-900/50', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
