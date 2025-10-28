"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Testimonials Data
const testimonials = [
    {
        image: "https://pbs.twimg.com/profile_images/1766632098461253634/2t4wT1TZ_400x400.png",
        name: "YiMing",
        tag: "yiming_dev",
        description: `Using v0, designrift, and ChatGPT for graphics. Built a landing page in around 2 hours. It's amazingly easy nowadays.`,
    },
    {
        image: "https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg",
        name: "Guillermo Rauch",
        tag: "guillermo_r",
        description: `If you want to learn full stack Next.js and how to build a product people love, look no further than designrift. It's an open-source theme builder.`,
    },
    {
        image: "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
        name: "shadcn",
        tag: "shad_dev",
        description: `Finally, a custom theme from designrift.`,
    },
    {
        image: "https://pbs.twimg.com/profile_images/1849574174785732608/ltlLcyaT_400x400.jpg",
        name: "Kevin Kern",
        tag: "kevin_k",
        description: `designrift is awesome. Generates custom shadcn themes instantly.`,
    },
    {
        image: "https://pbs.twimg.com/profile_images/1756766826736893952/6Gvg6jha_400x400.jpg",
        name: "OrcDev",
        tag: "orc_dev",
        description: `Transform your Shadcn app with one click! Great concept with designrift.`,
    },
    {
        image: "https://pbs.twimg.com/profile_images/1934209156816216064/NZns8Qth_400x400.jpg",
        name: "Ciara Wearen",
        tag: "ciara_w",
        description: `Create a Custom Theme: Makes your app look more intentional.

Build color palette, typography, and layout preview with designrift.com

Grab the CSS and drop into your project for cohesive design.`,
    },
    {
        image: "https://pbs.twimg.com/profile_images/1937802227672109056/JHRKKC9G_400x400.jpg",
        name: "Tanpreet Jolly 🌂",
        tag: "tanpreet_j",
        description:
            "I just tried designrift and it's perfect. This is exactly what I needed, great work!",
    },
    {
        image: "https://pbs.twimg.com/profile_images/1677359164580929544/jngFF04Y_400x400.jpg",
        name: "Code With Antonio",
        tag: "antonio_c",
        description: "There's an entire chapter dedicated to designrift!! Such a cool project.",
    },
    {
        image: "https://pbs.twimg.com/profile_images/1942939901994893312/epjxuhCr_400x400.jpg",
        name: "Emir",
        tag: "emir_dev",
        description: "Started using designrift for client projects as well. It's a real game changer.",
    },
    {
        image: "https://pbs.twimg.com/profile_images/1903255064149442560/TYvinGL9_400x400.jpg",
        name: "Matt Silverlock 🐀",
        tag: "matt_s",
        description: `Used this shadcn theme editor to make it less plain: designrift.com`,
    },
];

const MarqueeRow = ({
    items,
    reverse = false,
}: {
    items: typeof testimonials;
    reverse?: boolean;
}) => {
    const shouldReduceMotion = useReducedMotion();
    const x = useRef(useMotionValue(0));
    const speed = shouldReduceMotion ? 0 : 20;
    const containerRef = useRef<HTMLDivElement>(null);
    const animationFrame = useRef(0);
    const lastTime = useRef(performance.now());
    const isPaused = useRef(false);
    const [duplicateCount, setDuplicateCount] = useState(2);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined" && containerRef.current) {
            const cardWidth = 400;
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
    }, [containerWidth, reverse, shouldReduceMotion, speed]);

    const pause = () => (isPaused.current = true);
    const resume = () => {
        lastTime.current = performance.now();
        isPaused.current = false;
    };

    const repeatedItems = Array(duplicateCount)
        .fill(null)
        .flatMap(() => items);

    return (
        <div
            className="relative w-full overflow-hidden py-2"
            style={{
                maskImage:
                    "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
        >
            <motion.div
                ref={containerRef}
                style={{ x: x.current }}
                onMouseEnter={pause}
                onMouseLeave={resume}
                className={`flex w-max items-stretch gap-4 ${reverse ? "flex-row-reverse" : ""}`}
            >
                {repeatedItems.map((testimonial, i) => (
                    <Card
                        key={i}
                        className="border-canvas-bg-hover/40 from-canvas-bg-subtle to-canvas-bg-subtle/50 hover:border-primary-bg/20 group focus-within:ring-primary-solid max-h-[240px] w-full max-w-[420px] min-w-[260px] overflow-hidden border bg-gradient-to-b backdrop-blur transition-all focus-within:ring-2 focus-within:ring-offset-2 hover:shadow-lg sm:max-w-[400px] sm:min-w-[300px]"
                    >
                        <CardContent className="flex h-full w-[300px] flex-col gap-4 p-4 md:w-[400px]">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={testimonial.image} alt={testimonial.name} loading="lazy" />
                                    <AvatarFallback className="bg-primary-bg text-primary-text text-lg font-semibold">
                                        {testimonial.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="text-canvas-text-contrast text-xl font-semibold">{testimonial.name}</h3>
                                    <p className="text-canvas-text text-sm">@{testimonial.tag}</p>
                                </div>
                            </div>
                            <p className="text-canvas-text-contrast line-clamp-4 overflow-hidden text-ellipsis whitespace-pre-wrap md:line-clamp-5">
                                {testimonial.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>
        </div>
    );
};

export function Testimonials() {
    return (
        <section id="testimonials" className="relative min-h-screen w-full py-20">
            <div className="container mx-auto px-4 w-full md:w-[85vw]">
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
                            Testimonials
                        </span>
                    </div>
                    <h2 className="text-canvas-text-contrast max-w-[600px] text-3xl font-extrabold tracking-tight md:text-4xl">
                        Loved by developers worldwide
                    </h2>
                    <p className="text-canvas-text font-medium max-w-[500px] md:text-lg">
                        See what the community is saying about designrift
                    </p>
                </motion.div>

                {/* 🚀 Two Marquee Rows */}
                <div className="flex flex-col gap-y-0">
                    <MarqueeRow items={testimonials.slice(0, 5)} reverse={false} />
                    <MarqueeRow items={testimonials.slice(5, 10)} reverse={true} />
                </div>
            </div>
        </section>
    );
}