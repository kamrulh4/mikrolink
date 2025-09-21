"use client"

import { MobileDataTable } from "@/components/data-table/mobile-data-table"
import { useDataTable } from "@/components/data-table/use-data-table"
import { useGetPackageList } from "@/hooks/rq/use-packages-query"
import { columns } from "./columns"
import { DataTableToolbar } from "./data-table-toolbar"
import { UpsertPackagesDialog } from "./upsert-packages-dialog"
import { ViewPackagesDialog } from "./view-packages-dialog"

export function PackagesTable() {
  const { data: packageData, isLoading } = useGetPackageList()

  const { table, render } = useDataTable({
    columns,
    data: packageData?.results,
    loading: isLoading,
  })

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} />
      <MobileDataTable
        columns={columns}
        data={packageData?.results}
        loading={isLoading}
        title="Packages"
        description="Manage your packages"
        table={table}
        render={render}
      />

      <UpsertPackagesDialog />
      <ViewPackagesDialog />
    </div>
  )
}
