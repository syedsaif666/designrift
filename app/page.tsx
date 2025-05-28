'use client'
import React, { useState } from 'react';
import { Download, Copy  } from 'lucide-react';
import { ThemeProvider, useTheme } from 'next-themes';
import radixColors from '../public/radix-colors.json';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
// import { ThemeSwitcher } from '@/components/ui/theme-switcher';

// const mockRadixColorsF = {
//     gray: {
//         "100": { "value": "#fcfcfc", "type": "color" },
//         "200": { "value": "#f8f8f8", "type": "color" },
//         "300": { "value": "#f3f3f3", "type": "color" },
//         "400": { "value": "#ededed", "type": "color" },
//         "500": { "value": "#e8e8e8", "type": "color" },
//         "600": { "value": "#e2e2e2", "type": "color" },
//         "700": { "value": "#dbdbdb", "type": "color" },
//         "800": { "value": "#c7c7c7", "type": "color" },
//         "900": { "value": "#8f8f8f", "type": "color" },
//         "1000": { "value": "#858585", "type": "color" },
//         "1100": { "value": "#6f6f6f", "type": "color" },
//         "1200": { "value": "#171717", "type": "color" }
//     },
//     grayDark: {
//         "100": { "value": "#161616", "type": "color" },
//         "200": { "value": "#1c1c1c", "type": "color" },
//         "300": { "value": "#232323", "type": "color" },
//         "400": { "value": "#282828", "type": "color" },
//         "500": { "value": "#2e2e2e", "type": "color" },
//         "600": { "value": "#343434", "type": "color" },
//         "700": { "value": "#3e3e3e", "type": "color" },
//         "800": { "value": "#505050", "type": "color" },
//         "900": { "value": "#707070", "type": "color" },
//         "1000": { "value": "#7e7e7e", "type": "color" },
//         "1100": { "value": "#a0a0a0", "type": "color" },
//         "1200": { "value": "#ededed", "type": "color" }
//     },
//     blue: {
//         "100": { "value": "#fbfdff", "type": "color" },
//         "200": { "value": "#f5faff", "type": "color" },
//         "300": { "value": "#edf6ff", "type": "color" },
//         "400": { "value": "#e1efff", "type": "color" },
//         "500": { "value": "#cee7ff", "type": "color" },
//         "600": { "value": "#b7dbff", "type": "color" },
//         "700": { "value": "#96ccff", "type": "color" },
//         "800": { "value": "#5eb3f5", "type": "color" },
//         "900": { "value": "#0090ff", "type": "color" },
//         "1000": { "value": "#0588f0", "type": "color" },
//         "1100": { "value": "#0d74ce", "type": "color" },
//         "1200": { "value": "#113264", "type": "color" }
//     },
//     blueDark: {
//         "100": { "value": "#0f1720", "type": "color" },
//         "200": { "value": "#0f1b2d", "type": "color" },
//         "300": { "value": "#10244e", "type": "color" },
//         "400": { "value": "#102a4c", "type": "color" },
//         "500": { "value": "#0f3058", "type": "color" },
//         "600": { "value": "#0d3868", "type": "color" },
//         "700": { "value": "#0a4481", "type": "color" },
//         "800": { "value": "#0954a5", "type": "color" },
//         "900": { "value": "#0090ff", "type": "color" },
//         "1000": { "value": "#369eff", "type": "color" },
//         "1100": { "value": "#52a9ff", "type": "color" },
//         "1200": { "value": "#eaf6ff", "type": "color" }
//     },
//     green: {
//         "100": { "value": "#fbfefc", "type": "color" },
//         "200": { "value": "#f2fcf5", "type": "color" },
//         "300": { "value": "#e9f9ee", "type": "color" },
//         "400": { "value": "#ddf3e4", "type": "color" },
//         "500": { "value": "#ccebd7", "type": "color" },
//         "600": { "value": "#b4dfc4", "type": "color" },
//         "700": { "value": "#92ceac", "type": "color" },
//         "800": { "value": "#5bb98c", "type": "color" },
//         "900": { "value": "#30a46c", "type": "color" },
//         "1000": { "value": "#299764", "type": "color" },
//         "1100": { "value": "#18794e", "type": "color" },
//         "1200": { "value": "#153226", "type": "color" }
//     },
//     greenDark: {
//         "100": { "value": "#0d1912", "type": "color" },
//         "200": { "value": "#0c1f17", "type": "color" },
//         "300": { "value": "#0f291e", "type": "color" },
//         "400": { "value": "#113123", "type": "color" },
//         "500": { "value": "#133929", "type": "color" },
//         "600": { "value": "#164430", "type": "color" },
//         "700": { "value": "#1b543a", "type": "color" },
//         "800": { "value": "#236e4a", "type": "color" },
//         "900": { "value": "#30a46c", "type": "color" },
//         "1000": { "value": "#3cb179", "type": "color" },
//         "1100": { "value": "#4cc38a", "type": "color" },
//         "1200": { "value": "#e5fbeb", "type": "color" }
//     },
//     red: {
//         "100": { "value": "#fffcfc", "type": "color" },
//         "200": { "value": "#fff8f8", "type": "color" },
//         "300": { "value": "#ffefef", "type": "color" },
//         "400": { "value": "#ffe5e5", "type": "color" },
//         "500": { "value": "#fdd8d8", "type": "color" },
//         "600": { "value": "#f9c6c6", "type": "color" },
//         "700": { "value": "#f3aeaf", "type": "color" },
//         "800": { "value": "#eb9091", "type": "color" },
//         "900": { "value": "#e5484d", "type": "color" },
//         "1000": { "value": "#dc3d43", "type": "color" },
//         "1100": { "value": "#cd2b31", "type": "color" },
//         "1200": { "value": "#381316", "type": "color" }
//     },
//     redDark: {
//         "100": { "value": "#1f1315", "type": "color" },
//         "200": { "value": "#291415", "type": "color" },
//         "300": { "value": "#3c181a", "type": "color" },
//         "400": { "value": "#481a1d", "type": "color" },
//         "500": { "value": "#541b1f", "type": "color" },
//         "600": { "value": "#671e22", "type": "color" },
//         "700": { "value": "#822025", "type": "color" },
//         "800": { "value": "#aa2429", "type": "color" },
//         "900": { "value": "#e5484d", "type": "color" },
//         "1000": { "value": "#f2555a", "type": "color" },
//         "1100": { "value": "#ff6369", "type": "color" },
//         "1200": { "value": "#feecee", "type": "color" }
//     },
//     yellow: {
//         "100": { "value": "#fdfdf9", "type": "color" },
//         "200": { "value": "#fffce8", "type": "color" },
//         "300": { "value": "#fffbd1", "type": "color" },
//         "400": { "value": "#fff8bb", "type": "color" },
//         "500": { "value": "#fff3a0", "type": "color" },
//         "600": { "value": "#ffec81", "type": "color" },
//         "700": { "value": "#f9e255", "type": "color" },
//         "800": { "value": "#efd130", "type": "color" },
//         "900": { "value": "#f5d90a", "type": "color" },
//         "1000": { "value": "#f7ce00", "type": "color" },
//         "1100": { "value": "#946800", "type": "color" },
//         "1200": { "value": "#35290f", "type": "color" }
//     },
//     yellowDark: {
//         "100": { "value": "#1c1500", "type": "color" },
//         "200": { "value": "#221a00", "type": "color" },
//         "300": { "value": "#2c2100", "type": "color" },
//         "400": { "value": "#352800", "type": "color" },
//         "500": { "value": "#3e3000", "type": "color" },
//         "600": { "value": "#493900", "type": "color" },
//         "700": { "value": "#594a05", "type": "color" },
//         "800": { "value": "#705e00", "type": "color" },
//         "900": { "value": "#f5d90a", "type": "color" },
//         "1000": { "value": "#ffef5c", "type": "color" },
//         "1100": { "value": "#f0c000", "type": "color" },
//         "1200": { "value": "#fffad1", "type": "color" }
//     }
// };

