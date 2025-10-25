import { createStore } from "stan-js"

import { Customer } from "@/types/customers"

export const { useStore: useCustomersStore, reset: resetCustomersStore } = createStore({
  isViewCustomerDialogOpen: false,
  isUpsertCustomerDialogOpen: false,
  customerMutationType: "" as "add" | "edit",
  selectedCustomer: {} as Customer,
})
