'use client';

import { useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { FaPalette, FaCode, FaRocket, FaEye, FaMagic, FaCog, FaArrowRight, FaCheck } from 'react-icons/fa';

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
        details: 'Built on the industry-leading Radix Colors system with 30+ carefully crafted color scales. Each palette is designed for accessibility, contrast, and visual harmony across light and dark themes.',
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
        details: 'Create stunning themes with our intuitive visual editor. Mix and match colors, adjust contrasts, and see changes in real-time. Export your custom themes as CSS variables or design tokens.',
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
        details: 'Use DesignRift themes with any framework or library. Compatible with React, Vue, Angular, Svelte, and vanilla CSS. Export formats include CSS variables, Tailwind config, and design tokens.',
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
        details: 'Automatic dark and light mode generation from a single theme. Every color scale includes optimized variants for both appearances, ensuring perfect contrast and accessibility.',
        category: 'Themes',
        benefit: 'Zero configuration needed',
        icon: FaEye,
        stats: [
            { value: '2x', label: 'Themes' },
            { value: '100%', label: 'Coverage' }
        ]
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
        }
    }
};

export default function Features() {
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

    return (
        <section className='py-24 w-full px-4 sm:px-6 lg:px-8'>
            
            {/* Subtle Background */}
            <div className='absolute inset-0'>
                <div className='absolute inset-0 opacity-5'>
                    <div className='absolute inset-0' style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(var(--primary-solid-rgb), 0.3) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>
            </div>
            
            <div className='relative mx-auto max-w-7xl'>
                {/* Clean Header */}
                <motion.div
                    className='text-center mb-16'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}>
                    
                    <motion.div
                        className='inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-primary-bg border border-primary-border'
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}>
                        <FaCog className='text-primary-solid w-4 h-4' />
                        <span className='text-primary-text-contrast text-sm font-medium'>Powerful Features</span>
                    </motion.div>

                    <h2 className='text-canvas-text-contrast text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6'>
                        Built for{' '}
                        <span className='bg-gradient-to-r from-primary-solid via-primary-text to-primary-text-contrast bg-clip-text text-transparent'>
                            designers
                        </span>
                    </h2>

                    <p className='text-canvas-text text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed'>
                        Everything you need to create, customize, and deploy beautiful design systems. 
                        From color palettes to complete themes in minutes.
                    </p>
                </motion.div>

                {/* Clean Features Grid */}
                <motion.div
                    className='grid grid-cols-1 lg:grid-cols-2 gap-8'
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}>
                    
                    {featuresData.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            variants={itemVariants}
                            className='group h-full'
                            onMouseEnter={() => setHoveredFeature(feature.id)}
                            onMouseLeave={() => setHoveredFeature(null)}>
                            
                            <div className={`relative h-full p-8 rounded-2xl border transition-all duration-300 ${
                                hoveredFeature === feature.id
                                    ? 'border-primary-border bg-primary-bg shadow-xl shadow-primary-solid/10'
                                    : 'border-canvas-line bg-canvas-bg hover:border-primary-border hover:bg-primary-bg/30'
                            }`}>
                                
                                {/* Simple Header */}
                                <div className='flex items-start justify-between mb-6'>
                                    <div className={`p-4 rounded-xl transition-colors duration-300 ${
                                        hoveredFeature === feature.id
                                            ? 'bg-primary-solid text-white'
                                            : 'bg-primary-bg text-primary-solid'
                                    }`}>
                                        <feature.icon className='w-7 h-7' />
                                    </div>
                                    
                                    <span className={`px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
                                        hoveredFeature === feature.id
                                            ? 'bg-primary-solid text-white'
                                            : 'bg-canvas-bg-subtle text-canvas-text'
                                    }`}>
                                        {feature.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className='mb-8'>
                                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                                        hoveredFeature === feature.id
                                            ? 'text-primary-text-contrast'
                                            : 'text-canvas-text-contrast'
                                    }`}>
                                        {feature.title}
                                    </h3>
                                    
                                    <p className={`text-lg font-medium mb-4 transition-colors duration-300 ${
                                        hoveredFeature === feature.id
                                            ? 'text-primary-text-contrast'
                                            : 'text-canvas-text-contrast'
                                    }`}>
                                        {feature.description}
                                    </p>
                                    
                                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                                        hoveredFeature === feature.id
                                            ? 'text-primary-text-contrast/80'
                                            : 'text-canvas-text'
                                    }`}>
                                        {feature.details}
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className='flex items-center gap-8 mb-6'>
                                    {feature.stats.map((stat, idx) => (
                                        <div key={idx} className='text-center'>
                                            <div className={`text-2xl font-bold transition-colors duration-300 ${
                                                hoveredFeature === feature.id
                                                    ? 'text-primary-text-contrast'
                                                    : 'text-canvas-text-contrast'
                                            }`}>
                                                {stat.value}
                                            </div>
                                            <div className={`text-xs font-medium transition-colors duration-300 ${
                                                hoveredFeature === feature.id
                                                    ? 'text-primary-text-contrast/70'
                                                    : 'text-canvas-text'
                                            }`}>
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Benefit */}
                                <div className={`flex items-center gap-3 text-sm font-medium transition-colors duration-300 ${
                                    hoveredFeature === feature.id
                                        ? 'text-primary-text-contrast'
                                        : 'text-canvas-text'
                                }`}>
                                    <FaCheck className={`w-4 h-4 transition-colors duration-300 ${
                                        hoveredFeature === feature.id
                                            ? 'text-primary-text-contrast'
                                            : 'text-primary-solid'
                                    }`} />
                                    {feature.benefit}
                                </div>

                                {/* Simple Arrow Indicator */}
                                {hoveredFeature === feature.id && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className='absolute bottom-8 right-8'>
                                        <div className='p-2 bg-primary-solid/20 rounded-lg'>
                                            <FaArrowRight className='w-4 h-4 text-primary-solid' />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}