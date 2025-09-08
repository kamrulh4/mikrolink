import { createStore } from "stan-js"

export const { useStore: usePaymentsStore, reset: resetPaymentsStore } = createStore({
  isUpsertPaymentDialogOpen: false,
  paymentMutationType: "" as "add" | "edit",
  selectedPayment: {} as any,
})
