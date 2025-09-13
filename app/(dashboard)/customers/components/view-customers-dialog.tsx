import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
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

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Phone:</span>
            <p>{selectedCustomer.phone}</p>
          </div>
          <div>
            <span className="font-medium">Address:</span>
            <p>{selectedCustomer.address || "N/A"}</p>
          </div>
          <div>
            <span className="font-medium">NID:</span>
            <p>{selectedCustomer.nid}</p>
          </div>
          {/* <div>
                <span className="font-medium">Package:</span>
                <p>
                  {selectedCustomer.is_free ? "Free Package" : `Package #${selectedCustomer.package_id}`}
                </p>
              </div> */}
          <div>
            <span className="font-medium">Connection Start:</span>
            <p>{selectedCustomer.connection_start_date || "Not set"}</p>
          </div>
          <div>
            <span className="font-medium mr-2">Status:</span>
            <Badge variant={selectedCustomer.is_active ? "default" : "secondary"}>
              {selectedCustomer.is_active ? "Active" : "Inactive"}
            </Badge>
          </div>
          <div>
            <span className="font-medium">IP Address:</span>
            <p>{selectedCustomer.ip_address}</p>
          </div>
          <div>
            <span className="font-medium">MAC Address:</span>
            <p>{selectedCustomer.mac_address}</p>
          </div>
          <div>
            <span className="font-medium">Username:</span>
            <p>{selectedCustomer.username}</p>
          </div>
          <div>
            <span className="font-medium">Password:</span>
            <p className="font-mono tracking-wider">{selectedCustomer.password}</p>
          </div>
          <div>
            <span className="font-medium mr-2">Connection Type:</span>
            <Badge>{selectedCustomer.connection_type}</Badge>
          </div>
        </div>

        {selectedCustomer.credentials && (
          <>
            <Separator />
            <div>
              <span className="font-medium">Credentials:</span>
              <pre className="bg-muted rounded-md p-2 text-xs overflow-x-auto">
                {JSON.stringify(selectedCustomer.credentials, null, 2)}
              </pre>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
