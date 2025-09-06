"use client"

import { useDataTable } from "@/components/data-table/use-data-table"
import customers from "@/data/customers.json"
import { columns } from "./columns"
import { DataTableToolbar } from "./customers-table-toolbar"
import { UpsertCustomersDialog } from "./upsert-customers-dialog"

export function CustomersTable() {
  const { table, render } = useDataTable({ columns, data: customers.results })

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} />
      {render}

      <UpsertCustomersDialog />
    </div>
  )
}
