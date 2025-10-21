"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-success-solid" />,
        info: <InfoIcon className="size-4 text-info-solid" />,
        warning: <TriangleAlertIcon className="size-4 text-warning-solid" />,
        error: <OctagonXIcon className="size-4 text-alert-solid" />,
        loading: <Loader2Icon className="size-4 animate-spin text-canvas-text-contrast" />,
      }}
      style={
        {
          "--normal-bg": "var(--canvas-bg-subtle)",
          "--normal-text": "var(--canvas-text-contrast)",
          "--normal-border": "var(--canvas-border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }