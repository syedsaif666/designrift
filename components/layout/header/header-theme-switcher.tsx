'use client'
import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const HeaderThemeSwitcher = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const isDark = resolvedTheme === 'dark';
    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark');
    };

    // Ensure component only renders after hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    // Don't render until after hydration to prevent mismatch
    if (!mounted) {
        return (
            <Button
                variant='soft'
                aria-label="Toggle theme"
                iconOnly
                leadingIcon={<Sun size={22} />}
            >
            </Button>
        );
    }

    return (
        <Button
            variant='soft'
            onClick={toggleTheme}
            aria-label="Toggle theme"
            iconOnly
            leadingIcon={isDark ? <Sun size={22} /> : <Moon size={22} />}
        >
        </Button>
    );
};

export { HeaderThemeSwitcher };