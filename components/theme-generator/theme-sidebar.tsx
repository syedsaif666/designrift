'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { AppearanceTabs } from '@/components/ui/appearance-tabs';
import { CodeDialog } from '@/components/ui/code-dialog';
import { ColorCategorySection } from './color-category-section';
import { Menu, X } from 'lucide-react';
import {
  allColors,
  canvasRecommendedColors,
  colorCategories,
  getPrimaryRecommendations,
  type SelectedColors,
  type ColorCategory
} from '@/lib/theme-generator';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa';

interface ThemeSidebarProps {
  selectedColors: SelectedColors;
  onColorSelect: (category: ColorCategory, color: string) => void;
  cssVariables: string;
  tailwindV3Config: string;
  tailwindV4Complete: string;
}

export const ThemeSidebar: React.FC<ThemeSidebarProps> = ({
  selectedColors,
  onColorSelect,
  cssVariables,
  tailwindV3Config,
  tailwindV4Complete
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const primaryRecommendations = getPrimaryRecommendations(selectedColors.canvas);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="xl:hidden absolute top-22.5 left-0 z-50 bg-canvas-bg border px-0.5 py-3 rounded-r-md"
        aria-label="Open theme sidebar"
      >
        <FaArrowRight className="w-4 h-4 text-canvas-text" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          bg-canvas-bg-subtle border-canvas-border w-80 border-r flex flex-col
          fixed xl:relative inset-y-0 left-0 z-50
          transform transition-transform duration-300 ease-in-out
          xl:w-96 xl:h-full xl:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'}
        `}
      >
        {/* Close Button (Mobile Only) */}
        <button
          onClick={() => setIsOpen(false)}
          className="xl:hidden absolute top-4 right-4 z-10 text-canvas-text p-2 hover:bg-canvas-bg-hover rounded-lg transition-colors"
          aria-label="Close theme sidebar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable content with padding to avoid overlap with sticky footer */}
        <div className="flex-1 overflow-y-auto p-6 pb-20">
          {/* <div className="flex flex-col gap-4">
            <p className="text-canvas-text mb-4 text-sm">
              Create stunning, accessible themes using Radix colors. Get built-in dark mode and accessibility. Set up once, customize infinitely.
            </p>
          </div> */}
          <AppearanceTabs>
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
            </div>
          </AppearanceTabs>
        </div>

        {/* Sticky footer section */}
        <div className="bg-canvas-bg border-canvas-border sticky bottom-0 border-t p-4 space-y-3 z-10">
          <div className="border-canvas-border pt-2">
            <CodeDialog
              cssCode={cssVariables}
              tailwindV3Config={tailwindV3Config}
              tailwindV4Complete={tailwindV4Complete}
            />
          </div>

          <div className="border-canvas-border flex items-center justify-between border-t pt-4">
            <p className="text-fg-text text-sm">
              Built by
              <Link
                href="https://syed-saif.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-solid hover:text-primary-text ml-1 underline transition-colors"
              >
                Syed Saif
              </Link>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};