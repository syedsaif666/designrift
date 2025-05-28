'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { ThemeProvider, useTheme } from 'next-themes';

import { AppearanceTabs } from '@/components/ui/appearance-tabs';
import { CodeDialog } from '@/components/ui/code-dialog';
import { ColorCategorySection } from '@/components/ui/color-category-section';
import { ColorSelect } from '@/components/ui/color-select';
import { ColorSwatch } from '@/components/ui/color-swatch';
import { DashboardPreview } from '@/components/ui/dashboard-preview';
import { SimpleThemeSwitcher } from '@/components/ui/simple-theme-switcher';

import radixColors from '../public/radix-colors.json';
import Logo from '@/components/logo/Logo';

// All available colors
const allColors = [
    'gray',
    'mauve',
    'slate',
    'sage',
    'olive',
    'sand',
    'tomato',
    'red',
    'ruby',
    'crimson',
    'pink',
    'plum',
    'purple',
    'violet',
    'iris',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'jade',
    'green',
    'grass',
    'bronze',
    'gold',
    'brown',
    'orange',
    'amber',
    'yellow',
    'lime',
    'mint',
    'sky'
];

// Canvas recommended colors
const canvasRecommendedColors = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'];

// Primary color recommendations based on canvas color
const primaryRecommendations = {
    gray: [],
    mauve: ['tomato', 'red', 'ruby', 'crimson', 'pink', 'plum', 'purple', 'violet'],
    slate: ['iris', 'indigo', 'blue', 'sky', 'cyan'],
    sage: ['mint', 'teal', 'jade', 'green'],
    olive: ['grass', 'lime'],
    sand: ['yellow', 'amber', 'orange', 'brown'],
    default: []
};

// Color categories
const colorCategories = {
    success: ['green', 'teal', 'jade', 'grass', 'mint'],
    warning: ['yellow', 'amber', 'orange'],
    alert: ['red', 'ruby', 'tomato', 'crimson'],
    info: ['blue', 'indigo', 'sky', 'cyan']
};

// Semantic suffixes
const semanticSuffixes = [
    'base',
    'bg-subtle',
    'bg',
    'bg-hover',
    'bg-active',
    'line',
    'border',
    'border-hover',
    'solid',
    'solid-hover',
    'text',
    'text-contrast'
];

// Cool colors that use black for on-color
const coolColors = ['sky', 'mint', 'lime', 'yellow', 'amber'];

// CSS Generator Functions
const generateCSSVariables = (selectedColors) => {
    const generateColorSteps = (colorName, category) => {
        const lightColor = radixColors[colorName];
        const darkColor = radixColors[`${colorName}Dark`];

        if (!lightColor || !darkColor) {

            return { light: '', dark: '' };
        }

        const lightVars = semanticSuffixes
            .map((suffix, index) => {
                const step = (index + 1) * 100;
                const value = lightColor[step]?.value || '#000000';

                return `  --${category}-${suffix}: ${value};`;
            })
            .join('\n');

        const darkVars = semanticSuffixes
            .map((suffix, index) => {
                const step = (index + 1) * 100;
                const value = darkColor[step]?.value || '#ffffff';

                return `  --${category}-${suffix}: ${value};`;
            })
            .join('\n');

        // Add on-category color
        const onColor = coolColors.includes(colorName) ? '#000000' : '#ffffff';
        const lightOnVar = `  --${category}-on-${category}: ${onColor};`;
        const darkOnVar = `  --${category}-on-${category}: ${onColor};`;

        return {
            light: lightVars + '\n' + lightOnVar,
            dark: darkVars + '\n' + darkOnVar
        };
    };

    let lightCSS = '/* LIGHT THEME */\n:root {\n';
    let darkCSS = '\n/* DARK THEME */\n.dark {\n';

    Object.entries(selectedColors).forEach(([category, colorName]) => {
        if (colorName) {
            const { light, dark } = generateColorSteps(colorName, category);
            lightCSS += `\n/* ${category.toUpperCase()} */\n${light}\n`;
            darkCSS += `\n/* ${category.toUpperCase()} */\n${dark}\n`;
        }
    });

    lightCSS += '}';
    darkCSS += '}';

    return lightCSS + '\n' + darkCSS;
};

const generateTailwindConfig = (selectedColors) => {
    let config = '@layer base {\n  @theme inline {\n';

    Object.entries(selectedColors).forEach(([category, colorName]) => {
        if (colorName) {
            semanticSuffixes.forEach((suffix) => {
                config += `    --color-${category}-${suffix}: var(--${category}-${suffix});\n`;
            });
            config += `    --color-${category}-on-${category}: var(--${category}-on-${category});\n`;
            config += '\n';
        }
    });

    config += '  }\n}';

    return config;
};

