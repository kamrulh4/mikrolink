import { BarChart3, CreditCard, Settings, UserPlus, Users, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const actions = [
  {
    title: "Add New User",
    description: "Create a new user account",
    icon: UserPlus,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    title: "Manage Plans",
    description: "Update service packages",
    icon: CreditCard,
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "View Reports",
    description: "Generate usage reports",
    icon: BarChart3,
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    title: "User Management",
    description: "Manage existing users",
    icon: Users,
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    title: "Network Settings",
    description: "Configure network parameters",
    icon: Wifi,
    color: "bg-teal-500 hover:bg-teal-600",
  },
  {
    title: "System Settings",
    description: "General system configuration",
    icon: Settings,
    color: "bg-gray-500 hover:bg-gray-600",
  },
]

export function QuickActions() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-foreground text-sm sm:text-base">
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {actions.map((action) => (
            <Button
              key={action.title}
              variant="outline"
              className="h-auto p-3 sm:p-4 flex flex-col items-center space-y-1 sm:space-y-2 hover:bg-muted/50 bg-transparent"
            >
              <action.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <div className="text-center">
                <p className="font-medium text-xs sm:text-sm text-foreground leading-tight">
                  {action.title}
                </p>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  {action.description}
                </p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
