import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, BarChart3, Filter, Download } from 'lucide-react';

export interface MetricCardProps {
  title: string;
  icon: React.ReactNode;
  value: string;
  percentage: string;
  color: string;
  width: string;
}

const MetricCard = ({ title, icon, value, percentage, color, width }: MetricCardProps) => (
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
);

export interface DashboardTabProps {}

export default function DashboardTab({}: DashboardTabProps) {
  return (
    <>
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
    </>
  );
}