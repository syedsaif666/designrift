"use client";

import { ChevronDown } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const teamMembers = [
  {
    name: "Sofia Davis",
    email: "m@example.com",
    role: "Owner",
  },
  {
    name: "Jackson Lee",
    email: "p@example.com",
    role: "Developer",
  },
  {
    name: "Isabella Nguyen",
    email: "i@example.com",
    role: "Billing",
  },
];

const roles = [
  {
    name: "Viewer",
    description: "Can view and comment.",
  },
  {
    name: "Developer",
    description: "Can view, comment and edit.",
  },
  {
    name: "Billing",
    description: "Can view, comment and manage billing.",
  },
  {
    name: "Owner",
    description: "Admin-level access to all resources.",
  },
];

export function CardsTeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Invite your team members to collaborate.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="border">
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm leading-none font-medium">{member.name}</p>
                <p className="text-canvas-text text-xs">{member.email}</p>
              </div>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto shadow-none">
                  {member.role} <ChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0" align="end">
                <Command>
                  <CommandInput placeholder="Select role..." />
                  <CommandList>
                    <CommandEmpty>No roles found.</CommandEmpty>
                    <CommandGroup>
                      {roles.map((role) => (
                        <CommandItem key={role.name}>
                          <div className="flex flex-col">
                            <p className="text-sm font-medium">{role.name}</p>
                            <p className="text-primary-text">{role.description}</p>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
