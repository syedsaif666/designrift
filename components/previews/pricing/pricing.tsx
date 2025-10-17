import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PricingTab() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingData = {
    freelancer: {
      monthly: '19',
      yearly: '15'
    },
    startup: {
      monthly: '49',
      yearly: '39'
    },
    enterprise: {
      monthly: '99',
      yearly: '79'
    }
  };

  const plans = [
    {
      title: 'Freelancer',
      description: 'The essentials to provide your best work for clients.',
      price: isYearly ? pricingData.freelancer.yearly : pricingData.freelancer.monthly,
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        '48-hour support response time'
      ],
      recommended: false
    },
    {
      title: 'Startup',
      description: 'A plan that scales with your rapidly growing business.',
      price: isYearly ? pricingData.startup.yearly : pricingData.startup.monthly,
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations'
      ],
      recommended: true
    },
    {
      title: 'Enterprise',
      description: 'Dedicated support and infrastructure for your company.',
      price: isYearly ? pricingData.enterprise.yearly : pricingData.enterprise.monthly,
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations'
      ],
      recommended: false
    }
  ];

  return (
    <div className='space-y-8 p-8'>
      <div className='text-center space-y-4'>
        <div className='flex flex-col justify-center items-center space-y-7'>
          <h2 className='text-canvas-text/80-contrast text-4xl font-bold tracking-tight'>
            Pricing that grows with you
          </h2>
          <p className='text-canvas-text/80 text-lg max-w-xl'>
            Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
          </p>
        </div>

        <div className='flex items-center justify-center gap-3 mt-6'>
          <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-canvas-text/80-contrast' : 'text-canvas-text/80'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-border focus:ring-offset-2 ${isYearly ? 'bg-primary-solid' : 'bg-canvas-base border-2 border-primary-border'}`}
            aria-label="Toggle billing period"
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ${isYearly ? 'translate-x-8' : 'translate-x-1'}`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-canvas-text/80-contrast' : 'text-canvas-text/80'}`}>
            Yearly
          </span>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto md:items-end'>
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative transition-all duration-300 hover:shadow-xl border border-primary-border  ${plan.recommended ? '' : ''
              } ${index === 0 ? 'rounded-br-none rounded-tr-none border-r-0' :
                index === 1 ? 'rounded-b-none' :
                  'rounded-bl-none rounded-tl-none border-l-0'
              }`}
          >
            <CardHeader className='text-center pb-4'>
              <div className='flex items-center justify-between gap-2'>
                <CardTitle className='text-2xl font-bold text-canvas-text/80-contrast text-start'>
                  {plan.title}
                </CardTitle>
                {plan.recommended && (
                  <span className='text-xs font-semibold text-canvas-text/80-contrast bg-primary-bg px-2 py-1 rounded-full'>
                    Most popular
                  </span>
                )}
              </div>
              <CardDescription className='text-canvas-text/80 text-start'>
                {plan.description}
              </CardDescription>
            </CardHeader>

            <CardContent className='space-y-6'>
              <div className='text-center py-4'>
                <div className='flex items-baseline justify-center'>
                  <span className='text-4xl font-bold text-canvas-text/80-contrast'>
                    ${plan.price}
                  </span>
                  <span className='text-canvas-text/80 ml-2'>
                    /month
                  </span>
                </div>
                {/* FIXED: Always reserve space with invisible text when monthly */}
                <p 
                  className={`text-xs text-canvas-text/80 mt-1 transition-opacity duration-200 ${
                    isYearly ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  Billed annually
                </p>
              </div>

              <ul className={`space-y-3 
                ${index === 0 ? 'min-h-40' :
                  index === 1 ? 'min-h-56' :
                    'min-h-44'
                }`}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-primary-solid flex-shrink-0 mt-0.5' />
                    <span className='text-sm text-canvas-text-contrast'>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200`}
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}