import { Metadata } from "next"
import { Suspense } from "react"
import { PackagesTable } from "./components/packages-table"

export const metadata: Metadata = {
  title: "Packages",
  description: "Manage your packages",
}

export default async function PackagesPage() {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <PackagesTable />
    </Suspense>
  )
}
