import type { Viewport } from 'next';
import Navbar from '@/components/layout/editor/navbar';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1
};

export default function ThemeEditorLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
        <Navbar />
            <main className='overflow-hidden h-[calc(100vh-4rem)]'>
                {children}
            </main>
        </>
    );
}