"use client"

import { Table } from "@tanstack/react-table"
import { SearchIcon } from "lucide-react"
import * as React from "react"

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

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
    <InputGroup className="w-full md:w-[260px] h-8">
      <InputGroupInput
        // placeholder={`Filter by ${searchField.toLowerCase()}...`}
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  )
}
