import { QuickActions } from "./widgets/quick-actions"
import { RecentActivity } from "./widgets/recent-activity"
import { StatsGrid } from "./widgets/stats-grid"

export default function Page() {
  return (
    <main className="container mx-auto space-y-4">
      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentActivity />
        <QuickActions />
      </div>
    </main>
  )
}
