import React, { memo, FC } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: number | string;
  features: string[];
  recommended?: boolean;
  color?: string;
}

const PricingCard: FC<PricingCardProps> = memo(
  ({ title, price, features, recommended = false, color = 'primary' }) => (
    <div
      className={`from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 m2 backdrop-blur-sm transition-all duration-500 hover:shadow-xl ${
        recommended ? 'ring-2 ring-primary-solid' : ''
      }`}
    >
      {recommended && (
        <div className="bg-primary-solid absolute top-4 -right-10 rotate-45 px-10 py-1 text-xs font-semibold text-white">
          Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-canvas-text-contrast mb-2 text-xl font-semibold">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-canvas-text-contrast text-4xl font-bold">${price}</span>
          <span className="text-canvas-text ml-2 text-sm">/month</span>
        </div>
      </div>

      <ul className="mb-6 space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="text-canvas-text flex items-start text-sm">
            <Check
              className={`mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-${color}-solid`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        color={recommended ? 'primary' : 'neutral'}
        variant={recommended ? 'solid' : 'outline'}
        size="default"
        fullWidth
      >
        Get Started
      </Button>
    </div>
  )
);

export default PricingCard;
