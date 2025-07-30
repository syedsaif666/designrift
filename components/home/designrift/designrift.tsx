'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PlayGroundCard from '@/components/home/designrift/playground-card';
import { ArrowRight, Sparkles, Zap, Clock, Palette } from 'lucide-react';
import { motion } from 'framer-motion'

const steps = [
    {
        id: 1,
        title: "Choose Your Style",
        description: "Select from curated color palettes or input your brand colors",
        icon: <Palette className="w-6 h-6" />,
        color: "from-blue-500 to-purple-600"
    },
    {
        id: 2,
        title: "AI Generation",
        description: "Our AI creates accessible themes with perfect contrast ratios",
        icon: <Sparkles className="w-6 h-6" />,
        color: "from-purple-500 to-pink-600"
    },
    {
        id: 3,
        title: "Instant Preview",
        description: "See your theme applied in real-time with dark mode included",
        icon: <Zap className="w-6 h-6" />,
        color: "from-pink-500 to-red-600"
    }
];

export default function DesignRift() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-700 text-sm font-medium">
                            From Idea to Theme in Seconds
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-4xl md:text-5xl text-primary-text font-bold mb-6">
                        How DesignRift{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Works Its Magic
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl max-w-3xl mx-auto">
                        Experience the power of intelligent theme generation. Watch as your ideas
                        transform into production-ready themes with just a few clicks.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Process Steps Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="space-y-8">
                        {/* Process Timeline */}
                        <div className="relative">
                            {/* Connecting Line */}
                            <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-purple-200"></div>

                            {steps.map((step, index) => (
                                <div
                                    key={step.id}
                                    className={`relative flex items-start space-x-6 pb-8 transition-all duration-500 ${activeStep === index ? 'scale-105' : 'scale-100'
                                        }`}
                                >
                                    {/* Step Icon */}
                                    <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg transition-all duration-500 ${activeStep === index ? 'shadow-2xl scale-110' : ''}`}>
                                        {step.icon}
                                        {activeStep === index && (
                                            <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse"></div>
                                        )}
                                    </div>

                                    {/* Step Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${activeStep === index ? 'text-primary-text' : 'text-primary-line'}`}>
                                            <div className="flex items-center gap-3">
                                                {step.title}
                                                {activeStep === index && (
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                )}
                                            </div>
                                        </h3>
                                        <p className={`${activeStep === index ? 'text-primary' : 'text-gray-500'} leading-relaxed`}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600 mb-1">5s</div>
                                <div className="text-sm text-primary">Average Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                                <div className="text-sm text-primary">WCAG Compliant</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-pink-600 mb-1">∞</div>
                                <div className="text-sm text-primary">Customization</div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Interactive Demo Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex justify-center">
                        <PlayGroundCard />
                    </motion.div>
                </div>
            </div>

        </section>
    );
}