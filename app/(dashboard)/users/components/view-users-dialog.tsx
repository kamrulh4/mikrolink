import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useUsersStore } from "@/stores/users-store"

export function ViewUsersDialog() {
  const { isViewUserDialogOpen, setIsViewUserDialogOpen, selectedUser } = useUsersStore()

  return (
    <Dialog open={isViewUserDialogOpen} onOpenChange={setIsViewUserDialogOpen}>
      <DialogContent className="h-[90vh] max-w-[100vw] rounded-none md:rounded-lg overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {selectedUser.first_name} {selectedUser.last_name}
          </DialogTitle>
          <DialogDescription>{selectedUser.email}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
