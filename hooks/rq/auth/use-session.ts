import { useQuery } from "@tanstack/react-query"
import { httpV1 } from "@/lib/xior"

export function useSession() {
  return useQuery({
    queryKey: ["session"],
    queryFn: () => {
      return httpV1.request({ method: "GET", url: "/users/me" }).then((res) => res.data)
    },
    staleTime: 10 * 60 * 1000,
  })
}
