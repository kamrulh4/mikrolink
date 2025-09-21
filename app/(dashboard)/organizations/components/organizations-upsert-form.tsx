"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod/v3"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  useCreateOrganization,
  useUpdateOrganization,
} from "@/hooks/rq/use-organizations-query"
import { useOrganizationsStore } from "@/stores/organizations-store"

export const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone is required").max(20),
  email: z.string().email("Invalid email").max(254),
  website: z.string().url("Invalid URL").max(200).optional(),
  subscription: z.string().optional(),
  subscription_status: z.enum(["ACTIVE", "EXPIRED", "CANCELLED", "PENDING"]).optional(),
  allowed_customer: z.number().min(0).optional(),
  total_customer: z.number().min(0).optional(),
  router_ip: z.string().max(64).optional(),
  router_username: z.string().max(150).optional(),
  router_password: z.string().max(128).optional(),
  router_port: z.number().min(1).max(65535).optional(),
  router_secret: z.string().max(150).optional(),
  router_ssl: z.boolean().optional(),
})

export function OrganizationsUpsertForm() {
  const { setIsUpsertOrganizationDialogOpen, organizationMutationType } =
    useOrganizationsStore()

  const { mutate: triggerCreateOrganization, isPending: isCreateOrganizationPending } =
    useCreateOrganization()
  const { mutate: triggerUpdateOrganization, isPending: isUpdateOrganizationPending } =
    useUpdateOrganization()

  const { selectedOrganization } = useOrganizationsStore()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: selectedOrganization.name || "",
      address: selectedOrganization.address || "",
      phone: selectedOrganization.phone || "",
      email: selectedOrganization.email || "",
      website: selectedOrganization.website || "",
      subscription: selectedOrganization.subscription?.toString() || "",
      subscription_status: selectedOrganization.subscription_status || "PENDING",
      allowed_customer: selectedOrganization.allowed_customer || 0,
      total_customer: selectedOrganization.total_customer || 0,
      router_ip: selectedOrganization.router_ip || "",
      router_username: selectedOrganization.router_username || "",
      router_password: selectedOrganization.router_password || "",
      router_port: selectedOrganization.router_port || 8728,
      router_secret: selectedOrganization.router_secret || "",
      router_ssl: selectedOrganization.router_ssl || false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      ...values,
      subscription: values.subscription ? +values.subscription : null,
    }

    if (organizationMutationType === "edit") {
      triggerUpdateOrganization(
        { payload, uid: selectedOrganization.uid },
        {
          onSuccess: () => setIsUpsertOrganizationDialogOpen(false),
        },
      )
    } else {
      triggerCreateOrganization(payload, {
        onSuccess: () => setIsUpsertOrganizationDialogOpen(false),
      })
    }
  }

  const isLoading = isCreateOrganizationPending || isUpdateOrganizationPending

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Enter the basic details of the organization.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter organization name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Subscription Information */}
          <Card>
            <CardHeader>
              <CardTitle>Subscription Information</CardTitle>
              <CardDescription>
                Configure subscription and customer limits.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="subscription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subscription ID</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter subscription ID"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subscription_status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ACTIVE">Active</SelectItem>
                        <SelectItem value="EXPIRED">Expired</SelectItem>
                        <SelectItem value="CANCELLED">Cancelled</SelectItem>
                        <SelectItem value="PENDING">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="allowed_customer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Allowed Customers</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter allowed customers"
                        {...field}
                        onChange={(e) => field.onChange(+e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="total_customer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Customers</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter total customers"
                        {...field}
                        onChange={(e) => field.onChange(+e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Router Configuration */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Router Configuration</CardTitle>
              <CardDescription>
                Configure Mikrotik router settings for this organization.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="router_ip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Router IP</FormLabel>
                      <FormControl>
                        <Input placeholder="192.168.1.1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="router_port"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Router Port</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="8728"
                          {...field}
                          onChange={(e) => field.onChange(+e.target.value)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="router_username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Router Username</FormLabel>
                      <FormControl>
                        <Input placeholder="admin" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="router_password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Router Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="router_secret"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Router Secret</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter secret" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="router_ssl"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Use SSL</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end space-x-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsUpsertOrganizationDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading
              ? "Saving..."
              : organizationMutationType === "add"
                ? "Create"
                : "Update"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
