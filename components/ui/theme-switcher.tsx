'use client'
import React, { useEffect, memo } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as RadioGroup from '@radix-ui/react-radio-group';

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    // Avoid hydration mismatch
    useEffect(() => {
        // Set system as default theme if none is set
        if (!theme) {
            setTheme('system');
        }
    }, [theme, setTheme]);

    if (!theme) {
        return null;
    }

    return (
        <RadioGroup.Root
            className="w-fit border border-canvas-line rounded-full p-1 space-x-0.5"
            value={theme}
            onValueChange={setTheme}
            aria-label="Theme selection"
        >
            {[
                { value: 'system', icon: <Monitor size={18} />, title: 'System theme' },
                { value: 'light', icon: <Sun size={18} />, title: 'Light theme' },
                { value: 'dark', icon: <Moon size={18} />, title: 'Dark theme' },
            ].map(({ value, icon, title }) => (
                <RadioGroup.Item
                    key={value}
                    className="p-2 rounded-full data-[state=checked]:bg-canvas-bg-hover data-transition-colors"
                    value={value}
                    title={title}
                    aria-label={title}
                >
                    <div className="text-canvas-text">
                        {icon}
                    </div>
                </RadioGroup.Item>
            ))}
        </RadioGroup.Root>
    );
};

const ThemeSwitcherMemoized = memo(ThemeSwitcher);
export { ThemeSwitcherMemoized as ThemeSwitcher };
