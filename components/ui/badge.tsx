import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border border-canvas-border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:ring-primary-solid/50 focus-visible:ring-2 focus-visible:ring-offset-2 aria-invalid:ring-alert-solid/20 dark:aria-invalid:ring-alert-solid/40 aria-invalid:border-alert-solid transition-all overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "from-primary-solid/10 to-primary-solid/5 bg-gradient-to-br text-canvas-text-contrast [a&]:hover:from-primary-solid/20 [a&]:hover:to-primary-solid/10",
        secondary:
          "bg-canvas-bg-subtle text-canvas-text [a&]:hover:from-canvas-bg-subtle/90 [a&]:hover:to-canvas-bg/70",
        destructive:
          "from-alert-solid/10 to-alert-solid/5 bg-gradient-to-br text-canvas-text-contrast [a&]:hover:from-alert-solid/20 [a&]:hover:to-alert-solid/10 focus-visible:ring-alert-solid/20 dark:focus-visible:ring-alert-solid/40",
        outline:
          "text-canvas-text [a&]:hover:from-canvas-bg-subtle/80 [a&]:hover:to-canvas-bg/60 [a&]:hover:bg-gradient-to-br [a&]:hover:text-canvas-text-contrast",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }