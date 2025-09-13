import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { XiorError } from "xior"
import { httpV1 } from "@/lib/xior"
import { CreateCustomer } from "@/types/customers"
import { Package, PackageResponse } from "@/types/packages"

export function useGetPackgeList() {
  return useQuery({
    queryKey: ["packages", "list"],
    queryFn: () => {
      return httpV1
        .request<PackageResponse>({
          method: "GET",
          url: "/packages",
          params: {
            page: 1,
            page_size: 20,
          },
        })
        .then((res) => res.data)
    },
  })
}

export function useCreatePackage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["packages", "add"],
    mutationFn: (payload: CreateCustomer) => {
      return httpV1
        .request<Package>({
          method: "POST",
          url: "/packages",
          data: payload,
        })
        .then((res) => res.data)
    },

    onSuccess: () => {
      toast.success("Package created successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed. Please try Again", {
          description: error.message,
        })
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["packages"] })
    },
  })
}

export function useDeletePackage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["packages", "delete"],
    mutationFn: (uid: string) => {
      return httpV1
        .request({
          method: "DELETE",
          url: `/packages/${uid}`,
        })
        .then((res) => res.data)
    },

    onSuccess: (data) => {
      toast.success("Package deleted successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed. Please try Again", {
          description: error.message,
        })
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["packages"] })
    },
  })
}
