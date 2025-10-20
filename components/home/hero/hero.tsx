'use client';

import React, { useCallback, useEffect, useState } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { AnimatePresence, motion } from 'framer-motion';
import {
    FaArrowRight,
    FaCheck,
    FaCode,
    FaCog,
    FaCopy,
    FaEye,
    FaGithub,
    FaMagic,
    FaPalette,
    FaPlay,
    FaRocket,
    FaStar,
    FaUsers
} from 'react-icons/fa';

// Module-level static data to avoid re-creating arrays on each render
const STATS = [
    { value: '50+', label: 'Color Scales', icon: FaPalette },
    { value: '99.9%', label: 'Accessible', icon: FaEye },
    { value: '3', label: 'GitHub Stars', icon: FaStar },
    { value: '< 5min', label: 'Setup Time', icon: FaPalette }
];

const FEATURES = [
    'Radix Color System',
    'Dark/Light Themes',
    'Custom Palettes',
    'WCAG Compliant',
    'TypeScript Ready',
    'Framework Agnostic'
];

const DEMO_THEMES = [
    { name: 'Indigo', color: '#6366f1', bg: 'from-indigo-500/10 to-indigo-600/5' },
    { name: 'Emerald', color: '#10b981', bg: 'from-emerald-500/10 to-emerald-600/5' },
    { name: 'Rose', color: '#f43f5e', bg: 'from-rose-500/10 to-rose-600/5' },
    { name: 'Amber', color: '#f59e0b', bg: 'from-amber-500/10 to-amber-600/5' }
];