// Main App Component
const DesignRift = () => {
    const [selectedColors, setSelectedColors] = useState({
        canvas: 'gray',
        primary: 'iris',
        secondary: '',
        success: 'green',
        warning: 'yellow',
        alert: 'red',
        info: ''
    });

    const handleColorSelect = (category, color) => {
        setSelectedColors((prev) => ({
            ...prev,
            [category]: color
        }));
    };

    const getPrimaryRecommendations = () => {
        const canvasColor = selectedColors.canvas;
        
        return primaryRecommendations[canvasColor] || primaryRecommendations.default;
    };

    const cssVariables = generateCSSVariables(selectedColors);
    const tailwindConfig = generateTailwindConfig(selectedColors);

    return (
        <div className='min-h-screen w-full '>
            {/* Apply generated CSS variables */}
            <style>{cssVariables}</style>

            <div className=' flex min-h-screen flex-col md:h-screen md:flex-row'>
                {/* Left Sidebar - Color Selection Panel */}
                <aside className='bg-canvas-bg border-canvas-border w-full border-r p-6 md:w-80 md:overflow-y-auto md:h-full'>
                    <div className='flex flex-col gap-1'>
                        <Logo />
                        <p className='text-canvas-text mb-4 text-sm'>
                            Build beautiful themes for your webapp using Radix color palettes.
                        </p>
                    </div>

                    <AppearanceTabs>
                        <div className='flex flex-col justify-between gap-6'>
                            <div className='flex flex-col space-y-6'>
                                {/* Canvas Colors */}
                                <ColorCategorySection
                                    title='Canvas'
                                    swatchColors={canvasRecommendedColors}
                                    recommendedColors={canvasRecommendedColors}
                                    allColors={allColors}
                                    selectedColor={selectedColors.canvas}
                                    onColorSelect={(color) => handleColorSelect('canvas', color)}
                                    showSelect={true}
                                />

                                {/* Primary Colors */}
                                <ColorCategorySection
                                    title='Primary'
                                    swatchColors={getPrimaryRecommendations()}
                                    recommendedColors={getPrimaryRecommendations()}
                                    allColors={allColors}
                                    selectedColor={selectedColors.primary}
                                    onColorSelect={(color) => handleColorSelect('primary', color)}
                                    showSelect={true}
                                />

                                {/* Secondary Colors */}
                                <ColorCategorySection
                                    title='Secondary'
                                    swatchColors={[]}
                                    recommendedColors={[]}
                                    allColors={allColors}
                                    selectedColor={selectedColors.secondary}
                                    onColorSelect={(color) => handleColorSelect('secondary', color)}
                                    showSelect={true}
                                />

                                {/* Destructive Color */}
                                <ColorCategorySection
                                    title='Destructive'
                                    swatchColors={colorCategories.alert}
                                    selectedColor={selectedColors.alert}
                                    onColorSelect={(color) => handleColorSelect('alert', color)}
                                />

                                {/* Success Colors */}
                                <ColorCategorySection
                                    title='Success'
                                    swatchColors={colorCategories.success}
                                    selectedColor={selectedColors.success}
                                    onColorSelect={(color) => handleColorSelect('success', color)}
                                />
                                          {/* Warning Colors */}
                                          <ColorCategorySection
                                    title='Warning'
                                    swatchColors={colorCategories.warning}
                                    selectedColor={selectedColors.warning}
                                    onColorSelect={(color) => handleColorSelect('warning', color)}
                                />
                                          {/* info Colors */}
                                          <ColorCategorySection
                                    title='Info'
                                    swatchColors={colorCategories.info}
                                    selectedColor={selectedColors.info}
                                    onColorSelect={(color) => handleColorSelect('info', color)}
                                />

                                <div className='border-canvas-border pt-4'>
                                    <CodeDialog cssCode={cssVariables} tailwindCode={tailwindConfig} />
                                </div>
                            </div>
                            <div className='border-canvas-border flex border-t pt-2'>
                                <p className='text-fg-text text-xs'>
                                    Built by
                                    <Link
                                        href='https://syed-saif.com'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-primary-text hover:text-primary-text-contrast ml-1 underline transition-colors'>
                                        @Syed Saif
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </AppearanceTabs>
                </aside>

                {/* Right Side - Dashboard Preview */}
                <div className='flex-1 min-h-screen md:h-full md:overflow-hidden'>
                    <DashboardPreview />
                </div>
            </div>
        </div>
    );
};

export default DesignRift;
