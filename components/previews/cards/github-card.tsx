
import { Circle, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function GithubCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <CardTitle className="text-canvas-text-contrast">designrift</CardTitle>
            <CardDescription className="text-canvas-text-contrast/70">
              Create stunning, accessible themes using Radix colors. Get built-in dark mode and accessibility. Set up once, customize infinitely.
            </CardDescription>
          </div>
          <div className="from-canvas-bg-subtle/90 to-canvas-bg/70 bg-gradient-to-br text-canvas-text-contrast flex min-w-20 shrink-0 items-center space-x-1 rounded-md">
            <Link href="https://github.com/syedsaif666/designrift">
              <Button variant="soft" className="flex items-center gap-2 px-3 shadow-none text-canvas-text-contrast">
                <Star />
                Star
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-canvas-text-contrast/70 flex space-x-4 text-sm">
          <div className="flex items-center">
            <Circle className="mr-1 h-3 w-3 fill-info-solid text-info-text" />
            TypeScript
          </div>
          <div className="flex items-center">
            <Star className="mr-1 h-3 w-3" />
            20k
          </div>
          <div>Updated April 2023</div>
        </div>
      </CardContent>
    </Card>
  )
}