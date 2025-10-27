'use client';

import Cta from '@/components/home/cta';
import Faq from '@/components/home/faq';
import Hero from '@/components/home/hero';
import HomeSchema from '@/lib/seo/schema/theme-editor';
import { Features } from '@/components/home/features';
import { Testimonials } from '@/components/home/testimonials';
import { Presets } from '@/components/home/presets';


export const HomeContent: React.FC = () => {
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