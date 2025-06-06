import type { Viewport } from 'next';
import { Roboto_Slab } from 'next/font/google';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header/Header';
// import { env } from '@/lib/utils/env';
import { GoogleAnalytics } from '@next/third-parties/google';

import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { ThemeProvider } from 'next-themes';

const robotoSlab = Roboto_Slab({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
    variable: '--font-robotoslab'
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1
    // maximumScale: 1,
    // userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={`${robotoSlab.variable}`} suppressHydrationWarning>
            {/* <GoogleAnalytics gaId={env.GOOGLE_ANALYTICS_MEASUREMENT_ID} /> */}
            <body className='antialiased lg:mx-auto'>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem={true}
                    storageKey="designrift-theme"
                    disableTransitionOnChange
                >
                    {/* <main className="flex-auto items-center bg-gradient-to-tr from-bg-base from- via-bg-bg-hover via-min-w-0 flex flex-col md:px-0"> */}
                    <main className=' bg-gradient-to-tr min-w-0 flex flex-auto flex-col items-center md:px-0'>
                        {/* <Header /> */}
                        <RootProvider>

                            {children}
                        </RootProvider>
                        {/* <Footer /> */}
                    </main>
                    {/* <Script
          src="https://analytics.ahrefs.com/analytics.js"
          strategy="lazyOnload"
          data-key="sQQb4vR/PAMuQQuYe+LiXQ"
          /> */}
                </ThemeProvider>
            </body>
        </html>
    );
}
