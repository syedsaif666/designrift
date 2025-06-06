import { useState, useCallback, useMemo } from 'react';
import {
  getDefaultSelectedColors,
  updateSelectedColor,
  generateCSSVariables,
  generateTailwindConfig,
  type SelectedColors,
  type ColorCategory,
  type RadixColors
} from '@/lib/theme-generator';

interface UseThemeGeneratorProps {
  radixColors: RadixColors;
}

export const useThemeGenerator = ({ radixColors }: UseThemeGeneratorProps) => {
  const [selectedColors, setSelectedColors] = useState<SelectedColors>(
    getDefaultSelectedColors()
  );

  const handleColorSelect = useCallback((category: ColorCategory, color: string) => {
    setSelectedColors((prev) => updateSelectedColor(prev, category, color));
  }, []);

  const cssVariables = useMemo(() => 
    generateCSSVariables(selectedColors, radixColors), 
    [selectedColors, radixColors]
  );

  const tailwindConfig = useMemo(() => 
    generateTailwindConfig(selectedColors), 
    [selectedColors]
  );

  const resetToDefaults = useCallback(() => {
    setSelectedColors(getDefaultSelectedColors());
  }, []);

  return {
    selectedColors,
    handleColorSelect,
    cssVariables,
    tailwindConfig,
    resetToDefaults
  };
};