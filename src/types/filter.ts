export interface VehicleFilterParams {
  searchQuery?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: 'price' | 'rating' | 'title';
  sortOrder?: 'asc' | 'desc';
}
