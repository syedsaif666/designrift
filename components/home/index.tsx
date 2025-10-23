'use client';

import Cta from '@/components/home/cta';
import Faq from '@/components/home/faq';
import Hero from '@/components/home/hero';
import HomeSchema from '@/lib/seo/schema/theme-editor';
import type { RadixColors } from '@/lib/theme-generator';
import { Features } from '@/components/home/features';
import { Testimonials } from '@/components/home/testimonials';
import { Presets } from '@/components/home/presets';

interface ThemeGeneratorProps {
    radixColors: RadixColors;
}

export const HomeContent: React.FC<ThemeGeneratorProps> = ({ radixColors }) => {
    return (
        <>
            <HomeSchema />
            <Hero />
            <Presets />
            <Features />
            <Testimonials />
            <Faq />
            <Cta />
        </>
    );
}