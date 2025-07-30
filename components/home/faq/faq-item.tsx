import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/lib/utils/faq';

interface FAQItemComponentProps {
    item: FAQItem;
    isOpen: boolean;
    onToggle: (id: number) => void;
}

export function FAQItemComponent({ item, isOpen, onToggle }: FAQItemComponentProps) {
    return (
        <div className={`w-full md:min-w-[94vw] lg:min-w-5xl border border-gray-700 rounded-xl overflow-hidden ${isOpen ? 'bg-canvas-base' : 'bg-canvas-bg'} hover:border-blue-700 hover:${!isOpen ? 'scale-105' : ''} transition-colors duration-300`}>
            <button
                type="button"
                onClick={() => onToggle(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between transition-transform duration-200"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
            >
                <span className="text-lg font-semibold pr-4">
                    {item.question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                />
            </button>

            {isOpen && (
                <div className="px-6 pb-5 border-t border-gray-700">
                    <p className="text-base text-primary-text leading-relaxed pt-4">
                        {item.answer}
                    </p>
                </div>
            )}
        </div>
    );
}