import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Check, X, Filter, AlertTriangle, RefreshCw } from 'lucide-react';

export interface ButtonTabProps {}

export default function ButtonsTab({}: ButtonTabProps) {
  return (
    <div className="space-y-6 p-4">
      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Solid Buttons</h3>
        <div className='flex flex-wrap gap-3'>
          <Button color='primary' variant='solid' size='sm'>
            Primary sm
          </Button>
          <Button color='primary' variant='solid' size='default'>
            Primary default
          </Button>
          <Button color='primary' variant='solid' size='lg'>
            Primary lg
          </Button>
          <Button color='neutral' variant='solid' size='sm'>
            Neutral sm
          </Button>
          <Button color='neutral' variant='solid' size='default'>
            Neutral default
          </Button>
          <Button color='neutral' variant='solid' size='lg'>
            Neutral lg
          </Button>
        </div>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Soft Buttons</h3>
        <div className='flex flex-wrap gap-3'>
          <Button color='primary' variant='soft' size='sm'>
            Primary sm
          </Button>
          <Button color='primary' variant='soft' size='default'>
            Primary default
          </Button>
          <Button color='primary' variant='soft' size='lg'>
            Primary lg
          </Button>
          <Button color='neutral' variant='soft' size='sm'>
            Neutral sm
          </Button>
          <Button color='neutral' variant='soft' size='default'>
            Neutral default
          </Button>
          <Button color='neutral' variant='soft' size='lg'>
            Neutral lg
          </Button>
        </div>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Surface Buttons</h3>
        <div className='flex flex-wrap gap-3'>
          <Button color='primary' variant='surface' size='sm'>
            Primary sm
          </Button>
          <Button color='primary' variant='surface' size='default'>
            Primary default
          </Button>
          <Button color='primary' variant='surface' size='lg'>
            Primary lg
          </Button>
          <Button color='neutral' variant='surface' size='sm'>
            Neutral sm
          </Button>
          <Button color='neutral' variant='surface' size='default'>
            Neutral default
          </Button>
          <Button color='neutral' variant='surface' size='lg'>
            Neutral lg
          </Button>
        </div>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Outline Buttons</h3>
        <div className='flex flex-wrap gap-3'>
          <Button color='primary' variant='outline' size='sm'>
            Primary sm
          </Button>
          <Button color='primary' variant='outline' size='default'>
            Primary default
          </Button>
          <Button color='primary' variant='outline' size='lg'>
            Primary lg
          </Button>
          <Button color='neutral' variant='outline' size='sm'>
            Neutral sm
          </Button>
          <Button color='neutral' variant='outline' size='default'>
            Neutral default
          </Button>
          <Button color='neutral' variant='outline' size='lg'>
            Neutral lg
          </Button>
        </div>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Ghost Buttons</h3>
        <div className='flex flex-wrap gap-3'>
          <Button color='primary' variant='ghost' size='sm'>
            Primary sm
          </Button>
          <Button color='primary' variant='ghost' size='default'>
            Primary default
          </Button>
          <Button color='primary' variant='ghost' size='lg'>
            Primary lg
          </Button>
          <Button color='neutral' variant='ghost' size='sm'>
            Neutral sm
          </Button>
          <Button color='neutral' variant='ghost' size='default'>
            Neutral default
          </Button>
          <Button color='neutral' variant='ghost' size='lg'>
            Neutral lg
          </Button>
        </div>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Destructive Buttons</h3>
        <div className='flex flex-wrap gap-3'>
          <Button color='primary' variant='destructive' size='sm'>
            Destructive sm
          </Button>
          <Button color='primary' variant='destructive' size='default'>
            Destructive default
          </Button>
          <Button color='primary' variant='destructive' size='lg'>
            Destructive lg
          </Button>
        </div>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Buttons with Icons</h3>
        <div className='flex flex-wrap gap-3'>
          <Button color='primary' variant='solid' size='default' leadingIcon={<Download className='h-4 w-4' />}>
            Leading Icon
          </Button>
          <Button color='primary' variant='solid' size='default' trailingIcon={<Download className='h-4 w-4' />}>
            Trailing Icon
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
          <Button color='primary' variant='destructive' size='default' leadingIcon={<AlertTriangle className='h-4 w-4' />}>
            Warning
          </Button>
        </div>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Icon Only Buttons</h3>
        <div className='flex flex-wrap gap-3'>
          <Button color='primary' variant='solid' size='sm' iconOnly leadingIcon={<Download className='h-4 w-4' />} />
          <Button color='primary' variant='solid' size='default' iconOnly leadingIcon={<Download className='h-4 w-4' />} />
          <Button color='primary' variant='solid' size='lg' iconOnly leadingIcon={<Download className='h-4 w-4' />} />
          <Button color='neutral' variant='outline' size='default' iconOnly leadingIcon={<Check className='h-4 w-4' />} />
          <Button color='primary' variant='ghost' size='default' iconOnly leadingIcon={<X className='h-4 w-4' />} />
        </div>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Loading Buttons</h3>
        <div className='flex flex-wrap gap-3'>
          <Button color='primary' variant='solid' size='default' isLoading>
            Loading
          </Button>
          <Button color='primary' variant='solid' size='default' isLoading loadingText="Processing...">
            Processing
          </Button>
          <Button color='neutral' variant='outline' size='default' isLoading leadingIcon={<RefreshCw className='h-4 w-4' />}>
            Refreshing
          </Button>
          <Button color='primary' variant='solid' size='default' iconOnly isLoading leadingIcon={<Download className='h-4 w-4' />} />
        </div>
      </div>

      <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm'>
        <h3 className='text-canvas-text-contrast mb-4 text-lg font-semibold'>Full Width Buttons</h3>
        <div className='flex flex-col gap-3'>
          <Button color='primary' variant='solid' size='default' fullWidth>
            Primary Full Width
          </Button>
          <Button color='neutral' variant='outline' size='default' fullWidth>
            Neutral Full Width
          </Button>
          <Button color='primary' variant='destructive' size='default' fullWidth>
            Destructive Full Width
          </Button>
        </div>
      </div>
    </div>
  );
}