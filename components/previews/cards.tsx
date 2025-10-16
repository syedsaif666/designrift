import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, Info, CreditCard, TrendingUp, AlertCircle } from 'lucide-react';

export interface CardsTabProps {}

export default function CardsTab({}: CardsTabProps) {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <div className='bg-success-solid/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg'>
          <Check className='text-success-solid h-6 w-6' />
        </div>
        <h3 className='text-canvas-text-contrast mb-2 text-lg font-semibold'>Success Card</h3>
        <p className='text-canvas-text text-sm'>This card demonstrates a successful state with positive feedback.</p>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <div className='bg-alert-solid/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg'>
          <X className='text-alert-solid h-6 w-6' />
        </div>
        <h3 className='text-canvas-text-contrast mb-2 text-lg font-semibold'>Error Card</h3>
        <p className='text-canvas-text text-sm'>This card demonstrates an error state with important warnings.</p>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <div className='bg-primary-solid/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg'>
          <Info className='text-primary-solid h-6 w-6' />
        </div>
        <h3 className='text-canvas-text-contrast mb-2 text-lg font-semibold'>Info Card</h3>
        <p className='text-canvas-text text-sm'>This card demonstrates an informational state with helpful details.</p>
      </div>

      <div className='from-primary-solid/5 to-primary-solid/10 border-primary-solid/20 rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <CreditCard className='text-primary-solid mb-4 h-8 w-8' />
        <h3 className='text-canvas-text-contrast mb-2 text-lg font-semibold'>Payment Card</h3>
        <p className='text-canvas-text mb-4 text-sm'>Secure payment processing with advanced encryption.</p>
        <div className='border-canvas-border border-t pt-4'>
          <div className='text-canvas-text flex justify-between text-sm'>
            <span>Card Number</span>
            <span className='text-canvas-text-contrast font-mono'>•••• 4532</span>
          </div>
        </div>
      </div>

      <div className='from-success-solid/5 to-success-solid/10 border-success-solid/20 rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <TrendingUp className='text-success-solid mb-4 h-8 w-8' />
        <h3 className='text-canvas-text-contrast mb-2 text-lg font-semibold'>Growth Card</h3>
        <p className='text-canvas-text mb-4 text-sm'>Track your growth metrics and performance indicators.</p>
        <div className='bg-canvas-bg/50 relative h-2 overflow-hidden rounded-full'>
          <div className='from-success-solid to-success-solid-hover h-full w-3/4 rounded-full bg-gradient-to-r'></div>
        </div>
      </div>

      <div className='from-alert-solid/5 to-alert-solid/10 border-alert-solid/20 rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <AlertCircle className='text-alert-solid mb-4 h-8 w-8' />
        <h3 className='text-canvas-text-contrast mb-2 text-lg font-semibold'>Warning Card</h3>
        <p className='text-canvas-text mb-4 text-sm'>Important warnings and alerts that require attention.</p>
        <Button color='primary' variant='outline' size='sm' fullWidth={true}>
          Review Warning
        </Button>
      </div>
    </div>
  );
}