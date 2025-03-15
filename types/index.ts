/**
 * Core type definitions used across the SimpleCountdown.org project
 */

/**
 * Basic color type definition
 */
export type Color = string; // Hex, RGB, or named color

/**
 * Common ID type used throughout the application
 */
export type ID = string;

/**
 * Common timestamp format - milliseconds since epoch
 */
export type Timestamp = number;

/**
 * Standard response structure for async operations
 */
export type Result<T> = { success: true; data: T } | { success: false; error: string };

/**
 * Basic dimensions interface
 */
export interface Dimensions {
  width: number;
  height: number;
}

/**
 * Position in 2D space
 */
export interface Position {
  x: number;
  y: number;
}

/**
 * Common animation duration in milliseconds
 */
export type Duration = number;

/**
 * Application theme modes
 */
export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
  CUSTOM = 'custom',
}

/**
 * Standard responsive breakpoints
 */
export enum Breakpoint {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
}

/**
 * Configuration visibility modes
 */
export enum ConfigurationMode {
  NORMAL = 'normal',
  ADVANCED = 'advanced',
}

/**
 * Common media types
 */
export enum MediaType {
  IMAGE = 'image',
  AUDIO = 'audio',
  VIDEO = 'video',
}

/**
 * User permission levels
 */
export enum PermissionLevel {
  VIEW = 'view',
  COMMENT = 'comment',
  EDIT = 'edit',
  OWNER = 'owner',
}

/**
 * Base configuration interface that all feature configurations extend
 */
export interface BaseConfig {
  id: ID;
  name: string;
  enabled: boolean;
}

/**
 * Common interface for entities that can be saved
 */
export interface Persistable {
  id: ID;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

/**
 * Type for any asset (image, audio, etc.)
 */
export interface Asset {
  id: ID;
  type: MediaType;
  url: string;
  name: string;
}

/**
 * Type-safe implementation of partial record
 */
export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
