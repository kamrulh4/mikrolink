"use client"

import { useDataTable } from "@/components/data-table/use-data-table"
import { useGetCustomerList } from "@/hooks/rq/use-customers-query"
import { columns } from "./columns"
import { CustomersTableToolbar } from "./customers-table-toolbar"
import { UpsertCustomersDialog } from "./upsert-customers-dialog"
import { ViewCustomersDialog } from "./view-customers-dialog"

export function CustomersTable() {
  const { data: customersData, isLoading } = useGetCustomerList()

  const { table, render } = useDataTable({
    columns,
    data: customersData?.results,
    loading: isLoading,
  })

  return (
    <div className="space-y-4">
      <CustomersTableToolbar table={table} />
      {render}
      <UpsertCustomersDialog />
      <ViewCustomersDialog />
    </div>
  )
}
