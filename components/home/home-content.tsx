'use client';

import Cta from '@/components/home/cta/cta';
import Faq from '@/components/home/faq/faq';
import Features from '@/components/home/features/features';
import Hero from '@/components/home/hero/hero';
import HomeSchema from '@/lib/seo/schema/theme-editor';
import FAQSchema from '@/lib/seo/schema/faq';
import type { RadixColors } from '@/lib/theme-generator';

interface ThemeGeneratorProps {
    radixColors: RadixColors;
}

export const HomeContent: React.FC<ThemeGeneratorProps> = ({ radixColors }) => {
    return (
        <>
            <HomeSchema />
            <FAQSchema />
            <Hero />
            <Features />
            <Faq />
            <Cta />
        </>
    );
}