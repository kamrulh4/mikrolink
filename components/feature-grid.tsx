import { Users, Wifi, BarChart3, Settings } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "User Management",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: Wifi,
    title: "Bandwidth Monitor",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    icon: Settings,
    title: "System Config",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
]

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
          <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${feature.bgColor}`}>
            <feature.icon className={`h-5 w-5 ${feature.color}`} />
          </div>
          <span className="text-sm font-medium text-foreground">{feature.title}</span>
        </div>
      ))}
    </div>
  )
}
