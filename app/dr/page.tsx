'use client';

import { ThemeGenerator } from '@/components/theme-generator';
import radixColors from '@/public/radix-colors.json';

const DesignRift = () => {
  return <ThemeGenerator radixColors={radixColors} />;
};

export default DesignRift;