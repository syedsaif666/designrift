import React, { memo } from 'react';

export interface ColorSwatchProps {
  name: string;
  classes: string;
}

const ColorSwatch = memo(({ name, classes }: ColorSwatchProps) => (
  <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border group overflow-hidden rounded-xl border bg-gradient-to-br shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl'>
    <div className={`${classes} h-24 w-full transition-transform duration-300 group-hover:scale-105`}></div>
    <div className='p-4'>
      <h4 className='text-canvas-text-contrast mb-1 text-sm font-medium'>{name}</h4>
      <p className='text-canvas-text text-xs font-mono'>{classes}</p>
    </div>
  </div>
));

export interface ColorsTabProps {}

export default function ColorsTab({}: ColorsTabProps) {
  return (
    <>
      <div>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Primary Colors</h3>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          <ColorSwatch name='Primary Solid' classes='bg-primary-solid' />
          <ColorSwatch name='Primary Hover' classes='bg-primary-solid-hover' />
          <ColorSwatch name='Primary BG' classes='bg-primary-bg' />
          <ColorSwatch name='Primary Border' classes='bg-primary-border' />
        </div>
      </div>

      <div>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Success Colors</h3>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          <ColorSwatch name='Success Solid' classes='bg-success-solid' />
          <ColorSwatch name='Success Hover' classes='bg-success-solid-hover' />
          <ColorSwatch name='Success BG' classes='bg-success-bg' />
          <ColorSwatch name='Success Border' classes='bg-success-border' />
        </div>
      </div>

      <div>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Alert Colors</h3>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          <ColorSwatch name='Alert Solid' classes='bg-alert-solid' />
          <ColorSwatch name='Alert Hover' classes='bg-alert-solid-hover' />
          <ColorSwatch name='Alert BG' classes='bg-alert-bg' />
          <ColorSwatch name='Alert Border' classes='bg-alert-border' />
        </div>
      </div>

      <div>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Canvas Colors</h3>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          <ColorSwatch name='Canvas BG' classes='bg-canvas-bg' />
          <ColorSwatch name='Canvas BG Subtle' classes='bg-canvas-bg-subtle' />
          <ColorSwatch name='Canvas BG Hover' classes='bg-canvas-bg-hover' />
          <ColorSwatch name='Canvas Border' classes='bg-canvas-border' />
          <ColorSwatch name='Canvas Text' classes='bg-canvas-text' />
          <ColorSwatch name='Canvas Text Contrast' classes='bg-canvas-text-contrast' />
        </div>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Gradient Examples</h3>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='from-primary-solid to-primary-solid-hover h-24 rounded-xl bg-gradient-to-r shadow-lg'></div>
          <div className='from-success-solid to-success-solid-hover h-24 rounded-xl bg-gradient-to-r shadow-lg'></div>
          <div className='from-canvas-bg-subtle to-canvas-bg h-24 rounded-xl bg-gradient-to-br shadow-lg'></div>
          <div className='from-primary-solid/20 to-success-solid/20 h-24 rounded-xl bg-gradient-to-r shadow-lg'></div>
        </div>
      </div>
    </>
  );
}