import { AppSidebar } from "@/components/app-sidebar"
import DashboardHeader from "@/components/dashboard-header"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />

        <main className="p-4">{children}</main>
      </SidebarInset>
      <MobileBottomNav />
    </SidebarProvider>
  )
}
