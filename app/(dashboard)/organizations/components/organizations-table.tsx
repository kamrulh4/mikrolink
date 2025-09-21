"use client"

import { useDataTable } from "@/components/data-table/use-data-table"
import { useGetOrganizationList } from "@/hooks/rq/use-organizations-query"
import { columns } from "./columns"
import { DataTableToolbar } from "./organizations-table-toolbar"
import { UpsertOrganizationsDialog } from "./upsert-organizations-dialog"
import { ViewOrganizationsDialog } from "./view-organizations-dialog"

export function OrganizationsTable() {
  const { data: organizationsData, isLoading } = useGetOrganizationList()

  const { table, render } = useDataTable({
    columns,
    data: organizationsData?.results,
    loading: isLoading,
  })

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} />
      {render}
      <UpsertOrganizationsDialog />
      <ViewOrganizationsDialog />
    </div>
  )
}
