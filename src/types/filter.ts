export const SORT_OPTIONS = {
  DEFAULT: 'default',
  PRICE_ASC: 'price-asc',
  PRICE_DESC: 'price-desc',
  RATING_DESC: 'rating-desc',
} as const;

export type SortOption = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];
