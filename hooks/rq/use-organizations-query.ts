import {
  mutationOptions,
  queryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query"
import { toast } from "sonner"
import { XiorError } from "xior"
import { httpV1 } from "@/lib/xior"
import {
  CreateOrganization,
  Organization,
  OrganizationResponse,
} from "@/types/organizations"

export function getOrganizationListOptions() {
  return queryOptions({
    queryKey: ["organizations", "list"],
    queryFn: () => {
      return httpV1
        .request<OrganizationResponse>({
          method: "GET",
          url: "/organizations",
          params: {
            page: 1,
            page_size: 10_000,
          },
        })
        .then((res) => res.data)
    },
  })
}

function createOrganizationOptions() {
  return mutationOptions({
    mutationKey: ["organizations", "add"],
    mutationFn: (payload: CreateOrganization) => {
      return httpV1
        .request<Organization>({
          method: "POST",
          url: "/organizations",
          data: payload,
        })
        .then((res) => res.data)
    },

    onSuccess: (data, con) => {
      toast.success("Organization created successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed. Please try Again", {
          description: error.message,
        })
      }
    },

    onSettled: (_data, _error, _variables, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey: ["organizations"] })
    },
  })
}

function updateOrganizationOptions() {
  return mutationOptions({
    mutationKey: ["organizations", "update"],
    mutationFn: ({
      payload,
      uid,
    }: {
      payload: Partial<CreateOrganization>
      uid: string
    }) => {
      return httpV1
        .request<Organization>({
          method: "PUT",
          url: `/organizations/${uid}`,
          data: payload,
        })
        .then((res) => res.data)
    },

    onSuccess: (data, con) => {
      toast.success("Organization updated successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed. Please try Again", {
          description: error.message,
        })
      }
    },

    onSettled: (_data, _error, _variables, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey: ["organizations"] })
    },
  })
}

function deleteOrganizationOptions() {
  return mutationOptions({
    mutationKey: ["organizations", "delete"],
    mutationFn: (uid: string) => {
      return httpV1
        .request({
          method: "DELETE",
          url: `/organizations/${uid}`,
        })
        .then((res) => res.data)
    },

    onSuccess: (data) => {
      toast.success("Organization deleted successfully")
    },
    onError: (error) => {
      if (error instanceof XiorError) {
        toast.error("Failed. Please try Again", {
          description: error.message,
        })
      }
    },

    onSettled: (_data, _error, _variables, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey: ["organizations"] })
    },
  })
}

export function useGetOrganizationList() {
  return useQuery(getOrganizationListOptions())
}

export function useCreateOrganization() {
  return useMutation(createOrganizationOptions())
}

export function useUpdateOrganization() {
  return useMutation(updateOrganizationOptions())
}

export function useDeleteOrganization() {
  return useMutation(deleteOrganizationOptions())
}
