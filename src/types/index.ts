/**
 * Core types for SimpleCountdown.org
 * This file contains foundational types used throughout the application.
 */

// ===== UTILITY TYPES =====

/**
 * Ensures all properties in T are required
 */
export type Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Makes all properties in T optional
 */
export type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Makes all properties in T deeply optional (recursive)
 */
export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

/**
 * Creates a type with a subset of properties from T
 */
export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Creates a type with all properties from T except those in K
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Defines a range with minimum and maximum values
 */
export interface Range<T> {
  min: T;
  max: T;
}

/**
 * A generic result type for operations that can succeed or fail
 */
export interface Result<T> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * Type for any JSON-serializable value
 */
export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

// ===== USER RELATED TYPES =====

/**
 * Base user information
 */
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  preferences?: UserPreferences;
}

/**
 * User preferences
 */
export interface UserPreferences {
  theme: Theme;
  defaultCountdownSettings?: DefaultCountdownSettings;
  notifications?: NotificationPreferences;
}

/**
 * Notification preferences
 */
export interface NotificationPreferences {
  milestones: boolean;
  completions: boolean;
  reminders: boolean;
}

/**
 * Default settings for new countdowns
 */
export interface DefaultCountdownSettings {
  showDays: boolean;
  showHours: boolean;
  showMinutes: boolean;
  showSeconds: boolean;
  visualEffects: boolean;
  audioEnabled: boolean;
}

// ===== THEME RELATED TYPES =====

/**
 * Available theme options
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * Color representations
 */
export type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hex';

/**
 * RGB color model
 */
export interface ColorRGB {
  r: number;
  g: number;
  b: number;
}

/**
 * RGBA color model with alpha channel
 */
export interface ColorRGBA extends ColorRGB {
  a: number;
}

/**
 * HSL color model
 */
export interface ColorHSL {
  h: number;
  s: number;
  l: number;
}

/**
 * HSLA color model with alpha channel
 */
export interface ColorHSLA extends ColorHSL {
  a: number;
}

/**
 * Union type for all color formats
 */
export type Color = string | ColorRGB | ColorRGBA | ColorHSL | ColorHSLA;

/**
 * Gradient configuration
 */
export interface Gradient {
  colors: Color[];
  direction: number;
  type: 'linear' | 'radial';
}

/**
 * Typography settings
 */
export interface Typography {
  fontFamily: string;
  fontSize: number;
  fontWeight: number | string;
  lineHeight: number;
  letterSpacing: number;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  color: Color;
}

// ===== LAYOUT RELATED TYPES =====

/**
 * Position in 2D space
 */
export interface Position {
  x: number;
  y: number;
}

/**
 * Size dimensions
 */
export interface Dimension {
  width: number;
  height: number;
}

/**
 * Rectangle with position and dimensions
 */
export interface Rectangle extends Position, Dimension {}

/**
 * Margin or padding settings
 */
