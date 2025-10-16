import React, { memo, useState } from 'react';
import {
  BarChart3,
  Download,
  Filter,
  TrendingUp,
  Palette,
  CreditCard,
  MousePointer,
  Check,
  X,
  AlertCircle,
  Info
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const MetricCard = memo(({ title, icon, value, percentage, color, width }) => (
  <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border group cursor-pointer rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-xl'>
    <div className='mb-4 flex items-start justify-between'>
      <h3 className='text-canvas-text text-sm font-medium'>{title}</h3>
      <div className={`bg-${color}-solid/10 group-hover:bg-${color}-solid/20 flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300`}>
        {icon}
      </div>
    </div>
    <div className={`text-canvas-text-contrast group-hover:text-${color}-solid mb-2 text-3xl font-bold transition-colors duration-300`}>
      {value}
    </div>
    <div className={`text-${color}-solid mb-4 text-sm font-medium`}>{percentage}</div>
    <div className='bg-canvas-bg/50 relative h-2 overflow-hidden rounded-full'>
      <div className={`from-${color}-solid/20 to-${color}-solid/10 absolute inset-0 rounded-full bg-gradient-to-r`}></div>
      <div
        className={`from-${color}-solid to-${color}-solid-hover h-full rounded-full bg-gradient-to-r shadow-sm transition-all duration-1000 ease-out`}
        style={{ width }}></div>
    </div>
  </div>
));

const PricingCard = memo(({ title, price, features, recommended, color }) => (
  <div className={`from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-xl ${recommended ? 'ring-2 ring-primary-solid' : ''}`}>
    {recommended && (
      <div className='bg-primary-solid absolute top-4 -right-10 rotate-45 px-10 py-1 text-xs font-semibold text-white'>
        Popular
      </div>
    )}
    <div className='mb-6'>
      <h3 className='text-canvas-text-contrast mb-2 text-xl font-semibold'>{title}</h3>
      <div className='flex items-baseline'>
        <span className='text-canvas-text-contrast text-4xl font-bold'>${price}</span>
        <span className='text-canvas-text ml-2 text-sm'>/month</span>
      </div>
    </div>
    <ul className='mb-6 space-y-3'>
      {features.map((feature, idx) => (
        <li key={idx} className='text-canvas-text flex items-start text-sm'>
          <Check className={`text-${color}-solid mr-2 mt-0.5 h-4 w-4 flex-shrink-0`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button
      color={recommended ? 'primary' : 'neutral'}
      variant={recommended ? 'solid' : 'outline'}
      size="default"
      fullWidth={true}>
      Get Started
    </Button>
  </div>
));

const ColorSwatch = memo(({ name, classes }) => (
  <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border group overflow-hidden rounded-xl border bg-gradient-to-br shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl'>
    <div className={`${classes} h-24 w-full transition-transform duration-300 group-hover:scale-105`}></div>
    <div className='p-4'>
      <h4 className='text-canvas-text-contrast mb-1 text-sm font-medium'>{name}</h4>
      <p className='text-canvas-text text-xs font-mono'>{classes}</p>
    </div>
  </div>
));

export default function DesignSystemShowcase() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className='from-canvas-bg-subtle to-canvas-bg-subtle relative min-h-screen overflow-hidden bg-gradient-to-br p-6'>
      <div className='relative mx-auto max-w-7xl'>
        <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
          <TabsList className='sticky top-0 z-10 backdrop-blur-sm'>
            <TabsTrigger value='dashboard' className='whitespace-nowrap'>
              Dashboard
            </TabsTrigger>
            <TabsTrigger value='pricing' className='whitespace-nowrap'>
              Pricing
            </TabsTrigger>
            <TabsTrigger value='cards' className='whitespace-nowrap'>
              Cards
            </TabsTrigger>
            <TabsTrigger value='buttons' className='whitespace-nowrap'>
              Buttons
            </TabsTrigger>
            <TabsTrigger value='colors' className='whitespace-nowrap'>
              Color Palette
            </TabsTrigger>
          </TabsList>

          <TabsContent value='dashboard' className='space-y-6 max-h-[calc(100vh-150px)] overflow-y-auto'>
            <div className='from-canvas-bg-subtle/80 to-canvas-bg-subtle/60 border-canvas-border group mb-6 rounded-2xl border bg-gradient-to-r p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-xl'>
              <div className='flex flex-col items-start justify-between space-y-4 lg:flex-row lg:space-y-0'>
                <div className='flex-1'>
                  <h2 className='text-canvas-text-contrast mb-2 text-xl font-semibold'>
                    Analytics Overview
                  </h2>
                  <p className='text-canvas-text mb-4 leading-relaxed'>
                    Track your performance metrics and gain insights into your business growth.
                  </p>
                  <Button color='primary' variant='solid' size='default'>
                    View Full Report
                  </Button>
                </div>
                <div className='hidden opacity-20 transition-opacity duration-500 group-hover:opacity-40 lg:block'>
                  <TrendingUp className='text-primary-solid h-16 w-16' />
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <MetricCard
                title='Total Revenue'
                icon={<TrendingUp className='text-success-solid h-4 w-4' />}
                value='$45,231'
                percentage='+20.1% from last month'
                color='primary'
                width='75%'
              />
              <MetricCard
                title='Active Users'
                icon={<BarChart3 className='text-primary-solid h-4 w-4' />}
                value='2,350'
                percentage='+15.3% from last month'
                color='primary'
                width='60%'
              />
              <MetricCard
                title='Conversion Rate'
                icon={<TrendingUp className='text-alert-solid h-4 w-4' />}
                value='3.65%'
                percentage='+5.2% from last month'
                color='primary'
                width='45%'
              />
            </div>

            <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border overflow-hidden rounded-2xl border bg-gradient-to-br shadow-lg backdrop-blur-sm'>
              <div className='border-canvas-border from-canvas-bg-subtle/50 flex items-center justify-between border-b bg-gradient-to-r to-transparent p-6'>
                <div>
                  <h3 className='text-canvas-text-contrast text-lg font-semibold'>Recent Activity</h3>
                  <p className='text-canvas-text text-sm'>Latest updates from your dashboard</p>
                </div>
                <div className='flex space-x-3'>
                  <Button color='neutral' variant='outline' size='sm' leadingIcon={<Filter className='h-4 w-4' />}>
                    Filter
                  </Button>
                  <Button color='primary' variant='solid' size='sm' leadingIcon={<Download className='h-4 w-4' />}>
                    Export
                  </Button>
                </div>
              </div>
              <div className='divide-canvas-border/30 divide-y p-6'>
                {[1, 2, 3].map((i) => (
                  <div key={i} className='hover:bg-canvas-bg-hover/50 cursor-pointer py-4 transition-colors duration-200'>
                    <div className='text-canvas-text-contrast mb-1 font-medium'>Activity Item {i}</div>
                    <div className='text-canvas-text text-sm'>Description of the activity event</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value='pricing' className='space-y-6 max-h-[calc(100vh-150px)] overflow-y-auto'>
            <div className='text-center mb-8'>
              <h2 className='text-canvas-text-contrast mb-2 text-2xl font-bold'>Choose Your Plan</h2>
              <p className='text-canvas-text'>Select the perfect plan for your needs</p>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              <PricingCard
                title='Starter'
                price='29'
                color='primary'
                features={[
                  'Up to 10 users',
                  'Basic analytics',
                  'Email support',
                  '5GB storage',
                  'API access'
                ]}
              />
              <PricingCard
                title='Professional'
                price='79'
                color='primary'
                recommended={true}
                features={[
                  'Up to 50 users',
                  'Advanced analytics',
                  'Priority support',
                  '50GB storage',
                  'API access',
                  'Custom integrations'
                ]}
              />
              <PricingCard
                title='Enterprise'
                price='199'
                color='primary'
                features={[
                  'Unlimited users',
                  'Enterprise analytics',
                  '24/7 support',
                  'Unlimited storage',
                  'API access',
                  'Custom integrations',
                  'Dedicated manager'
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value='cards' className='space-y-6 max-h-[calc(100vh-150px)] overflow-y-auto'>
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
          </TabsContent>

          <TabsContent value='buttons' className='space-y-8 max-h-[calc(100vh-150px)] overflow-y-auto'>
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
          </TabsContent>

          <TabsContent value='colors' className='space-y-6 max-h-[calc(100vh-150px)] overflow-y-auto'>
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}