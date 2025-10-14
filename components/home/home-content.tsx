'use client';

import Cta from '@/components/home/cta/cta';
import Faq from '@/components/home/faq/faq';
import Features from '@/components/home/features/features';
import Hero from '@/components/home/hero/hero';
import HomeSchema from '@/lib/seo/schema/theme-editor';
import FAQSchema from '@/lib/seo/schema/faq';
import { useThemeGenerator } from '../theme-generator';
import type { RadixColors, SelectedColors } from '@/lib/theme-generator';

interface ThemeGeneratorProps {
    radixColors: RadixColors;
    initialSelectedColors?: SelectedColors;
}

export const HomeContent: React.FC<ThemeGeneratorProps> = ({ radixColors, initialSelectedColors }) => {

    const {
        selectedColors,
        handleColorSelect,
        cssVariables,
        tailwindV3Config,
        tailwindV4Complete
    } = useThemeGenerator({ radixColors, initialSelectedColors });

    return (
        <>
            <style>{cssVariables}</style>
            <HomeSchema />
            <FAQSchema />
            <Hero />
            <Features />
            <Faq />
            <Cta />
        </>
    );
}