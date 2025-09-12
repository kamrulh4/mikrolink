import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { usePackagesStore } from "@/stores/packages-store"

export function ViewPackagesDialog() {
  const { isViewPackageDialogOpen, setIsViewPackageDialogOpen, selectedPackage } =
    usePackagesStore()

  return (
    <Dialog open={isViewPackageDialogOpen} onOpenChange={setIsViewPackageDialogOpen}>
      <DialogContent className="h-[90vh] !max-w-[90vw] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{selectedPackage.name}</DialogTitle>
          <DialogDescription>{selectedPackage.description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
