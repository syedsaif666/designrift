// import React from 'react';
// import Link from 'next/link';
// import { AppearanceTabs } from '@/components/ui/appearance-tabs';
// import { CodeDialog } from '@/components/ui/code-dialog';
// import Logo from '@/components/logo/Logo';
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
//   // tailwindConfig: string;
//   tailwindV3Config
//   tailwindV4Complete
// }
// export const ThemeSidebar: React.FC<ThemeSidebarProps> = ({
//   selectedColors,
//   onColorSelect,
//   cssVariables,
//   // tailwindConfig
//   tailwindV3Config ,
//   tailwindV4Complete
// }) => {
//   const primaryRecommendations = getPrimaryRecommendations(selectedColors.canvas);
//   return (
//     <aside className="bg-canvas-bg border-canvas-border w-full border-r p-6 md:w-96 md:overflow-y-auto md:h-full">
//       <div className="flex flex-col gap-1">
//         <Logo />
//         <p className="text-canvas-text mb-4 text-sm">
//           Build beautiful themes for your webapp using Radix color palettes.
//         </p>
//       </div>
//       <AppearanceTabs>
//         <div className="flex flex-col justify-between gap-6">
//           <div className="flex flex-col space-y-6">
//             {/* Canvas Colors */}
//             <ColorCategorySection
//               title="Canvas"
//               swatchColors={canvasRecommendedColors}
//               recommendedColors={canvasRecommendedColors}
//               allColors={allColors}
//               selectedColor={selectedColors.canvas}
//               onColorSelect={(color) => onColorSelect('canvas', color)}
//               showSelect={true}
//             />
//             {/* Primary Colors */}
//             <ColorCategorySection
//               title="Primary"
//               swatchColors={primaryRecommendations}
//               recommendedColors={primaryRecommendations}
//               allColors={allColors}
//               selectedColor={selectedColors.primary}
//               onColorSelect={(color) => onColorSelect('primary', color)}
//               showSelect={true}
//             />
//             {/* Secondary Colors */}
//             <ColorCategorySection
//               title="Secondary"
//               swatchColors={[]}
//               recommendedColors={[]}
//               allColors={allColors}
//               selectedColor={selectedColors.secondary}
//               onColorSelect={(color) => onColorSelect('secondary', color)}
//               showSelect={true}
//             />
//             {/* Destructive Color */}
//             <ColorCategorySection
//               title="Destructive"
//               swatchColors={colorCategories.alert}
//               selectedColor={selectedColors.alert}
//               onColorSelect={(color) => onColorSelect('alert', color)}
//             />
//             {/* Success Colors */}
//             <ColorCategorySection
//               title="Success"
//               swatchColors={colorCategories.success}
//               selectedColor={selectedColors.success}
//               onColorSelect={(color) => onColorSelect('success', color)}
//             />
//             {/* Warning Colors */}
//             <ColorCategorySection
//               title="Warning"
//               swatchColors={colorCategories.warning}
//               selectedColor={selectedColors.warning}
//               onColorSelect={(color) => onColorSelect('warning', color)}
//             />
//             {/* Info Colors */}
//             <ColorCategorySection
//               title="Info"
//               swatchColors={colorCategories.info}
//               selectedColor={selectedColors.info}
//               onColorSelect={(color) => onColorSelect('info', color)}
//             />
//             <div className="border-canvas-border pt-4">
//               <CodeDialog cssCode={cssVariables} tailwindV3Config={tailwindV3Config} tailwindV4Complete={tailwindV4Complete} />
//             </div>
//           </div>
//           <div className="border-canvas-border flex border-t pt-2">
//             <p className="text-fg-text text-xs">
//               Built by
//               <Link
//                 href="https://syed-saif.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-primary-text hover:text-primary-text-contrast ml-1 underline transition-colors"
//               >
//                 @Syed Saif
//               </Link>
//             </p>
//           </div>
//         </div>
//       </AppearanceTabs>
//     </aside>
//   );
// };
import React, { useCallback, useMemo } from 'react';

import Link from 'next/link';

import { useTheme } from 'next-themes';

import Logo from '@/components/logo/Logo';
import { AppearanceTabs } from '@/components/ui/appearance-tabs';
import { CodeDialog } from '@/components/ui/code-dialog';
import {
    type ColorCategory,
    type SelectedColors,
    allColors,
    canvasRecommendedColors,
    colorCategories,
    getPrimaryRecommendations
} from '@/lib/theme-generator';

import { ColorCategorySection } from './color-category-section';
import { FaGithub } from 'react-icons/fa';

interface ThemeSidebarProps {
    selectedColors: SelectedColors;
    onColorSelect: (category: ColorCategory, color: string) => void;
    cssVariables: string;
    tailwindV3Config: string;
    tailwindV4Complete: string;
}

