import { useMutation } from "@tanstack/react-query"
import { redirect } from "next/navigation"
import { toast } from "sonner"
import { XiorError } from "xior"
import { httpV1 } from "@/lib/xior"
import { LoginResponse } from "@/types/logins"

export function useLogin() {
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
      localStorage.setItem("token", data.access_token)

      redirect("/dashboard")
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
