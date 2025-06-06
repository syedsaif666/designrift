import React from 'react';
import Link from 'next/link';
import { AppearanceTabs } from '@/components/ui/appearance-tabs';
import { CodeDialog } from '@/components/ui/code-dialog';
import Logo from '@/components/logo/Logo';
import { ColorCategorySection } from './color-category-section';
import {
  allColors,
  canvasRecommendedColors,
  colorCategories,
  getPrimaryRecommendations,
  type SelectedColors,
  type ColorCategory
} from '@/lib/theme-generator';

interface ThemeSidebarProps {
  selectedColors: SelectedColors;
  onColorSelect: (category: ColorCategory, color: string) => void;
  cssVariables: string;
  tailwindConfig: string;
}

export const ThemeSidebar: React.FC<ThemeSidebarProps> = ({
  selectedColors,
  onColorSelect,
  cssVariables,
  tailwindConfig
}) => {
  const primaryRecommendations = getPrimaryRecommendations(selectedColors.canvas);

  return (
    <aside className="bg-canvas-bg border-canvas-border w-full border-r p-6 md:w-80 md:overflow-y-auto md:h-full">
      <div className="flex flex-col gap-1">
        <Logo />
        <p className="text-canvas-text mb-4 text-sm">
          Build beautiful themes for your webapp using Radix color palettes.
        </p>
      </div>

      <AppearanceTabs>
        <div className="flex flex-col justify-between gap-6">
          <div className="flex flex-col space-y-6">
            {/* Canvas Colors */}
            <ColorCategorySection
              title="Canvas"
              swatchColors={canvasRecommendedColors}
              recommendedColors={canvasRecommendedColors}
              allColors={allColors}
              selectedColor={selectedColors.canvas}
              onColorSelect={(color) => onColorSelect('canvas', color)}
              showSelect={true}
            />

            {/* Primary Colors */}
            <ColorCategorySection
              title="Primary"
              swatchColors={primaryRecommendations}
              recommendedColors={primaryRecommendations}
              allColors={allColors}
              selectedColor={selectedColors.primary}
              onColorSelect={(color) => onColorSelect('primary', color)}
              showSelect={true}
            />

            {/* Secondary Colors */}
            <ColorCategorySection
              title="Secondary"
              swatchColors={[]}
              recommendedColors={[]}
              allColors={allColors}
              selectedColor={selectedColors.secondary}
              onColorSelect={(color) => onColorSelect('secondary', color)}
              showSelect={true}
            />

            {/* Destructive Color */}
            <ColorCategorySection
              title="Destructive"
              swatchColors={colorCategories.alert}
              selectedColor={selectedColors.alert}
              onColorSelect={(color) => onColorSelect('alert', color)}
            />

            {/* Success Colors */}
            <ColorCategorySection
              title="Success"
              swatchColors={colorCategories.success}
              selectedColor={selectedColors.success}
              onColorSelect={(color) => onColorSelect('success', color)}
            />

            {/* Warning Colors */}
            <ColorCategorySection
              title="Warning"
              swatchColors={colorCategories.warning}
              selectedColor={selectedColors.warning}
              onColorSelect={(color) => onColorSelect('warning', color)}
            />

            {/* Info Colors */}
            <ColorCategorySection
              title="Info"
              swatchColors={colorCategories.info}
              selectedColor={selectedColors.info}
              onColorSelect={(color) => onColorSelect('info', color)}
            />

            <div className="border-canvas-border pt-4">
              <CodeDialog cssCode={cssVariables} tailwindCode={tailwindConfig} />
            </div>
          </div>

          <div className="border-canvas-border flex border-t pt-2">
            <p className="text-fg-text text-xs">
              Built by
              <Link
                href="https://syed-saif.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text hover:text-primary-text-contrast ml-1 underline transition-colors"
              >
                @Syed Saif
              </Link>
            </p>
          </div>
        </div>
      </AppearanceTabs>
    </aside>
  );
};