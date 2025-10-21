
import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-canvas-border bg-canvas-bg-subtle px-3 py-2 text-base shadow-none placeholder:text-canvas-text-contrast/70 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-canvas-border disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-canvas-text-contrast",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }