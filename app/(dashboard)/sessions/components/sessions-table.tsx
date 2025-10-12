"use client"

import { DataTableCardView } from "@/components/data-table/data-table-card-view"
import { useDataTable } from "@/components/data-table/use-data-table"
import { useGetActiveSessions } from "@/hooks/rq/use-sessions-query"
import { columns } from "./columns"
import { SessionsTableToolbar } from "./sessions-table-toolbar"

export function SessionsTable() {
  const { data: sessionsData, isLoading } = useGetActiveSessions()

  const { table, render } = useDataTable({
    columns,
    data: sessionsData?.sessions || [],
    loading: isLoading,
  })

  return (
    <div className="space-y-4">
      <SessionsTableToolbar table={table} />

      {/* mobile: card view */}
      <div className="block md:hidden">
        <DataTableCardView
          loading={isLoading}
          table={table}
          mapRow={(row) => {
            const session = row.original
            return {
              title: session.name,
              description: session.address,
              uid: session[".id"],
            }
          }}
          renderRowActions={() => null}
        />
      </div>

      {/* desktop: table */}
      <div className="hidden md:block">{render}</div>
    </div>
  )
}
