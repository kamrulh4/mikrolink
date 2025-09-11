"use client"

import { Row } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import React, { useState } from "react"
import { DeleteAlertDialog } from "@/components/core/delete-alert-dialog"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useCustomersStore } from "@/stores/customers-store"
import { customerStatus } from "../data/data"

interface CustomersTableRowActionsProps {
  row: Row<any>
}

export function CustomersTableRowActions({ row }: CustomersTableRowActionsProps) {
  const {
    setCustomerMutationType,
    setIsUpsertCustomerDialogOpen,
    setIsViewCustomerDialogOpen,
    setSelectedCustomer,
  } = useCustomersStore()

  const [position, setPosition] = React.useState("true")

  const [open, setOpen] = useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
            <MoreHorizontal />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem
            onClick={() => {
              setIsViewCustomerDialogOpen(true)
              setSelectedCustomer(row.original)
            }}
          >
            View
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setIsUpsertCustomerDialogOpen(true)
              setCustomerMutationType("edit")
            }}
          >
            Edit
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={(val) => {
                    setPosition(val)
                  }}
                >
                  {customerStatus.map((s) => (
                    <DropdownMenuRadioItem value={s.value}>
                      <s.icon /> {s.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              setOpen(true)
            }}
          >
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteAlertDialog
        open={open}
        setOpen={setOpen}
        resource="customers"
        onDelete={() => {
          console.log("delete vaya")
        }}
      />
    </>
  )
}
