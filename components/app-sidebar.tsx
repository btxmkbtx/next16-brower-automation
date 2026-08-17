import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { Plus, Workflow } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const workflows = [
  "dominant-wasp",
  "honest-reindeer",
  "expected-llama",
  "essential-ocelot",
  "creepy-echidna",
  "eastern-silkworm",
  "cultural-lion",
  "proud-weasel",
  "regional-bonobo",
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="px-8 pt-6 pb-6 group-data-[collapsible=icon]:px-2">
        <div className="flex h-10 min-w-0 items-center gap-2 group-data-[collapsible=icon]:justify-center">
          <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
            <OrganizationSwitcher
              appearance={{
                elements: {
                  rootBox: "w-full min-w-0",
                  organizationSwitcherTrigger:
                    "h-10 w-full min-w-0 justify-start overflow-hidden rounded-lg p-0 hover:bg-transparent",
                  organizationPreview: "min-w-0",
                  organizationPreviewAvatarBox: "size-8 rounded-lg",
                  organizationPreviewTextContainer: "min-w-0",
                  organizationPreviewMainIdentifier:
                    "truncate text-xl font-medium text-[#b8b8b8]",
                  organizationSwitcherTriggerIcon:
                    "ml-auto size-5 text-[#a7a7a7]",
                },
              }}
            />
          </div>
          <SidebarTrigger className="size-10 shrink-0 rounded-lg text-[#fafafa] hover:bg-[#262626] [&_svg]:size-5" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="py-0 pr-8 pl-[22px] group-data-[collapsible=icon]:px-2">
          <SidebarGroupLabel className="h-10 px-3 text-xl font-medium text-[#b8b8b8]">
            Workflows
          </SidebarGroupLabel>
          <SidebarGroupAction
            type="button"
            aria-label="Create workflow"
            title="Create workflow"
            className="top-1.5 right-8 size-10 rounded-lg text-[#fafafa] group-data-[collapsible=icon]:hidden hover:bg-[#262626] [&_svg]:size-5"
          >
            <Plus aria-hidden="true" />
          </SidebarGroupAction>
          <SidebarGroupContent className="mt-1">
            <SidebarMenu className="gap-0.5">
              {workflows.map((workflow, index) => (
                <SidebarMenuItem key={workflow}>
                  <SidebarMenuButton
                    type="button"
                    isActive={index === 0}
                    tooltip={workflow}
                    className="h-12 rounded-lg px-3 text-xl font-normal text-[#fafafa] group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:justify-center hover:bg-[#262626] hover:text-[#fafafa] data-active:bg-[#262626] data-active:font-normal data-active:text-[#fafafa]"
                  >
                    <Workflow
                      aria-hidden="true"
                      className="hidden group-data-[collapsible=icon]:block"
                    />
                    <span>{workflow}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="pr-8 pb-8 pl-[22px] group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:px-2">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "size-10",
              userButtonTrigger: "rounded-md",
            },
          }}
        />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
