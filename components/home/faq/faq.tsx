'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaCode, FaEye, FaRocket, FaCog, FaChevronDown } from 'react-icons/fa';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
    icon: React.ComponentType<{ className?: string }>;
    category: string;
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: 'What is DesignRift and how does it work?',
        answer: "DesignRift is a powerful theme builder that leverages the Radix Colors system to create beautiful, accessible design systems. Simply choose your colors, customize your palette, and export ready-to-use themes for any framework. Our visual editor makes theme creation intuitive - no design experience required.",
        icon: FaPalette,
        category: "Platform"
    },
    {
        id: 2,
        question: 'How do I get started with creating my first theme?',
        answer: 'Getting started is simple! Install DesignRift with `npm install designrift`, then use our theme builder interface to select your primary colors and generate a complete color system. You can preview changes in real-time and export your theme as CSS variables, design tokens, or framework-specific configurations.',
        icon: FaRocket,
        category: "Getting Started"
    },
    {
        id: 3,
        question: 'What frameworks and tools does DesignRift support?',
        answer: 'DesignRift is framework-agnostic and works with any web technology. We provide native support for:\n\n• React, Vue, Angular, and Svelte components\n• CSS Variables and custom properties\n• Tailwind CSS configuration files\n• Design tokens for Figma and other design tools\n• Sass/SCSS variables and mixins',
        icon: FaCode,
        category: "Integration"
    },
    {
        id: 4,
        question: 'Are the generated themes accessible and WCAG compliant?',
        answer: 'Absolutely! All DesignRift themes are built on the Radix Colors system, which ensures WCAG AAA compliance by default. Every color scale is carefully designed with proper contrast ratios for text, backgrounds, and interactive elements. Dark and light modes are automatically generated with optimal accessibility.',
        icon: FaEye,
        category: "Accessibility"
    },
    {
        id: 5,
        question: 'Can I customize themes beyond the default color scales?',
        answer: "Yes! DesignRift offers extensive customization options. You can create custom color palettes, adjust individual color steps, modify semantic tokens, and even create brand-specific variations. Our advanced editor allows fine-tuning of contrast ratios, saturation levels, and hue shifts to match your exact brand requirements.",
        icon: FaCog,
        category: "Customization"
    }
];

const formatAnswer = (answer: string) => {
    const codeRegex = /`([^`]+)`/g;
    let formattedAnswer = answer.replace(
        codeRegex,
        '<code class="bg-canvas-bg-active px-2 py-1 rounded-md text-sm font-mono text-primary-text-contrast">$1</code>'
    );

    formattedAnswer = formattedAnswer.replace(/\n\n/g, '<br><br>');
    formattedAnswer = formattedAnswer.replace(/\n•/g, '<br>• ');

    return formattedAnswer;
};

interface FAQItemComponentProps {
    item: FAQItem;
    isOpen: boolean;
    onToggle: (id: number) => void;
}

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemComponentProps) {
    return (
        <motion.div 
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <div
                className={`
                    relative overflow-hidden rounded-2xl border transition-all duration-300 
                    ${isOpen 
                        ? 'border-primary-border bg-primary-bg/20 shadow-lg' 
                        : 'border-canvas-line bg-canvas-bg hover:border-primary-border hover:bg-primary-bg/10'
                    }
                `}
            >
                {/* Question Button */}
                <div
                    onClick={() => onToggle(item.id)}
                    className="relative flex w-full items-center justify-between p-6 text-left cursor-pointer transition-all duration-300"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    role="button"
                >
                    <div className="flex items-center gap-4 flex-1">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <div className={`
                                p-3 rounded-xl transition-all duration-300
                                ${isOpen 
                                    ? 'bg-primary-solid text-white shadow-lg' 
                                    : 'bg-primary-bg text-primary-solid group-hover:bg-primary-solid group-hover:text-white'
                                }
                            `}>
                                <item.icon className="w-5 h-5" />
                            </div>
                        </div>
                        
                        <div className="flex-1">
                            {/* Category badge */}
                            <div className="mb-2">
                                <span className={`
                                    inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-300
                                    ${isOpen 
                                        ? 'bg-primary-solid text-white' 
                                        : 'bg-canvas-bg-subtle text-canvas-text'
                                    }
                                `}>
                                    {item.category}
                                </span>
                            </div>
                            
                            {/* Question */}
                            <h3 className={`text-lg font-semibold leading-tight pr-4 transition-colors duration-300 ${
                                isOpen 
                                    ? 'text-primary-text-contrast' 
                                    : 'text-canvas-text-contrast'
                            }`}>
                                {item.question}
                            </h3>
                        </div>
                    </div>
                    
                    {/* Chevron */}
                    <div className="flex-shrink-0 ml-4">
                        <div className={`
                            p-2 rounded-lg transition-all duration-300
                            ${isOpen 
                                ? 'bg-primary-solid/20 text-primary-text-contrast' 
                                : 'bg-canvas-bg-subtle text-canvas-text group-hover:bg-primary-bg/20'
                            }
                        `}>
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}>
                                <FaChevronDown className="w-4 h-4" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Answer Content */}
                <motion.div
                    id={`faq-answer-${item.id}`}
                    initial={false}
                    animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                    role="region"
                    aria-labelledby={`${item.question}`}
                >
                    <div className="px-6 pb-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-canvas-line to-transparent mb-6" />
                        
                        <div className="space-y-4">
                            <div
                                className="text-canvas-text leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: formatAnswer(item.answer) }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function FAQ() {
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
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-label="Frequently Asked Questions">
            {/* Subtle Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-solid/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary-solid/5 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>
            </div>
            
            <div className="relative mx-auto max-w-7xl">
                {/* Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}>
                    
                    <motion.div 
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary-bg border border-primary-border mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}>
                        <FaPalette className="text-primary-solid w-4 h-4" />
                        <span className="text-primary-text-contrast text-sm font-medium">FAQ</span>
                    </motion.div>
                    
                    <h2 className="text-canvas-text-contrast text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Questions about
                        <span className="block bg-gradient-to-r from-primary-solid to-primary-text bg-clip-text text-transparent">
                            DesignRift
                        </span>
                    </h2>
                    
                    <p className="text-canvas-text text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        Get answers to common questions about creating themes, color systems, and design workflows with DesignRift.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4" role="list">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <FAQItemComponent
                                item={item}
                                isOpen={openItems.has(item.id)}
                                onToggle={toggleItem}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}