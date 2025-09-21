import { useMutation } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { XiorError } from "xior"
import { httpV1 } from "@/lib/xior"
import { LoginResponse } from "@/types/logins"

export function useLogin() {
  const router = useRouter()
  const searchParams = useSearchParams()

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (payload: { phone: string; password: string }) => {
      return httpV1
        .request<LoginResponse>({
          method: "post",
          url: "/users/login",
          data: payload,
        })
        .then((res) => res.data)
    },

    onSuccess: (data) => {
      toast.success("Successfully logged in")
      document.cookie = `token=${data.access_token}; path=/; max-age=${7 * 24 * 60 * 60}; secure; samesite=strict`

      const redirectTo = searchParams.get("redirect") || "/dashboard"
      router.push(redirectTo)
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Login failed. Please try Again", {
          description: error.message,
        })
      }
    },
  })
}
