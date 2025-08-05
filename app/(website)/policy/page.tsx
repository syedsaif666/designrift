import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';

export const metadata: Metadata = createPageMetadata({
    path: 'policy',
    description:
        'Read our Privacy Policy and how we handle your data.'
});

// Reusable section component
const PolicySection = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
    <div className='mb-8'>
        <h2 className=' text-canvas-text-contrast mb-4 text-3xl leading-snug font-semibold tracking-normal md:text-4xl'>
            {number}. {title}
        </h2>
        <p className=' text-canvas-text text-base leading-relaxed font-normal tracking-normal md:text-lg'>
            {children}
        </p>
    </div>
);

// Privacy Policy component
export default function PrivacyPolicy() {
    const sections = [
        {
            title: 'Introduction',
            content:
                "This Privacy Policy explains how Silverthread Labs collects, uses, and protects your personal information when you use our website and services."
        },
        {
            title: 'Information We Collect',
            content:
                'We may collect personal information that you provide to us directly, such as your name, email address, and any other information you choose to provide.'
        },
        {
            title: 'How We Use Your Information',
            content:
                'We use your information to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.'
        },
        {
            title: 'Cookies and Tracking Technologies',
            content:
                'We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage, and deliver personalized content.'
        },
        {
            title: 'Sharing Your Information',
            content:
                'We do not sell your personal information. We may share your information with trusted third parties who assist us in operating our website and services, as required by law, or to protect our rights.'
        },
        {
            title: 'Data Security',
            content:
                'We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.'
        },
        {
            title: 'Your Rights',
            content:
                'You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at the email address below.'
        },
        {
            title: 'Changes to This Policy',
            content:
                'We may update this Privacy Policy from time to time. The latest version will always be posted on our website.'
        },
        {
            title: 'Contact Us',
            content: 'If you have any questions about this Privacy Policy, please contact us at privacy@silverthreadlabs.com.'
        }
    ];

    return (
        <div className='mx-auto mt-16 min-h-screen max-w-7xl px-4 xl:px-0'>
            <div className='mx-auto max-w-7xl py-12'>
                <h1 className='text-canvas-text-contrast mb-8 text-4xl leading-tight font-bold tracking-tight md:text-6xl'>
                    Privacy Policy
                </h1>
                <p className='text-canvas-text mb-8 text-base leading-relaxed font-normal tracking-normal md:text-lg'>
                    Last updated: May 20, 2025
                </p>
                <div className='space-y-8'>
                    {sections.map((section, index) => (
                        <PolicySection key={index} number={index + 1} title={section.title}>
                            {section.content}
                        </PolicySection>
                    ))}
                </div>
            </div>
        </div>
    );
} 