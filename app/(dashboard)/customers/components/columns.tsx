"use client"

import { ColumnDef } from "@tanstack/react-table"
import { BadgeCheckIcon, BadgeXIcon } from "lucide-react"
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
// import { Checkbox } from "@/components/ui/checkbox"
import { cn, generateAvatarUrl, getInitials } from "@/lib/utils"
import customers from "../../../../data/customers.json"
// import { accessLevels, categories } from "../data/data"
import { CustomersTableRowActions } from "./customers-table-row-actions"

type Customer = (typeof customers.results)[0]

export const columns: ColumnDef<Customer>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />,
    cell: ({ row }) => <div className="w-[10px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "username",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 items-center">
          <Avatar className="rounded-md">
            <AvatarImage src={generateAvatarUrl(row.original.username)} />
            <AvatarFallback className="text-xs font-light">
              {getInitials(row.original.name)}
            </AvatarFallback>
          </Avatar>

          <div>
            <div className="max-w-[500px] truncate font-medium">{row.original.name}</div>
            <div className="max-w-[500px] truncate text-xs text-slate-500">
              {row.original.username}
            </div>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "phone",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Address" />,
    cell: ({ row }) => {
      return (
        <div>
          <div className="max-w-[500px] truncate font-medium">{row.original.address}</div>
          <div className="max-w-[500px] truncate text-xs text-slate-500">
            {row.original.phone}
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Package" />,
    cell: ({ row }) => {
      return (
        <div>
          <div className="max-w-[500px] truncate font-medium">
            {row.original.package.name}
          </div>
          <div className="max-w-[500px] truncate text-xs text-slate-500">
            {row.original.package.price} BDT
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "connection_type",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Connection" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "is_active",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      return (
        <Badge
          variant="secondary"
          className={cn(
            row.original.is_active
              ? "bg-emerald-500 text-white dark:bg-emerald-600"
              : "bg-red-500 text-white dark:bg-red-600",
          )}
        >
          {row.original.is_active ? (
            <>
              <BadgeCheckIcon /> Active
            </>
          ) : (
            <>
              <BadgeXIcon /> Inactive
            </>
          )}
        </Badge>
      )
    },
    filterFn: (row, id, value) => {
      const isActive = row.getValue(id) ? "true" : "false"

      return value.includes(isActive)
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CustomersTableRowActions row={row} />,
  },
]
