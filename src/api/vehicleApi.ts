import { API_ENDPOINTS } from '../constants/urls';
import type { Vehicle, VehiclesResponse } from '../types/vehicle';
import { apiClient } from './client';

export const vehiclesApi = {
  /**
   * Get vehicles list
   */
  async getVehicles(): Promise<VehiclesResponse> {
    return apiClient<VehiclesResponse>(API_ENDPOINTS.VEHICLES);
  },

  /**
   * Get detailed info by vehicle ID
   */
  async getVehicleById(id: string | number): Promise<Vehicle> {
    return apiClient<Vehicle>(API_ENDPOINTS.VEHICLE_BY_ID(id));
  },

  /**
   * Search vehicle
   */
  async searchVehicles(query: string): Promise<VehiclesResponse> {
    return apiClient<VehiclesResponse>(
      `${API_ENDPOINTS.SEARCH_VEHICLES}?q=${encodeURIComponent(query)}`,
    );
  },
};
