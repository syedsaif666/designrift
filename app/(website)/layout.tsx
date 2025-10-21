import type { Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { cookies } from 'next/headers';

import Banner from '@/components/layout/banner/banner';
import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/Header';

import '../global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import radixColors from '@/public/radix-colors.json';
import { ThemeProviderCustom } from '@/components/theme-generator/theme-provider-custom';
import { getDefaultSelectedColors, type SelectedColors } from '@/lib/theme-generator';

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

export default async function WebsiteLayout({ children }: { children: React.ReactNode }) {
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
            <body className='antialiased lg:mx-auto'>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem={true}
                    storageKey='designrift-theme'
                >
                    <ThemeProviderCustom radixColors={radixColors} initialSelectedColors={initialSelectedColors}>
                        <Banner />
                        <Header />
                        <main className=''>
                            <RootProvider>{children}</RootProvider>
                        </main>
                        <Footer />
                    </ThemeProviderCustom>
                </ThemeProvider>
            </body>
        </html>
    );
}