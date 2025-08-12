import {ReactElement } from 'react';
import {
    Palette,
    Moon,
    Zap,
    Shield,
    Code,
    Smartphone,
    ArrowRight
} from 'lucide-react';

export interface Feature {
    id: number;
    icon: ReactElement;
    title: string;
    description: string;
    details: string[];
    gradient:string;
}

export const featuresData: Feature[] = [

    {
        id: 1,
        icon: <Palette className="w-8 h-8" />,
        title: 'Radix Color System',
        description: 'Built on the industry-standard Radix color palette with semantic color scales',
        details: [
            'Professional color palettes',
            'Semantic naming convention',
            'Perfect color harmony',
            'Brand customization ready'
        ],
        gradient: 'from-blue-500 to-purple-600'
    },
    {
        id: 2,
        icon: <Shield className="w-8 h-8" />,
        title: 'WCAG Compliance',
        description: 'Automatic accessibility compliance with proper contrast ratios',
        details: [
            'WCAG 2.1 AA compliant',
            'Automatic contrast checking',
            'Screen reader friendly',
            'Keyboard navigation support'
        ],
        gradient: 'from-green-500 to-teal-600'
    },
    {
        id: 3,
        icon: <Moon className="w-8 h-8" />,
        title: 'Dark Mode Ready',
        description: 'Seamless dark mode with intelligent color adaptation',
        details: [
            'One-click dark mode toggle',
            'Intelligent color inversion',
            'System preference detection',
            'Smooth transitions'
        ],
        gradient: 'from-purple-500 to-pink-600'
    },
    {
        id: 4,
        icon: <Zap className="w-8 h-8" />,
        title: 'Lightning Fast Setup',
        description: 'Get started in seconds with our streamlined integration process',
        details: [
            'One command installation',
            'Zero configuration needed',
            'Framework agnostic',
            'Hot reload support'
        ],
        gradient: 'from-yellow-500 to-orange-600'
    },
    {
        id: 5,
        icon: <Code className="w-8 h-8" />,
        title: 'Developer Experience',
        description: 'Built for developers with TypeScript support and excellent tooling',
        details: [
            'Full TypeScript support',
            'IntelliSense autocomplete',
            'ESLint integration',
            'Comprehensive documentation'
        ],
        gradient: 'from-indigo-500 to-blue-600'
    },
    {
        id: 6,
        icon: <Smartphone className="w-8 h-8" />,
        title: 'Responsive Design',
        description: 'Mobile-first approach with perfect scaling across all devices',
        details: [
            'Mobile-first design',
            'Flexible breakpoints',
            'Touch-friendly interfaces',
            'Cross-browser compatibility'
        ],
        gradient: 'from-pink-500 to-red-600'
    }
];
