import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCustomersStore } from "@/stores/customers-store"

export function ViewCustomersDialog() {
  const { isViewCustomerDialogOpen, setIsViewCustomerDialogOpen, selectedCustomer } =
    useCustomersStore()

  return (
    <Dialog open={isViewCustomerDialogOpen} onOpenChange={setIsViewCustomerDialogOpen}>
      <DialogContent className="flex flex-col   h-[90vh] !max-w-[90vw] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{selectedCustomer.name}</DialogTitle>
          <DialogDescription>{selectedCustomer.username}</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="details">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
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
          </TabsContent>
          <TabsContent value="history">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 rounded-lg border bg-card text-card-foreground shadow-sm p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block">🧾</span>
                  <span className="font-semibold text-lg">Payment History</span>
                </div>
                <span className="text-sm text-muted-foreground mb-2 block">
                  Recent payment transactions
                </span>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 text-left">Date</th>
                      <th className="py-2 text-left">Month</th>
                      <th className="py-2 text-left">Amount</th>
                      <th className="py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Replace with dynamic payment history */}
                    <tr>
                      <td className="py-2">Sep 21, 2025</td>
                      <td className="py-2">SEPTEMBER</td>
                      <td className="py-2">BDT 0.00</td>
                      <td className="py-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                          Pending
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-full md:max-w-xs rounded-lg border bg-card text-card-foreground shadow-sm p-4">
                <div className="font-semibold text-lg mb-2">Quick Actions</div>
                <form className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Billing Month
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Month" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SEPTEMBER">September</SelectItem>
                        <SelectItem value="OCTOBER">October</SelectItem>
                        {/* Add more months as needed */}
                      </SelectContent>
                    </Select>
                    <span className="text-xs text-red-500">Required</span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Payment Method
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CASH">CASH</SelectItem>
                        <SelectItem value="BKASH">BKASH</SelectItem>
                        <SelectItem value="NAGAD">NAGAD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Amount</label>
                    <Input type="number" className="w-full" value={500} />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="markAsPaid" />
                    <label htmlFor="markAsPaid" className="text-sm">
                      Mark as paid
                    </label>
                  </div>
                  <Button type="submit" className="w-full mt-2">
                    Add Payment
                  </Button>
                </form>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
