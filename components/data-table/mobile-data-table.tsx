"use client"

import { ColumnDef, Table } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTablePagination } from "./data-table-pagination"

interface MobileDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[] | undefined
  loading?: boolean
  title?: string
  description?: string
  table: Table<TData>
  render: React.ReactNode
}

export function MobileDataTable<TData, TValue>({
  columns,
  data,
  loading,
  title,
  description,
  table,
  render,
}: MobileDataTableProps<TData, TValue>) {
  // Always render loading state if loading - use the default table skeleton
  if (loading) {
    return <>{render}</>
  }

  // Always render empty state if no data
  if (!data || data.length === 0) {
    return (
      <div className="space-y-4">
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">No results found.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Mobile Card View */}
      <div className="block md:hidden">
        <div className="grid gap-3">
          {data.map((row, index) => {
            const cells = table.getRowModel().rows[index]?.getVisibleCells() || []
            const firstCell = cells[0]
            const secondCell = cells[1]
            const lastCell = cells[cells.length - 1]

            return (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      {firstCell && (
                        <div className="mb-2">
                          {firstCell.column.columnDef.cell &&
                          typeof firstCell.column.columnDef.cell === "function" ? (
                            firstCell.column.columnDef.cell(firstCell.getContext())
                          ) : (
                            <div className="font-medium text-sm">
                              {String(firstCell.getValue())}
                            </div>
                          )}
                        </div>
                      )}

                      {secondCell && (
                        <div className="mb-2">
                          {secondCell.column.columnDef.cell &&
                          typeof secondCell.column.columnDef.cell === "function" ? (
                            secondCell.column.columnDef.cell(secondCell.getContext())
                          ) : (
                            <div className="text-sm text-muted-foreground">
                              {String(secondCell.getValue())}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Show additional cells as badges or text */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {cells.slice(2, -1).map((cell, cellIndex) => {
                          const value = cell.getValue()
                          if (typeof value === "boolean") {
                            return (
                              <Badge
                                key={cellIndex}
                                variant={value ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {value ? "Active" : "Inactive"}
                              </Badge>
                            )
                          }
                          if (typeof value === "string" && value.length > 0) {
                            return (
                              <Badge
                                key={cellIndex}
                                variant="outline"
                                className="text-xs"
                              >
                                {value}
                              </Badge>
                            )
                          }
                          return null
                        })}
                      </div>
                    </div>

                    {/* Actions column */}
                    {lastCell && (
                      <div className="ml-2 flex-shrink-0">
                        {lastCell.column.columnDef.cell &&
                        typeof lastCell.column.columnDef.cell === "function" ? (
                          lastCell.column.columnDef.cell(lastCell.getContext())
                        ) : (
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block">{render}</div>

      {/* Pagination for mobile view only */}
      <div className="block md:hidden">
        <DataTablePagination table={table} />
      </div>
    </div>
  )
}
