'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FAQItemComponent } from './faq-item'
import { faqData, categories } from '@/lib/utils/faq';




export default function FAQ() {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set([1]));
    const [activeCategory, setActiveCategory] = useState<string>('all');

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

    const filteredFAQs = activeCategory === 'all'
        ? faqData
        : faqData.filter(item => item.category === activeCategory);

    return (
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-6">
                        Frequently Asked{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                    <p className="text-xl max-w-2xl mx-auto">
                        Find answers to common questions about DesignRift and how it can transform your development workflow.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <Button
                            type="button"
                            key={category.id}
                            variant={activeCategory === category.id ? 'solid' : 'surface'}
                            color={activeCategory === category.id ? 'primary' : 'neutral'}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                                `}
                        >
                            {category.icon}
                            {category.label}
                        </Button>
                    ))}
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {filteredFAQs.map((item) => (
                        <FAQItemComponent
                            key={item.id}
                            item={item}
                            isOpen={openItems.has(item.id)}
                            onToggle={toggleItem}
                        />
                    ))}
                </div>

                {/* Contact Support */}
                <div className="text-center mt-12 p-8 bg-canvas-bg rounded-2xl border border-gray-500">
                    <h3 className="text-xl font-bold text-primary-text mb-2">
                        Still have questions?
                    </h3>
                    <p className=" mb-4">
                        Our support team is here to help you get the most out of DesignRift.
                    </p>
                    <a
                        href="mailto:support@designrift.com"
                        className="inline-flex items-center text-primary-solid hover:scale-105 font-medium transition-transform"
                    >
                        Contact Support →
                    </a>
                </div>
            </div>
        </section>
    );
}