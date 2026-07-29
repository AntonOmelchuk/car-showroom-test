export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
  VEHICLES_CATEGORY: 'vehicle',
  TIMEOUT: 10000,
} as const;

export const FETCH_STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

export type FetchStatus = (typeof FETCH_STATUS)[keyof typeof FETCH_STATUS];

export const ROUTES = {
  HOME: '/',
  VEHICLE_DETAILS: '/vehicles/:vehicleId',
} as const;

export const STORAGE_KEYS = {
  CUSTOM_REVIEWS: 'car_showroom_custom_reviews',
} as const;

export const VALIDATION_LIMITS = {
  REVIEW_AUTHOR_MIN: 2,
  REVIEW_AUTHOR_MAX: 50,
  REVIEW_COMMENT_MIN: 5,
  REVIEW_COMMENT_MAX: 500,
} as const;
