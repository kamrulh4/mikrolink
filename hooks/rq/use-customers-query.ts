import {
  mutationOptions,
  queryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query"
import { toast } from "sonner"
import { XiorError } from "xior"
import { httpV1 } from "@/lib/xior"
import { CreateCustomer, Customer, CustomerResponse } from "@/types/customers"
import { PaymentResponse } from "@/types/payments"

function getCustomerListOptions() {
  return queryOptions({
    queryKey: ["customers", "list"],
    queryFn: () => {
      return httpV1
        .request<CustomerResponse>({
          method: "GET",
          url: "/customers",
          params: {
            page: 1,
            page_size: 10_000,
          },
        })
        .then((res) => res.data)
    },
  })
}

function createCustomerOptons() {
  return mutationOptions({
    mutationKey: ["customers", "add"],
    mutationFn: (payload: CreateCustomer) => {
      return httpV1
        .request<Customer>({
          method: "POST",
          url: "/customers",
          data: payload,
        })
        .then((res) => res.data)
    },

    onSuccess: (data, con) => {
      toast.success("Customer created successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed. Please try Again", {
          description: error.message,
        })
      }
    },

    onSettled: (_data, _error, _variables, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey: ["customers"] })
    },
  })
}

function updateCustomerOptons() {
  return mutationOptions({
    mutationKey: ["customers", "update"],
    mutationFn: ({ payload, uid }: { payload: Partial<CreateCustomer>; uid: string }) => {
      return httpV1
        .request<Customer>({
          method: "PUT",
          url: `/customers/${uid}`,
          data: payload,
        })
        .then((res) => res.data)
    },

    onSuccess: (data, con) => {
      toast.success("Customer updated successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed. Please try Again", {
          description: error.message,
        })
      }
    },

    onSettled: (_data, _error, _variables, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey: ["customers"] })
    },
  })
}

function deleteCustomerOptions() {
  return mutationOptions({
    mutationKey: ["customers", "delete"],
    mutationFn: (uid: string) => {
      return httpV1
        .request({
          method: "DELETE",
          url: `/customers/${uid}`,
        })
        .then((res) => res.data)
    },

    onSuccess: (data) => {
      toast.success("Customer deleted successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed. Please try Again", {
          description: error.message,
        })
      }
    },

    onSettled: (_data, _error, _variables, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey: ["customers"] })
    },
  })
}

// Get payments for a customer
function getCustomerPaymentsOptions(uid: string) {
  return queryOptions({
    queryKey: ["customers", "payments", uid],
    queryFn: () =>
      httpV1
        .request<PaymentResponse>({
          method: "GET",
          url: `/customers/${uid}/payments`,
        })
        .then((res) => res.data),
  })
}

// Add payment for a customer
function createCustomerPaymentOptions(uid: string) {
  return mutationOptions({
    mutationKey: ["customers", "payments", "add", uid],
    mutationFn: (payload: any) =>
      httpV1
        .request({
          method: "POST",
          url: `/customers/${uid}/payments`,
          data: payload,
        })
        .then((res) => res.data),
    onSuccess: () => {
      toast.success("Payment added successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed to add payment", { description: error.message })
      }
    },
    onSettled: (_data, _error, _variables, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey: ["customers", "payments", uid] })
    },
  })
}

// Generate bill for customers
function generateCustomerBillOptions() {
  return mutationOptions({
    mutationKey: ["customers", "bills", "generate"],
    mutationFn: (payload: any) =>
      httpV1
        .request({
          method: "POST",
          url: "/customers/bills/generate",
          data: payload,
        })
        .then((res) => res.data),
    onSuccess: () => {
      toast.success("Bill generated successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed to generate bill", { description: error.message })
      }
    },
  })
}

// Toggle customer status
function toggleCustomerStatusOptions() {
  return mutationOptions({
    mutationKey: ["customers", "status", "toggle"],
    mutationFn: (payload: any) =>
      httpV1
        .request({
          method: "POST",
          url: "/customers/status/toggle",
          data: payload,
        })
        .then((res) => res.data),
    onSuccess: () => {
      toast.success("Customer status updated")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed to update status", { description: error.message })
      }
    },
  })
}

export function useGetCustomerList() {
  return useQuery(getCustomerListOptions())
}

export function useCreateCustomer() {
  return useMutation(createCustomerOptons())
}

export function useUpdateCustomer() {
  return useMutation(updateCustomerOptons())
}

export function useDeleteCustomer() {
  return useMutation(deleteCustomerOptions())
}

export function useGetCustomerPayments(uid: string) {
  return useQuery(getCustomerPaymentsOptions(uid))
}

export function useCreateCustomerPayment(uid: string) {
  return useMutation(createCustomerPaymentOptions(uid))
}

export function useGenerateCustomerBill() {
  return useMutation(generateCustomerBillOptions())
}

export function useToggleCustomerStatus() {
  return useMutation(toggleCustomerStatusOptions())
}
