import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { httpV1 } from "@/lib/xior"

export function useDeactivateDueCustomersTask() {
  return useMutation({
    mutationFn: () => {
      return httpV1.request({
        method: "GET",
        url: "/tasks/deactive-due-customer",
      })
    },
    onSuccess: () => {
      toast.success("Deactivate due customers task started successfully!")
    },
    onError: (error) => {
      toast.error("Failed to deactivate due customers. Please try again.", {
        description: error.message,
      })
    },
  })
}
