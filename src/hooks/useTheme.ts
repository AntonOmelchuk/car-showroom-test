import { useEffect } from 'react';

import { THEME_OPTIONS } from '../constants/general';
import { TRANSLATIONS } from '../constants/translations';
import { useThemeStore } from '../stores/useThemeStore';

/**
 * Custom hook wrapping useThemeStore to handle theme state,
 * system preference listeners, and UI label formatting.
 */
const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const isSystemTheme = useThemeStore((state) => state.isSystemTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const setTheme = useThemeStore((state) => state.setTheme);

  // Listen to OS system theme updates only if user hasn't toggled manually
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (isSystemTheme) {
        const newTheme = e.matches ? THEME_OPTIONS.DARK : THEME_OPTIONS.LIGHT;
        setTheme(newTheme, false);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [isSystemTheme, setTheme]);

  const isDark = theme === THEME_OPTIONS.DARK;
  const themeIcon = isDark ? '☀️' : '🌙';
  const themeLabel = isDark ? TRANSLATIONS.header.themeLight : TRANSLATIONS.header.themeDark;

  return {
    theme,
    isDark,
    themeIcon,
    themeLabel,
    toggleTheme,
  };
};

export default useTheme;
