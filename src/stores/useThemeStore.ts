import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { STORAGE_KEYS, THEME_OPTIONS, type ThemeOption } from '../constants/general';

interface ThemeState {
  theme: ThemeOption;
  isSystemTheme: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeOption, isUserAction?: boolean) => void;
}

const getSystemTheme = (): ThemeOption =>
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEME_OPTIONS.DARK
    : THEME_OPTIONS.LIGHT;

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: getSystemTheme(),
      isSystemTheme: true,

      toggleTheme: () =>
        set((state) => {
          const nextTheme =
            state.theme === THEME_OPTIONS.LIGHT ? THEME_OPTIONS.DARK : THEME_OPTIONS.LIGHT;

          document.documentElement.setAttribute('data-theme', nextTheme);
          return { theme: nextTheme, isSystemTheme: false };
        }),

      setTheme: (theme: ThemeOption, isUserAction = false) => {
        document.documentElement.setAttribute('data-theme', theme);
        set({ theme, isSystemTheme: !isUserAction });
      },
    }),
    {
      name: STORAGE_KEYS.THEME,
      onRehydrateStorage: () => (state) => {
        if (state?.theme) {
          document.documentElement.setAttribute('data-theme', state.theme);
        }
      },
    },
  ),
);
