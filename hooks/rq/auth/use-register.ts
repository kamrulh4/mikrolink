import { useMutation } from "@tanstack/react-query"
import { redirect } from "next/navigation"
import { toast } from "sonner"
import { XiorError } from "xior"
import { httpV1 } from "@/lib/xior"
import { RegisterPayload, RegisterResponse } from "@/types/register"

export function useRegiser() {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (payload: RegisterPayload) => {
      return httpV1
        .request<RegisterResponse>({
          method: "post",
          url: "/users/regiser",
          data: payload,
        })
        .then((res) => res.data)
    },

    onSuccess: () => {
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
