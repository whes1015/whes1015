'use client';

import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const storedDarkMode = window?.localStorage?.getItem('darkMode') === 'true';
      setIsDarkMode(storedDarkMode);
      document.documentElement.classList.toggle('dark', storedDarkMode);
    }
    catch (error) {
      console.error('Failed to access localStorage:', error);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev;
      try {
        window?.localStorage?.setItem('darkMode', String(newValue));
        document.documentElement.classList.toggle('dark', newValue);
      }
      catch (error) {
        console.error('Failed to access localStorage:', error);
      }
      return newValue;
    });
  };

  return {
    isDarkMode,
    toggleDarkMode,
    mounted,
  };
}
