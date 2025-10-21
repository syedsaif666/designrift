"use client"

import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="from-primary-solid to-primary-solid/80 bg-gradient-to-br text-canvas-text-contrast hover:from-primary-solid/90 hover:to-primary-solid/70 hover:bg-gradient-to-br hover:text-canvas-text-contrast active:from-primary-solid/90 active:to-primary-solid/70 active:bg-gradient-to-br active:text-canvas-text-contrast min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled className="text-canvas-text-contrast" />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="sm"
              className="from-canvas-bg-subtle/80 to-canvas-bg/60 bg-gradient-to-br size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <IconMail className="text-canvas-text-contrast" />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon className="text-canvas-text-contrast" />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}