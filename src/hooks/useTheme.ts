import { useEffect, useState } from 'react';

import { THEME_OPTIONS, type ThemeOption } from '../constants/general';

const LOCAL_STORAGE_KEY = 'theme';

/**
 * Custom hook for managing application theme with persistent storage
 * and system preferences fallback.
 */
export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeOption>(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeOption | null;
    if (savedTheme && Object.values(THEME_OPTIONS).includes(savedTheme)) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEME_OPTIONS.DARK
      : THEME_OPTIONS.LIGHT;
  });

  // Sync theme with document attributes and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  // Listen to OS system theme updates if user hasn't explicitly set a preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const hasSavedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!hasSavedTheme) {
        setTheme(e.matches ? THEME_OPTIONS.DARK : THEME_OPTIONS.LIGHT);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEME_OPTIONS.LIGHT ? THEME_OPTIONS.DARK : THEME_OPTIONS.LIGHT));
  };

  return {
    theme,
    isDark: theme === THEME_OPTIONS.DARK,
    toggleTheme,
  };
};
