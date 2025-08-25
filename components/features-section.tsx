import { Users, BarChart3, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Users,
    title: "User Management",
    description: "Manage internet subscribers, accounts, and service plans from a centralized dashboard.",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "Monitor bandwidth usage, track data consumption, and generate detailed usage reports.",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    icon: Settings,
    title: "Network Control",
    description: "Configure network settings, manage bandwidth allocation, and control user access.",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Why Choose Mikrolink?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional tools designed specifically for internet service providers to efficiently manage their
            subscribers and network operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg bg-card/50 backdrop-blur hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bgColor} mx-auto`}
                >
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
