'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Logo from '@/components/logo/Logo';
import { Button } from '@/components/ui/button';
import { FaBars, FaTimes, FaChevronRight, FaGithub } from 'react-icons/fa';
import { formatCompactNumber } from '@/lib/utils/format';
import { useGithubStars } from '@/hooks/use-github-stars';
import { HeaderThemeSwitcher } from './header-theme-switcher';

const NAV_ITEMS = [
    { href: '/feature', label: 'Features' },
    { href: '/blog', label: 'Blog' },
];

function scrollToSection(id: string) {
    const el = document.querySelector(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const toggleMobile = () => setMobileOpen((open) => !open);
    const { resolvedTheme } = useTheme();
    const { stargazersCount } = useGithubStars("syedsaif666", "designrift");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 5);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all ${isScrolled
                    ? 'bg-canvas-bg-subtle/80 border-canvas-bg-hover border-b shadow-sm backdrop-blur'
                    : 'bg-transparent'
                }`}
            role='banner'
        >
            <div className='mx-auto max-w-[85vw] h-16 flex items-center justify-between'>
                <Link href='/'>
                    <Logo variant={resolvedTheme === 'dark' ? 'dark' : 'light'} />
                </Link>

                <nav aria-label='Primary navigation' className='hidden items-center space-x-4 md:flex'>
                    <ul className='flex space-x-3'>
                        {NAV_ITEMS.map(({ href, label }) => (
                            <li key={href}>
                                {href.startsWith('#') ? (
                                    <a
                                        href={href}
                                        onClick={e => {
                                            e.preventDefault();
                                            scrollToSection(href);
                                        }}
                                        className='text-canvas-text hover:text-canvas-text-contrast rounded-sm px-2 py-2 text-base font-medium transition-colors'>
                                        {label}
                                    </a>
                                ) : (
                                    <Link
                                        href={href}
                                        className='text-canvas-text hover:text-canvas-text-contrast rounded-sm px-2 py-2 text-base font-medium transition-colors'>
                                        {label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='flex justify-center items-center gap-4'>
                    <Link href="https://github.com/syedsaif666/designrift">
                        <Button
                            variant='ghost'
                            color='primary'
                        >
                            <FaGithub className='mr-2 md:mr-3 mb-1 h-4 md:h-5 w-4 md:w-5' />
                            {stargazersCount > 0 && formatCompactNumber(stargazersCount)}
                        </Button>
                    </Link>
                    <HeaderThemeSwitcher />
                    <Link href='/editor' className='flex-1'>
                        <Button
                            color='primary'
                            size='default'
                            variant='solid'
                            trailingIcon={<FaChevronRight className='w-[15px] h-[15px] pt-0.5' />}
                        >
                            Try now
                        </Button>
                    </Link>
                </div>

                {/* Mobile menu button - visible on small screens, hidden on md and up */}
                <Button
                    onClick={toggleMobile}
                    aria-label='Toggle menu'
                    aria-controls='mobile-menu'
                    aria-expanded={mobileOpen}
                    className='block md:hidden' // Changed from md:hidden to block md:hidden for clarity
                    color='neutral'
                    variant='ghost'
                    iconOnly
                    leadingIcon={
                        mobileOpen ? (
                            <FaTimes className='text-canvas-text h-5 w-5' />
                        ) : (
                            <FaBars className='text-canvas-text h-5 w-5' />
                        )
                    }
                />
            </div>

            {/* Mobile overlay menu - only rendered when mobileOpen is true */}
            {mobileOpen && (
                <nav
                    id='mobile-menu'
                    aria-label='Mobile navigation'
                    role='dialog'
                    aria-modal='true'
                    className='bg-canvas-base/95 fixed inset-0 top-16 z-50 backdrop-blur-sm md:hidden'>
                    <ul className='border-fg-border space-y-3 border-t p-4'>
                        {NAV_ITEMS.map(({ href, label }) => (
                            <li key={href}>
                                {href.startsWith('#') ? (
                                    <a
                                        href={href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(href);
                                            toggleMobile();
                                        }}
                                        className='text-canvas-text hover:bg-canvas-bg hover:text-primary-text block rounded-sm px-4 py-2 text-base font-medium transition-colors'>
                                        {label}
                                    </a>
                                ) : (
                                    <Link
                                        href={href}
                                        onClick={toggleMobile}
                                        className='text-canvas-text hover:bg-canvas-bg hover:text-primary-text block rounded-sm px-4 py-2 text-base font-medium transition-colors'>
                                        {label}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li>
                            <div className='flex flex-col gap-3'>
                                <Link href='/editor' onClick={toggleMobile} className='flex-1'>
                                    <Button
                                        color='primary'
                                        size='default'
                                        variant='solid'
                                        fullWidth
                                        trailingIcon={<FaChevronRight className='w-[15px] h-[15px] pt-0.5' />}
                                    >
                                        Try now
                                    </Button>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}