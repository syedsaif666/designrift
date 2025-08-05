'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaPalette, FaArrowRight, FaRocket, FaStar, FaPlay } from 'react-icons/fa';

export default function CTA() {
    return (
        <section className='w-full px-4 py-10 sm:px-6 lg:px-8 xl:py-16'>
            <div className='max-w-7xl mx-auto'>
                {/* CTA Section */}
                <div>
                    <div className='from-canvas-bg via-canvas-bg-hover to-canvas-bg-subtle relative overflow-hidden rounded-2xl bg-gradient-to-br p-8 shadow-xl sm:p-12 lg:p-16'>
                        {/* Floating Elements */}
                        <div className='bg-canvas-bg-hover absolute -top-4 -right-4 h-32 w-32 rounded-full blur-2xl'></div>
                        <div className='bg-canvas-bg-hover absolute -bottom-8 -left-8 h-40 w-40 rounded-full blur-3xl'></div>

                        {/* Content */}
                        <div className='relative z-10 mx-auto max-w-4xl text-center'>
                            <motion.div 
                                className='mb-6'
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}>
                                <span className='bg-canvas-bg-subtle text-canvas-text-contrast inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm'>
                                    <FaPalette className='w-4 h-4' />
                                    ✨ Discover the power of DesignRift
                                </span>
                            </motion.div>

                            <motion.h2 
                                className='text-canvas-text-contrast mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}>
                                Ready to Create Beautiful Themes?
                            </motion.h2>

                            <motion.p 
                                className='text-canvas-text mb-8 text-lg text-balance sm:text-xl lg:text-2xl'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}>
                                Join thousands of designers and developers creating stunning, accessible design systems 
                                with the power of Radix Colors and DesignRift.
                            </motion.p>

                            {/* CTA Section */}
                            <motion.div 
                                className='flex flex-col gap-4 sm:flex-row sm:justify-center'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}>
                                
                                <Link href='/theme-editor' rel='noopener noreferrer'>
                                    <Button
                                        color='primary'
                                        variant='solid'
                                        size='lg'
                                        className='group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary-solid/25 flex items-center gap-3 px-8 py-4'>
                                        <FaRocket className='w-4 h-4' />
                                        <span className='relative z-10'>Start Creating Now</span>
                                        <FaArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                                        <div className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full'></div>
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}