const ThemeSidebarComponent: React.FC<ThemeSidebarProps> = ({
    selectedColors,
    onColorSelect,
    cssVariables,
    tailwindV3Config,
    tailwindV4Complete
}) => {
    const { resolvedTheme } = useTheme();

    // Memoize derived recommendations to avoid re-computation on every render
    const primaryRecommendations = useMemo(
        () => getPrimaryRecommendations(selectedColors.canvas),
        [selectedColors.canvas]
    );

    // Stable handlers so child components don't re-render unnecessarily
    const handleCanvasSelect = useCallback((color: string) => onColorSelect('canvas', color), [onColorSelect]);
    const handlePrimarySelect = useCallback((color: string) => onColorSelect('primary', color), [onColorSelect]);
    const handleSecondarySelect = useCallback((color: string) => onColorSelect('secondary', color), [onColorSelect]);
    const handleAlertSelect = useCallback((color: string) => onColorSelect('alert', color), [onColorSelect]);
    const handleSuccessSelect = useCallback((color: string) => onColorSelect('success', color), [onColorSelect]);
    const handleWarningSelect = useCallback((color: string) => onColorSelect('warning', color), [onColorSelect]);
    const handleInfoSelect = useCallback((color: string) => onColorSelect('info', color), [onColorSelect]);

    return (
        <aside className='bg-canvas-bg border-canvas-border flex w-full flex-col border-r md:h-full md:w-96'>
            {/* Scrollable content */}
            <div className='flex-1 overflow-y-auto p-6'>
                <div className='flex flex-col gap-4'>
                    <Link href='/' aria-label='Home' className='inline-block cursor-pointer'>
                        <Logo variant={resolvedTheme === 'dark' ? 'dark' : 'light'} />
                    </Link>
                    <p className='text-canvas-text mb-4 text-sm'>
                        Create stunning, accessible themes using Radix colors. Get built-in dark mode and accessibility.
                        Set up once, customize infinitely.
                    </p>
                </div>

                <AppearanceTabs>
                    <div className='flex flex-col space-y-6'>
                        {/* Canvas Colors */}
                        <ColorCategorySection
                            title='Canvas'
                            swatchColors={canvasRecommendedColors}
                            recommendedColors={canvasRecommendedColors}
                            allColors={allColors}
                            selectedColor={selectedColors.canvas}
                            onColorSelect={handleCanvasSelect}
                            showSelect={true}
                        />

                        {/* Primary Colors */}
                        <ColorCategorySection
                            title='Primary'
                            swatchColors={primaryRecommendations}
                            recommendedColors={primaryRecommendations}
                            allColors={allColors}
                            selectedColor={selectedColors.primary}
                            onColorSelect={handlePrimarySelect}
                            showSelect={true}
                        />

                        {/* Secondary Colors */}
                        <ColorCategorySection
                            title='Secondary'
                            swatchColors={[]}
                            recommendedColors={[]}
                            allColors={allColors}
                            selectedColor={selectedColors.secondary}
                            onColorSelect={handleSecondarySelect}
                            showSelect={true}
                        />

                        {/* Destructive Color */}
                        <ColorCategorySection
                            title='Destructive'
                            swatchColors={colorCategories.alert}
                            selectedColor={selectedColors.alert}
                            onColorSelect={handleAlertSelect}
                        />

                        {/* Success Colors */}
                        <ColorCategorySection
                            title='Success'
                            swatchColors={colorCategories.success}
                            selectedColor={selectedColors.success}
                            onColorSelect={handleSuccessSelect}
                        />

                        {/* Warning Colors */}
                        <ColorCategorySection
                            title='Warning'
                            swatchColors={colorCategories.warning}
                            selectedColor={selectedColors.warning}
                            onColorSelect={handleWarningSelect}
                        />

                        {/* Info Colors */}
                        <ColorCategorySection
                            title='Info'
                            swatchColors={colorCategories.info}
                            selectedColor={selectedColors.info}
                            onColorSelect={handleInfoSelect}
                        />
                    </div>
                </AppearanceTabs>
            </div>

            {/* Sticky footer section */}
            <div className='bg-canvas-bg border-canvas-border sticky bottom-0 space-y-3 border-t p-4'>
                <div className='border-canvas-border pt-2'>
                    <CodeDialog
                        cssCode={cssVariables}
                        tailwindV3Config={tailwindV3Config}
                        tailwindV4Complete={tailwindV4Complete}
                    />
                </div>

                <div className='border-canvas-border flex items-center justify-between border-t pt-4'>
                    <p className='text-fg-text text-sm'>
                        Built by
                        <Link
                            href='https://syed-saif.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-primary-solid hover:text-primary-text ml-1 underline transition-colors'>
                            Syed Saif
                        </Link>
                    </p>

                    <Link
                        href='https://github.com/syedsaif666/designrift'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-canvas-solid hover:text-primary-solid transition-colors'
                        title='View on GitHub'>
                        <FaGithub className='h-5 w-5' />
                    </Link>
                </div>
            </div>
        </aside>
    );
};

export const ThemeSidebar = React.memo(ThemeSidebarComponent);