// All available colors
const allColors = [
    'gray', 'mauve', 'slate', 'sage', 'olive', 'sand', 'tomato', 'red', 'ruby', 'crimson', 'pink',
    'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade', 'green', 'grass',
    'bronze', 'gold', 'brown', 'orange', 'amber', 'yellow', 'lime', 'mint', 'sky',

];

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

// Color Swatch Component
const ColorSwatch = ({ colorName, isSelected, onClick, showTooltip = true }) => {
    const { resolvedTheme } = useTheme();
    const [showTooltipState, setShowTooltipState] = useState(false);

    const getColorValue = (color) => {
        const colorKey = resolvedTheme === 'dark' ? `${color}Dark` : color;
        const colorData = radixColors[colorKey];
        return colorData['900']?.value || '#8f8f8f';
    };

    const colorValue = getColorValue(colorName);

    return (
        <div className="relative">
            <div
                className={`w-8 h-8 rounded-full cursor-pointer border-2 transition-all duration-200 hover:scale-110 ${isSelected ? resolvedTheme === 'dark' ? 'border-white shadow-lg' : 'border-black shadow-lg' : 'border-transparent'
                    }`}
                style={{ backgroundColor: colorValue }}
                onClick={onClick}
                onMouseEnter={() => showTooltip && setShowTooltipState(true)}
                onMouseLeave={() => setShowTooltipState(false)}
            />
            {showTooltip && showTooltipState && (
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                    {colorName}
                </div>
            )}
        </div>
    );
};

