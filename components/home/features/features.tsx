'use client';

import React, { memo, useState } from 'react';

import { FaArrowRight, FaCheck, FaCode, FaCog, FaEye, FaMagic, FaPalette, FaRocket } from 'react-icons/fa';

interface Feature {
    id: number;
    title: string;
    description: string;
    details: string;
    category: string;
    benefit: string;
    icon: React.ComponentType<{ className?: string }>;
    stats: {
        value: string;
        label: string;
    }[];
}

const featuresData: Feature[] = [
    {
        id: 1,
        title: 'Radix Color System',
        description: 'Professional Color Palettes',
        details:
            'Built on the industry-leading Radix Colors system with 30+ carefully crafted color scales. Each palette is designed for accessibility, contrast, and visual harmony across light and dark themes.',
        category: 'Colors',
        benefit: 'WCAG AAA compliant colors',
        icon: FaPalette,
        stats: [
            { value: '30+', label: 'Color Scales' },
            { value: '100%', label: 'Accessible' }
        ]
    },
    {
        id: 2,
        title: 'Theme Builder',
        description: 'Visual Theme Creation',
        details:
            'Create stunning themes with our intuitive visual editor. Mix and match colors, adjust contrasts, and see changes in real-time. Export your custom themes as CSS variables or design tokens.',
        category: 'Design',
        benefit: 'No coding required',
        icon: FaMagic,
        stats: [
            { value: '∞', label: 'Combinations' },
            { value: '< 5min', label: 'Build Time' }
        ]
    },
    {
        id: 3,
        title: 'Framework Agnostic',
        description: 'Works Everywhere',
        details:
            'Use DesignRift themes with any framework or library. Compatible with React, Vue, Angular, Svelte, and vanilla CSS. Export formats include CSS variables, Tailwind config, and design tokens.',
        category: 'Integration',
        benefit: 'Universal compatibility',
        icon: FaCode,
        stats: [
            { value: '10+', label: 'Frameworks' },
            { value: '99.9%', label: 'Compatible' }
        ]
    },
    {
        id: 4,
        title: 'Auto Dark Mode',
        description: 'Seamless Theme Switching',
        details:
            'Automatic dark and light mode generation from a single theme. Every color scale includes optimized variants for both appearances, ensuring perfect contrast and accessibility.',
        category: 'Themes',
        benefit: 'Zero configuration needed',
        icon: FaEye,
        stats: [
            { value: '2x', label: 'Themes' },
            { value: '100%', label: 'Coverage' }
        ]
    }
];

const FeatureCard = memo(function FeatureCard({
    feature,
    hovered,
    onHover
}: {
    feature: Feature;
    hovered: boolean;
    onHover: (id: number | null) => void;
}) {
    return (
        <div
            className='group animate-fade-in-up h-full'
            style={{ animationDelay: `${(feature.id - 1) * 0.1}s` }}
            onMouseEnter={() => onHover(feature.id)}
            onMouseLeave={() => onHover(null)}>
            <div
                className={`relative h-full rounded-2xl border p-8 transition-all duration-300 ${
                    hovered
                        ? 'border-primary-border bg-primary-bg/5 shadow-primary-solid/5 shadow-xl'
                        : 'border-canvas-line bg-canvas-bg hover:border-primary-border/30 hover:bg-primary-bg/3'
                }`}>
                <div className='mb-6 flex items-start justify-between'>
                    <div
                        className={`rounded-xl p-4 transition-all duration-300 ${
                            hovered
                                ? 'bg-primary-solid/70 text-white shadow-lg'
                                : 'bg-primary-bg/50 text-primary-solid/80'
                        }`}>
                        <feature.icon className='h-7 w-7' />
                    </div>

                    <span
                        className={`rounded-full px-3 py-1 text-xs font-medium transition-colors duration-300 ${
                            hovered
                                ? 'bg-primary-bg/20 text-primary-text-contrast/80'
                                : 'bg-canvas-bg-subtle text-canvas-text'
                        }`}>
                        {feature.category}
                    </span>
                </div>

                <div className='mb-8'>
                    <h3
                        className={`mb-3 text-2xl font-bold transition-colors duration-300 ${hovered ? 'text-canvas-text-contrast' : 'text-canvas-text-contrast'}`}>
                        {feature.title}
                    </h3>

                    <p
                        className={`mb-4 text-lg font-medium transition-colors duration-300 ${hovered ? 'text-canvas-text-contrast/90' : 'text-canvas-text-contrast'}`}>
                        {feature.description}
                    </p>

                    <p
                        className={`text-sm leading-relaxed transition-colors duration-300 ${hovered ? 'text-canvas-text/90' : 'text-canvas-text'}`}>
                        {feature.details}
                    </p>
                </div>

                <div className='mb-6 flex items-center gap-8'>
                    {feature.stats.map((stat, idx) => (
                        <div key={idx} className='text-center'>
                            <div
                                className={`text-2xl font-bold transition-colors duration-300 ${hovered ? 'text-primary-solid/90' : 'text-canvas-text-contrast'}`}>
                                {stat.value}
                            </div>
                            <div
                                className={`text-xs font-medium transition-colors duration-300 ${hovered ? 'text-canvas-text/80' : 'text-canvas-text'}`}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className={`flex items-center gap-3 text-sm font-medium transition-colors duration-300 ${hovered ? 'text-canvas-text-contrast/90' : 'text-canvas-text'}`}>
                    <FaCheck
                        className={`h-4 w-4 transition-colors duration-300 ${hovered ? 'text-primary-solid/90' : 'text-primary-solid'}`}
                    />
                    {feature.benefit}
                </div>

                {hovered && (
                    <div className='animate-fade-in absolute right-8 bottom-8'>
                        <div className='bg-primary-bg/10 rounded-lg p-2'>
                            <FaArrowRight className='text-primary-solid/80 h-4 w-4' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});

export default function Features() {
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

    return (
        <section className='relative w-full px-4 py-24 sm:px-6 lg:px-8'>
            {/* Subtle Background */}
            <div className='absolute inset-0'>
                <div className='absolute inset-0 opacity-5'>
                    <div
                        className='absolute inset-0'
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(var(--primary-solid-rgb), 0.3) 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }}
                    />
                </div>
            </div>

            <div className='relative mx-auto max-w-7xl'>
                {/* Clean Header */}
                <div className='animate-fade-in mb-16 text-center'>
                    <h2 className='text-canvas-text-contrast mb-6 text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl'>
                        Built for{' '}
                        <span className='from-primary-solid via-primary-text to-primary-text-contrast bg-gradient-to-r bg-clip-text text-transparent'>
                            designers
                        </span>
                    </h2>

                    <p className='text-canvas-text mx-auto max-w-4xl text-xl leading-relaxed sm:text-2xl'>
                        Everything you need to create, customize, and deploy beautiful design systems. From color
                        palettes to complete themes in minutes.
                    </p>
                </div>

                {/* Clean Features Grid */}
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                    {featuresData.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            feature={feature}
                            hovered={hoveredFeature === feature.id}
                            onHover={(id) => setHoveredFeature(id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
