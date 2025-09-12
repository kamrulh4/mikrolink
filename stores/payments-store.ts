import { createStore } from "stan-js"

import payments from "@/data/payments.json"

export const { useStore: usePaymentsStore, reset: resetPaymentsStore } = createStore({
  isViewPaymentDialogOpen: false,
  isUpsertPaymentDialogOpen: false,
  paymentMutationType: "" as "add" | "edit",
  selectedPayment: {} as (typeof payments.results)[0],
})
