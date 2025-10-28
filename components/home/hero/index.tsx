import { Button } from '@/components/ui/button';
import { useGithubStars } from '@/hooks/use-github-stars';
import { formatCompactNumber } from '@/lib/utils/format';
import { Code } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaCheck, FaArrowRight, FaGithub, FaStar, FaEye, FaPalette } from 'react-icons/fa';

export default function HeroSection() {
    const { stargazersCount } = useGithubStars("syedsaif666", "designrift");

    return (
        <section className="mx-auto min-h-[90vh] flex items-center justify-center px-4 py-20">
            <div className="flex xl:flex-row flex-col justify-between items-center w-full md:w-[85vw] gap-4">
                {/* Left Content */}
                <div className="space-y-8 xl:w-1/2 md:w-[80vw]">
                    <div className="inline-flex">
                        <span className="bg-gradient-to-r from-primary-bg to-primary-bg-hover text-canvas-text-contrast px-6 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2">
                            <span className='text-alert-solid'>✦</span>
                            Your Perfect Theme Creator
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-2">
                        <h1 className="text-canvas-text-contrast text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                            Design Your{' '}
                            <span className="italic font-serif font-light tracking-tight text-primary-text">Perfect</span>
                        </h1>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font- font-extrabold leading-tight">
                            <span className="text-canvas-text-contrast">Custom</span>{' '}
                            <span className="text-canvas-text-contrast">Theme</span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <p className="text-canvas-text-contrast font-medium md:text-xl max-w-2xl tracking-wide">
                        Create stunning, accessible themes using Radix colors. Get built-in dark mode and accessibility. Set up once, customize infinitely.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link href='/editor'>
                            <Button
                                variant='solid'
                                size='lg'
                                color='primary'
                                trailingIcon={<FaArrowRight className="w-4 h-4" />}
                            >
                                Create Your Theme
                            </Button>
                        </Link>
                        <Link href='https://github.com/syedsaif666/designrift'>
                            <Button
                                variant='surface'
                                size='lg'
                                color='primary'
                                leadingIcon={<FaGithub className="w-4 h-4 dark:text-[#FDFDFD]" />}
                            >
                                View on Github {' '} <span className='ml-2 bg-primary-bg-active px-3 py-0.5 rounded-full text-sm flex items-center gap-2'>{stargazersCount > 0 && formatCompactNumber(stargazersCount)} <span><FaStar className='text-warning-solid' /></span></span>
                            </Button>
                        </Link>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-6 pt-4">
                        <div className="flex items-center gap-2 text-canvas-text-contrast">
                            <FaCheck className="text-primary-solid w-4 h-4" />
                            <span className="text-sm md:text-base">Real-time Preview</span>
                        </div>
                        <div className="flex items-center gap-2 text-canvas-text-contrast">
                            <FaCheck className="text-primary-solid w-4 h-4" />
                            <span className="text-sm md:text-base">Export to Tailwind</span>
                        </div>
                        <div className="flex items-center gap-2 text-canvas-text-contrast">
                            <FaCheck className="text-primary-solid w-4 h-4" />
                            <span className="text-sm md:text-base">Customize infinitely</span>
                        </div>
                    </div>
                </div>

                {/* Right Preview Card */}
                <div className="relative xl:w-1/2 w-full">
                    <div className="bg-canvas-bg-subtle border border-canvas-bg-hover rounded-2xl shadow-2xl overflow-hidden">
                        {/* Window Controls */}
                        <div className="bg-canvas-bg border-b border-canvas-bg-hover px-4 py-3 flex items-center gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-alert-solid"></div>
                                <div className="w-3 h-3 rounded-full bg-warning-solid/80"></div>
                                <div className="w-3 h-3 rounded-full bg-success-solid"></div>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6 space-y-6">
                            {/* Color Palette Header */}
                            <div className="flex items-center justify-between">
                                <h3 className="text-canvas-text-contrast font-semibold text-lg">Color Palette</h3>
                                <FaPalette className='text-canvas-text hover:text-canvas-text-contrast'/>
                            </div>

                            {/* Color Gradient Bar */}
                            <div className="rounded-lg overflow-hidden h-24 bg-gradient-to-r from-canvas-solid to-primary-solid"></div>

                            {/* Color Labels */}
                            <div className="flex justify-between text-xs text-canvas-text-contrast">
                                <span>Canvas</span>
                                <span>Primary</span>
                            </div>

                            {/* Preview Section */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-canvas-text-contrast font-semibold">Preview</h3>
                                    <FaEye className='text-canvas-text hover:text-canvas-text-contrast'/>
                                </div>

                                <Button
                                    color="primary"
                                    variant="solid"
                                    size="default"
                                    leadingIcon={<Code size={16} />}
                                    className='flex-1'
                                    fullWidth={true}
                                >
                                    Get Code
                                </Button>

                                {/* Format Display */}
                                <div className="bg-canvas-bg rounded-lg p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary-bg text-primary-text px-3 py-1 rounded text-xs font-mono">
                                            ui
                                        </div>
                                        <div className="h-1.5 w-32 bg-canvas-bg-hover rounded-full"></div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-info-solid"></div>
                                        <span className="text-canvas-text-contrast text-xs">oklch, hsl, rgb, hex</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}