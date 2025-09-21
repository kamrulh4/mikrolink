"use client"

import { MobileDataTable } from "@/components/data-table/mobile-data-table"
import { useDataTable } from "@/components/data-table/use-data-table"
import { useGetPaymentList } from "@/hooks/rq/use-payment-query"
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
      <MobileDataTable
        columns={columns}
        data={paymentsData?.results}
        loading={isLoading}
        title="Payments"
        description="Manage your payments"
        table={table}
        render={render}
      />

      <PaymentsUpsertDialog />
      <ViewPaymentsDialog />
    </div>
  )
}
