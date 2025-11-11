import xior from "xior"

export const httpV1 = xior.create({
  baseURL: "https://api.billsheba.com/api/v1",
  cache: "no-store",
})

httpV1.interceptors.request.use((config) => {
  let token: string | null = null

  if (typeof window !== "undefined") {
    const cookies = document.cookie.split(";")
    const tokenCookie = cookies.find((cookie) => cookie.trim().startsWith("token="))
    if (tokenCookie) {
      token = tokenCookie.split("=")[1]
    }
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

// request.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error?.response?.status === 401) {
//       localStorage.clear()
//     }

//     return Promise.reject(error)
//   },
// )
