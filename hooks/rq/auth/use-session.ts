import { useQuery } from "@tanstack/react-query"
import { httpV1 } from "@/lib/xior"

export type Session = {
  id: number
  uid: string
  first_name: string
  last_name: string
  phone: string
  email: string
  gender: string
  image: string
  kind: string
  created_at: Date
  updated_at: Date
}

export function useSession() {
  return useQuery({
    queryKey: ["session"],
    queryFn: () => {
      return httpV1
        .request<Session>({ method: "GET", url: "/users/me" })
        .then((res) => res.data)
    },
    staleTime: 10 * 60 * 1000,
  })
}
