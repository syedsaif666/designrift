import React from 'react';
import { ColorCard } from './color-card';

export interface ColorsTabProps { }

export default function ColorsTab({ }: ColorsTabProps) {
  const colorSections = [
    {
      title: 'Canvas Colors',
      gradient: 'from-slate-500 to-gray-600',
      colors: [
        { name: 'Canvas Base', classes: 'bg-canvas-base' },
        { name: 'Canvas BG Subtle', classes: 'bg-canvas-bg-subtle' },
        { name: 'Canvas BG', classes: 'bg-canvas-bg' },
        { name: 'Canvas BG Hover', classes: 'bg-canvas-bg-hover' },
        { name: 'Canvas BG Active', classes: 'bg-canvas-bg-active' },
        { name: 'Canvas Line', classes: 'bg-canvas-line' },
        { name: 'Canvas Border', classes: 'bg-canvas-border' },
        { name: 'Canvas Border Hover', classes: 'bg-canvas-border-hover' },
        { name: 'Canvas Solid', classes: 'bg-canvas-solid' },
        { name: 'Canvas Solid Hover', classes: 'bg-canvas-solid-hover' },
        { name: 'Canvas Text', classes: 'bg-canvas-text' },
        { name: 'Canvas Text Contrast', classes: 'bg-canvas-text-contrast' },
        { name: 'Canvas On Canvas', classes: 'bg-canvas-on-canvas' },
      ]
    },
    {
      title: 'Primary Colors',
      gradient: 'from-blue-500 to-indigo-600',
      colors: [
        { name: 'Primary Base', classes: 'bg-primary-base' },
        { name: 'Primary BG Subtle', classes: 'bg-primary-bg-subtle' },
        { name: 'Primary BG', classes: 'bg-primary-bg' },
        { name: 'Primary BG Hover', classes: 'bg-primary-bg-hover' },
        { name: 'Primary BG Active', classes: 'bg-primary-bg-active' },
        { name: 'Primary Line', classes: 'bg-primary-line' },
        { name: 'Primary Border', classes: 'bg-primary-border' },
        { name: 'Primary Border Hover', classes: 'bg-primary-border-hover' },
        { name: 'Primary Solid', classes: 'bg-primary-solid' },
        { name: 'Primary Solid Hover', classes: 'bg-primary-solid-hover' },
        { name: 'Primary Text', classes: 'bg-primary-text' },
        { name: 'Primary Text Contrast', classes: 'bg-primary-text-contrast' },
        { name: 'Primary On Primary', classes: 'bg-primary-on-primary' },
      ]
    },
    {
      title: 'Secondary Colors',
      gradient: 'from-purple-500 to-pink-600',
      colors: [
        { name: 'Secondary Base', classes: 'bg-secondary-base' },
        { name: 'Secondary BG Subtle', classes: 'bg-secondary-bg-subtle' },
        { name: 'Secondary BG', classes: 'bg-secondary-bg' },
        { name: 'Secondary BG Hover', classes: 'bg-secondary-bg-hover' },
        { name: 'Secondary BG Active', classes: 'bg-secondary-bg-active' },
        { name: 'Secondary Line', classes: 'bg-secondary-line' },
        { name: 'Secondary Border', classes: 'bg-secondary-border' },
        { name: 'Secondary Border Hover', classes: 'bg-secondary-border-hover' },
        { name: 'Secondary Solid', classes: 'bg-secondary-solid' },
        { name: 'Secondary Solid Hover', classes: 'bg-secondary-solid-hover' },
        { name: 'Secondary Text', classes: 'bg-secondary-text' },
        { name: 'Secondary Text Contrast', classes: 'bg-secondary-text-contrast' },
        { name: 'Secondary On Secondary', classes: 'bg-secondary-on-secondary' },
      ]
    },
    {
      title: 'Success Colors',
      gradient: 'from-green-500 to-emerald-600',
      colors: [
        { name: 'Success Base', classes: 'bg-success-base' },
        { name: 'Success BG Subtle', classes: 'bg-success-bg-subtle' },
        { name: 'Success BG', classes: 'bg-success-bg' },
        { name: 'Success BG Hover', classes: 'bg-success-bg-hover' },
        { name: 'Success BG Active', classes: 'bg-success-bg-active' },
        { name: 'Success Line', classes: 'bg-success-line' },
        { name: 'Success Border', classes: 'bg-success-border' },
        { name: 'Success Border Hover', classes: 'bg-success-border-hover' },
        { name: 'Success Solid', classes: 'bg-success-solid' },
        { name: 'Success Solid Hover', classes: 'bg-success-solid-hover' },
        { name: 'Success Text', classes: 'bg-success-text' },
        { name: 'Success Text Contrast', classes: 'bg-success-text-contrast' },
        { name: 'Success On Success', classes: 'bg-success-on-success' },
      ]
    },
    {
      title: 'Warning Colors',
      gradient: 'from-yellow-500 to-orange-600',
      colors: [
        { name: 'Warning Base', classes: 'bg-warning-base' },
        { name: 'Warning BG Subtle', classes: 'bg-warning-bg-subtle' },
        { name: 'Warning BG', classes: 'bg-warning-bg' },
        { name: 'Warning BG Hover', classes: 'bg-warning-bg-hover' },
        { name: 'Warning BG Active', classes: 'bg-warning-bg-active' },
        { name: 'Warning Line', classes: 'bg-warning-line' },
        { name: 'Warning Border', classes: 'bg-warning-border' },
        { name: 'Warning Border Hover', classes: 'bg-warning-border-hover' },
        { name: 'Warning Solid', classes: 'bg-warning-solid' },
        { name: 'Warning Solid Hover', classes: 'bg-warning-solid-hover' },
        { name: 'Warning Text', classes: 'bg-warning-text' },
        { name: 'Warning Text Contrast', classes: 'bg-warning-text-contrast' },
        { name: 'Warning On Warning', classes: 'bg-warning-on-warning' },
      ]
    },
    {
      title: 'Alert Colors',
      gradient: 'from-red-500 to-rose-600',
      colors: [
        { name: 'Alert Base', classes: 'bg-alert-base' },
        { name: 'Alert BG Subtle', classes: 'bg-alert-bg-subtle' },
        { name: 'Alert BG', classes: 'bg-alert-bg' },
        { name: 'Alert BG Hover', classes: 'bg-alert-bg-hover' },
        { name: 'Alert BG Active', classes: 'bg-alert-bg-active' },
        { name: 'Alert Line', classes: 'bg-alert-line' },
        { name: 'Alert Border', classes: 'bg-alert-border' },
        { name: 'Alert Border Hover', classes: 'bg-alert-border-hover' },
        { name: 'Alert Solid', classes: 'bg-alert-solid' },
        { name: 'Alert Solid Hover', classes: 'bg-alert-solid-hover' },
        { name: 'Alert Text', classes: 'bg-alert-text' },
        { name: 'Alert Text Contrast', classes: 'bg-alert-text-contrast' },
        { name: 'Alert On Alert', classes: 'bg-alert-on-alert' },
      ]
    },
    {
      title: 'Info Colors',
      gradient: 'from-cyan-500 to-blue-600',
      colors: [
        { name: 'Info Base', classes: 'bg-info-base' },
        { name: 'Info BG Subtle', classes: 'bg-info-bg-subtle' },
        { name: 'Info BG', classes: 'bg-info-bg' },
        { name: 'Info BG Hover', classes: 'bg-info-bg-hover' },
        { name: 'Info BG Active', classes: 'bg-info-bg-active' },
        { name: 'Info Line', classes: 'bg-info-line' },
        { name: 'Info Border', classes: 'bg-info-border' },
        { name: 'Info Border Hover', classes: 'bg-info-border-hover' },
        { name: 'Info Solid', classes: 'bg-info-solid' },
        { name: 'Info Solid Hover', classes: 'bg-info-solid-hover' },
        { name: 'Info Text', classes: 'bg-info-text' },
        { name: 'Info Text Contrast', classes: 'bg-info-text-contrast' },
        { name: 'Info On Info', classes: 'bg-info-on-info' },
      ]
    },
  ];

  return (
    <div className='p-6 md:p-10'>
      <div className='max-w-7xl mx-auto space-y-12'>
        <div className='text-center mb-12'>
          <h1 className='text-canvas-text-contrast text-2xl md:text-4xl font-bold mb-3'>
            Color System
          </h1>
          <p className='text-canvas-text text-lg'>
            Explore and copy color classes from your design system
          </p>
        </div>

        {colorSections.map((section, idx) => (
          <div key={idx} className='space-y-4'>
            <div className='flex items-center gap-4'>
              <h2 className='text-canvas-text-contrast text-2xl md:text-3xl font-bold'>
                {section.title}
              </h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>
              {section.colors.map((color) => (
                <ColorCard key={color.classes} name={color.name} classes={color.classes} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}