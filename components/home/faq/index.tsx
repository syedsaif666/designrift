'use client';

import { useState } from 'react';
import { Zap, Code, Search, Bot, Palette } from 'lucide-react';
import { FAQItem, FAQItemComponent } from './faq-items';
import { motion } from "motion/react";

const faqData: FAQItem[] = [
    {
        id: 1,
        question: 'What is DesignRift and how does it work?',
        answer: "DesignRift is a powerful theme builder that leverages the Radix Colors system to create beautiful, accessible design systems. Simply choose your colors, customize your palette, and export ready-to-use themes for any framework. Our visual editor makes theme creation intuitive - no design experience required.",
        icon: <Zap className="w-5 h-5" />,
        category: "Platform"
    },
    {
        id: 2,
        question: 'How do I get started with creating my first theme?',
        answer: 'Getting started is simple! Install DesignRift with `npm install designrift`, then use our theme builder interface to select your primary colors and generate a complete color system. You can preview changes in real-time and export your theme as CSS variables, design tokens, or framework-specific configurations.',
        icon: <Code className="w-5 h-5" />,
        category: "Getting Started"
    },
    {
        id: 3,
        question: 'What frameworks and tools does DesignRift support?',
        answer: 'DesignRift is framework-agnostic and works with any web technology. We provide native support for:\n\n• React, Vue, Angular, and Svelte components\n• CSS Variables and custom properties\n• Tailwind CSS configuration files\n• Design tokens for Figma and other design tools\n• Sass/SCSS variables and mixins',
        icon: <Search className="w-5 h-5" />,
        category: "Integration"
    },
    {
        id: 4,
        question: 'Are the generated themes accessible and WCAG compliant?',
        answer: 'Absolutely! All DesignRift themes are built on the Radix Colors system, which ensures WCAG AAA compliance by default. Every color scale is carefully designed with proper contrast ratios for text, backgrounds, and interactive elements. Dark and light modes are automatically generated with optimal accessibility.',
        icon: <Bot className="w-5 h-5" />,
        category: "Accessibility"
    },
    {
        id: 5,
        question: 'Can I customize themes beyond the default color scales?',
        answer: "Yes! DesignRift offers extensive customization options. You can create custom color palettes, adjust individual color steps, modify semantic tokens, and even create brand-specific variations. Our advanced editor allows fine-tuning of contrast ratios, saturation levels, and hue shifts to match your exact brand requirements.",
        icon: <Palette className="w-5 h-5" />,
        category: "Customization"
    }
];

export default function Faq() {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const toggleItem = (id: number) => {
        setOpenItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }

            return newSet;
        });
    };

    return (
        <section id='faq' className="relative py-16 lg:py-24 px-4 sm:px-0 overflow-hidden sm:max-w-[85vw]" aria-label="Frequently Asked Questions">
            <div className="relative mx-auto md:max-w-[85vw]">
                {/* Header */}
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
                            FAQs
                        </span>
                    </div>
                    <h2 className="text-canvas-text-contrast max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
                        Everything you need to know
                    </h2>
                    <p className="text-canvas-text font-medium max-w-3xl md:text-lg">
                        Get answers to the most common questions about designrift
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4" role="list">
                    {faqData.map((item) => (
                        <FAQItemComponent
                            key={item.id}
                            item={item}
                            isOpen={openItems.has(item.id)}
                            onToggle={toggleItem}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}