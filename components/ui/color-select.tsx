'use client'
import React from 'react';
import * as Select from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from 'next-themes';
import radixColors from '../../public/radix-colors.json';

interface ColorOptionProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const ColorOption = React.forwardRef<HTMLDivElement, ColorOptionProps>(
  ({ children, className, value, ...props }, forwardedRef) => {
    const { resolvedTheme } = useTheme();
    
    const getColorValue = (color: string) => {
      const colorKey = resolvedTheme === 'dark' ? `${color}Dark` : color;
      const colorData = radixColors[colorKey];
      return colorData && colorData['900'] ? colorData['900'].value : '#8f8f8f';
    };

    return (
      <Select.Item
        className="flex items-center gap-2 px-6 py-2 text-sm text-canvas-text outline-none data-[highlighted]:bg-canvas-bg-hover data-[highlighted]:text-canvas-text-contrast cursor-pointer"
        {...props}
        value={value}
        ref={forwardedRef}
      >
        <div
          className="w-4 h-4 rounded"
          style={{ backgroundColor: getColorValue(value) }}
        />
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute right-2">
          <Check size={16} />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

ColorOption.displayName = 'ColorOption';

interface ColorSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  recommendedColors: string[];
  allColors: string[];
}

const ColorSelect = ({ value, onValueChange, recommendedColors, allColors }: ColorSelectProps) => {
  const { resolvedTheme } = useTheme();
  
  const getColorValue = (color: string) => {
    const colorKey = resolvedTheme === 'dark' ? `${color}Dark` : color;
    const colorData = radixColors[colorKey];
    return colorData && colorData['900'] ? colorData['900'].value : '#8f8f8f';
  };

  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger
        className="flex items-center justify-between w-full px-3 py-2 bg-canvas-bg border border-canvas-border rounded text-sm gap-2"
        aria-label="Select color"
      >
        <div className="flex items-center gap-2">
          {value && (
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: getColorValue(value) }}
            />
          )}
          <Select.Value placeholder="Select a color" />
        </div>
        <Select.Icon>
          <ChevronDown size={16} />
        </Select.Icon>
      </Select.Trigger>
      
      <Select.Portal>
        <Select.Content
          className="overflow-hidden bg-canvas-bg border border-canvas-border rounded-md shadow-md z-50 w-[var(--radix-select-trigger-width)]"
          position="popper"
          sideOffset={5}
        >
          <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-canvas-bg cursor-default">
            <ChevronUp size={16} />
          </Select.ScrollUpButton>
          
          <Select.Viewport className="p-1 max-h-[300px] overflow-y-auto">
            {recommendedColors.length > 0 && (
              <>
                <Select.Group>
                  <Select.Label className="px-6 py-1 text-xs text-canvas-text-contrast font-medium">
                    Recommended
                  </Select.Label>
                  {recommendedColors.map((color) => (
                    <ColorOption key={color} value={color}>
                      {color}
                    </ColorOption>
                  ))}
                </Select.Group>
                
                <Select.Separator className="h-px bg-canvas-line my-1" />
              </>
            )}
            
            <Select.Group>
              <Select.Label className="px-6 py-1 text-xs text-canvas-text-contrast font-medium">
                All Colors
              </Select.Label>
              {allColors
                .filter(color => !recommendedColors.includes(color))
                .map((color) => (
                  <ColorOption key={color} value={color}>
                    {color}
                  </ColorOption>
                ))}
            </Select.Group>
          </Select.Viewport>
          
          <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-canvas-bg cursor-default">
            <ChevronDown size={16} />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export { ColorSelect }; 