'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Logo from '@/components/logo/Logo';
import { Button } from '@/components/ui/button';
import { FaBars, FaTimes, FaStar } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const NAV_ITEMS = [];

function scrollToSection(id: string) {
    const el = document.querySelector(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleMobile = () => setMobileOpen((open) => !open);
    const { resolvedTheme } = useTheme();

    return (
        <header
            className='bg-canvas-bg-subtle border-canvas-bg-hover sticky top-0 z-50 w-full border-b shadow-sm h-16'
            role='banner'>
            <div className='mx-auto max-w-screen-2xl px-4 xl:px-0'>
                <div className='flex h-16 items-center justify-between'>
                    {/* Logo that switches with theme */}
                    <Link href='/'>
                        <Logo variant={resolvedTheme === 'dark' ? 'dark' : 'light'} />
                    </Link>

                    {/* Desktop nav - hidden on small screens, visible on md and up */}
                    <nav aria-label='Primary navigation' className='hidden items-center space-x-4 md:flex'>
                        <div className='flex items-center space-x-4'>
                            <a href="https://github.com/jnsahaj/tweakcn" className='flex items-center text-gray-400 hover:text-white'>
                                <FaStar className='mr-1 h-5 w-5' />
                                7.6k
                            </a>
                            <a href="https://discord.gg/Phs4u2NM3n" className='text-gray-400 hover:text-white text-xl'>
                                👻
                            </a>
                            <a href="https://x.com/iamsahaj_xyz" className='text-gray-400 hover:text-white'>
                                <SiX className='h-5 w-5' />
                            </a>
                            <Button
                                variant='ghost'
                                aria-label='Sign In'
                                name='Sign In'>
                                Sign In
                            </Button>
                            <Button
                                color='primary'
                                size='default'
                                variant='solid'
                                aria-label='Sign Up'
                                name='Sign Up'>
                                Sign Up
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile menu button - visible on small screens, hidden on md and up */}
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
                                <FaTimes className='text-white h-5 w-5' />
                            ) : (
                                <FaBars className='text-white h-5 w-5' />
                            )
                        }
                    />
                </div>
            </div>

            {/* Mobile overlay menu - only rendered when mobileOpen is true */}
            {mobileOpen && (
                <nav
                    id='mobile-menu'
                    aria-label='Mobile navigation'
                    role='dialog'
                    aria-modal='true'
                    className='bg-black/95 fixed inset-0 top-16 z-50 backdrop-blur-sm md:hidden'>
                    <ul className='border-gray-800 space-y-3 border-t p-4'>
                        <li>
                            <div className='flex flex-col gap-3'>
                                <Button
                                    variant='ghost'
                                    aria-label='Sign In'
                                    name='Sign In'>
                                    Sign In
                                </Button>
                                <Button
                                    color='primary'
                                    size='default'
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