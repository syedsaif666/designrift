import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Check, X, Filter } from 'lucide-react';

export interface ButtonTabProps {}

export default function ButtonsTab({}: ButtonTabProps) {
  return (
    <>
      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Solid Buttons</h3>
        <div className='flex flex-wrap gap-3'>
          <Button color='primary' variant='solid' size='default'>
            Primary
          </Button>
          <Button color='primary' variant='solid' size='default'>
            Success
          </Button>
          <Button color='primary' variant='solid' size='default'>
            Alert
          </Button>
          <Button color='neutral' variant='solid' size='default'>
            Neutral
          </Button>
        </div>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Outline Buttons</h3>
        <div className='flex flex-wrap gap-3'>
          <Button color='primary' variant='outline' size='default'>
            Primary
          </Button>
          <Button color='primary' variant='outline' size='default'>
            Success
          </Button>
          <Button color='primary' variant='outline' size='default'>
            Alert
          </Button>
          <Button color='neutral' variant='outline' size='default'>
            Neutral
          </Button>
        </div>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Ghost Buttons</h3>
        <div className='flex flex-wrap gap-3'>
          <Button color='primary' variant='ghost' size='default'>
            Primary
          </Button>
          <Button color='primary' variant='ghost' size='default'>
            Success
          </Button>
          <Button color='primary' variant='ghost' size='default'>
            Alert
          </Button>
          <Button color='neutral' variant='ghost' size='default'>
            Neutral
          </Button>
        </div>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Button Sizes</h3>
        <div className='flex flex-wrap items-center gap-3'>
          <Button color='primary' variant='solid' size='sm'>
            Small
          </Button>
          <Button color='primary' variant='solid' size='default'>
            Default
          </Button>
          <Button color='primary' variant='solid' size='lg'>
            Large
          </Button>
        </div>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Buttons with Icons</h3>
        <div className='flex flex-wrap gap-3'>
          <Button color='primary' variant='solid' size='default' leadingIcon={<Download className='h-4 w-4' />}>
            Download
          </Button>
          <Button color='primary' variant='outline' size='default' leadingIcon={<Check className='h-4 w-4' />}>
            Approve
          </Button>
          <Button color='primary' variant='outline' size='default' leadingIcon={<X className='h-4 w-4' />}>
            Delete
          </Button>
          <Button color='neutral' variant='ghost' size='default' leadingIcon={<Filter className='h-4 w-4' />}>
            Filter
          </Button>
        </div>
      </div>
    </>
  );
}