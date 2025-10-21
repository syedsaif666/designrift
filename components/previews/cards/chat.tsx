
import * as React from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
} from "@/components/ui/revola"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { ArrowUpIcon, CheckIcon, PlusIcon } from "lucide-react"

const users = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
  },
  {
    name: "Jackson Lee",
    email: "lee@example.com",
  },
  {
    name: "William Kim",
    email: "will@email.com",
  },
] as const

type User = (typeof users)[number]

export function CardsChat() {
  const [open, setOpen] = React.useState(false)
  const [selectedUsers, setSelectedUsers] = React.useState<User[]>([])

  const [messages, setMessages] = React.useState([
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
    {
      role: "user",
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: "agent",
      content: "What seems to be the problem?",
    },
    {
      role: "user",
      content: "I can't log in.",
    },
  ])
  const [input, setInput] = React.useState("")
  const inputLength = input.trim().length

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="flex items-center gap-4">
            <Avatar className="border-canvas-border">
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm leading-none font-medium text-canvas-text-contrast">Sofia Davis</p>
              <p className="text-canvas-text-contrast/70 text-xs">m@example.com</p>
            </div>
          </div>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="solid"
                  className="ml-auto size-8 rounded-full"
                  onClick={() => setOpen(true)}
                >
                  <PlusIcon className="text-canvas-text-contrast" />
                  <span className="sr-only">New message</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={10}>New message</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                  message.role === "user"
                    ? "from-canvas-bg-subtle/90 to-canvas-bg/70 bg-gradient-to-br text-canvas-text-contrast ml-auto"
                    : "bg-canvas-bg-subtle text-canvas-text-contrast"
                )}
              >
                {message.content}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              if (inputLength === 0) return
              setMessages([
                ...messages,
                {
                  role: "user",
                  content: input,
                },
              ])
              setInput("")
            }}
            className="relative w-full"
          >
            <Input
              id="message"
              placeholder="Type your message..."
              className="flex-1 pr-10"
              autoComplete="off"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button
              type="submit"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2 rounded-full"
              disabled={inputLength === 0}
            >
              <ArrowUpIcon className="size-3.5 text-canvas-text-contrast" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
      <ResponsiveDialog open={open} onOpenChange={setOpen}>
        <ResponsiveDialogContent className="flex max-h-[85%] flex-col gap-0">
          <ResponsiveDialogHeader className="p-4 pt-0 sm:pt-5">
            <ResponsiveDialogTitle>New message</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>
              Invite a user to this thread. This will create a new group message.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>

          <Command className="overflow-hidden rounded-t-none border-t border-canvas-border bg-transparent">
            <CommandInput placeholder="Search user..." />
            <CommandList>
              <CommandEmpty>No users found.</CommandEmpty>
              <CommandGroup>
                {users.map((user) => (
                  <CommandItem
                    key={user.email}
                    data-active={selectedUsers.includes(user)}
                    className="gap-2 data-[active=true]:opacity-50"
                    onSelect={() => {
                      if (selectedUsers.includes(user)) {
                        return setSelectedUsers(
                          selectedUsers.filter((selectedUser) => selectedUser !== user)
                        )
                      }
                      return setSelectedUsers(
                        [...users].filter((u) => [...selectedUsers, user].includes(u))
                      )
                    }}
                  >
                    <Avatar className="size-7.5 border-canvas-border">
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <p className="text-sm leading-none font-medium text-canvas-text-contrast">{user.name}</p>
                      <p className="text-canvas-text text-sm">{user.email}</p>
                    </div>
                    {selectedUsers.includes(user) ? (
                      <CheckIcon className="text-canvas-text-contrast ml-auto flex size-4" />
                    ) : null}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>

          <ResponsiveDialogFooter className="items-center border-t border-canvas-border p-4 sm:justify-between">
            {selectedUsers.length > 0 ? (
              <div className="flex -space-x-2 overflow-hidden">
                {selectedUsers.map((user) => (
                  <Avatar key={user.email} className="inline-block size-7.5 border-canvas-border">
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            ) : (
              <p className="text-canvas-text-contrast/70 text-sm">Select users to add to this thread.</p>
            )}
            <Button
              onClick={() => {
                setOpen(false)
              }}
              disabled={selectedUsers.length < 2}
            >
              Continue
            </Button>
          </ResponsiveDialogFooter>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </>
  )
}