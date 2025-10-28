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

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button
                variant='ghost'
                aria-label="Toggle theme"
                iconOnly
            >
            </Button>
        );
    }

    return (
        <Button
            variant='ghost'
            color='neutral'
            onClick={toggleTheme}
            aria-label="Toggle theme"
            iconOnly
            leadingIcon={isDark ? <Sun size={22} /> : <Moon size={22} />}
        >
        </Button>
    );
};

export { HeaderThemeSwitcher };