import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { usePaymentsStore } from "@/stores/payments-store"

export function ViewPaymentsDialog() {
  const { isViewPaymentDialogOpen, setIsViewPaymentDialogOpen, selectedPayment } =
    usePaymentsStore()

  return (
    <Dialog open={isViewPaymentDialogOpen} onOpenChange={setIsViewPaymentDialogOpen}>
      <DialogContent className="h-[90vh] !max-w-[95vw] lg:!max-w-[70vw] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{selectedPayment.customer?.name}</DialogTitle>
          <DialogDescription>{selectedPayment.customer?.address}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