export interface Spacing {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

/**
 * Border settings
 */
export interface Border {
  width: number;
  style: 'solid' | 'dashed' | 'dotted' | 'none';
  color: Color;
  radius?: number | Spacing;
}

/**
 * Shadow effects
 */
export interface Shadow {
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
  color: Color;
  inset?: boolean;
}

/**
 * Element layout configuration
 */
export interface Layout {
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  display?: 'block' | 'inline' | 'flex' | 'grid' | 'none';
  margin?: number | Spacing;
  padding?: number | Spacing;
  zIndex?: number;
}

/**
 * Responsive breakpoints
 */
export enum Breakpoint {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = '2xl',
}

/**
 * Responsive values based on screen size
 */
export type Responsive<T> = {
  [key in Breakpoint]?: T;
} & {
  base: T;
};

// ===== ANIMATION RELATED TYPES =====

/**
 * Animation easing functions
 */
export type EasingFunction =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'cubic-bezier';

/**
 * Animation settings
 */
export interface Animation {
  duration: number;
  delay?: number;
  easing: EasingFunction;
  repeat?: number;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  fillMode?: 'none' | 'forwards' | 'backwards' | 'both';
}

/**
 * Transition settings
 */
export interface Transition {
  property: string | 'all';
  duration: number;
  timing: EasingFunction;
  delay?: number;
}

// ===== EFFECTS RELATED TYPES =====

/**
 * Background configuration options
 */
export interface BackgroundConfig {
  type: 'color' | 'gradient' | 'image' | 'video';
  color?: Color;
  gradient?: Gradient;
  imageUrl?: string;
  videoUrl?: string;
  overlay?: {
    color: Color;
    opacity: number;
  };
  blur?: number;
  parallax?: boolean;
}

/**
 * Base configuration for all weather effects
 */
export interface WeatherEffectBase {
  enabled: boolean;
  intensity: number;
  speed: number;
  color?: Color;
  direction?: number;
  size?: number;
}

/**
 * Available weather effect types
 */
export interface WeatherEffects {
  rain?: WeatherEffectBase;
  snow?: WeatherEffectBase;
  fog?: WeatherEffectBase;
  leaves?: WeatherEffectBase;
  confetti?: WeatherEffectBase;
}

/**
 * Particle system configuration
 */
export interface ParticleSystem {
  enabled: boolean;
  particleCount: number;
  particleSize: number | [number, number];
  particleColor: Color | Color[];
  particleOpacity: number | [number, number];
  particleSpeed: number | [number, number];
  particleDirection: number | [number, number];
  particleShape: 'circle' | 'square' | 'triangle' | 'star' | 'custom';
  customShape?: string;
  interactive?: boolean;
  gravity?: number;
  wind?: number;
}

// ===== AUDIO RELATED TYPES =====

/**
 * Audio source configuration
 */
export interface AudioSource {
  url: string;
  type: 'music' | 'effect' | 'ambient';
  volume: number;
  loop: boolean;
  autoplay?: boolean;
  startTime?: number;
  endTime?: number;
}

/**
 * Music playlist configuration
 */
export interface Playlist {
  tracks: AudioSource[];
  currentIndex: number;
  shuffle: boolean;
  crossfade?: number;
}

/**
 * Sound effects configuration
 */
export interface SoundEffects {
  enabled: boolean;
  volume: number;
  effects: {
    [key: string]: AudioSource;
  };
}

/**
 * Audio visualization options
 */
export interface AudioVisualization {
  enabled: boolean;
  type: 'waveform' | 'bars' | 'circular';
  color: Color;
  sensitivity: number;
  size: Dimension;
}

/**
 * Complete audio configuration
 */
export interface AudioConfig {
  music?: Playlist;
  effects?: SoundEffects;
  ambient?: AudioSource;
  visualization?: AudioVisualization;
  masterVolume: number;
  muted: boolean;
}

// ===== EVENT AND INTERACTION TYPES =====

/**
 * Event handler types
 */
export type EventHandler<T = any> = (event: T) => void;

/**
 * Interaction types
 */
export type InteractionType = 'click' | 'hover' | 'drag' | 'scroll' | 'keypress';

/**
 * Interaction configuration
 */
export interface Interaction {
  type: InteractionType;
  target: string;
  action: EventHandler;
  condition?: () => boolean;
}

/**
 * Interactive element configuration
 */
export interface InteractiveElement {
  id: string;
  type: 'button' | 'link' | 'toggle' | 'slider' | 'hidden';
  interactions: Interaction[];
  visible: boolean;
  position?: Position;
  size?: Dimension;
  style?: {
    default?: any;
    hover?: any;
    active?: any;
    disabled?: any;
  };
}

// ===== COMMON UI COMPONENT PROPS =====

/**
 * Base props for all components
 */
export interface BaseProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: EventHandler<React.MouseEvent>;
  onMouseEnter?: EventHandler<React.MouseEvent>;
  onMouseLeave?: EventHandler<React.MouseEvent>;
  onFocus?: EventHandler<React.FocusEvent>;
  onBlur?: EventHandler<React.FocusEvent>;
  tabIndex?: number;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'data-testid'?: string;
}

/**
 * Children prop type
 */
export interface WithChildren {
  children?: React.ReactNode;
}

/**
 * Common props with children
 */
export interface CommonProps extends BaseProps, WithChildren {}

// ===== API AND DATA FETCHING TYPES =====

/**
 * HTTP methods
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/**
 * API request configuration
 */
export interface ApiRequest {
  url: string;
  method: HttpMethod;
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, string>;
  timeout?: number;
  withCredentials?: boolean;
}

/**
 * API response
 */
export interface ApiResponse<T = any> {
  data?: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  error?: string;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number;
  pageSize: number;
  totalItems?: number;
  totalPages?: number;
}

/**
 * Sort parameters
 */
export interface SortParams {
  field: string;
  direction: 'asc' | 'desc';
}

/**
 * Filter parameter
 */
export interface FilterParams {
  field: string;
  operator: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'startsWith' | 'endsWith';
  value: any;
}

/**
 * Query parameters
 */
export interface QueryParams {
  pagination?: PaginationParams;
  sort?: SortParams[];
  filters?: FilterParams[];
  search?: string;
}

// ===== MISC UTILITY TYPES =====

/**
 * Type for functions that return a boolean to be used in conditions
 */
export type Predicate<T> = (value: T) => boolean;

/**
 * Type for mapping functions
 */
export type Mapper<T, U> = (value: T) => U;

/**
 * Type for function that takes no arguments and returns a value
 */
export type Factory<T> = () => T;

/**
 * Type for handling asynchronous operations
 */
export type AsyncOperation<T> = () => Promise<T>;

/**
 * Type for callback functions
 */
export type Callback<T = void> = (result: T) => void;

/**
 * Type for error handling functions
 */
export type ErrorHandler = (error: unknown) => void;

/**
 * Type for logging functions
 */
export type LogFunction = (message: string, ...args: any[]) => void;

/**
 * Logger interface
 */
export interface Logger {
  debug: LogFunction;
  info: LogFunction;
  warn: LogFunction;
  error: LogFunction;
}

/**
 * Key-value store interface
 */
export interface KeyValueStore<T = any> {
  get(key: string): T | null;
  set(key: string, value: T): void;
  remove(key: string): void;
  clear(): void;
  keys(): string[];
}

/**
 * Cache interface with TTL support
 */
export interface Cache<T = any> extends KeyValueStore<T> {
  getTTL(key: string): number | null;
  setWithTTL(key: string, value: T, ttl: number): void;
}

// No default export - using named exports only
