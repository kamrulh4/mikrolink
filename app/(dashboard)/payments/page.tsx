import { Metadata } from "next"
import { Suspense } from "react"
import { PaymentsTable } from "./components/payments-table"

export const metadata: Metadata = {
  title: "Payments",
  description: "Manage your payments",
}

export default async function PaymentsPage() {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <PaymentsTable />
    </Suspense>
  )
}
