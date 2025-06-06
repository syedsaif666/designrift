import { SelectedColors, RadixColors, ColorStepResult } from './types';
import { semanticSuffixes, coolColors } from './constants';

/**
 * Generates color steps for a specific category (canvas, primary, etc.)
 * @param colorName - The radix color name (e.g., 'iris', 'gray')
 * @param category - The semantic category (e.g., 'primary', 'canvas')
 * @param radixColors - The radix colors data
 * @returns Object containing light and dark CSS variables
 */
export const generateColorSteps = (
  colorName: string,
  category: string,
  radixColors: RadixColors
): ColorStepResult => {
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
  const onColor = coolColors.includes(colorName as any) ? '#000000' : '#ffffff';
  const lightOnVar = `  --${category}-on-${category}: ${onColor};`;
  const darkOnVar = `  --${category}-on-${category}: ${onColor};`;

  return {
    light: lightVars + '\n' + lightOnVar,
    dark: darkVars + '\n' + darkOnVar
  };
};

/**
 * Generates complete CSS variables for light and dark themes
 * @param selectedColors - Object containing selected colors for each category
 * @param radixColors - The radix colors data
 * @returns Complete CSS string with light and dark theme variables
 */
export const generateCSSVariables = (
  selectedColors: SelectedColors,
  radixColors: RadixColors
): string => {
  let lightCSS = '/* LIGHT THEME */\n:root {\n';
  let darkCSS = '\n/* DARK THEME */\n.dark {\n';

  Object.entries(selectedColors).forEach(([category, colorName]) => {
    if (colorName) {
      const { light, dark } = generateColorSteps(colorName, category, radixColors);
      lightCSS += `\n/* ${category.toUpperCase()} */\n${light}\n`;
      darkCSS += `\n/* ${category.toUpperCase()} */\n${dark}\n`;
    }
  });

  lightCSS += '}';
  darkCSS += '}';

  return lightCSS + '\n' + darkCSS;
};

/**
 * Generates Tailwind CSS configuration with theme inline
 * @param selectedColors - Object containing selected colors for each category
 * @returns Tailwind CSS configuration string
 */
export const generateTailwindConfig = (selectedColors: SelectedColors): string => {
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