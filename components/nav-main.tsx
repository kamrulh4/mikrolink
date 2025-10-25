"use client"

import { QueryOptions, useQueryClient } from "@tanstack/react-query"
import {
  Building2,
  CreditCard,
  LayoutDashboard,
  type LucideIcon,
  Package2,
  Settings2,
  User,
  Users,
  Wifi,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { getCustomerListOptions } from "@/hooks/rq/use-customers-query"
import { getOrganizationListOptions } from "@/hooks/rq/use-organizations-query"
import { getPackageListOptions } from "@/hooks/rq/use-packages-query"
import { getPaymentListOptions } from "@/hooks/rq/use-payment-query"
import { getSessionsOptions } from "@/hooks/rq/use-sessions-query"
import { getUserListOptions } from "@/hooks/rq/use-users-query"

const navMain = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "Customers",
    url: "/customers",
    icon: Users,
    prefetchOptions: getCustomerListOptions,
  },
  {
    title: "Sessions",
    url: "/sessions",
    icon: Wifi,
    prefetchOptions: getSessionsOptions,
  },
  {
    title: "Payments",
    url: "/payments",
    icon: CreditCard,
    prefetchOptions: getPaymentListOptions,
  },
  {
    title: "Packages",
    url: "/packages",
    icon: Package2,
    prefetchOptions: getPackageListOptions,
  },
  {
    title: "Users",
    url: "/users",
    icon: User,
    prefetchOptions: getUserListOptions,
  },
  {
    title: "Organizations",
    url: "/organizations",
    icon: Building2,
    prefetchOptions: getOrganizationListOptions,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings2,
  },
]

export function NavMain() {
  const pathname = usePathname()

  const queryClient = useQueryClient()

  return (
    <SidebarGroup>
      <SidebarMenu>
        {navMain.map((item) => (
          <SidebarMenuItem
            key={item.title}
            onMouseEnter={(e) => {
              if (item.prefetchOptions) {
                queryClient.prefetchQuery(item.prefetchOptions() as any)
              }
            }}
          >
            <Link href={item.url}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={pathname === item.url}
                className="cursor-pointer"
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </Link>

            {/* <SidebarMenuSub>
              {item.items?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild>
                    <Link href={subItem.url}>
                      <span>{subItem.title}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub> */}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