export default function Hero() {
    const [copied, setCopied] = useState(false);
    const [activeDemo, setActiveDemo] = useState(0);

    // Cycle through demo themes
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDemo((prev) => (prev + 1) % DEMO_THEMES.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentTheme = DEMO_THEMES[activeDemo];

    return (
        <div className='relative flex min-h-screen items-center justify-center overflow-hidden'>
            {/* Dynamic Background Pattern */}
            <div className='absolute inset-0 opacity-30'>
                <motion.div
                    className='absolute inset-0'
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(var(--primary-solid-rgb), 0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                    animate={{
                        backgroundPosition: ['0px 0px', '40px 40px']
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
            </div>

            {/* Floating Color Orbs */}
            <div className='absolute inset-0 overflow-hidden'>
                <motion.div
                    className='absolute top-1/4 left-1/4 h-64 w-64 rounded-full opacity-20 blur-3xl'
                    style={{ background: `linear-gradient(45deg, ${currentTheme.color}40, transparent)` }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [-20, 20, -20],
                        y: [-10, 10, -10]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className='absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full opacity-15 blur-3xl'
                    style={{ background: `linear-gradient(225deg, rgba(var(--primary-solid-rgb), 0.3), transparent)` }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [20, -20, 20],
                        y: [10, -10, 10]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                />
            </div>

            <div className='relative z-10 w-full px-4 py-20 sm:px-6 lg:px-8'>
                <div className='mx-auto max-w-7xl'>
                    {/* Header Content */}
                    <motion.div
                        className='mb-16 text-center'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}>
                        {/* Main Headline */}
                        <motion.h1
                            className='text-canvas-text-contrast mb-8 text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl xl:text-8xl'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}>
                            Design Systems
                            <br />
                            <span className='from-primary-solid via-primary-text to-primary-text-contrast bg-gradient-to-r bg-clip-text text-transparent'>
                                Made Simple
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className='text-canvas-text mx-auto mb-12 max-w-4xl text-xl leading-relaxed sm:text-2xl'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}>
                            Create beautiful, accessible themes with the power of Radix Colors. From custom palettes to
                            complete design systems in minutes.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className='mb-12 flex flex-col items-center justify-center gap-6 sm:flex-row'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}>
                            <Link href='/theme-editor' rel='noopener noreferrer'>
                                <Button
                                    className='group relative flex cursor-pointer items-center gap-3 rounded-2xl px-10 py-5 text-lg font-semibold shadow-xl transition-all duration-300 hover:shadow-2xl'
                                    color='primary'
                                    variant='solid'
                                    size='lg'>
                                    <FaMagic className='h-5 w-5' />
                                    <span>Create Your Theme</span>
                                    <motion.div className='transition-transform group-hover:translate-x-1'>
                                        <FaArrowRight className='h-5 w-5' />
                                    </motion.div>
                                    <div className='from-primary-solid to-primary-text absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r opacity-75 blur transition-opacity group-hover:opacity-100' />
                                </Button>
                            </Link>

                            <Link
                                href='https://github.com/syedsaif666/designrift/tree/master'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <Button
                                    className='group bg-canvas-bg text-canvas-text-contrast border-canvas-line hover:border-primary-border hover:bg-primary-bg-subtle flex cursor-pointer items-center gap-3 rounded-2xl border px-10 py-5 text-lg font-semibold transition-all duration-300'
                                    color='neutral'
                                    variant='surface'
                                    size='lg'>
                                    <FaGithub className='h-5 w-5' />
                                    <span>View on GitHub</span>
                                    <div className='text-canvas-text bg-canvas-bg-subtle rounded-full px-3 py-1 text-sm'>
                                        3 ⭐
                                    </div>
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Live Theme Demo */}
                    <motion.div
                        className='mb-20'
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}>
                        <div className='mb-12 text-center'>
                            <h3 className='text-canvas-text-contrast mb-4 text-2xl font-bold'>See themes in action</h3>
                            <p className='text-canvas-text'>Watch as colors transform your interface in real-time</p>
                        </div>

                        <div className='relative mx-auto max-w-5xl'>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeDemo}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                    className='bg-canvas-base border-canvas-line rounded-3xl border p-8 shadow-2xl backdrop-blur-sm'>
                                    {/* Browser Header */}
                                    <div className='mb-6 flex items-center gap-4'>
                                        <div className='flex gap-2'>
                                            <div className='h-3 w-3 rounded-full bg-red-500' />
                                            <div className='h-3 w-3 rounded-full bg-yellow-500' />
                                            <div className='h-3 w-3 rounded-full bg-green-500' />
                                        </div>
                                        <div className='bg-canvas-bg text-canvas-text flex flex-1 items-center gap-2 rounded-full px-4 py-2 text-sm'>
                                            <span>https://designrift.vercel.app</span>
                                            <motion.div
                                                className='h-2 w-2 rounded-full'
                                                style={{ backgroundColor: currentTheme.color }}
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                            />
                                        </div>
                                    </div>

                                    {/* Mock Dashboard */}
                                    <div className='space-y-6'>
                                        {/* Header */}
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-4'>
                                                <motion.div
                                                    className='flex h-12 w-12 items-center justify-center rounded-2xl'
                                                    style={{ backgroundColor: `${currentTheme.color}20` }}>
                                                    <FaPalette
                                                        className='h-6 w-6'
                                                        style={{ color: currentTheme.color }}
                                                    />
                                                </motion.div>
                                                <div>
                                                    <div className='bg-canvas-text-contrast/20 mb-2 h-4 w-32 rounded' />
                                                    <div className='bg-canvas-text/40 h-3 w-20 rounded' />
                                                </div>
                                            </div>
                                            <motion.div
                                                className='rounded-xl px-4 py-2 text-sm font-medium text-white'
                                                style={{ backgroundColor: currentTheme.color }}>
                                                {currentTheme.name} Theme
                                            </motion.div>
                                        </div>

                                        {/* Stats Cards */}
                                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                                            {[1, 2, 3].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    className='bg-canvas-bg border-canvas-line rounded-2xl border p-6'
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}>
                                                    <div className='mb-3 flex items-center gap-3'>
                                                        <div
                                                            className='h-3 w-3 rounded-full'
                                                            style={{ backgroundColor: currentTheme.color }}
                                                        />
                                                        <div className='bg-canvas-text/30 h-3 flex-1 rounded' />
                                                    </div>
                                                    <div className='bg-canvas-text-contrast/30 mb-2 h-8 w-20 rounded' />
                                                    <div className='bg-canvas-text/20 h-3 w-16 rounded' />
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Main Content */}
                                        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                                            <div className='space-y-4 lg:col-span-2'>
                                                <div className='bg-canvas-text-contrast/20 h-4 w-48 rounded' />
                                                <div className='bg-canvas-bg border-canvas-line relative h-32 overflow-hidden rounded-2xl border'>
                                                    <motion.div
                                                        className='absolute top-4 left-4 h-2 w-16 rounded'
                                                        style={{ backgroundColor: currentTheme.color }}
                                                        animate={{ width: ['64px', '120px', '64px'] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='space-y-4'>
                                                <div className='bg-canvas-text-contrast/20 h-4 w-32 rounded' />
                                                <div className='space-y-3'>
                                                    {[1, 2, 3].map((i) => (
                                                        <div
                                                            key={i}
                                                            className='bg-canvas-bg border-canvas-line flex items-center gap-3 rounded-xl border p-3'>
                                                            <div
                                                                className='h-2 w-2 rounded-full'
                                                                style={{ backgroundColor: currentTheme.color }}
                                                            />
                                                            <div className='bg-canvas-text/20 h-3 flex-1 rounded' />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Theme Selector */}
                            <div className='mt-8 flex justify-center gap-3'>
                                {DEMO_THEMES.map((theme, index) => (
                                    <motion.button
                                        key={theme.name}
                                        aria-label={`Select ${theme.name} theme`}
                                        className={`h-4 w-4 rounded-full border-2 transition-all duration-300 ${
                                            activeDemo === index
                                                ? 'scale-125 border-white shadow-lg'
                                                : 'border-canvas-line hover:border-canvas-text'
                                        }`}
                                        style={{ backgroundColor: theme.color }}
                                        onClick={() => setActiveDemo(index)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        className='mb-20 grid grid-cols-2 gap-8 lg:grid-cols-4'
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}>
                        {STATS.map((stat, index) => (
                            <motion.div
                                key={index}
                                className='group cursor-pointer text-center'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}>
                                <div className='mb-4 flex justify-center'>
                                    <div className='bg-primary-bg/50 group-hover:bg-primary-solid/80 rounded-2xl p-4 shadow-lg transition-colors duration-300'>
                                        <stat.icon className='text-primary-solid/80 h-6 w-6 transition-colors duration-300 group-hover:text-white' />
                                    </div>
                                </div>
                                <div className='text-canvas-text-contrast mb-2 text-3xl font-bold'>{stat.value}</div>
                                <div className='text-canvas-text text-sm font-medium'>{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Features Section */}
                    <motion.div
                        className='text-center'
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}>
                        <h3 className='text-canvas-text-contrast mb-8 text-3xl font-bold'>
                            Everything you need for modern design
                        </h3>

                        <div className='mx-auto flex max-w-4xl flex-wrap justify-center gap-4'>
                            {FEATURES.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className='bg-canvas-bg border-canvas-line text-canvas-text hover:border-primary-border hover:bg-primary-bg-subtle flex items-center gap-3 rounded-full border px-6 py-3 text-sm transition-all duration-300'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}>
                                    <FaCheck className='text-primary-solid h-4 w-4' />
                                    <span className='font-medium'>{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
