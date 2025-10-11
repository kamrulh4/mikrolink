"use client"

import { useDataTable } from "@/components/data-table/use-data-table"
import { useGetUserList } from "@/hooks/rq/use-users-query"
import { columns } from "./columns"
import { UpsertUsersDialog } from "./upsert-users-dialog"
import { UsersTableToolbar } from "./users-table-toolbar"
import { ViewUsersDialog } from "./view-users-dialog"

export function UsersTable() {
  const { data: usersData, isLoading } = useGetUserList()

  const { table, render } = useDataTable({
    columns,
    data: usersData?.results!,
    loading: isLoading,
  })

  return (
    <div className="space-y-4">
      <UsersTableToolbar table={table} />
      {render}

      <UpsertUsersDialog />
      <ViewUsersDialog />
    </div>
  )
}
