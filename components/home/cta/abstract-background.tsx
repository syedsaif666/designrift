import React from 'react';

const AbstractBackground = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* D-shaped curves */}
            <svg className="absolute top-10 right-10 w-64 h-64 opacity-10 dark:opacity-5" viewBox="0 0 200 200">
                <path d="M 50 20 Q 150 20 150 100 Q 150 180 50 180 L 50 20" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary-text" />
                <path d="M 60 40 Q 130 40 130 100 Q 130 160 60 160 L 60 40" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-text-contrast" />
            </svg>

            {/* Right-angle triangles */}
            <svg className="absolute bottom-20 left-10 w-48 h-48 opacity-10 dark:opacity-5" viewBox="0 0 150 150">
                <path d="M 20 130 L 20 20 L 130 130 Z" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary-text" />
                <path d="M 40 110 L 40 40 L 110 110 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-canvas-text" />
            </svg>

            {/* Curvy flowing lines */}
            <svg className="absolute top-1/4 left-1/4 w-96 h-96 opacity-10 dark:opacity-5" viewBox="0 0 300 300">
                <path d="M 10 150 Q 75 50, 150 150 T 290 150" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-text-contrast" />
                <path d="M 10 180 Q 75 80, 150 180 T 290 180" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-text/80" />
                <path d="M 10 120 Q 75 220, 150 120 T 290 120" fill="none" stroke="currentColor" strokeWidth="2" className="text-canvas-text" />
            </svg>

            {/* Additional D shapes */}
            <svg className="absolute bottom-10 right-1/3 w-40 h-40 opacity-10 dark:opacity-5 rotate-45" viewBox="0 0 150 150">
                <path d="M 40 20 Q 120 20 120 75 Q 120 130 40 130 L 40 20" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-text-contrast" />
            </svg>

            {/* Scattered triangles */}
            <svg className="absolute top-20 left-1/2 w-32 h-32 opacity-10 dark:opacity-5 -rotate-12" viewBox="0 0 100 100">
                <path d="M 20 80 L 20 20 L 80 80 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-canvas-text" />
            </svg>

            {/* More curvy lines */}
            <svg className="absolute bottom-1/3 right-1/4 w-64 h-64 opacity-10 dark:opacity-5" viewBox="0 0 200 200">
                <path d="M 10 100 Q 50 30, 100 100 Q 150 170, 190 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-text/80" />
                <path d="M 20 100 Q 60 40, 110 100 Q 160 160, 180 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-text-contrast" />
            </svg>

            {/* Additional geometric elements */}
            <svg className="absolute top-1/2 right-10 w-24 h-24 opacity-10 dark:opacity-5 rotate-90" viewBox="0 0 100 100">
                <path d="M 30 80 L 30 30 L 80 80 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-text" />
            </svg>
        </div>
    );
};

export default AbstractBackground;