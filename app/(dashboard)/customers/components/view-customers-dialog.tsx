import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useCustomersStore } from "@/stores/customers-store"
import { ViewCustomerTabs } from "./view-customer-tabs"

export function ViewCustomersDialog() {
  const { isViewCustomerDialogOpen, setIsViewCustomerDialogOpen, selectedCustomer } =
    useCustomersStore()

  return (
    <Dialog open={isViewCustomerDialogOpen} onOpenChange={setIsViewCustomerDialogOpen}>
      <DialogContent className="flex flex-col h-[90vh] !max-w-[95vw] lg:!max-w-[70vw] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{selectedCustomer.name}</DialogTitle>
          <DialogDescription>{selectedCustomer.username}</DialogDescription>
        </DialogHeader>
        <ViewCustomerTabs />
      </DialogContent>
    </Dialog>
  )
}
