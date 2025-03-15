import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../../lib/utils";

/**
 * Tabs list styles
 */
const tabsListVariants = cva(
  "inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-slate-100 dark:bg-slate-800 rounded-lg p-1",
        outline: "border-b border-slate-200 dark:border-slate-700",
        pill: "bg-transparent",
        underline: "border-b border-slate-200 dark:border-slate-700 gap-4",
      },
      size: {
        default: "h-10",
        sm: "h-8",
        lg: "h-12",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
);

/**
 * Tab trigger styles
 */
const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:shadow-sm",
        outline: "data-[state=active]:border-b-2 data-[state=active]:border-slate-900 dark:data-[state=active]:border-slate-100 -mb-px",
        pill: "data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800 rounded-full",
        underline: "data-[state=active]:border-b-2 data-[state=active]:border-slate-900 dark:data-[state=active]:border-slate-100 -mb-px",
      },
      size: {
        default: "px-3 py-1.5",
        sm: "px-2 py-1 text-xs",
        lg: "px-4 py-2",
      },
      fullWidth: {
        true: "flex-1",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
);

/**
 * Tabs content styles
 */
const tabsContentVariants = cva(
  "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "",
        outline: "pt-4",
        pill: "pt-2",
        underline: "pt-4",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Tabs component props
 */
export interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
    Omit<VariantProps<typeof tabsListVariants>, "fullWidth"> {
  /**
   * Whether the tabs should take up the full width
   */
  fullWidth?: boolean;
}

/**
 * TabsList component props
 */
export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {
}

/**
 * TabsTrigger component props
 */
export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {
}

/**
 * TabsContent component props
 */
export interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>,
    VariantProps<typeof tabsContentVariants> {
}

/**
 * Tabs component
 */
const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ className, variant, size, fullWidth, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn(className)}
    {...props}
  />
));
Tabs.displayName = TabsPrimitive.Root.displayName;

/**
 * TabsList component
 */
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, size, fullWidth, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant, size, fullWidth, className }))}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

/**
 * TabsTrigger component
 */
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, size, fullWidth, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant, size, fullWidth, className }))}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

/**
 * TabsContent component
 */
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, variant, size, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(tabsContentVariants({ variant, size, className }))}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };