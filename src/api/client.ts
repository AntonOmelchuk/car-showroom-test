import { API_CONFIG } from '../constants/general';
import { TRANSLATIONS } from '../constants/translations';

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

export async function apiClient<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new ApiError(response.status, `HTTP Error: ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as T;
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    const originalMessage = error instanceof Error ? error.message : TRANSLATIONS.errors.generic;

    throw new Error(originalMessage, { cause: error });
  }
}
