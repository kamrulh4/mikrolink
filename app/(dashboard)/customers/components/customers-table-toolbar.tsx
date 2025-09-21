"use client"

import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"
import * as React from "react"
import { DataTableFacetedFilter } from "@/components/data-table/data-table-faceted-filter"
import { DataTableSearch } from "@/components/data-table/data-table-search"
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const { setCustomerMutationType, setIsUpsertCustomerDialogOpen } = useCustomersStore()
  const [searchField, setSearchField] = React.useState("username")

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
      <div className="flex flex-1 items-center space-x-2 w-full sm:w-auto">
        <Select defaultValue="username" onValueChange={setSearchField}>
          <SelectTrigger size="sm" className="w-24 sm:w-auto">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="username">Username</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="phone">Phone</SelectItem>
          </SelectContent>
        </Select>

        <DataTableSearch table={table} searchField={searchField} />

        <div className="hidden sm:flex items-center space-x-2">
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
      </div>

      <div className="flex items-center space-x-2 w-full sm:w-auto">
        <Button
          onClick={() => {
            setIsUpsertCustomerDialogOpen(true)
            setCustomerMutationType("add")
          }}
          size="sm"
          className="flex-1 sm:flex-none"
        >
          Add Customer
        </Button>

        <DataTableViewOptions table={table} />
      </div>
    </div>
  )
}
