'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaCheck, FaCopy, FaGithub, FaPlay, FaStar, FaUsers, FaRocket, FaPalette, FaMagic, FaEye, FaCode, FaCog } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
    const [copied, setCopied] = useState(false);
    const [activeDemo, setActiveDemo] = useState(0);

    const handleCopy = async () => {
        await navigator.clipboard.writeText('npm install designrift');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const stats = [
        { value: '50+', label: 'Color Scales', icon: FaPalette },
        { value: '99.9%', label: 'Accessible', icon: FaEye },
        { value: '3', label: 'GitHub Stars', icon: FaStar },
        { value: '< 5min', label: 'Setup Time', icon: FaPalette }
    ];

    const features = [
        'Radix Color System',
        'Dark/Light Themes',
        'Custom Palettes',
        'WCAG Compliant',
        'TypeScript Ready',
        'Framework Agnostic'
    ];

    const demoThemes = [
        { name: 'Indigo', color: '#6366f1', bg: 'from-indigo-500/10 to-indigo-600/5' },
        { name: 'Emerald', color: '#10b981', bg: 'from-emerald-500/10 to-emerald-600/5' },
        { name: 'Rose', color: '#f43f5e', bg: 'from-rose-500/10 to-rose-600/5' },
        { name: 'Amber', color: '#f59e0b', bg: 'from-amber-500/10 to-amber-600/5' }
    ];

    // Cycle through demo themes
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDemo(prev => (prev + 1) % demoThemes.length);
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);

    const currentTheme = demoThemes[activeDemo];

    return (
        <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
            
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
                        ease: "linear"
                    }}
                />
            </div>

            {/* Floating Color Orbs */}
            <div className='absolute inset-0 overflow-hidden'>
                <motion.div
                    className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20'
                    style={{ background: `linear-gradient(45deg, ${currentTheme.color}40, transparent)` }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [-20, 20, -20],
                        y: [-10, 10, -10]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className='absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15'
                    style={{ background: `linear-gradient(225deg, rgba(var(--primary-solid-rgb), 0.3), transparent)` }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [20, -20, 20],
                        y: [10, -10, 10]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                />
            </div>

            <div className='relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20'>
                <div className='max-w-7xl mx-auto'>
                    
                    {/* Header Content */}
                    <motion.div
                        className='text-center mb-16'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}>
                        
                        {/* Main Headline */}
                        <motion.h1
                            className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-canvas-text-contrast mb-8 leading-tight'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}>
                            Design Systems
                            <br />
                            <span className='bg-gradient-to-r from-primary-solid via-primary-text to-primary-text-contrast bg-clip-text text-transparent'>
                                Made Simple
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className='text-xl sm:text-2xl text-canvas-text max-w-4xl mx-auto mb-12 leading-relaxed'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}>
                            Create beautiful, accessible themes with the power of Radix Colors. 
                            From custom palettes to complete design systems in minutes.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className='flex flex-col sm:flex-row items-center justify-center gap-6 mb-12'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}>
                            
                            <Link href='/theme-editor' rel='noopener noreferrer'>
                                <Button
                                    className='group cursor-pointer relative font-semibold shadow-xl hover:shadow-2xl flex items-center gap-3 px-10 py-5 rounded-2xl text-lg transition-all duration-300'
                                    color='primary'
                                    variant='solid'
                                    size='lg'>
                                    <FaMagic className='w-5 h-5' />
                                    <span>Create Your Theme</span>
                                    <motion.div
                                        className='transition-transform group-hover:translate-x-1'>
                                        <FaArrowRight className='w-5 h-5' />
                                    </motion.div>
                                    <div className='absolute inset-0 bg-gradient-to-r from-primary-solid to-primary-text rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10' />
                                </Button>
                            </Link>

                            <Link href='https://github.com/syedsaif666/designrift/tree/master' target='_blank' rel='noopener noreferrer'>
                                <Button
                                    className='group cursor-pointer font-semibold border flex items-center gap-3 px-10 py-5 rounded-2xl text-lg bg-canvas-bg text-canvas-text-contrast border-canvas-line hover:border-primary-border hover:bg-primary-bg-subtle transition-all duration-300'
                                    color='neutral'
                                    variant='surface'
                                    size='lg'>
                                    <FaGithub className='w-5 h-5' />
                                    <span>View on GitHub</span>
                                    <div className='text-canvas-text text-sm bg-canvas-bg-subtle px-3 py-1 rounded-full'>
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
                        
                        <div className='text-center mb-12'>
                            <h3 className='text-2xl font-bold text-canvas-text-contrast mb-4'>
                                See themes in action
                            </h3>
                            <p className='text-canvas-text'>
                                Watch as colors transform your interface in real-time
                            </p>
                        </div>

                        <div className='max-w-5xl mx-auto relative'>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeDemo}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                    className='bg-canvas-base border border-canvas-line rounded-3xl p-8 shadow-2xl backdrop-blur-sm'>
                                    
                                    {/* Browser Header */}
                                    <div className='flex items-center gap-4 mb-6'>
                                        <div className='flex gap-2'>
                                            <div className='w-3 h-3 bg-red-500 rounded-full' />
                                            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
                                            <div className='w-3 h-3 bg-green-500 rounded-full' />
                                        </div>
                                        <div className='flex-1 bg-canvas-bg rounded-full px-4 py-2 text-sm text-canvas-text flex items-center gap-2'>
                                            <span>https://designrift.vercel.app</span>
                                            <motion.div
                                                className='w-2 h-2 rounded-full'
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
                                                    className='w-12 h-12 rounded-2xl flex items-center justify-center'
                                                    style={{ backgroundColor: `${currentTheme.color}20` }}>
                                                    <FaPalette className='w-6 h-6' style={{ color: currentTheme.color }} />
                                                </motion.div>
                                                <div>
                                                    <div className='h-4 bg-canvas-text-contrast/20 rounded w-32 mb-2' />
                                                    <div className='h-3 bg-canvas-text/40 rounded w-20' />
                                                </div>
                                            </div>
                                            <motion.div 
                                                className='px-4 py-2 rounded-xl text-white text-sm font-medium'
                                                style={{ backgroundColor: currentTheme.color }}>
                                                {currentTheme.name} Theme
                                            </motion.div>
                                        </div>
                                        
                                        {/* Stats Cards */}
                                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                                            {[1, 2, 3].map((i) => (
                                                <motion.div 
                                                    key={i}
                                                    className='p-6 bg-canvas-bg rounded-2xl border border-canvas-line'
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}>
                                                    <div className='flex items-center gap-3 mb-3'>
                                                        <div 
                                                            className='w-3 h-3 rounded-full'
                                                            style={{ backgroundColor: currentTheme.color }}
                                                        />
                                                        <div className='h-3 bg-canvas-text/30 rounded flex-1' />
                                                    </div>
                                                    <div className='h-8 bg-canvas-text-contrast/30 rounded w-20 mb-2' />
                                                    <div className='h-3 bg-canvas-text/20 rounded w-16' />
                                                </motion.div>
                                            ))}
                                        </div>
                                        
                                        {/* Main Content */}
                                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                                            <div className='lg:col-span-2 space-y-4'>
                                                <div className='h-4 bg-canvas-text-contrast/20 rounded w-48' />
                                                <div className='h-32 bg-canvas-bg rounded-2xl border border-canvas-line relative overflow-hidden'>
                                                    <motion.div
                                                        className='absolute top-4 left-4 w-16 h-2 rounded'
                                                        style={{ backgroundColor: currentTheme.color }}
                                                        animate={{ width: ['64px', '120px', '64px'] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='space-y-4'>
                                                <div className='h-4 bg-canvas-text-contrast/20 rounded w-32' />
                                                <div className='space-y-3'>
                                                    {[1, 2, 3].map((i) => (
                                                        <div key={i} className='flex items-center gap-3 p-3 bg-canvas-bg rounded-xl border border-canvas-line'>
                                                            <div 
                                                                className='w-2 h-2 rounded-full'
                                                                style={{ backgroundColor: currentTheme.color }}
                                                            />
                                                            <div className='h-3 bg-canvas-text/20 rounded flex-1' />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Theme Selector */}
                            <div className='flex justify-center gap-3 mt-8'>
                                {demoThemes.map((theme, index) => (
                                    <motion.button
                                        key={theme.name}
                                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                                            activeDemo === index 
                                                ? 'border-white scale-125 shadow-lg' 
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
    className='grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20'
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}>
    {stats.map((stat, index) => (
        <motion.div
            key={index}
            className='text-center group cursor-pointer'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}>
            <div className='mb-4 flex justify-center'>
                <div className='p-4 bg-primary-bg/50 group-hover:bg-primary-solid/80 rounded-2xl transition-colors duration-300 shadow-lg'>
                    <stat.icon className='w-6 h-6 text-primary-solid/80 group-hover:text-white transition-colors duration-300' />
                </div>
            </div>
            <div className='text-3xl font-bold text-canvas-text-contrast mb-2'>
                {stat.value}
            </div>
            <div className='text-canvas-text text-sm font-medium'>
                {stat.label}
            </div>
        </motion.div>
    ))}
</motion.div>

                    {/* Features Section */}
                    <motion.div
                        className='text-center'
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}>
                        
                        <h3 className='text-3xl font-bold text-canvas-text-contrast mb-8'>
                            Everything you need for modern design
                        </h3>
                        
                        <div className='flex flex-wrap justify-center gap-4 max-w-4xl mx-auto'>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className='flex items-center gap-3 px-6 py-3 bg-canvas-bg border border-canvas-line rounded-full text-sm text-canvas-text hover:border-primary-border hover:bg-primary-bg-subtle transition-all duration-300'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}>
                                    <FaCheck className='w-4 h-4 text-primary-solid' />
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