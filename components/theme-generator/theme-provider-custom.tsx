'use client'

import React, { createContext, useContext } from 'react';
import { useThemeGenerator } from '@/components/theme-generator';
import type { RadixColors, SelectedColors } from '@/lib/theme-generator';

const ThemeContext = createContext<ReturnType<typeof useThemeGenerator> | null>(null);

export const useTheme = () => {
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

  return (
    <ThemeContext.Provider value={theme}>
      <style>{theme.cssVariables}</style>
      {children}
    </ThemeContext.Provider>
  );
};