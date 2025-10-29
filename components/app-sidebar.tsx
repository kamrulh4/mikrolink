import { ComponentProps, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Skeleton } from "./ui/skeleton"

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ErrorBoundary
          fallback={
            <div className="text-xs text-center text-red-500">Failed to load</div>
          }
        >
          <Suspense fallback={<Skeleton className="h-10 w-full" />}>
            <TeamSwitcher />
          </Suspense>
        </ErrorBoundary>
      </SidebarHeader>
      <SidebarContent>
        <ErrorBoundary
          fallback={
            <div className="text-xs text-center text-red-500">Failed to load</div>
          }
        >
          <Suspense fallback={<NavListSkeleton />}>
            <NavMain />
          </Suspense>
        </ErrorBoundary>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

function NavListSkeleton() {
  return (
    <div>
      {Array.from({ length: 7 }).map((_list, i) => (
        <Skeleton key={i} className="m-1 h-8" />
      ))}
    </div>
  )
}
