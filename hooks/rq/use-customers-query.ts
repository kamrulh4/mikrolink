import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { XiorError } from "xior"
import { httpV1 } from "@/lib/xior"
import { CreateCustomer, Customer, CustomerResponse } from "@/types/customers"

export function useGetCustomerList() {
  return useQuery({
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

export function useCreateCustomer() {
  const queryClient = useQueryClient()

  return useMutation({
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

    onSuccess: (data) => {
      toast.success("Customer created successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed. Please try Again", {
          description: error.message,
        })
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] })
    },
  })
}

export function useDeleteCustomer() {
  const queryClient = useQueryClient()

  return useMutation({
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

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] })
    },
  })
}
