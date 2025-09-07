import { Metadata } from "next"
import { Suspense } from "react"
import { UsersTable } from "./components/users-table"

export const metadata: Metadata = {
  title: "Users",
  description: "Manage your users",
}

export default async function UsersPage() {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <UsersTable />
    </Suspense>
  )
}
