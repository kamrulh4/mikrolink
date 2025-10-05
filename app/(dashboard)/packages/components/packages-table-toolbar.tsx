"use client"

import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"
import * as React from "react"
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
import { usePackagesStore } from "@/stores/packages-store"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function PackagesTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const { setPackageMutationType, setIsUpsertPackageDialogOpen } = usePackagesStore()
  const [searchField, setSearchField] = React.useState("name")

  return (
    <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-2">
      <div className="flex flex-1 items-center flex-wrap gap-2">
        <Select defaultValue="name" onValueChange={setSearchField}>
          <SelectTrigger size="sm" className="w-full md:w-[120px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="speed_mbps">Speed</SelectItem>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="description">Description</SelectItem>
          </SelectContent>
        </Select>

        <DataTableSearch table={table} searchField={searchField} />

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
          setIsUpsertPackageDialogOpen(true)
          setPackageMutationType("add")
        }}
        size="sm"
        className="md:mr-2"
      >
        Add Package
      </Button>

      <DataTableViewOptions table={table} />
    </div>
  )
}
