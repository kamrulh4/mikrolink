import { cacheLife, cacheTag } from "next/cache"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { getSession } from "@/lib/apis/auth"
import { generateAvatarUrl, getInitials } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export async function TeamSwitcher() {
  "use cache: private"

  cacheLife("minutes")
  cacheTag("team-session")

  const session = await getSession()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="rounded-md">
            <AvatarImage src={generateAvatarUrl(session?.organization.name || "")} />
            <AvatarFallback className="text-xs font-light rounded-md">
              {getInitials(session?.organization.name || "")}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{session?.organization.name}</span>
            <span className="truncate text-xs">
              {session?.organization.subscription_status}
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
