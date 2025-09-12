"use client"

import { useDataTable } from "@/components/data-table/use-data-table"
import users from "@/data/users.json"
import { columns } from "./columns"
import { UpsertUsersDialog } from "./upsert-users-dialog"
import { UsersTableToolbar } from "./users-table-toolbar"
import { ViewUsersDialog } from "./view-users-dialog"

export function UsersTable() {
  const { table, render } = useDataTable({ columns, data: users.results })

  return (
    <div className="space-y-4">
      <UsersTableToolbar table={table} />
      {render}

      <UpsertUsersDialog />
      <ViewUsersDialog />
    </div>
  )
}
