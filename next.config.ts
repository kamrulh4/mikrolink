import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  cacheComponents: true,
  output: "standalone", // ✅ Add this
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
}

export default nextConfig
