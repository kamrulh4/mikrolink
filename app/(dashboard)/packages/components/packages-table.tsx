"use client"

import { useDataTable } from "@/components/data-table/use-data-table"
import packages from "@/data/packages.json"
import { columns } from "./columns"
import { DataTableToolbar } from "./data-table-toolbar"
import { UpsertPackagesDialog } from "./upsert-packages-dialog"

export function PackagesTable() {
  const { table, render } = useDataTable({ columns, data: packages.results })

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} />
      {render}

      <UpsertPackagesDialog />
    </div>
  )
}
