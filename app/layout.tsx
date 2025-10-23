import type { ReactNode } from 'react';
import './global.css';
import { Manrope } from 'next/font/google';
import { cookies } from 'next/headers';
import { getDefaultSelectedColors, type SelectedColors } from '@/lib/theme-generator';
import { ThemeProvider } from 'next-themes';
import { ThemeProviderCustom } from '@/components/theme-generator';
import { RootProvider } from 'fumadocs-ui/provider';
import radixColors from '@/public/radix-colors.json';
import { Viewport } from 'next';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1
};

export default async function RootLayout({ children }: { children: ReactNode }) {
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
    <html suppressHydrationWarning lang='en' className={`${manrope.variable}`}>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
          storageKey='designrift-theme'
        >
          <ThemeProviderCustom radixColors={radixColors} initialSelectedColors={initialSelectedColors}>
            <RootProvider>{children}</RootProvider>
          </ThemeProviderCustom>
        </ThemeProvider>
      </body>
    </html>
  );
}