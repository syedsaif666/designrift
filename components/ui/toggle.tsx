"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 data-[state=on]:from-canvas-bg-subtle/90 data-[state=on]:to-canvas-bg/70 data-[state=on]:bg-gradient-to-br data-[state=on]:text-canvas-text-contrast [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:ring-primary-solid/50 focus-visible:ring-2 focus-visible:ring-offset-2 outline-none transition-all aria-invalid:ring-alert-solid/20 dark:aria-invalid:ring-alert-solid/40 aria-invalid:border-alert-solid whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-canvas-bg-subtle hover:from-canvas-bg-subtle/90 hover:to-canvas-bg/70 hover:bg-gradient-to-br hover:text-canvas-text-contrast",
        outline:
          "border border-canvas-border bg-canvas-bg-subtle shadow-xs hover:from-canvas-bg-subtle/90 hover:to-canvas-bg/70 hover:bg-gradient-to-br hover:text-canvas-text-contrast",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }