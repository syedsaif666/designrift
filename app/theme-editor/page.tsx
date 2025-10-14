import { ThemeGenerator } from '@/components/theme-generator';
import radixColors from '@/public/radix-colors.json';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import { cookies } from 'next/headers';
import { getDefaultSelectedColors, type SelectedColors } from '@/lib/theme-generator';

export const metadata: Metadata = createPageMetadata({
  path: 'theme-editor'
});

const DesignRift = async () => {
  const cookieStore = await cookies();
  const savedColorsStr = cookieStore.get('designrift-color-theme')?.value;
  
  let initialSelectedColors: SelectedColors = getDefaultSelectedColors();
  if (savedColorsStr) {
    try {
      initialSelectedColors = JSON.parse(savedColorsStr) as SelectedColors;
    } catch (error) {
      console.error('Failed to parse saved colors from cookie:', error);
    }
  }

  return <ThemeGenerator radixColors={radixColors} initialSelectedColors={initialSelectedColors} />;
};

export default DesignRift;