import { Metadata } from 'next';

import {HomeContent} from '@/components/home/home-content';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import radixColors from '@/public/radix-colors.json';
import { cookies } from 'next/headers';
import { getDefaultSelectedColors, type SelectedColors } from '@/lib/theme-generator';

export const metadata: Metadata = createPageMetadata({
    path: 'home'
});

export default async function Page() {
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

    return (
        <main className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
            <HomeContent radixColors={radixColors} initialSelectedColors={initialSelectedColors} />
        </main>
    );
}