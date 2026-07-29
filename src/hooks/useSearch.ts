import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';

import { useDebounce } from './useDebounce';

interface UseSearchOptions {
  maxLength?: number;
  debounceDelay?: number;
}

/**
 * Custom hook to handle search input state, sanitization, and debouncing.
 */
export const useSearch = (initialValue = '', options: UseSearchOptions = {}) => {
  const { maxLength = 50, debounceDelay = 350 } = options;

  const [value, setValue] = useState(initialValue);

  // Input sanitization and validation
  const sanitizeValue = useCallback(
    (input: string): string => {
      return (
        input
          // Allow only letters (including Cyrillic/Ukrainian), numbers, spaces, and hyphens
          .replace(/[^a-zA-Z0-9а-яА-Яa-яА-ЯёЁіІїЇєЄґҐ\s-]/g, '')
          // Limit total length
          .slice(0, maxLength)
      );
    },
    [maxLength],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement> | string) => {
      const rawValue = typeof e === 'string' ? e : e.target.value;
      const sanitized = sanitizeValue(rawValue);
      setValue(sanitized);
    },
    [sanitizeValue],
  );

  const handleClear = useCallback(() => {
    setValue('');
  }, []);

  // Debounced value for filtering/fetching
  const debouncedValue = useDebounce(value, debounceDelay);

  // Normalized search query for business logic
  const query = debouncedValue.trim().toLowerCase();

  return {
    value, // Controlled input value for immediate UI feedback
    query, // Processed and debounced query for heavy filtering/API calls
    onChange: handleChange,
    onClear: handleClear,
  };
};
