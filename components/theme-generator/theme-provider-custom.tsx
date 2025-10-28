'use client'

import React, { createContext, useContext, useEffect } from 'react'; // Add useEffect import
import { useThemeGenerator } from '@/components/theme-generator';
import type { RadixColors, SelectedColors } from '@/lib/theme-generator';

const ThemeContext = createContext<ReturnType<typeof useThemeGenerator> | null>(null);

export const useThemeCustom = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProviderCustom');
  }
  return context;
};

interface ThemeProviderCustomProps {
  children: React.ReactNode;
  radixColors: RadixColors;
  initialSelectedColors?: SelectedColors;
}

export const ThemeProviderCustom: React.FC<ThemeProviderCustomProps> = ({ children, radixColors, initialSelectedColors }) => {
  const theme = useThemeGenerator({ radixColors, initialSelectedColors });

  // Dynamically inject/update CSS into <head>
  useEffect(() => {
    let styleElement = document.querySelector('#theme-vars') as HTMLStyleElement | null;
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'theme-vars';
      document.head.appendChild(styleElement);
    }
    styleElement.innerHTML = theme.cssVariables;
  }, [theme.cssVariables]);

  return (
    <ThemeContext.Provider value={theme}>
      {children} {/* Removed <style> from here */}
    </ThemeContext.Provider>
  );
};