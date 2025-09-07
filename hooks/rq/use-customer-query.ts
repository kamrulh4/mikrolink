import { useQuery } from "@tanstack/react-query"
import { http } from "@/lib/xior"

export type customerResponse = {
  code: number
  next: string
  previous: any
  count: number
  results: Array<{
    id: number
    uid: string
    name: string
    email: string
    phone: string
    address: string
    nid: string
    is_free: boolean
    package: {
      id: number
      uid: string
      name: string
      speed_mbps: number
      price: string
      description: string
    }
    connection_start_date: any
    is_active: boolean
    ip_address: string
    mac_address: string
    username: string
    password: string
    connection_type: string
    credentials: {}
  }>
}

export function useGetCustomerList() {
  return useQuery({
    queryKey: ["customers", "list"],
    queryFn: () => {
      return http
        .request<customerResponse>({
          method: "get",
          url: "/api/v1/customers",
          params: {
            page: 1,
            page_size: 20,
          },
        })
        .then((res) => res.data)
    },
  })
}
