'use client';

import React from 'react';
import { ThemeSidebar } from './theme-sidebar';
import type { RadixColors } from '@/lib/theme-generator';
import { useTheme } from '@/components/theme-generator/theme-provider-custom';
import Preview from '@/components/previews/previews';

interface ThemeGeneratorProps {
  radixColors: RadixColors;
}

export const ThemeGenerator: React.FC<ThemeGeneratorProps> = ({ radixColors }) => {
  const {
    selectedColors,
    handleColorSelect,
    cssVariables,
    tailwindV3Config,
    tailwindV4Complete
  } = useTheme();

  return (
    <div className="min-h-screen w-full">
      <div className="flex min-h-screen flex-col md:h-screen md:flex-row">
        <ThemeSidebar
          selectedColors={selectedColors}
          onColorSelect={handleColorSelect}
          cssVariables={cssVariables}
          tailwindV3Config={tailwindV3Config}
          tailwindV4Complete={tailwindV4Complete}
        />
        <div className="flex-1 min-h-screen md:h-full md:overflow-hidden">
          <Preview />
        </div>
      </div>
    </div>
  );
};