import { DashboardHeader } from "./widgets/dashboard-header"
import { QuickActions } from "./widgets/quick-actions"
import { RecentActivity } from "./widgets/recent-activity"
import { StatsGrid } from "./widgets/stats-grid"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Monitor your network and manage users efficiently</p>
        </div>

        <StatsGrid />

      

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RecentActivity />
          <QuickActions />
        </div>
      </main>
    </div>
  )
}
