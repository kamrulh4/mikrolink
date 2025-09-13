import xior from "xior"

// const token = typeof window !== "undefined" ? localStorage.getItem("token") : null

export const httpV1 = xior.create({
  baseURL: "https://api.mikrolink.artsensebd.com/api/v1",
})

httpV1.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")

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
