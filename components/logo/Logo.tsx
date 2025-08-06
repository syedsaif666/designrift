import Link from 'next/link';

const Logo = () => (
    <Link href='/' className='flex flex-row items-center gap-2'>
        {/* Light mode logo */}
        <img
            src="/logo-light.svg"
            alt="Bloggen Logo Light"
            className="block dark:hidden h-8 w-auto"
            height={32}
        />
        {/* Dark mode logo */}
        <img
            src="/logo-dark.svg"
            alt="Bloggen Logo Dark"
            className="hidden dark:block h-8 w-auto"
            height={32}
        />
        <div className='text-canvas-text mt-0.5 flex text-sm font-bold'>Designrift</div>
    </Link>
);
export default Logo;
