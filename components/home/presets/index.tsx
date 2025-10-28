"use client";

import { type ColorCategory } from '@/lib/theme-generator';
import { themePresets } from './theme-presets'
import { useTheme } from 'next-themes';
import radixColors from '@/public/radix-colors.json';
import { useThemeGenerator } from '@/components/theme-generator';
import { motion, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useThemeCustom } from '@/components/theme-generator/theme-provider-custom';

const colorCache = new Map<string, string>();
const getColorValue = (color: string, resolvedTheme: string, shade: string = '900'): string => {
  const cacheKey = `${color}-${resolvedTheme}-${shade}`;

  if (colorCache.has(cacheKey)) {
    return colorCache.get(cacheKey) as string;
  }

  const colorKey = resolvedTheme === 'dark' ? `${color}Dark` : color;
  const colorData = radixColors[colorKey];
  const value = colorData && colorData[shade] ? colorData[shade].value : '#8f8f8f';

  colorCache.set(cacheKey, value);

  return value;
};

export function Presets() {
  const { resolvedTheme } = useTheme();
  const { handleColorSelect } = useThemeCustom();

  const handlePresetClick = (colors: typeof themePresets[0]['colors']) => {
    Object.entries(colors).forEach(([category, color]) => {
      handleColorSelect(category as ColorCategory, color);
    });
  };

  const PresetMarqueeRow = ({
    items,
    reverse = false,
    resolvedTheme,
    handlePresetClick,
  }: {
    items: typeof themePresets;
    reverse?: boolean;
    resolvedTheme: string | undefined;
    handlePresetClick: (colors: typeof themePresets[0]['colors']) => void;
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
        const cardWidth = 250;
        const screenWidth = window.innerWidth;
        const cardsNeeded = Math.ceil(screenWidth / cardWidth) + 3;
        const loopCount = Math.ceil(cardsNeeded / items.length);
        let duplicateCountTemp = loopCount % 2 === 0 ? loopCount : loopCount + 1;
        duplicateCountTemp = Math.max(2, duplicateCountTemp);
        setDuplicateCount(duplicateCountTemp);

        const totalWidth = cardWidth * items.length * duplicateCountTemp;
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
          {repeatedItems.map((preset, i) => (
            <div
              key={i}
              onClick={() => handlePresetClick(preset.colors)}
              className="flex-shrink-0 flex gap-3 py-2 px-4 rounded-md items-center group cursor-pointer hover:brightness-90 transition-all"
              style={{
                backgroundColor: getColorValue(preset.colors.primary, resolvedTheme || 'light', '400'),
              }}
            >
              <h3
                className="font-medium group-hover:text-primary-text transition-colors"
                style={{
                  color: getColorValue(preset.colors.canvas, resolvedTheme || 'light', '900'),
                }}
              >
                {preset.name}
              </h3>
              <div className="flex gap-2">
                {['canvas', 'primary', 'secondary'].map((colorKey, idx) => (
                  <div
                    key={idx}
                    className="h-4 w-4 border rounded"
                    style={{
                      backgroundColor: getColorValue(
                        preset.colors[colorKey as keyof typeof preset.colors],
                        resolvedTheme || 'light',
                        '900'
                      ),
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  const third = Math.ceil(themePresets.length / 3);
  const row1 = themePresets.slice(0, third);
  const row2 = themePresets.slice(third, 2 * third);
  const row3 = themePresets.slice(2 * third);

  return (
    <section id="presets" className="relative min-h-[20rem] w-full py-10">
      <div className="container mx-auto px-4 md:px-6 w-[85vw]">
        <div className="mb-6 flex flex-col items-center justify-center space-y-3 text-center">
          <div className="inline-flex">
            <span className="bg-gradient-to-r from-primary-bg to-primary-bg-hover text-canvas-text-contrast px-4 py-2 rounded-full text-xs font-medium inline-flex items-center gap-2">
              <span className="text-alert-solid">✦</span>
              Theme Presets
            </span>
          </div>
          <h2 className="text-canvas-text-contrast max-w-2xl text-xl font-extrabold tracking-tight md:text-3xl">
            Elevate Your Design Instantly
          </h2>
          <p className="text-canvas-text font-medium max-w-lg text-sm md:text-base">
            Apply theme presets with a single click. See how each option enhances the look.
          </p>
        </div>

        <div className="flex flex-col gap-y-0 pt-6">
          <PresetMarqueeRow
            items={row1}
            reverse={false}
            resolvedTheme={resolvedTheme}
            handlePresetClick={handlePresetClick}
          />
          <PresetMarqueeRow
            items={row2}
            reverse={true}
            resolvedTheme={resolvedTheme}
            handlePresetClick={handlePresetClick}
          />
          <PresetMarqueeRow
            items={row3}
            reverse={false}
            resolvedTheme={resolvedTheme}
            handlePresetClick={handlePresetClick}
          />
        </div>
      </div>
    </section>
  );
}