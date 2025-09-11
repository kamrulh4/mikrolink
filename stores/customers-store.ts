import { createStore } from "stan-js"

import customers from "@/data/customers.json"

export const { useStore: useCustomersStore, reset: resetCustomersStore } = createStore({
  isViewCustomerDialogOpen: false,
  isUpsertCustomerDialogOpen: false,
  customerMutationType: "" as "add" | "edit",
  selectedCustomer: {} as (typeof customers.results)[0],
})
