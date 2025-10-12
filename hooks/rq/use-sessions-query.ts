import { queryOptions, useQuery } from "@tanstack/react-query"
import { toast } from "sonner"
import { XiorError } from "xior"
import { httpV1 } from "@/lib/xior"
import { SessionResponse } from "@/types/sessions"

function getSessionsOptions() {
  return queryOptions({
    queryKey: ["sessions", "active"],
    queryFn: () => {
      return httpV1
        .request<SessionResponse>({
          method: "GET",
          url: "/organizations/active/sessions",
        })
        .then((res) => res.data)
    },
    refetchInterval: 30000, // Refetch every 30 seconds to keep data fresh
  })
}

export function useGetActiveSessions() {
  return useQuery(getSessionsOptions())
}
