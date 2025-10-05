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
import { useCustomersStore } from "@/stores/customers-store"
import { connectionType, customerStatus } from "../data/data"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function CustomersTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const { setCustomerMutationType, setIsUpsertCustomerDialogOpen } = useCustomersStore()
  const [searchField, setSearchField] = React.useState("username")

  return (
    <div className="flex gap-2 md:items-center md:justify-between flex-col md:flex-row">
      <div className="flex flex-1 items-center gap-2 flex-wrap">
        <Select defaultValue="username" onValueChange={setSearchField}>
          <SelectTrigger size="sm" className="w-full md:w-[120px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="username">Username</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="phone">Phone</SelectItem>
          </SelectContent>
        </Select>

        <DataTableSearch table={table} searchField={searchField} />

        {table.getColumn("is_active") && (
          <DataTableFacetedFilter
            column={table.getColumn("is_active")}
            title="Status"
            options={customerStatus}
          />
        )}
        {table.getColumn("connection_type") && (
          <DataTableFacetedFilter
            column={table.getColumn("connection_type")}
            title="Connection"
            options={connectionType}
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

      <Button
        onClick={() => {
          setIsUpsertCustomerDialogOpen(true)
          setCustomerMutationType("add")
        }}
        size="sm"
        className="mr-2"
      >
        Add Customer
      </Button>

      <DataTableViewOptions table={table} />
    </div>
  )
}
