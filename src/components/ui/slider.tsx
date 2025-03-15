import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../../lib/utils";

/**
 * Slider track variant definitions
 */
const sliderTrackVariants = cva(
  "relative h-2 w-full grow rounded-full",
  {
    variants: {
      variant: {
        default: "bg-slate-200 dark:bg-slate-800",
        primary: "bg-blue-100 dark:bg-blue-950",
        accent: "bg-indigo-100 dark:bg-indigo-950",
        success: "bg-green-100 dark:bg-green-950",
        warning: "bg-yellow-100 dark:bg-yellow-950",
        danger: "bg-red-100 dark:bg-red-950",
      },
      size: {
        default: "h-2",
        sm: "h-1",
        lg: "h-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Slider range variant definitions
 */
const sliderRangeVariants = cva(
  "absolute h-full rounded-full",
  {
    variants: {
      variant: {
        default: "bg-slate-900 dark:bg-slate-400",
        primary: "bg-blue-600 dark:bg-blue-400",
        accent: "bg-indigo-600 dark:bg-indigo-400",
        success: "bg-green-600 dark:bg-green-400",
        warning: "bg-yellow-600 dark:bg-yellow-400",
        danger: "bg-red-600 dark:bg-red-400",
      },
      size: {
        default: "h-2",
        sm: "h-1",
        lg: "h-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Slider thumb variant definitions
 */
const sliderThumbVariants = cva(
  "block rounded-full border-2 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-slate-900 bg-white dark:border-slate-100",
        primary: "border-blue-600 bg-white dark:border-blue-400",
        accent: "border-indigo-600 bg-white dark:border-indigo-400",
        success: "border-green-600 bg-white dark:border-green-400",
        warning: "border-yellow-600 bg-white dark:border-yellow-400",
        danger: "border-red-600 bg-white dark:border-red-400",
      },
      size: {
        default: "h-5 w-5",
        sm: "h-3 w-3",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Base slider props interface
 */
export interface SliderProps
  extends Omit<SliderPrimitive.SliderProps, "value" | "defaultValue" | "onValueChange" | "onValueCommit">,
    VariantProps<typeof sliderTrackVariants> {
  /**
   * Custom track class name
   */
  trackClassName?: string;
  /**
   * Custom range class name
   */
  rangeClassName?: string;
  /**
   * Custom thumb class name
   */
  thumbClassName?: string;
  /**
   * Whether to show value label
   */
  showValueLabel?: boolean;
  /**
   * The value label format function
   */
  formatValue?: (value: number) => string;
  /**
   * Whether the slider should be disabled
   */
  disabled?: boolean;
  /**
   * The minimum value
   */
  min?: number;
  /**
   * The maximum value
   */
  max?: number;
  /**
   * The step value
   */
  step?: number;
  /**
   * Current value
   */
  value?: number[];
  /**
   * Default value
   */
  defaultValue?: number[];
  /**
   * Value change handler
   */
  onValueChange?: (value: number[]) => void;
  /**
   * Value commit handler
   */
  onValueCommit?: (value: number[]) => void;
  /**
   * The range slider color variant
   */
  rangeVariant?: VariantProps<typeof sliderRangeVariants>["variant"];
  /**
   * The thumb variant
   */
  thumbVariant?: VariantProps<typeof sliderThumbVariants>["variant"];
}

/**
 * Slider component for numeric values
 */
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({
  className,
  variant,
  size,
  trackClassName,
  rangeClassName,
  thumbClassName,
  showValueLabel = false,
  formatValue = (value) => `${value}`,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  value,
  defaultValue,
  onValueChange,
  onValueCommit,
  rangeVariant,
  thumbVariant,
  ...props
}, ref) => {
  // Use the track variant for range/thumb if not explicitly set
  const actualRangeVariant = rangeVariant || variant;
  const actualThumbVariant = thumbVariant || variant;
  
  // Generate a unique ID for label association
  const id = React.useId();
  
  // Format the displayed value
  const displayValue = value ? formatValue(value[0]) : defaultValue ? formatValue(defaultValue[0]) : "";

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        {showValueLabel && (
          <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {displayValue}
          </div>
        )}
      </div>
      <SliderPrimitive.Root
        ref={ref}
        id={id}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        onValueCommit={onValueCommit}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          disabled && "opacity-60 cursor-not-allowed"
        )}
        {...props}
      >
        <SliderPrimitive.Track
          className={cn(sliderTrackVariants({ variant, size }), trackClassName)}
        >
          <SliderPrimitive.Range 
            className={cn(
              sliderRangeVariants({ variant: actualRangeVariant, size }), 
              rangeClassName
            )} 
          />
        </SliderPrimitive.Track>
        {/* Map through value or defaultValue to create thumbs */}
        {(value || defaultValue || [0]).map((_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className={cn(
              sliderThumbVariants({ variant: actualThumbVariant, size }),
              thumbClassName
            )}
            aria-label={`Value ${index + 1}`}
          />
        ))}
      </SliderPrimitive.Root>
    </div>
  );
});
Slider.displayName = "Slider";

export { Slider };