"use client"

import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"
import * as React from "react"
import { DataTableFacetedFilter } from "@/components/data-table/data-table-faceted-filter"
import { DataTableSearch } from "@/components/data-table/data-table-search"
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useSession } from "@/hooks/rq/use-auth-query"
import { useUsersStore } from "@/stores/users-store"
import { genders, kinds } from "../data/data"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function UsersTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const { setUserMutationType, setIsUpsertUserDialogOpen } = useUsersStore()
  const [searchField, setSearchField] = React.useState("first_name")

  const { data: session } = useSession()

  return (
    <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-2">
      <div className="flex flex-1 items-center gap-2 flex-wrap">
        <Select defaultValue="first_name" onValueChange={setSearchField}>
          <SelectTrigger size="sm" className="w-full md:w-[142px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="first_name">Name</SelectItem>
            <SelectItem value="email">Email & Phone</SelectItem>
          </SelectContent>
        </Select>

        <DataTableSearch table={table} searchField={searchField} />

        {table.getColumn("gender") && (
          <DataTableFacetedFilter
            column={table.getColumn("gender")}
            title="Gender"
            options={genders}
          />
        )}
        {table.getColumn("kind") && (
          <DataTableFacetedFilter
            column={table.getColumn("kind")}
            title="Kind"
            options={kinds}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>

      {session?.kind === "ADMIN" && (
        <Button
          onClick={() => {
            setIsUpsertUserDialogOpen(true)
            setUserMutationType("add")
          }}
          size="sm"
          className="md:mr-2"
        >
          Add User
        </Button>
      )}

      <DataTableViewOptions table={table} />
    </div>
  )
}
