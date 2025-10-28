import React from 'react';
import { Button } from '@/components/ui/button';
import { FaPlusCircle } from 'react-icons/fa';

const Buttons = () => {
  const variants = ['solid', 'soft', 'surface', 'outline', 'ghost'] as const;

  return (
    <div className="space-y-8 py-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Primary Variants</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {variants.map((variant) => (
            <Button
              key={`primary-${variant}`}
              color="primary"
              variant={variant}
              size="default"
              leadingIcon={<FaPlusCircle className="h-4 w-4" />}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Neutral Variants</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {variants.map((variant) => (
            <Button
              key={`neutral-${variant}`}
              color="neutral"
              variant={variant}
              size="default"
              leadingIcon={<FaPlusCircle className="h-4 w-4" />}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Destructive Variant</h3>
        <div className="grid grid-cols-1 gap-4">
          <Button variant="destructive" size="default" leadingIcon={<FaPlusCircle className="h-4 w-4" />}>
            Destructive
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;