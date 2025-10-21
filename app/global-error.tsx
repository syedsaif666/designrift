'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        // global-error must include html and body tags
        <html>
            <body className="min-h-screen bg-canvas-base flex items-center justify-center px-4">
                <div className="max-w-xl w-full text-center">
                    <div className="relative mb-8">
                        <h1 className="text-8xl font-bold text-primary-solid">
                            Oops!
                        </h1>
                        <div className="absolute inset-0 blur-3xl opacity-20 bg-primary-solid"></div>
                    </div>

                    <div className="space-y-6 mb-12">
                        <h2 className="text-3xl font-bold text-canvas-text-contrast">
                            Something went wrong!
                        </h2>
                        <p className="text-base text-canvas-text max-w-md mx-auto">
                            An unexpected error has occurred. We're sorry for the inconvenience.
                        </p>
                    </div>

                    <div className="space-x-4">
                        <Button
                            onClick={() => reset()}
                            color='primary'
                            variant='solid'
                            size='lg'
                        >
                            Try again
                        </Button>
                        <Link href='/'>
                            <Button
                                color='primary'
                                variant='outline'
                                size='lg'
                                leadingIcon={<FaHome />}
                            >
                                Return home
                            </Button>
                        </Link>
                    </div>
                </div>
            </body>
        </html>
    )
}