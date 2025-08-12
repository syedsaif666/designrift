import { Metadata } from 'next';

import Cta from '@/components/home/cta/cta';
// import DesignRift from '@/components/home/designrift/designrift';
import Faq from '@/components/home/faq/faq';
import Features from '@/components/home/features/features';
import Hero from '@/components/home/hero/hero';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import HomeSchema from '@/lib/seo/schema/theme-editor';
import FAQSchema from '@/lib/seo/schema/faq';
// import Performance from '@/components/home/performance/performance';
// import { BlogPosts } from '@/components/blog/blog-post';
// import { ThemeExample } from '@/components/home/example/theme-example';

export const metadata: Metadata = createPageMetadata({
    path: 'home'
});

export default function Page() {
    return (
        <main className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
            <HomeSchema />
            <FAQSchema />
            <Hero />
            {/* <Performance /> */}
            {/* <ThemeExample /> */}
            {/* <DesignRift /> */}
            <Features />
            {/* <section id='blog'>
                <BlogPosts isHomePage={true} />
            </section> */}
            <Faq />
            <Cta />
        </main>
    );
}
