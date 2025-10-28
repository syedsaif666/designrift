import type { Viewport } from 'next';
// import Banner from '@/components/layout/banner/banner';
import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/header';
import { BackgroundBeam } from '@/components/ui/background-beam';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1
};

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            {/* <Banner /> */}
            <Header />
            <main className='relative'>
                <BackgroundBeam />
                {children}
            </main>
            <Footer />
        </>
    );
}