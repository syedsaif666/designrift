import React, { memo } from 'react';
import PricingCard from '../ui/pricing-card';

export interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
  color: string;
}


export interface PricingTabProps {}

export default function PricingTab({}: PricingTabProps) {
  return (
    <>
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
    </>
  );
}