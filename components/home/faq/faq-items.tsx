import { ChevronDown } from 'lucide-react';

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
    icon: React.ReactNode;
    category: string;
}

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

export function FAQItemComponent({ item, isOpen, onToggle }: FAQItemComponentProps) {
    return (
        <div className="group">
            <div
                className='relative overflow-hidden rounded-lg bg-canvas-bg transition-all duration-300'

            >
                {/* Gradient overlay for active state */}
                {isOpen && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-bg/5 via-transparent to-primary-bg/10 pointer-events-none" />
                )}

                {/* Question Button */}
                <div
                    onClick={() => onToggle(item.id)}
                    className="relative flex w-full items-center justify-between p-6 text-left cursor-pointer group-hover:bg-canvas-bg-active/30 transition-all duration-300"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    role="button"
                >
                    <div className="flex items-center gap-4 flex-1">
                        {/* Icon with category badge */}
                        <div className="flex-shrink-0">
                            <div className='p-3 rounded-xl bg-gradient-to-br from-primary-bg to-primary-bg-hover border border-primary-bg-active group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 '>
                                {item.icon} 
                            </div>
                        </div>

                        <div className="flex-1">
                            {/* Category badge */}
                            <div className="mb-2">
                                <span className='inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 bg-primary-bg-hover text-primary-text group-hover:bg-primary-bg/10'>
                                    {item.category}
                                </span>
                            </div>

                            {/* Question */}
                            <h3 className="text-canvas-text-contrast text-lg font-semibold leading-tight pr-4">
                                {item.question}
                            </h3>
                        </div>
                    </div>

                    {/* Chevron */}
                    <div className="flex-shrink-0 ml-4">
                        <div className={`
                            p-2 rounded-lg transition-all duration-300
                            ${isOpen
                                ? 'bg-primary-bg/20 text-primary-text-contrast'
                                : 'bg-canvas-bg-active text-canvas-text group-hover:bg-primary-bg/10'
                            }
                        `}>
                            <ChevronDown
                                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                                    }`}
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>

                {/* Answer Content */}
                <div
                    id={`faq-answer-${item.id}`}
                    className={`
                        relative overflow-hidden transition-all duration-300 ease-in-out
                        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                    role="region"
                    aria-labelledby={`${item.question}`}
                >
                    <div className="px-6 pb-6">
                        <div className="h-px bg-gradient-to-r from-canvas-line via-canvas-border-hover to-canvas-line mb-6" />

                        <div className="space-y-4">
                            <div
                                className="text-canvas-text-contrast leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: formatAnswer(item.answer) }}
                            />

                            {/* Special handling for the DesignRift link */}
                            {item.id === 5 && (
                                <div className="mt-4 p-4 bg-canvas-bg-active/50 rounded-xl border border-canvas-line">
                                    <p className="text-canvas-text text-sm">
                                        🎨 Visit{' '}
                                        <a
                                            href="https://designrift.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary-text-contrast font-medium hover:underline transition-colors duration-200"
                                        >
                                            Designrift
                                        </a>{' '}
                                        to get started with theme customization.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}