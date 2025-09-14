import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { XiorError } from "xior"
import { httpV1 } from "@/lib/xior"
import { User, UserResponse } from "@/types/users"

export function useGetUserList() {
  return useQuery({
    queryKey: ["users", "list"],
    queryFn: () => {
      return httpV1
        .request<UserResponse>({
          method: "GET",
          url: "/users",
          params: {
            page: 1,
            page_size: 10_000,
          },
        })
        .then((res) => res.data)
    },
  })
}

export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["users", "add"],
    mutationFn: (payload: any) => {
      return httpV1
        .request<User>({
          method: "POST",
          url: "/users",
          data: payload,
        })
        .then((res) => res.data)
    },

    onSuccess: () => {
      toast.success("User created successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed. Please try Again", {
          description: JSON.stringify(error.response?.data),
        })
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
  })
}

export function useDeleteUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["users", "delete"],
    mutationFn: (uid: string) => {
      return httpV1
        .request({
          method: "DELETE",
          url: `/users/${uid}`,
        })
        .then((res) => res.data)
    },

    onSuccess: () => {
      toast.success("User deleted successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed. Please try Again", {
          description: error.message,
        })
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
  })
}
