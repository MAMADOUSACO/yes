import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

/**
 * Base card variant definitions using class-variance-authority
 */
const cardVariants = cva(
  "rounded-lg border shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800",
        glass: "glass-panel",
        outline: "bg-transparent border-slate-200 dark:border-slate-700 shadow-none",
        filled: "border-transparent dark:border-transparent",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        none: "",
      },
      radius: {
        default: "rounded-lg",
        sm: "rounded-md",
        lg: "rounded-xl",
        full: "rounded-full",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  }
);

/**
 * Card container component props interface
 */
export interface CardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /**
   * When true, the card will have no padding
   */
  noPadding?: boolean;
  /**
   * When true, the card will have a hover effect
   */
  hoverable?: boolean;
  /**
   * When true, the card will have a full width
   */
  fullWidth?: boolean;
}

/**
 * Card component
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, radius, noPadding, hoverable, fullWidth, children, ...props }, ref) => {
    // Adjust size if noPadding is true
    const actualSize = noPadding ? "none" : size;
    
    // Compute additional classes
    const additionalClasses = [
      hoverable && "transition-shadow hover:shadow-md",
      fullWidth && "w-full",
    ].filter(Boolean).join(" ");

    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, size: actualSize, radius, className }),
          additionalClasses
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

/**
 * Card header component props interface
 */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * When true, the card header will have no padding
   */
  noPadding?: boolean;
}

/**
 * Card header component
 */
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, noPadding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        !noPadding && "flex flex-col space-y-1.5 p-6",
        className
      )}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

/**
 * Card title component props interface
 */
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Whether to use an h1, h2, h3, etc.
   */
  as?: React.ElementType;
}

/**
 * Card title component
 */
const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, as: Component = "h3", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

/**
 * Card description component props interface
 */
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * Card description component
 */
const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

/**
 * Card content component props interface
 */
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * When true, the card content will have no padding
   */
  noPadding?: boolean;
}

/**
 * Card content component
 */
const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, noPadding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(!noPadding && "p-6 pt-0", className)}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

/**
 * Card footer component props interface
 */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * When true, the card footer will have no padding
   */
  noPadding?: boolean;
}

/**
 * Card footer component
 */
const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, noPadding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        !noPadding && "flex items-center p-6 pt-0",
        className
      )}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };