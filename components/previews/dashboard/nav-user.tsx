"use client"

import {
  IconCreditCard,
  IconDotsVertical,
  IconLogout,
  IconNotification,
  IconUserCircle,
} from "@tabler/icons-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:from-canvas-bg-subtle/90 data-[state=open]:to-canvas-bg/70 data-[state=open]:bg-gradient-to-br data-[state=open]:text-canvas-text-contrast"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="from-canvas-bg-subtle/80 to-canvas-bg/60 bg-gradient-to-br rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="text-canvas-text truncate text-xs">
                  {user.email}
                </span>
              </div>
              <IconDotsVertical className="ml-auto size-4 text-canvas-text-contrast" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg from-canvas-bg-subtle/80 to-canvas-bg/60 bg-gradient-to-br"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="from-canvas-bg-subtle/80 to-canvas-bg/60 bg-gradient-to-br rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="text-canvas-text truncate text-xs">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="text-canvas-text-contrast hover:from-canvas-bg-subtle/90 hover:to-canvas-bg/70 hover:bg-gradient-to-br">
                <IconUserCircle className="text-canvas-text-contrast" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem className="text-canvas-text-contrast hover:from-canvas-bg-subtle/90 hover:to-canvas-bg/70 hover:bg-gradient-to-br">
                <IconCreditCard className="text-canvas-text-contrast" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="text-canvas-text-contrast hover:from-canvas-bg-subtle/90 hover:to-canvas-bg/70 hover:bg-gradient-to-br">
                <IconNotification className="text-canvas-text-contrast" />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-canvas-text-contrast hover:from-canvas-bg-subtle/90 hover:to-canvas-bg/70 hover:bg-gradient-to-br">
              <IconLogout className="text-canvas-text-contrast" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}