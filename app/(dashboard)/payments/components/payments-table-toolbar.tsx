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
import { usePaymentsStore } from "@/stores/payments-store"
import { months, paymentMethods, paymentStatuses } from "../data/data"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function PaymentsTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const { setPaymentMutationType, setIsUpsertPaymentDialogOpen } = usePaymentsStore()
  const [searchField, setSearchField] = React.useState("customer")

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Select value={searchField} onValueChange={setSearchField}>
          <SelectTrigger size="sm">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="customer">Customer</SelectItem>
            <SelectItem value="entry_by">Collected By</SelectItem>
          </SelectContent>
        </Select>

        <DataTableSearch table={table} searchField={searchField} />

        {table.getColumn("paid") && (
          <DataTableFacetedFilter
            column={table.getColumn("paid")}
            title="Status"
            options={paymentStatuses}
          />
        )}
        {table.getColumn("payment_method") && (
          <DataTableFacetedFilter
            column={table.getColumn("payment_method")}
            title="Method"
            options={paymentMethods}
          />
        )}

        {table.getColumn("billing_month") && (
          <DataTableFacetedFilter
            column={table.getColumn("billing_month")}
            title="Month"
            options={months}
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
          setIsUpsertPaymentDialogOpen(true)
          setPaymentMutationType("add")
        }}
        size="sm"
        className="mr-2"
      >
        Add Payment
      </Button>

      <DataTableViewOptions table={table} />
    </div>
  )
}
