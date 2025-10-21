import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FaHome } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas-base flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-8xl font-bold text-primary-solid">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-20 bg-primary-solid"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold text-canvas-text-contrast">
            Page Not Found
          </h2>
          <p className="text-base text-canvas-text max-w-md mx-auto">
            Oops! The page you're looking for seems to have vanished into the digital void.
          </p>
        </div>

        {/* Button */}
        <Link href='/'>
          <Button
            color='primary'
            variant='solid'
            size='lg'
            leadingIcon={<FaHome />}>
            Return home
          </Button>
        </Link>
      </div>
    </div>
  )
}