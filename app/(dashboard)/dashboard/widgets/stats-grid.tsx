import {
  Activity,
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Users,
  Wifi,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "Total Users",
    value: "2,847",
    change: "+12%",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    trend: "up",
  },
  {
    title: "Active Connections",
    value: "2,234",
    change: "+8%",
    icon: Wifi,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    trend: "up",
  },
  {
    title: "Bandwidth Usage",
    value: "847 GB",
    change: "+23%",
    icon: TrendingUp,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    trend: "up",
  },
  {
    title: "Monthly Revenue",
    value: "$12,847",
    change: "+15%",
    icon: DollarSign,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    trend: "up",
  },
  {
    title: "Network Uptime",
    value: "99.8%",
    change: "+0.2%",
    icon: Activity,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    trend: "up",
  },
  {
    title: "Support Tickets",
    value: "23",
    change: "-18%",
    icon: AlertTriangle,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    trend: "down",
  },
]

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 sm:pb-3">
            <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground leading-tight">
              {stat.title}
            </CardTitle>
            <div className={`p-1.5 sm:p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-3 w-3 sm:h-4 sm:w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent className="pb-3 sm:pb-4">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1 leading-tight">
              {stat.value}
            </div>
            <p
              className={`text-xs mt-1 flex items-center gap-1 ${
                stat.trend === "up" ? "text-green-600" : "text-red-600"
              }`}
            >
              <span
                className={`inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${stat.trend === "up" ? "bg-green-500" : "bg-red-500"}`}
              ></span>
              <span className="hidden sm:inline">{stat.change} from last month</span>
              <span className="sm:hidden">{stat.change}</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
