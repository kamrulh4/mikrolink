import { Metadata } from "next"
import { Suspense } from "react"
import { CustomersTable } from "./components/customers-table"

export const metadata: Metadata = {
  title: "Customers",
  description: "Manage your customers",
}

export default async function CustomersPage() {
  return (
    <div>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <CustomersTable />
      </Suspense>
    </div>
  )
}
