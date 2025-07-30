'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Users, Clock } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Elements */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-black to-purple-50" /> */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-700 text-sm font-medium">
                            Introducing DesignRift 
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-canvas-text mb-6 leading-tight">
                        Create Beautiful{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                            Accessible Themes
                        </span>
                        <br />
                        in Seconds
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-canvas-subtle max-w-3xl mx-auto mb-12 leading-relaxed">
                        Transform your design workflow with AI-powered theme generation. 
                        Built on Radix colors with WCAG compliance and instant dark mode.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Link href="/theme-editor">
                            <Button
                                color="primary"
                                variant="solid"
                                size="lg"
                                className="group relative overflow-hidden px-8 py-4 text-lg font-semibold"
                                trailingIcon={
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                }
                            >
                                Start Creating
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                            </Button>
                        </Link>
                        
                        <Link href="#demo">
                            <Button
                                color="neutral"
                                variant="outline"
                                size="lg"
                                className="px-8 py-4 text-lg font-semibold"
                            >
                                Watch Demo
                            </Button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                            <div className="text-gray-600">Themes Created</div>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Sparkles className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                            <div className="text-gray-600">WCAG Compliant</div>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Clock className="w-6 h-6 text-purple-600" />
                            </div>
                            <div className="text-3xl font-bold text-purple-600 mb-2">5s</div>
                            <div className="text-gray-600">Average Setup</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
                </div>
            </div> */}
        </section>
    );
}