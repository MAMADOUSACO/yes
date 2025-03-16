/**
 * Global constants for SimpleCountdown.org
 */

// App metadata
export const APP_NAME = 'SimpleCountdown.org';
export const APP_VERSION = '0.1.0';
export const APP_DESCRIPTION =
  'Create highly customizable, beautiful countdowns with complete control over appearance and behavior';

// Time constants (in milliseconds)
export const TIME_CONSTANTS = {
  MILLISECOND: 1,
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
  WEEK: 7 * 24 * 60 * 60 * 1000,
  MONTH: 30 * 24 * 60 * 60 * 1000, // Approximate
  YEAR: 365 * 24 * 60 * 60 * 1000, // Approximate
} as const;

// Maximum countdown durations
export const MAX_COUNTDOWN_DURATION = 10 * TIME_CONSTANTS.YEAR; // 10 years
export const DEFAULT_COUNTDOWN_DURATION = 30 * TIME_CONSTANTS.DAY; // 30 days

// Countdown types
export enum CountdownType {
  FINISH_ON_ZERO = 'finishOnZero',
  RESET_BASED_ON_DATE = 'resetBasedOnDate',
}

// Countdown display formats
export enum TimeDisplayFormat {
  DAYS_HOURS_MINUTES_SECONDS = 'daysHoursMinutesSeconds',
  HOURS_MINUTES_SECONDS = 'hoursMinutesSeconds',
  MINUTES_SECONDS = 'minutesSeconds',
  DAYS_ONLY = 'daysOnly',
  HOURS_ONLY = 'hoursOnly',
  MINUTES_ONLY = 'minutesOnly',
  SECONDS_ONLY = 'secondsOnly',
  CUSTOM = 'custom',
}

// Available weather effects
export enum WeatherEffect {
  NONE = 'none',
  RAIN = 'rain',
  SNOW = 'snow',
  LEAVES = 'leaves',
  CONFETTI = 'confetti',
  BUBBLES = 'bubbles',
  STARS = 'stars',
}

// Background types
export enum BackgroundType {
  SOLID = 'solid',
  GRADIENT = 'gradient',
  IMAGE = 'image',
  PARTICLES = 'particles',
  DAY_NIGHT = 'dayNight',
  CUSTOM = 'custom',
}

// Audio categories
export enum AudioCategory {
  AMBIENT = 'ambient',
  NOTIFICATION = 'notification',
  COMPLETION = 'completion',
  MILESTONE = 'milestone',
  INTERACTION = 'interaction',
  MUSIC = 'music',
}

// Milestone categories
export enum MilestoneCategory {
  TIME_BASED = 'timeBased',
  PERCENTAGE_BASED = 'percentageBased',
  DATE_BASED = 'dateBased',
  CUSTOM = 'custom',
}

// Milestone visibility
export enum MilestoneVisibility {
  ALWAYS = 'always',
  ON_HOVER = 'onHover',
  WHEN_REACHED = 'whenReached',
  HIDDEN = 'hidden',
}

// Animation timing functions
export enum AnimationEasing {
  LINEAR = 'linear',
  EASE_IN = 'easeIn',
  EASE_OUT = 'easeOut',
  EASE_IN_OUT = 'easeInOut',
  ELASTIC = 'elastic',
  BOUNCE = 'bounce',
}

// Configuration sections
export enum ConfigSection {
  GENERAL = 'general',
  APPEARANCE = 'appearance',
  WEATHER = 'weather',
  BACKGROUND = 'background',
  TYPOGRAPHY = 'typography',
  AUDIO = 'audio',
  MILESTONES = 'milestones',
  FINALE = 'finale',
  INTERACTIVITY = 'interactivity',
}

// Local storage keys
export const STORAGE_KEYS = {
  COUNTDOWNS: 'simplecountdown_countdowns',
  SETTINGS: 'simplecountdown_settings',
  THEME: 'simplecountdown_theme',
  LAST_VISITED: 'simplecountdown_last_visited',
  EDITOR_STATE: 'simplecountdown_editor_state',
} as const;

// Default paths
export const ROUTES = {
  HOME: '/',
  COUNTDOWNS: '/countdowns',
  COUNTDOWN_DETAIL: (id: string) => `/countdowns/${id}`,
  CREATOR_STUDIO: '/creator-studio',
  DASHBOARD: '/dashboard',
  GALLERY: '/gallery',
  PROFILE: '/profile',
} as const;

// Feature flags
export const FEATURES = {
  WEATHER_EFFECTS: true,
  AUDIO_SYSTEM: true,
  MILESTONES: true,
  SOCIAL_FEATURES: false, // Not implemented yet
  MOOD_TRACKING: true,
  FINALE_EFFECTS: true,
} as const;
