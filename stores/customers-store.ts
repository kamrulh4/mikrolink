import { createStore } from "stan-js"

export const { useStore: useCustomersStore, reset: resetCustomersStore } = createStore({
  isUpsertCustomerDialogOpen: false,
  customerMutationType: "" as "add" | "edit",
  selectedCustomer: {} as any,
})
