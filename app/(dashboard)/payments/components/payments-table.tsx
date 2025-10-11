"use client"

import { DataTableCardView } from "@/components/data-table/data-table-card-view"
import { useDataTable } from "@/components/data-table/use-data-table"
import { useGetPaymentList } from "@/hooks/rq/use-payment-query"
import { generateAvatarUrl } from "@/lib/utils"
import { columns } from "./columns"
import { PaymentsTableRowActions } from "./payments-table-row-actions"
import { PaymentsTableToolbar } from "./payments-table-toolbar"
import { PaymentsUpsertDialog } from "./payments-upsert-dialog"
import { ViewPaymentsDialog } from "./view-payments-dialog"

export function PaymentsTable() {
  const { data: paymentsData, isLoading } = useGetPaymentList()

  const { table, render } = useDataTable({
    columns,
    data: paymentsData?.results!,
    loading: isLoading,
  })

  return (
    <div className="space-y-4">
      <PaymentsTableToolbar table={table} />

      <div className="block md:hidden">
        <DataTableCardView
          loading={isLoading}
          table={table}
          mapRow={(row) => {
            const p = row.original

            const collectorName = `${p.entry_by?.last_name || "unknown"}`
            return {
              title: p.customer.username || p.customer.name,
              description: `Collected By ${collectorName} · ${p.amount} ${p.payment_method}`,
              avatar: generateAvatarUrl(p.customer.username || p.customer.name),
              uid: p.uid,
            }
          }}
          renderRowActions={(row) => <PaymentsTableRowActions row={row} />}
        />
      </div>

      <div className="hidden md:block">{render}</div>

      <PaymentsUpsertDialog />
      <ViewPaymentsDialog />
    </div>
  )
}
