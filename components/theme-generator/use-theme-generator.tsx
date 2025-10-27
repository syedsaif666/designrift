'use client'

import { useState, useCallback, useMemo, useEffect } from 'react';
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

  const cssVariables = useMemo(
    () => generateCSSVariables(selectedColors, radixColors),
    [selectedColors, radixColors]
  );

  const tailwindV3Config = useMemo(
    () => generateTailwindV3Config(selectedColors),
    [selectedColors]
  );

  const tailwindV4Complete = useMemo(
    () => generateTailwindV4Complete(selectedColors, radixColors),
    [selectedColors, radixColors]
  );

  const resetToDefaults = useCallback(() => {
    const defaultColors = getDefaultSelectedColors();
    setSelectedColors(defaultColors);
    if (typeof window !== 'undefined') {
      document.cookie = `designrift-color-theme=${JSON.stringify(defaultColors)}; path=/; max-age=31536000`;
    }
  }, []);

  // ✅ Apply CSS variables to the document's root element
  // useEffect(() => {
  //   const root = document.documentElement;
  //   const style = cssVariables.split(';').filter(Boolean);
  //   style.forEach((cssVar) => {
  //     const [property, value] = cssVar.split(':').map((str) => str.trim());
  //     if (property && value) {
  //       root.style.setProperty(property, value);
  //     }
  //   });
  // }, [cssVariables]);

  // ✅ Sync theme on tab focus
  useEffect(() => {
    const handleFocus = () => {
      try {
        const match = document.cookie.match(/designrift-color-theme=([^;]+)/);
        if (match?.[1]) {
          const cookieColors = JSON.parse(decodeURIComponent(match[1]));
          // Update only if the cookie differs from current state
          if (JSON.stringify(cookieColors) !== JSON.stringify(selectedColors)) {
            setSelectedColors(cookieColors);
          }
        }
      } catch (err) {
        console.error('Failed to parse designrift-color-theme cookie:', err);
      }
    };

    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') handleFocus();
    });

    return () => {
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleFocus);
    };
  }, [selectedColors]);

  return {
    selectedColors,
    handleColorSelect,
    cssVariables,
    tailwindV3Config,
    tailwindV4Complete,
    resetToDefaults
  };
};