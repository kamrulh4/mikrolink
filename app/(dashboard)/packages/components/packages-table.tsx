"use client"

import { useDataTable } from "@/components/data-table/use-data-table"
import { useGetPackageList } from "@/hooks/rq/use-packages-query"
import { columns } from "./columns"
import { PackagesTableToolbar } from "./packages-table-toolbar"
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
      <PackagesTableToolbar table={table} />
      {render}

      <UpsertPackagesDialog />
      <ViewPackagesDialog />
    </div>
  )
}
