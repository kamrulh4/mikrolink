"use client"

import { useDataTable } from "@/components/data-table/use-data-table"
import payments from "@/data/payments.json"
import { columns } from "./columns"
import { PaymentsTableToolbar } from "./payments-table-toolbar"
import { PaymentsUpsertDialog } from "./payments-upsert-dialog"

export function PaymentsTable() {
  const { table, render } = useDataTable({ columns, data: payments.results })

  return (
    <div className="space-y-4">
      <PaymentsTableToolbar table={table} />
      {render}

      <PaymentsUpsertDialog />
    </div>
  )
}
