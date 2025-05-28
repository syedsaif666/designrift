'use client'
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as Tabs from '@radix-ui/react-tabs';

const SimpleThemeSwitcher = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  const isDark = resolvedTheme === 'dark';
  const currentValue = isDark ? 'dark' : 'light';
  
  return (
    <Tabs.Root 
      value={currentValue} 
      onValueChange={setTheme}
      className="w-full"
    >
      <Tabs.List 
        className="flex w-full rounded-lg border border-canvas-border overflow-hidden"
        aria-label="Theme selection"
      >
        <Tabs.Trigger
          value="light"
          className="flex-1 flex items-center justify-center gap-2 py-1 transition-colors data-[state=active]:bg-canvas-bg-active data-[state=active]:text-canvas-text-contrast data-[state=inactive]:bg-canvas-bg data-[state=inactive]:text-canvas-border data-[state=inactive]:hover:bg-canvas-bg"
        >
          <Sun size={16} />
          <span>Light</span>
        </Tabs.Trigger>
        <Tabs.Trigger
          value="dark"
          className="flex-1 flex items-center justify-center gap-2 py-1 transition-colors data-[state=active]:bg-canvas-bg-active data-[state=active]:text-canvas-text-contrast data-[state=inactive]:bg-canvas-bg data-[state=inactive]:text-canvas-border data-[state=inactive]:hover:bg-canvas-bg"
        >
          <Moon size={16} />
          <span>Dark</span>
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
};

export { SimpleThemeSwitcher }; 