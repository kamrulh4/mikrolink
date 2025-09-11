import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useCustomersStore } from "@/stores/customers-store"

export function ViewCustomersDialog() {
  const { isViewCustomerDialogOpen, setIsViewCustomerDialogOpen, selectedCustomer } =
    useCustomersStore()

  return (
    <Dialog open={isViewCustomerDialogOpen} onOpenChange={setIsViewCustomerDialogOpen}>
      <DialogContent className="h-[90vh] !max-w-[90vw] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{selectedCustomer.name}</DialogTitle>
          <DialogDescription>{selectedCustomer.username}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
