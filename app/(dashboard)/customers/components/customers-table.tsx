"use client"

import { useDataTable } from "@/components/data-table/use-data-table"
import customers from "@/data/customers.json"
import { useGetCustomerList } from "@/hooks/rq/use-customer-query"
import { columns } from "./columns"
import { DataTableToolbar } from "./customers-table-toolbar"
import { UpsertCustomersDialog } from "./upsert-customers-dialog"
import { ViewCustomersDialog } from "./view-customers-dialog"

export function CustomersTable() {
  const { data: customersData } = useGetCustomerList()

  const { table, render } = useDataTable({ columns, data: customers.results })

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} />
      {render}
      <UpsertCustomersDialog />
      <ViewCustomersDialog />
    </div>
  )
}
