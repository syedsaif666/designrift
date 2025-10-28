import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaArrowRight, FaGithub, FaStar } from 'react-icons/fa';
import { formatCompactNumber } from '@/lib/utils/format';
import { useGithubStars } from '@/hooks/use-github-stars';
import AbstractBackground from './abstract-background';

const CTA = () => {
  const { stargazersCount } = useGithubStars('syedsaif666', 'designrift');

  return (
    <section className="relative w-full flex items-center justify-center bg-primary-bg-active/40 backdrop-blur-md border-y border-canvas-border py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden min-h-[60vh]">
      {/* Background */}
      <AbstractBackground />

      <div className="text-center space-y-6 sm:space-y-8 relative z-10 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
          Ready to Elevate Your Components?
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Start customizing your design today and give your application a distinctive, polished look.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
          <Link href="/editor" className="w-full sm:w-auto">
            <Button
              variant="solid"
              size="lg"
              color="primary"
              className="w-full sm:w-auto"
              trailingIcon={<FaArrowRight className="w-4 h-4" />}
            >
              Create Your Theme
            </Button>
          </Link>

          <Link href="https://github.com/syedsaif666/designrift" className="w-full sm:w-auto">
            <Button
              variant="surface"
              size="lg"
              color="primary"
              className="w-full sm:w-auto"
              leadingIcon={<FaGithub className="w-4 h-4 dark:text-[#FDFDFD]" />}
            >
              View on GitHub{' '}
              <span className="ml-2 bg-primary-bg-active px-3 py-0.5 rounded-full text-sm flex items-center gap-2">
                {stargazersCount > 0 && formatCompactNumber(stargazersCount)}{' '}
                <FaStar className="text-warning-solid" />
              </span>
            </Button>
          </Link>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground">
          Completely free. No account needed. 100% open source.
        </p>
      </div>
    </section>
  );
};

export default CTA;
