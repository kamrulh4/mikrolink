import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export function useLogout() {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      // Clear localStorage
      if (typeof window !== "undefined") {
        localStorage.clear()
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
      }
    },
    onSuccess: () => {
      // Clear all queries
      queryClient.clear()
      toast.success("Successfully logged out")
      router.push("/")
    },
    onError: () => {
      toast.error("Logout failed")
    },
  })
}
