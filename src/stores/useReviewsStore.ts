import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { STORAGE_KEYS } from '../constants/general';
import type { Review } from '../types/vehicle';

interface ReviewsState {
  customReviews: Record<string | number, Review[]>;

  // Actions
  addReview: (vehicleId: string | number, review: Omit<Review, 'id' | 'date' | 'isCustom'>) => void;
  getCustomReviewsByVehicleId: (vehicleId: string | number) => Review[];
}

export const useReviewsStore = create<ReviewsState>()(
  persist(
    (set, get) => ({
      customReviews: {},

      addReview: (vehicleId, reviewData) => {
        const newReview: Review = {
          ...reviewData,
          id: `custom-${Date.now()}`,
          date: new Date().toISOString(),
          isCustom: true,
        };

        set((state) => {
          const existingReviews = state.customReviews[vehicleId] || [];
          return {
            customReviews: {
              ...state.customReviews,
              [vehicleId]: [newReview, ...existingReviews],
            },
          };
        });
      },

      getCustomReviewsByVehicleId: (vehicleId) => {
        return get().customReviews[vehicleId] || [];
      },
    }),
    {
      name: STORAGE_KEYS.CUSTOM_REVIEWS,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
