import { QuickActions } from "./widgets/quick-actions"
import { RecentActivity } from "./widgets/recent-activity"
import { StatsGrid } from "./widgets/stats-grid"

export default function Page() {
  return (
    <main className="container mx-auto space-y-4 px-2 sm:px-4">
      <StatsGrid />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
        <RecentActivity />
        <QuickActions />
      </div>
    </main>
  )
}
