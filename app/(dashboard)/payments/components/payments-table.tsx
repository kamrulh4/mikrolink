"use client"

import { useDataTable } from "@/components/data-table/use-data-table"
import { useGetPaymentList } from "@/hooks/rq/auth/use-payment-query"
import { columns } from "./columns"
import { PaymentsTableToolbar } from "./payments-table-toolbar"
import { PaymentsUpsertDialog } from "./payments-upsert-dialog"
import { ViewPaymentsDialog } from "./view-payments-dialog"

export function PaymentsTable() {
  const { data: paymentsData, isLoading } = useGetPaymentList()

  const { table, render } = useDataTable({
    columns,
    data: paymentsData?.results,
    loading: isLoading,
  })

  return (
    <div className="space-y-4">
      <PaymentsTableToolbar table={table} />
      {render}

      <PaymentsUpsertDialog />
      <ViewPaymentsDialog />
    </div>
  )
}
