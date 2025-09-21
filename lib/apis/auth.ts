import "server-only"
import { cookies } from "next/headers"
import xior from "xior"

type Session = {
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

const http = xior.create({
  baseURL: "https://api.mikrolink.artsensebd.com/api/v1",
})

http.interceptors.request.use(async (config) => {
  const cookieStore = await cookies()

  const token = cookieStore.get("token")?.value

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export async function getSession() {
  try {
    const res = await http
      .request<Session>({ method: "GET", url: "/users/me" })
      .then((res) => res.data)

    return res
  } catch (error) {
    return null
  }
}
