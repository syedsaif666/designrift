import { ThemeGenerator } from '@/components/theme-generator';
import radixColors from '@/public/radix-colors.json';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';

export const metadata: Metadata = createPageMetadata({
  path: 'theme-editor'
});

const DesignRift = () => {
  return <ThemeGenerator radixColors={radixColors} />;
};

export default DesignRift;