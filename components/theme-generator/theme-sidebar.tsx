// 'use client'

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Menu, X } from 'lucide-react';
// import { AppearanceTabs } from '@/components/ui/appearance-tabs';
// import { CodeDialog } from '@/components/ui/code-dialog';
// import { ColorCategorySection } from './color-category-section';
// import {
//   allColors,
//   canvasRecommendedColors,
//   colorCategories,
//   getPrimaryRecommendations,
//   type SelectedColors,
//   type ColorCategory
// } from '@/lib/theme-generator';

// interface ThemeSidebarProps {
//   selectedColors: SelectedColors;
//   onColorSelect: (category: ColorCategory, color: string) => void;
//   cssVariables: string;
//   tailwindV3Config: string;
//   tailwindV4Complete: string;
// }

// export const ThemeSidebar: React.FC<ThemeSidebarProps> = ({
//   selectedColors,
//   onColorSelect,
//   cssVariables,
//   tailwindV3Config,
//   tailwindV4Complete
// }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const primaryRecommendations = getPrimaryRecommendations(selectedColors.canvas);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const SidebarContent = () => (
//     <>
//       <div className="flex-1 overflow-y-auto p-6 pb-20">
//         <div className="flex flex-col gap-4">
//           <p className="text-canvas-text mb-4 text-sm">
//             Create stunning, accessible themes using Radix colors. Get built-in dark mode and accessibility. Set up once, customize infinitely.
//           </p>
//         </div>
//         <AppearanceTabs>
//           <div className="flex flex-col space-y-6">
//             <ColorCategorySection
//               title="Canvas"
//               swatchColors={canvasRecommendedColors}
//               recommendedColors={canvasRecommendedColors}
//               allColors={allColors}
//               selectedColor={selectedColors.canvas}
//               onColorSelect={(color) => onColorSelect('canvas', color)}
//               showSelect={true}
//             />
//             <ColorCategorySection
//               title="Primary"
//               swatchColors={primaryRecommendations}
//               recommendedColors={primaryRecommendations}
//               allColors={allColors}
//               selectedColor={selectedColors.primary}
//               onColorSelect={(color) => onColorSelect('primary', color)}
//               showSelect={true}
//             />
//             <ColorCategorySection
//               title="Secondary"
//               swatchColors={[]}
//               recommendedColors={[]}
//               allColors={allColors}
//               selectedColor={selectedColors.secondary}
//               onColorSelect={(color) => onColorSelect('secondary', color)}
//               showSelect={true}
//             />
//             <ColorCategorySection
//               title="Destructive"
//               swatchColors={colorCategories.alert}
//               selectedColor={selectedColors.alert}
//               onColorSelect={(color) => onColorSelect('alert', color)}
//             />
//             <ColorCategorySection
//               title="Success"
//               swatchColors={colorCategories.success}
//               selectedColor={selectedColors.success}
//               onColorSelect={(color) => onColorSelect('success', color)}
//             />
//             <ColorCategorySection
//               title="Warning"
//               swatchColors={colorCategories.warning}
//               selectedColor={selectedColors.warning}
//               onColorSelect={(color) => onColorSelect('warning', color)}
//             />
//             <ColorCategorySection
//               title="Info"
//               swatchColors={colorCategories.info}
//               selectedColor={selectedColors.info}
//               onColorSelect={(color) => onColorSelect('info', color)}
//             />
//           </div>
//         </AppearanceTabs>
//       </div>

//       <div className="bg-canvas-bg border-canvas-border sticky bottom-0 border-t p-4 space-y-3 z-10">
//         <div className="border-canvas-border pt-2">
//           <CodeDialog
//             cssCode={cssVariables}
//             tailwindV3Config={tailwindV3Config}
//             tailwindV4Complete={tailwindV4Complete}
//           />
//         </div>

//         <div className="border-canvas-border flex items-center justify-between border-t pt-4">
//           <p className="text-fg-text text-sm">
//             Built by
//             <Link
//               href="https://syed-saif.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-primary-solid hover:text-primary-text ml-1 underline transition-colors"
//             >
//               Syed Saif
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <button
//         onClick={toggleMobileMenu}
//         className="lg:hidden fixed top-4 left-4 z-50 bg-canvas-bg border-canvas-border border rounded-lg p-2 shadow-lg"
//         aria-label="Toggle menu"
//       >
//         {isMobileMenuOpen ? (
//           <X className="h-6 w-6 text-canvas-text" />
//         ) : (
//           <Menu className="h-6 w-6 text-canvas-text" />
//         )}
//       </button>

//       {/* Overlay */}
//       {isMobileMenuOpen && (
//         <div
//           className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
//           onClick={toggleMobileMenu}
//         />
//       )}

//       {/* Desktop Sidebar - Always visible on md+ */}
//       <aside className="hidden md:flex bg-canvas-bg-subtle border-canvas-border w-96 border-r h-full flex-col">
//         <SidebarContent />
//       </aside>

//       {/* Mobile Sidebar - Slides in from left */}
//       <aside
//         className={`md:hidden fixed top-0 left-0 h-full w-80 bg-canvas-bg-subtle border-canvas-border border-r z-40 flex flex-col transition-transform duration-300 ease-in-out ${
//           isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <SidebarContent />
//       </aside>
//     </>
//   );
// };

import React from 'react';
import Link from 'next/link';
import { AppearanceTabs } from '@/components/ui/appearance-tabs';
import { CodeDialog } from '@/components/ui/code-dialog';
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
  const primaryRecommendations = getPrimaryRecommendations(selectedColors.canvas);

  return (
    <aside className="bg-canvas-bg-subtle border-canvas-border w-full border-r md:w-96 md:h-full xl:flex flex-col hidden">
      {/* Scrollable content with padding to avoid overlap with sticky footer */}

      <div className="flex-1 overflow-y-auto p-6 pb-20">
        <div className="flex flex-col gap-4">
          <p className="text-canvas-text mb-4 text-sm">
            Create stunning, accessible themes using Radix colors. Get built-in dark mode and accessibility. Set up once, customize infinitely.
          </p>
        </div>
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
      <div className="bg-canvas-bg border-canvas-border sticky bottom-0 border-t p-4 space-y-3 z-10"> {/* Added z-10 for layering */}
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
  );
};