import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { XiorError } from "xior"
import { httpV1 } from "@/lib/xior"
import { Payment, PaymentResponse } from "@/types/payments"

export function useGetPaymentList() {
  return useQuery({
    queryKey: ["payments", "list"],
    queryFn: () => {
      return httpV1
        .request<PaymentResponse>({
          method: "GET",
          url: "/payments",
          params: {
            page: 1,
            page_size: 10_000,
          },
        })
        .then((res) => res.data)
    },
  })
}

export function useCreatePayment() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["payments", "add"],
    mutationFn: (payload: any) => {
      return httpV1
        .request<Payment>({
          method: "POST",
          url: "/payments",
          data: payload,
        })
        .then((res) => res.data)
    },

    onSuccess: () => {
      toast.success("Payment created successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed. Please try Again", {
          description: JSON.stringify(error.response?.data),
        })
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["payments"] })
    },
  })
}

export function useDeletePayment() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["payments", "delete"],
    mutationFn: (uid: string) => {
      return httpV1
        .request({
          method: "DELETE",
          url: `/payments/${uid}`,
        })
        .then((res) => res.data)
    },

    onSuccess: () => {
      toast.success("Payment deleted successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed. Please try Again", {
          description: error.message,
        })
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["payments"] })
    },
  })
}