// Color Category Section
const ColorCategorySection = ({ title, colors, selectedColor, onColorSelect }) => {
    return (
        <div className="space-y-3">
            <h3 className="text-lg font-semibold text-canvas-text-contrast capitalize">
                {title}
            </h3>
            <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                    <ColorSwatch
                        key={color}
                        colorName={color}
                        isSelected={selectedColor === color}
                        onClick={() => onColorSelect(color)}
                    />
                ))}
            </div>
        </div>
    );
};



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

    const [copiedText, setCopiedText] = useState('');

    const handleColorSelect = (category, color) => {
        setSelectedColors(prev => ({
            ...prev,
            [category]: color
        }));
    };

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopiedText(type);
        setTimeout(() => setCopiedText(''), 2000);
    };

    const downloadCSS = (content, filename) => {
        const blob = new Blob([content], { type: 'text/css' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const cssVariables = generateCSSVariables(selectedColors);
    const tailwindConfig = generateTailwindConfig(selectedColors);

    return (
        // <ThemeProvider>
            <div className="min-h-screen ">
                {/* Apply generated CSS variables */}
                <style>{cssVariables}</style>

                <div className="container mx-auto px-6 py-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-3">
                         
                            <h1 className="text-4xl font-bold text-canvas-text-contrast">
                                DesignRift
                            </h1>
                        </div>
                        <ThemeSwitcher />
                    </div>

                    {/* Description */}
                    <div className="mb-12">
                        <p className="text-lg text-canvas-text max-w-3xl">
                            Build beautiful themes for your webapp using Radix color palettes.
                            Select colors from each category to generate CSS variables and Tailwind configurations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Color Selection Panel */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-canvas-text-contrast mb-6">
                                Select Colors
                            </h2>

                            {/* Canvas Colors */}
                            <ColorCategorySection
                                title="Canvas"
                                colors={allColors}
                                selectedColor={selectedColors.canvas}
                                onColorSelect={(color) => handleColorSelect('canvas', color)}
                            />

                            {/* Primary Colors */}
                            <ColorCategorySection
                                title="Primary"
                                colors={allColors}
                                selectedColor={selectedColors.primary}
                                onColorSelect={(color) => handleColorSelect('primary', color)}
                            />

                            {/* Secondary Colors */}
                            <ColorCategorySection
                                title="Secondary"
                                colors={allColors}
                                selectedColor={selectedColors.secondary}
                                onColorSelect={(color) => handleColorSelect('secondary', color)}
                            />

                            {/* Success Colors */}
                            <ColorCategorySection
                                title="Success"
                                colors={colorCategories.success}
                                selectedColor={selectedColors.success}
                                onColorSelect={(color) => handleColorSelect('success', color)}
                            />

                            {/* Warning Colors */}
                            <ColorCategorySection
                                title="Warning"
                                colors={colorCategories.warning}
                                selectedColor={selectedColors.warning}
                                onColorSelect={(color) => handleColorSelect('warning', color)}
                            />

                            {/* Alert Colors */}
                            <ColorCategorySection
                                title="Alert"
                                colors={colorCategories.alert}
                                selectedColor={selectedColors.alert}
                                onColorSelect={(color) => handleColorSelect('alert', color)}
                            />

                            {/* Info Colors */}
                            <ColorCategorySection
                                title="Info"
                                colors={colorCategories.info}
                                selectedColor={selectedColors.info}
                                onColorSelect={(color) => handleColorSelect('info', color)}
                            />
                        </div>

                        {/* Generated Code Panel */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-canvas-text-contrast">
                                Generated Theme
                            </h2>

                            {/* CSS Variables */}
                            <div className="bg-canvas-bg border border-canvas-border rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-canvas-text-contrast">
                                        CSS Variables
                                    </h3>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => copyToClipboard(cssVariables, 'css')}
                                            className="flex items-center gap-2 px-3 py-1 bg-canvas-bg-hover hover:bg-canvas-bg-active text-canvas-text rounded text-sm transition-colors"
                                        >
                                            <Copy size={14} />
                                            {copiedText === 'css' ? 'Copied!' : 'Copy'}
                                        </button>
                                        <button
                                            onClick={() => downloadCSS(cssVariables, 'global.css')}
                                            className="flex items-center gap-2 px-3 py-1 bg-canvas-bg-hover hover:bg-canvas-bg-active text-canvas-text rounded text-sm transition-colors"
                                        >
                                            <Download size={14} />
                                            Download
                                        </button>
                                    </div>
                                </div>
                                <pre className="text-sm text-canvas-text bg-canvas-bg-subtle p-3 rounded overflow-x-auto overflow-y-scroll max-h-64">
                                    {cssVariables}
                                </pre>
                            </div>

                            {/* Tailwind Config */}
                            <div className="bg-canvas-bg border border-canvas-border rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-canvas-text-contrast">
                                        Tailwind Configuration
                                    </h3>
                                    <button
                                        onClick={() => copyToClipboard(tailwindConfig, 'tailwind')}
                                        className="flex items-center gap-2 px-3 py-1 bg-canvas-bg-hover hover:bg-canvas-bg-active text-canvas-text rounded text-sm transition-colors"
                                    >
                                        <Copy size={14} />
                                        {copiedText === 'tailwind' ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>
                                <pre className="text-sm text-canvas-text bg-canvas-bg-subtle p-3 rounded overflow-x-auto overflow-y-scroll max-h-64">
                                    {tailwindConfig}
                                </pre>
                            </div>

                            {/* Preview Section */}
                            <div className="bg-canvas-bg border border-canvas-border rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-canvas-text-contrast mb-3">
                                    Theme Preview
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded bg-canvas-solid" title="Canvas" />
                                        <div className="w-8 h-8 rounded bg-primary-solid" title="Primary" />
                                        <div className="w-8 h-8 rounded bg-secondary-solid" title="Secondary" />
                                        <div className="w-8 h-8 rounded bg-success-solid" title="Success" />
                                        <div className="w-8 h-8 rounded bg-warning-solid" title="Warning" />
                                        <div className="w-8 h-8 rounded bg-alert-solid" title="Alert" />
                                        <div className="w-8 h-8 rounded bg-info-solid" title="Info" />
                                    </div>
                                    <p className="text-sm text-canvas-text">
                                        Live preview of your selected theme colors
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