import xior from "xior"

// const token = typeof window !== "undefined" ? localStorage.getItem("token") : null

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidWlkIjoiZjM2ODYxYzgtYmNjMy00MTE3LTkyMDYtYTY5N2JjYjY1MzJlIiwiZmlyc3RfbmFtZSI6IkthbXJ1bCIsImxhc3RfbmFtZSI6Ikhhc2FuIiwicGhvbmUiOiIwMTc3ODg0OTgwOCIsImVtYWlsIjoiIiwia2luZCI6IlNVUEVSX0FETUlOIiwiZXhwIjoxNzU3ODYzOTU4LCJ0b2tlbl90eXBlIjoiYWNjZXNzIn0.HO0vNzGtlj5D4Q68vUMWSDdUysdglgXDJRji5pSfxCg"

export const http = xior.create({
  baseURL: "http://103.146.16.148:1111",
})

http.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`

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
