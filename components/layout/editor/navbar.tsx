'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/logo/Logo';
import { Button } from '@/components/ui/button';
import { FaBars, FaTimes, FaGithub, FaReddit, FaStar } from 'react-icons/fa';
import { useGithubStars } from '@/hooks/use-github-stars';
import { formatCompactNumber } from '@/lib/utils/format';

export default function Navbar() {
    const { stargazersCount } = useGithubStars("syedsaif666", "designrift");
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleMobile = () => setMobileOpen((open) => !open);

    return (
        <header
            className='bg-canvas-bg-subtle border-canvas-bg-hover sticky top-0 w-full border-b h-16 z-50'
            role='banner'>
            <div className='px-2 md:px-4'>
                <div className='flex h-16 items-center justify-between'>
                    <Link href='/'>
                        <Logo />
                    </Link>

                    {/* Desktop nav */}
                    <nav aria-label='Primary navigation' className='items-center space-x-3 md:space-x-4 flex'>
                        <Link
                            href='https://github.com/syedsaif666/designrift'
                            className='flex justify-center items-center border border-canvas-border px-3 h-9 rounded-md hover:bg-primary-bg-hover transition-colors hover:border-primary-border-hover text-base'
                        >
                            <FaGithub className="mr-3 w-5 h-5 dark:text-[#FDFDFD]" />
                            {stargazersCount > 0 && formatCompactNumber(stargazersCount)}
                            <span><FaStar className='ml-1 text-warning-solid w-[14px]' /></span>
                        </Link>
                        <div className='h-8 flex items-center space-x-3 md:space-x-4 border-r border-canvas-border pr-3 md:pr-4'>
                            <Link href="https://www.reddit.com/r/DukeOfAllTrades/" className='hover:text-canvas-text text-canvas-text-contrast transition-all'>
                                <FaReddit className='mr-1 h-5 md:h-6 w-5 md:w-6' />
                            </Link>
                        </div>
                        <div className='md:flex items-center space-x-4 hidden'>
                            <Button
                                color='primary'
                                size='sm'
                                variant='ghost'
                                aria-label='Sign In'
                                name='Sign In'>
                                Sign In
                            </Button>
                            <Button
                                color='primary'
                                size='sm'
                                variant='solid'
                                aria-label='Sign Up'
                                name='Sign Up'>
                                Sign Up
                            </Button>
                        </div>
                        {/* Mobile menu button */}
                        <Button
                            onClick={toggleMobile}
                            aria-label='Toggle menu'
                            aria-controls='mobile-menu'
                            aria-expanded={mobileOpen}
                            className='block md:hidden'
                            color='neutral'
                            variant='ghost'
                            iconOnly
                            leadingIcon={
                                mobileOpen ? (
                                    <FaTimes className='hover:text-canvas-text text-canvas-text-contrast h-4 w-4' />
                                ) : (
                                    <FaBars className='hover:text-canvas-text text-canvas-text-contrast h-4 w-4' />
                                )
                            }
                        />
                    </nav>
                </div>
            </div>

            {/* Mobile overlay menu */}
            {mobileOpen && (
                <nav
                    id='mobile-menu'
                    aria-label='Mobile navigation'
                    role='dialog'
                    aria-modal='true'
                    className='fixed inset-0 top-16 z-50 backdrop-blur-md md:hidden block'>
                    <ul className='space-y-3 border-t p-2 md:p-4'>
                        <li>
                            <div className='flex flex-col gap-2 md:gap-3'>
                                <Button
                                    color='primary'
                                    size='sm'
                                    variant='ghost'
                                    fullWidth
                                    name='Sign In'
                                >
                                    Sign In
                                </Button>
                                <Button
                                    color='primary'
                                    size='sm'
                                    variant='solid'
                                    fullWidth
                                    name='Sign Up'>
                                    Sign Up
                                </Button>
                            </div>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}