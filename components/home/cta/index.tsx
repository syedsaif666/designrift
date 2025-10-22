import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaArrowRight, FaGithub, FaStar } from 'react-icons/fa';
import { formatCompactNumber } from '@/lib/utils/format';
import { useGithubStars } from '@/hooks/use-github-stars';

const CTA = () => {
    const { stargazersCount } = useGithubStars("syedsaif666", "designrift");

    return (
        <section className="min-h-80 w-full flex items-center justify-center bg-canvas-bg-active/60 backdrop-blur-md px-4 py-20">
            <div className="text-center space-y-6">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Ready to Elevate Your Components?
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                    Start customizing your design today and give your application a distinctive, polished look.
                </p>
                <div className="flex justify-center flex-col sm:flex-row gap-6">
                    <Link href='/editor'>
                        <Button
                            variant='solid'
                            size='lg'
                            color='primary'
                            trailingIcon={<FaArrowRight className="w-4 h-4" />}
                        >
                            Create Your Theme
                        </Button>
                    </Link>
                    <Link href='https://github.com/syedsaif666/designrift'>
                        <Button
                            variant='surface'
                            size='lg'
                            color='primary'
                            leadingIcon={<FaGithub className="w-4 h-4 dark:text-[#FDFDFD]" />}
                        >
                            View on GitHub{' '}
                            <span className='ml-2 bg-primary-bg-active px-3 py-0.5 rounded-full text-sm flex items-center gap-2'>
                                {stargazersCount > 0 && formatCompactNumber(stargazersCount)}{' '}
                                <span><FaStar className='text-warning-solid' /></span>
                            </span>
                        </Button>
                    </Link>
                </div>
                <p className="text-sm">Completely free. No account needed. 100% open source.</p>
            </div>
        </section>
    );
};

export default CTA;
