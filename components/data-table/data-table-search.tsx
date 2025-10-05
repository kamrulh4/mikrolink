"use client"

import { Table } from "@tanstack/react-table"
import * as React from "react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type Props<TData> = {
  table: Table<TData>
  searchField: string
  delay?: number
  className?: string
}

export function DataTableSearch<TData>({
  table,
  searchField,
  delay = 300,
  className,
}: Props<TData>) {
  const [inputValue, setInputValue] = React.useState(
    (table.getColumn(searchField)?.getFilterValue() as string) ?? "",
  )

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      table.getColumn(searchField)?.setFilterValue(inputValue)
    }, delay)

    return () => clearTimeout(timeout)
  }, [inputValue, searchField, table])

  return (
    <Input
      // placeholder={`Filter by ${searchField.toLowerCase()}...`}

      placeholder="Search..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="h-8 w-full md:w-[250px]"
    />
  )
}
