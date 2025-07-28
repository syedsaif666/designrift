import { getURL } from '@/lib/utils/url';

export const siteConfig = {
    title: 'designrift',
    description:
        'Design stunning themes with Radix colors. Fast setup, WCAG contrast, dark mode, and infinite customization.',
    baseUrl: getURL(),
    creator: 'Syed Saif',
    publisher: 'Silverthread Labs',
    keywords: [
        'Radix Colors',
        'Accessible Themes',
        'WCAG Contrast',
        'Dark Mode',
        'Designrift',
        'Theme Engine',
        'Visual Customization',
        'UI Design',
        'Accessibility',
        'Single-step Theme Setup'
    ],
    alternateNames: [
        'designrift',
        'design rift',
        'design token',
        'radix theme generator',
    ],
    author: {
        name: 'Syed Saif',
        url: 'https://www.syed-saif.com',
        logo: 'https://www.syed-saif.com/favicon.ico',
        twitterHandle: '@syedsaif_666'
    },
    getImageConfig: (title: string) => ({
        url: `${getURL()}/og?title=${encodeURIComponent(title)}`,
        width: 1200,
        height: 630,
        alt: title,
        description: title
    }),
    social: {
        sameAs: ['https://www.syed-saif.com', 'https://www.bloggen.dev', 'https://www.silverthreadlabs.com']
    },
    sitemap: {
        staticRoutes: ['', '/theme-editor', '/support', '/terms']
    }
};
