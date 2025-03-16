/**
 * SimpleCountdown.org Constants
 * 
 * This file defines typed constants and enums used throughout the application.
 * All values should be considered immutable.
 */

// Countdown Types
export enum CountdownType {
    FINISH_ON_ZERO = 'finishOnZero',
    RESET_BASED_ON_DATE = 'resetBasedOnDate',
  }
  
  // Time Display Formats
  export enum TimeDisplayFormat {
    DAYS_HOURS_MINUTES_SECONDS = 'daysHoursMinutesSeconds',
    DAYS_HOURS_MINUTES = 'daysHoursMinutes',
    HOURS_MINUTES_SECONDS = 'hoursMinutesSeconds',
    MINUTES_SECONDS = 'minutesSeconds',
    DAYS_ONLY = 'daysOnly',
    HOURS_ONLY = 'hoursOnly',
    MINUTES_ONLY = 'minutesOnly',
    SECONDS_ONLY = 'secondsOnly',
    CUSTOM = 'custom',
  }
  
  // Time Perspective Visualization
  export enum TimePerspective {
    LINEAR = 'linear',
    CIRCULAR = 'circular',
    HOURGLASS = 'hourglass',
    MOUNTAIN = 'mountain',
    WAVE = 'wave',
    CUSTOM = 'custom',
  }
  
  // Weather Effects
  export enum WeatherType {
    NONE = 'none',
    RAIN = 'rain',
    SNOW = 'snow',
    LEAVES = 'leaves',
    CONFETTI = 'confetti',
    BUBBLES = 'bubbles',
    STARS = 'stars',
    CUSTOM = 'custom',
  }
  
  // Weather Intensity Levels
  export enum WeatherIntensity {
    LIGHT = 'light',
    MODERATE = 'moderate',
    HEAVY = 'heavy',
    EXTREME = 'extreme',
    CUSTOM = 'custom',
  }
  
  // Background Types
  export enum BackgroundType {
    SOLID_COLOR = 'solidColor',
    GRADIENT = 'gradient',
    IMAGE = 'image',
    VIDEO = 'video',
    PARTICLE_SYSTEM = 'particleSystem',
    DAY_NIGHT_CYCLE = 'dayNightCycle',
    AMBIENT_ANIMATION = 'ambientAnimation',
    CUSTOM = 'custom',
  }
  
  // Theme Categories
  export enum ThemeCategory {
    EXCITING = 'exciting',
    SERENE = 'serene',
    MINIMALIST = 'minimalist',
    NOSTALGIC = 'nostalgic',
    FUTURISTIC = 'futuristic',
    CUSTOM = 'custom',
  }
  
  // Audio Types
  export enum AudioType {
    MUSIC = 'music',
    AMBIENT = 'ambient',
    MILESTONE_SOUND = 'milestoneSound',
    COMPLETION_SOUND = 'completionSound',
    INTERACTION_SOUND = 'interactionSound',
    CUSTOM = 'custom',
  }
  
  // Milestone Types
  export enum MilestoneType {
    PERCENTAGE = 'percentage',
    SPECIFIC_TIME = 'specificTime',
    CONDITIONAL = 'conditional',
    CUSTOM = 'custom',
  }
  
  // Milestone Actions
  export enum MilestoneAction {
    NOTIFICATION = 'notification',
    VISUAL_CHANGE = 'visualChange',
    SOUND_EFFECT = 'soundEffect',
    ELEMENT_ANIMATION = 'elementAnimation',
    MESSAGE_DISPLAY = 'messageDisplay',
    CUSTOM = 'custom',
  }
  
  // Finale Effect Types
  export enum FinaleEffectType {
    CONFETTI = 'confetti',
    FIREWORKS = 'fireworks',
    SCREEN_TAKEOVER = 'screenTakeover',
    MESSAGE_REVEAL = 'messageReveal',
    VIDEO_REVEAL = 'videoReveal',
    CUSTOM = 'custom',
  }
  
  // Layout Types
  export enum LayoutType {
    CENTERED = 'centered',
    SPLIT = 'split',
    FULLSCREEN = 'fullscreen',
    GRID = 'grid',
    FLOATING = 'floating',
    CUSTOM = 'custom',
  }
  
  // Mood Types
  export enum MoodType {
    EXCITED = 'excited',
    HAPPY = 'happy',
    NEUTRAL = 'neutral',
    ANXIOUS = 'anxious',
    NOSTALGIC = 'nostalgic',
    CUSTOM = 'custom',
  }
  
  // Interactive Element Types
  export enum InteractiveElementType {
    HIDDEN_MESSAGE = 'hiddenMessage',
    CLICK_EFFECT = 'clickEffect',
    HOVER_EFFECT = 'hoverEffect',
    PROGRESS_REVEAL = 'progressReveal',
    MINI_GAME = 'miniGame',
    CUSTOM = 'custom',
  }
  
  // Animation Types
  export enum AnimationType {
    FADE = 'fade',
    SLIDE = 'slide',
    SCALE = 'scale',
    ROTATE = 'rotate',
    BOUNCE = 'bounce',
    CUSTOM = 'custom',
  }
  
  // Typography Animation Types
  export enum TypographyAnimationType {
    FADE = 'fade',
    COUNT_UP = 'countUp',
    FLIP = 'flip',
    TYPEWRITER = 'typewriter',
    BLUR = 'blur',
    CUSTOM = 'custom',
  }
  
  // Font Categories
  export enum FontCategory {
    MODERN = 'modern',
    CLASSIC = 'classic',
    PLAYFUL = 'playful',
    ELEGANT = 'elegant',
    TECHNICAL = 'technical',
    CUSTOM = 'custom',
  }
  
  // Social Interaction Types
  export enum SocialInteractionType {
    VIEW_ONLY = 'viewOnly',
    COMMENTS_ENABLED = 'commentsEnabled',
    LIKES_ENABLED = 'likesEnabled',
    FULL_INTERACTION = 'fullInteraction',
    CUSTOM = 'custom',
  }
  
  // Permission Levels
  export enum PermissionLevel {
    NONE = 'none',
    VIEW = 'view',
    FORK = 'fork',
    EDIT = 'edit',
    FULL = 'full',
  }
  
  // Creator Studio Modes
  export enum CreatorStudioMode {
    BASIC = 'basic',
    ADVANCED = 'advanced',
    GUIDED = 'guided',
    CUSTOM = 'custom',
  }
  
  // Application Routes
  export const ROUTES = {
    HOME: '/',
    COUNTDOWN: '/countdowns',
    COUNTDOWN_DETAIL: (id: string) => `/countdowns/${id}`,
    CREATOR_STUDIO: '/creator-studio',
    DASHBOARD: '/dashboard',
    GALLERY: '/gallery',
    PROFILE: '/profile',
  } as const;
  
  // Default Configuration Values
  export const DEFAULT_CONFIG = {
    countdown: {
      type: CountdownType.FINISH_ON_ZERO,
      timeDisplayFormat: TimeDisplayFormat.DAYS_HOURS_MINUTES_SECONDS,
      timePerspective: TimePerspective.LINEAR,
    },
    weather: {
      type: WeatherType.NONE,
      intensity: WeatherIntensity.MODERATE,
    },
    background: {
      type: BackgroundType.SOLID_COLOR,
      color: '#f5f5f5',
    },
    theme: {
      category: ThemeCategory.MINIMALIST,
      primaryColor: '#3b82f6',
      secondaryColor: '#93c5fd',
      textColor: '#0f172a',
    },
    audio: {
      enabled: false,
      volume: 0.5,
      type: AudioType.MUSIC,
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      fontSize: 24,
      fontWeight: 600,
      animationType: TypographyAnimationType.FADE,
    },
    layout: {
      type: LayoutType.CENTERED,
    },
    social: {
      interactionType: SocialInteractionType.VIEW_ONLY,
      permissionLevel: PermissionLevel.VIEW,
    },
  } as const;
  
  // Time Constants
  export const TIME_CONSTANTS = {
    MILLISECONDS_PER_SECOND: 1000,
    SECONDS_PER_MINUTE: 60,
    MINUTES_PER_HOUR: 60,
    HOURS_PER_DAY: 24,
    DAYS_PER_WEEK: 7,
    DAYS_PER_MONTH: 30.44, // Average
    DAYS_PER_YEAR: 365.25, // Including leap years
    MAX_COUNTDOWN_DURATION: 365 * 24 * 60 * 60 * 1000, // 1 year in milliseconds
  } as const;
  
  // UI Constants
  export const UI_CONSTANTS = {
    ANIMATION_DURATION: 300, // in milliseconds
    TOAST_DURATION: 5000, // in milliseconds
    MAX_COUNTDOWNS_PER_USER: 50,
    DEFAULT_PAGE_SIZE: 10,
    DEFAULT_DEBOUNCE_TIME: 300, // in milliseconds
  } as const;
  
  // Media Query Breakpoints
  export const BREAKPOINTS = {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  } as const;
  
  // Local Storage Keys
  export const STORAGE_KEYS = {
    THEME: 'simplecountdown-theme',
    USER_SETTINGS: 'simplecountdown-user-settings',
    COUNTDOWNS: 'simplecountdown-countdowns',
    EDITOR_STATE: 'simplecountdown-editor-state',
  } as const;