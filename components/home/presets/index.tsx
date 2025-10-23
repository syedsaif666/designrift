"use client";

import { motion, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { type SelectedColors, type ColorCategory } from '@/lib/theme-generator';

// Preset themes, each a combination of one color from each category
const presets = [
    {
        name: "Modern Minimal",
        colors: {
            canvas: "slate",
            primary: "gray",
            success: "sage",
            warning: "olive",
            alert: "sand",
            info: "mauve",
        },
    },
    {
        name: "Twitter",
        colors: {
            canvas: "slate",
            primary: "blue",
            success: "green",
            warning: "amber",
            alert: "red",
            info: "sky",
        },
    },
    {
        name: "Amethyst Haze",
        colors: {
            canvas: "mauve",
            primary: "violet",
            success: "mint",
            warning: "yellow",
            alert: "plum",
            info: "indigo",
        },
    },
    {
        name: "Catppuccin",
        colors: {
            canvas: "mauve",
            primary: "pink",
            success: "teal",
            warning: "orange",
            alert: "red",
            info: "blue",
        },
    },
    {
        name: "Kodama Grove",
        colors: {
            canvas: "sage",
            primary: "green",
            success: "grass",
            warning: "brown",
            alert: "crimson",
            info: "teal",
        },
    },
    {
        name: "Quantum Rose",
        colors: {
            canvas: "gray",
            primary: "pink",
            success: "lime",
            warning: "gold",
            alert: "rose",
            info: "violet",
        },
    },
    {
        name: "Elegant Luxury",
        colors: {
            canvas: "sand",
            primary: "crimson",
            success: "jade",
            warning: "bronze",
            alert: "ruby",
            info: "purple",
        },
    },
    {
        name: "Neo Brut",
        colors: {
            canvas: "slate",
            primary: "pink",
            success: "cyan",
            warning: "yellow",
            alert: "tomato",
            info: "blue",
        },
    },
    {
        name: "Mocha Mousse",
        colors: {
            canvas: "olive",
            primary: "brown",
            success: "green",
            warning: "amber",
            alert: "orange",
            info: "teal",
        },
    },
    {
        name: "Notebook",
        colors: {
            canvas: "gray",
            primary: "indigo",
            success: "mint",
            warning: "yellow",
            alert: "red",
            info: "sky",
        },
    },
    {
        name: "Graphite",
        colors: {
            canvas: "gray",
            primary: "slate",
            success: "sage",
            warning: "olive",
            alert: "mauve",
            info: "sand",
        },
    },
    {
        name: "Cosmic Night",
        colors: {
            canvas: "mauve",
            primary: "purple",
            success: "teal",
            warning: "gold",
            alert: "plum",
            info: "indigo",
        },
    },
    {
        name: "Nature",
        colors: {
            canvas: "sage",
            primary: "green",
            success: "grass",
            warning: "brown",
            alert: "crimson",
            info: "jade",
        },
    },
    {
        name: "Amber Minimal",
        colors: {
            canvas: "sand",
            primary: "amber",
            success: "lime",
            warning: "orange",
            alert: "red",
            info: "yellow",
        },
    },
    {
        name: "Solar Dusk",
        colors: {
            canvas: "olive",
            primary: "orange",
            success: "yellow",
            warning: "amber",
            alert: "tomato",
            info: "blue",
        },
    },
    {
        name: "Pastel",
        colors: {
            canvas: "mauve",
            primary: "violet",
            success: "mint",
            warning: "yellow",
            alert: "pink",
            info: "sky",
        },
    },
    {
        name: "Bubblegum",
        colors: {
            canvas: "gray",
            primary: "pink",
            success: "lime",
            warning: "orange",
            alert: "red",
            info: "cyan",
        },
    },
    {
        name: "Doom 64",
        colors: {
            canvas: "slate",
            primary: "red",
            success: "green",
            warning: "brown",
            alert: "crimson",
            info: "blue",
        },
    },
    {
        name: "Perpetuity",
        colors: {
            canvas: "sage",
            primary: "teal",
            success: "cyan",
            warning: "amber",
            alert: "rose",
            info: "sky",
        },
    },
    {
        name: "Tangerine",
        colors: {
            canvas: "sand",
            primary: "orange",
            success: "lime",
            warning: "yellow",
            alert: "tomato",
            info: "indigo",
        },
    },
    {
        name: "Bold Tech",
        colors: {
            canvas: "gray",
            primary: "purple",
            success: "green",
            warning: "gold",
            alert: "plum",
            info: "blue",
        },
    },
    {
        name: "Supabase",
        colors: {
            canvas: "mauve",
            primary: "green",
            success: "teal",
            warning: "orange",
            alert: "red",
            info: "cyan",
        },
    },
    {
        name: "Claymorphism",
        colors: {
            canvas: "olive",
            primary: "blue",
            success: "mint",
            warning: "amber",
            alert: "crimson",
            info: "indigo",
        },
    },
    {
        name: "Clean Slate",
        colors: {
            canvas: "slate",
            primary: "gray",
            success: "sage",
            warning: "yellow",
            alert: "red",
            info: "sky",
        },
    },
];

interface MarqueeRowProps {
  items: typeof presets;
  reverse?: boolean;
  onColorSelect: (category: ColorCategory, color: string) => void;
}

const MarqueeRow = ({ items, reverse = false, onColorSelect }: MarqueeRowProps) => {
    const shouldReduceMotion = useReducedMotion();
    const x = useRef(useMotionValue(0));
    const speed = shouldReduceMotion ? 0 : 20;
    const containerRef = useRef(null);
    const animationFrame = useRef(0);
    const lastTime = useRef(performance.now());
    const isPaused = useRef(false);
    const [duplicateCount, setDuplicateCount] = useState(2);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined" && containerRef.current) {
            const cardWidth = 300;
            const screenWidth = window.innerWidth;
            const cardsNeeded = Math.ceil(screenWidth / cardWidth) + 3;
            const loopCount = Math.ceil(cardsNeeded / items.length);
            setDuplicateCount(loopCount);

            const totalWidth = cardWidth * items.length * loopCount;
            setContainerWidth(totalWidth);
            x.current.set(reverse ? -totalWidth / 2 : 0);
        }
    }, [items.length, reverse]);

    useEffect(() => {
        if (shouldReduceMotion) return;

        const animate = (time: number) => {
            const delta = time - lastTime.current;
            lastTime.current = time;

            if (!isPaused.current && containerRef.current) {
                const direction = reverse ? 1 : -1;
                const distance = (speed * delta * direction) / 1000;
                const currentX = x.current.get();

                let newX = currentX + distance;

                if (reverse && newX >= 0) {
                    newX = -containerWidth / 2;
                } else if (!reverse && Math.abs(newX) >= containerWidth / 2) {
                    newX = 0;
                }

                x.current.set(newX);
            }

            animationFrame.current = requestAnimationFrame(animate);
        };

        animationFrame.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame.current);
    }, [containerWidth, reverse, shouldReduceMotion]);

    const pause = () => (isPaused.current = true);
    const resume = () => {
        lastTime.current = performance.now();
        isPaused.current = false;
    };

    const handlePresetClick = (colors: typeof presets[0]['colors']) => {
        Object.entries(colors).forEach(([category, color]) => {
            onColorSelect(category as ColorCategory, color);
        });
    };

    const repeatedItems = Array(duplicateCount)
        .fill(null)
        .flatMap(() => items);

    return (
        <div
            className="relative w-full overflow-hidden py-2"
        >
            <motion.div
                ref={containerRef}
                style={{ x: x.current }}
                onMouseEnter={pause}
                onMouseLeave={resume}
                className={`flex w-max items-stretch gap-4 ${reverse ? "flex-row-reverse" : ""}`}
            >
                {repeatedItems.map((preset, i) => (
                    <div
                        key={i}
                        onClick={() => handlePresetClick(preset.colors)}
                        className="flex bg-gradient-to-br from-canvas-bg to-canvas-bg-subtle gap-3 py-2 px-4 rounded-md items-center group cursor-pointer hover:bg-primary-bg transition-colors"
                    >
                        <h3 className="text-canvas-text-contrast font-medium group-hover:text-primary-text transition-colors">
                            {preset.name}
                        </h3>
                        <div className="flex gap-2">
                            {Object.values(preset.colors).map((color, idx) => (
                                <div
                                    key={idx}
                                    className={`h-4 w-4 border rounded bg-${color}-9`}
                                    style={{ backgroundColor: `var(--${color}-9)` }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

interface PresetsProps {
  selectedColors: SelectedColors;
  onColorSelect: (category: ColorCategory, color: string) => void;
}

export function Presets({ selectedColors, onColorSelect }: PresetsProps) {
    return (
        <section id="presets" className="relative min-h-80 w-full py-20">
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
                            <span className="text-alert-solid">✦</span>
                            Theme Presets
                        </span>
                    </div>
                    <h2 className="text-canvas-text-contrast max-w-[600px] text-3xl font-extrabold tracking-tight md:text-4xl">
                        Elevate Your Design Instantly
                    </h2>
                    <p className="text-canvas-text font-medium max-w-[500px] md:text-lg">
                        Apply theme presets with a single click. See how each option enhances the look.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-y-0">
                    <MarqueeRow items={presets.slice(0, 8)} reverse={false} onColorSelect={onColorSelect} />
                    <MarqueeRow items={presets.slice(8, 16)} reverse={true} onColorSelect={onColorSelect} />
                    <MarqueeRow items={presets.slice(16, 24)} reverse={false} onColorSelect={onColorSelect} />
                </div>
            </div>
        </section>
    );
}