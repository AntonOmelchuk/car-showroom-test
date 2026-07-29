export const API_ENDPOINTS = {
  VEHICLES: '/products/category/vehicle',
  VEHICLE_BY_ID: (id: string | number) => `/products/${id}`,
  SEARCH_VEHICLES: '/products/search',
} as const;
