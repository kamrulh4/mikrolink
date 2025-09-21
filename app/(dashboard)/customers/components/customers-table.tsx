"use client"

import { MobileDataTable } from "@/components/data-table/mobile-data-table"
import { useDataTable } from "@/components/data-table/use-data-table"
import { useGetCustomerList } from "@/hooks/rq/use-customers-query"
import { columns } from "./columns"
import { DataTableToolbar } from "./customers-table-toolbar"
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
      <DataTableToolbar table={table} />
      <MobileDataTable
        columns={columns}
        data={customersData?.results}
        loading={isLoading}
        title="Customers"
        description="Manage your customers"
        table={table}
        render={render}
      />
      <UpsertCustomersDialog />
      <ViewCustomersDialog />
    </div>
  )
}
