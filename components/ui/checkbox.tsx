"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-canvas-border bg-canvas-bg-subtle data-[state=checked]:from-primary-solid/10 data-[state=checked]:to-primary-solid/5 data-[state=checked]:border-primary-solid data-[state=checked]:text-canvas-text-contrast focus-visible:ring-primary-solid/50 aria-invalid:ring-alert-solid/20 dark:aria-invalid:ring-alert-solid/40 aria-invalid:border-alert-solid size-4 shrink-0 rounded-[4px] border shadow-xs transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }