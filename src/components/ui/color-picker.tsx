import * as React from "react";
import {
  HexColorPicker,
  HexColorInput,
  RgbColorPicker,
  RgbStringColorPicker,
  HslColorPicker,
  HslStringColorPicker,
  HslaColorPicker,
  HslaStringColorPicker,
  RgbaColorPicker,
} from "react-colorful";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../../lib/utils";

/**
 * Color picker container styles
 */
const colorPickerContainerVariants = cva(
  "relative",
  {
    variants: {
      size: {
        default: "w-64",
        sm: "w-48",
        lg: "w-80",
        xl: "w-96",
        custom: "", // Will use the className for custom sizing
      },
      variant: {
        default: "",
        inline: "w-full flex flex-col space-y-3",
        popover: "bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-3 shadow-lg",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

/**
 * Color format types
 */
export type ColorFormat = 
  | "hex"
  | "rgb" 
  | "rgba"
  | "rgb-string" 
  | "hsl" 
  | "hsla"
  | "hsl-string"
  | "hsla-string";

/**
 * Color value types
 */
export type HexColor = string;

export interface RgbColor {
  r: number;
  g: number;
  b: number;
}

export interface RgbaColor extends RgbColor {
  a: number;
}

export type RgbStringColor = string;
export type RgbaStringColor = string;

export interface HslColor {
  h: number;
  s: number;
  l: number;
}

export interface HslaColor extends HslColor {
  a: number;
}

export type HslStringColor = string;
export type HslaStringColor = string;

/**
 * Union type for all possible color values
 */
export type ColorValue = 
  | HexColor
  | RgbColor
  | RgbaColor
  | RgbStringColor
  | RgbaStringColor
  | HslColor
  | HslaColor
  | HslStringColor
  | HslaStringColor;

/**
 * Base color picker props with generic color value type
 */
export interface ColorPickerProps<T extends ColorValue = HexColor>
  extends VariantProps<typeof colorPickerContainerVariants>,
    Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "onChange"> {
  /**
   * Color format to use
   */
  format?: ColorFormat;
  /**
   * Current color value
   */
  color: T;
  /**
   * Callback for when the color changes
   */
  onChange: (color: T) => void;
  /**
   * Show color input field
   */
  showInput?: boolean;
  /**
   * Custom placeholder for the input field
   */
  placeholder?: string;
  /**
   * Label for the color picker
   */
  label?: string;
  /**
   * Custom styles to apply to the picker
   */
  pickerClassName?: string;
  /**
   * Custom styles to apply to the input field
   */
  inputClassName?: string;
  /**
   * Custom styles to apply to the label
   */
  labelClassName?: string;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
}

/**
 * Color picker component
 */
export function ColorPicker<T extends ColorValue = HexColor>({
  className,
  pickerClassName,
  inputClassName,
  labelClassName,
  size,
  variant,
  format = "hex" as ColorFormat,
  color,
  onChange,
  showInput = true,
  placeholder = "Enter a color value",
  label,
  disabled = false,
  ...props
}: ColorPickerProps<T>) {
  // Component to render based on format
  const renderColorPicker = () => {
    const pickerProps = {
      color: color as any,
      onChange: onChange as any,
      className: cn(
        "w-full rounded-md",
        disabled && "opacity-50 cursor-not-allowed",
        pickerClassName
      ),
    };

    switch (format) {
      case "hex":
        return <HexColorPicker {...pickerProps} />;
      case "rgb":
        return <RgbColorPicker {...pickerProps} />;
      case "rgba":
        return <RgbaColorPicker {...pickerProps} />;
      case "rgb-string":
        return <RgbStringColorPicker {...pickerProps} />;
      case "hsl":
        return <HslColorPicker {...pickerProps} />;
      case "hsla":
        return <HslaColorPicker {...pickerProps} />;
      case "hsl-string":
        return <HslStringColorPicker {...pickerProps} />;
      case "hsla-string":
        return <HslaStringColorPicker {...pickerProps} />;
      default:
        return <HexColorPicker {...pickerProps} />;
    }
  };

  // Render input based on format
  const renderInput = () => {
    if (!showInput) return null;

    if (format === "hex") {
      return (
        <HexColorInput
          color={color as string}
          onChange={onChange as (color: string) => void}
          prefixed
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md",
            "bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50",
            "focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600",
            disabled && "opacity-50 cursor-not-allowed",
            inputClassName
          )}
        />
      );
    }

    // For other formats, render a read-only input that shows the current value
    return (
      <input
        type="text"
        value={
          typeof color === "object" 
            ? JSON.stringify(color) 
            : String(color)
        }
        readOnly
        disabled={disabled}
        className={cn(
          "w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md",
          "bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50",
          "focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600",
          disabled && "opacity-50 cursor-not-allowed",
          inputClassName
        )}
      />
    );
  };

  return (
    <div 
      className={cn(
        colorPickerContainerVariants({ size, variant }),
        className
      )}
      {...props}
    >
      {label && (
        <label 
          className={cn(
            "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      {renderColorPicker()}
      {showInput && (
        <div className="mt-2">
          {renderInput()}
        </div>
      )}
    </div>
  );
}

/**
 * Specific Hex Color Picker component for convenience
 */
export function HexColorPickerField({
  ...props
}: Omit<ColorPickerProps<HexColor>, "format">) {
  return <ColorPicker<HexColor> format="hex" {...props} />;
}

/**
 * Specific RGB Color Picker component for convenience
 */
export function RgbColorPickerField({
  ...props
}: Omit<ColorPickerProps<RgbColor>, "format">) {
  return <ColorPicker<RgbColor> format="rgb" {...props} />;
}

/**
 * Specific RGBA Color Picker component for convenience
 */
export function RgbaColorPickerField({
  ...props
}: Omit<ColorPickerProps<RgbaColor>, "format">) {
  return <ColorPicker<RgbaColor> format="rgba" {...props} />;
}

/**
 * Specific HSL Color Picker component for convenience
 */
export function HslColorPickerField({
  ...props
}: Omit<ColorPickerProps<HslColor>, "format">) {
  return <ColorPicker<HslColor> format="hsl" {...props} />;
}

export default ColorPicker;