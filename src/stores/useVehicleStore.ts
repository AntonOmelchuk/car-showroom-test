import { create } from 'zustand';

import { vehiclesApi } from '../api/vehicleApi';
import { FETCH_STATUS, type FetchStatus } from '../constants/general';
import { TRANSLATIONS } from '../constants/translations';
import type { Vehicle } from '../types/vehicle';
import { delay } from '../utils/general';

interface VehiclesState {
  vehicles: Vehicle[];
  currentVehicle: Vehicle | null;
  status: FetchStatus;
  error: string | null;

  // Actions
  fetchVehicles: () => Promise<void>;
  fetchVehicleById: (id: string | number) => Promise<void>;
  clearCurrentVehicle: () => void;
}

export const useVehiclesStore = create<VehiclesState>((set) => ({
  vehicles: [],
  currentVehicle: null,
  status: FETCH_STATUS.IDLE,
  error: null,

  fetchVehicles: async () => {
    set({ status: FETCH_STATUS.LOADING, error: null });
    try {
      const response = await vehiclesApi.getVehicles();
      await delay(2100); // Just for test
      set({ vehicles: response.products, status: FETCH_STATUS.SUCCESS });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : TRANSLATIONS.errors.fetchFailed;
      set({ status: FETCH_STATUS.ERROR, error: errorMessage });
    }
  },

  fetchVehicleById: async (id: string | number) => {
    set({ status: FETCH_STATUS.LOADING, error: null });
    try {
      const vehicle = await vehiclesApi.getVehicleById(id);
      set({ currentVehicle: vehicle, status: FETCH_STATUS.SUCCESS });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : TRANSLATIONS.errors.fetchFailed;
      set({ status: FETCH_STATUS.ERROR, error: errorMessage });
    }
  },

  clearCurrentVehicle: () => {
    set({ currentVehicle: null });
  },
}));
