'use client'
import React, { useState } from 'react';
import { ThemeProvider, useTheme } from 'next-themes';
import radixColors from '../public/radix-colors.json';
import { SimpleThemeSwitcher } from '@/components/ui/simple-theme-switcher';
import { ColorSelect } from '@/components/ui/color-select';
import { CodeDialog } from '@/components/ui/code-dialog';
import { AppearanceTabs } from '@/components/ui/appearance-tabs';
import { ColorSwatch } from '@/components/ui/color-swatch';
import { ColorCategorySection } from '@/components/ui/color-category-section';

// All available colors
const allColors = [
    'gray', 'mauve', 'slate', 'sage', 'olive', 'sand', 'tomato', 'red', 'ruby', 'crimson', 'pink',
    'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade', 'green', 'grass',
    'bronze', 'gold', 'brown', 'orange', 'amber', 'yellow', 'lime', 'mint', 'sky',
];

// Canvas recommended colors
const canvasRecommendedColors = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'];

// Primary color recommendations based on canvas color
const primaryRecommendations = {
    'gray': [],
    'mauve': ['tomato', 'red', 'ruby', 'crimson', 'pink', 'plum', 'purple', 'violet'],
    'slate': ['iris', 'indigo', 'blue', 'sky', 'cyan'],
    'sage': ['mint', 'teal', 'jade', 'green'],
    'olive': ['grass', 'lime'],
    'sand': ['yellow', 'amber', 'orange', 'brown'],
    'default': []
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
    'base', 'bg-subtle', 'bg', 'bg-hover', 'bg-active', 'line',
    'border', 'border-hover', 'solid', 'solid-hover', 'text', 'text-contrast'
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

        const lightVars = semanticSuffixes.map((suffix, index) => {
            const step = (index + 1) * 100;
            const value = lightColor[step]?.value || '#000000';
            return `  --${category}-${suffix}: ${value};`;
        }).join('\n');

        const darkVars = semanticSuffixes.map((suffix, index) => {
            const step = (index + 1) * 100;
            const value = darkColor[step]?.value || '#ffffff';
            return `  --${category}-${suffix}: ${value};`;
        }).join('\n');

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
            semanticSuffixes.forEach(suffix => {
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
        primary: '',
        secondary: '',
        success: '',
        warning: '',
        alert: '',
        info: ''
    });

    const handleColorSelect = (category, color) => {
        setSelectedColors(prev => ({
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
        <div className="min-h-screen w-full">
            {/* Apply generated CSS variables */}
            <style>{cssVariables}</style>

            <div className="container mx-auto px-4 py-8 max-w-full">
                {/* Header */}
    

                {/* Description */}
                <div className="mb-12">
                    <p className="text-lg text-canvas-text max-w-3xl">
                        Build beautiful themes for your webapp using Radix color palettes.
                        Select colors from each category to generate CSS variables and Tailwind configurations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Sidebar - Color Selection Panel */}
                    <div className="lg:col-span-3 xl:col-span-3 space-y-8">
                        <AppearanceTabs>
                            <div className="space-y-8">
                                {/* Canvas Colors */}
                                <ColorCategorySection
                                    title="Canvas"
                                    swatchColors={canvasRecommendedColors}
                                    recommendedColors={canvasRecommendedColors}
                                    allColors={allColors}
                                    selectedColor={selectedColors.canvas}
                                    onColorSelect={(color) => handleColorSelect('canvas', color)}
                                    showSelect={true}
                                />

                                {/* Primary Colors */}
                                <ColorCategorySection
                                    title="Primary"
                                    swatchColors={getPrimaryRecommendations()}
                                    recommendedColors={getPrimaryRecommendations()}
                                    allColors={allColors}
                                    selectedColor={selectedColors.primary}
                                    onColorSelect={(color) => handleColorSelect('primary', color)}
                                    showSelect={true}
                                />

                                {/* Secondary Colors */}
                                <ColorCategorySection
                                    title="Secondary"
                                    swatchColors={[]}
                                    recommendedColors={[]}
                                    allColors={allColors}
                                    selectedColor={selectedColors.secondary}
                                    onColorSelect={(color) => handleColorSelect('secondary', color)}
                                    showSelect={true}
                                />

                                {/* Success Colors */}
                                <ColorCategorySection
                                    title="Success"
                                    swatchColors={colorCategories.success}
                                    selectedColor={selectedColors.success}
                                    onColorSelect={(color) => handleColorSelect('success', color)}
                                />

                                {/* Warning Colors */}
                                <ColorCategorySection
                                    title="Warning"
                                    swatchColors={colorCategories.warning}
                                    selectedColor={selectedColors.warning}
                                    onColorSelect={(color) => handleColorSelect('warning', color)}
                                />

                                {/* Alert Colors */}
                                <ColorCategorySection
                                    title="Alert"
                                    swatchColors={colorCategories.alert}
                                    selectedColor={selectedColors.alert}
                                    onColorSelect={(color) => handleColorSelect('alert', color)}
                                />

                                {/* Info Colors */}
                                <ColorCategorySection
                                    title="Info"
                                    swatchColors={colorCategories.info}
                                    selectedColor={selectedColors.info}
                                    onColorSelect={(color) => handleColorSelect('info', color)}
                                />
                            </div>
                        </AppearanceTabs>
                    </div>

                    {/* Right Side - Preview Area */}
                    <div className="lg:col-span-9 xl:col-span-9">
                        <div className="bg-canvas-bg border border-canvas-border rounded-lg p-6 h-full">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-canvas-text-contrast">
                                    Theme Preview
                                </h2>
                                <CodeDialog cssCode={cssVariables} tailwindCode={tailwindConfig} />
                            </div>
                            
                            {/* Simple color preview */}
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-3">
                                    {selectedColors.canvas && (
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded bg-canvas-solid" title="Canvas" />
                                            <span className="text-xs mt-1 text-canvas-text">Canvas</span>
                                        </div>
                                    )}
                                    {selectedColors.primary && (
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded bg-primary-solid" title="Primary" />
                                            <span className="text-xs mt-1 text-canvas-text">Primary</span>
                                        </div>
                                    )}
                                    {selectedColors.secondary && (
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded bg-secondary-solid" title="Secondary" />
                                            <span className="text-xs mt-1 text-canvas-text">Secondary</span>
                                        </div>
                                    )}
                                    {selectedColors.success && (
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded bg-success-solid" title="Success" />
                                            <span className="text-xs mt-1 text-canvas-text">Success</span>
                                        </div>
                                    )}
                                    {selectedColors.warning && (
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded bg-warning-solid" title="Warning" />
                                            <span className="text-xs mt-1 text-canvas-text">Warning</span>
                                        </div>
                                    )}
                                    {selectedColors.alert && (
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded bg-alert-solid" title="Alert" />
                                            <span className="text-xs mt-1 text-canvas-text">Alert</span>
                                        </div>
                                    )}
                                    {selectedColors.info && (
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded bg-info-solid" title="Info" />
                                            <span className="text-xs mt-1 text-canvas-text">Info</span>
                                        </div>
                                    )}
                                </div>
                                
                                <p className="text-sm text-canvas-text">
                                    Select colors from the sidebar to see your theme preview. More component previews will be added soon.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignRift;