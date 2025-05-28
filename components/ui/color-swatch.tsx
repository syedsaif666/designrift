'use client'
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import radixColors from '../../public/radix-colors.json';

interface ColorSwatchProps {
  colorName: string;
  isSelected: boolean;
  onClick: () => void;
  showTooltip?: boolean;
}

const ColorSwatch = ({ colorName, isSelected, onClick, showTooltip = true }: ColorSwatchProps) => {
  const [showTooltipState, setShowTooltipState] = useState(false);
  const { resolvedTheme } = useTheme();

  const getColorValue = (color: string) => {
    const colorKey = resolvedTheme === 'dark' ? `${color}Dark` : color;
    const colorData = radixColors[colorKey];
    return colorData && colorData['900'] ? colorData['900'].value : '#8f8f8f';
  };

  const colorValue = getColorValue(colorName);

  return (
    <div className="relative">
      <div
        className={`w-8 h-8 rounded-full cursor-pointer border-2 transition-all duration-200 hover:scale-110 ${isSelected ? 'border-canvas-text-contrast shadow-lg' : 'border-transparent'}`}
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

export { ColorSwatch }; 