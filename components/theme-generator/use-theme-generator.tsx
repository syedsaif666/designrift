'use client'

import { useState, useCallback, useMemo } from 'react';
import {
  getDefaultSelectedColors,
  updateSelectedColor,
  generateCSSVariables,
  generateTailwindV3Config,
  generateTailwindV4Complete,
  type SelectedColors,
  type ColorCategory,
  type RadixColors
} from '@/lib/theme-generator';

interface UseThemeGeneratorProps {
  radixColors: RadixColors;
  initialSelectedColors?: SelectedColors;
}

export const useThemeGenerator = ({ radixColors, initialSelectedColors }: UseThemeGeneratorProps) => {
  const [selectedColors, setSelectedColors] = useState<SelectedColors>(
    initialSelectedColors || getDefaultSelectedColors()
  );

  const handleColorSelect = useCallback((category: ColorCategory, color: string) => {
    setSelectedColors((prev) => {
      const newColors = updateSelectedColor(prev, category, color);
      if (typeof window !== 'undefined') {
        document.cookie = `designrift-color-theme=${JSON.stringify(newColors)}; path=/; max-age=31536000`;
      }
      return newColors;
    });
  }, []);

  const cssVariables = useMemo(() => 
    generateCSSVariables(selectedColors, radixColors), 
    [selectedColors, radixColors]
  );

  const tailwindV3Config = useMemo(() => 
    generateTailwindV3Config(selectedColors), 
    [selectedColors]
  );

  const tailwindV4Complete = useMemo(() => 
    generateTailwindV4Complete(selectedColors, radixColors), 
    [selectedColors, radixColors]
  );

  const resetToDefaults = useCallback(() => {
    const defaultColors = getDefaultSelectedColors();
    setSelectedColors(defaultColors);
    if (typeof window !== 'undefined') {
      document.cookie = `designrift-color-theme=${JSON.stringify(defaultColors)}; path=/; max-age=31536000`; // 1 year expiration
    }
  }, []);

  return {
    selectedColors,
    handleColorSelect,
    cssVariables,
    tailwindV3Config,
    tailwindV4Complete,
    resetToDefaults
  };
};