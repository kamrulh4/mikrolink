import { AlertTriangle, Settings, UserMinus, UserPlus } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  {
    id: 1,
    type: "user_added",
    message: "New user registered: john.doe@email.com",
    time: "2 minutes ago",
    icon: UserPlus,
    color: "text-green-600",
  },
  {
    id: 2,
    type: "user_removed",
    message: "User account suspended: jane.smith@email.com",
    time: "15 minutes ago",
    icon: UserMinus,
    color: "text-red-600",
  },
  {
    id: 3,
    type: "settings",
    message: "Bandwidth limit updated for Premium plan",
    time: "1 hour ago",
    icon: Settings,
    color: "text-blue-600",
  },
  {
    id: 4,
    type: "alert",
    message: "High bandwidth usage detected in Zone A",
    time: "2 hours ago",
    icon: AlertTriangle,
    color: "text-orange-600",
  },
]

export function RecentActivity() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-foreground text-sm sm:text-base">
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-2 sm:space-x-3">
            <Avatar className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0">
              <AvatarFallback className="bg-muted">
                <activity.icon className={`h-3 w-3 sm:h-4 sm:w-4 ${activity.color}`} />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-foreground leading-tight">
                {activity.message}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
