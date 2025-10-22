"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { Palette, Text, RefreshCw, SlidersHorizontal, Scale, Code } from 'lucide-react';

// Features Data
const features = [
    {
        icon: <Palette className="w-5 h-5 text-canvas-text" />,
        title: "Color Management",
        description: `Adjust background, text, and border hues using a user-friendly color selector. We've incorporated the newest Tailwind v4 color options for seamless integration.`,
    },
    {
        icon: <Text className="w-5 h-5 text-canvas-text" />,
        title: "Font Adjustments",
        description: `Refine font dimensions, boldness, and text modifications to achieve an ideal appearance.`,
    },
    {
        icon: <RefreshCw className="w-5 h-5 text-canvas-text" />,
        title: "Tailwind v4 & v3 Compatibility",
        description: `Effortlessly toggle between Tailwind v4 and v3, offering backing for various color systems like OKLCH and HSL.`,
    },
    {
        icon: <SlidersHorizontal className="w-5 h-5 text-canvas-text" />,
        title: "Tailwind Attributes",
        description: `Precisely calibrate all elements of your UI parts, including curves, gaps, shades, and additional Tailwind features.`,
    },
    {
        icon: <Scale className="w-5 h-5 text-canvas-text" />,
        title: "Contrast Evaluator",
        description: `Guarantee your layouts adhere to accessibility guidelines through integrated contrast assessment for text against backgrounds.`,
    },
    {
        icon: <Code className="w-5 h-5 text-canvas-text" />,
        title: "Export & Integration",
        description: `Export your theme as CSS variables, Tailwind config, or JSON. Seamlessly integrate with your existing projects and workflows.`,
    },
];

// Features Main Section
export function Features() {
    return (
        <section id="features" className="relative isolate w-full py-24 md:py-36 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-[85vw]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
                >
                    <div className="inline-flex">
                        <span className="bg-gradient-to-r from-primary-bg to-primary-bg-hover text-canvas-text-contrast px-6 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2">
                            <span className='text-alert-solid'>✦</span>
                            Features
                        </span>
                    </div>
                    <h2 className="text-canvas-text-contrast max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
                        Powerful Customization Tools
                    </h2>
                    <p className="text-canvas-text font-medium max-w-3xl md:text-lg">
                        All the tools you need to customize your radixui components and make them unique.
                    </p>
                </motion.div>
                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            <Card
                                className="group relative overflow-hidden border border-canvas-bg-hover bg-canvas-bg-subtle backdrop-blur-sm hover:border-primary-bg-hover transition-all duration-300 hover:shadow-xl hover:shadow-primary-solid/10 h-full"
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-canvas-solid/0 via-transparent to-primary-solid/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-canvas-bg-contrast/10 to-transparent skew-x-12"></div>

                                <CardContent className="relative flex flex-col gap-5 p-7">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary-bg to-primary-bg-hover border border-primary-bg-active group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                        {feature.icon}
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold text-canvas-text-contrast group-hover:text-primary-text transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-canvas-text-contrast">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-canvas-solid to-primary-solid transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}