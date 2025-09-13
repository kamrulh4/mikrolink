"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"
import { Package } from "@/types/packages"
import { PackagesTableRowActions } from "./packages-table-row-actions"

export const columns: ColumnDef<Package>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />,
    cell: ({ row }) => <div className="w-[10px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
  },
  {
    accessorKey: "speed_mbps",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Speed (mbps)" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("speed_mbps")}</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Price (BDT)" />,
  },
  {
    accessorKey: "description",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
  },

  {
    id: "actions",
    cell: ({ row }) => <PackagesTableRowActions row={row} />,
  },
]
