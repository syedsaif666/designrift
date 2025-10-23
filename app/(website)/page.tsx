import { Metadata } from 'next';

import {HomeContent} from '@/components/home';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import radixColors from '@/public/radix-colors.json';

export const metadata: Metadata = createPageMetadata({
    path: 'home'
});

export default function Page() {
    return (
        <main className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
            <HomeContent radixColors={radixColors} />
        </main>
    );
}